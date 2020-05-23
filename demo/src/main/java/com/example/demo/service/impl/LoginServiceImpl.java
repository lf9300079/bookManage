package com.example.demo.service.impl;

import com.example.demo.dao.LoginDao;
import com.example.demo.entity.User;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginDao loginDao;

    @Override
    public int add(User user) {
        if(user != null) {
            return loginDao.add(user);
        }
        return 0;
    }

    @Override
    public int update(User user) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public User findUserById(int id) {
        return loginDao.findUserById(id);
    }

    @Override
    public User findUser(User user) {
        return loginDao.findUser(user);
    }

    @Override
    public List<User> findUserList() {
        return null;
    }
}