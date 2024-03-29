package com.adposting.restcontroller.service;

import com.adposting.restcontroller.entity.User;
import com.adposting.restcontroller.entity.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(int id) {
        if(userRepository.findUserById(id)!=null){
            return userRepository.findUserById(id);
        }else {
            return null;
        }
    }

    @Override
    public User updateUser(User user) {
//        Optional<User> userDb = Optional.ofNullable(this.userRepository.findUserById(user.getId()));
        User userUpdate = this.userRepository.findUserById(user.getId());
        if(userUpdate!=null){
            userUpdate.setId(user.getId());
            userUpdate.setName(user.getName());
            userUpdate.setUsername(user.getUsername());
            userUpdate.setPassword(user.getPassword());
            userUpdate.setEmail(user.getEmail());
            userRepository.save(userUpdate);
            return userUpdate;
        }else {
            return null;
        }
//        if(userRepository.findUserById(user.getId())!=null){
//            return userRepository.save(user);
//        }else {
//            return null;
//        }
    }

    @Override
    public void deleteUser(int id) throws ConfigDataResourceNotFoundException {
        if(userRepository.findUserById(id)!=null){
            userRepository.deleteUserById(id);
        }
    }
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
