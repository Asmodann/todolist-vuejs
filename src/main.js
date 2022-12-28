import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './assets/main.css';

import { faTrashCan, faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons';
library.add(faTrashCan, faSquareCheck, faSquare);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
;
