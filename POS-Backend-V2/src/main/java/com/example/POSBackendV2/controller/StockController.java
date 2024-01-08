package com.example.POSBackendV2.controller;

import com.example.POSBackendV2.entity.Stock;
import com.example.POSBackendV2.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/stock")
@CrossOrigin(originPatterns = {"*"})
public class StockController {
    @Autowired
    StockService stockService;

    @GetMapping("/getAllStock")
    public ResponseEntity<List<Stock>> getAllStock() {
        List<Stock> stockList = stockService.getAllStock();
        return new ResponseEntity<>(stockList, HttpStatus.OK);
    }
}
