package com.dw.adventure_of_link.dto;

import java.util.Set;

public class TokenDto {

	private String token;

	private String username;

	private Set<String> authoritySet;

	public TokenDto() {
		super();
	}

	public TokenDto(String token, String username, Set<String> authoritySet) {
		this.token = token;
		this.username = username;
		this.authoritySet = authoritySet;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Set<String> getAuthoritySet() {
		return authoritySet;
	}

	public void setAuthoritySet(Set<String> authoritySet) {
		this.authoritySet = authoritySet;
	}
}
