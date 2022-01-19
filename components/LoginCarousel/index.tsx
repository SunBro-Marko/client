import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import styles from './carousel.module.scss'

import Illistration1 from 'components/LoginCarousel/components/business meeting.svg'
import Illistration2 from 'components/LoginCarousel/components/blogging.svg'
import Illistration3 from 'components/LoginCarousel/components/plan.svg'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'
// import Carousel from 'antd/lib/carousel'

class CarouselState {
  constructor(length: number) {
    this.length = length
    makeAutoObservable(this)
  }
  index = 0
  length: number

  next() {
    if (this.index === this.length - 1) return (this.index = 0)
    this.index++
  }
}

const CarouselContext = createContext(new CarouselState(0))

const Carousel = ({ children, timer }: any) => {
  const [state] = useState(new CarouselState(React.Children.count(children)))
  const slides = React.Children.map(children, (child: any, index) => {
    return React.cloneElement(child, {
      slideIndex: index,
    })
  })

  useEffect(() => {
    const interval = setInterval(() => state.next(), timer)
    return () => {
      clearInterval(interval)
    }
  }, [timer])
  return (
    <div className={styles.container}>
      <CarouselContext.Provider value={state}>
        {slides}
      </CarouselContext.Provider>
    </div>
  )
}

const Slide: FC = observer(({ children, slideIndex }: any) => {
  const context = useContext(CarouselContext)
  return slideIndex === context.index ? (
    <div className={styles.slide}>{children}</div>
  ) : null
})

const LoginCarousel: FC = () => {
  return (
    <Carousel timer={5000}>
      <Slide>
        <Illistration1 className={styles.illustration} />
        <h1 className={styles.text}>
          Жму руку заказчику, хотя ненавижу этого придурка
        </h1>
      </Slide>
      <Slide>
        <Illistration2 className={styles.illustration} />
        <h1 className={styles.text}>
          Сижу и жду когда моя зарплата станет 300К в наносек
        </h1>
      </Slide>
      <Slide>
        <Illistration3 className={styles.illustration} />
        <h1 className={styles.text}>
          Я могла бы работать, но буду показывать пальцем на доску
        </h1>
      </Slide>
    </Carousel>
  )
}

export default LoginCarousel
