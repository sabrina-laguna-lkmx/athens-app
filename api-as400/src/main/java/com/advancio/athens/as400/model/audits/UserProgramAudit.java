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
public class UserProgramAudit extends UserAudit {

    @Column(name = "CREATION_PROGRAM")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String creationProgram;

    @Column(name = "UPDATE_PROGRAM")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String updateProgram;
}

