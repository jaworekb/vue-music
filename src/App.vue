<template>
    <div id="app">
        <menu-comp></menu-comp>
        <div class="header-album"></div>
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
    font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      margin-top: 75px;
      margin-left: 20px;
      margin-right: 20px;
  }
  ul {
      margin: 0;
      padding: 0;
      li {
          list-style-type: none;
      }
  }
  .artist-details-header {

  }
  .nav-pills {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 10;
      background: rgba(0, 0, 0, 0.5);
      .nav-link {
          background-color: transparent;
          margin: 20px;
          border: 1px solid #1db954;
          color: #fff;
          -webkit-border-radius: 25px;
          -moz-border-radius: 25px;
          border-radius: 25px;
          text-transform: uppercase;
          &.active,
          &:hover {
              background-color: #1db954;
              border: 1px solid #1db954;
          }
      }
  }
</style>
