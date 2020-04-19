package com.cuidadomeupet.services;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.Pet;
import com.cuidadomeupet.db.Database;
import com.cuidadomeupet.db.daos.PetDAO;

@ApplicationScoped
public class PetServiceDefault implements PetService {
 
    private PetDAO dao = new PetDAO();

    @Override
    public void addPet(Pet pet) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.insertPet(db, pet);
        } finally {
            db.release();
        }
    }

    @Override
    public void updatePet(Pet pet) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.updatePet(db, pet);
        } finally {
            db.release();
        }
    }

    @Override
    public void deletePet(Pet pet) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.deletePet(db, pet);
        } finally {
            db.release();
        }
    }

    @Override
    public Pet getPet(Entity entity) throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getPet(db, entity);
        } finally {
            db.release();
        }
    }

    @Override
    public List<Pet> getPets() throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getPets(db);
        } finally {
            db.release();
        }
    }
}
