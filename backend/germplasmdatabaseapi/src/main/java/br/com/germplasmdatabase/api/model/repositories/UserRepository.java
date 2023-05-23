package br.com.germplasmdatabase.api.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.germplasmdatabase.api.model.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
