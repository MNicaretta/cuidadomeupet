package com.cuidadomeupet.db.services;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.User;
import com.cuidadomeupet.db.Database;
import com.cuidadomeupet.db.daos.UserDAO;

@ApplicationScoped
public class UserServiceDefault implements UserService {
 
    private UserDAO dao = new UserDAO();

    @Override
    public void addUser(User user) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.insertUser(db, user);
        } finally {
            db.release();
        }
    }

    @Override
    public void updateUser(User user) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.updateUser(db, user);
        } finally {
            db.release();
        }
    }

    @Override
    public void deleteUser(User user) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.deleteUser(db, user);
        } finally {
            db.release();
        }
    }

    @Override
    public User getUser(Entity entity) throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getUser(db, entity);
        } finally {
            db.release();
        }
    }

    @Override
    public List<User> getUsers() throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getUsers(db);
        } finally {
            db.release();
        }
    }
}
