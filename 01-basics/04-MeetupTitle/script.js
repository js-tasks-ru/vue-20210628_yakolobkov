const API_URL = 'https://course-vue.javascript.ru/api';

import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      meetup: {},
      meetupId: 1,
    };
  },
  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            return this.meetup = data;
          });
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    },
  },
  watch: {
    meetupId: {
      deep: true,
      handler() {
        this.fetchMeetupById(this.meetupId);
      },
    },
  },
  template: `<div>
    <label><input v-model="meetupId" type="radio" value="1" /> 1</label>
    <label><input v-model="meetupId" type="radio" value="2" /> 2</label>
    <label><input v-model="meetupId" type="radio" value="3" /> 3</label>
    <label><input v-model="meetupId" type="radio" value="4" /> 4</label>
    <label><input v-model="meetupId" type="radio" value="5" /> 5</label>

    <hr />

    <h3>{{ meetup.title }}</h3>
  </div>`,
});

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
