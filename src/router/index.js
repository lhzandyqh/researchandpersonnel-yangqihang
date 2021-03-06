import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import treeTableRouter from './modules/tree-table'
// import nestedRouter from './modules/nested'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        // component: () => import('@/views/dashboard/index'),
        component: () => import('@/views/customInterface/homePage/index'),
        name: 'Dashboard',
        meta: { title: '????????????', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  {
    path: '/collect',
    component: Layout,
    redirect: '/collect/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '????????????',
      icon: 'form',
      roles: ['admin', '??????'] // you can set roles in root nav
    },
    children: [
      {
        path: 'onetime',
        component: () => import('@/views/customInterface/dataColletion/oneTimeCollection'),
        name: 'onetime',
        meta: {
          title: '????????????',
          roles: ['admin', '??????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'manytimes',
        component: () => import('@/views/customInterface/dataColletion/manyTimesCollection'),
        name: 'manytimes',
        meta: {
          title: '????????????',
          roles: ['admin', '??????'] // or you can only set roles in sub nav
        }
      },
      // {
      //   path: 'myInformation',
      //   component: () => import('@/views/customInterface/dataColletion/myInformation'),
      //   name: 'manytimes',
      //   meta: {
      //     title: '????????????',
      //     roles: ['admin', 'editor'] // or you can only set roles in sub nav
      //   }
      // }
    ]
  },
  {
    path: '/approval',
    component: Layout,
    redirect: '/approval/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '????????????',
      icon: 'example',
      roles: ['?????????', '??????'] // you can set roles in root nav
    },
    children: [
      {
        path: 'formfill',
        component: () => import('@/views/customInterface/circulationApproval/formFill'),
        name: 'formfill',
        meta: {
          title: '????????????',
          roles: ['?????????', '??????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'approvalProgress',
        component: () => import('@/views/customInterface/circulationApproval/approvalProgress'),
        name: 'approvalProgress',
        meta: {
          title: '????????????',
          roles: ['?????????', '??????'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // {
  //   path: '/projectmanage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',

  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Icons',
  //       meta: { title: '????????????2', icon: 'tree-table', noCache: true }

  //       component: () => import('@/views/customInterface/projectManage/index'),
  //       name: 'Icons',
  //       meta: { title: '????????????', icon: 'tree-table', noCache: true }

  //     }
  //   ]
  // },
  {
    path: '/projectmanage',
    component: Layout,
    redirect: '/projectmanage/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '????????????',
      icon: 'documentation',
      roles: ['admin', '??????'] // you can set roles in root nav
    },
    children: [
      // {
      //   path: 'processwarn',
      //   component: () => import('@/views/customInterface/projectManage/index'),
      //   name: 'processwarn',
      //   meta: {
      //     title: '????????????',
      //     roles: ['admin', '??????'] // or you can only set roles in sub nav
      //   }
      // },
      // {
      //   path: 'projectbegin',
      //   component: () => import('@/views/customInterface/projectManage/projectBegin'),
      //   name: 'projectbegin',
      //   meta: {
      //     title: '????????????',
      //     roles: ['admin', '??????'] // or you can only set roles in sub nav
      //   }
      // },
      {
        path: 'projectmiddle',
        component: () => import('@/views/customInterface/projectManage/projectmiddle'),
        name: 'projectmiddle',
        meta: {
          title: '????????????',
          roles: ['admin', '??????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'projectfinal',
        component: () => import('@/views/customInterface/projectManage/projectFinal'),
        name: 'projectfinal',
        meta: {
          title: '????????????',
          roles: ['admin', '??????'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/projectapproval',
    component: Layout,
    redirect: '/projectapproval/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '????????????',
      icon: 'table',
      roles: ['????????????', '????????????'] // you can set roles in root nav
    },
    children: [
      {
        path: 'departmentapproval',
        component: () => import('@/views/customInterface/projectApproval/departmentApproval'),
        name: 'departmentapproval',
        meta: {
          title: '????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      //lixian
      {
        path: 'middleapproval',
        component: () => import('@/views/customInterface/projectApproval/middleapproval'),
        name: 'endapproval',
        meta: {
          title: '????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'endapproval',
        component: () => import('@/views/customInterface/projectApproval/endApproval'),
        name: 'endapproval',
        meta: {
          title: '????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'researchmentapproval',
        component: () => import('@/views/customInterface/projectApproval/researchApproval'),
        name: 'researchmentapproval',
        meta: {
          title: '????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'reviewrank',
        component: () => import('@/views/customInterface/projectApproval/reviewRank'),
        name: 'reviewrank',
        meta: {
          title: '????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'departmenthistory',
        component: () => import('@/views/customInterface/projectApproval/departmentHistory'),
        name: 'departmenthistory',
        meta: {
          title: '????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'researchhistory',
        component: () => import('@/views/customInterface/projectApproval/researchHistory'),
        name: 'researchhistory',
        meta: {
          title: '????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // {
  //   path: '/smartinquire',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'smartinquire',
  //       component: () => import('@/views/customInterface/smartInquire/index'),
  //       name: 'smartinquire',
  //       meta: { title: '????????????', icon: 'search', noCache: true, roles: ['????????????'] }
  //     }
  //   ]
  // },
  {
    path: '/budgetmanagement',
    component: Layout,
    children: [
      {
        path: 'budgetmanagement',
        component: () => import('@/views/customInterface/budgetManagement/index'),
        name: 'authoritymanagement',
        meta: { title: '????????????', icon: 'money', noCache: true, roles: ['????????????','??????'] }
      }
    ]
  },
  {
    path: '/authoritymanagement',
    component: Layout,
    children: [
      {
        path: 'authoritymanagement',
        component: () => import('@/views/customInterface/authorityManagement/index'),
        name: 'authoritymanagement',
        meta: { title: '????????????', icon: 'people', noCache: true, roles: ['????????????'] }
      }
    ]
  },
  {
    path: '/pointsconfiguration',
    component: Layout,
    children: [
      {
        path: 'pointsconfiguration',
        component: () => import('@/views/customInterface/pointsConfiguration/index'),
        name: 'pointsConfiguration',
        meta: { title: '????????????', icon: 'tab', noCache: true, roles: ['????????????'] }
      }
    ]
  },
  {
    path: '/systemsettings',
    component: Layout,
    redirect: '/systemsettings/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '????????????',
      icon: 'component',
      roles: ['????????????'] // you can set roles in root nav
    },
    children: [
      {
        path: 'batchTable',
        component: () => import('@/views/customInterface/systemSettings/batchSettings'),
        name: 'batchTable',
        meta: {
          title: '??????????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'projectTable',
        component: () => import('@/views/customInterface/systemSettings/index'),
        name: 'projectTable',
        meta: {
          title: '?????????????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'reviewTable',
        component: () => import('@/views/customInterface/systemSettings/reviewTableSettings'),
        name: 'reviewTable',
        meta: {
          title: '???????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/smartexport',
    component: Layout,
    redirect: '/smartexport/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '????????????',
      icon: 'tree-table',
      roles: ['????????????', '??????', '????????????'] // you can set roles in root nav
    },
    children: [
      // {
      //   path: 'smartexport',
      //   component: () => import('@/views/customInterface/smartExport/index'),
      //   name: 'smartexport',
      //   meta: {
      //     title: '????????????',
      //     roles: ['????????????','????????????', '??????'] // or you can only set roles in sub nav
      //   }
      // },
      // {
      //   path: 'smartimport',
      //   component: () => import('@/views/customInterface/smartExport/smartImport'),
      //   name: 'smartimport',
      //   meta: {
      //     title: '????????????',
      //     roles: ['????????????','????????????'] // or you can only set roles in sub nav
      //   }
      // },
      {
        path: 'fileLibrary',
        component: () => import('@/views/customInterface/smartExport/fileLibrary'),
        name: 'fileLibrary',
        meta: {
          title: '?????????',
          roles: ['??????','????????????'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'fileLibraryManage',
        component: () => import('@/views/customInterface/smartExport/fileLibraryManage'),
        name: 'fileLibraryManage',
        meta: {
          title: '???????????????',
          roles: ['????????????'] // or you can only set roles in sub nav
        }
      },
      // {
      //   path: 'onekeymodel',
      //   component: () => import('@/views/customInterface/smartExport/onekeyModel'),
      //   name: 'onekeymodel',
      //   meta: {
      //     title: '????????????',
      //     roles: ['????????????'] // or you can only set roles in sub nav
      //   }
      // }
    ]
  },

  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true, roles: ['????????????','????????????'] }
  //     }
  //   ]
  // },


  /** When your routing table is too long, you can split it into small modules**/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,
  // treeTableRouter,

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },

  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/mergeHeader'),
  //       name: 'MergeHeader',
  //       meta: { title: 'mergeHeader' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'pdf', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },

  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },

  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
