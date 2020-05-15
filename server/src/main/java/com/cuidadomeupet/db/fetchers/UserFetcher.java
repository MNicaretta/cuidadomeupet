package com.cuidadomeupet.db.fetchers;

import java.sql.ResultSet;

import com.cuidadomeupet.model.User;

public class UserFetcher implements Fetcher<User> {

	@Override
	public User fetch(ResultSet resultSet) throws Exception {

        User result = new User();

        int column = 1;

        result.setId(resultSet.getInt(column++));
        result.setRevision(resultSet.getInt(column++));
        result.setName(resultSet.getString(column++));
        result.setEmail(resultSet.getString(column++));
        result.setPassword(resultSet.getString(column++));
        result.setIdentity(resultSet.getString(column++));
        result.setPhone(resultSet.getString(column++));
        result.setDescription(resultSet.getString(column++));
        result.setCreatedDate(resultSet.getDate(column++));

		return result;
	}

}