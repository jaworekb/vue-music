<template>
  <div>
    <router-link :to="{name:'Album', params:{artistName, albumName}}"><img :src="image" /></router-link>
    <h4>{{albumName}}</h4>
  </div>
</template>

<script>
export default {
  name: 'album-preview',
  props: ['album'],
  computed: {
    albumName () {
      return this.album.name
    },
    artistName () {
      return this.album.artist.name
    },
    image () {
      return this.album.image ? this.album.image.filter((image) => image.size === 'small')[0]['#text'] : ''
    }
  }
}
</script>

<style scoped>

</style>
