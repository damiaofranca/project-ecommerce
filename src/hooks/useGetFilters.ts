/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

export const useGetFilters = () => {
	const [error, setError] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<{
		colors: string[];
		sizes: string[];
	}>({ colors: [], sizes: [] });

	const onFetchFilters = async () => {
		setIsLoading(true);

		try {
			const response = await fetch("api/products/filters", {
				method: "GET",
			});

			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}

			const filters = await response.json();
			setData(filters);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		onFetchFilters();
	}, []);

	return { data, error, isLoading };
};
