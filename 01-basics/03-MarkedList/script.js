import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      markedEmails: null,
      searchValue: '',
    };
  },
  computed: {
    loadEmails() {
      return emails.map(function (email) {
        let element = { email, 'marked': false };
        return element;
      });
    },
    findEmails() {
      return this.markedEmails.map((item) => {
        if (this.searchValue && item.email.toLowerCase().includes(`${this.searchValue}`.toLowerCase())) {
          return item.marked = true;
        } else {
          return item.marked = false;
        }
      });
    }
  },
  beforeMount() {
    this.markedEmails = this.loadEmails;
  },
  watch: {
    searchValue: {
      immediate: true,
      handler() {
        if (this.markedEmails) {
          this.findEmails;
        }
      }
    },
  },
  template: `<div class="container">
    <div class="form-group">
      <input v-model="searchValue" type="search" />
    </div>
    <ul v-if="markedEmails" v-for="email in markedEmails">
      <li :class="{ marked: email.marked }">{{ email.email }}</li>
    </ul>
    </div>`,
});

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
