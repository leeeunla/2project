package com.dw.adventure_of_link.dto;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Set;
import java.util.stream.Collectors;

import com.dw.adventure_of_link.enumstatus.Gender;
import com.dw.adventure_of_link.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UserDto {

	@NotNull
	@NotBlank
	@Size(min = 3, max = 50)
	private String username;

	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@NotNull
	@NotBlank
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&*!])[A-Za-z\\d@#$%^&*!]{8,20}$",
			message = "영문 숫자 특수문자를 포함한 8~20자리로 입력해주세요")
	private String password;

	@NotNull
	@NotBlank
	@Size(min = 3, max = 50)
	private String name;

	@NotNull
	@NotBlank
	@Size(min = 3, max = 50)
	private String nickname;

	@NotBlank(message = "생년월일을 입력해주세요, 공백 문자는 포함하면 안됩니다.")
	@Pattern(regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$", message = "날짜형식(YYYY-MM-DD)을 확인해주세요")
	private String birthDate; // 생일!

	@Pattern(regexp = "^(MAN|WOMAN)$", message = "MAN이나 WOMAN 중 하나를 선택해주세요")
	private String gender;

	@Pattern(regexp = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", message = "아이디@사이트이름.com와 같은 형식으로 입력해주세요. / 없다면 공란허용")
	private String email;

	private Set<AuthorityDto> authorityDtoSet;
	
	public UserDto() {
		super();
	}

	public UserDto(String username, String password, String name, String nickname, String birthDate, String gender, String email, Set<AuthorityDto> authorityDtoSet) {
		this.username = username;
		this.password = password;
		this.name = name;
		this.nickname = nickname;
		this.birthDate = birthDate;
		this.gender = gender;
		this.email = email;
		this.authorityDtoSet = authorityDtoSet;
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
		return LocalDate.parse(birthDate,
				DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public Gender getGender() {
		return Gender.valueOf(gender);
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<AuthorityDto> getAuthorityDtoSet() {
		return authorityDtoSet;
	}

	public void setAuthorityDtoSet(Set<AuthorityDto> authorityDtoSet) {
		this.authorityDtoSet = authorityDtoSet;
	}

	public static UserDto from(User user) {
		if(user == null) return null;
		
		Set<AuthorityDto> authorityDtoSet = user.getAuthorities().stream()
				.map(authority -> new AuthorityDto(authority.getAuthorityName()))
				.collect(Collectors.toSet());
		
		return new UserDto(user.getUsername(), null, user.getName(), user.getNickname(),
				user.getBirthDate().toString(), user.getGender().toString(),
				user.getEmail(), authorityDtoSet);
	}
	
}
