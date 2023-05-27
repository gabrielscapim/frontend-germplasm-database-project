package br.com.germplasmdatabase.api.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import br.com.germplasmdatabase.api.model.repositories.UserRepository;
import br.com.germplasmdatabase.api.service.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class FilterToken extends OncePerRequestFilter {

	@Autowired
	private TokenService tokenService;
	
	@Autowired
	private UserRepository usuarioRepository;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

        String token;

        var authorizationHeader = request.getHeader("Authorization");

        if(authorizationHeader != null) {
        	System.out.println("entrou");
        	System.out.println(authorizationHeader);
            token = authorizationHeader.replace("Bearer ", "");
            var subject = this.tokenService.getSubject(token);

            var usuario = this.usuarioRepository.findByLogin(subject);

            var authentication = new UsernamePasswordAuthenticationToken(usuario,
                    null, usuario.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        System.out.println("não entrou");
        filterChain.doFilter(request, response);
		
	}

}