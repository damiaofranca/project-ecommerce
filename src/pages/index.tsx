/* eslint-disable react/display-name */
import { useState } from "react";
import { Roboto } from "next/font/google";

import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { ListItems } from "@/components/ListItems";
import { useGetProducts } from "@/hooks/useGetProducts";
import { FiltersProduct } from "@/interfacers/products";

const inter = Roboto({ weight: ["400", "300"], subsets: ["latin"] });

export default function Home() {
	const [filters, setFilters] = useState<FiltersProduct>({});
	const { data, isLoading } = useGetProducts(filters);

	const onChangeFilters = (_filters_: FiltersProduct) => {
		setFilters((_filters) => {
			return { ..._filters, ..._filters_ };
		});
	};

	const onClearFilters = () => {
		setFilters({});
	};

	return (
		<div className={`flex flex-col min-h-screen ${inter.className}`}>
			<Header />

			<div className="flex w-full max-[639px]:flex-col min-[639px]:relative min-[639px]:justify-end ">
				<SideBar
					onClearFilters={onClearFilters}
					onChangeFilters={onChangeFilters}
				/>
				{!isLoading && data ? (
					<div className="flex w-full min-[639px]:max-w-[calc(100%-256px)]">
						<ListItems data={data} />
					</div>
				) : (
					<div className="flex w-full items-center justify-center">
						Carregando...
					</div>
				)}
			</div>
		</div>
	);
}
