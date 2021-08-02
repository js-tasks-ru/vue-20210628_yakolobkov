// From https://jsonplaceholder.typicode.com/comments
// const emails = [
//   'Eliseo@gardner.biz',
//   'Jayne_Kuhic@sydney.com',
//   'Nikita@garfield.biz',
//   'Lew@alysha.tv',
//   'Hayden@althea.biz',
//   'Presley.Mueller@myrl.com',
//   'Dallas@ole.me',
//   'Mallory_Kunze@marie.org',
//   'Meghan_Littel@rene.us',
//   'Carmen_Keeling@caroline.name',
//   'Veronica_Goodwin@timmothy.net',
//   'Oswald.Vandervort@leanne.org',
//   'Kariane@jadyn.tv',
//   'Nathan@solon.io',
//   'Maynard.Hodkiewicz@roberta.com',
//   'Christine@ayana.info',
//   'Preston_Hudson@blaise.tv',
//   'Vincenza_Klocko@albertha.name',
//   'Madelynn.Gorczany@darion.biz',
//   'Mariana_Orn@preston.org',
//   'Noemie@marques.me',
//   'Khalil@emile.co.uk',
//   'Sophia@arianna.co.uk',
//   'Jeffery@juwan.us',
//   'Isaias_Kuhic@jarrett.net',
// ];

// Требуется создать Vue приложение
import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      emails: [
        {email: 'Eliseo@gardner.biz', marked: false},
        {email: 'Jayne_Kuhic@sydney.com', marked: false},
        {email: 'Nikita@garfield.biz', marked: false},
        {email: 'Lew@alysha.tv', marked: true},
        {email: 'Hayden@althea.biz', marked: false},
        {email: 'Presley.Mueller@myrl.com', marked: false},
        {email: 'Dallas@ole.me', marked: false},
        {email: 'Mallory_Kunze@marie.org', marked: false},
        {email: 'Meghan_Littel@rene.us', marked: false},
        {email: 'Carmen_Keeling@caroline.name', marked: false},
        {email: 'Veronica_Goodwin@timmothy.net', marked: false},
        {email: 'Oswald.Vandervort@leanne.org', marked: false},
        {email: 'Kariane@jadyn.tv', marked: false},
        {email: 'Nathan@solon.io', marked: false},
        {email: 'Maynard.Hodkiewicz@roberta.com', marked: false},
        {email: 'Christine@ayana.info', marked: false},
        {email: 'Preston_Hudson@blaise.tv', marked: false},
        {email: 'Vincenza_Klocko@albertha.name', marked: false},
        {email: 'Madelynn.Gorczany@darion.biz', marked: false},
        {email: 'Mariana_Orn@preston.org', marked: false},
        {email: 'Noemie@marques.me', marked: false},
        {email: 'Khalil@emile.co.uk', marked: false},
        {email: 'Sophia@arianna.co.uk', marked: false},
        {email: 'Jeffery@juwan.us', marked: false},
        {email: 'Isaias_Kuhic@jarrett.net', marked: false}
      ],
      searchValue: '',
    };
  },
  computed: {
    SearchValue() {
      return this.searchValue;
    },
  },
  methods: {
    findEmails() {
      this.emails.forEach((item) => {
        if (this.searchValue !== '') {
          item.email.includes(`${this.SearchValue}`) ? item.marked = true : item.marked = false;
        } else {
          item.marked = false;
        }
      });
      return this.emails;
    },
  },
  watch: {
    searchValue: {
      handler() {
        this.findEmails();
      }
    },
  },
  template: `<div class="container">
    <div class="form-group">
      <input v-model="searchValue" type="search" />
    </div>
    <ul v-for="email in emails">
      <li :class="{ marked: email.marked }">{{ email.email }}</li>
    </ul>
    </div>`,
});

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
