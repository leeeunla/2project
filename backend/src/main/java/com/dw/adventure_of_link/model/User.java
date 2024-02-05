package com.dw.adventure_of_link.model;

import java.time.LocalDate;
import java.util.Set;

import com.dw.adventure_of_link.enumstatus.Gender;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "`user`")
public class User {
	@Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "username", length = 50, unique = true)
    private String username;

    @Column(name = "password", length = 100)
	@JsonIgnore
    private String password;

	@Column(name = "name", length = 50)
	private String name;

    @Column(name = "nickname", length = 50)
    private String nickname;

	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	private LocalDate birthDate;

	@Column(nullable = false, length = 5)
	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(nullable = false, length = 30)
	private String email;

    @Column(name = "activated")
    private boolean activated;
    
    @ManyToMany
    @JoinTable(
    name = "user_authority",
    joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
    inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;

	public User() {
		super();
	}

	public User(Long userId, String username, String password, String name, String nickname, LocalDate birthDate, Gender gender, String email, boolean activated, Set<Authority> authorities) {
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.name = name;
		this.nickname = nickname;
		this.birthDate = birthDate;
		this.gender = gender;
		this.email = email;
		this.activated = activated;
		this.authorities = authorities;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	public Set<Authority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Set<Authority> authorities) {
		this.authorities = authorities;
	}
}
