package com.cuidadomeupet.services;

import javax.enterprise.context.ApplicationScoped;

import com.cuidadomeupet.db.Database;
import com.cuidadomeupet.db.daos.UserDAO;
import com.cuidadomeupet.model.SigninRequest;
import com.cuidadomeupet.model.User;
import com.cuidadomeupet.utils.BCryptUtils;

@ApplicationScoped
public class AuthenticationServiceDefault implements AuthenticationService {

    private UserDAO dao = new UserDAO();

    @Override
    public void signup(User user) throws Exception {
        
        Database db = Database.getInstance();

        try {
            dao.insertUser(db, user);
        } finally {
            db.release();
        }
    }

	@Override
	public User signin(SigninRequest request) throws Exception {
        
        Database db = Database.getInstance();

        User user = null;

        try {
            user = dao.getUserByEmail(db, request.getEmail());
        } finally {
            db.release();
        }

        if (user != null) {
            if (BCryptUtils.verify(user.getPassword(), request.getPassword())) {

                return user;
            }
        }

        return null;
	}
}