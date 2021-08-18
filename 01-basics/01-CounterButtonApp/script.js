import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      result: 0,
    };
  },
  methods: {
    plus() {
      this.result += 1;
      return this.result;
    },
  },
  template: `<div> <button type="button" @click="plus">{{ result }}</button></div>`,
});

// Создайте Vue приложение

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
