package com.advancio.athens.as400.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.advancio.athens.as400.model.CustomerBalanceDetails;

public interface CustomerBalanceDetailsRepository extends JpaRepository<CustomerBalanceDetails, Long> {

    @Query(name = "findByCustomerAccount", nativeQuery = true)
    CustomerBalanceDetails findByCustomerAccount(Long accountNumber, String accountType);
}
