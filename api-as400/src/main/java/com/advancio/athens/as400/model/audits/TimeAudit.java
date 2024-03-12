package com.advancio.athens.as400.model.audits;

import java.time.LocalDate;
import java.time.LocalTime;

import com.advancio.athens.as400.lib.DateConverter;
import com.advancio.athens.as400.lib.TimeConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Embeddable;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

@Data
@MappedSuperclass
@Embeddable
public class TimeAudit {

    @Column(name = "CREATION_DATE")
    @Convert(converter = DateConverter.class)
    protected LocalDate creationDate;

    @Column(name = "CREATION_TIME")
    @Convert(converter = TimeConverter.class)
    protected LocalTime creationTime;

    @Column(name = "UPDATE_DATE")
    @Convert(converter = DateConverter.class)
    protected LocalDate updateDate;

    @Column(name = "UPDATE_TIME")
    @Convert(converter = TimeConverter.class)
    protected LocalTime updateTime;

    // Custom getter for creationTime
    public LocalTime getCreationTime() {
        if (creationDate != null) {
            return creationTime;
        } else {
            return null;
        }
    }

    // Custom getter for updateTime
    public LocalTime getUpdateTime() {
        if (updateDate != null) {
            return updateTime;
        } else {
            return null;
        }
    }
}
