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

//教师专业能力修改
export function teacherEditProfessionalInfo(parems) {
  return request ({
    url: '/teacherinfo/updateTeaProfessAbilityInfoById',
    method: 'post',
    params: parems
  })
}
//获取教师工作经历
export function getWorkExp(parems) {
  return request ({
    url: '/teacherinfo/getWorkExp',
    method: 'get',
    params: parems
  })
}
//教师工作经历修改
export function updateWorkExp(parems) {
  return request ({
    url: '/teacherinfo/updateWorkExp',
    method: 'post',
    data: parems
  })
}
//教师工作经历新增
export function insertWorkExp(parems) {
  return request ({
    url: '/teacherinfo/insertWorkExp',
    method: 'post',
    data: parems
  })
}
// 教师工作经历删除
export function deleteTecWorkExpById(parems) {
  return request ({
    url: '/teacherinfo/deleteTecWorkExpById',
    method: 'delete',
    params: parems
  })
}
