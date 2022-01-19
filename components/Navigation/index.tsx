import { Menu, Switch, Divider } from 'antd'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import React from 'react'
import { MenuMode, MenuTheme } from 'antd/lib/menu'

const { SubMenu } = Menu

const Demo = () => {
  const [mode, setMode]: [MenuMode, any] = React.useState('inline')
  const [theme, setTheme]: [MenuTheme, any] = React.useState('light')

  const changeMode = (value: any) => {
    setMode(value ? 'vertical' : 'inline')
  }

  const changeTheme = (value: any) => {
    setTheme(value ? 'dark' : 'light')
  }

  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
    </>
  )
}

export default Demo
