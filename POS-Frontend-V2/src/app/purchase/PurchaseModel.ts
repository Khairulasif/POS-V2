// supplier.model.ts
export interface Supplier {
    supplierId: number;
    supplierType: string;
    supplierName: string;
    contactPerson: string;
    email: string;
    phoneNumber: string;
  }
  
  // product.model.ts
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
  
  // purchase.model.ts
  export interface Purchase {
    purchaseId: number;
    purchaseDate: string;
    deliveryAddress: string;
    status: boolean;
    supplier: Supplier;
    products: Product[];
  }


//   export interface SaleModel {
//     sale: {
//       saleId: number;
//       model: string;
//       saleDate: Date;
//       price: number;
//       discount: number;
//       totalAmount: number;
//     };
  
//     Stock: {
//       stockId: number;
//       quantity: number;
//       status: boolean;
//       supplierId: number;
//       product: Product;
//     };
// }