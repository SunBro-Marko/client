import { makeAutoObservable } from 'mobx'
import { Layouts } from '../layout'

class UIStore {
  constructor() {
    makeAutoObservable(this)
  }

  private defaultLayout: Layouts = 'Default'
  layout: Layouts = this.defaultLayout

  setLayout(payload: Layouts) {
    this.layout = payload
  }
  setDefaultLayout() {
    this.layout = this.defaultLayout
  }
}

export default new UIStore()
