package com.dw.adventure_of_link.controller;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.dto.BoardDto;
import com.dw.adventure_of_link.enumstatus.ResultCode;
import com.dw.adventure_of_link.model.Board;
import com.dw.adventure_of_link.service.BoardService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000",
        methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class BoardController {
    private final BoardService boardService;
    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping("/api/board")
    public ResponseEntity<BaseResponse<Void>> createBoard(@RequestBody @Valid BoardDto boardDto) {
        return new ResponseEntity<>(
                boardService.createBoard(boardDto),
                HttpStatus.CREATED);
    }

    @GetMapping("/api/board")
    public ResponseEntity<BaseResponse<List<Board>>> getAllBoard() {
        return new ResponseEntity<>(
                boardService.getAllBoard(),
                HttpStatus.OK);
    }

    @GetMapping("/api/board/{category}")
    public ResponseEntity<BaseResponse<List<Board>>> getBoardByCategory(@PathVariable String category) {
        return new ResponseEntity<>(
                boardService.getBoardByCategory(category),
                HttpStatus.OK);
    }

    @GetMapping("/api/board-any/{id}")
    public ResponseEntity<BaseResponse<Board>> getBoardById(@PathVariable Long id) {
        return new ResponseEntity<>(
                boardService.getBoardById(id),
                HttpStatus.OK);
    }

    @DeleteMapping("/api/board/delete/{id}")
    public ResponseEntity<BaseResponse<Long>> deleteBoard(@PathVariable Long id) {
        return new ResponseEntity<>(
                boardService.deleteBoard(id),
                HttpStatus.OK);
    }

    @GetMapping("api/board/id")
    public ResponseEntity<BaseResponse<Void>> getTest(@RequestHeader("X-LoginID") String id) {
        return new ResponseEntity<>(
                new BaseResponse<>(ResultCode.SUCCESS.name(),
                        null,
                        id),
                HttpStatus.OK);
    }
}
