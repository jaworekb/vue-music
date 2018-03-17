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

  computed: {
    image () {
      return 'link'
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
