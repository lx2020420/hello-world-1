import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
const Home = () => import('../views/home/Home.vue')
const Sort = () => import('../views/sort/Sort.vue')
const Cart = () => import('../views/cart/Cart.vue')
const My = () => import('../views/my/My.vue')
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(VueRouter)

  const routes = [
  { 
	path: '/', 
	redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
	component: Sort
  },
  {
    path: '/cart',
    name: 'Cart',
	component: Cart
  },
  {
    path: '/my',
    name: 'My',
	component: My
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
	component: Detail
=======

const Home = () => import('../views/Home')
const Category = () => import('../views/Category')
const Cart = () => import('../views/Cart')
const Prefile = () => import('../views/Prefile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/prefile',
    component: Prefile
>>>>>>> cfc6826cdcf0e4d8b48ad84a89b5bbbfc10bef2e
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
