package com.example.POSBackendV2.service;
import com.example.POSBackendV2.entity.Purchase;
import com.example.POSBackendV2.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;

    @Autowired
    public PurchaseService(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    public Purchase savePurchaseWithProducts(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }
    public List<Purchase> getAllPurchase() {
        return purchaseRepository.findAll();
    }

    public Purchase purchaseGet(Long id) {
        return this.purchaseRepository.findById(id).orElse(new Purchase());
    }



}
