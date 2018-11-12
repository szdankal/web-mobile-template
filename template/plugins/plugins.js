/* eslint-disable no-new,no-unused-vars */
import '../jslibs/rem'
import Vue from 'vue'
import Cube from 'cube-ui'
import VConsole from 'vconsole'

require('cube-ui/lib/cube.min.css')
require('~/filiters/vue-filiter')


// new VConsole() // 调试窗口
Vue.use(Cube)

Vue.config.errorHandler = (err, vm, info) => {
  console.log(err, 'err')
}


Vue.directive('debounce', {
  inserted(el, binding) {
    let timer;

    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        binding.value();
      }, 300);
    });
  },
});
