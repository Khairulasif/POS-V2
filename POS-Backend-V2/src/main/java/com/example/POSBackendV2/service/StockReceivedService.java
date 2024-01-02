package com.example.POSBackendV2.service;

import com.example.POSBackendV2.entity.Purchase;
import com.example.POSBackendV2.entity.StockReceived;
import com.example.POSBackendV2.repository.PurchaseRepository;
import com.example.POSBackendV2.repository.StockReceivedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockReceivedService {
    private final StockReceivedRepository stockReceivedRepository;

    @Autowired
    public StockReceivedService(StockReceivedRepository stockReceivedRepository) {
        this.stockReceivedRepository = stockReceivedRepository;
    }

    public StockReceived saveStockReceived(StockReceived stockReceived) {
        return stockReceivedRepository.save(stockReceived);

    }
    public List<StockReceived> getAllStockReceived() {
        return stockReceivedRepository.findAll();
    }

    public StockReceived stockReceivedGetById(Long id) {
        return this.stockReceivedRepository.findById(id).orElse(new StockReceived());
    }

}
