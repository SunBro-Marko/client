import React from 'react'
import Head from 'next/head'
import styles from 'styles/login.module.scss'

import { Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useLayout } from 'lib/hooks/useLayout'
import useInput from 'lib/hooks/useInput'

import Illistration1 from 'components/LoginCarousel/business meeting.svg'
import Illistration2 from 'components/LoginCarousel/blogging.svg'
import Illistration3 from 'components/LoginCarousel/components/plan.svg'
import LoginCarousel from 'components/LoginCarousel'

function Login() {
  useLayout('Unauthorized')
  const usernameIntput = useInput('')
  const passwordIntput = useInput('')

  const submitForm = () => {
    console.log({
      usermane: usernameIntput.value,
      password: passwordIntput.value,
    })
  }

  return (
    <>
      <Head>
        <title>CHECKLIST: Авторизация</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <LoginCarousel />
        </div>
        <div className={styles.login}>
          <div className={styles.login_logo}>CHECKLIST</div>
          <div className={styles.login_content}>
            <h1>С возвращением ✌️</h1>
            <p>
              Для входа в систему, используйте e-mail и пароль, использованные
              вами при регистрации
            </p>

            <Input
              {...usernameIntput}
              size="large"
              placeholder="Введите вашу почту"
              prefix={<UserOutlined />}
            />
            <Input.Password
              {...passwordIntput}
              size="large"
              placeholder="Введите ваш пароль"
              prefix={<LockOutlined />}
            />
            <Checkbox>Запомнить меня</Checkbox>

            <div className={styles.login_buttonBlock}>
              <Button
                type="primary"
                shape="round"
                size="large"
                onClick={() => submitForm()}
              >
                Войти
              </Button>

              {/* <Button type="ghost" shape="round" size="large">
                Зарегистрироваться
              </Button> */}
            </div>
          </div>
          <div className={styles.login_footer}>
            Sunbro.Marko© Moscow {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
