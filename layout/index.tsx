import { observer } from 'mobx-react'
import React, { FC, ReactChild, ReactChildren, ReactNode } from 'react'
import * as types from './types'
import UIStore from 'store/ui.store'

type LayoutsStore = {
  [key: string]: FC
}

export interface LayoutProps {
  children: ReactChildren | ReactChild
}

export const Layout = observer(({ children }: LayoutProps) => {
  const Component = (types as LayoutsStore)[UIStore.layout || 'Default']
  return <Component>{children}</Component>
})

export type Layouts = keyof typeof types
