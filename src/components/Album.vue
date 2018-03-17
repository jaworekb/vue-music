<template>
  <div>
    <AlbumInfo :album="album"></AlbumInfo>
    <AlbumTracklist></AlbumTracklist>
  </div>

</template>

<script>
import AlbumTracklist from './AlbumTracklist'
import AlbumInfo from './AlbumInfo'
import {getAlbumInfo} from '../rest.js'
export default {
  name: 'album',
  components: {
    AlbumTracklist,
    AlbumInfo
  },
  data () {
    return {
      album: ''
    }
  },
  created () {
    this.loadData(this.$route.params.artistName, this.$route.params.albumName)
  },
  methods: {
    loadData (artistName, albumName) {
      const self = this
      getAlbumInfo(artistName, albumName).then(
        function (data) {
          self.album = data.album
          console.log(self.album)
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
