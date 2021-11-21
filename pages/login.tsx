import React from 'react'
import uiStore from 'store/ui.store'

function Login() {
  uiStore.setLayout('Unauthorized')
  return <div>Страница авторизации</div>
}

export default Login
