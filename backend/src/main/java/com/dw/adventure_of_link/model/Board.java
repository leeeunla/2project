package com.dw.adventure_of_link.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

// Category 종류
// notice
// update
// gameinfo
// gameobject
// gamemapinfo
// qna
// walkthrough
// free

@Entity
@Table(name = "board")
public class Board {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	private User author;
	
	@Column(nullable = false)
	private String title;
	
	@Column(nullable = false, length = 3000)
	private String text;
	
	@Column(nullable = false)
	private String category;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime createAt;

	public Board() {
		super();
	}

	public Board(Long id, User author, String title, String text, String category, LocalDateTime createAt) {
		this.id = id;
		this.author = author;
		this.title = title;
		this.text = text;
		this.category = category;
		this.createAt = createAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
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

	public LocalDateTime getCreateAt() {
		return createAt;
	}

	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}
}



