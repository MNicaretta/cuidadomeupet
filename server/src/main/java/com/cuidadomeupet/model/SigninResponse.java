package com.cuidadomeupet.model;

public class SigninResponse {

    private User user;
    private String token;

    public SigninResponse() {}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}