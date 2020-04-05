package com.cuidadomeupet.model.db.services;

import java.util.List;

import com.cuidadomeupet.model.data.Entity;
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
        } finally {
            db.release();
        }
    }

    public void updateUser(User user) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.updateUser(db, user);
        } finally {
            db.release();
        }
    }

    public void deleteUser(User user) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.deleteUser(db, user);
        } finally {
            db.release();
        }
    }

    public User getUser(Entity entity) throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getUser(db, entity);
        } finally {
            db.release();
        }
    }

    public List<User> getUsers() throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getUsers(db);
        } finally {
            db.release();
        }
    }
}
