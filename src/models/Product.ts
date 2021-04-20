import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  pieces?: number,
  thumb: string,
  images: string[],
  price: number,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required().default(''),
  description: Yup.string().required().default(''),
  pieces: Yup.number().default(1000),
  thumb: Yup.string().default(''),
  images: Yup.array().of(Yup.string()),
  price: Yup.number().required().default(100),
  count: Yup.number().required().default(10),
});
