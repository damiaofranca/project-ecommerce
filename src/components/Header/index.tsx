import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

interface IHeader {}

export const Header: FC<IHeader> = () => {
	return (
		<div className="flex bg-zinc-900 min-h-16 px-6 items-center justify-between">
			<div>
				<Image src={Logo} alt="T-shirts Tech" height={16} />
			</div>
			<ul className="flex list-none">
				<li className="text-white">
					<Link href={"/"}>Pagína inicial</Link>
				</li>
			</ul>
		</div>
	);
};
