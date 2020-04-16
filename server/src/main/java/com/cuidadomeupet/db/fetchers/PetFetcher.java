package com.cuidadomeupet.db.fetchers;

import java.sql.ResultSet;

import com.cuidadomeupet.model.Pet;

public class PetFetcher implements Fetcher<Pet> {

	@Override
	public Pet fetch(ResultSet resultSet) throws Exception {

        Pet result = new Pet();

        int column = 1;

        result.setId(resultSet.getInt(column++));
        result.setRevision(resultSet.getInt(column++));
        result.setName(resultSet.getString(column++));
        result.setAdditionalInfo(resultSet.getString(column++));

		return result;
	}
}