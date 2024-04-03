import { Product } from "@/interfacers/products";

import CamisaSocial from "@/assets/images/Camisa Social.jpg";
import CamisetaLisa from "@/assets/images/Camiseta Lisa.jpg";
import CamisetaPolo from "@/assets/images/Camiseta Polo.jpg";
import RegataEsportiva from "@/assets/images/Regata Esportiva.jpg";
import RegataEstampada from "@/assets/images/Regata Estampada.jpg";
import BlusaMoletom from "@/assets/images/Blusa de Moletom.jpg";
import CamisetaEstampada from "@/assets/images/Camiseta Estampada.jpg";
import JaquetaCortaVento from "@/assets/images/Jaqueta Corta-Vento.jpg";
import BlusaMoletomCasual from "@/assets/images/Blusa de Moletom Casual.jpg";
import CamisetaMangaLonga from "@/assets/images/Camiseta de Manga Longa.jpg";

export const products: Product[] = [
	{
		id: "1",
		price: "29.99",
		name: "Camiseta Estampada",
		description: "Uma camiseta confortável com estampa moderna.",
		sizes: ["P", "M", "G", "GG"],
		colors: ["Azul", "Verde", "Preto"],
		image: CamisetaEstampada,
	},
	{
		id: "2",
		price: "49.99",
		name: "Blusa de Moletom",
		description: "Uma blusa de moletom para dias mais frios.",
		sizes: ["P", "M", "G"],
		colors: ["Cinza", "Preto", "Rosa"],
		image: BlusaMoletom,
	},
	{
		id: "3",
		price: "69.99",
		name: "Jaqueta Corta-Vento",
		description: "Uma jaqueta corta-vento resistente e elegante.",
		sizes: ["P", "M", "G", "GG"],
		colors: ["Preto", "Vermelho", "Verde"],
		image: JaquetaCortaVento,
	},
	{
		id: "4",
		price: "19.99",
		name: "Regata Esportiva",
		description: "Uma regata esportiva confortável para atividades físicas.",
		sizes: ["P", "M", "G"],
		colors: ["Branco", "Preto", "Cinza"],
		image: RegataEsportiva,
	},
	{
		id: "5",
		price: "39.99",
		name: "Camisa Social",
		description: "Uma camisa social elegante para ocasiões formais.",
		sizes: ["P", "M", "G", "GG"],
		colors: ["Branco", "Azul", "Rosa"],
		image: CamisaSocial,
	},
	{
		id: "6",
		price: "19.99",
		name: "Camiseta Lisa",
		description: "Uma camiseta básica e confortável para o dia a dia.",
		sizes: ["P", "M", "G"],
		colors: ["Branco", "Cinza", "Rosa"],
		image: CamisetaLisa,
	},
	{
		id: "7",
		price: "39.99",
		name: "Camiseta de Manga Longa",
		description: "Uma camiseta de manga longa para dias mais frescos.",
		sizes: ["M", "G", "GG"],
		colors: ["Vermelho", "Amarelo", "Roxo"],
		image: CamisetaMangaLonga,
	},
	{
		id: "8",
		price: "24.99",
		name: "Regata Estampada",
		description: "Uma regata estampada leve e descontraída.",
		sizes: ["P", "M", "G", "GG"],
		colors: ["Laranja", "Marrom", "Azul Claro"],
		image: RegataEstampada,
	},
	{
		id: "9",
		price: "34.99",
		name: "Camiseta Polo",
		description: "Uma camiseta polo clássica e versátil.",
		sizes: ["M", "G", "GG"],
		colors: ["Verde Escuro", "Branco", "Vermelho"],
		image: CamisetaPolo,
	},
	{
		id: "10",
		price: "27.99",
		name: "Blusa de Moletom Casual",
		description: "Uma blusa de moletom casual para uso diário.",
		sizes: ["P", "M", "G"],
		colors: ["Cinza Claro", "Preto", "Rosa"],
		image: BlusaMoletomCasual,
	},
];
