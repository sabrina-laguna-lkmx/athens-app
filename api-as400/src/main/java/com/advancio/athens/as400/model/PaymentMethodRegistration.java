package com.advancio.athens.as400.model;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "WEBPAY")
public class PaymentMethodRegistration {

    @EmbeddedId
    private PaymentMethodRegistrationKey id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WPUSERID", insertable = false, updatable = false)
    private WebUser webUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WPPAYID", insertable = false, updatable = false)
    private PaymentMethod savedPaymentMethod;

}
