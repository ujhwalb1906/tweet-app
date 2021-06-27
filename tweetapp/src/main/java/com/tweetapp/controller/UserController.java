package com.tweetapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.exception.UserAlreadyExistException;
import com.tweetapp.exception.UserNotFoundException;
import com.tweetapp.model.User;
import com.tweetapp.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1.0/tweets")
@Slf4j
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public void signUp(@RequestBody User user) throws UserAlreadyExistException{
		System.err.println(user);
		userService.saveUser(user);
	}
	
	@GetMapping("/login")
	public Map<String, String> login(@RequestHeader("Authorization") String authHeader) {
		log.info(authHeader);
		return userService.authenticate(authHeader);
	}
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/user/search/{username}")
	public List<User> searchByUsername(@PathVariable String username) throws UserNotFoundException{
		return userService.searchByUsername(username);
	}
	
	@CrossOrigin(origins = "**")
	@PutMapping("/changePassword")
    public void setPassword(@RequestBody User user) throws UserNotFoundException {
		userService.updatePassword(user);

   }
	
}