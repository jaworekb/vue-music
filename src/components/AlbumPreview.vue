<template>
  <div>
    <router-link :to="{name:'', params:{artistsName:artistName, albumNameL}}"><img :src="image" /></router-link>
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
      return this.album.name
    },
    image () {
      return this.album.image ? this.album.image.filter((image) => image.size === 'small')['#text'] : ''
    }
  }
}
</script>

<style scoped>

</style>
