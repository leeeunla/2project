package com.dw.adventure_of_link.service;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.dto.BoardDto;
import com.dw.adventure_of_link.enumstatus.ResultCode;
import com.dw.adventure_of_link.exception.InvalidRequestException;
import com.dw.adventure_of_link.model.User;
import com.dw.adventure_of_link.repository.UserRepository;
import com.dw.adventure_of_link.model.Board;
import com.dw.adventure_of_link.repository.BoardRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    @Autowired
    public BoardService(BoardRepository boardRepository, UserRepository userRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }

    public BaseResponse<Void> createBoard(BoardDto boardDto) {
        Optional<User> user = userRepository.findOneWithAuthoritiesByUsername(boardDto.getAuthor());
        if (user.isEmpty()) {
            throw new InvalidRequestException("Invalid author", "글쓰기 권한이 없습니다");
        }
        // Board 객체 생성
        Board board = new Board();
        board.setCreateAt(LocalDateTime.now());
        board.setAuthor(userRepository.findByUsername(boardDto.getAuthor()));
        board.setCategory(boardDto.getCategory());
        board.setText(boardDto.getText());
        board.setTitle(boardDto.getTitle());

        // 리포지토리 저장
        boardRepository.save(board);
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                null,
                "게시글 생성이 완료되었습니다");
    }

    public BaseResponse<List<Board>> getAllBoard() {
        List<Board> boards = boardRepository.findAll();
        if (boards.isEmpty()) {
            throw new InvalidRequestException("Boards empty", "게시글이 존재하지 않습니다");
        }
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                boards,
                ResultCode.SUCCESS.getMsg());
    }

    public BaseResponse<List<Board>> getBoardByCategory(String category) {
        List<Board> boards = boardRepository.findByCategory(category);
        if (boards.isEmpty()) {
            throw new InvalidRequestException("Boards empty", "게시글이 존재하지 않습니다");
        }
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                boards,
                ResultCode.SUCCESS.getMsg());
    }

    public BaseResponse<Board> getBoardById(Long id) {
        Optional<Board> board = boardRepository.findById(id);
        if (board.isEmpty()) {
            throw new InvalidRequestException("Boards empty", "게시글이 존재하지 않습니다");
        }
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                board.get(),
                ResultCode.SUCCESS.getMsg());
    }

    public BaseResponse<Long> deleteBoard(Long id) {
        Optional<Board> board = boardRepository.findById(id);
        if (board.isEmpty()) {
            throw new InvalidRequestException(Long.toString(id), "해당 게시글이 존재하지 않습니다");
        }
        boardRepository.deleteById(id);
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                id,
                "게시글 삭제가 완료되었습니다");
    }
}
