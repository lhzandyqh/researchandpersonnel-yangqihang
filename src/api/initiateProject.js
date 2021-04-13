import request from '@/utils/request'

// 填写申报
export function projectFillDeclaration(parems) {
  return request({
    url: '/projectApplyTwo/saveProjectApplyInfo',
    method: 'post',
    data: parems
  })
}


// 获取所有提交审核的科研处主管名单
export function getDirectorList() {
  return request({
    url: '/teacherinfo/getNameByResDirector',
    method: 'get'
  })
}


// 获取项目评审进度
export function projectReviewSchedule(parems) {
  return request({
    url: '/projectApplyTwo/getProjectApplyScheduleInfos',
    method: 'get',
    params: parems
  })
}
