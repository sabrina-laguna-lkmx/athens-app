package com.advancio.athens.as400.model.audits;

import com.advancio.athens.as400.lib.TrimmedStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Embeddable
public class UserAudit extends TimeAudit {
    @Column(name = "CREATION_USER")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String creationUser;

    @Column(name = "UPDATE_USER")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String updateUser;
}
