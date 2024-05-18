export type DataState = {
  data: [];
  chosenCount: number;
  searchValue: string;
  chosenProducts: Product[];
  changedProduct: Product;
  changedProductId: number;
  showChanges: boolean;
};

export type Product = {
  productName: string;
  productImage: string;
  producer: string;
  year: number;
  diagonal: number;
  country: string;
  memory: string;
  fqc: string;
  NFC: boolean;
  ESIM: boolean;
  wirelessPower: boolean;
  price: string;
};
