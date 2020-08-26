package com.ease.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends  WebSecurityConfigurerAdapter {
	@Autowired
	private ImplementsUserDetails userDetailsService;
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.csrf().disable().authorizeRequests()
		.antMatchers( "/","/cadastro","/fase2","/fase","/tutorial","/fase3","/fase4").permitAll()
		.antMatchers( HttpMethod.GET,"/mostra","/{id}","/update/{id}","/deletar").hasRole("ADMIN")
		.antMatchers( HttpMethod.POST,"/update/{id}","/deletar").hasRole("ADMIN")
		.anyRequest().authenticated()
		.and().formLogin()
		.loginPage("/login")
		.loginProcessingUrl("/login")
		.defaultSuccessUrl("/")
		.failureUrl("/login?error=true")
		.usernameParameter("email")
		.passwordParameter("senha")
		.permitAll()
		.and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
		.logoutSuccessUrl("/");
		System.out.println("chamou");
		
	//	http.formLogin().loginPage("/log")
	//	.loginProcessingUrl("/perform_login")
	//	.defaultSuccessUrl("/",true)
	//	.failureUrl("/log?error=true");
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
		
	}

	@Override
	public void configure(WebSecurity web) throws Exception{
		web.ignoring().antMatchers("/materialize/**", "/style/**","/css/**","/js/**","/fonts/**","/imagens/**");
	}
	

}
