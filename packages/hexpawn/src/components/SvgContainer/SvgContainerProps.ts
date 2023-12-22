import { ReactNode } from "react";

interface SvgContainerProps {
    children?: ReactNode | JSX.Element | undefined;
    viewBox?: string | [number, number, number, number],
}

export type { SvgContainerProps }
