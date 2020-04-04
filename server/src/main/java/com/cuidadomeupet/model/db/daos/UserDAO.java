package com.cuidadomeupet.model.db.daos;

import java.sql.PreparedStatement;

import com.cuidadomeupet.model.data.User;
import com.cuidadomeupet.model.db.Database;
import com.cuidadomeupet.model.db.Schemas.Users;

public class UserDAO {

    public void insertUser(Database db, User user) throws Exception {

        Users U = Users.alias("");

        String sql = "insert into " + U.name + " ( " +
                        U.columns.REVISION + ", " +
                        U.columns.NAME     + ", " +
                        U.columns.EMAIL    + ", " +
                        U.columns.PASSWORD + ", " +
                        U.columns.IDENTITY + ", " +
                        U.columns.PHONE    +
                     " ) values ( ?, ?, ?, ?, ?, ? ) returning " + U.columns.ID;

        PreparedStatement ps = db.getPreparedStatement(sql);

        try
        {
            int count = 1;

            ps.setInt(count++, user.getRevision());
            ps.setString(count++, user.getName());
            ps.setString(count++, user.getEmail());
            ps.setString(count++, user.getPassword());
            ps.setString(count++, user.getIdentity());
            ps.setString(count++, user.getPhone());
            
            user.setId(db.queryInt(ps));
        }

        finally
        {
            ps.close();
        }
    }
}