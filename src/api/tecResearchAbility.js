import request from '../utils/request'

// 教师信息采集-科研能力模块
// 学术论文获取所有信息
export function getAllPaperInfos(parems) {
  return request({
    url: '/sciResAchieve/getAllPaperInfos',
    method: 'get',
    params : parems
  })
}
// 教师根据论文类型获取论文信息
export function getPaperInfosByTecAndPaperType(parems) {
  return request({
    url: '/sciResAchieve/getPaperInfosByTecAndPaperType',
    method: 'get',
    params: parems
  })
}
// 教师删除学术论文信息
export function deletePaperInfoById(parems) {
  return request({
    url: '/sciResAchieve/deletePaperInfoById',
    method: 'delete',
    params: parems
  })
}
// 教师新增学术论文信息
export function insertPaperInfo(parems) {
  return request({
    url: '/sciResAchieve/insertPaperInfo',
    method: 'post',
    data: parems
  })
}
// 教师修改学术论文信息
export function updatePaperInfos(parems) {
  return request({
    url: '/sciResAchieve/updatePaperInfos',
    method: 'post',
    data: parems
  })
}
// 教师信息采集-课题项目模块
//获取该教师所有项目信息
export function getAllProjectInfo(parems) {
  return request ({
    url: '/sciResAchieve/getAllProjectInfo',
    method: 'get',
    params: parems
  })
}
// 教师根据项目级别获取项目信息
export function getProjectInfoByTecAndPaperType(parems) {
  return request ({
    url: '/sciResAchieve/getProjectInfoByTecAndPaperType',
    method: 'get',
    params: parems
  })
}
// 教师新增课题项目信息
export function insertProjectInfo (parems) {
  return request ({
    url: '/sciResAchieve/insertProjectInfo',
    method: 'post',
    data: parems
    })
}
//教师修改课题项目信息
export function updateProjectInfo (parems) {
  return request ({
    url: '/sciResAchieve/updateProjectInfo',
    method: 'post',
    data: parems
  })
}
//教师删除课题项目信息
export function deleteProjectInfoById (parems) {
  return request ({
    url: '/sciResAchieve/deleteProjectInfoById',
    method: 'delete',
    params: parems
  })
}
// 教师信息采集-专利登记模块
//获取该教师所有专利信息
export function getAllPatentInfo (parems) {
  return request ({
    url: '/sciResAchieve/getAllPatentInfo',
    method: 'get',
    params: parems
  })
}
// 教师根据专利类型获取专利信息
export function getPatentInfoByTecAndPaperType(parems){
  return request ({
    url: '/sciResAchieve/getPatentInfoByTecAndPaperType',
    method: 'get',
    params: parems
  })
}
// 教师删除专利信息
export  function deletePatentInfoById (parems) {
  return request ({
    url: '/sciResAchieve/deletePatentInfoById',
    method: 'delete',
    params: parems
  })
}
// 教师修改专利信息
export function updatePaperInfo (parems) {
  return request ({
    url: '/sciResAchieve/updatePaperInfo',
    method: 'post',
    data: parems
  })
}
// 教师新增专利信息
export function insertPatentInfo (parems) {
  return request ({
    url: '/sciResAchieve/insertPatentInfo',
    method: 'post',
    data: parems
  })
}
// 教师信息采集-专著登记模块
//获取该教师所有专著信息
export function getAllMonographInfo (parems) {
  return request ({
    url: '/sciResAchieve/getAllMonographInfo',
    method: 'get',
    params: parems
  })
}
// 教师根据id删除专著信息
export function deleteMonographInfoById (parems) {
  return request ({
    url: '/sciResAchieve/deleteMonographInfoById',
    method: 'delete',
    params: parems
  })
}
// 教师修改专著信息
export function updateMonographInfo (parems) {
  return request ({
    url: '/sciResAchieve/updateMonographInfo',
    method: 'post',
    data: parems
  })
}
// 教师新增专著信息
export function insertMonographInfo (parems) {
  return request ({
    url: '/sciResAchieve/insertMonographInfo',
    method: 'post',
    data: parems
  })
}
// 上传附件
// export function fileUpload (parems) {
//   return request ({
//     url: '/upload/fileUpload',
//     method: 'post',
//     params: parems
//   })
// }
