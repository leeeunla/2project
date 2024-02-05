package com.dw.adventure_of_link.dto;

import jakarta.validation.constraints.NotBlank;

public class CommentDto {
    @NotBlank
    private String author;
    @NotBlank
    private String text;
    @NotBlank
    private Long boardId;

    public CommentDto() {
    }

    public CommentDto(String author, String text, Long boardId) {
        this.author = author;
        this.text = text;
        this.boardId = boardId;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getBoardId() {
        return boardId;
    }

    public void setBoardId(Long boardId) {
        this.boardId = boardId;
    }
}
