package com.advancio.athens.as400.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class CredentialsNotValidException extends RuntimeException {
    
    public CredentialsNotValidException() {
        super("credentials are not valid");
    }
}
