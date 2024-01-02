package com.example.POSBackendV2.repository;

import com.example.POSBackendV2.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase,Long> {
    @Query("SELECT p FROM Purchase p JOIN p.products pr WHERE pr.productId = :productId")
    Purchase findByProductId(Long productId);

}
