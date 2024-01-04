package com.example.POSBackendV2.service;

import com.example.POSBackendV2.entity.ProductCategory;
import com.example.POSBackendV2.entity.Stock;
import com.example.POSBackendV2.entity.StockReceived;
import com.example.POSBackendV2.repository.StockReceivedRepository;
import com.example.POSBackendV2.repository.StockRepository;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    private final StockRepository stockRepository;
    private final StockReceivedRepository stockReceivedRepository;

    public StockService(StockRepository stockRepository, StockReceivedRepository stockReceivedRepository) {
        this.stockRepository = stockRepository;
        this.stockReceivedRepository = stockReceivedRepository;
    }
    public void insertStockReceivedAndUpdateStock(StockReceived stockReceived) {
        // Get the product category of the StockReceived
        ProductCategory receivedCategory = stockReceived.getProduct().getProductCategory();

        // Find corresponding Stock based on ProductCategory
        Stock stock = stockRepository.findByProductCategory(receivedCategory);

        if (stock != null) {
            // Update inQuantity of the found Stock entity
            int currentInQuantity = stock.getInQuantity();
            System.out.println("-----------------"+currentInQuantity);
            stock.setInQuantity(currentInQuantity + 1); // or any logic you require
            System.out.println("-------------------"+stock);
            // Save the updated Stock
            stockRepository.save(stock);
        }

        // Save the StockReceived entity
        stockReceivedRepository.save(stockReceived);
    }

}