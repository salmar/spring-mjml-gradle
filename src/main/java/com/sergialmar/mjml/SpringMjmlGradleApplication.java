package com.sergialmar.mjml;

import java.util.Optional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
@Controller
public class SpringMjmlGradleApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMjmlGradleApplication.class, args);
	}
	
	@GetMapping("/welcome")
	public String renderTemplate(@RequestParam("name") Optional<String> name, Model model) {
		model.addAttribute("name", name.orElse("Anonymous"));
		
		return "welcome";
	}
}