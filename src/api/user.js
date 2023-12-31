import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/',
    method: 'post',
    data
  })
}

export function createUser(data) {
  return request({
    url: '/users/create/',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/info/',
    method: 'get',
    params: { token }
  })
}

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
