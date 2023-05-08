import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _392c7df6 = () => interopDefault(import('../pages/alipay.vue' /* webpackChunkName: "pages/alipay" */))
const _528e0b64 = () => interopDefault(import('../pages/AppChat.vue' /* webpackChunkName: "pages/AppChat" */))
const _5226f3cc = () => interopDefault(import('../pages/business_register/index.vue' /* webpackChunkName: "pages/business_register/index" */))
const _682d6912 = () => interopDefault(import('../pages/evaluation.vue' /* webpackChunkName: "pages/evaluation" */))
const _3868f8d3 = () => interopDefault(import('../pages/goods_cate.vue' /* webpackChunkName: "pages/goods_cate" */))
const _f4b822bc = () => interopDefault(import('../pages/goods_list.vue' /* webpackChunkName: "pages/goods_list" */))
const _db6092be = () => interopDefault(import('../pages/goods_presell.vue' /* webpackChunkName: "pages/goods_presell" */))
const _5a4d9fdf = () => interopDefault(import('../pages/goods_presell_detail.vue' /* webpackChunkName: "pages/goods_presell_detail" */))
const _a985b8a8 = () => interopDefault(import('../pages/goods_search.vue' /* webpackChunkName: "pages/goods_search" */))
const _5549b85b = () => interopDefault(import('../pages/goods_seckill.vue' /* webpackChunkName: "pages/goods_seckill" */))
const _f649ce36 = () => interopDefault(import('../pages/goods_seckill_detail.vue' /* webpackChunkName: "pages/goods_seckill_detail" */))
const _01108804 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4479bb28 = () => interopDefault(import('../pages/logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _29f0064a = () => interopDefault(import('../pages/mobile_login/index.vue' /* webpackChunkName: "pages/mobile_login/index" */))
const _34a4c364 = () => interopDefault(import('../pages/order_confirm.vue' /* webpackChunkName: "pages/order_confirm" */))
const _37878246 = () => interopDefault(import('../pages/order_detail.vue' /* webpackChunkName: "pages/order_detail" */))
const _d584864a = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _1764219a = () => interopDefault(import('../pages/refund.vue' /* webpackChunkName: "pages/refund" */))
const _b2e0746c = () => interopDefault(import('../pages/refund_goods.vue' /* webpackChunkName: "pages/refund_goods" */))
const _7ec03e23 = () => interopDefault(import('../pages/shoppingCart.vue' /* webpackChunkName: "pages/shoppingCart" */))
const _be7af274 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _082460c9 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _1e8654e2 = () => interopDefault(import('../pages/user/address_list.vue' /* webpackChunkName: "pages/user/address_list" */))
const _61957613 = () => interopDefault(import('../pages/user/balance.vue' /* webpackChunkName: "pages/user/balance" */))
const _2432dd3e = () => interopDefault(import('../pages/user/collect.vue' /* webpackChunkName: "pages/user/collect" */))
const _b1e5099a = () => interopDefault(import('../pages/user/messageCenter.vue' /* webpackChunkName: "pages/user/messageCenter" */))
const _9b14086a = () => interopDefault(import('../pages/user/myCoupon.vue' /* webpackChunkName: "pages/user/myCoupon" */))
const _60759883 = () => interopDefault(import('../pages/user/orderList.vue' /* webpackChunkName: "pages/user/orderList" */))
const _25d9b2ea = () => interopDefault(import('../pages/user/userCoupon.vue' /* webpackChunkName: "pages/user/userCoupon" */))
const _3797ff9c = () => interopDefault(import('../pages/wxPay.vue' /* webpackChunkName: "pages/wxPay" */))
const _57277b83 = () => interopDefault(import('../pages/goods_detail/_id/index.vue' /* webpackChunkName: "pages/goods_detail/_id/index" */))
const _35d018e7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _392c7df6,
    name: "alipay"
  }, {
    path: "/AppChat",
    component: _528e0b64,
    name: "AppChat"
  }, {
    path: "/business_register",
    component: _5226f3cc,
    name: "business_register"
  }, {
    path: "/evaluation",
    component: _682d6912,
    name: "evaluation"
  }, {
    path: "/goods_cate",
    component: _3868f8d3,
    name: "goods_cate"
  }, {
    path: "/goods_list",
    component: _f4b822bc,
    name: "goods_list"
  }, {
    path: "/goods_presell",
    component: _db6092be,
    name: "goods_presell"
  }, {
    path: "/goods_presell_detail",
    component: _5a4d9fdf,
    name: "goods_presell_detail"
  }, {
    path: "/goods_search",
    component: _a985b8a8,
    name: "goods_search"
  }, {
    path: "/goods_seckill",
    component: _5549b85b,
    name: "goods_seckill"
  }, {
    path: "/goods_seckill_detail",
    component: _f649ce36,
    name: "goods_seckill_detail"
  }, {
    path: "/login",
    component: _01108804,
    name: "login"
  }, {
    path: "/logistics",
    component: _4479bb28,
    name: "logistics"
  }, {
    path: "/mobile_login",
    component: _29f0064a,
    name: "mobile_login"
  }, {
    path: "/order_confirm",
    component: _34a4c364,
    name: "order_confirm"
  }, {
    path: "/order_detail",
    component: _37878246,
    name: "order_detail"
  }, {
    path: "/payment",
    component: _d584864a,
    name: "payment"
  }, {
    path: "/refund",
    component: _1764219a,
    name: "refund"
  }, {
    path: "/refund_goods",
    component: _b2e0746c,
    name: "refund_goods"
  }, {
    path: "/shoppingCart",
    component: _7ec03e23,
    name: "shoppingCart"
  }, {
    path: "/user",
    component: _be7af274,
    children: [{
      path: "",
      component: _082460c9,
      name: "user"
    }, {
      path: "address_list",
      component: _1e8654e2,
      name: "user-address_list"
    }, {
      path: "balance",
      component: _61957613,
      name: "user-balance"
    }, {
      path: "collect",
      component: _2432dd3e,
      name: "user-collect"
    }, {
      path: "messageCenter",
      component: _b1e5099a,
      name: "user-messageCenter"
    }, {
      path: "myCoupon",
      component: _9b14086a,
      name: "user-myCoupon"
    }, {
      path: "orderList",
      component: _60759883,
      name: "user-orderList"
    }, {
      path: "userCoupon",
      component: _25d9b2ea,
      name: "user-userCoupon"
    }]
  }, {
    path: "/wxPay",
    component: _3797ff9c,
    name: "wxPay"
  }, {
    path: "/goods_detail/:id",
    component: _57277b83,
    name: "goods_detail-id"
  }, {
    path: "/",
    component: _35d018e7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
