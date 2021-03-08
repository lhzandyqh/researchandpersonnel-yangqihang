import request from '@/utils/request'

// 项目立项表个性化配置获取配置内容
export function projectTableGetData() {
  return request({
    url: '/projectApplyTwo/getProjectApplyRequireInfos',
    method: 'get'
  })
}

// 项目立项表新增填写项
export function addProjectTableData(parems) {
  return request({
    url: '/projectApplyTwo/ProjectApplyRequireInfo',
    method: 'post',
    data: parems
  })
}

// 项目立项表删除配置项
export function deleteProjectTableData(parems) {
  return request({
    url: '/projectApplyTwo/deleteProjectApplyRequireInfoById',
    method: 'delete',
    params: parems
  })
}

// 项目立项表编辑配置项
export function editProjectTableData(parems) {
  return request({
    url: '/projectApplyTwo/updateProjectApplyRequireInfoById',
    method: 'post',
    params: parems
  })
}


// 获取项目评审维度个性化设置
export function projectReviewDimensionSetting() {
  return request({
    url: '/projectApplyTwo/getEvaluationAllContent',
    method: 'get'
  })
}

// 新增项目评审维度
export function addReviewDimension(parems) {
  return request({
    url: '/projectApplyTwo/setEvaluationContent',
    method: 'post',
    params: parems
  })
}

// 删除项目评审维度
export function deleteReviewDimension(parems) {
  return request({
    url: '/projectApplyTwo/removeEvalutionContent',
    method: 'delete',
    params: parems
  })
}

// 获取全部评审维度表格内容
export function getDimensionTableData() {
  return request({
    url: '/projectApplyTwo/getAllEvalutionContentDto',
    method: 'get'
  })
}

// 根据当前选择获取评审维度表格内容
export function getDimensionTableDataById(parems) {
  return request({
    url: '/projectApplyTwo/getEvalutionContentById',
    method: 'get',
    params: parems
  })
}
