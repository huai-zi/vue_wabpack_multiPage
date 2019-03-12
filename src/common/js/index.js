import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
    'routes': [{
        'path': '/333',
        'name': 'HelloWorld',
        'component': HelloWorld
    }]
});
