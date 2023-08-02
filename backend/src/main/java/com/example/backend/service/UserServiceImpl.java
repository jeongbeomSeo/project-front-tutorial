package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.entity.User;
import com.example.backend.exception.DuplicatedUserException;
import com.example.backend.exception.ErrorCode;
import com.example.backend.exception.UserNotFoundException;
import com.example.backend.repository.UserJPARepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    UserJPARepository userJPARepository;

    @Autowired
    public UserServiceImpl(UserJPARepository userJPARepository) {
        this.userJPARepository = userJPARepository;
    }

    @Override
    public User findById(Integer userId) {
        return userJPARepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(ErrorCode.USER_NOT_FOUND, "Not Found User Error"));
    }

    @Override
    public User findByEmail(String email) {
        return userJPARepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException(ErrorCode.USER_NOT_FOUND, "Not Found User Error"));
    }

    @Override
    @Transactional
    public User add(UserDTO userDTO) {

        User user = userDTO.toEntity(userDTO);
        if(userJPARepository.existsByEmail(user.getEmail())) {
            throw new DuplicatedUserException(ErrorCode.DUPLICATE_LOGIN_ID, "duplicated User Email Error");
        }

        return userJPARepository.save(user);
    }

    @Override
    public void deleteById(Integer userId) {

    }

    @Override
    public List<User> findAll() {
        return userJPARepository.findAll();
    }
}
