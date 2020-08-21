package com.ease.codind;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ease.model.Usuario;
import com.ease.repository.CodindRepository;


@Controller
public class HomeController {
		
	@Autowired
	private CodindRepository repo;

	@RequestMapping("/")
	
	public String Index() {
		
		return "html/index";
	}
	
	@RequestMapping("/fase")
	public String FirstPhase() {
		
		return "html/firstphase";
	}
	@RequestMapping("/fase2")
	public String SecondPhase() {
		return "html/secondphase";
	}
	@RequestMapping("/fim")
	public String GameOver() {
		
		return "html/gameover";
	}


	@RequestMapping(value= "/cadastro",method=RequestMethod.GET)
	public String CadUser() {
		
		return "html/cadUser";
	}
	@RequestMapping(value= "/cadastro",method=RequestMethod.POST)
	public String CadUser(@Valid Usuario usuario,BindingResult result,RedirectAttributes atr ) {
		if(result.hasErrors()) {
			atr.addFlashAttribute("mensagem","verifique os campos!");
			return "redirect:/cadastro";
		}
		
		repo.save(usuario);
		atr.addFlashAttribute("mensagem","Usuario salvo com sucesso!");
		
		return "redirect:/cadastro";
	}
		@RequestMapping(value= "/login",method=RequestMethod.GET)
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
	@RequestMapping("/mostra")
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
