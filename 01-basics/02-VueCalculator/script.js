import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      a: 1,
      b: 2,
      typeOperation: 'sum',
    };
  },
  computed: {
    mathOperation() {
      if (this.typeOperation === 'sum') {
        return this.a + this.b;
      } else if (this.typeOperation === 'subtract') {
        return this.a - this.b;
      } else if (this.typeOperation === 'multiply') {
        return this.a * this.b;
      } else if (this.typeOperation === 'divide') {
        return this.a / this.b;
      } else {
        return 0;
      }
    },
  },
  template: `<div class="row">
    <div class="col">
      <input v-model.number="a" type="number" />
    </div>

    <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
      <label for="sum"><input v-model="typeOperation" type="radio" id="sum" value="sum" /> ➕</label>
      <label for="subtract"><input v-model="typeOperation" type="radio" id="subtract" value="subtract" /> ➖</label>
      <label for="multiply"><input v-model="typeOperation" type="radio" id="multiply" value="multiply" /> ✖</label>
      <label for="divide"><input v-model="typeOperation" type="radio" id="divide" value="divide" /> ➗</label>
    </div>

    <div class="col">
      <input v-model.number="b" type="number" />
    </div>

    <div class="col">=</div>

    <output class="col">{{ mathOperation }}</output>
  </div>`,
});

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
