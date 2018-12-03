<template lang="pug">
  div(id='app')
    HeaderSection
    main
      h2 {{msg}}
    FooterSection

</template>

<script>
  import HeaderSection from './components/headerSection/HeaderSection.vue'
  import FooterSection from './components/footerSection/FooterSection.vue'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Main'
      }
    },
    components: {
      HeaderSection,
      FooterSection,
    },
  }
</script>
