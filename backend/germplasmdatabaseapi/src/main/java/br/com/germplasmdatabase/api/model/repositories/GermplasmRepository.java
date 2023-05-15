package br.com.germplasmdatabase.api.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.germplasmdatabase.api.model.entities.Germplasm;

public interface GermplasmRepository extends JpaRepository<Germplasm, Integer> {

}
