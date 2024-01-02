package com.example.POSBackendV2.repository;

import com.example.POSBackendV2.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier,Long> {
    List<Supplier> findBySupplierType(String supplierType);
}
