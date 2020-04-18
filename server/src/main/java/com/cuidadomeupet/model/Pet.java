package com.cuidadomeupet.model;

public class Pet extends Entity {

    private String name;
	private String additionalInfo;
	private int userId;
	private int userRevision;

    public Pet() {
    }

    public Pet(String name) {
        this.name = name;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
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
}