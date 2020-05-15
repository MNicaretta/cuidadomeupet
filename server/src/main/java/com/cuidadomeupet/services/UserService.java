package com.cuidadomeupet.services;

import java.util.List;

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.User;

public interface UserService {

    public void addUser(User user) throws Exception;
    public void updateUser(User user) throws Exception;
    public void deleteUser(User user) throws Exception;

    public User getUser(Entity entity) throws Exception;
    public User getUserByEmail(String email) throws Exception;

    public List<User> getUsers() throws Exception;
}