package com.example.backend.dto;

import com.example.backend.entity.User;
import lombok.*;

@Getter @Setter @Builder @AllArgsConstructor @NoArgsConstructor @ToString
public class UserDTO {
    private String email;
    private String name;
    private String password;
    private boolean isManager;

    public User toEntity(UserDTO userDTO) {
        return new User(userDTO.getEmail(), userDTO.getName(), userDTO.getPassword(), userDTO.isManager());
    }
}
