package com.dw.adventure_of_link.repository;

import com.dw.adventure_of_link.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByCategory(String category);
}
