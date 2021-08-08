// import { sum } from 'lodash-es';
import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      a: 1,
      b: 2,
      operand: 'sum',
      с: 3,
    };
  },
  computed: {
  },
  methods: {
    mathOperation() {
      this.showOperand();
      console.log(this.operand);
      if (this.operand === 'sum') {
        return (this.c = this.a + this.b);
      } else if (this.operand === 'subtract') {
        return (this.c = this.a - this.b);
      } else if (this.operand === 'multiply') {
        return (this.c = this.a * this.b);
      } else {
        return (this.c = this.a / this.b);
      }
    },
  },
  template: `<div class="row">
    <div class="col">
      <input v-model="a" type="number" />
    </div>

    <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
      <label for="sum"><input v-model="operand" type="radio" id="sum" :value="sum" /> ➕</label>
      <label for="subtract"><input v-model="operand" type="radio" id="subtract" :value="subtract" /> ➖</label>
      <label for="multiply"><input v-model="operand" type="radio" id="multiply" :value="multiply" /> ✖</label>
      <label for="divide"><input v-model="operand" type="radio" id="divide" :value="divide" /> ➗</label>
    </div>

    <div class="col">
      <input v-model="b" type="number" />
    </div>

    <div class="col">=</div>

    <output class="col">{{ mathOperation() }}</output>
  </div>`,
});

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
