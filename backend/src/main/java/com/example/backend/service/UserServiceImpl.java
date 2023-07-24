package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Override
    public List<UserDTO> createUser() {

        UserDTO user1 = new UserDTO("user1@email", "user1", "user1", "password1");
        UserDTO user2 = new UserDTO("user2@email", "user2", "user2", "password2");
        UserDTO user3 = new UserDTO("user3@email", "user3", "user3", "password3");
        UserDTO user4 = new UserDTO("user4@email", "user4", "user4", "password4");
        UserDTO user5 = new UserDTO("user5@email", "user5", "user5", "password5");

        List<UserDTO> userDTOList = new ArrayList<>();
        userDTOList.add(user1);
        userDTOList.add(user2);
        userDTOList.add(user3);
        userDTOList.add(user4);
        userDTOList.add(user5);

        return userDTOList;
    }
}
