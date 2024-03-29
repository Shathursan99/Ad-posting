package com.adposting.restcontroller.entity;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
    public User findUserById(int id);
    Optional<User> findByUsername(String username);
    public void deleteUserById(int id);

    Boolean existsByUsername(String username);
}
