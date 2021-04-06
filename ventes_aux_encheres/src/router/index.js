import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '../views/Account.vue'
import Login from '../views/Login.vue'
import ProductsCRUD from '../views/ProductsCRUD.vue'
import UsersCRUD from '../views/UsersCRUD.vue'
import UpdateUser from '../views/UpdateUser.vue'
import AddUser from '../views/AddUser.vue'
import UpdateProduct from '../views/UpdateProduct.vue'
import AddProduct from '../views/AddProduct.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/account',
    name: 'Account',
    component: Account,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next({
          name:"Account"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/productsCRUD',
    name: 'ProductsCRUD',
    component: ProductsCRUD,
    // beforeEnter(to, from, next) {
    //   if (!localStorage.getItem('token')) {
    //     next({
    //       name:"Login"
    //     })
    //   }
    //   else {
    //     next();
    //   }
    // }
  },
  {
    path: '/usersCRUD',
    name: 'UsersCRUD',
    component: UsersCRUD,  
  },
  {
    path: '/updateUser',
    name: 'UpdateUser',
    component: UpdateUser,
  },
  {
    path: '/addUser',
    name: 'AddUser',
    component: AddUser,
  },
  {
    path: '/updateProduct',
    name: 'UpdateProduct',
    component: UpdateProduct,
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct,
  },
]

const router = new VueRouter({
  routes
})

export default router
