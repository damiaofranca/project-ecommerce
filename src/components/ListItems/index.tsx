import { FC } from "react";
import { Card } from "../Card";
import { Product } from "@/interfacers/products";

interface IListItems {
	data: Product[];
}

export const ListItems: FC<IListItems> = ({ data = [] }) => {
	return (
		<div className="w-full mt-4 p-2 grid grid-cols-one sm:grid-cols-two md:grid-cols-tree lg:grid-cols-four xl:grid-cols-more sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 max-[639px]:flex max-[639px]:flex-col max-[639px]:items-center">
			{data.map((item) => (
				<Card key={item.name} product={item} />
			))}
		</div>
	);
};
