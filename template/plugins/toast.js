import DankalToast from '../components/dankal-toast';

export default {
  // eslint-disable-next-line
  install(Vue, pluginOptions = {}) {
    const Instance = Vue.extend(DankalToast);

    let toast = null;

    function $toast() {
      if (!toast) {
        toast = new Instance();

        toast.$mount();

        document.querySelector('body').appendChild(toast.$el);
      }

      // eslint-disable-next-line
      toast.tip(...arguments);
    }

    // eslint-disable-next-line
    Vue.toast = Vue.prototype.$toast = $toast;
  },
};
