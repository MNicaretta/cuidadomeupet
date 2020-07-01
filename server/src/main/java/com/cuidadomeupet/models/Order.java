package com.cuidadomeupet.models;

import java.util.Date;
import java.util.List;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "orders")
public class Order extends PanacheEntity {

    public static enum State implements Labelable {
        WAITING { public String label() { return "Aguardando aprovação"; } },
        APPROVED { public String label() { return "Aprovada"; } },
        CANCELED { public String label() { return "Cancelada"; } },
        FINISHED { public String label() { return "Concluída"; } };
    }

    @Column(name = "created_date", nullable = false)
    @Temporal(TemporalType.DATE)
    @JsonbDateFormat(value = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    @CreationTimestamp
    public Date createdDate;

    @Column(name = "event_date", nullable = false)
    @Temporal(TemporalType.DATE)
    @JsonbDateFormat(value = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    @NotNull
    public Date eventDate;

    @Column(name = "total_value", nullable = false)
    public Double totalValue;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    public State state;

    @JoinColumn(name = "service_id", nullable = false)
    @ManyToOne()
    public Service service;

    @Column(name = "service_id", insertable = false, updatable = false)
    @NotNull
    public Long serviceId;

    @JoinColumn(name = "pet_id", nullable = false)
    @ManyToOne()
    public Pet pet;
    
    @Column(name = "pet_id", insertable = false, updatable = false)
    @NotNull
    public Long petId;

    @JoinColumn(name = "address_id")
    @ManyToOne()
    public Address address;
    
    @Column(name = "address_id", insertable = false, updatable = false)
    public Long addressId;

    public void setService(Service service) {
        this.service = service;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getStateLabel() {
        return state.label();
    }

    public static List<Order> findByUser(User user) {
        return find("pet IN(?1)", Pet.findByUser(user)).list();
    }

    public static List<Order> findByService(Service service) {
        return find("service", service).list();
    }

    public static List<Order> findByServices(List<Service> services) {
        return find("service IN(?1)", services).list();
    }
}