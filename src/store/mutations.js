import * as types from './action-types'

export default {
  [types.ADD_FOOD]({shopCart}, food) {
    let flag = shopCart.find(item => item === food)
    if (!flag) {
      shopCart.push(food)
    }
  },
  [types.DEL_FOOD](state, food) {
    state.shopCart = state.shopCart.filter(item => item !== food)
  }
}
