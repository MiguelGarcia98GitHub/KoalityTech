export type productType = {
  imgUrl?: string;
  name?: string;
  price?: number;
  priceStripeID?: string;
};

export type productStripeType = {
  price?: string;
  quantity: number;
};
