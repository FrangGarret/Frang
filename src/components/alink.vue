<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">

.alink{
}

</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
span.alink(:href="to")
  slot
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'alink',
  props:['to'],
  data () {
    return {
      msg: 'this is from alink.vue'
    }
  },
  methods: {

  }
}
</script>
