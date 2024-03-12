package com.advancio.athens.as400.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class AccountId implements Serializable {
    @Column(name = "WMUSERID")
    private Long userId;

    @Column(name = "WMCUST")
    private Long customerNumber; 
}
