package com.dw.adventure_of_link.dto;

import jakarta.validation.constraints.NotBlank;

public class ScoreDto {

    private String username;

    private int score;

    public ScoreDto() {
    }

    public ScoreDto(String username, int score) {
        this.username = username;
        this.score = score;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
