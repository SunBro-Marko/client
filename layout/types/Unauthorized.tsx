import { FC } from 'react'

const SomeLayout: FC = ({ children }) => {
  return (
    <div>
      <h1>Какой то layout</h1>
      {children}
    </div>
  )
}

export default SomeLayout
