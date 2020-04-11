package com.cuidadomeupet.model;

public class Entity {

    private int id;
    private int revision;

    public Entity() {
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRevision() {
		return revision;
	}

	public void setRevision(int revision) {
		this.revision = revision;
	}
}