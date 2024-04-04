import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ButtonTag } from "../ButtonTag";
import { Product } from "@/interfacers/products";

interface ICard {
	product: Product;
}

export const Card: FC<ICard> = ({ product }) => {
	const router = useRouter();

	return (
		<div className="flex flex-col max-w-sm rounded overflow-hidden shadow p-2 max-h-[580px] max-[639px]:w-full max-[639px]:my-2">
			<div className="w-full flex justify-center">
				<Image
					width={200}
					height={200}
					alt={product.name}
					src={product.image}
					className="h-[280px] object-cover"
				/>
			</div>
			<h5 className="font-bold text-xl mb-auto mt-6 text-center">
				{product.name}
			</h5>
			<div className="flex w-full mt-6">
				<ButtonTag
					onClick={() => router.push(`/product/${product.id}`)}
					className="bg-slate-900 hover:bg-slate-800 w-full h-[36px]"
				>
					{Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
						minimumFractionDigits: 2,
					}).format(Number(product.price))}
				</ButtonTag>
			</div>
		</div>
	);
};
