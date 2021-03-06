import CoreButton from '../core/button/coreButton.vue';

export default {
  name: 'Header',
  data () {
    return {
      info: {
        title: 'Header',
      },
      btnEvent: {
        btnType: 'button',
        main: true,
        text: 'Событие +',
      },
      btnRefresh: {
        btnType: 'button',
        main: false,
        text: 'Обновить'
      }
    }
  },
  components: {
    CoreButton,
  }
}
