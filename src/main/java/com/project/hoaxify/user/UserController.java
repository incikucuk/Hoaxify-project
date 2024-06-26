package com.project.hoaxify.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.hoaxify.shared.GenericMessage;


@RestController
public class UserController {

    @Autowired
    UserService userService;
    
    //@SuppressWarnings("null")
    @PostMapping("/api/v1/users")
    GenericMessage createUser(@RequestBody User user){
        userService.save(user);
        return new GenericMessage("User is created!");
    }
}
