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
@NoArgsConstructor
@AllArgsConstructor
@NamedNativeQuery(name = "findCustomerFlagsByAccountNumber", query = "SELECT c.CEMS13 AS PDF_FLAG, " +
        "c.CEBNOT AS EMAIL_FLAG " +
        "FROM CEXT c " +
        "WHERE c.CECUST = :accountNumber", resultSetMapping = "CustomerFlagsMapping")
@SqlResultSetMapping(name = "CustomerFlagsMapping", classes = @ConstructorResult(targetClass = CustomerFlags.class, columns = {
        @ColumnResult(name = "PDF_FLAG", type = String.class),
        @ColumnResult(name = "EMAIL_FLAG", type = String.class)
}))
public class CustomerFlags {

    @Id
    @Column(name = "PDF_FLAG")
    private String pdfFlag;

    @Column(name = "EMAIL_FLAG")
    private String emailFlag;
}
