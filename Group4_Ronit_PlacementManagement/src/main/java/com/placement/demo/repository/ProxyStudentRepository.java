package com.placement.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.placement.demo.model.ProxyStudent;

public interface ProxyStudentRepository extends JpaRepository<ProxyStudent, Integer> {
    // No need to add extra methods; JpaRepository provides all basic CRUD methods.
}
