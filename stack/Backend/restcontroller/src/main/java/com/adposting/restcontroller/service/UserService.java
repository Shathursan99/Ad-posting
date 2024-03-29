package com.adposting.restcontroller.service;

import com.adposting.restcontroller.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {

    User createUser(User user);
    User getUserById(int id);
    User updateUser(User user);
    void deleteUser(int id);
    List<User> getAllUsers();

}
