package com.advancio.athens.as400.model;

import java.math.BigDecimal;

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
@SqlResultSetMapping(name = "CustomerBalanceDetailsMapping", classes = @ConstructorResult(targetClass = CustomerBalanceDetails.class, columns = {
        @ColumnResult(name = "CUSTOMER_ACCOUNT_NUMBER", type = Long.class),
        @ColumnResult(name = "UNBILLED_CHGS", type = BigDecimal.class),
        @ColumnResult(name = "PREVIOUS_BALANCE", type = BigDecimal.class),
        @ColumnResult(name = "BALANCE_FORWARD", type = BigDecimal.class),
        @ColumnResult(name = "UNAPPLIED_CASH", type = BigDecimal.class),
        @ColumnResult(name = "CURRENT_PMTS", type = BigDecimal.class),
        @ColumnResult(name = "CURRENT_CHGS", type = BigDecimal.class),
        @ColumnResult(name = "BALANCE_DUE", type = BigDecimal.class),
        @ColumnResult(name = "MONTHLY_CHG_AMT", type = BigDecimal.class)
}))
@NamedNativeQuery(name = "findByCustomerAccount", query = "SELECT c.\"CCUST#\" AS CUSTOMER_ACCOUNT_NUMBER, " +
        "c.CUNBIL AS UNBILLED_CHGS, " +
        "c.CPRVBL AS PREVIOUS_BALANCE, " +
        "c.\"CBFWD$\" AS BALANCE_FORWARD, " +
        "c.CUNAPL AS UNAPPLIED_CASH, " +
        "c.\"CCPMT$\" AS CURRENT_PMTS, " +
        "c.\"CCCHG$\" AS CURRENT_CHGS, " +
        "c.\"CBDUE$\" AS BALANCE_DUE, " +
        "c.\"CMTH$\" AS MONTHLY_CHG_AMT " +
        "FROM CUST c " +
        "WHERE \"CCUST#\" = :accountNumber AND CCMPNY = :accountType", resultSetMapping = "CustomerBalanceDetailsMapping")
@Entity
public class CustomerBalanceDetails {

    @Id
    @Column(name = "CUSTOMER_ACCOUNT_NUMBER")
    private Long customerAccountNumber;

    @Column(name = "UNBILLED_CHGS")
    private BigDecimal unbilledCharges;

    @Column(name = "PREVIOUS_BALANCE")
    private BigDecimal previousBalance;

    @Column(name = "BALANCE_FORWARD")
    private BigDecimal balanceForward;

    @Column(name = "UNAPPLIED_CASH")
    private BigDecimal unappliedCash;

    @Column(name = "CURRENT_PMTS")
    private BigDecimal currentPayments;

    @Column(name = "CURRENT_CHGS")
    private BigDecimal currentCharges;

    @Column(name = "BALANCE_DUE")
    private BigDecimal balanceDue;

    @Column(name = "MONTHLY_CHG_AMT")
    private BigDecimal monthlyChargeAmount;

}
