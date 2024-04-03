/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Product } from "@/interfacers/products";

export const useGetProduct = (id: string) => {
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<Product | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onFetchProducts = async () => {
		setIsLoading(true);

		try {
			const response = await fetch(`/api/products/${id}`, {
				method: "GET",
			});

			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}

			const product = await response.json();
			setData(product);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		onFetchProducts();
	}, []);

	return { data, error, isLoading };
};
