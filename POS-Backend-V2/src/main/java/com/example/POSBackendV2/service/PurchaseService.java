package com.example.POSBackendV2.service;
import com.example.POSBackendV2.entity.Purchase;
import com.example.POSBackendV2.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

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


    public void updatePurchaseStatusByProductId(Long productId) {
        Purchase purchase = purchaseRepository.findByProductId(productId);

        if (purchase != null) {
            purchase.setStatus(true);
            purchaseRepository.save(purchase);
        } else {

        }
    }

    public List<Purchase> getPurchasesByDate(Date date) {
        // Convert the Date to LocalDate
        LocalDate targetDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

        // Filter purchases by date using Java 8 streams and LocalDate
        return purchaseRepository.findAll()
                .stream()
                .filter(purchase -> purchase.getPurchaseDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().isEqual(targetDate))
                .collect(Collectors.toList());
    }

    public List<Purchase> getPurchasesByStatus(boolean status) {
        return purchaseRepository.findByStatus(status);
    }

}
