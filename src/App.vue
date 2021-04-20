<template>
  <div id="app">
    <calculator/>
  </div>
</template>
import Calculator from "@/components/Calculator";
<script>

import Calculator from "@/components/Calculator";

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
