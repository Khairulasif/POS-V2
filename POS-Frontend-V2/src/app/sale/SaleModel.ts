export interface SaleModel {
    sale: {
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
        stockReceived: {
            sRId: number;
            product: {
                productCategory: string;
            };
        };
        customer: {
            firstName: string;
            lastName: string;
            email: string;
            phoneNumber: string;
        };
    };
}

  
//   export interface Product {
//     productCategory: string;
//     // Add other product fields as needed
//   }
  
//   export interface StockReceived {
//     sRId: number;
//     product: Product;
//   }
  
//   export interface SaleForm {
//     saleDate: Date;
//     price: number;
//     discount: number;
//     totalAmount: number;
//     terms1: string;
//     terms2: string;
//     terms3: string;
//     terms4: string;
//     terms5: string;
//     terms6: string;
//     terms7: string;
//     terms8: string;
//     terms9: string;
//     terms10: string;
//     comment: string;
//     customer: Customer;
//     stockReceived: StockReceived;
//   }


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
  
//     Customer: {
//       firstName: string;
//       lastName: string;
//       email: string;
//       phoneNumber: string;
//     };
  
//     Warranty: {
//       startDate: string;
//       endDate: string;
//       terms1: string;
//       terms2: string;
//       terms3: string;
//       terms4: string;
//       terms5: string;
//       terms6: string;
//       terms7: string;
//       terms8: string;
//       terms9: string;
//       terms10: string;
//       comment: string;
//     };
  
//     Product: {
  
//     };
  
//     Supplier: {
  
//     };
//   }
  