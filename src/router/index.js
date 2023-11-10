import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
// import MoreView from '../components/MoreView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project/:id', // 새 창에서 프로젝트 디테일을 보여주는 경로
    name: 'project-detail',
    component: DetailView,
    props: true, // props를 사용하여 프로젝트 데이터를 전달
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return { top: 0 }
  },
})


export default router
