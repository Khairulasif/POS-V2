package com.example.POSBackendV2.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class StockReceived {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sRId;

    private long importCost;
    private  long cAndFCost;
    private  long transportCost;
    private  long documentCost;
    private  long repairCost;
    private long  mrp;
    private long  maxDiscount;
    private boolean  instalment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productId")
    private Product product;
}
