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
  title: Yup.string().required(),
  description: Yup.string(),
  pieces: Yup.number(),
  thumb: Yup.string().required(),
  images: Yup.array().of(Yup.string()),
  price: Yup.number().required(),
  count: Yup.number().required(),
});
