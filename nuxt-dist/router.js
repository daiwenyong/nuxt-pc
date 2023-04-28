import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1698fba7 = () => interopDefault(import('../pages/alipay.vue' /* webpackChunkName: "pages/alipay" */))
const _097113ec = () => interopDefault(import('../pages/AppChat.vue' /* webpackChunkName: "pages/AppChat" */))
const _09d66519 = () => interopDefault(import('../pages/evaluation.vue' /* webpackChunkName: "pages/evaluation" */))
const _76561275 = () => interopDefault(import('../pages/goods_cate.vue' /* webpackChunkName: "pages/goods_cate" */))
const _78ddef78 = () => interopDefault(import('../pages/goods_list.vue' /* webpackChunkName: "pages/goods_list" */))
const _062cbc82 = () => interopDefault(import('../pages/goods_presell.vue' /* webpackChunkName: "pages/goods_presell" */))
const _62289701 = () => interopDefault(import('../pages/goods_presell_detail.vue' /* webpackChunkName: "pages/goods_presell_detail" */))
const _224a5cce = () => interopDefault(import('../pages/goods_search.vue' /* webpackChunkName: "pages/goods_search" */))
const _8038b90e = () => interopDefault(import('../pages/goods_seckill.vue' /* webpackChunkName: "pages/goods_seckill" */))
const _e693dff2 = () => interopDefault(import('../pages/goods_seckill_detail.vue' /* webpackChunkName: "pages/goods_seckill_detail" */))
const _c3f4b5c8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _acdc3574 = () => interopDefault(import('../pages/logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _a5fb4428 = () => interopDefault(import('../pages/mobile_login/index.vue' /* webpackChunkName: "pages/mobile_login/index" */))
const _c182a2fc = () => interopDefault(import('../pages/order_confirm.vue' /* webpackChunkName: "pages/order_confirm" */))
const _5b4977ff = () => interopDefault(import('../pages/order_detail.vue' /* webpackChunkName: "pages/order_detail" */))
const _7014530e = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _277d29d5 = () => interopDefault(import('../pages/refund.vue' /* webpackChunkName: "pages/refund" */))
const _1d9cfeec = () => interopDefault(import('../pages/refund_goods.vue' /* webpackChunkName: "pages/refund_goods" */))
const _14651176 = () => interopDefault(import('../pages/shoppingCart.vue' /* webpackChunkName: "pages/shoppingCart" */))
const _9337fc30 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _46117a6b = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _f44cfe00 = () => interopDefault(import('../pages/user/address_list.vue' /* webpackChunkName: "pages/user/address_list" */))
const _4ebaa196 = () => interopDefault(import('../pages/user/balance.vue' /* webpackChunkName: "pages/user/balance" */))
const _64f3ca83 = () => interopDefault(import('../pages/user/collect.vue' /* webpackChunkName: "pages/user/collect" */))
const _2a1fd2d5 = () => interopDefault(import('../pages/user/messageCenter.vue' /* webpackChunkName: "pages/user/messageCenter" */))
const _1d0fe6e9 = () => interopDefault(import('../pages/user/myCoupon.vue' /* webpackChunkName: "pages/user/myCoupon" */))
const _49191125 = () => interopDefault(import('../pages/user/orderList.vue' /* webpackChunkName: "pages/user/orderList" */))
const _51a54e88 = () => interopDefault(import('../pages/user/userCoupon.vue' /* webpackChunkName: "pages/user/userCoupon" */))
const _53b42e8c = () => interopDefault(import('../pages/wxPay.vue' /* webpackChunkName: "pages/wxPay" */))
const _57bd9bb6 = () => interopDefault(import('../pages/goods_detail/_id/index.vue' /* webpackChunkName: "pages/goods_detail/_id/index" */))
const _5743fbf6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alipay",
    component: _1698fba7,
    name: "alipay"
  }, {
    path: "/AppChat",
    component: _097113ec,
    name: "AppChat"
  }, {
    path: "/evaluation",
    component: _09d66519,
    name: "evaluation"
  }, {
    path: "/goods_cate",
    component: _76561275,
    name: "goods_cate"
  }, {
    path: "/goods_list",
    component: _78ddef78,
    name: "goods_list"
  }, {
    path: "/goods_presell",
    component: _062cbc82,
    name: "goods_presell"
  }, {
    path: "/goods_presell_detail",
    component: _62289701,
    name: "goods_presell_detail"
  }, {
    path: "/goods_search",
    component: _224a5cce,
    name: "goods_search"
  }, {
    path: "/goods_seckill",
    component: _8038b90e,
    name: "goods_seckill"
  }, {
    path: "/goods_seckill_detail",
    component: _e693dff2,
    name: "goods_seckill_detail"
  }, {
    path: "/login",
    component: _c3f4b5c8,
    name: "login"
  }, {
    path: "/logistics",
    component: _acdc3574,
    name: "logistics"
  }, {
    path: "/mobile_login",
    component: _a5fb4428,
    name: "mobile_login"
  }, {
    path: "/order_confirm",
    component: _c182a2fc,
    name: "order_confirm"
  }, {
    path: "/order_detail",
    component: _5b4977ff,
    name: "order_detail"
  }, {
    path: "/payment",
    component: _7014530e,
    name: "payment"
  }, {
    path: "/refund",
    component: _277d29d5,
    name: "refund"
  }, {
    path: "/refund_goods",
    component: _1d9cfeec,
    name: "refund_goods"
  }, {
    path: "/shoppingCart",
    component: _14651176,
    name: "shoppingCart"
  }, {
    path: "/user",
    component: _9337fc30,
    children: [{
      path: "",
      component: _46117a6b,
      name: "user"
    }, {
      path: "address_list",
      component: _f44cfe00,
      name: "user-address_list"
    }, {
      path: "balance",
      component: _4ebaa196,
      name: "user-balance"
    }, {
      path: "collect",
      component: _64f3ca83,
      name: "user-collect"
    }, {
      path: "messageCenter",
      component: _2a1fd2d5,
      name: "user-messageCenter"
    }, {
      path: "myCoupon",
      component: _1d0fe6e9,
      name: "user-myCoupon"
    }, {
      path: "orderList",
      component: _49191125,
      name: "user-orderList"
    }, {
      path: "userCoupon",
      component: _51a54e88,
      name: "user-userCoupon"
    }]
  }, {
    path: "/wxPay",
    component: _53b42e8c,
    name: "wxPay"
  }, {
    path: "/goods_detail/:id",
    component: _57bd9bb6,
    name: "goods_detail-id"
  }, {
    path: "/",
    component: _5743fbf6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
