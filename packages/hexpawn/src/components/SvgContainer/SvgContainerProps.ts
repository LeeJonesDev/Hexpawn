import { ReactNode } from "react";

interface SvgContainerProps {
	children?: ReactNode | JSX.Element | undefined;
	viewBox?: string | [number, number, number, number];
	title?: string;
}

export type { SvgContainerProps };
