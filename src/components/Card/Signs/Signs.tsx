import Medal from '@icons/medal.svg?react'
import Shield from '@icons/shield.svg?react'
import Discount from '@icons/discount.svg?react'
import Present from '@icons/present.svg?react'
import Like from '@icons/like.svg?react'
import s from './style.module.scss'

const icons = [
  <Medal />,
  <Shield />,
  <Discount />,
  <Present />,
  <Like />,
]
const Signs = () => {
  return (
    <ul className={s.icons}>
      {icons.map(icon => <li className={s.card__icon} key={Math.random() * Date.now()}>{icon}</li>)}
    </ul>
  )
}

export default Signs