import { Layouts } from 'layout'
import { useEffect } from 'react'
import ui from 'store/ui.store'

export const useLayout = (layout: Layouts) => {
  useEffect(() => {
    ui.setLayout(layout)
    return () => ui.setDefaultLayout()
  }, [layout])
  return
}
