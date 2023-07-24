package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
// @CrossOrigin("http://192.168.0.24:3000")
// @CrossOrigin("http://localhost:3000")
// 원래는 CrossOrign 설정을 통해 CORS 설정을 해야 해당 서버와의 통신이 가능하지만,
// 현재 Proxy Server를 이용하고 있어서 설정하지 않아도 통신이 가능하다.
// '@CrossOrigin' 어노테이션을 사용하지 않아도 특정 상황에서 Ajax 통신이 가능한 상황 3가지
// 1.같은 도메인에서 요청 처리, 2. 서버에서 CORS를 전역적으로 설정, 3. 서버가 프록시를 사용하는 경우
public class UserController {

    UserService userService;

    @Autowired
    public UserController(UserService userService) { this.userService = userService; }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public ResponseEntity<Void> user(@RequestBody UserDTO user) {
        /*
        System.out.println("User Email: " + user.getEmail());
        System.out.println("User Name:" + user.getName());
        System.out.println("User UserName: " + user.getUsername());
        System.out.println("User Password: " + user.getPassword());
        System.out.println("User Password1: " + user.getPassword1());
        */

        // 회원 가입 로직 필요

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public ResponseEntity<List<UserDTO>> allUser() {

        List<UserDTO> userDTOList = userService.createUser();

        return new ResponseEntity<>(userDTOList, HttpStatus.OK);
    }
}
