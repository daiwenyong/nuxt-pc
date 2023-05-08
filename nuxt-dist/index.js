import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_cookieuniversalnuxt_7be8bb40 from 'nuxt_plugin_cookieuniversalnuxt_7be8bb40' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_abc31a90 from 'nuxt_plugin_axios_abc31a90' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ../plugins/axios (mode: 'all')
import nuxt_plugin_iconfont_4c52cddd from 'nuxt_plugin_iconfont_4c52cddd' // Source: ../assets/iconfont/iconfont.js (mode: 'client')
import nuxt_plugin_vueswiper_6a7b4f42 from 'nuxt_plugin_vueswiper_6a7b4f42' // Source: ../plugins/vue-swiper.js (mode: 'client')
import nuxt_plugin_utils_1ea7651c from 'nuxt_plugin_utils_1ea7651c' // Source: ../plugins/utils.js (mode: 'client')
import nuxt_plugin_debounce_06d089d8 from 'nuxt_plugin_debounce_06d089d8' // Source: ../plugins/debounce.js (mode: 'client')
import nuxt_plugin_elementui_a6a1b20a from 'nuxt_plugin_elementui_a6a1b20a' // Source: ../plugins/element-ui (mode: 'client')
import nuxt_plugin_vueqr_963d2834 from 'nuxt_plugin_vueqr_963d2834' // Source: ../plugins/vueqr.js (mode: 'client')
import nuxt_plugin_vueclipboard_03d9e0fe from 'nuxt_plugin_vueclipboard_03d9e0fe' // Source: ../plugins/vue-clipboard.js (mode: 'client')
import nuxt_plugin_main_6a83762f from 'nuxt_plugin_main_6a83762f' // Source: ../plugins/main (mode: 'all')
import nuxt_plugin_plugin_63c295f4 from 'nuxt_plugin_plugin_63c295f4' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"CRMEB","meta":[{"charset":"utf-8"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"http-equiv","http-equiv":"X-UA-Compatible","content":"IE=edge"},{"hid":"keywords","name":"keywords","content":"CRMEB 新零售社交电商 社交电商系统 小程序商城系统 公众号商城系统 商城系统源码 免费商城系统 商城系统开发 开源商城系统 CRMEB源码 微商城源码 多店商城系统 小程序直播电商系统 知识付费系统源码 SCRM 客户管理 客户营销系统 多商户商城 B2B2C B2C B2B O2O"},{"hid":"description","name":"description","content":"CRMEB开源会员电商营销系统，依托社交营销应用场景，独创将用户管理系统与社交电商系统创新性深度集成，充分将公域流量转为私域流量，帮助企业快速积累用户并实现精准营销，一次购买永久享受免费升级服务免费提供升级教程。咨询：400-8888-794"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"undefined\u002Fget_script","ssr":false}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_cookieuniversalnuxt_7be8bb40 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_7be8bb40(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_abc31a90 === 'function') {
    await nuxt_plugin_axios_abc31a90(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_iconfont_4c52cddd === 'function') {
    await nuxt_plugin_iconfont_4c52cddd(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueswiper_6a7b4f42 === 'function') {
    await nuxt_plugin_vueswiper_6a7b4f42(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_utils_1ea7651c === 'function') {
    await nuxt_plugin_utils_1ea7651c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_debounce_06d089d8 === 'function') {
    await nuxt_plugin_debounce_06d089d8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_elementui_a6a1b20a === 'function') {
    await nuxt_plugin_elementui_a6a1b20a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueqr_963d2834 === 'function') {
    await nuxt_plugin_vueqr_963d2834(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueclipboard_03d9e0fe === 'function') {
    await nuxt_plugin_vueclipboard_03d9e0fe(app.context, inject)
  }

  if (typeof nuxt_plugin_main_6a83762f === 'function') {
    await nuxt_plugin_main_6a83762f(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_63c295f4 === 'function') {
    await nuxt_plugin_plugin_63c295f4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
