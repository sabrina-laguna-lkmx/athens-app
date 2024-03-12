package com.advancio.athens.as400.data;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.advancio.athens.as400.model.CustomerDetails;

public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Long> {
    
    @Query(name = "findByEmail", nativeQuery = true)
    Optional<CustomerDetails> findByEmail(String email);
}
