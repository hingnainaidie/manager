import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
      path: 'try',
      name: 'try',
      component: () => import('../components/try.vue')
    },{
      path: 'leader',
      name: 'leader1',
      component: () => import('../components/leader1.vue')
    },
    {
      path: 'news',
      name: 'news',
      component: () => import('../components/news.vue')
    },
    {
      path: 'informs',
      name: 'informs',
      component: () => import('../components/informs.vue')
    },
    {
      path: 'discipline_competition',
      name: 'discipline_competition',
      component: () => import('../components/discipline_competition.vue')
    },
    {
      path: 'Research_training',
      name: 'Research_training',
      component: () => import('../components/Research_training.vue')
    },
    {
      path: 'login',
      name: 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: 'new_login',
      name: 'new_login',
      component: () => import('../components/new_login.vue')
    },
    {
      path: 'user_mng',
      name: 'user_mng',
      component: () => import('../components/stu/user_mng.vue'),
      //路由守卫
      beforeEnter:(to,from,next)=>{
        if(1==0){
          next("/man_mng/man_basemsg")
        }
        next()
      },
      children: [{
        path: 'user_basemsg',
        name: 'user_basemsg',
        component: () => import('../components/stu/user_basemsg.vue'),
      }, {
        path: 'user_com',
        name: 'user_com',
        component: () => import('../components/stu/user_com.vue'),
        children:[{
          path: 'user_com1',
          name: 'user_com1',
          component: () => import('../components/stu/user_com1.vue'),
        },{
          path: 'user_com2',
          name: 'user_com2',
          component: () => import('../components/stu/user_com2.vue'),
        }]
      }, {
        path: 'user_thesis',
        name: 'user_thesis',
        component: () => import('../components/stu/user_thesis.vue')
      }, {
        path: 'user_patent',
        name: 'user_patent',
        component: () => import('../components/stu/user_patent.vue')
      }, {
        path: 'com_con',
        name: 'com_con',
        component: () => import('../components/com_con.vue')
      }]
    },
    {
      path: 'man_mng',
      name: 'man_mng',
      component: () => import('../components/manger/man_mng.vue'),
      children: [{
          path: 'man_basemsg',
          name: 'man_basemsg',
          component: () => import('../components/manger/man_basemsg.vue')
        },
        {
          path: 'man_user',
          name: 'man_user',
          component: () => import('../components/manger/man_user.vue')
        },
        {
          path: 'man_new',
          name: 'man_new',
          component: () => import('../components/manger/man_new.vue')
        },
        {
          path: 'man_inform',
          name: 'man_inform',
          component: () => import('../components/manger/man_inform.vue')
        },
        {
          path: 'man_sign',
          name: 'man_sign',
          component: () => import('../components/manger/man_sign.vue')
        },
        {
          path: 'man_com',
          name: 'man_com',
          component: () => import('../components/manger/man_com.vue')
        },
        {
          path: 'new_detail',
          name: 'new_detail',
          component: () => import('../components/new_detail.vue')
        },
        {
          path: 'edit_new',
          name: 'edit_new',
          component: () => import('../components/edit_new.vue')
        },
        {
          path: 'edit_inform',
          name: 'edit_inform',
          component: () => import('../components/edit_inform.vue')
        },
        {
          path: 'new_change',
          name: 'new_change',
          component: () => import('../components/new_change.vue')
        },
        {
          path: 'inform_change',
          name: 'inform_change',
          component: () => import('../components/inform_change.vue')
        },
        {
          path: 'man_commsg',
          name: 'man_commsg',
          component: () => import('../components/manger/man_commsg.vue'),
          children:[
            {
              path: 'man_commsg1',
              name: 'man_commsg1',
              component: () => import('../components/com_con.vue')
            },
            {
              path: 'man_commsg2',
              name: 'man_commsg2',
              component: () => import('../components/manger/man_commsg2.vue')
            },
            {
              path: 'man_commsg3',
              name: 'man_commsg3',
              component: () => import('../components/manger/man_commsg3.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'con_mng',
      name: 'con_mng',
      component: () => import('../components/control/con_mng.vue'),
      children:[
        {
          path: 'con_basemsg',
          name: 'con_basemsg',
          component: () => import('../components/control/con_basemsg.vue')
        },{
          path: 'con_new',
          name: 'con_new',
          component: () => import('../components/control/con_new.vue')
        },{
          path: 'con_inform',
          name: 'con_basemsg',
          component: () => import('../components/control/con_inform.vue')
        },{
          path: 'con_com',
          name: 'con_com',
          component: () => import('../components/control/con_com.vue')
        },{
          path: 'con_user',
          name: 'con_user',
          component: () => import('../components/control/con_user.vue')
        },
      ]
    },
    {
      path: 'com_con',
      name: 'com_con',
      component: () => import('../components/com_con.vue')
    },
    {
      path: 'new_detail',
      name: 'new_detail',
      component: () => import('../components/new_detail.vue')
    },
    {
      path: 'inform_detail',
      name: 'inform_detail',
      component: () => import('../components/inform_detail.vue')
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
