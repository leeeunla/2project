package com.dw.adventure_of_link.repository;

import com.dw.adventure_of_link.model.Score;
import com.dw.adventure_of_link.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ScoreRepository extends JpaRepository<Score, Long> {

    List<Score> findAllByUser(User user);
}
