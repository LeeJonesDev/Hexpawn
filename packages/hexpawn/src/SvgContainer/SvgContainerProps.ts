import { ReactNode } from "react";

interface SvgContainerProps {
    children?: ReactNode | JSX.Element | undefined;
    viewbox?: string | [number, number, number, number],
}

export type { SvgContainerProps }
