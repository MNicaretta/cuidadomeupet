package com.cuidadomeupet.models;

import java.util.List;

public class StatisticsCategory {

    public static class Data {
        public String label;
        public Double value;
    }

    public String label;
    public List<Data> datas;
}