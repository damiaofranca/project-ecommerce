import { NextApiRequest, NextApiResponse } from "next";

import { products } from "@/mock/products";
import { getAllColors, getAllSizes } from "@/utils/functions";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res
		.status(200)
		.json({ sizes: getAllSizes(products), colors: getAllColors(products) });
}
