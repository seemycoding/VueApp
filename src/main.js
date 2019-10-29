import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from './router'
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(CalendarPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
