package com.cuidadomeupet.utils;

import org.mindrot.jbcrypt.BCrypt;

public class BCryptUtils {

    private BCryptUtils() {}

    public static String bcryptHash(String password) {

        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    public static boolean verify(String password, String guess) {

        return BCrypt.checkpw(guess, password);
    }
}