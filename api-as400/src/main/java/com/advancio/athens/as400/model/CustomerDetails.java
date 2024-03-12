package com.advancio.athens.as400.model;


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
@SqlResultSetMapping(
    name = "CustomerDetailsMapping",
    classes = @ConstructorResult(
        targetClass = CustomerDetails.class,
        columns = {
            @ColumnResult(name = "CUSTOMER_ID", type = Long.class),
            @ColumnResult(name = "CUSTOMER_EMAIL", type = String.class),
            @ColumnResult(name = "CUSTOMER_ACCOUNT", type = String.class),
            @ColumnResult(name = "CUSTOMER_COMPANY", type = String.class)
        }
    )
)
@NamedNativeQuery(
    name = "findByEmail",
    query = "SELECT CUSTOMER.WEUSERID AS CUSTOMER_ID, " +
            "CUSTOMER.WEEMAL AS CUSTOMER_EMAIL, " +
            "CUSTOMER_DETAIL.WMCUST AS CUSTOMER_ACCOUNT, " +
            "CUSTOMER_DETAIL.WMCOMP AS CUSTOMER_COMPANY " +
            "FROM WEBU CUSTOMER " +
            "INNER JOIN WEBM CUSTOMER_DETAIL ON CUSTOMER_DETAIL.WMUSERID = CUSTOMER.WEUSERID " +
            "WHERE CUSTOMER.WEEMAL = :email",
    resultSetMapping = "CustomerDetailsMapping"
)
@Entity
public class CustomerDetails {
    
    @Id
    @Column(name = "CUSTOMER_ID")
    private Long customerId;

    @Column(name = "CUSTOMER_EMAIL")
    private String customerEmail;

    @Column(name = "CUSTOMER_ACCOUNT")
    private String customerAccount;

    @Column(name = "CUSTOMER_COMPANY")
    private String customerCompany;

    public String getCustomerEmail() {
        return customerEmail.trim();
    }
}
