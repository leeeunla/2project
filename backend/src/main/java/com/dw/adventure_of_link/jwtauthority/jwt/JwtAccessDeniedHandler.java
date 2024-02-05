package com.dw.adventure_of_link.jwtauthority.jwt;

import com.dw.adventure_of_link.dto.BaseResponse;
import com.dw.adventure_of_link.enumstatus.ResultCode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
   @Override
   public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
      //필요한 권한이 없이 접근하려 할때 403
      //response.sendError(HttpServletResponse.SC_FORBIDDEN);

      // 커스텀 응답을 생성하는 작업
      BaseResponse<Exception> errorResponse = new BaseResponse<>(
              ResultCode.ERROR.name(),
              accessDeniedException,
              accessDeniedException.getMessage()
      );

      // JSON 응답 생성
      String jsonResponse = new ObjectMapper().writeValueAsString(errorResponse);

      // HTTP 응답 설정
      response.setCharacterEncoding("UTF-8");
      response.setContentType("application/json");
      response.setStatus(HttpServletResponse.SC_FORBIDDEN);

      // 응답 전송
      try (PrintWriter writer = response.getWriter()) {
         writer.write(jsonResponse);
         writer.flush();
      } catch (IOException e) {
         e.printStackTrace();
      }
   }
}