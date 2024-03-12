package com.advancio.athens.as400.web.command;

import lombok.Data;

@Data
public class BillingOptionsCommand {

    private Boolean autoPayFlag;

    private Boolean emailFlag;

    private Boolean pdfFlag;

    private Boolean printedFlag;
}
