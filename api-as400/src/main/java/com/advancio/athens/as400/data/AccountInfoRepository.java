package com.advancio.athens.as400.data;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advancio.athens.as400.model.AccountInfo;

public interface AccountInfoRepository extends JpaRepository<AccountInfo, String> {

    Optional<AccountInfo> findByIdAndCompanyType(String id, String companyType);
}
