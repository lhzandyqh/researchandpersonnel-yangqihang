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

// 学术成果和项目课题-科研主管获取所有待审核-lixian
export function getWaitResDirectorAuditInfosTwo(parems) {
  return request({
    url: '/projectApplyTwo/getWaitResDirectorAuditInfosTwo',
    method: 'get',
    params: parems
  })
}

// 学术成果-根据id获取学术成果评审详情
export function getAcadeAchievesWaitAuditDetail(parems) {
  return request({
    url: '/projectApplyTwo/getAcadeAchievesWaitAuditDetail',
    method: 'get',
    params: parems
  })
}

// 学术成果-科研主管审核学术成果信息
export function acadeAchievesAudit(parems) {
  return request({
    url: '/projectApplyTwo/acadeAchievesAudit',
    method: 'post',
    params: parems
  })
}

// 项目课题-根据id获取项目课题评审详情
export function getProjectApplyWaitAuditDetail(parems) {
  return request({
    url: '/projectApplyTwo/getProjectApplyWaitAuditDetail',
    method: 'get',
    params: parems
  })
}

// 项目课题-科研主管审核项目课题信息
export function projectApplyAudit(parems) {
  return request({
    url: '/projectApplyTwo/projectApplyAudit',
    method: 'post',
    params: parems
  })
}

//获取专家姓名
export function getNameByRolesAsExpert(parems) {
  return request({
    url: '/teacherinfo/getNameByRolesAsExpert',
    method: 'get',
    params: parems
  })
}

// 科研主管将项目申报提交给专家评审
export function arrangeExpertReview(parems) {
  return request({
    url: '/projectApplyTwo/arrangeExpertReview',
    method: 'post',
    params: parems
  })
}

//审批历史模块
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

// 科研主管获取学术成果审批历史
export function getAcadeAchieveAuditedRecord() {
  return request({
    url: '/projectApplyTwo/getAcadeAchieveAuditedRecord',
    method: 'get'
  })
}

// 科研主管查看学术成果审批历史详情
export function getAcadeAchieveAuditedRecordDetail(parems) {
  return request({
    url: '/projectApplyTwo/getAcadeAchieveAuditedRecordDetail',
    method: 'get',
    params: parems
  })
}

// 科研主管查看项目申报审批历史
export function getProjectApplyInfosAuditedRecord(parems) {
  return request({
    url: '/projectApplyTwo/getProjectApplyInfosAuditedRecord',
    method: 'get',
    params: parems
  })
}

// 科研主管查看项目申报审批历史详情
export function getProjectApplyInfoAuditedRecordDetail(parems) {
  return request({
    url: '/projectApplyTwo/getProjectApplyInfoAuditedRecordDetail',
    method: 'get',
    params: parems
  })
}
