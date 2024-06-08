import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App);

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { useUserStore } from './stores/userStore';

const vuetify = createVuetify({
  components,
  directives,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      router.push('/login');
      return new Promise(() => {});
    }
    return Promise.reject(error);
  }
);

app.use(createPinia());
app.use(router);
app.use(vuetify);

const userStore = useUserStore();
userStore.restoreState();

app.mount('#app');
