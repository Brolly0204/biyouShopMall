export default {
  foodCount(state) {
    if (state.shopCart.length > 0) {
       let total = state.shopCart.reduce((prev, item) => {
         return prev + item.count
       }, 0)
       return total
    }
     return 0
  },
  foodTotal(state) {
    if (state.shopCart.length > 0) {
       let total = state.shopCart.reduce((prev, item) => {
         return prev + item.count * item.price
       }, 0)
       return total
    }
     return 0
  }
}
