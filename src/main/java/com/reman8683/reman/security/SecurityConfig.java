package com.reman8683.reman.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {
    private final JwtProvider jwtProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // ID, Password 문자열을 Base64로 인코딩하여 전달하는 구조
                .httpBasic().disable()
                // 쿠키 기반이 아닌 JWT 기반이므로 사용하지 않음
                .csrf().disable()
                // CORS 설정
                .cors(c -> {
                            CorsConfigurationSource source = request -> {
                                // Cors 허용 패턴
                                CorsConfiguration config = new CorsConfiguration();
                                config.setAllowedOrigins(
                                        List.of("*")
                                );
                                config.setAllowedMethods(
                                        List.of("*")
                                );
                                return config;
                            };
                            c.configurationSource(source);
                        }
                )
                // Spring Security 세션 정책 : 세션을 생성 및 사용하지 않음
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests()
                // 회원가입과 로그인은 모두 승인
                .requestMatchers("/register", "/login").permitAll()
                // /admin으로 시작하는 요청은 ADMIN 권한이 있는 유저에게만 허용
                .requestMatchers("/admin/**").hasRole("ADMIN")
                // /user 로 시작하는 요청은 USER 권한이 있는 유저에게만 허용
                .requestMatchers("/user/**").hasRole("USER")
                .anyRequest().denyAll()
                .and()
                // JWT 인증 필터 적용
                .addFilterBefore(new JwtAuthenticationFilter(jwtProvider), UsernamePasswordAuthenticationFilter.class)
                // 에러 핸들링
                .exceptionHandling()
                .accessDeniedHandler((request, response, accessDeniedException) -> {
                    // 권한 문제가 발생했을 때 이 부분을 호출한다.
                    response.setStatus(403);
                    response.setCharacterEncoding("utf-8");
                    response.setContentType("text/html; charset=UTF-8");
                    response.getWriter().write("권한이 없는 사용자입니다.");
                })
                .authenticationEntryPoint((request, response, authException) -> {
                    // 인증문제가 발생했을 때 이 부분을 호출한다.
                    response.setStatus(401);
                    response.setCharacterEncoding("utf-8");
                    response.setContentType("text/html; charset=UTF-8");
                    response.getWriter().write("인증되지 않은 사용자입니다.");
                });

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}