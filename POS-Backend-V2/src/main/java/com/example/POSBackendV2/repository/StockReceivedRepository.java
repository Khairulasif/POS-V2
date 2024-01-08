package com.example.POSBackendV2.repository;

import com.example.POSBackendV2.entity.ProductCategory;
import com.example.POSBackendV2.entity.StockReceived;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockReceivedRepository extends JpaRepository<StockReceived,Long> {
    List<StockReceived> findByStockStatus(boolean stockStatus);
}
