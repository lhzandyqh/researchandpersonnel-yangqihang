import request from '@/utils/request'

// 科研主管获取个人信息审批历史
export function getAllTeacherPermissions() {
  return request({
    url: '/teacherinfo/getAllTecRolesInfo',
    method: 'get'
  })
}

// 科研主管根据学院、部门、教师姓名进行搜索教师
export function getOneTeacherByCondition(parems) {
  return request({
    url: '/teacherinfo/getTecRolesByCollegeAndTecName',
    method: 'get',
    params: parems
  })
}

// 科研主管设置权限
export function setTeacherPermission(parems) {
  return request({
    url: '/teacherinfo/updateTecRoles',
    method: 'post',
    params: parems
  })
}
