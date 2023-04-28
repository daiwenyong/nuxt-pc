import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/","home":false,"callback":"/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/","maxAge":604800}},"localStorage":false,"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/api/auth/login","method":"post","propertyName":"token"},"logout":{"url":"/api/auth/logout","method":"post"},"user":{"url":"/api/auth/user","method":"get","propertyName":"user"}},"_name":"local"}))

  // local1
  $auth.registerStrategy('local1', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/login","method":"post","propertyName":"token"},"logout":{"url":"/logout","method":"get"},"user":{"url":"user","method":"get","propertyName":false}},"_name":"local1"}))

  // local2
  $auth.registerStrategy('local2', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/login/mobile","method":"post","propertyName":"token"},"logout":{"url":"/logout","method":"get"},"user":{"url":"user","method":"get","propertyName":false}},"_name":"local2"}))

  // local3
  $auth.registerStrategy('local3', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/pc/wechat_auth","method":"get","propertyName":"token"},"logout":{"url":"/logout","method":"get"},"user":{"url":"user","method":"get","propertyName":false}},"_name":"local3"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
