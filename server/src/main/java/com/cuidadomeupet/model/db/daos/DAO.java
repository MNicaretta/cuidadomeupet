package com.cuidadomeupet.model.db.daos;

import java.sql.ResultSet;
import java.util.List;

public interface DAO<T> {
    public T fetch(ResultSet resultSet) throws Exception;

    public void insert(T value) throws Exception;
    public void update(T value) throws Exception;
    public void delete(T value) throws Exception;

    public T get(int id) throws Exception;

    public List<T> getAll() throws Exception;
}