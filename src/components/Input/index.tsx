import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface IInput
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

export const Input: FC<IInput> = ({ className, ...props }) => {
	return (
		<input
			type="text"
			className={`appearance-none border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-2 focus:border-slate-600 placeholder:text-slate-300 ${className}`}
			{...props}
		/>
	);
};
