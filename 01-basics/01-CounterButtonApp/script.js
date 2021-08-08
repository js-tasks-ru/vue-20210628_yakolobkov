import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      a: 0,
    };
  },
  methods: {
    plus() {
      this.a += 1;
      return this.a;
    },
  },
  template: `<div> <button type="button" @click="plus">{{ a }}</button></div>`,
});

// Создайте Vue приложение

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
