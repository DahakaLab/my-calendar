<template lang="pug">
  div(id='app')
    Header
    MainComponent
    FooterComponent
</template>

<script>
  import Header from './components/header/header.vue';
  import MainComponent from './components/mainComponent/mainComponent.vue';
  import FooterComponent from './components/footerSection/footerComponent.vue';

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      Header,
      MainComponent,
      FooterComponent,
    },
  }
</script>
