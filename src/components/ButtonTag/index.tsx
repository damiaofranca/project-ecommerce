import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface IButtonTag
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

export const ButtonTag: FC<IButtonTag> = ({
	children,
	className,
	...props
}) => {
	return (
		<button
			className={`min-w-[42px] rounded-full pointer text-white text-sm font-bold  px-2 py-1 m-1 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
