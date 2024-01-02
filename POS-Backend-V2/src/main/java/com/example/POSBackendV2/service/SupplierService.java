package com.example.POSBackendV2.service;

import com.example.POSBackendV2.entity.Purchase;
import com.example.POSBackendV2.entity.Supplier;
import com.example.POSBackendV2.repository.PurchaseRepository;
import com.example.POSBackendV2.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {

    private final SupplierRepository supplierRepository;

    @Autowired
    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    public Supplier saveSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public List<Supplier> getAllSupplier() {
        return supplierRepository.findAll();
    }

    public Supplier supplierGetById(Long id) {
        return this.supplierRepository.findById(id).orElse(new Supplier());
    }
}
