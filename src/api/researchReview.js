import request from '@/utils/request'

// 科研主管获取所有待审核
export function directorGetAllWaitAuditingInfo(parems) {
  return request({
    url: '/projectApplyTwo/getWaitResDirectorAudit',
    method: 'get',
    params: parems
  })
}

// 科研主管根据类型获取待审核
export function directorGetAllWaitAuditingInfoByType(parems) {
  return request({
    url: '/projectApplyTwo/getWaitResDirectorAuditInfosTwo',
    method: 'get',
    params: parems
  })
}

// 根据id获取个人信息评审详情
export function directorGetBasicInfoById(parems) {
  return request({
    url: '/projectApplyTwo/getTecBasicUpdateWaitAuditDetail',
    method: 'get',
    params: parems
  })
}

// 科研主管审核个人信息
export function directorAuditingBasicInfoById(parems) {
  return request({
    url: '/teacherinfo/tecBaseInfoAudit',
    method: 'post',
    params: parems
  })
}

// 科研主管获取个人信息审批历史
export function directorGetBasicInfoAuditingHistory() {
  return request({
    url: '/teacherinfo/getTecUpdateInfoAudited',
    method: 'get'
  })
}

// 科研主管查看个人信息审批历史详情
export function directorGetBasicInfoAuditingHistoryDetails(parems) {
  return request({
    url: '/teacherinfo/getTecUpdateInfoDetailAudited',
    method: 'get',
    params: parems
  })
}
