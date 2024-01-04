package com.example.POSBackendV2.controller;

import com.example.POSBackendV2.entity.StockReceived;
import com.example.POSBackendV2.service.StockService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stocks")
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @PostMapping("/stockReceived")
    public ResponseEntity<String> addStockReceived(@RequestBody StockReceived stockReceived) {
        try {
            stockService.insertStockReceivedAndUpdateStock(stockReceived);
            return new ResponseEntity<>("StockReceived added successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding StockReceived: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
