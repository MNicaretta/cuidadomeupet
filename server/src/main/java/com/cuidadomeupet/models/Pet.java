package com.cuidadomeupet.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "pets")
public class Pet extends PanacheEntity {

    @Column(nullable = false)
    @NotBlank
    @NotNull
    public String name;

    @Column(name = "additional_info")
    public String additionalInfo;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    public Species species;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(name = "user_id", insertable = false, updatable = false)
    public Long userId;

    public void setUser(User user) {
        this.user = user;
    }
}