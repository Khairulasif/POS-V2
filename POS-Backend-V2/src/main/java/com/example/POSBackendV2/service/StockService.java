package com.example.POSBackendV2.service;

import com.example.POSBackendV2.entity.ProductCategory;
import com.example.POSBackendV2.entity.Stock;
import com.example.POSBackendV2.entity.StockReceived;
import com.example.POSBackendV2.repository.StockReceivedRepository;
import com.example.POSBackendV2.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {
       private final StockRepository stockRepository;
    private final StockReceivedRepository stockReceivedRepository;

    @Autowired
    public StockService(StockRepository stockRepository, StockReceivedRepository stockReceivedRepository) {
        this.stockRepository = stockRepository;
        this.stockReceivedRepository = stockReceivedRepository;
    }

//    public void stockReceivedAndUpdateStock(StockReceived stockReceived) {
//        ProductCategory receivedProductCategory = stockReceived.getProduct().getProductCategory();
//        Stock stock = stockRepository.findByProductCategory(receivedProductCategory);
//        if (stock != null && receivedProductCategory == stock.getProductCategory()) {
//            stock.setInQuantity(stock.getInQuantity() + 1);
//            stockRepository.save(stock);
//        }
//    }

//    public void stockReceivedAndUpdateStock(StockReceived stockReceived) {
//
//                Stock stock = stockRepository.findByProductCategory(stockReceived.getProduct().getProductCategory());
//        System.out.println("-------------------------------" + stock);
//        if (stock != null) {
//            stock.setInQuantity(stock.getInQuantity() + 1);
//            stockRepository.save(stock);
//        }
//        System.out.println("-------------------------------" + stock);
//    }
}