import Vue from 'vue';
import Router from 'vue-router';

import FormAuth from '@/components/FormAuth';
import FormRegister from '@/components/FormRegister';
import Tasks from '@/components/Tasks';
import store from '@/store';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Default',
    //   component: Tasks,
    //   beforeEnter(toR, fromR, next) {
    //     if (store.getters.authorized) {
    //       next();
    //     } else {
    //       next({ path: '/login' });
    //     }
    //   },
    // },

    {
      path: '/login',
      name: 'FormAuth',
      component: FormAuth,
      beforeEnter(toR, fromR, next) {
        if (store.getters.authorized) {
          next({ path: '/' });
        } else {
          next();
        }
      },
    },

    {
      path: '/registration',
      name: 'FormRegister',
      component: FormRegister,
      // beforeEnter(toR, fromR, next) {
      //   if (store.getters.authorized) {
      //     next();
      //   } else {
      //     next({ path: '/login' });
      //   }
      // },
    },

    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks,
      beforeEnter(toR, fromR, next) {
        if (store.getters.authorized) {
          next();
        } else {
          next({ path: '/login' });
        }
      },
    },
    {
      path: '*',
      beforeEnter(toR, fromR, next) {
        if (store.getters.authorized) {
          next({ path: '/tasks' });
        } else {
          next({ path: '/login' });
        }
      },
    },
  ],
  mode: 'history',
});
