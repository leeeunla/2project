package com.dw.adventure_of_link.controller;

import com.dw.adventure_of_link.dto.AuthorityDto;
import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.enumstatus.ResultCode;
import com.dw.adventure_of_link.dto.LoginDto;
import com.dw.adventure_of_link.dto.TokenDto;
import com.dw.adventure_of_link.exception.InvalidRequestException;
import com.dw.adventure_of_link.jwtauthority.jwt.JwtFilter;
import com.dw.adventure_of_link.jwtauthority.jwt.TokenProvider;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class AuthController {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public AuthController(TokenProvider tokenProvider, 
    		AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<BaseResponse<TokenDto>> authorize(@RequestBody @Valid LoginDto loginDto) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), 
                		loginDto.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject()
        		.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        Set<String> setAuthorities = authentication.getAuthorities().stream()
                .map(Object::toString).collect(Collectors.toSet());;

        return new ResponseEntity<>(
                new BaseResponse<>(ResultCode.SUCCESS.name(),
                        new TokenDto(jwt, loginDto.getUsername(), setAuthorities),
                        ResultCode.SUCCESS.getMsg()),
                httpHeaders,
                HttpStatus.OK);
    }

    @PostMapping("/admin/authenticate")
    public ResponseEntity<BaseResponse<TokenDto>> adminAuthorize(@RequestBody @Valid LoginDto loginDto) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(),
                        loginDto.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        Set<String> setAuthorities = authentication.getAuthorities().stream()
                .map(Object::toString).collect(Collectors.toSet());

        if(!setAuthorities.contains("ROLE_ADMIN")) {
            throw new InvalidRequestException("Invalid user","관리자 권한이 없습니다.");
        }

        return new ResponseEntity<>(
                new BaseResponse<>(ResultCode.SUCCESS.name(),
                        new TokenDto(jwt, loginDto.getUsername(), setAuthorities),
                        ResultCode.SUCCESS.getMsg()),
                httpHeaders,
                HttpStatus.OK);
    }
}