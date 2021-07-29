import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      a: 0,
      hello: 'world',
    };
  },
  computed: {
    plus() {
      return this.a + 1;
    },
  },
  template: `<div> <button type="button" @click="plus">{{ a }}</button></div>`,
});

// Создайте Vue приложение

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
console.log(vm.a);
