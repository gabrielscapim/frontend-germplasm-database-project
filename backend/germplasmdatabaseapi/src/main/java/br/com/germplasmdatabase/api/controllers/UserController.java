package br.com.germplasmdatabase.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.germplasmdatabase.api.model.entities.User;
import br.com.germplasmdatabase.api.model.repositories.UserRepository;

@Controller
@RequestMapping("/api/user")
public class UserController {

	private UserRepository userRepository;
	
	public UserController(@Autowired UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@GetMapping()
	public ResponseEntity getAll() {
		return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity post(@RequestBody User user) {
		try {
			return new ResponseEntity<>(userRepository.save(user), HttpStatus.CREATED);
		} catch (Exception error) {
			return new ResponseEntity<>(error.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
