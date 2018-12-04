<template lang="pug">
  MainSection.main-section
    main.main-section__section
      h2 {{msg}}

</template>

<script>
  export default {
    // name: 'HeaderSection',
    data () {
      return {
        msg: 'Main'
      }
    }
  }
</script>
