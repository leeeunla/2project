package com.dw.adventure_of_link.jwtauthority.jwt;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.enumstatus.ResultCode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
   @Override
   public void commence(HttpServletRequest request,
                        HttpServletResponse response,
                        AuthenticationException authException) throws IOException {
      // 유효한 자격증명을 제공하지 않고 접근하려 할때 401
      //response.sendError(HttpServletResponse.SC_UNAUTHORIZED);

      // 커스텀 응답을 생성하는 작업
      BaseResponse<Exception> errorResponse = new BaseResponse<>(
              ResultCode.ERROR.name(),
              authException,
              authException.getMessage()
      );

      // JSON 응답 생성
      String jsonResponse = new ObjectMapper().writeValueAsString(errorResponse);

      // HTTP 응답 설정
      response.setCharacterEncoding("UTF-8");
      response.setContentType("application/json");
      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

      // 응답 전송
      try (PrintWriter writer = response.getWriter()) {
         writer.write(jsonResponse);
         writer.flush();
      } catch (IOException e) {
         e.printStackTrace();
      }
   }
}