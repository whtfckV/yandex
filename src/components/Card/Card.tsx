import Medal from '@icons/medal.svg?react'
import Shield from '@icons/shield.svg?react'
import Discount from '@icons/discount.svg?react'
import Present from '@icons/present.svg?react'
import Like from '@icons/like.svg?react'
import StarFill from '@icons/star_fill.svg?react'
import Star from '@icons/star.svg?react'
import WinterTire from '@icons/winter_tire.svg?react'
import StuddedTire from '@icons/studded_tire.svg?react'
import MudTire from '@icons/mud_tire.svg?react'
import Minus from '@icons/minus.svg?react'
import Plus from '@icons/plus.svg?react'
import Heart from '@icons/heart.svg?react'
import tire from '@images/tire.png'
import s from './style.module.scss'
import { ReactNode, useState } from 'react'
import classNames from 'classnames'

type Tire = {
  icon: ReactNode,
  name: string
}

const icons = [
  <Medal />,
  <Shield />,
  <Discount />,
  <Present />,
  <Like />,
]

const starts: Record<'fill' | 'notFill', ReactNode> = {
  fill: <StarFill />,
  notFill: <Star />
}

const ranks: ('fill' | 'notFill')[] = ['fill', 'fill', 'fill', 'fill', 'notFill']

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

const Card = () => {
  const [count, setCount] = useState(4)

  // Я бы раздикомпозировал весь этот компонент, но бесплатно тратить своё время я не очень хочу
  return (
    <div className={s.card}>
      <div className={s.card__preview}>
        <ul className={s.card__icons}>
          {icons.map(icon => <li className={s.card__icon} key={Math.random() * Date.now()}>{icon}</li>)}
        </ul>
        <img className={s.card__img} src={tire} alt="Изображение шины" />
      </div>
      <div className={s.card__info}>
        <div className={s.card__descr}>
          <h2 className={s.card__title}>205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V</h2>
          <div className={s.card__rank}>
            <ul className={s.card__stars}>
              {ranks.map(star => starts[star])}
            </ul>
            <span className={s.card__feedback}>10 отзывов</span>
          </div>
          <ul className={s.card__types}>
            {tires.map(({ icon, name }) => <span className={s.card__type}>{icon}{name}</span>)}
          </ul>
        </div>
        <div className={s.card__actions}>
          <p className={s.card__price}>
            <s className={s.card__oldPrice}>6 750 ₽</s>
            <span className={s.card__newPrice}>6 750 ₽</span>
          </p>
          <div className={s.card__counter}>
            <button className={s.card__button} onClick={() => setCount(prev => prev ? --prev : 0)}>
              <Minus />
            </button>
            <span>
              {count}
            </span>
            <button className={s.card__button} onClick={() => setCount(prev => ++prev)}>
              <Plus />
            </button>
          </div>
          <button className={classNames(s.card__button, s.toBasket)}>В корзину</button>
          <button className={classNames(s.card__button, s.toLike)}><Heart /></button>
          <button className={classNames(s.card__button, s.buy)}>Купить в 1 клик</button>
        </div>
      </div>
    </div>
  )
}

export default Card