package com.cuidadomeupet.db.fetchers;

import java.sql.ResultSet;

import com.cuidadomeupet.model.Service;

public class ServiceFetcher implements Fetcher<Service> {

	@Override
	public Service fetch(ResultSet resultSet) throws Exception {
        
        Service result = new Service();

        int column = 1;

        result.setId(resultSet.getInt(column++));
        result.setRevision(resultSet.getInt(column++));
        result.setType(resultSet.getInt(column++));
        result.setPrice(resultSet.getDouble(column++));
        result.setDistance(resultSet.getDouble(column++));
        result.setState(resultSet.getInt(column++));
        result.setUserId(resultSet.getInt(column++));
        result.setUserRevision(resultSet.getInt(column++));
        result.setAddressId(resultSet.getInt(column++));
        result.setAddressRevision(resultSet.getInt(column++));

		return result;
	}
    
}