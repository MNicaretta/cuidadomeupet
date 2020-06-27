package com.cuidadomeupet.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.cuidadomeupet.models.Pet;
import com.cuidadomeupet.models.Service;
import com.cuidadomeupet.models.Species;
import com.cuidadomeupet.models.StatisticsCategory;
import com.cuidadomeupet.models.StatisticsCategory.Data;

public class StatisticsController {
    
    public static List<StatisticsCategory> getSpeciesStatistics() throws Exception {

        return List.of(getPetSpeciesStatistics(), getServiceSpeciesStatistics());
    }

    private static StatisticsCategory getPetSpeciesStatistics() throws Exception {

        Map<Species, Data> speciesMap = new HashMap<>();
        List<Pet> pets = Pet.listAll();

        StatisticsCategory category = new StatisticsCategory();
        category.label = "Pets";
        category.datas = new ArrayList<>();

        for (Species species : Species.values()) {

            Data data = new Data();
            data.label = species.label();
            data.value = 0.0;

            category.datas.add(data);
            speciesMap.put(species, data);
        }

        for (Pet pet : pets) {
            speciesMap.get(pet.species).value++;
        }

        return category;
    }

    private static StatisticsCategory getServiceSpeciesStatistics() throws Exception {

        Map<Species, Data> speciesMap = new HashMap<>();
        List<Service> services = Service.listAll();

        StatisticsCategory category = new StatisticsCategory();
        category.label = "Serviços";
        category.datas = new ArrayList<>();

        for (Species species : Species.values()) {

            Data data = new Data();
            data.label = species.label();
            data.value = 0.0;

            category.datas.add(data);
            speciesMap.put(species, data);
        }

        for (Service service : services) {

            for (Species species : service.species) {

                speciesMap.get(species).value++;
            }
        }

        return category;
    }
}