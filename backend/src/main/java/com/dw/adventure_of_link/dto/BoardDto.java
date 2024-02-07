package com.dw.adventure_of_link.dto;

import jakarta.validation.constraints.NotBlank;

public class BoardDto {

	@NotBlank
    private String author;
    @NotBlank
    private String title;
    @NotBlank
    private String text;
    @NotBlank
    private String category;

	private String src;
    
	public BoardDto() {
		super();
	}
	public BoardDto(@NotBlank String author, @NotBlank String title, @NotBlank String text, @NotBlank String category, String src) {
		super();
		this.author = author;
		this.title = title;
		this.text = text;
		this.category = category;
		this.src = src;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}
}
