import Button from '@mui/material/Button'
import Navigation from 'components/Navigation'
import { FC } from 'react'
import styles from './styles/default.module.scss'

const Default: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.warning}>Сайт находится в разработке</div>
      <header className={styles.header}>Тут будет хэдер</header>
      <body>
        <Navigation />
        {children}
      </body>
      <footer className={styles.footer}>Тут будет футер</footer>
    </div>
  )
}

export default Default
