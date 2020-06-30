package com.cuidadomeupet.models;

public enum AddressType implements Labelable {

    HOUSE {
        public String label() { return "Casa"; }
    },
    APARTMENT {
        public String label() { return "Apartamento"; }
    };
}