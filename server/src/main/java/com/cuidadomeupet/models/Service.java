package com.cuidadomeupet.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "services")
public class Service extends PanacheEntity {

    public static enum Type implements Labelable {
        SITTING { public String label() { return "Cuidados Domiciliares"; } },
        HOSTING { public String label() { return "Hotelaria"; } };
    }

    public static enum State {
        ACTIVE,
        INACTIVE
    }

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    public Type type;

    @Column(nullable = false)
    public Double price;

    public Double distance;

    @Column(name = "additional_info", columnDefinition="TEXT")
    public String additionalInfo;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    public State state;

    @Column(name = "start_date", nullable = false)
    @Temporal(TemporalType.DATE)
    @JsonbDateFormat(value = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    public Date startDate;

    @Column(name = "end_date", nullable = false)
    @Temporal(TemporalType.DATE)
    @JsonbDateFormat(value = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    public Date endDate;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    @ElementCollection
    public List<Species> species;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne()
    private User user;

    @Column(name = "user_id", insertable = false, updatable = false)
    public Long userId;

    public void setUser(User user) {
        this.user = user;
    }

    public String getUserName() {
        return user.name;
    }

    public String getTypeLabel() {
        return type.label();
    }

    public List<String> getSpeciesLabels() {
        List<String> result = new ArrayList<>();

        species.forEach(s -> {
            result.add(s.label());
        });

        return result;
    }

    public static List<Service> findByUser(User user) {
        return find("user", user).list();
    }
}
