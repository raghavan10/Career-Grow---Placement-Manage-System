package com.placement.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.placement.demo.model.ProxyPlacement;

@Repository
public interface ProxyPlacementRepository extends JpaRepository<ProxyPlacement, Integer> {
}
