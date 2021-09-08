import request from '@/utils/request'

// 专家评审查询项目申报待评审信息
export function expertGetAllWaitAuditingData(parems) {
  return request({
    url: '/ExpertAssessController/getProjectApplyInfosWaitAssess',
    method: 'get',
    params: parems
  })
}

// 专家评审对项目申报进行评审
export function expertAuditingProject(parems,data) {
  return request({
    url: '/ExpertAssessController/projectApplyInfoAssess',
    method: 'post',
    params: parems,
    data
  })
}

// 专家评审获取评审历史
export function expertGetAuditingHistory(parems) {
  return request({
    url: '/ExpertAssessController/getProjectApplyInfosAssessedRecord',
    method: 'get',
    params: parems
  })
}

// 科研主管获取评审排名
export function directorGetAuditingRank(parems) {
  return request({
    url: '/ExpertAssessController/getprojectAssessOrder',
    method: 'get',
    params: parems
  })
}

// 科研主管获取项目评审打分详情
export function directorGetAuditingScoreDetails(parems) {
  return request({
    url: '/projectApplyTwo/getProjectApplyInfoAuditedRecordDetail',
    method: 'get',
    params: parems
  })
}

//科研主管安排项目进行中期
export function arrangeProjectMidTerm(parems) {
  return request({
    url: '/ExpertAssessController/arrangeProjectMidTerm',
    method: 'post',
    data: parems
  })
}
//主管根据批次获取当前批次评审排名
export function getProjectAssessOrderByBatch(parems) {
  return request({
    url: '/ExpertAssessController/getProjectAssessOrderByBatch',
    method: 'get',
    params: parems
  })
}


