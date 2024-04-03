import { DetailedHTMLProps, FC, LabelHTMLAttributes, ReactNode } from "react";

interface ILabel
	extends DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	> {}

export const Label: FC<ILabel> = ({ className, children, ...props }) => {
	return (
		<label
			className={`font-bold tracking-[0.1em] text-zinc-900 ${className}`}
			{...props}
		>
			{children}
		</label>
	);
};
