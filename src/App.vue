<template>
    <div id="app">
        <p class="test">aaaaa</p>
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
    #app {
        .test {
            color: red;
        }
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
