import Heart from '@icons/heart.svg?react'
import tire from '@images/tire.png'
import { useState } from 'react'
import classNames from 'classnames'
import Signs from './Signs/Signs'
import { CardDescription } from './CardDescription'
import { Price } from './Price'
import s from './style.module.scss'
import { Counter } from './Counter'


const Card = () => {
  const [count, setCount] = useState(4)

  return (
    <div className={s.card}>
      <div className={s.card__preview}>
        <Signs />
        <img className={s.card__img} src={tire} alt="Изображение шины" />
      </div>
      <div className={s.card__info}>
        <CardDescription />
        <div className={s.card__actions}>
          <Price className={s.card__price} />
          <Counter count={count} setCount={setCount} />
          <button className={classNames('button', s.toBasket)}>
            В корзину
          </button>
          <button className={classNames('button', s.toLike)}>
            <Heart />
          </button>
          <button className={classNames('button', s.buy)}>
            Купить в 1 клик
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card