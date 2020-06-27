package com.cuidadomeupet.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "orders")
public class Order extends PanacheEntity {

    public static enum State implements Labelable {
        WAITING { public String label() { return "Aguardando aprovação"; } },
        APPROVED { public String label() { return "Aprovada"; } },
        CANCELED { public String label() { return "Cancelada"; } },
        FINISHED { public String label() { return "Concluida"; } };
    }

    @Column(name = "created_date", nullable = false)
    @Temporal(TemporalType.DATE)
    public Date createdDate;

    @Column(name = "event_date", nullable = false)
    @Temporal(TemporalType.DATE)
    public Date eventDate;

    @Column(name = "total_value", nullable = false)
    public Double totalValue;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    public State state;

    @JoinColumn(name = "service_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Service service;

    @Column(name = "service_id", insertable = false, updatable = false)
    public Long serviceId;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(name = "user_id", insertable = false, updatable = false)
    public Long userId;

    public void setService(Service service) {
        this.service = service;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public static List<Order> findByUser(User user) {
        return find("user", user).list();
    }

    public static List<Order> findByServices(List<Service> services) {
        return find("service", services).list();
    }

	public String getUserName() {
		return user.name;
	}

	public String getServiceUser() {
		return service.getUserName();
	}
    
}