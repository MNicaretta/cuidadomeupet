package com.cuidadomeupet.utils;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

import javax.json.bind.config.PropertyVisibilityStrategy;

public class EntityVisibilityStrategy implements PropertyVisibilityStrategy {

    @Override
    public boolean isVisible(Field field) {

        int modifiers = field.getModifiers();

        if(Modifier.isPrivate(modifiers)) {
            return false;
        }

        return true;
    }

    @Override
    public boolean isVisible(Method method) {
        return true;
    }
}