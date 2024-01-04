package com.example.POSBackendV2.repository;

import com.example.POSBackendV2.entity.ProductCategory;
import com.example.POSBackendV2.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository<Stock,Long> {
//    @Query("SELECT s FROM Stock s WHERE s.productCategory = :productCategory")
//    Stock findByProductCategory(ProductCategory productCategory);
//Stock findByProductId(Long productId);
Stock findByProductCategory(ProductCategory productCategory);
}
