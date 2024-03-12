package com.advancio.athens.as400.data;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.advancio.athens.as400.model.PaymentMethod;
import com.advancio.athens.as400.model.WebUser;

@Repository
public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {

    @Query("SELECT pmr.savedPaymentMethod FROM PaymentMethodRegistration pmr WHERE pmr.webUser = :webUser")
    Page<PaymentMethod> findByWebUser(WebUser webUser, Pageable pageable);
}
