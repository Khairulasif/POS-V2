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
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    @Column(unique = true)
    private long slNumber;
    @Enumerated(EnumType.STRING)
    private ProductCategory productCategory;
    private String productName;
    private String registrationNo;
    private String chassisNumber;
    private String engineNumber;
    private String cubicCapacity;
    private Integer noOfTyres;
    private Integer numberOfCylinders;
    private Date yearOfManufacture;
    private String body;
    private Integer mileage;
    private String drive;
    private Integer seatingCapacity;
    private String fuelType;
    private String exteriorColor;
    private String carFeatures;
    private String exportedFrom;
    @Column(name = "tradePrice")
    private Long tradePrice;
    @Column(name = "tax")
    private Long tax;
    @Column(name = "vat")
    private Long vat;

    @Column(name = "payment_method")
    private String payment;

    @Column(name = "discount")
    private int discount;

    @Column(name = "grossCost")
    private int grossCost;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "purchase_id") // This references the Purchase entity
//    private Purchase purchase;

}
