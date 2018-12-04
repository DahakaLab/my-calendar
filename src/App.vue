<template lang="pug">
  div(id='app')
    HeaderSection
    MainSection
    FooterSection

</template>

<script>
  import HeaderSection from './components/headerSection/HeaderSection.vue';
  import MainSection from './components/mainSection/MainSection.vue';
  import FooterSection from './components/footerSection/FooterSection.vue';

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      HeaderSection,
      MainSection,
      FooterSection,
    },

  }
</script>
