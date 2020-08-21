package com.ease.repository;

import org.springframework.data.repository.CrudRepository;

import com.ease.model.Usuario;

public interface CodindRepository extends CrudRepository<Usuario,String>{
	Usuario findById(int id);
	
}
