package com.ease.codind;

import java.util.Arrays;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ease.model.Roles;

import com.ease.model.Usuario;
import com.ease.repository.CodindRepository;
import com.ease.repository.RolesRepository;



@Controller

public class HomeController {
		
	@Autowired
	private CodindRepository repo;
	@Autowired
	private RolesRepository repil;
	private String pass;
	
	
	
	 

	@RequestMapping(value="/",method=RequestMethod.GET)
	
	public String Index() {
			
		return "html/index";
	}
	
	@RequestMapping("/fase")
	public String FirstPhase() {
		
		return "html/firstphase";
	}
	@RequestMapping("/fim")
	public String GameOver() {
		
		return "html/gameover";
	}
	@RequestMapping("/tutorial")
	public String tutorial() {
		
		return "html/tutorial";
	}

	@RequestMapping(value= "/cadastro",method=RequestMethod.GET)
	public ModelAndView CadUser() {
		ModelAndView model = new ModelAndView("html/cadUser");
		Iterable<Usuario> usuarios = repo.findAll();
		model.addObject("usuarios", usuarios);
		return model;
		
	}
	@RequestMapping(value= "/cadastro",method=RequestMethod.POST)
	public String CadUser(@Valid Usuario usuario,BindingResult result,RedirectAttributes atr ) {
		if(result.hasErrors()) {
			atr.addFlashAttribute("mensagem","verifique os campos!");
			return "redirect:/cadastro";
		}
		
		
		usuario.setDecrypt(usuario.getSenha());
		pass=new BCryptPasswordEncoder().encode(usuario.getSenha());
		usuario.setSenha(pass);
		usuario.setRoles(Arrays.asList(repil.findByRole("ROLE_ADMIN")));
		repo.save(usuario);
		
		
		atr.addFlashAttribute("mensagem","Usuario salvo com sucesso!");
		
		return "redirect:/cadastro";
	}
	@RequestMapping("/faselog")
	public String FirstPhaseLog() {
		
		return "html/firstphaselog";
	}
	
	@RequestMapping("/fase2")
	public String SecondPhase() {
		return "html/secondphase";
	}
	@RequestMapping("/fase2log")
	public String SecondPhaseLog() {
		return "html/secondphaselog";
	}
	@RequestMapping("/fase3")
	public String ThirdPhase() {
		
		return "html/thirdphase";
	}
	@RequestMapping("/tutoriallog")
	public String TutorialLog() {
		return "html/tutoriallog";
	}

	@RequestMapping("/indLogUser")
	public String IndLoguser() {
		
		return "html/indexLogUser";
	}
	@RequestMapping("/indLogAdm")
	public String IndLogadm() {
		return "html/indexLogAdm";
	}
	@RequestMapping(value="/login",method=RequestMethod.GET)
	public String LogUser() {
		
		return "html/logUser";
	}
	@RequestMapping(value= "/login",method=RequestMethod.POST)
	public String LogUser(@Valid Usuario usuario,BindingResult result,RedirectAttributes atr ) {
		if(result.hasErrors()) {
			atr.addFlashAttribute("mensagem","verifique os campos!");
			return "redirect:/login";
		}
		repo.save(usuario);
		atr.addFlashAttribute("mensagem","Usuario salvo com sucesso!");
		
		return "redirect:/login";
	}
	@RequestMapping(value="/mostra",method=RequestMethod.GET)
	public ModelAndView show() {
		ModelAndView model = new ModelAndView("html/showUser");
		Iterable<Usuario> usuarios = repo.findAll();
		model.addObject("usuarios", usuarios);
		return model;
	}
	
	@RequestMapping("/teste")
	public String teste() {
		
		return "html/testes";
	}
	@RequestMapping("/{id}")
	public ModelAndView detalhesUser(@PathVariable("id")int id) {
		Usuario usuario = repo.findById(id);
		ModelAndView model = new ModelAndView("html/userDetails");
		model.addObject("usuario", usuario);
		return model;
		
	}
	@RequestMapping(value="/{id}",method=RequestMethod.POST)
	 public String setaAdm(@Valid Usuario usuario,BindingResult result,RedirectAttributes atr) {
		usuario.setDecrypt(usuario.getSenha());
		pass=new BCryptPasswordEncoder().encode(usuario.getSenha());
		usuario.setSenha(pass);
		
		usuario.setRoles(Arrays.asList(repil.findByRole("ROLE_ADMIN")));
		
		repo.save(usuario);
		return "redirect:/mostra";
	}
	

	@RequestMapping("/update/{id}")
	public ModelAndView updateUser(@PathVariable("id") int id) {
		Usuario usuario=repo.findById(id);
		ModelAndView model = new ModelAndView("html/updateUser");
		model.addObject("usuario",usuario);
		return model;
		
	}
	@RequestMapping(value="/update/{id}",method=RequestMethod.POST)
	public String stro(@Valid Usuario usuario,BindingResult result,RedirectAttributes atr) {
		if(result.hasErrors()) {
			atr.addFlashAttribute("mensagem","verifique os campos!");
			return "redirect:/mostra";
		}
		usuario.setDecrypt(usuario.getSenha());
		pass=new BCryptPasswordEncoder().encode(usuario.getSenha());
		usuario.setSenha(pass);
		repo.save(usuario);
		
		atr.addFlashAttribute("mensagem","Usuario atualizado com sucesso!");
		
		
		return "redirect:/mostra";
		
	}
	
	
	@RequestMapping("/deletar")
	public String deleteUser(int id) {
		Usuario usuario = repo.findById(id);
		repo.delete(usuario);		
		
		return "redirect:/mostra";
	}
	
	
	
	

}
