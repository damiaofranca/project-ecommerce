import { Product } from "@/interfacers/products";

interface IQueryParams {
	[x: string]: string | number;
}

const generateQueryParams = (obj: IQueryParams) => {
	var esc = encodeURIComponent;
	return Object.keys(obj)
		.map((k) => esc(k) + "=" + esc(obj[k]))
		.join("&");
};

const getAllSizes = (products: Product[]) => {
	let sizes: string[] = [];

	products.forEach((product) => {
		sizes = sizes.concat(product.sizes);
	});

	return Array.from(new Set(sizes));
};

const getAllColors = (products: Product[]) => {
	let colors: string[] = [];

	products.forEach((product) => {
		colors = colors.concat(product.colors);
	});

	return Array.from(new Set(colors));
};

export { generateQueryParams, getAllColors, getAllSizes };
