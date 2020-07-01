package com.cuidadomeupet.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "evaluations")
public class Evaluation extends PanacheEntity {
    
    @Column(nullable = false)
    @NotNull
    public int grade;

    @Column(name = "commentaries")
    public String commentaries;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(name = "user_id", insertable = false, updatable = false)
    public Long userId;

    public void setUser(User user) {
        this.user = user;
    }

    @JoinColumn(name = "order_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;

    @Column(name = "order_id", insertable = false, updatable = false)
    public Long orderId;

    public void setOrder(Order order) {
        this.order = order;
    }

    public static List<Evaluation> findByUser(User user) {
        return find("user", user).list();
    }

}