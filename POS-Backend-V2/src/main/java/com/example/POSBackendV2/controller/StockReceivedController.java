package com.example.POSBackendV2.controller;

import com.example.POSBackendV2.entity.ProductCategory;
import com.example.POSBackendV2.entity.Stock;
import com.example.POSBackendV2.entity.StockReceived;
import com.example.POSBackendV2.entity.Supplier;
import com.example.POSBackendV2.repository.StockRepository;
import com.example.POSBackendV2.service.PurchaseService;
import com.example.POSBackendV2.service.StockReceivedService;
import com.example.POSBackendV2.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/stockReceived")
@CrossOrigin(originPatterns = {"*"})
public class StockReceivedController {
    private final StockReceivedService stockReceivedService;

    @Autowired
    public StockReceivedController(StockReceivedService stockReceivedService) {
        this.stockReceivedService = stockReceivedService;
    }
    @Autowired
    StockRepository stockRepository;


    @Autowired
    PurchaseService purchaseService;

    @PostMapping("/save")
    public ResponseEntity<StockReceived> insertStockReceived(@RequestBody StockReceived stockReceived) {
        StockReceived savedStockReceived = stockReceivedService.saveStockReceived(stockReceived);
        purchaseService.updatePurchaseStatusByProductId(stockReceived.getProduct().getProductId());
        ProductCategory receivedProductCategory = stockReceived.getProduct().getProductCategory();
        Stock stock = stockRepository.findByProductCategory(receivedProductCategory);
        if (stock != null && receivedProductCategory == stock.getProductCategory()) {
            stock.setInQuantity(stock.getInQuantity() + 1);
            stockRepository.save(stock);
        }
        return ResponseEntity.ok(savedStockReceived);
    }


    @GetMapping("/getAllStockReceived")
    public ResponseEntity<List<StockReceived>> getAllStockReceived() {
        List<StockReceived> stockReceivedList = stockReceivedService.getAllStockReceived();
        return new ResponseEntity<>(stockReceivedList, HttpStatus.OK);
    }

    @GetMapping({"/getStockReceived/{id}"})
    public StockReceived getStockReceived(@PathVariable("id") Long id) {
        StockReceived stockReceived = this.stockReceivedService.stockReceivedGetById(id);
        return stockReceived;
    }

}
