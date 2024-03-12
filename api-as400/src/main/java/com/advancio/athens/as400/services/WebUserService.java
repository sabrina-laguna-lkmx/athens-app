package com.advancio.athens.as400.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advancio.athens.as400.data.AccountInfoRepository;
import com.advancio.athens.as400.data.AccountRepository;
import com.advancio.athens.as400.data.CustomerAutoPayMethodRepository;
import com.advancio.athens.as400.data.CustomerDetailsRepository;
import com.advancio.athens.as400.data.CustomerFlagsRepository;
import com.advancio.athens.as400.data.WebUserRepository;
import com.advancio.athens.as400.error.BillingOptionsNotValidException;
import com.advancio.athens.as400.error.CredentialsNotValidException;
import com.advancio.athens.as400.error.ResourceNotFoundException;
import com.advancio.athens.as400.model.Account;
import com.advancio.athens.as400.model.AccountInfo;
import com.advancio.athens.as400.model.BillingOptions;
import com.advancio.athens.as400.model.CustomerAutoPayMethod;
import com.advancio.athens.as400.model.CustomerDetails;
import com.advancio.athens.as400.model.CustomerFlags;
import com.advancio.athens.as400.model.WebUser;
import com.advancio.athens.as400.transfer.WebUserBasicView;
import com.advancio.athens.as400.web.command.BillingOptionsCommand;

import jakarta.transaction.Transactional;

@Service
public class WebUserService {

    @Autowired
    private WebUserRepository webUserRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CustomerDetailsRepository customerDetailsRepository;

    @Autowired
    private CustomerFlagsRepository customerFlagsRepository;

    @Autowired
    private CustomerAutoPayMethodRepository customerAutoPayMethodRepository;

    @Autowired
    private AccountInfoRepository accountInfoRepository;

    public WebUser findUserById(Long id) {
        if (id == null) {
            return null;
        }

        return webUserRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("WebUser not found with id: " + id));
    }

    public CustomerDetails login(String email, String password) {
        CustomerDetails customerDetails = customerDetailsRepository.findByEmail(email)
                .orElseThrow(() -> new CredentialsNotValidException());

        return customerDetails;
    }

    public WebUserBasicView findUserBasicViewById(Long id) {
        return webUserRepository.findBasicViewById(id)
                .orElseThrow(() -> new ResourceNotFoundException("WebUser not found with id: " + id));
    }

    public WebUserBasicView findUserByEmail(String email) {
        List<WebUserBasicView> users = webUserRepository.findByEmail(email);
        if (users.isEmpty()) {
            throw new ResourceNotFoundException("WebUser not found with email: " + email);
        }
        return users.get(0); // returning the first element since email is supposed to be unique
    }

    public WebUser findWebUserByEmail(String email) {
        List<WebUser> users = webUserRepository.findWebUserByEmail(email);
        if (users.isEmpty()) {
            throw new ResourceNotFoundException("WebUser not found with email: " + email);
        }
        return users.get(0);
    }

    public List<Account> findAccountsByWebUser(WebUser webUser) {
        return accountRepository.findByWebUser(webUser);
    }

    public BillingOptions findBillingOptionsByAccount(Long accountNumber, Long userId) {
        BillingOptions billingOptions = new BillingOptions();

        CustomerFlags flags = customerFlagsRepository.findCustomerFlagsByAccountNumber(accountNumber)
                .orElseThrow(
                        () -> new ResourceNotFoundException("customer flags not found with account: " + accountNumber));
        billingOptions.setCustomerFlags(flags);

        CustomerAutoPayMethod customerAutoPayMethod = customerAutoPayMethodRepository
                .findAutoPaymentMethodByUserId(userId)
                .orElse(new CustomerAutoPayMethod());

        billingOptions.setAutoPayMethod(customerAutoPayMethod);

        return billingOptions;
    }

    @Transactional
    public BillingOptions updateBillingOptionsByAccount(Long accountNumber, Long userId,
            BillingOptionsCommand command) {
        if (command.getEmailFlag() == Boolean.TRUE && command.getPdfFlag() == Boolean.TRUE) {
            throw new BillingOptionsNotValidException("email and pdf flags cannot be enabled at the same time");
        }

        CustomerFlags customerFlags = getCustomerFlagsByBillingOptions(command);

        customerFlagsRepository.updateCustomerFlags(customerFlags.getPdfFlag(), customerFlags.getEmailFlag(),
                accountNumber);

        BillingOptions billingOptions = new BillingOptions();
        billingOptions.setCustomerFlags(customerFlags);

        return billingOptions;
    }

    private CustomerFlags getCustomerFlagsByBillingOptions(BillingOptionsCommand command) {

        CustomerFlags flags = new CustomerFlags();

        if (command.getEmailFlag() == Boolean.TRUE && command.getPdfFlag() == Boolean.FALSE
                && command.getPrintedFlag() == Boolean.FALSE) {
            flags.setPdfFlag("P");
            flags.setEmailFlag("E");
        }

        if (command.getEmailFlag() == Boolean.FALSE && command.getPdfFlag() == Boolean.TRUE
                && command.getPrintedFlag() == Boolean.FALSE) {
            flags.setPdfFlag("E");
            flags.setEmailFlag("P");
        }

        if (command.getEmailFlag() == Boolean.FALSE && command.getPdfFlag() == Boolean.TRUE
                && command.getPrintedFlag() == Boolean.TRUE) {
            flags.setPdfFlag("B");
            flags.setEmailFlag("P");
        }

        if (command.getEmailFlag() == Boolean.FALSE && command.getPdfFlag() == Boolean.FALSE
                && command.getPrintedFlag() == Boolean.TRUE) {
            flags.setPdfFlag("P");
            flags.setEmailFlag("P");
        }

        if (command.getEmailFlag() == Boolean.TRUE && command.getPdfFlag() == Boolean.FALSE
                && command.getPrintedFlag() == Boolean.TRUE) {
            flags.setPdfFlag("P");
            flags.setEmailFlag("B");
        }

        return flags;
    }

    public AccountInfo findCustomerAccountByCompanyTypeAndCustomerAccount(String companyType, Long customerAccount) {
        return accountInfoRepository.findByIdAndCompanyType(customerAccount.toString(), companyType)
                .orElseThrow(() -> new ResourceNotFoundException(
                        String.format("customer account not found by %d and %s", customerAccount, companyType)));
    }
}
