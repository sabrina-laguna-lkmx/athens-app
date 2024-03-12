package com.advancio.athens.as400.model;

import com.advancio.athens.as400.lib.TrimmedStringSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "CUST")
public class AccountInfo {

    @Id
    @JsonIgnore
    @Column(name = "CCUST#")
    private String id;

    @Column(name = "CSCITY")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String city;

    @Column(name = "CSSDIR")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String directional;

    @Column(name = "CSADR#")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String number;

    @Column(name = "CSZIP")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String postalCode;

    @Column(name = "CSSTAT")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String state;

    @Column(name = "CSSTRT")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String street;

    @Column(name = "CSSUFX")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String suffix;

    @Column(name = "CSLNAM")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String serviceName;

    @Column(name = "CCMPNY")
    private String companyType;

    public String getFormattedAddress() {
        return String.format("%s: %s %s %s %s, %s, %s %s", serviceName.trim(), number.trim(), directional.trim(),
                street.trim(), suffix.trim(), city.trim(),
                state.trim(), postalCode.trim());
    }
}
