import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Manager from '../views/Manager.vue'
import Controller from '../views/Controller.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
  path: '/',
  name: 'App',
  component: () => import('../views/App.vue'),
  children: [{
    path: 'try',
    name: 'tryfile',
    component: () => import('../components/tryfile.vue')
  }, {
    path: 'login',
    name: 'login',
    component: () => import('../components/login.vue'),
    beforeEnter: (to, from, next) => {
      var token = window.localStorage.getItem('user_identity')
      if (!token) {
        next()
      } else if (token == 1) {
        next("/Manager/man_leader")
      } else if ((token == 0)) {
        next("/Controller/con_leader")
      } else if (token == 2) {
        next("/User/user_leader")
      }
    }
  }, {
    path: 'new_login',
    name: 'new_login',
    component: () => import('../components/new_login.vue'),
    beforeEnter: (to, from, next) => {
      var token = window.localStorage.getItem('user_identity')
      if (!token) {
        next()
      } else if (token == 1) {
        next("/Manager/man_leader")
      } else if ((token == 0)) {
        next("/Controller/con_leader")
      } else if (token == 2) {
        next("/User/user_leader")
      }
    }
  }, {
    path: 'User',
    name: 'User',
    component: User,
    beforeEnter: (to, from, next) => {
      var token = window.localStorage.getItem('user_identity')
      if (!token) {
        next("/login")
      } else if (token == 1) {
        next("/Manager/man_leader")
      } else if ((token == 0)) {
        next("/Controller/con_leader")
      } else if (token == 2) {
        next()
      }
    },
    children: [{
        path: 'user_leader',
        name: 'user_leader',
        component: () => import('../components/leader2.vue')
      },
      {
        path: 'user_news',
        name: 'user_news',
        component: () => import('../components/news.vue')
      },
      {
        path: 'user_inform',
        name: 'user_inform',
        component: () => import('../components/informs.vue')
      },
      {
        path: 'user_discipline_competition',
        name: 'user_discipline_competition',
        component: () => import('../components/discipline_competition.vue')
      },
      {
        path: 'user_com',
        name: 'user_com',
        component: () => import('../components/stu/user_com.vue'),
        children: [{
          path: 'user_com1',
          name: 'user_com1',
          component: () => import('../components/stu/user_com1.vue'),
        }, {
          path: 'user_com2',
          name: 'user_com2',
          component: () => import('../components/stu/user_com2.vue'),
        }]
      },
      {
        path: 'user_award',
        name: 'user_award',
        component: () => import('../components/stu/user_award.vue'),
      },
      {
        path: 'user_award_nopass',
        name: 'user_award_nopass',
        component: () => import('../components/stu/user_award_nopass.vue'),
      },
      {
        path: 'user_award_detail',
        name: 'user_award_detail',
        component: () => import('../components/award_detail.vue'),
      },
      {
        path: 'user_thesis',
        name: 'user_thesis',
        component: () => import('../components/stu/user_thesis.vue'),
      }, {
        path: 'user_patent',
        name: 'user_patent',
        component: () => import('../components/stu/user_patent.vue'),
      },
      {
        path: 'user_basemsg',
        name: 'user_basemsg',
        component: () => import('../components/stu/user_basemsg.vue'),
      }
    ]
  }, {
    path: 'Manager',
    name: 'Manager',
    component: Manager,
    beforeEnter: (to, from, next) => {
      var token = window.localStorage.getItem('user_identity')
      if (!token) {
        next("/login")
      } else if (token == 1) {
        next()
      } else if ((token == 0)) {
        next("/Controller/con_leader")
      } else if (token == 2) {
        next("/User/user_leader")
      }
    },
    children: [{
        path: 'man_leader',
        name: 'man_leader',
        component: () => import('../components/leader2.vue')
      },
      {
        path: 'man_news',
        name: 'man_news',
        component: () => import('../components/news.vue')
      },
      {
        path: 'man_connews',
        name: 'man_connews',
        component: () => import('../components/manger/man_new.vue')
      },
      {
        path: 'man_inform',
        name: 'man_inform',
        component: () => import('../components/informs.vue')
      },
      {
        path: 'man_coninform',
        name: 'man_coninform',
        component: () => import('../components/manger/man_inform.vue')
      },
      {
        path: 'man_discipline_competition',
        name: 'man_discipline_competition',
        component: () => import('../components/discipline_competition.vue')
      },
      {
        path: 'man_concom',
        name: 'man_concom',
        component: () => import('../components/manger/man_com.vue')
      },
      {
        path: 'man_award',
        name: 'man_award',
        component: () => import('../components/manger/man_award.vue'),
      },
      {
        path: 'man_award_nopass',
        name: 'man_award_nopass',
        component: () => import('../components/manger/man_award_nopass.vue'),
      },
      {
        path: 'man_award_detail',
        name: 'man_award_detail',
        component: () => import('../components/award_detail.vue'),
      },
      {
        path: 'man_thesis',
        name: 'man_thesis',
        component: () => import('../components/manger/man_thesis.vue'),
      }, {
        path: 'man_patent',
        name: 'man_patent',
        component: () => import('../components/manger/man_patent.vue'),
      },
      {
        path: 'man_basemsg',
        name: 'man_basemsg',
        component: () => import('../components/manger/man_basemsg.vue'),
      }
    ]
  }, {
    path: 'Controller',
    name: 'Controller',
    component: Controller,
    beforeEnter: (to, from, next) => {
      var token = window.localStorage.getItem('user_identity')
      if (!token) {
        next("/login")
      } else if (token == 1) {
        next("/Manager/man_leader")
      } else if ((token == 0)) {
        next()
      } else if (token == 2) {
        next("/User/user_leader")
      }
    },
    children: [{
        path: 'con_leader',
        name: 'con_leader',
        component: () => import('../components/leader2.vue')
      },
      {
        path: 'con_news',
        name: 'con_news',
        component: () => import('../components/news.vue')
      },
      {
        path: 'con_connews',
        name: 'con_connews',
        component: () => import('../components/control/con_new.vue')
      },
      {
        path: 'con_connews1',
        name: 'con_connews1',
        component: () => import('../components/control/con_new2.vue')
      },
      {
        path: 'con_inform',
        name: 'inform',
        component: () => import('../components/informs.vue')
      },
      {
        path: 'con_coninfrom',
        name: 'con_coninfrom',
        component: () => import('../components/control/con_inform.vue')
      },
      {
        path: 'con_coninfrom1',
        name: 'con_coninfrom1',
        component: () => import('../components/control/con_inform1.vue')
      },
      {
        path: 'con_discipline_competition',
        name: 'con_discipline_competition',
        component: () => import('../components/discipline_competition.vue')
      },
      {
        path: 'con_concom',
        name: 'con_concom',
        component: () => import('../components/control/con_com.vue')
      },
      {
        path: 'con_award',
        name: 'con_award',
        component: () => import('../components/control/con_award.vue'),
      },
      {
        path: 'con_awardAll',
        name: 'con_awardAll',
        component: () => import('../components/control/con_awardAll.vue'),
      },
      {
        path: 'con_awardCate',
        name: 'con_awardCate',
        component: () => import('../components/control/con_awardCate.vue'),
      },
      {
        path: 'con_awardLevel',
        name: 'con_awardLevel',
        component: () => import('../components/control/con_awardLevel.vue'),
      },
      {
        path: 'con_awardAward',
        name: 'con_awardAward',
        component: () => import('../components/control/con_awardAward.vue'),
      },
      {
        path: 'con_award_nopass',
        name: 'con_award_nopass',
        component: () => import('../components/control/con_award_nopass.vue'),
      },
      {
        path: 'con_award_detail',
        name: 'con_award_detail',
        component: () => import('../components/award_detail.vue'),
      },
      {
        path: 'con_thesis',
        name: 'con_thesis',
        component: () => import('../components/control/con_thesis.vue'),
      }, {
        path: 'con_patent',
        name: 'con_patent',
        component: () => import('../components/control/con_patent.vue'),
      },
      {
        path: 'con_basemsg',
        name: 'con_basemsg',
        component: () => import('../components/control/con_basemsg.vue'),
      }
    ]
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
