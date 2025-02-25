import WinterTire from '@icons/winter_tire.svg?react'
import StuddedTire from '@icons/studded_tire.svg?react'
import MudTire from '@icons/mud_tire.svg?react'
import { ReactNode } from 'react'
import s from './style.module.scss'

type Tire = {
  icon: ReactNode,
  name: string
}

const tires: Tire[] = [
  {
    icon: <WinterTire />,
    name: 'Зимняя'
  },
  {
    icon: <StuddedTire />,
    name: 'Шипованная'
  },
  {
    icon: <MudTire />,
    name: 'Грязевая'
  },
]
const TireTypes = () => {
  return (
    <ul className={s.types}>
      {tires.map(({ icon, name }) => <span className={s.types__type}>{icon}{name}</span>)}
    </ul>
  )
}

export default TireTypes