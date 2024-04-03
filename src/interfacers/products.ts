import { StaticImageData } from "next/image";

export interface Product {
	id: string;
	name: string;
	price: string;
	sizes: string[];
	colors: string[];
	description: string;
	image: string | StaticImageData;
}

export interface FiltersProduct extends Partial<Pick<Product, "name">> {
	size?: string;
	color?: string;
	minPrice?: number;
	maxPrice?: number;
}
