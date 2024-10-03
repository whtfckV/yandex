import classNames from "classnames";
import { CSSProperties } from "react";
import ArrowIcon from "@icons/arrow.svg?react"
import styles from './styles.module.scss'

type Props = {
  className?: string,
  style?: CSSProperties,
  onClick?: () => void,
}

const NextArrow = (props: Props) => {
  const { className, style, onClick } = props;

  return (
    <button
      className={classNames(className, styles.next)}
      style={style}
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
}

export default NextArrow