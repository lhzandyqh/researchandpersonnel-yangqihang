import request from '@/utils/request'

//科研主管与其他权限获取所有的常用表格
export function userGetAllTable() {
  return request({
    url: '/FileLibraryController/getAllExcelFile',
    method: 'get'
  })
}

//科研主管与其他权限获取所有的常用文件
export function userGetAllFile() {
  return request({
    url: '/FileLibraryController/getAllNoticeFile',
    method: 'get'
  })
}

// 科研主管上传文件
export function deptUploadFile(parems) {
  return request({
    url: '/FileLibraryController/addFile',
    method: 'post',
    data: parems
  })
}
