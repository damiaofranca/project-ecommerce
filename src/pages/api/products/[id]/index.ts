import { NextApiRequest, NextApiResponse } from "next";

import { products } from "@/mock/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;
	const product = products.find((val) => val.id === id);

	return res.status(product ? 200 : 404).json(product);
}
