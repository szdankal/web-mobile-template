import '../jslibs/rem';
import Vue from 'vue';
import Cube from 'cube-ui';

import Bitmap from './bitmap';
import Toast from './toast';

require('cube-ui/lib/cube.min.css');
require('~/filiters/vue-filiter');

Vue.use(Cube);
Vue.use(Bitmap);
Vue.use(Toast);
