package br.com.germplasmdatabase.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.germplasmdatabase.api.model.entities.Germplasm;
import br.com.germplasmdatabase.api.model.repositories.GermplasmRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/germplasm")
public class GermplasmController {
	
	@Autowired
	private GermplasmRepository germplasmRepository;
	
	@GetMapping
	public Iterable<Germplasm> getGermplasms() {
		return germplasmRepository.findAll();
	}
	
	@RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
	public @ResponseBody Germplasm saveGermplasm(@RequestBody Germplasm germplasm) {
		germplasmRepository.save(germplasm);
		return germplasm;
	}
}