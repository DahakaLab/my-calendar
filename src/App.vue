<template lang="pug">
  div(id='app')
    HeaderComponent
    MainComponent
    FooterComponent
</template>

<script>
  import HeaderComponent from './components/headerComponent/headerComponent.vue';
  import MainComponent from './components/mainComponent/mainComponent.vue';
  import FooterComponent from './components/footerSection/footerComponent.vue';

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
    },
  }
</script>
