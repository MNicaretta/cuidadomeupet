package com.cuidadomeupet.services;

import java.util.List;

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.Pet;
import com.cuidadomeupet.model.User;

public interface PetService {

    public void addPet(Pet pet) throws Exception;
    public void updatePet(Pet pet) throws Exception;
    public void deletePet(Pet pet) throws Exception;

    public Pet getPet(Entity entity) throws Exception;
    public List<Pet> getPet(User user) throws Exception;
    public List<Pet> getPets() throws Exception;
}