package com.example.demo.service;

import com.example.demo.entity.User;

import java.util.List;

public interface LoginService {

    int add(User user);

    int update(User user);

    int delete(int id);

    User findUserById(int id);

    User findUser(User user);

    List<User> findUserList();
}