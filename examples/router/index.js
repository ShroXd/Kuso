import Vue from 'vue'
import Router from 'vue-router'
import navConfig from '../nav.config.json'

function addComponent (data) {
  data.forEach(route => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () => r(require(`../pages/${route.name}.vue`)))
        return
      }
      route.component = r => require.ensure([], () => r(require(`../docs/${route.name}.md`)))
    }
  })
}

Vue.use(Router)

let routes = []
Object.keys(navConfig).forEach(key => {
  routes = routes.concat(navConfig[key])
})

addComponent(routes)
console.log(routes)

export default new Router({
  routes: routes
})
