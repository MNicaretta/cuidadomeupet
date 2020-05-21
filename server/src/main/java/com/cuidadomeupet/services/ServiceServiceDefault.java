package com.cuidadomeupet.services;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import com.cuidadomeupet.db.Database;
import com.cuidadomeupet.db.daos.ServiceDAO;
import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.Service;

@ApplicationScoped
public class ServiceServiceDefault implements ServiceService{
    
    private ServiceDAO dao = new ServiceDAO();

    @Override
    public void addService(Service service) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.insertService(db, service);
        } finally {
            db.release();
        }
    }

    @Override
    public void updateService(Service service) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.updateService(db, service);
        } finally {
            db.release();
        }
    }

    @Override
    public void deleteService(Service service) throws Exception {

        Database db = Database.getInstance();

        try {
            dao.deleteService(db, service);
        } finally {
            db.release();
        }
    }

    @Override
    public Service getService(Entity entity) throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getService(db, entity);
        } finally {
            db.release();
        }
    }

    @Override
    public List<Service> getServices() throws Exception {

        Database db = Database.getInstance();

        try {
            return dao.getServices(db);
        } finally {
            db.release();
        }
    }

}