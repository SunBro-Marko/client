import { FC } from 'react'
import styles from './styles/unauthorized.module.scss'
import Image from 'next/image'

const UnauthorizedLayout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default UnauthorizedLayout
