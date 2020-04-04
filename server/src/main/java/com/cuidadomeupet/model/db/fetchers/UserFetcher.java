package com.cuidadomeupet.model.db.fetchers;

import java.sql.ResultSet;

import com.cuidadomeupet.model.data.User;

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

		return result;
	}

}