package com.cuidadomeupet.models;

public enum Species {

    DOG("Cachorro"),
    CAT("Gato"),
    BIRD("Ave"),
    HORSE("Cavalo"),
    RABBIT("Coelho"),
    TURTLE("Tartaruga"),
    FISH("Peixe"),
    HAMSTER("Hamster");

    private Species(String label) {
        this.label = label;
    }
    
    public String label;
}