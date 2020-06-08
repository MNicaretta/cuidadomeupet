package com.cuidadomeupet.models;

public enum Species implements Labelable {

    DOG {
        public String label() { return "Cachorro"; }
    },
    CAT {
        public String label() { return "Gato"; }
    },
    BIRD {
        public String label() { return "Ave"; }
    },
    HORSE {
        public String label() { return "Cavalo"; }
    },
    RABBIT {
        public String label() { return "Coelho"; }
    },
    TURTLE {
        public String label() { return "Tartaruga"; }
    },
    FISH {
        public String label() { return "Peixe"; }
    },
    HAMSTER {
        public String label() { return "Hamster"; }
    };
}