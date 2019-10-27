import Vue from 'vue'
import VueRouter from 'vue-router'
import course from '../components/course'
import student from '../components/student'

Vue.use(VueRouter)

const routes = [
  {
    path: '/course',
    name: 'course',
    component: course
  },
  {
    path: '/student',
    name: 'student',
    component:student
   
   
  }
]

const router = new VueRouter({
  routes
})

export default router
