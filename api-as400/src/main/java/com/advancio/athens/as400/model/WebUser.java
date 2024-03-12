package com.advancio.athens.as400.model;

import com.advancio.athens.as400.lib.TrimmedStringSerializer;
import com.advancio.athens.as400.model.audits.UserProgramAudit;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "WEBU")
public class WebUser {
    @Id
    @Column(name = "WEUSERID")
    private Long id;

    @Column(name = "WEEMAL")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String email;

    @Column(name = "WEPWRD")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String password;

    @Column(name = "WESSL4")
    @JsonSerialize(using = TrimmedStringSerializer.class)
    private String last4SSN;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "creationDate", column = @Column(name = "WEADAT")),
            @AttributeOverride(name = "creationTime", column = @Column(name = "WEATIM")),
            @AttributeOverride(name = "creationUser", column = @Column(name = "WEAUSR")),
            @AttributeOverride(name = "creationProgram", column = @Column(name = "WEAPGM")),
            @AttributeOverride(name = "updateDate", column = @Column(name = "WECDAT")),
            @AttributeOverride(name = "updateTime", column = @Column(name = "WECTIM")),
            @AttributeOverride(name = "updateUser", column = @Column(name = "WECUSR")),
            @AttributeOverride(name = "updateProgram", column = @Column(name = "WECPGM"))
    })
    private UserProgramAudit audit;

}
