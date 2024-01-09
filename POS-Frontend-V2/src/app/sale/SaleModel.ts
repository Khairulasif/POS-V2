export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  }
  
  export interface Product {
    productCategory: string;
    // Add other product fields as needed
  }
  
  export interface StockReceived {
    sRId: number;
    product: Product;
  }
  
  export interface SaleForm {
    saleDate: Date;
    price: number;
    discount: number;
    totalAmount: number;
    terms1: string;
    terms2: string;
    terms3: string;
    terms4: string;
    terms5: string;
    terms6: string;
    terms7: string;
    terms8: string;
    terms9: string;
    terms10: string;
    comment: string;
    customer: Customer;
    stockReceived: StockReceived;
  }
  