import type { NextApiRequest, NextApiResponse } from "next";

import { products } from "@/mock/products";
import { Product } from "@/interfacers/products";
import { getAllColors, getAllSizes } from "@/utils/functions";

function filterByName(products: Product[], name: string): Product[] {
	return products.filter((product) =>
		product.name.toLowerCase().includes(name.toLowerCase()),
	);
}

function filterByPriceRange(
	products: Product[],
	minPrice: number,
	maxPrice: number,
): Product[] {
	return products.filter((product) => {
		const price = parseFloat(product.price);

		return price >= minPrice && price <= maxPrice;
	});
}

function filterBySize(products: Product[], size: string): Product[] {
	return products.filter((product) => product.sizes.includes(size));
}

function filterByColor(products: Product[], color: string): Product[] {
	return products.filter((product) =>
		product.colors.find((e) => e.toLowerCase() === color.toLowerCase()),
	);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { name, minPrice, maxPrice, size, color } = req.query;

	let filteredProducts: Product[] = products;

	if (name) {
		filteredProducts = filterByName(filteredProducts, name as string);
	}

	if (minPrice && maxPrice) {
		filteredProducts = filterByPriceRange(
			filteredProducts,
			parseFloat(minPrice as string),
			parseFloat(maxPrice as string),
		);
	}

	if (size) {
		filteredProducts = filterBySize(filteredProducts, size as string);
	}

	if (color) {
		filteredProducts = filterByColor(filteredProducts, color as string);
	}

	res.status(200).json({
		data: filteredProducts,
	});
}
