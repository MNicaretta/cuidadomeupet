package com.cuidadomeupet.models;

public class UserValidationResponse {

    private boolean validEmail;

    public UserValidationResponse() {}

    public UserValidationResponse(boolean validEmail) {
        this.validEmail = validEmail;
    }

	public boolean isValidEmail() {
		return validEmail;
	}

	public void setValidEmail(boolean emailValid) {
		this.validEmail = emailValid;
	}
}