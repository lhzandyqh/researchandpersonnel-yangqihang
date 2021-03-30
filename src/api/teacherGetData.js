import request from '@/utils/request'

// 教师获取基本信息
export function teacherGetBasicInforma(parems) {
  return request({
    url: '/teacherinfo/getTeacherInfoById',
    method: 'post',
    params: parems
  })
}

// 教师基本信息修改
export function teacherEditBasicInfo(parems) {
  return request({
    url: '/teacherinfo/updateTeacherBaseInfoById',
    method: 'post',
    params: parems
  })
}
