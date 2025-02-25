import { Dispatch, SetStateAction } from "react"
import Minus from '@icons/minus.svg?react'
import Plus from '@icons/plus.svg?react'
import s from './style.module.scss'

type Props = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

const Counter = ({ count, setCount }: Props) => {
  return (
    <div className={s.counter}>
      <button className={'button'} onClick={() => setCount(prev => prev ? --prev : 0)}>
        <Minus />
      </button>
      <span>
        {count}
      </span>
      <button className={'button'} onClick={() => setCount(prev => ++prev)}>
        <Plus />
      </button>
    </div>
  )
}

export default Counter