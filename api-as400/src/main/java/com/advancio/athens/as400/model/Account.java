package com.advancio.athens.as400.model;

import com.advancio.athens.as400.model.audits.UserProgramAudit;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "WEBM") // replace with your actual table name
public class Account {
    @EmbeddedId
    @JsonUnwrapped
    private AccountId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WMUSERID", insertable = false, updatable = false)
    @JsonBackReference
    private WebUser webUser;

    @Column(name = "WMCOMP")
    private String company;

    @OneToOne
    @JsonUnwrapped
    @JoinColumn(name = "WMCUST", insertable = false, updatable = false)
    private AccountInfo accountInfo;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "creationDate", column = @Column(name = "WMADAT")),
            @AttributeOverride(name = "creationTime", column = @Column(name = "WMATIM")),
            @AttributeOverride(name = "creationUser", column = @Column(name = "WMAUSR")),
            @AttributeOverride(name = "creationProgram", column = @Column(name = "WMAPGM")),
            @AttributeOverride(name = "updateDate", column = @Column(name = "WMCDAT")),
            @AttributeOverride(name = "updateTime", column = @Column(name = "WMCTIM")),
            @AttributeOverride(name = "updateUser", column = @Column(name = "WMCUSR")),
            @AttributeOverride(name = "updateProgram", column = @Column(name = "WMCPGM"))
    })
    private UserProgramAudit audit;

}
