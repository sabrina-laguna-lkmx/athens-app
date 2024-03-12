package com.advancio.athens.as400.model;

import lombok.Data;

@Data
public class BillingOptions {

    private CustomerAutoPayMethod autoPayMethod;

    private Boolean emailFlag;

    private Boolean pdfFlag;

    private Boolean printedFlag;

    public void setCustomerFlags(CustomerFlags rawFlags) {
        this.emailFlag = rawFlags.getEmailFlag().equals("P") ? false : true;

        if (rawFlags.getEmailFlag().equals("B") && rawFlags.getPdfFlag().equals("P")) {
            this.pdfFlag = false;
            this.printedFlag = true;
        }

        if (rawFlags.getEmailFlag().equals("P") && rawFlags.getPdfFlag().equals("P")) {
            this.pdfFlag = false;
            this.printedFlag = true;
        }

        if (rawFlags.getEmailFlag().equals("P") && rawFlags.getPdfFlag().equals("B")) {
            this.pdfFlag = true;
            this.printedFlag = true;
        }

        if (rawFlags.getEmailFlag().equals("P") && rawFlags.getPdfFlag().equals("E")) {
            this.pdfFlag = true;
            this.printedFlag = false;
        }

        if (rawFlags.getEmailFlag().equals("E") && rawFlags.getPdfFlag().equals("P")) {
            this.pdfFlag = false;
            this.printedFlag = false;
        }
    }
}
