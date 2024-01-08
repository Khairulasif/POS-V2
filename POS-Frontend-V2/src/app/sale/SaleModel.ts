export interface Sale {
    saleId: number;
    invoiceNumber: number;
    productName: string;
    productType: string;
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
    stockReceived: StockReceived;
    customer: Customer;
  }
    
  export interface StockReceived {
    importCost: number;
    transportCost: number;
    documentCost: number;
    repairCost: number;
    mrp: number;
    maxDiscount: number;
    netCost: number;
    installment: boolean;
    stockStatus: boolean;
    product: Product;
    srid: number;
    candFCost: number;
  }
    
  export interface Product {
    productId: number;
    slNumber: number;
    productCategory: string;
    productName: string;
    registrationNo: string;
    chassisNumber: string;
    engineNumber: string;
    cubicCapacity: string;
    noOfTyres: number;
    numberOfCylinders: number;
    yearOfManufacture: Date;
    body: string;
    mileage: number;
    drive: string;
    seatingCapacity: number;
    fuelType: string;
    exteriorColor: string;
    carFeatures: string;
    exportedFrom: string;
    tradePrice: number;
    tax: number;
    vat: number;
    payment: string;
    discount: number;
    grossCost: number;
  }
  
  export interface Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  }