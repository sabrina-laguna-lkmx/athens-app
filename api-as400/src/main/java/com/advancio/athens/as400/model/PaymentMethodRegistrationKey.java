package com.advancio.athens.as400.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Embeddable
@Data
public class PaymentMethodRegistrationKey implements Serializable {

    private Long webUserId;
    private Long savedPaymentMethodId;
}
