package com.example.POSBackendV2.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long saleId;

    @Column(name = "invoiceNumber", unique = true)
    private long invoiceNumber;

    @Column(name = "sale_date")
    private Date saleDate;

    @Column(name = "sale_price")
    private int price;

    @Column(name = "discount")
    private int discount;


    @Column(name = "total_amount")
    private int totalAmount;
    private  String terms1;
    private  String terms2;
    private  String terms3;
    private  String terms4;
    private  String terms5;
    private  String terms6;
    private  String terms7;
    private  String terms8;
    private  String terms9;
    private  String terms10;
    private  String comment;

    @ManyToOne
    @JoinColumn(name = "sRId")
    private StockReceived stockReceived;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private Customer customer;


    @PrePersist
    public void generateInvoiceNumber() {

        this.invoiceNumber = generateUniqueInvoiceNumber();
    }
    private long generateUniqueInvoiceNumber() {
        long timestamp = System.currentTimeMillis();
        long randomNumber = (long) (Math.random() * 1000);
        return Long.parseLong(String.valueOf(timestamp) + String.valueOf(randomNumber));
    }



}
