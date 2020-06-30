package com.cuidadomeupet.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "addresses")
public class Address extends PanacheEntity {
    
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    public AddressType type;
    
    @Column(nullable = false)
    public Double size;

    @Column(name = "address", nullable = false)
    public String address;

    @Column(name = "zip", nullable = false)
    public String zip;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne()
    private User user;

    @Column(name = "user_id", insertable = false, updatable = false)
    public Long userId;

    public void setUser(User user) {
        this.user = user;
    }

    public static List<Address> findByUser(User user) {
        return find("user", user).list();
    }

    public String getTypeLabel(){
        return this.type.label();
    }
}