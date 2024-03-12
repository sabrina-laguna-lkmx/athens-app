package com.advancio.athens.as400.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;

import jakarta.persistence.ColumnResult;
import jakarta.persistence.ConstructorResult;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedNativeQuery;
import jakarta.persistence.SqlResultSetMapping;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@NamedNativeQuery(name = "findByAccountNumber", query = "SELECT BHID# AS CONTROL_ID, " +
        "BHDDAT AS DUE_DATE, " +
        "BHBDAT AS DATE_SENT, " +
        "BHBMSG AS BILL_PERIOD_MSG, " +
        "BHTOT$ AS TOTAL_AMOUNT, " +
        "BHWO# AS INVOICE_NUMBER " +
        "FROM BCFHDR " +
        "WHERE BHCUST = :accountNumber " +
        "ORDER BY BHDDAT DESC", resultSetMapping = "BillingDetailsMapping")
@SqlResultSetMapping(name = "BillingDetailsMapping", classes = @ConstructorResult(targetClass = CustomerBill.class, columns = {
        @ColumnResult(name = "CONTROL_ID", type = Long.class),
        @ColumnResult(name = "DUE_DATE", type = Long.class),
        @ColumnResult(name = "DATE_SENT", type = Long.class),
        @ColumnResult(name = "BILL_PERIOD_MSG", type = String.class),
        @ColumnResult(name = "TOTAL_AMOUNT", type = Double.class),
        @ColumnResult(name = "INVOICE_NUMBER", type = Long.class),
}))
@Entity
public class CustomerBill {

    @Id
    private Long controlId;

    private Double amount;

    private String date;

    private String dueDate;

    private String description;

    private Long invoiceNumber;

    public CustomerBill(Long controlId, Long dueDate, Long dateSent, String billPeriodMsg, Double totalAmount,
            Long invoiceNumber) {
        this.controlId = controlId;
        this.amount = totalAmount;
        this.date = converNumberToLongDateString(dateSent);
        this.dueDate = converNumberToLongDateString(dueDate);
        this.invoiceNumber = invoiceNumber;
        this.description = String.format("STATEMENT BALANCE %s", convertNumberToShortDateString(dateSent));
    }

    private String converNumberToLongDateString(Long number) {
        String paddedNumber = StringUtils.leftPad(number.toString(), 6, "0");

        try {
            SimpleDateFormat inputDateFormat = new SimpleDateFormat("MMddyy");
            Date date = inputDateFormat.parse(paddedNumber);

            SimpleDateFormat outputDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            return outputDateFormat.format(date);

        } catch (ParseException e) {
            e.printStackTrace();
            return "Invalid date";
        }
    }

    private String convertNumberToShortDateString(Long number) {
        String paddedNumber = StringUtils.leftPad(number.toString(), 6, "0");
        try {
            SimpleDateFormat inputDateFormat = new SimpleDateFormat("MMddyy");
            Date date = inputDateFormat.parse(paddedNumber);

            SimpleDateFormat outputDateFormat = new SimpleDateFormat("MM-dd-yy");
            return outputDateFormat.format(date);

        } catch (ParseException e) {
            e.printStackTrace();
            return "Invalid date";
        }
    }
}
