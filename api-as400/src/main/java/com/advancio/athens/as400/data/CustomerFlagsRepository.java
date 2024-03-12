package com.advancio.athens.as400.data;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.advancio.athens.as400.model.CustomerFlags;

public interface CustomerFlagsRepository extends JpaRepository<CustomerFlags, String> {

    @Query(name = "findCustomerFlagsByAccountNumber", nativeQuery = true)
    Optional<CustomerFlags> findCustomerFlagsByAccountNumber(Long accountNumber);

    @Modifying
    @Query(value = "UPDATE CEXT " +
            "SET CEMS13 = :pdfFlag, CEBNOT = :emailFlag " +
            "WHERE CECUST = :accountNumber", nativeQuery = true)
    void updateCustomerFlags(String pdfFlag, String emailFlag, Long accountNumber);
}
