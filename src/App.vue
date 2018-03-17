<template>
    <div id="app">
        <menu-comp></menu-comp>
        <router-view/>
    </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    MenuComp: Menu
  }
}
</script>

<style lang="scss">
  body {
    background: #121212;
    color: #ffffff;
  }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
