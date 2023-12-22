import Desert from '@Icons/Desert.svg'
import Forest from '@Icons/Forest.svg'
import Hill from '@Icons/Hill.svg'
import Marsh from '@Icons/Marsh.svg'
import Mountain from '@Icons/Mountain.svg'
import Plain from '@Icons/Plain.svg'
import Settlement from '@Icons/Settlement.svg'
import Water from '@Icons/Water.svg'

enum TerrainIconKeys {
    desert,
    forest,
    hill,
    marsh,
    mountain,
    plain,
    settlement,
    water
}

const TerrainIcons = {
    [TerrainIconKeys.desert]: Desert,
    [TerrainIconKeys.forest]: Forest,
    [TerrainIconKeys.hill]: Hill,
    [TerrainIconKeys.marsh]: Marsh,
    [TerrainIconKeys.mountain]: Mountain,
    [TerrainIconKeys.plain]: Plain,
    [TerrainIconKeys.settlement]: Settlement,
    [TerrainIconKeys.water]: Water
}

export {
    TerrainIcons, TerrainIconKeys as TerrainIconKeys
}
