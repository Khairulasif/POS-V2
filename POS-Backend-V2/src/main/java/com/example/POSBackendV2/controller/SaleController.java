package com.example.POSBackendV2.controller;
import com.example.POSBackendV2.entity.ProductCategory;
import com.example.POSBackendV2.entity.Sale;
import com.example.POSBackendV2.entity.Stock;
import com.example.POSBackendV2.repository.CustomerRepository;
import com.example.POSBackendV2.repository.StockRepository;
import com.example.POSBackendV2.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sale")
@CrossOrigin(originPatterns = {"*"})
public class SaleController {

    @Autowired
    private SaleService saleService;

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    StockRepository stockRepository;

    @PostMapping("/save")
    public ResponseEntity<Sale> saveSaleAndUpdateStock(@RequestBody Sale sale) {
        Sale savedSale = saleService.saveSaleAndUpdateStock(sale);
        ProductCategory receivedProductCategory = sale.getStockReceived().getProduct().getProductCategory();
        Stock stock = stockRepository.findByProductCategory(receivedProductCategory);
        if (stock != null && receivedProductCategory == stock.getProductCategory()) {
            stock.setOutQuantity(stock.getOutQuantity() + 1);
            stockRepository.save(stock);
        }
        return ResponseEntity.ok(sale);

    }

//

    @GetMapping("/getAllSale")
    public ResponseEntity<List<Sale>> getAllSale() {
        List<Sale> saleList = saleService.getAllSale();
        return new ResponseEntity<>(saleList, HttpStatus.OK);
    }

    @GetMapping("/getSaleById/{saleId}")
    public ResponseEntity<Sale> getDepartmentById(@PathVariable("saleId") long saleId) {
        Sale sale = saleService.findSaleById(saleId);
        return new ResponseEntity<>(sale, HttpStatus.OK);
    }

//    @GetMapping("/warranty/{invoiceNumber}")
//    public void getWarrantyDetailsByInvoiceNumber(@PathVariable long invoiceNumber) {
//        saleService.findWarrantyDetailsByInvoiceNumber(invoiceNumber);
//    }

//    @GetMapping("/warranty/{invoiceNumber}")
//    public ResponseEntity<SaleInfoDTO> getSaleInfoByInvoiceNumber(@PathVariable long invoiceNumber) {
//        SaleInfoDTO saleInfo = saleService.getSaleInfoByInvoiceNumber(invoiceNumber);
//        if (saleInfo != null) {
//            return new ResponseEntity<>(saleInfo, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

//    @GetMapping("/warranty/{invoiceNumber}")
//    public Long getRemainingWarrantyDays(@PathVariable long invoiceNumber) {
//        return saleService.findWarrantyEndDateByInvoiceNumberAndCalculateRemainingDays(invoiceNumber);
//    }

//    @PostMapping("/save")
//    public ResponseEntity<MessageResponse> savePurchase(@RequestBody Sale sale) {
//        if (sale == null) {
//            return new ResponseEntity<>(new MessageResponse(Message.FAILED), HttpStatus.BAD_REQUEST);
//        }
//        MessageResponse response = saleService.saveSaleAndUpdateStock(sale);
//        if (response.getMessage() == Message.SUCCESS) {
//            return new ResponseEntity<>(response, HttpStatus.CREATED);
//        } else {
//            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }


}
