import request from '@/utils/request'

// 教师获取基本信息
export function teacherGetBasicInforma(parems) {
  return request({
    url: '/teacherinfo/getTeacherInfoById',
    method: 'post',
    params: parems
  })
}
