import Vue from 'vue';
import App from './views/App.vue';
import PersonalInfo from './components/PersonalInfo.vue';
import Objective from './components/Objective.vue';
import Education from './components/Education.vue';
import WorkExperience from './components/WorkExperience.vue';

Vue.config.productionTip = false;

Vue.component('PersonalInfo', PersonalInfo);
Vue.component('Objective', Objective);
Vue.component('Education', Education);
Vue.component('WorkExperience', WorkExperience);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
