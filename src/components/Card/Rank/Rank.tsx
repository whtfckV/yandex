import StarFill from '@icons/star_fill.svg?react'
import Star from '@icons/star.svg?react'
import s from './style.module.scss'
import { ReactNode } from 'react'

const starts: Record<'fill' | 'notFill', ReactNode> = {
  fill: <StarFill />,
  notFill: <Star />
}

const ranks: ('fill' | 'notFill')[] = ['fill', 'fill', 'fill', 'fill', 'notFill']

const Rank = () => {
  return (
    <div className={s.rank}>
      <ul className={s.rank__stars}>
        {ranks.map(star => starts[star])}
      </ul>
      <span className={s.rank__feedback}>10 отзывов</span>
    </div>
  )
}

export default Rank