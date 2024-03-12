package com.advancio.athens.as400.data;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.advancio.athens.as400.model.WebUser;
import com.advancio.athens.as400.transfer.WebUserBasicView;

public interface WebUserRepository extends JpaRepository<WebUser, Long> {
    List<WebUserBasicView> findByEmail(String email);

    List<WebUser> findWebUserByEmail(String email);

    Optional<WebUser> findUserByEmail(String email);

    @Query("SELECT w as webUser FROM WebUser w WHERE w.id = ?1")
    Optional<WebUserBasicView> findBasicViewById(Long id);
}
