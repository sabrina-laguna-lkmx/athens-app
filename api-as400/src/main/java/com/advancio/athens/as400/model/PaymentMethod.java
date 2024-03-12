package com.advancio.athens.as400.model;

import com.advancio.athens.as400.lib.TrimmedStringSerializer;
import com.advancio.athens.as400.model.audits.UserAudit;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "PAYM")
public class PaymentMethod {

    @Id
    @Column(name = "PMPAYID")
    private Long paymentMethodId;

    @Column(name = "PMGATEWAY")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String gatewayToken;

    @Column(name = "PMFNAME")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String firstName;

    @Column(name = "PMMI")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String middleInitialName;

    @Column(name = "PMLNAME")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String lastName;

    @Column(name = "PMADD1")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String address1;

    @Column(name = "PMADD2")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String address2;

    @Column(name = "PMCITY")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String city;

    @Column(name = "PMSTATE")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String state;

    @Column(name = "PMZIP")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String zipCode;

    @Column(name = "PMTYPE")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String paymentType;

    @Column(name = "PMONETIME")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String recurrentPayment;

    @Column(name = "PMTOKEN")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String secureToken;

    @Column(name = "PMLAST4")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String ccLast4;

    @Column(name = "PMBANK")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String bankName;

    @Column(name = "PMABA")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String bankRoutingNumber;

    @Column(name = "PMACCT")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String accountNumber;

    @Column(name = "PMEXPDTE")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String cardExpiration;

    @Column(name = "PMCVV")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String ccvNumber;

    @Column(name = "PMIRSID")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String irsEmployeeId;

    @Column(name = "PMBKDEST")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String bankDestination;
    
    @Column(name = "PMBKORIG")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String bankOrigin;

    @Column(name = "PMEFTDESC")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String eftEncryptionEntry;

    @Column(name = "PMEGRPID")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String eBillingGroupId;

    @Column(name = "PMECUSID")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String eBillingCustId;

    @Column(name = "PMSSN")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String ssnNumber;

    @Column(name = "PMDL")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String driverLicense;

    @Column(name = "PMHASH")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String hashProtectedData;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "creationDate", column = @Column(name = "PMCRTDTE")),
            @AttributeOverride(name = "creationTime", column = @Column(name = "PMCRTTIM")),
            @AttributeOverride(name = "updateDate",   column = @Column(name = "PMUPDDTE")),
            @AttributeOverride(name = "updateTime",   column = @Column(name = "PMUPDTIM")),
            @AttributeOverride(name = "creationUser", column = @Column(name = "PMCRTUSR")),
            @AttributeOverride(name = "updateUser",   column = @Column(name = "PMUPDUSR")),
    })
    private UserAudit audit;
}

