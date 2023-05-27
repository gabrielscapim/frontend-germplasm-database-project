package br.com.germplasmdatabase.api.service;

import org.springframework.stereotype.Service;

import br.com.germplasmdatabase.api.model.entities.User;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    public String gerarToken(User usuario) {
        return JWT.create()
                .withIssuer("user")
                .withSubject(usuario.getUsername())
                .withClaim("id", usuario.getId())
                .withExpiresAt(LocalDateTime.now()
                        .plusMinutes(30)
                        .toInstant(ZoneOffset.of("-03:00"))
                ).sign(Algorithm.HMAC256("secreta"));
    }
    
    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256("secreta"))
                .withIssuer("user")
                .build().verify(token).getSubject();

    }
    
}