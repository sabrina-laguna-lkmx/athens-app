package com.advancio.athens.as400.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.advancio.athens.as400.model.CustomerPaymentDetails;

public interface CustomerPaymentDetailsRepository extends JpaRepository<CustomerPaymentDetails, Long> {
    
    @Query(name = "findByUserId", nativeQuery = true)
    List<CustomerPaymentDetails> findByUserId(Long userId);
}
