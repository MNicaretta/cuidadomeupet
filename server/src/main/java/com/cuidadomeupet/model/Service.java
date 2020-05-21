package com.cuidadomeupet.model;

public class Service extends Entity{

    private int type;
    private double price;
    private Double distance;
    private int state;
    private int userId;
    private int userRevision;
    private Integer addressId;
    private Integer addressRevision;

    public Service () {

    }

	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getUserRevision() {
		return userRevision;
	}
	public void setUserRevision(int userRevision) {
		this.userRevision = userRevision;
	}
	public Integer getAddressId() {
		return addressId;
	}
	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}
	public Integer getAddressRevision() {
		return addressRevision;
	}
	public void setAddressRevision(Integer addressRevision) {
		this.addressRevision = addressRevision;
	}

    

}