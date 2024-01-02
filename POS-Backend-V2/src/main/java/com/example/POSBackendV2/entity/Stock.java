package com.example.POSBackendV2.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sId;
    @Enumerated(EnumType.STRING)
    private ProductCategory productCategory;
    private int inQuantity;
    private int outQuantity;
}
