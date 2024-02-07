package com.dw.adventure_of_link.service;

import java.util.*;

import com.dw.adventure_of_link.dto.AuthorityDto;
import com.dw.adventure_of_link.exception.InvalidRequestException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dw.adventure_of_link.dto.UserDto;
import com.dw.adventure_of_link.model.Authority;
import com.dw.adventure_of_link.model.User;
import com.dw.adventure_of_link.repository.UserRepository;
import com.dw.adventure_of_link.jwtauthority.util.SecurityUtil;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public UserDto signup(UserDto userDto) {
        if (userRepository.findOneWithAuthoritiesByUsername(userDto.getUsername())
        		.orElse(null) != null) {
            throw new InvalidRequestException("Duplicated member","이미 가입되어 있는 유저입니다.");
        }

        Authority authority = new Authority();
        authority.setAuthorityName("ROLE_USER");

        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setName(userDto.getName());
        user.setNickname(userDto.getNickname());
        user.setAuthorities(Collections.singleton(authority));
        user.setBirthDate(userDto.getBirthDate());
        user.setGender(userDto.getGender());
        user.setEmail(userDto.getEmail());
        user.setActivated(true);

        return UserDto.from(userRepository.save(user));
    }

    @Transactional
    public List<UserDto> getAllUserInfo() {
        List<User> userList = userRepository.findAll();
        if (userList.isEmpty()) {
            throw new InvalidRequestException("users","member not found");
        }

        List<UserDto> userDtoList = new ArrayList<UserDto>();
        userList.forEach(user -> {
            UserDto userDto = new UserDto();
            userDto.setUsername(user.getUsername());
            userDto.setPassword(null);
            userDto.setName(user.getName());
            userDto.setNickname(user.getNickname());
            userDto.setBirthDate(user.getBirthDate().toString());
            userDto.setGender(user.getGender().toString());
            userDto.setEmail(user.getEmail());
            Set<AuthorityDto> authorityDtoSet = new HashSet<>();
            user.getAuthorities().forEach(authority -> authorityDtoSet.add(new AuthorityDto(authority.getAuthorityName())));
            userDto.setAuthorityDtoSet(authorityDtoSet);
            userDtoList.add(userDto);
        });

        return userDtoList;
    }

    @Transactional(readOnly = true)
    public UserDto getUserWithAuthorities(String username) {
        return UserDto.from(userRepository.findOneWithAuthoritiesByUsername(username)
        		.orElseThrow(() -> new InvalidRequestException(username,"member not found")));
    }

    @Transactional(readOnly = true)
    public UserDto getCurrentUserWithAuthorities() {
        return UserDto.from(
                SecurityUtil.getCurrentUsername()
                        .flatMap(userRepository::findOneWithAuthoritiesByUsername)
                        .orElseThrow(() -> new InvalidRequestException("No current user","Current member not found"))
        );
    }
}