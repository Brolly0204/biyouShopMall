import {get} from './index'

// 获取分类食品
export const getFoods = () => {
  return get('/api/getFoods')
}
