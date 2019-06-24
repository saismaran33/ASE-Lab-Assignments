package com.luv2code.springboot.mycoolApp.rest;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {

	@GetMapping("/")
	public String sayHello() {
		return "Hello! The time on the server is:"+ LocalDateTime.now();
	}
	
	@GetMapping("/workout")
	public String getWorkout() {
		return "Run Hard 5k!";
	}
	
	@GetMapping("/fortune")
	public String getFortune() {
		return "Today is your lucky day!";
	}
	
		
}
