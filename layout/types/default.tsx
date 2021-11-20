import { FC } from 'react'

const Default: FC = ({ children }) => {
  return (
    <div>
      <div className="message">Сайт находится в разработке</div>
      <header>Тут будет хэдер</header>
      <body>{children}</body>
      <footer>Тут будет футер</footer>
    </div>
  )
}

export default Default
