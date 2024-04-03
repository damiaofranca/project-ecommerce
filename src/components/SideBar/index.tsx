import { ChangeEvent, FC, useEffect, useState } from "react";

import { Label } from "../Label";
import { Input } from "../Input";
import { ButtonTag } from "../ButtonTag";
import { ButtonIcon } from "../ButtonIcon";

import CheckIcon from "@/assets/icons/check.svg";
import { useGetFilters } from "@/hooks/useGetFilters";
import { FiltersProduct } from "@/interfacers/products";

interface ISideBar {
	onClearFilters: () => void;
	onChangeFilters: (filters: FiltersProduct) => void;
}

export const SideBar: FC<ISideBar> = ({ onClearFilters, onChangeFilters }) => {
	const [prices, setPrices] = useState<{
		maxPrice: string;
		minPrice: string;
	}>({ maxPrice: "", minPrice: "" });
	const [name, setName] = useState<string>("");
	const [size, setSize] = useState<string>("");
	const [color, setColor] = useState<string>("");

	const { data: filters } = useGetFilters();

	const onChangeMinPrice = (price: string) => {
		setPrices((_filters) => {
			return { ..._filters, minPrice: price };
		});
	};

	const onChangeMaxPrice = (price: string) => {
		setPrices((_filters) => {
			return { ..._filters, maxPrice: price };
		});
	};

	const onChangeColor = (color: string) => {
		setColor(color);
		onChangeFilters({
			...(color.length ? { color: color } : {}),
		});
	};

	const onChangeSize = (size: string) => {
		setSize(size);
		onChangeFilters({
			...(size.length ? { size: size } : {}),
		});
	};

	const onChangeName = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setName(target.value);
		onChangeFilters({
			...(target.value.length ? { name: target.value } : {}),
		});
	};

	const onFilterByPrices = () => {
		if (Number(prices.maxPrice) > Number(prices.minPrice)) {
			onChangeFilters({
				...(prices.maxPrice.length
					? { maxPrice: Number(prices.maxPrice) }
					: {}),
				...(prices.minPrice.length
					? { minPrice: Number(prices.minPrice) }
					: {}),
			});
		}
	};

	const onClearFiltersFn = () => {
		setName("");
		setSize("");
		setColor("");
		setPrices({ maxPrice: "", minPrice: "" });
		onClearFilters();
	};

	return (
		<div className="min-w-64 max-w-64 bg-slate-200 p-4 rounded max-[639px]:max-w-full min-[639px]:absolute min-[639px]:h-full min-[639px]:left-0">
			<div className="mb-2">
				<Label className=" sm:text-base/7 text-lg/7">Filtros</Label>
			</div>
			<div className="flex-col">
				<div className="flex flex-col mb-4">
					<Label className="text-sm font-bold mb-1">Nome:</Label>
					<Input
						type="text"
						value={name}
						className="h-[28px]"
						onChange={onChangeName}
						placeholder="e.g. Camisa Polo"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<Label className="text-sm font-bold mb-1">Tamanhos:</Label>
					<div className="flex flex-wrap">
						{filters.sizes.map((_size) => (
							<ButtonTag
								key={_size}
								onClick={() => onChangeSize(_size)}
								className={`${
									_size === size ? "bg-slate-600" : "bg-slate-900"
								} hover:bg-slate-800`}
							>
								{_size}
							</ButtonTag>
						))}
					</div>
				</div>
				<div className="flex flex-col mb-4">
					<Label className="text-sm font-bold mb-1">Cores:</Label>
					<div className="flex flex-wrap">
						{filters.colors.map((_color) => (
							<ButtonTag
								key={_color}
								onClick={() => onChangeColor(_color)}
								className={`${
									_color === color ? "bg-slate-600" : "bg-slate-900"
								} hover:bg-slate-800`}
							>
								{_color}
							</ButtonTag>
						))}
					</div>
				</div>
				<div className="flex flex-col">
					<Label className="text-sm font-bold mb-1">Preço:</Label>
					<div className="flex ">
						<Input
							type="number"
							placeholder="Minimo"
							value={prices.minPrice}
							className="h-[28px] mr-2"
							onChange={({ target }) => onChangeMinPrice(target.value)}
						/>
						<Input
							type="number"
							className="h-[28px]"
							placeholder="Maximo"
							value={prices.maxPrice}
							onChange={({ target }) => onChangeMaxPrice(target.value)}
						/>
						<div className="ml-1">
							<ButtonIcon
								urlIcon={CheckIcon}
								altIcon="Confirmar"
								onClick={onFilterByPrices}
								disabled={!(prices.minPrice?.length && prices.maxPrice.length)}
							/>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<ButtonTag
						onClick={onClearFiltersFn}
						className="bg-slate-900 hover:bg-slate-800"
					>
						Limpar filtros
					</ButtonTag>
				</div>
			</div>
		</div>
	);
};
