import { observable, action } from 'mobx'

export default class FirstStore {
  @observable num = 0
  @action toggleNum = async () => {
    this.num++
  }
}