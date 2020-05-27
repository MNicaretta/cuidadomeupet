package com.cuidadomeupet.db.daos;

import java.sql.PreparedStatement;
import java.util.List;

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.Pet;
import com.cuidadomeupet.model.User;
import com.cuidadomeupet.db.Database;
import com.cuidadomeupet.db.Schemas.Pets;

public class PetDAO {

    public void insertPet(Database db, Pet pet) throws Exception {

        Pets P = Pets.alias("");

        String sql = "insert into " + P.name + " ( " +
                        P.columns.REVISION        + ", " +
                        P.columns.NAME            + ", " +
                        P.columns.ADDITIONAL_INFO + ", " +
                        P.columns.USER_ID         + ", " +
                        P.columns.USER_REVISION   + 
                     " ) values ( ?, ?, ?, ?, ? ) returning " + P.columns.ID;

        PreparedStatement ps = db.getPreparedStatement(sql);

        try {
            int count = 1;

            ps.setInt(count++, pet.getRevision());
            ps.setString(count++, pet.getName());
            ps.setString(count++, pet.getAdditionalInfo());
            ps.setInt(count++, pet.getUserId());
            ps.setInt(count++, pet.getUserRevision());
            
            pet.setId(db.queryInt(ps));
        } finally {
            ps.close();
        }
    }

    public void updatePet(Database db, Pet pet) throws Exception {

        Pets P = Pets.alias("");

        String sql = "update " + P.name + " set " +
                        P.columns.NAME            + " = ?, " +
                        P.columns.ADDITIONAL_INFO + " = ?, " +
                        P.columns.USER_ID         + " = ?, " +
                        P.columns.USER_REVISION   + " = ?" +
                     " where " +
                        P.columns.ID + " = ?" +
                     " and " +
                        P.columns.REVISION + " = ?";

        PreparedStatement ps = db.getPreparedStatement(sql);

        try {
            int count = 1;

            // SET
            ps.setString(count++, pet.getName());
            ps.setString(count++, pet.getAdditionalInfo());
            ps.setInt(count++, pet.getUserId());
            ps.setInt(count++, pet.getUserRevision());
            // WHERE
            ps.setInt(count++, pet.getId());
            ps.setInt(count++, pet.getRevision());

            db.executeCommand(ps);
        } finally {
            ps.close();
        }
    }

    public void deletePet(Database db, Pet pet) throws Exception {

        Pets P = Pets.alias("");

        String sql = "delete from " + P.name +
                     " where " +
                        P.columns.ID + " = " + pet.getId() +
                     " and " +
                        P.columns.REVISION + " = " + pet.getRevision();

        db.executeCommand(sql);
    }

    public Pet getPet(Database db, Entity entity) throws Exception {

        Pets P = Pets.table;

        String sql = P.select +
                     " where " +
                     P.columns.ID + " = " + entity.getId() +
                     " and " +
                     P.columns.REVISION + " = " + entity.getRevision();

        return db.fetchOne(sql, Pets.fetcher);
    }

    public List<Pet> getPet(Database db, User user) throws Exception {

        Pets P = Pets.table;

        String sql = P.select +
                     " where " +
                     P.columns.USER_ID + " = " + user.getId() +
                     " and " +
                     P.columns.USER_REVISION + " = " + user.getRevision();

        return db.fetchAll(sql, Pets.fetcher);
    }

    public List<Pet> getPets(Database db) throws Exception {

        Pets P = Pets.table;

        String sql = P.select;

        return db.fetchAll(sql, Pets.fetcher);
    }
}