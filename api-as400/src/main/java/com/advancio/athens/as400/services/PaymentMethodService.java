package com.advancio.athens.as400.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.advancio.athens.as400.data.CustomerPaymentDetailsRepository;
import com.advancio.athens.as400.data.PaymentMethodRepository;
import com.advancio.athens.as400.model.CustomerPaymentDetails;
import com.advancio.athens.as400.model.PaymentMethod;
import com.advancio.athens.as400.model.WebUser;

@Service
public class PaymentMethodService {

    @Autowired
    private PaymentMethodRepository paymentMethodRepository;

    @Autowired
    private CustomerPaymentDetailsRepository customerPaymentDetailsRepository;

    @Autowired
    private WebUserService webUserService;

    public Page<PaymentMethod> findPaymentMethodsByWebUserId(Long userId, Pageable pageable) {
        WebUser webUser = webUserService.findUserById(userId);
        return paymentMethodRepository.findByWebUser(webUser, pageable);
    }

    public List<CustomerPaymentDetails> findPaymentDetailsByUserId(Long userId) {
        return customerPaymentDetailsRepository.findByUserId(userId);
    }
}
