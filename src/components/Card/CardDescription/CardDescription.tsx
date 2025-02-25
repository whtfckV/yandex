import { Rank } from '../Rank'
import { TireTypes } from '../TireTypes'
import s from './style.module.scss'

const CardDescription = () => {
  return (
    <div className={s.descr}>
      <h2 className={s.descr__title}>205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V</h2>
      <Rank />
      <TireTypes />
    </div>
  )
}

export default CardDescription