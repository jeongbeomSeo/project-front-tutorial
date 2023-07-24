package com.example.backend.service;

import com.example.backend.dto.UserDTO;

import java.util.List;


public interface UserService {

    // 원래는 Entity가 들어가야 됨.
    List<UserDTO> createUser();
}
