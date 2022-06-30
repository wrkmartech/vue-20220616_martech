import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },

  computed: {
    meetupISODate() {
      return new Date(this.date).toISOString().split('T')[0];
    },
    meetupLocalDate() {
      return new Date(this.date).toLocaleDateString(navigator.language, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    },
  },

  template: `
    <ul class="meetup-info">
    <li>
      <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg"/>
      {{ organizer }}
    </li>
    <li>
      <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg"/>
      {{ place }}
    </li>
    <li>
      <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg"/>
      <time :datetime="meetupISODate">{{ meetupLocalDate }}</time>
    </li>
    </ul>`,
});
