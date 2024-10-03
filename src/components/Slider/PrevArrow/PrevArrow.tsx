import classNames from "classnames";
import { CSSProperties } from "react";
import ArrowIcon from "@icons/arrow.svg?react"
import s from './style.module.scss';

type Props = {
  className?: string,
  style?: CSSProperties,
  onClick?: () => void,
}

const PrevArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={classNames(className, s.prev)}
      style={style}
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
}

export default PrevArrow