package com.dw.adventure_of_link.repository;

import com.dw.adventure_of_link.model.Board;
import com.dw.adventure_of_link.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByBoard(Optional<Board> board);
}
