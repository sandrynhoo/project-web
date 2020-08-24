package com.ease.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ease.model.Roles;

public interface RolesRepository extends CrudRepository<Roles,String> {
	Roles findByRole(String role);

}
