import classNames from 'classnames'
import s from './style.module.scss'
type Props = {
  className?: string
}
const Price = ({ className }: Props) => {
  return (
    <p className={classNames(s.price, className)}>
      <s className={s.price__old}>6 750 ₽</s>
      <span className={s.price__new}>6 750 ₽</span>
    </p>
  )
}

export default Price