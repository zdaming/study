import request from '@/utils/request'

function test (data = {}) {
  return request({
    url: '/api/useraa',
    method: 'get',
    params: data
  })
}

export default {
  test
}
