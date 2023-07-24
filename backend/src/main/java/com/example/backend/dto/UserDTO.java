package com.example.backend.dto;

import lombok.*;

@Getter @Setter @Builder @AllArgsConstructor @NoArgsConstructor @ToString
public class UserDTO {
    private String email;
    private String name;
    private String username;
    private String password;
}
