import Desert from '@Icons/Desert.svg'
import Forest from '@Icons/Forest.svg'
import Hill from '@Icons/Hill.svg'
import Marsh from '@Icons/Marsh.svg'
import Mountain from '@Icons/Mountain.svg'
import Plain from '@Icons/Plain.svg'
import Settlement from '@Icons/Settlement.svg'
import Water from '@Icons/Water.svg'

export const HexagonIcons = {
    desert: Desert,
    forest: Forest,
    hill: Hill,
    marsh: Marsh,
    mountain: Mountain,
    plain: Plain,
    settlement: Settlement,
    water: Water
}

type HexagonIconType = keyof typeof HexagonIcons;


export type { HexagonIconType }
