package com.advancio.athens.as400.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advancio.athens.as400.model.Account;
import com.advancio.athens.as400.model.AccountId;
import com.advancio.athens.as400.model.WebUser;

public interface AccountRepository extends JpaRepository<Account, AccountId> {
    List<Account> findByWebUser(WebUser webUser);
}
