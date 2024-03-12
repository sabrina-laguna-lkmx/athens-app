package com.advancio.athens.as400.web.response;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class CustomerBalanceResponse {

    private Long customerNumber;

    private BigDecimal balanceDue;

    private BigDecimal currentCharges;

    private BigDecimal currentPayments;

    private BigDecimal pendingPayments;

    private BigDecimal previousBalance;
}
