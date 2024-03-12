package com.advancio.athens.as400.lib;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;


@Converter(autoApply = true)
public class TimeConverter implements AttributeConverter<LocalTime, Integer> {

    @Override
    public Integer convertToDatabaseColumn(LocalTime time) {
        if (time == null) {
            return null;
        }
        return Integer.parseInt(time.format(DateTimeFormatter.ofPattern("HHmmss")));
    }

    @Override
    public LocalTime convertToEntityAttribute(Integer dbData) {
        if (dbData == null) {
            return null;
        }
        return LocalTime.parse(String.format("%06d", dbData), DateTimeFormatter.ofPattern("HHmmss"));
    }
}