<template>
  <div class="row artist-details-header">
    <div class="col-xs-12 col-sm-4">
      <img v-bind:src="image" class="img-thumbnail"/>
    </div>
    <ul class="col">
      <li><h2>{{name}}</h2></li>
      <li>{{bio}}</li>
    </ul>
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
