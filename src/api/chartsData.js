import request from '../utils/request'

//智能分析-普通教师基本方框
export function teacherBasic(parems) {
  return request ({
    url : '/projectApply/teacherBasic',
    method : 'get',
    params : parems
  })
}

//智能分析-普通教师最近12个月的学术成果及参与项目数
export function paperNum(parems) {
  return request ({
    url : '/projectApply/paperNum',
    method : 'get',
    params : parems
  })
}

//智能分析-普通教师参与的项目状态分布
export function projectDistribution(parems) {
  return request ({
    url : '/projectApply/projectDistribution',
    method : 'get',
    params : parems
  })
}

//智能分析-科研主管数量统计
export function deptBasic(parems) {
  return request ({
    url : '/projectApply/deptBasic',
    method : 'get',
    params : parems
  })
}

//智能分析-科研主管根据学院、类型、指标查询学院科研成果数量
export function getSciAchieveNumsByCollegeOrTypeOrQuota(parems) {
  return request ({
    url : '/projectApply/getSciAchieveNumsByCollegeOrTypeOrQuota',
    method : 'get',
    params : parems
  })
}

//智能分析-科研主管查看学术成果数量默认（总数）
export function somePaperSum() {
  return request ({
    url : '/projectApply/somePaperSum',
    method : 'get',
  })
}

// 智能分析-科研主管/专家查询按年份学术成果数量
export function getSciAchieveNumsByYears() {
  return request ({
    url : '/projectApply/getSciAchieveNumsByYears',
    method : 'get',
  })
}

//智能分析-专家基本方框
export function getExpertBasic() {
  return request ({
    url : '/projectApply/getExpertBasic',
    method : 'get',
  })
}

//智能分析-专家评审-教师科研情况对比
export function getExpertSCiAchieveByTecName() {
  return request ({
    url : '/projectApply/getExpertSCiAchieveByTecName',
    method : 'get',
  })
}

//智能分析-专家评审-教师科研情况对比
export function getExpertSciAchiCompareByTecNameTwo(parems) {
  return request ({
    url : '/projectApply/getExpertSciAchiCompareByTecNameTwo',
    method : 'get',
    params : parems
  })
}
