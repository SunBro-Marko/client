import { makeAutoObservable } from 'mobx'

class User {
  profile = null

  constructor() {
    makeAutoObservable(this)
  }
}

export default new User()
