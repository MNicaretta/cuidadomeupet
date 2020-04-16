package com.cuidadomeupet.model;

public class Pet extends Entity {

    private String name;
    private String additionalInfo;

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
}