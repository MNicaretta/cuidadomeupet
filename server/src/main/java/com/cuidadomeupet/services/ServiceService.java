package com.cuidadomeupet.services;

import java.util.List;

import com.cuidadomeupet.model.Entity;
import com.cuidadomeupet.model.Service;

public interface ServiceService {
    
    public void addService(Service service) throws Exception;
    public void updateService(Service service) throws Exception;
    public void deleteService(Service service) throws Exception;

    public Service getService(Entity entity) throws Exception;
    public List<Service> getServices() throws Exception;

}