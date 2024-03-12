package com.advancio.athens.as400.data;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.advancio.athens.as400.model.CustomerAutoPayMethod;

public interface CustomerAutoPayMethodRepository extends JpaRepository<CustomerAutoPayMethod, Long> {

    @Query(name = "findAutoPaymentMethodByEmail", nativeQuery = true)
    Optional<CustomerAutoPayMethod> findAutoPaymentMethodByUserId(Long userId);
}
