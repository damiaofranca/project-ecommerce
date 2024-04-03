import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IButtonIcon
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	altIcon: string;
	urlIcon: string | StaticImport;
}

export const ButtonIcon: FC<IButtonIcon> = ({ urlIcon, altIcon, ...props }) => {
	return (
		<button
			className="min-h-[26px] min-w-[26px] bg-slate-900 rounded flex items-center justify-center disabled:opacity-70"
			{...props}
		>
			<Image src={urlIcon} alt={altIcon} height={22} width={22} />
		</button>
	);
};
