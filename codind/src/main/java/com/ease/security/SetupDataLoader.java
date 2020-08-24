package com.ease.security;

import java.util.Arrays;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ease.model.Roles;
import com.ease.model.Usuario;
import com.ease.repository.CodindRepository;
import com.ease.repository.RolesRepository;

public class SetupDataLoader implements
ApplicationListener<ContextRefreshedEvent> {
	boolean alreadySetup = false;
	
	 
	    @Autowired
	    private RolesRepository roleRepository;
	   

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		if (alreadySetup)
            return;
       
 
          
        createRoleIfNotFound("ROLE_ADMIN");
        createRoleIfNotFound("ROLE_USER");
 
        
 
        alreadySetup = true;
		
		 
	   
		
	}
	@Transactional
    Roles createRoleIfNotFound( String name) {
 
        Roles role = roleRepository.findByRole(name);
        if (role == null) {
            role = new Roles();
            role.setRole(name);
            roleRepository.save(role);
        }
        return role;
    }

}
