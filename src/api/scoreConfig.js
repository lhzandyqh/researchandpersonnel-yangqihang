import request from '@/utils/request'

// 项目课题积分配置查询
export function projectScoreQuery() {
  return request({
    url: '/IntegralAllocationController/getProjectScoreInfos',
    method: 'get'
  })
}

//学术论文积分配置查询
export function academicScoreQuery() {
  return request({
    url: '/IntegralAllocationController/getPaperScoreInfos',
    method: 'get'
  })
}

// 科研专利积分配置查询
export function scientificScoreQuery() {
  return request({
    url: '/IntegralAllocationController/getPatentScoreInfos',
    method: 'get'
  })
}

// 学术专著积分配置查询
export function monographsScoreQuery() {
  return request({
    url: '/IntegralAllocationController/getMonographScoreInfos',
    method: 'get'
  })
}

// 项目课题积分配置
export function projectScoreConfig(parems) {
  return request({
    url: '/IntegralAllocationController/setProjectScoreInfo',
    method: 'post',
    data: parems
  })
}

// 学术论文积分配置
export function academicScoreConfig(parems) {
  return request({
    url: '/IntegralAllocationController/setPaperScoreInfo',
    method: 'post',
    data: parems
  })
}

// 科研专利积分配置
export function scientificScoreConfig(parems) {
  return request({
    url: '/IntegralAllocationController/setPatentScoreInfo',
    method: 'post',
    data: parems
  })
}

// 科研著作积分配置
export function monographsScoreConfig(parems) {
  return request({
    url: '/IntegralAllocationController/setMonographScoreInfo',
    method: 'post',
    data: parems
  })
}


