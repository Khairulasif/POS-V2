package com.example.POSBackendV2.controller;

import com.example.POSBackendV2.entity.Purchase;
import com.example.POSBackendV2.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/purchase")
@CrossOrigin(originPatterns = {"*"})
public class PurchaseController {

    private final PurchaseService purchaseService;

    @Autowired
    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @PostMapping("/save")
    public ResponseEntity<Purchase> savePurchaseWithProducts(@RequestBody Purchase purchase) {
        Purchase savedPurchase = purchaseService.savePurchaseWithProducts(purchase);
        return ResponseEntity.ok(savedPurchase);
    }
    @GetMapping("/getAllPurchase")
    public ResponseEntity<List<Purchase>> getAllPurchase() {
        List<Purchase> purchases = purchaseService.getAllPurchase();
        return new ResponseEntity<>(purchases, HttpStatus.OK);
    }

    @GetMapping({"/getPurchase/{id}"})
    public Purchase getPurchase(@PathVariable("id") Long id) {
        Purchase purchase = this.purchaseService.purchaseGet(id);
        return purchase;
    }

    @GetMapping("/getAllPurchaseByCurrentDate")
    public ResponseEntity<List<Purchase>> getAllPurchaseByCurrentDate(
            @RequestParam(name = "date", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date) {

        if (date == null) {
            // Set the default value to the current date
            date = new Date();
        }

        List<Purchase> purchases = purchaseService.getPurchasesByDate(date);
        return new ResponseEntity<>(purchases, HttpStatus.OK);
    }

    @GetMapping("/getPurchasesByStatus")
    public ResponseEntity<List<Purchase>> getPurchasesByStatus(
            @RequestParam(name = "status", defaultValue = "0") boolean status) {
        List<Purchase> purchases = purchaseService.getPurchasesByStatus(status);
        return new ResponseEntity<>(purchases, HttpStatus.OK);
    }

}
