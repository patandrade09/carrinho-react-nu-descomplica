import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (isProduction) {
    response = await axios.get(
      require('static/json/products.json')
    );
  } else {
    response = require('static/json/products.json');
  }

  const { products } = response.data || [];

  return products;
};
