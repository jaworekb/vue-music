<template>
  <div>
    <h2>{{name}}</h2>
    <img v-bind:src="image"/>
    <p>{{bio}}</p>
  </div>
</template>

<script>
export default {
  name: 'artist-details',
  props: ['artist'],
  computed: {
    image () {
      return 'http://userserve-ak.last.fm/serve/85/5112299.jpg'
    },
    name () {
      return 'cher'
    },
    bio () {
      return 'some long text'
    }
  }
}
</script>

<style scoped>

</style>
