package com.advancio.athens.as400.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE)
public class BillingOptionsNotValidException extends RuntimeException {

    public BillingOptionsNotValidException(String message) {
        super(message);
    }
}
