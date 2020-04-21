package com.cuidadomeupet.services;

import com.cuidadomeupet.model.SigninRequest;
import com.cuidadomeupet.model.User;

public interface AuthenticationService {

    public void signup(User user) throws Exception;
    public User signin(SigninRequest request) throws Exception;
}