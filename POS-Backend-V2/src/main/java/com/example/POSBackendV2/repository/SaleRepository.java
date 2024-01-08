package com.example.POSBackendV2.repository;
import com.example.POSBackendV2.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale,Long> {

//    @Query("SELECT s.customer.firstName, s.stock.product.productName, s.warranty.endDate, FROM Sale s WHERE s.invoiceNumber = :invoiceNumber")
//    Date findWarrantyEndDateByInvoiceNumber(@Param("invoiceNumber") long invoiceNumber);
//@Query("SELECT s.saleId, s.warranty.endDate, s.customer.firstName, s.stock.product.productName, s.saleDate " +
//        "FROM Sale s " +
//        "WHERE s.invoiceNumber = :invoiceNumber")
//List<Object[]> findWarrantyEndDateByInvoiceNumber(@Param("invoiceNumber") long invoiceNumber);


}
