import Button from './Button.vue';
import Checkbox from './Checkbox.vue';
import CheckboxGroup from './CheckboxGroup.vue';

export default {
  install(Vue) {
    Vue.component('ui-button', Button)
    Vue.component('ui-checkbox', Checkbox)
    Vue.component('ui-checkbox-group', CheckboxGroup)
  }
}