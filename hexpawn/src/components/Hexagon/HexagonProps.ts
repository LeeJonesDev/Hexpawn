import { ReactNode } from "react";
import { HexagonIconType } from "./HexagonIcons";

interface HexagonProps {
    key: number,
    name?: string,

    terrainIconSpecs: {
        iconSize: number;
        x: number;
        y: number;
    },
    terrainName: HexagonIconType,
    iconSvg: HexagonIconType,

    points: [number, number, number, number, number, number],
    height: number,
    radius: number,

    fillColor: string,
    strokeColor: string,
    coordinateFontSize: number,

    center: { x: number, y: number }
    offsetCoordinates: { x: number, y: number },
    axialCoordinates: { q: number, r: number, s: number },

    isHideAxialCoordinates: boolean,
    isHideOffSetCoordinates: boolean,

    coordTextCoordinates: {
        x: number,
        y: number,
        qx: number,
        qy: number,
        rx: number,
        ry: number,
        sx: number,
        sy: number,
        qq: number,
        rr: number,
        ss: number,
    },
}

export type {
    HexagonProps
}
