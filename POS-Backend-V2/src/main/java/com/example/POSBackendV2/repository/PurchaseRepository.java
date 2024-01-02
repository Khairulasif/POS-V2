package com.example.POSBackendV2.repository;

import com.example.POSBackendV2.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase,Long> {
}