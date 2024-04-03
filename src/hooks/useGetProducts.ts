/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { generateQueryParams } from "@/utils/functions";
import { FiltersProduct, Product } from "@/interfacers/products";

export const useGetProducts = (filters: FiltersProduct) => {
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onFetchProducts = async (_filters: FiltersProduct) => {
		setIsLoading(true);

		const routeParams = generateQueryParams({
			...(filters.name ? { name: filters.name } : {}),
			...(filters.size ? { size: filters.size } : {}),
			...(filters.color ? { color: filters.color } : {}),
			...(filters.maxPrice ? { maxPrice: filters.maxPrice } : {}),
			...(filters.minPrice ? { minPrice: filters.minPrice } : {}),
		});

		try {
			const response = await fetch("api/products?" + routeParams, {
				method: "GET",
			});

			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}

			const products = await response.json();
			setData(products.data);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		onFetchProducts(filters);
	}, [filters]);

	return { data, error, isLoading };
};
