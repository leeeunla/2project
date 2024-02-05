package com.dw.adventure_of_link.controller;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.dto.BoardDto;
import com.dw.adventure_of_link.dto.CommentDto;
import com.dw.adventure_of_link.model.Board;
import com.dw.adventure_of_link.model.Comment;
import com.dw.adventure_of_link.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000",
        methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class CommentController {
    final private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/api/comment/{board_id}")
    public ResponseEntity<BaseResponse<List<Comment>>> getCommentsByBoardId(@PathVariable Long board_id) {
        return new ResponseEntity<>(
                commentService.getCommentsByBoardId(board_id),
                HttpStatus.OK);
    }

    @PostMapping("/api/comment")
    public ResponseEntity<BaseResponse<Comment>> createComments(@RequestBody CommentDto commentDto) {
        return new ResponseEntity<>(
                commentService.createComments(commentDto),
                HttpStatus.OK);
    }
}
