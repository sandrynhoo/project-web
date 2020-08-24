package com.ease.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import com.ease.model.Usuario;
import com.ease.repository.CodindRepository;

@Repository
@Transactional
public class ImplementsUserDetails implements UserDetailsService {
	@Autowired
		private CodindRepository ur;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = ur.findByEmail(username);
		if(usuario==null) {
			throw new UsernameNotFoundException("usuario não encontrado");
			
		}
		return new User(usuario.getUsername(),usuario.getPassword(),true,true,true,true,usuario.getAuthorities());
	}

}

