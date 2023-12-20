import Desert from '@Icons/Desert.svg'
import Forest from '@Icons/Forest.svg'
import Hill from '@Icons/Hill.svg'
import Marsh from '@Icons/Marsh.svg'
import Mountain from '@Icons/Mountain.svg'
import Plain from '@Icons/Plain.svg'
import Settlement from '@Icons/Settlement.svg'
import Water from '@Icons/Water.svg'

enum HexagonIconKeys {
    desert,
    forest,
    hill,
    marsh,
    mountain,
    plain,
    settlement,
    water
}

const HexagonIcons = {
    [HexagonIconKeys.desert]: Desert,
    [HexagonIconKeys.forest]: Forest,
    [HexagonIconKeys.hill]: Hill,
    [HexagonIconKeys.marsh]: Marsh,
    [HexagonIconKeys.mountain]: Mountain,
    [HexagonIconKeys.plain]: Plain,
    [HexagonIconKeys.settlement]: Settlement,
    [HexagonIconKeys.water]: Water
}

export {
    HexagonIcons, HexagonIconKeys
}
