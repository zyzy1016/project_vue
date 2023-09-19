import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}

export function getBookList(params) {
  return request({
    url: '/books',
    method: 'get',
    params
  })
}
