package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.entity.User;
import com.example.backend.repository.UserJPARepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public interface UserService {

    User findById(Integer userId);

    User findByEmail(String email);

    User add(UserDTO userDTO);

    void deleteById(Integer userId);

    List<User> findAll();
}
