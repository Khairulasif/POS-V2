package com.example.POSBackendV2.service;

import com.example.POSBackendV2.entity.Purchase;
import com.example.POSBackendV2.entity.Stock;
import com.example.POSBackendV2.entity.StockReceived;
import com.example.POSBackendV2.repository.PurchaseRepository;
import com.example.POSBackendV2.repository.StockReceivedRepository;
import com.example.POSBackendV2.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockReceivedService {
    @Autowired
    StockRepository stockRepository;
    private final StockReceivedRepository stockReceivedRepository;

    @Autowired
    public StockReceivedService(StockReceivedRepository stockReceivedRepository) {
        this.stockReceivedRepository = stockReceivedRepository;
    }
    public StockReceived saveStockReceived(StockReceived stockReceived) {
        StockReceived savedStockReceived = stockReceivedRepository.save(stockReceived);
        var stockRecProCate = savedStockReceived.getProduct().getProductCategory();
        System.out.println("-------------------------------"+stockRecProCate);

//        Stock stock = stockRepository.findByProductCategory();
//        if (stock != null) {
//            int currentInQuantity = stock.getInQuantity();
//            System.out.println("-----------------" + currentInQuantity);
//            stock.setInQuantity(currentInQuantity + 1); // or any logic you require
//            System.out.println("-------------------" + stock);
//            // Save the updated Stock
//            stockRepository.save(stock);
//        }
        return savedStockReceived; // return the saved StockReceived
    }


    //    public StockReceived saveStockReceived(StockReceived stockReceived) {
//        return stockReceivedRepository.save(stockReceived);
//
//    }
    public List<StockReceived> getAllStockReceived() {
        return stockReceivedRepository.findAll();
    }

    public StockReceived stockReceivedGetById(Long id) {
        return this.stockReceivedRepository.findById(id).orElse(new StockReceived());
    }

}
