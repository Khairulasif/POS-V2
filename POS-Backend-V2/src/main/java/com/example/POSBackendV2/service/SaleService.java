package com.example.POSBackendV2.service;
import com.example.POSBackendV2.entity.Sale;
import com.example.POSBackendV2.entity.StockReceived;
import com.example.POSBackendV2.repository.SaleRepository;
import com.example.POSBackendV2.repository.StockReceivedRepository;
import com.example.POSBackendV2.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SaleService {


    private final SaleRepository saleRepository;
    private final StockReceivedRepository stockReceivedRepository;


    @Autowired
    public SaleService(SaleRepository saleRepository, StockReceivedRepository stockReceivedRepository) {
        this.saleRepository = saleRepository;
        this.stockReceivedRepository = stockReceivedRepository;
    }

    public Sale saveSaleAndUpdateStock(Sale sale) {
        Sale savedSale = saleRepository.save(sale);

        StockReceived stock = savedSale.getStockReceived();
        if (stock != null) {
            StockReceived existingStock = stockReceivedRepository.findById(stock.getSRId()).orElse(null);
            if (existingStock != null) {
                existingStock.setStockStatus(false); // Example: Setting status to false after a sale
                stockReceivedRepository.save(existingStock); // Save the updated stock entity
            }
        }
        return savedSale;
    }

    public List<Sale> getAllSale() {
        return saleRepository.findAll();
    }

    public Sale findSaleById(long saleId) {
        return saleRepository.findById(saleId).get();
    }


//    public List<WarrantyDetailsDTO> findWarrantyDetailsByInvoiceNumber(long invoiceNumber) {
//        List<Object[]> result = saleRepository.findWarrantyEndDateByInvoiceNumber(invoiceNumber);
//
//        List<WarrantyDetailsDTO> warrantyDetailsList = new ArrayList<>();
//
//        for (Object[] objects : result) {
//            Long saleId = (Long) objects[0];
//            Date endDate = (Date) objects[1];
//            String firstName = (String) objects[2];
//            String productName = (String) objects[3];
//            Date saleDate =(Date)  objects[4];
//
//
//            // Calculate days left
//            long daysLeft = endDate.getTime() - new Date().getTime();
//            daysLeft = Math.max(daysLeft, 0) / (1000 * 60 * 60 * 24); // Convert milliseconds t  o days
//
//            WarrantyDetailsDTO warrantyDetails = new WarrantyDetailsDTO(saleId, firstName, productName, saleDate, endDate, daysLeft);
//            warrantyDetailsList.add(warrantyDetails);
//        }
//
//        return warrantyDetailsList;
//    }

//    public void findWarrantyDetailsByInvoiceNumber(long invoiceNumber) {
//        List<Object[]> result = saleRepository.findWarrantyEndDateByInvoiceNumber(invoiceNumber);
//
//        for (Object[] objects : result) {
//            Date endDate = (Date) objects[0];
//            String customerFirstName = (String) objects[1];
//            String productName = (String) objects[2];
//
//            // Calculate days left
//            long daysLeft = endDate.getTime() - new Date().getTime();
//            daysLeft = Math.max(daysLeft, 0) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
//
//            System.out.println("Customer First Name: " + customerFirstName);
//            System.out.println("Product Name: " + productName);
//            System.out.println("Days Left for Warranty: " + daysLeft);
//        }
//    }

//    public SaleInfoDTO getSaleInfoByInvoiceNumber(long invoiceNumber) {
//        return saleRepositoryW.getSaleInfoByInvoiceNumber(invoiceNumber);
//    }
//    public Long findWarrantyEndDateByInvoiceNumberAndCalculateRemainingDays(long invoiceNumber) {
//        Date endDate = saleRepository.findWarrantyEndDateByInvoiceNumber(invoiceNumber);
//
//        if (endDate != null) {
//            Date currentDate = new Date(); // Current date
//            long remainingMilliseconds = endDate.getTime() - currentDate.getTime();
//            long remainingDays = remainingMilliseconds / (1000 * 60 * 60 * 24); // Convert milliseconds to days
//            return remainingDays ;
//        } else {
//            return null;
//        }
//    }


//    @Autowired
//    private SaleRepository saleRepository;
//
//    @Autowired
//    private StockRepository stockRepository;
//    @Autowired
//    private CustomerRepository customerRepository;
//
//    public Sale saveSaleAndUpdateStock(Sale sale) {
//        if (sale.getCustomer() != null) {
//            Customer customer = customerRepository.save(sale.getCustomer());
//            sale.setCustomer(customer);
//        }
//        Stock stock = sale.getStock();
//        if (stock != null) {
//            stock.setStatus(false);
//            stockRepository.save(stock);
//        }
//
//        return saleRepository.save(sale);
//    }
}
