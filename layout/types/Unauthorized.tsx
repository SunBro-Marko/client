import { FC } from 'react'
import styles from './styles/unauthorized.module.scss'

const UnauthorizedLayout: FC = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}

export default UnauthorizedLayout
