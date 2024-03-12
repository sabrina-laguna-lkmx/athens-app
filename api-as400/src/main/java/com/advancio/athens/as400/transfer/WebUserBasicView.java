package com.advancio.athens.as400.transfer;

import com.advancio.athens.as400.lib.TrimmedStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public interface WebUserBasicView {
    Long getId();

    @JsonSerialize(using = TrimmedStringSerializer.class)
    String getEmail();

    @JsonSerialize(using = TrimmedStringSerializer.class)
    String getLast4SSN();
}
