import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import CreatePost from '@/components/CreatePost'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/post',
      name: 'CreatePost',
      component: CreatePost,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = firebase.auth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAutenticated = auth.currentUser;
  if (requiresAuth && !isAutenticated) {
    next('/login');
  } else if (!requiresAuth && isAutenticated) {
    next('/home');
  } else {
    next();
  }
});

export default router ;

