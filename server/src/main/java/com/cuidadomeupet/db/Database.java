package com.cuidadomeupet.db;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.cuidadomeupet.db.fetchers.Fetcher;

import org.eclipse.microprofile.config.ConfigProvider;

public class Database {

    private static String DB_URL = ConfigProvider.getConfig().getValue("quarkus.datasource.jdbc.url", String.class);
    private static String DB_USERNAME = ConfigProvider.getConfig().getValue("quarkus.datasource.username", String.class);
    private static String DB_PASSWORD = ConfigProvider.getConfig().getValue("quarkus.datasource.password", String.class);
    private static String DB_DRIVER = ConfigProvider.getConfig().getValue("quarkus.datasource.jdbc.driver", String.class);

    private static Database instance;
    private static Connection connection;
    private static Statement statement;

    public static Database getInstance() throws Exception {

        if (instance == null) {
            instance = new Database();
        }

        initConnection();

        return instance;
    }

    private Database() throws Exception {

        DriverManager.registerDriver((Driver) Class.forName(DB_DRIVER).getDeclaredConstructor().newInstance());
    }

    private static void initConnection() throws Exception {

        if (connection == null || connection.isClosed()) {
            connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
        }
    }

    public void release() throws Exception {

        if (connection != null && statement != null) {
            statement.close();
        }
    }

    public PreparedStatement getPreparedStatement(String sql) throws Exception {

        return connection.prepareStatement(sql);
    }

    
    public void executeCommand(PreparedStatement ps) throws Exception {

        if (ps != null) {

            ps.execute();
        }
    }

    public void executeCommand(String sql) throws Exception {

        if (connection != null) {
            statement = connection.createStatement();

            statement.execute(sql);

            statement.close();
        }
    }

    public <T> T fetchOne(String sql, Fetcher<T> fetcher) throws Exception {

        statement = connection.createStatement();

        try {
            return fetchOne(statement.executeQuery(sql), fetcher);
        } finally {
            statement.close();
        }
    }

    public <T> T fetchOne(PreparedStatement ps, Fetcher<T> fetcher) throws Exception {

        return fetchOne(ps.executeQuery(), fetcher);
    }

    public <T> T fetchOne(ResultSet resultSet, Fetcher<T> fetcher) throws Exception {

        T t = null;

        if (resultSet.next()) {
            t = fetcher.fetch(resultSet);
        }

        resultSet.close();

        return t;
    }

    public <T> List<T> fetchAll(String sql, Fetcher<T> fetcher) throws Exception {

        statement = connection.createStatement();

        ResultSet resultSet = statement.executeQuery(sql);

        List<T> list = new ArrayList<>();

        while (resultSet.next()) {
            list.add(fetcher.fetch(resultSet));
        }

        resultSet.close();

        statement.close();

        return list;
    }

    public int queryInt(PreparedStatement ps) throws Exception {

        ResultSet resultSet = ps.executeQuery();

        int result = 0;

        if (resultSet.next()) {
            result = resultSet.getInt(1);
        }

        resultSet.close();

        return result;
    }

    public String quote(Object object) {

        if (object == null) {
            return "null";
        }
        
        if (object instanceof Number) {
            return String.valueOf(object);
        }
        
        return "\'" + object.toString() + "\'";
    }

    public String quote(String sql) {

        if (sql == null) {
            return "null";
        }

        if (sql.contains("\'")) {
            sql = sql.replace("\'", "\''");
        }

        return "\'" + sql + "\'";
    }

    public String quote(char c) {

        return quote(String.valueOf(c));
    }
}