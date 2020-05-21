package com.cuidadomeupet.db.daos;

import java.sql.PreparedStatement;
import java.util.List;

import com.cuidadomeupet.db.Database;
import com.cuidadomeupet.db.Schemas.Services;
import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.Service;

public class ServiceDAO {

    public void insertService(Database db, Service service) throws Exception {

        Services P = Services.alias("");

        String sql = "insert into " + P.name + " ( " +
                        P.columns.REVISION           + ", " +
                        P.columns.TYPE               + ", " +
                        P.columns.PRICE              + ", " +
                        P.columns.DISTANCE           + ", " +
                        P.columns.STATE              + ", " +
                        P.columns.USER_ID            + ", " +
                        P.columns.USER_REVISION      + ", " +
                        P.columns.ADDRESS_ID         + ", " +
                        P.columns.ADDRESS_REVISION   + 
                     " ) values ( ?, ?, ?, ?, ?, ?, ?, ?, ? ) returning " + P.columns.ID;

        PreparedStatement ps = db.getPreparedStatement(sql);

        try {
            int count = 1;

            ps.setInt(count++, service.getRevision());
            ps.setInt(count++, service.getType());
            ps.setDouble(count++, service.getPrice());
            ps.setObject(count++, service.getDistance());
            ps.setInt(count++, service.getState());
            ps.setInt(count++, service.getUserId());
            ps.setInt(count++, service.getUserRevision());
            ps.setObject(count++, service.getAddressId());
            ps.setObject(count++, service.getAddressRevision());
            
            service.setId(db.queryInt(ps));
        } finally {
            ps.close();
        }
    }

    public void updateService(Database db, Service service) throws Exception {

        Services P = Services.alias("");

        String sql = "update " + P.name + " set " +
                        P.columns.TYPE            + " = ?, " +
                        P.columns.PRICE           + " = ?, " +
                        P.columns.DISTANCE        + " = ?, " +
                        P.columns.STATE           + " = ?, " +
                        P.columns.USER_ID         + " = ?, " +
                        P.columns.USER_REVISION   + " = ?, " +
                        P.columns.USER_ID         + " = ?, " +
                        P.columns.USER_REVISION   + " = ?  " +
                     " where " +
                        P.columns.ID + " = ?" +
                     " and " +
                        P.columns.REVISION + " = ?";

        PreparedStatement ps = db.getPreparedStatement(sql);

        try {
            int count = 1;

            // SET
            ps.setInt(count++, service.getType());
            ps.setDouble(count++, service.getPrice());
            ps.setDouble(count++, service.getDistance());
            ps.setInt(count++, service.getState());
            ps.setInt(count++, service.getUserId());
            ps.setInt(count++, service.getUserRevision());
            ps.setInt(count++, service.getAddressId());
            ps.setInt(count++, service.getAddressRevision());
            // WHERE
            ps.setInt(count++, service.getId());
            ps.setInt(count++, service.getRevision());

            db.executeCommand(ps);
        } finally {
            ps.close();
        }
    }

    public void deleteService(Database db, Service service) throws Exception {

        Services P = Services.alias("");

        String sql = "delete from " + P.name +
                     " where " +
                        P.columns.ID + " = " + service.getId() +
                     " and " +
                        P.columns.REVISION + " = " + service.getRevision();

        db.executeCommand(sql);
    }

    public Service getService(Database db, Entity entity) throws Exception {

        Services P = Services.table;

        String sql = P.select +
                     " where " +
                     P.columns.ID + " = " + entity.getId() +
                     " and " +
                     P.columns.REVISION + " = " + entity.getRevision();

        return db.fetchOne(sql, Services.fetcher);
    }

    public List<Service> getServices(Database db) throws Exception {

        Services P = Services.table;

        String sql = P.select;

        return db.fetchAll(sql, Services.fetcher);
    }
    
}