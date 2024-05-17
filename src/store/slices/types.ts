export type DataState = {
  data: [];
  chosenCount: number;
  searchValue: string;
  chosenProducts: {
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
  }[];
};
