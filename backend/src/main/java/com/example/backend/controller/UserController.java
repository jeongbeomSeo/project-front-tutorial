package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class UserController {

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public ResponseEntity<?> user(@RequestBody UserDTO user) {
        System.out.println("User Email: " + user.getEmail());
        System.out.println("User Name:" + user.getName());
        System.out.println("User UserName: " + user.getUsername());
        System.out.println("User Password: " + user.getPassword());
        System.out.println("User Password1: " + user.getPassword1());

        return ResponseEntity.ok().body(user);
    }
}
