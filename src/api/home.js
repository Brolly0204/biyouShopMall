import {get} from './index'

const REQ_URL = {
  GET_SLIDES: '/api/getSlides' // 获取slide图片
}

export const getSlides = () => {
  return get(REQ_URL.GET_SLIDES)
}
