package com.cuidadomeupet.model.db.services;

import java.util.List;

import com.cuidadomeupet.model.data.User;
import com.cuidadomeupet.model.db.Database;
import com.cuidadomeupet.model.db.daos.UserDAO;

public class UserService {
    private static UserService defaultInstance;

    public static UserService getInstance() {
        if (defaultInstance == null) {
            defaultInstance = new UserService();
        }

        return defaultInstance;
    }

    private UserDAO dao = new UserDAO();

    private UserService() {
    }

    public void addUser(User user) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.insertUser(db, user);
        }

        finally {
            db.release();
        }
    }

    public List<User> getUsers() {
        return List.of( new User("Arthur"), new User("Douglas"), new User("Marcelo"), new User("Maurício") );
    }
}