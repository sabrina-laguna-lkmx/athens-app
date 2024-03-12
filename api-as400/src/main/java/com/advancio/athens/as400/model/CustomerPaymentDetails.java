package com.advancio.athens.as400.model;

import org.apache.commons.lang3.StringUtils;

import com.advancio.athens.as400.lib.TrimmedStringSerializer;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import jakarta.persistence.Column;
import jakarta.persistence.ColumnResult;
import jakarta.persistence.ConstructorResult;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedNativeQuery;
import jakarta.persistence.SqlResultSetMapping;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
@SqlResultSetMapping(
    name = "CustomerPaymentDetailsMapping",
    classes = @ConstructorResult(
        targetClass = CustomerPaymentDetails.class,
        columns = {
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
            @ColumnResult(name = "PAYMENT_METHOD_AUTOPAY", type = String.class),
            @ColumnResult(name = "PAYMENT_METHOD_ENROLLED_ACCOUNT", type = Long.class),
            @ColumnResult(name = "PAYMENT_METHOD_IS_ONE_TIME", type = Integer.class)
        }
    )
)
@NamedNativeQuery(
    name = "findByUserId",
    query = "SELECT CUSTOMER_PAYMENT_METHOD.WPUSERID AS CUSTOMER_ID, " +
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
            "CUSTOMER_PAYMENT_OPTIONS.CPAUTOPAY AS PAYMENT_METHOD_AUTOPAY, " +
            "CUSTOMER_PAYMENT_OPTIONS.CPCUST AS PAYMENT_METHOD_ENROLLED_ACCOUNT, " +
            "CASE PAYMENT_METHOD.PMONETIME " +
            "   WHEN '1' THEN 1 " +
            "   ELSE 0 " +
            "END AS PAYMENT_METHOD_IS_ONE_TIME " +
            "FROM WEBPAY CUSTOMER_PAYMENT_METHOD " +
            "INNER JOIN PAYM PAYMENT_METHOD ON PAYMENT_METHOD.PMPAYID = CUSTOMER_PAYMENT_METHOD.WPPAYID " +
            "LEFT JOIN CUSPAY CUSTOMER_PAYMENT_OPTIONS ON CUSTOMER_PAYMENT_OPTIONS.CPPAYID = CUSTOMER_PAYMENT_METHOD.WPPAYID " +
            "WHERE CUSTOMER_PAYMENT_METHOD.WPUSERID = :userId",
    resultSetMapping = "CustomerPaymentDetailsMapping"
)
@Entity
public class CustomerPaymentDetails {

    @Column(name = "CUSTOMER_ID")
    private Long customerId;

    @Id
    @Column(name = "PAYMENT_METHOD_ID")
    private Long paymentMethodId;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "CUSTOMER_FIRST_NAME")
    private String customerFirstName;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "CUSTOMER_MIDDLE_NAME")
    private String customerMiddleName;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "CUSTOMER_LAST_NAME")
    private String customerLastName;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "CUSTOMER_ADDRESS_LINE_1")
    private String customerAddressLine1;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "CUSTOMER_ADDRESS_LINE_2")
    private String customerAddressLine2;

    @Column(name = "CUSTOMER_STATE")
    private String customerState;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "CUSTOMER_CITY")
    private String customerCity;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "CUSTOMER_ZIP")
    private String customerZip;

    @Column(name = "PAYMENT_METHOD_TYPE")
    private String paymentMethodType;

    @Column(name = "PAYMENT_METHOD_LAST_4")
    private String paymentMethodLast4;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "PAYMENT_METHOD_CCV")
    private String paymentMethodCcv;

    @Column(name = "PAYMENT_METHOD_EXPIRATION_DATE")
    private String paymentMethodExpirationDate;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "PAYMENT_METHOD_TOKEN")
    private String paymentMethodToken;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "PAYMENT_METHOD_CARD_NUMBER")
    private String paymentMethodCardNumber;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "PAYMENT_METHOD_BANK")
    private String paymentMethodBank;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "PAYMENT_METHOD_BANK_ROUTING_NUMBER")
    private String paymentMethodBankRoutingNumber;

    @JsonSerialize(using = TrimmedStringSerializer.class)
    @Column(name = "PAYMENT_METHOD_BANK_ACCOUNT_NUMBER")
    private String paymentMethodBankAccountNumber;

    @Column(name = "PAYMENT_METHOD_BANK_ACCOUNT_TYPE")
    private String paymentMethodBankAccountType;

    @Column(name = "PAYMENT_METHOD_AUTOPAY")
    private String paymentMethodAutopay;

    @Column(name = "PAYMENT_METHOD_ENROLLED_ACCOUNT")
    private Long paymentMethodEnrolledAccount;

    @Column(name = "PAYMENT_METHOD_IS_ONE_TIME")
    private Integer paymentMethodIsOneTime;

    public String getPaymentMethodExpirationDate() {
        if (paymentMethodExpirationDate.equals("0")) {
            return paymentMethodExpirationDate;
        }

        return StringUtils.leftPad(paymentMethodExpirationDate, 4, "0");
    }
}

