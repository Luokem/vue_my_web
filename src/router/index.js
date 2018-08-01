import Vue from 'vue'
import Router from 'vue-router'
import  IndexPage from '@/pages/indexPage.vue'
import  Zero from '@/components/st-page/zero.vue'
import StudyPage from '@/pages/st-page.vue'
import EditPage from '@/pages/editPage.vue'
import TimeDownEnd from '@/pages/timeDownEnd.vue'
import Qianduan from '@/components/qianduan.vue'
import NotFound from '@/pages/NotFound_404'

Vue.use(Router)

const router =  new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
        path: '/st-html',
        component: StudyPage,
        redirect: '/st-html/qianduan/type0',
        children: [
            {
                path: 'qianduan/type:type',
                component: Qianduan
            },
           {
                path: 'uikuangjia/type:type',
                component: Qianduan
            },  
            {
                path: 'css/type:type',
                component: Qianduan
            }, 
            {
                path: 'js/type:type',
                component: Qianduan
            }, 
            {
                path: 'qianduankuangjia/type:type',
                component: Qianduan
            },
        ]
    }, 
    {
        path: '/st-node',
        component: StudyPage,
        redirect: '/st-node/nodejs/type10',
        children: [
            {
                path: 'nodejs/type:type',
                component: Qianduan
            },
           {
                path: 'mongodb/type:type',
                component: Qianduan
            },  
            
        ]
    }, 
    {
        path: '/st-qita',
        component: StudyPage,
        redirect: '/st-qita/xiangmu/type41',
        children: [
            {
                path: 'xiangmu/type:type',
                component: Qianduan
            },
           {
                path: 'mongodb/type:type',
                component: Qianduan
            },  
            
        ]
    }, 
    {
    	path: '/st-dashuju',
    	component: StudyPage,
    	redirect: 'st-dashuju/dashuju/type20',
    	children: [
            {
                path: 'dashuju/type:type',
                component: Qianduan
            }	
            
    	]
    },
    {
    	path: '/editPage',
    	component: EditPage
    },
    {
        path: '/timeToEnd',
        component: TimeDownEnd
    },
    {
        path: '/notFound_404',
        component: NotFound
    },
    {
        path: '*',
        component: NotFound
    }
  ]
})

// router.beforeEach((to, from, next) => {
//  new Promise((resolve, reject) => {
//  // ...other codes
//  }).then(res => {
//  if (!to.matched.length) {
//  window.location = '/notFound_404'
//  return
//  } 
//  if (res) {
//  next(res)
//  } else {
//  next()
//  }
//  }).catch(err => {
//  new Error(err)
//  next(false)
//  })

export default router