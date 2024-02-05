package com.dw.adventure_of_link.service;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.dto.BoardDto;
import com.dw.adventure_of_link.dto.CommentDto;
import com.dw.adventure_of_link.enumstatus.ResultCode;
import com.dw.adventure_of_link.exception.InvalidRequestException;
import com.dw.adventure_of_link.model.Board;
import com.dw.adventure_of_link.model.Comment;
import com.dw.adventure_of_link.repository.BoardRepository;
import com.dw.adventure_of_link.repository.CommentRepository;
import com.dw.adventure_of_link.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CommentService {
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    @Autowired
    public CommentService(BoardRepository boardRepository, CommentRepository commentRepository, UserRepository userRepository) {
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }

    public BaseResponse<List<Comment>> getCommentsByBoardId(Long id) {
        Optional<Board> board = boardRepository.findById(id);
        if (board.isEmpty()) {
            throw new InvalidRequestException("Boards empty", "게시글이 존재하지 않습니다");
        }
        List<Comment> comments = commentRepository.findAllByBoard(board);
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                comments,
                ResultCode.SUCCESS.getMsg());
    }

    public BaseResponse<Comment> createComments(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setCreateAt(LocalDateTime.now());
        comment.setAuthor(userRepository.findByUsername(commentDto.getAuthor()));
        comment.setText(commentDto.getText());
        comment.setBoard(boardRepository.findById(commentDto.getBoardId()).get());

        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                commentRepository.save(comment),
                ResultCode.SUCCESS.getMsg());
    }
}
