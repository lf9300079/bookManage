package com.example.demo.dao;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;

import java.util.List;

public interface LoginDao extends UserMapper {

    int add(User user);

    int update(User user);

    int delete(int id);

    User findUser(User user);

    User findUserById(int id);

    List<User> findUserList();
}