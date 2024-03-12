package com.advancio.athens.as400.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.advancio.athens.as400.model.CustomerBill;

public interface CustomerBillRepository extends JpaRepository<CustomerBill, Long> {

    @Query(name = "findByAccountNumber", nativeQuery = true)
    List<CustomerBill> findByAccountNumber(Long accountNumber);
}
