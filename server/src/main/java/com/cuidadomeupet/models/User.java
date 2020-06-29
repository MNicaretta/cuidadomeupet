package com.cuidadomeupet.models;

import java.util.Date;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "users")
public class User extends PanacheEntity {

    @Column(nullable = false)
    @NotBlank
    @NotNull
    public String name;

    @Column(nullable = false, unique = true)
    @NotBlank
    @NotNull
    @Email
    public String email;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    public String password;

    public String identity;

    public String phone;

    public String description;

    @CreationTimestamp
    @Temporal(TemporalType.DATE)
    @Column(name = "created_date")
    @JsonbDateFormat(value = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    public Date createdDate;

    public static User findByEmail(String email) {
        return find("email", email).firstResult();
    }
}