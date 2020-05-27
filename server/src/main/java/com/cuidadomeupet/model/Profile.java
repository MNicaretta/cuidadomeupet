package com.cuidadomeupet.model;

import java.util.List;

public class Profile {
    private User user;
    private List<Pet> pets;

	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<Pet> getPets() {
		return pets;
	}
	public void setPets(List<Pet> pets) {
		this.pets = pets;
	}
}