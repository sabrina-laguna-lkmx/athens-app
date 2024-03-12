package com.advancio.athens.as400.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.advancio.athens.as400.data.CustomerBalanceDetailsRepository;
import com.advancio.athens.as400.data.CustomerBillRepository;
import com.advancio.athens.as400.model.Account;
import com.advancio.athens.as400.model.AccountInfo;
import com.advancio.athens.as400.model.BillingOptions;
import com.advancio.athens.as400.model.CustomerBalanceDetails;
import com.advancio.athens.as400.model.CustomerBill;
import com.advancio.athens.as400.model.CustomerPaymentDetails;
import com.advancio.athens.as400.model.WebUser;
import com.advancio.athens.as400.services.PaymentMethodService;
import com.advancio.athens.as400.services.WebUserService;
import com.advancio.athens.as400.transfer.WebUserBasicView;
import com.advancio.athens.as400.web.command.BillingOptionsCommand;
import com.advancio.athens.as400.web.response.CustomerBalanceResponse;

@RestController
public class WebUserController {

    @Autowired
    private WebUserService webUserService;

    @Autowired
    private PaymentMethodService paymentMethodService;

    @Autowired
    private CustomerBalanceDetailsRepository customerBalanceDetailsRepository;

    @Autowired
    private CustomerBillRepository customerBillRepository;

    private static final String RESIDENTIAL_COMPANY_TYPE = "CV";

    @GetMapping("/users")
    public WebUserBasicView findWebUserByEmail(@RequestParam String email) {
        return webUserService.findUserByEmail(email);
    }

    @GetMapping("/users/{userId}")
    public Object findOneWebUserById(@PathVariable Long userId, @RequestParam(required = false) String full) {
        if (full != null && !full.equalsIgnoreCase("false")) {
            return webUserService.findUserById(userId);
        } else {
            return webUserService.findUserBasicViewById(userId);
        }
    }

    @GetMapping("/users/{userId}/accounts")
    public List<Account> findAccountsByWebUser(@PathVariable Long userId,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        WebUser webUser = webUserService.findUserById(userId);
        List<Account> accounts = webUserService.findAccountsByWebUser(webUser);

        return accounts;
    }

    @GetMapping("/users/emails/{userMail}/accounts")
    public List<Account> findAccountsByWebUserMail(@PathVariable String userMail,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        WebUser webUser = webUserService.findWebUserByEmail(userMail);
        return webUserService.findAccountsByWebUser(webUser);
    }

    @GetMapping("/users/{userId}/payment-methods")
    public List<CustomerPaymentDetails> findPaymentMethodsByUserId(@PathVariable Long userId) {
        return paymentMethodService.findPaymentDetailsByUserId(userId);
    }

    @GetMapping("/accounts/{customerAccount}/companies/{companyType}/balances")
    public CustomerBalanceResponse findBalanceDetailsByCustomerAccount(@PathVariable Long customerAccount,
            @PathVariable String companyType) {

        CustomerBalanceDetails customerBalanceDetails = customerBalanceDetailsRepository
                .findByCustomerAccount(customerAccount, companyType);

        CustomerBalanceResponse balances = new CustomerBalanceResponse();

        balances.setCustomerNumber(customerBalanceDetails.getCustomerAccountNumber());
        balances.setBalanceDue(customerBalanceDetails.getBalanceDue());
        balances.setCurrentCharges(customerBalanceDetails.getCurrentCharges());
        balances.setCurrentPayments(customerBalanceDetails.getCurrentPayments());
        balances.setPendingPayments(customerBalanceDetails.getUnappliedCash());

        if (RESIDENTIAL_COMPANY_TYPE.equals(companyType)) {
            balances.setPreviousBalance(customerBalanceDetails.getPreviousBalance());
        } else {
            balances.setPreviousBalance(customerBalanceDetails.getBalanceForward());
        }

        return balances;
    }

    @GetMapping("/accounts/{customerAccount}/bills")
    public List<CustomerBill> findBillsByCustomerAccount(@PathVariable Long customerAccount) {
        return customerBillRepository.findByAccountNumber(customerAccount);
    }

    @GetMapping("/accounts/{customerAccount}/users/{userId}/billing-options")
    public BillingOptions findBillingOptionsByCustomerAccount(@PathVariable Long customerAccount,
            @PathVariable Long userId) {
        return webUserService.findBillingOptionsByAccount(customerAccount, userId);
    }

    @PutMapping("/accounts/{customerAccount}/users/{userId}/billing-options")
    public BillingOptions updateCustomerBillingOptions(@PathVariable Long customerAccount, @PathVariable Long userId,
            @RequestBody BillingOptionsCommand command) {
        return webUserService.updateBillingOptionsByAccount(customerAccount, userId, command);
    }

    @GetMapping("/accounts/{customerAccount}/companies/{companyType}")
    public AccountInfo findCustomerAccount(@PathVariable String companyType, @PathVariable Long customerAccount) {
        return webUserService.findCustomerAccountByCompanyTypeAndCustomerAccount(companyType, customerAccount);
    }
}
