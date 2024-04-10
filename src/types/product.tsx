export type ProductType = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: {
    amount: string;
    currency: string;
  };
};
