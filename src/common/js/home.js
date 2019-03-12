import Vue from 'vue';
import lazy from 'vue-lazyload';
import Home from '../../components/home/index.vue';
import api from '../http/index';
import router from './index';
Vue.use(api);
Vue.use(lazy, {
    'error': '../../common/imgs/error.svg',
    'loading': '../../common/imgs/Loading.png'
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    'el': '#home',
    router,
    'render': h => h(Home)
});
