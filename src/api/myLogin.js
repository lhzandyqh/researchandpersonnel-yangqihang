import request from '@/utils/request'

// 真实登录接口
export function loginByUsername(parems) {
  return request({
    url: '/teacherinfo/loginByUsernameTwo',
    method: 'get',
    params: parems
  })
}

// 登录后获取账号的所有权限
export function getAllPermission(parems) {
  return request({
    url: '/teacherinfo/getTecRolesByUsername',
    method: 'get',
    params: parems
  })
}
