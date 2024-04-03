import Image from "next/image";
import { useRouter } from "next/router";

import { Label } from "@/components/Label";
import { Header } from "@/components/Header";
import { ButtonTag } from "@/components/ButtonTag";
import { useGetProduct } from "@/hooks/useGetProduct";

interface IDetailProduct {}

export default function DetailProduct() {
	const router = useRouter();
	const { data, isLoading } = useGetProduct("1");

	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex w-full h-full ">
				{data && !isLoading ? (
					<div className="w-full flex justify-center items-center max-[980px]:items-start">
						<div className="flex max-[980px]:flex-col">
							<div className="h-fit ml-6 max-[980px]:mt-6">
								<div className="my-4 mb-2">
									<h1 className="text-4xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
										{data.name}
									</h1>
								</div>
								<Image
									height={720}
									alt={data.name}
									src={data.image}
									className="object-cover"
								/>
							</div>
							<div className="flex flex-col ml-6">
								<div className="max-[980px]:hidden mb-2">
									<h1 className="text-4xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
										{data.name}
									</h1>
								</div>
								<div className="max-[980px]: mt-4">
									<p className="leading-relaxed text-body-color">
										{data.description}
									</p>
								</div>

								<div className="mt-4">
									<h4 className="font-bold text-4xl text-gray-900">
										{Intl.NumberFormat("pt-BR", {
											style: "currency",
											currency: "BRL",
											minimumFractionDigits: 2,
										}).format(Number(data.price))}
									</h4>
								</div>
								<div className="mt-4">
									<div className="mb-2">
										<Label>Tamanhos:</Label>
									</div>
									{data.sizes.map((val) => (
										<ButtonTag
											key={val}
											className="bg-slate-900 hover:bg-slate-800 min-w-[84px] h-[34px]"
										>
											{val}
										</ButtonTag>
									))}
								</div>
								<div className="mt-2">
									<div className="mb-2">
										<Label>Cores:</Label>
									</div>
									{data.colors.map((val) => (
										<ButtonTag
											key={val}
											className="bg-slate-900 hover:bg-slate-800 min-w-[84px] h-[34px]"
										>
											{val}
										</ButtonTag>
									))}
								</div>
								<div className="my-8 flex flex-col items-center">
									<ButtonTag className="bg-zinc-900 hover:bg-zinc-800 w-full max-w-[380px] max-[980px]:max-w-[480px] h-[46px] px-6">
										Adicionar no carrinho
									</ButtonTag>
									<span>Ou</span>
									<ButtonTag className="bg-zinc-900 hover:bg-zinc-800 w-full max-w-[380px] max-[980px]:max-w-[480px] h-[46px] px-6">
										Comprar agora
									</ButtonTag>
								</div>
							</div>
						</div>
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
