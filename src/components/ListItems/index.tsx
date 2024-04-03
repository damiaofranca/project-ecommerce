import { Product } from "@/interfacers/products";
import { FC } from "react";
import { Card } from "../Card";

interface IListItems {
	data: Product[];
}

export const ListItems: FC<IListItems> = ({ data = [] }) => {
	return (
		<div className="w-full mt-4 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-5 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 max-[639px]:flex max-[639px]:flex-col max-[639px]:items-center">
			{data.map((item) => (
				<Card key={item.name} product={item} />
			))}
		</div>
	);
};
