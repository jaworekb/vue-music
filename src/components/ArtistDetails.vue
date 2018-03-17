<template>
  <div class="row artist-details-header">
    <div class="col-xs-12 col-sm-4">
      <img :src="image" class="img-thumbnail"/>
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
      return this.artist.image ? this.artist.image.filter(({size}) => size === 'large')[0]['#text'] : ''
    },
    name () {
      return this.artist.name
    },
    bio () {
      return this.artist.bio ? this.artist.bio.summary : ''
    }
  }
}
</script>

<style scoped>

</style>
