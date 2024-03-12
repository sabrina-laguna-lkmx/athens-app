package com.advancio.athens.as400.model;

import jakarta.persistence.Column;
import jakarta.persistence.ColumnResult;
import jakarta.persistence.ConstructorResult;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedNativeQuery;
import jakarta.persistence.SqlResultSetMapping;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@NamedNativeQuery(name = "findAutoPaymentMethodByEmail", query = "SELECT CUSTOMER_PAYMENT_METHOD.WPUSERID AS CUSTOMER_ID, "
        +
        "CUSTOMER_PAYMENT_METHOD.WPPAYID AS PAYMENT_METHOD_ID, " +
        "PAYMENT_METHOD.PMFNAME AS CUSTOMER_FIRST_NAME, " +
        "PAYMENT_METHOD.PMMI AS CUSTOMER_MIDDLE_NAME, " +
        "PAYMENT_METHOD.PMLNAME AS CUSTOMER_LAST_NAME, " +
        "PAYMENT_METHOD.PMADD1 AS CUSTOMER_ADDRESS_LINE_1, " +
        "PAYMENT_METHOD.PMADD2 AS CUSTOMER_ADDRESS_LINE_2, " +
        "PAYMENT_METHOD.PMSTATE AS CUSTOMER_STATE, " +
        "PAYMENT_METHOD.PMCITY AS CUSTOMER_CITY, " +
        "PAYMENT_METHOD.PMZIP AS CUSTOMER_ZIP, " +
        "PAYMENT_METHOD.PMTYPE AS PAYMENT_METHOD_TYPE, " +
        "PAYMENT_METHOD.PMLAST4 AS PAYMENT_METHOD_LAST_4, " +
        "PAYMENT_METHOD.PMCVV AS PAYMENT_METHOD_CCV, " +
        "PAYMENT_METHOD.PMEXPDTE AS PAYMENT_METHOD_EXPIRATION_DATE, " +
        "PAYMENT_METHOD.PMTOKEN AS PAYMENT_METHOD_TOKEN, " +
        "PAYMENT_METHOD.PMACCT AS PAYMENT_METHOD_CARD_NUMBER, " +
        "PAYMENT_METHOD.PMBANK AS PAYMENT_METHOD_BANK, " +
        "PAYMENT_METHOD.PMABA AS PAYMENT_METHOD_BANK_ROUTING_NUMBER, " +
        "PAYMENT_METHOD.PMACCT AS PAYMENT_METHOD_BANK_ACCOUNT_NUMBER, " +
        "PAYMENT_METHOD.PMTYPE AS PAYMENT_METHOD_BANK_ACCOUNT_TYPE, " +
        "CASE PAYMENT_METHOD.PMONETIME " +
        "   WHEN '1' THEN 1 " +
        "   ELSE 0 " +
        "END AS PAYMENT_METHOD_IS_ONE_TIME, " +
        "PAYMENT_METHOD_AUTO_PAY.CPAUTOPAY AS IS_AUTO_PAY " +
        "FROM WEBPAY CUSTOMER_PAYMENT_METHOD " +
        "INNER JOIN PAYM PAYMENT_METHOD ON PAYMENT_METHOD.PMPAYID = CUSTOMER_PAYMENT_METHOD.WPPAYID " +
        "INNER JOIN CUSPAY PAYMENT_METHOD_AUTO_PAY ON " +
        "    PAYMENT_METHOD_AUTO_PAY.CPCRTUSR = LPAD(CUSTOMER_PAYMENT_METHOD.WPUSERID, 9, '0') " +
        "    AND PAYMENT_METHOD_AUTO_PAY.CPPAYID = PAYMENT_METHOD.PMPAYID " +
        "INNER JOIN WEBU WEB_ACCOUNT ON " +
        "    WEB_ACCOUNT.WEUSERID = LPAD(CUSTOMER_PAYMENT_METHOD.WPUSERID, 9, '0') " +
        "WHERE CUSTOMER_PAYMENT_METHOD.WPUSERID = :userId " +
        "AND PAYMENT_METHOD_AUTO_PAY.CPAUTOPAY = 'Y'", resultSetMapping = "AutoPayDetailsMapping")
@SqlResultSetMapping(name = "AutoPayDetailsMapping", classes = @ConstructorResult(targetClass = CustomerAutoPayMethod.class, columns = {
        @ColumnResult(name = "CUSTOMER_ID", type = Long.class),
        @ColumnResult(name = "PAYMENT_METHOD_ID", type = Long.class),
        @ColumnResult(name = "CUSTOMER_FIRST_NAME", type = String.class),
        @ColumnResult(name = "CUSTOMER_MIDDLE_NAME", type = String.class),
        @ColumnResult(name = "CUSTOMER_LAST_NAME", type = String.class),
        @ColumnResult(name = "CUSTOMER_ADDRESS_LINE_1", type = String.class),
        @ColumnResult(name = "CUSTOMER_ADDRESS_LINE_2", type = String.class),
        @ColumnResult(name = "CUSTOMER_STATE", type = String.class),
        @ColumnResult(name = "CUSTOMER_CITY", type = String.class),
        @ColumnResult(name = "CUSTOMER_ZIP", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_TYPE", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_LAST_4", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_CCV", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_EXPIRATION_DATE", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_TOKEN", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_CARD_NUMBER", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_BANK", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_BANK_ROUTING_NUMBER", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_BANK_ACCOUNT_NUMBER", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_BANK_ACCOUNT_TYPE", type = String.class),
        @ColumnResult(name = "PAYMENT_METHOD_IS_ONE_TIME", type = Integer.class),
        @ColumnResult(name = "IS_AUTO_PAY", type = String.class)
}))
public class CustomerAutoPayMethod {

    @Id
    @Column(name = "CUSTOMER_ID")
    private Long customerId;

    @Column(name = "PAYMENT_METHOD_ID")
    private Long paymentMethodId;

    @Column(name = "CUSTOMER_FIRST_NAME")
    private String customerFirstName;

    @Column(name = "CUSTOMER_MIDDLE_NAME")
    private String customerMiddleName;

    @Column(name = "CUSTOMER_LAST_NAME")
    private String customerLastName;

    @Column(name = "CUSTOMER_ADDRESS_LINE_1")
    private String customerAddressLine1;

    @Column(name = "CUSTOMER_ADDRESS_LINE_2")
    private String customerAddressLine2;

    @Column(name = "CUSTOMER_STATE")
    private String customerState;

    @Column(name = "CUSTOMER_CITY")
    private String customerCity;

    @Column(name = "CUSTOMER_ZIP")
    private String customerZip;

    @Column(name = "PAYMENT_METHOD_TYPE")
    private String paymentMethodType;

    @Column(name = "PAYMENT_METHOD_LAST_4")
    private String paymentMethodLast4;

    @Column(name = "PAYMENT_METHOD_CCV")
    private String paymentMethodCcv;

    @Column(name = "PAYMENT_METHOD_EXPIRATION_DATE")
    private String paymentMethodExpirationDate;

    @Column(name = "PAYMENT_METHOD_TOKEN")
    private String paymentMethodToken;

    @Column(name = "PAYMENT_METHOD_CARD_NUMBER")
    private String paymentMethodCardNumber;

    @Column(name = "PAYMENT_METHOD_BANK")
    private String paymentMethodBank;

    @Column(name = "PAYMENT_METHOD_BANK_ROUTING_NUMBER")
    private String paymentMethodBankRoutingNumber;

    @Column(name = "PAYMENT_METHOD_BANK_ACCOUNT_NUMBER")
    private String paymentMethodBankAccountNumber;

    @Column(name = "PAYMENT_METHOD_BANK_ACCOUNT_TYPE")
    private String paymentMethodBankAccountType;

    @Column(name = "PAYMENT_METHOD_IS_ONE_TIME")
    private Integer paymentMethodIsOneTime;

    @Column(name = "IS_AUTO_PAY")
    private String isAutoPay;
}
