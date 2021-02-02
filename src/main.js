import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//所有的组件对象都公用了 Vue的原型对象
//事件总线  全局事件总线   创建一个vm对象，作为全局事件总线(对象) 保存到Vue的原型对象上，所有的组件都能直接访问
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
