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
    font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      margin-top: 100px;
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
  .card {
      color: #121212;
  }
  .search-form {
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      border-radius: 25px;
      font-size: 14px;
      padding: 0 15px;
      border: 1px solid #282828;
      height: 30px;
      margin-bottom: 30px;
  }
  .search-view {
      .list-block {
          margin-bottom: 30px;
      }
      h2 {
          background: #282828;
          padding: 5px 10px;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
      }
      .list-item {
          border-bottom: 1px solid #282828;
          padding: 5px 10px;
      }
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
