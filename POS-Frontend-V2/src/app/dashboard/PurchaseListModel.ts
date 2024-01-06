export interface Supplier {
    supplierId: number;
    supplierType: string;
    supplierName: string;
    contactPerson: string;
    email: string;
    phoneNumber: string;
  }
  
  export interface Product {
    productId: number;
    slNumber?: number;
    productCategory: string;
    productName: string;
    registrationNo: string;
    chassisNumber: string;
    engineNumber: string;
    cubicCapacity: string;
    noOfTyres?: number;
    numberOfCylinders?: number;
    yearOfManufacture: string;
    body: string;
    mileage?: number;
    drive: string;
    seatingCapacity?: number;
    fuelType: string;
    exteriorColor: string;
    carFeatures: string;
    exportedFrom: string;
    tradePrice?: number;
    tax?: number;
    vat?: number;
    payment: string;
    discount?: number;
    grossCost?: number;
  }
  
  export interface Purchase {
    purchaseId: number;
    purchaseDate: string;
    deliveryAddress: string;
    status: boolean;
    supplier: Supplier;
    products: Product[];
  }
  
  
  