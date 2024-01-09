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
    yearOfManufacture: string;
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
  
  export interface StockReceived {
    importCost: number;
    transportCost: number;
    documentCost: number;
    repairCost: number;
    mrp: number;
    maxDiscount: number;
    netCost: number;
    installment: boolean;
    product: Product;
    candFCost: number;
    sRId: number;
  }