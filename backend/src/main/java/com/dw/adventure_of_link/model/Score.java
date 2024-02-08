package com.dw.adventure_of_link.model;

import jakarta.persistence.*;

@Entity
@Table(name = "`score`")
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    @Column(name = "high_score")
    private int highScore;

    public Score() {
    }

    public Score(Long id, User user, int highScore) {
        this.id = id;
        this.user = user;
        this.highScore = highScore;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getHighScore() {
        return highScore;
    }

    public void setHighScore(int highScore) {
        this.highScore = highScore;
    }
}
