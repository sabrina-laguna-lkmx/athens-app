package com.advancio.athens.as400.lib;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class DateConverter implements AttributeConverter<LocalDate, Long> {

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyyMMdd");

    @Override
    public Long convertToDatabaseColumn(LocalDate date) {
        if (date == null) {
            return null;
        }
        return Long.parseLong(date.format(DATE_FORMATTER));
    }

    @Override
    public LocalDate convertToEntityAttribute(Long dbData) {
        if (dbData == null) {
            return null;
        }
        try {
            return LocalDate.parse(String.valueOf(dbData), DATE_FORMATTER);
        } catch(DateTimeParseException e) {
            return null;
        }
    }
}
