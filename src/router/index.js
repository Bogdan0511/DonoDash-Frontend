import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/terms-and-conditions',
      name: 'terms&conditions',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue'),
      children: [
          {
            path: '/main/my-donations',
            name: 'my-donations',
            component: () => import('../views/DonationsView.vue')
          },
          {
            path: '/main/analytics',
            name: 'analytics',
            component: () => import('../views/AnalyticsView.vue')
          },
          {
            path: '/main/top-contributors',
            name: 'top-contributors',
            component: () => import('../views/ContributorsView.vue')
          },
          {
            path: '/main/edit-account',
            name: 'edit-account',
            component: () => import('../views/EditView.vue')
          },
          {
            path: '/main/report-a-problem',
            name: 'report-a-problem',
            component: () => import('../views/ReportView.vue')
          }
      ],
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    axios.get('http://localhost:8080/donodash/auth/validate-session', { withCredentials: true })
      .then(() => {
        next();
      })
      .catch(() => {
        next('/login');
      });
  } else {
    next();
  }
});

export default router
