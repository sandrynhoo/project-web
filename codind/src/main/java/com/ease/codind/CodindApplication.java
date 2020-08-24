package com.ease.codind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com.ease.codind"})
@ComponentScan({"com.ease.security"})
@EntityScan(basePackages = {"com.ease.model"})
@EnableJpaRepositories(basePackages= {"com.ease.repository"})

public class CodindApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodindApplication.class, args);
	}

}
