import * as types from './action-types'

export default {
  addFoodAsync({commit}, food) {
    commit([types.ADD_FOOD], food)
  }
}
