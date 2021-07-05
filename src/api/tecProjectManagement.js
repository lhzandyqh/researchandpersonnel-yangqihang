import request from '../utils/request'

//项目管理-项目中期模块
//获取项目中期所有信息
export function getProjectInterim(parems) {
  return request({
    url: '/projectManage/getProjectInterim',
    method: 'get',
    params : parems
  })
}
//教师获取中期项目名称和项目评审专家
export function getConclusionProjectNAndExpert(parems) {
  return request({
    url: '/projectManage/getConclusionProjectNAndExpert',
    method: 'get',
    params: parems
  })
}
//教师查看中期评审结果
export function getDiscussionResult(parems) {
  return request({
    url: '/projectManage/getDiscussionResult',
    method: 'get',
    params: parems
  })
}
//教师新增项目中期信息
export function insertProjectInterim(parems) {
  return request({
    url: '/projectManage/insertProjectInterim',
    method: 'post',
    data : parems
  })
}
//教师修改项目中期信息
export function updateProjectInterim(parems) {
  return request({
    url: '/projectManage/updateProjectInterim',
    method: 'post',
    data : parems
  })
}
//项目管理-项目结题模块
//获取项目结题所有信息
export function getProjectConclusion(parems) {
  return request({
    url: '/projectManage/getProjectConclusion',
    method: 'get',
    params : parems
  })
}
//教师新增项目结题信息
export function insertProjectConclusion(parems) {
  return request({
    url: '/projectManage/insertProjectConclusion',
    method: 'post',
    data : parems
  })
}//教师修改项目结题信息
export function updateProjectConclusion(parems) {
  return request({
    url: '/projectManage/updateProjectConclusion',
    method: 'post',
    data : parems
  })
}
