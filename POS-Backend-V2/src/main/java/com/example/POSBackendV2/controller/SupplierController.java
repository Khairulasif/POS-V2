package com.example.POSBackendV2.controller;
import com.example.POSBackendV2.entity.Supplier;
import com.example.POSBackendV2.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supplier")
@CrossOrigin(originPatterns = {"*"})
public class SupplierController {
    private final SupplierService supplierService;

    @Autowired
    public SupplierController(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @PostMapping("/save")
    public ResponseEntity<Supplier> saveSupplier(@RequestBody Supplier supplier) {
        Supplier savedSupplier = supplierService.saveSupplier(supplier);
        return ResponseEntity.ok(savedSupplier);
    }
    @GetMapping("/getAllSupplier")
    public ResponseEntity<List<Supplier>> getAllSupplier() {
        List<Supplier> supplierList = supplierService.getAllSupplier();
        return new ResponseEntity<>(supplierList, HttpStatus.OK);
    }

    @GetMapping({"/getSupplier/{id}"})
    public Supplier getSupplier(@PathVariable("id") Long id) {
        Supplier supplier = this.supplierService.supplierGetById(id);
        return supplier;
    }
}
