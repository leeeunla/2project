package com.dw.adventure_of_link.service;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.dto.BoardDto;
import com.dw.adventure_of_link.dto.ScoreDto;
import com.dw.adventure_of_link.enumstatus.ResultCode;
import com.dw.adventure_of_link.exception.InvalidRequestException;
import com.dw.adventure_of_link.model.Score;
import com.dw.adventure_of_link.model.User;
import com.dw.adventure_of_link.repository.ScoreRepository;
import com.dw.adventure_of_link.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ScoreService {
    private final UserRepository userRepository;
    private final ScoreRepository scoreRepository;

    @Autowired
    public ScoreService(UserRepository userRepository, ScoreRepository scoreRepository) {
        this.userRepository = userRepository;
        this.scoreRepository = scoreRepository;
    }

    public BaseResponse<Void> createScore(ScoreDto scoreDto) {
        Optional<User> user = userRepository.findOneWithAuthoritiesByUsername(scoreDto.getUsername());
        if (user.isEmpty()) {
            throw new InvalidRequestException("Invalid user name", "user가 없습니다");
        }
        List<Score> prevScoreList = scoreRepository.findAllByUser(user.get());

        Score highestScore = prevScoreList.stream().max(Comparator.comparingInt((Score::getHighScore))).orElse(null);

        Score score = new Score();
        score.setUser(user.get());
        if (highestScore == null || scoreDto.getScore() > highestScore.getHighScore()) {
            score.setHighScore(scoreDto.getScore());
            scoreRepository.save(score);
        }

        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                null,
                "Score 생성이 완료되었습니다");
    }

    public BaseResponse<List<ScoreDto>> getAllScore() {
        List<Score> scoreList = scoreRepository.findAll();
        if (scoreList.isEmpty()) {
            throw new InvalidRequestException("no score", "score가 없습니다");
        }
        List<ScoreDto> scoreDtoList = new ArrayList<>();
        scoreList.forEach(data -> {
            ScoreDto scoreDto = new ScoreDto();
            scoreDto.setUsername(data.getUser().getUsername());
            scoreDto.setScore(data.getHighScore());
            scoreDtoList.add(scoreDto);
        });

        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                scoreDtoList,
                ResultCode.SUCCESS.getMsg());
    }
}
