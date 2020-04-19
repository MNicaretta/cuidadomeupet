package com.cuidadomeupet.services;

import com.cuidadomeupet.model.LoginRequest;
import com.cuidadomeupet.model.User;

public interface AuthenticationService {

    public User login(LoginRequest request) throws Exception;
}