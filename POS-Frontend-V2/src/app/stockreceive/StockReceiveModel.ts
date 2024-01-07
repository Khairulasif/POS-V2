export interface StockReceived {
    sRId?: number;
    importCost?: number | null;
    cAndFCost:  number | null;
    transportCost:  number | null;
    documentCost:  number | null;
    repairCost:  number | null;
    netCost:  number | null;
    mrp:  number | null;
    maxDiscount:  number | null;
    installment: boolean;
    product?: Product;
  }
  
  export interface Product {
    productId: number;
    productCategory: string;
  }
  