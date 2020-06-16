package com.cuidadomeupet.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "addresses")
public class Address extends PanacheEntity {
    
    public static enum Type {
        HOUSE,
        APARTMENT
    }

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    public Type type;
    
    @Column(nullable = false)
    public Double size;

    @Column(name = "address", nullable = false)
    public String address;

    @Column(name = "zip", nullable = false)
    public String zip;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(name = "user_id", insertable = false, updatable = false)
    public Long userId;

    public void setUser(User user) {
        this.user = user;
    }

}