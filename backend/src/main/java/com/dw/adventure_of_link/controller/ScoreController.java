package com.dw.adventure_of_link.controller;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.dto.BoardDto;
import com.dw.adventure_of_link.dto.ScoreDto;
import com.dw.adventure_of_link.model.Board;
import com.dw.adventure_of_link.model.Score;
import com.dw.adventure_of_link.service.ScoreService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000",
        methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class ScoreController {
    private final ScoreService scoreService;

    @Autowired
    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @PostMapping("/api/score")
    public ResponseEntity<BaseResponse<Void>> createScore(@RequestBody @Valid ScoreDto scoreDto) {
        return new ResponseEntity<>(
                scoreService.createScore(scoreDto),
                HttpStatus.CREATED);
    }

    @GetMapping("/api/score")
    public ResponseEntity<BaseResponse<List<ScoreDto>>> getAllScore() {
        return new ResponseEntity<>(
                scoreService.getAllScore(),
                HttpStatus.OK);
    }
}
