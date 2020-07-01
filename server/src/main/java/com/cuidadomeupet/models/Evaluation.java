package com.cuidadomeupet.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "evaluations")
public class Evaluation extends PanacheEntity {
    
    @Column(nullable = false)
    @NotNull
    @Min(1)
    @Max(5)
    public int grade;

    @Column(name = "commentaries", nullable = false, columnDefinition = "TEXT")
    @NotNull
    public String commentaries;

    @JoinColumn(name = "order_id", nullable = false)
    @ManyToOne()
    public Order order;

    @Column(name = "order_id", insertable = false, updatable = false)
    @NotNull
    public Long orderId;

    public void setOrder(Order order) {
        this.order = order;
    }

    public static List<Evaluation> findByService(Service service) {
        return find("order IN(?1)", Order.findByService(service)).list();
    }
}