package br.com.germplasmdatabase.api.model.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.germplasmdatabase.api.model.entities.User;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByLogin(String login);

}
