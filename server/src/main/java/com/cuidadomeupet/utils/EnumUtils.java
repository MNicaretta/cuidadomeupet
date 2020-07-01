package com.cuidadomeupet.utils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.cuidadomeupet.models.Labelable;

public class EnumUtils {
    
    public static <E extends Enum<?>> List<Map<String, Object>> toList(Class<E> enumClass) throws Exception {

        List<Map<String, Object>> result = new ArrayList<>();

        for (E value : getEnumValues(enumClass)) {

            if (value instanceof Labelable) {
                result.add(Map.of("label", ((Labelable) value).label(),
                                  "value", value.name()));
            } else {
                result.add(Map.of("value", value.name()));
            }
        }

        return result;
    }

    @SuppressWarnings("unchecked")
    private static <E extends Enum<?>> E[] getEnumValues(Class<E> enumClass)
            throws NoSuchFieldException, IllegalAccessException {
        Field f = enumClass.getDeclaredField("$VALUES");
        f.setAccessible(true);

        var o = f.get(null);

        return (E[]) o;
    }
}