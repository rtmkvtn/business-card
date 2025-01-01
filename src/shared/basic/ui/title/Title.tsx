import React from 'react'
import classNames from 'classnames'

import styles from './Title.module.scss'

type IProps = {
  className?: string
  size?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode | string
}
const Title = ({ className, size = 'h2', children }: IProps) => {
  return (
    <p
      className={classNames(styles.title, styles[size], className && className)}
    >
      {children}
    </p>
  )
}
export default Title
