<template>
  <div>
    <h1>Artist view</h1>
    <ArtistDetails artist="artist"></ArtistDetails>
    <ul class="row">
      <li class="col-4" v-for="(album, key, index) in albums" v-bind:key="index">
        <AlbumPreview :album="album"></AlbumPreview>
      </li>
    </ul>
  </div>
</template>

<script>
import ArtistDetails from './ArtistDetails'
import AlbumPreview from './AlbumPreview'

import {getArtistInfo, getArtistTopAlbums} from '../rest'

export default {
  name: 'artist',
  components: {
    AlbumPreview,
    ArtistDetails
  },

  mounted () {
    this.loadData(this.$route.params.artistName)
  },
  watch: {
    '$route': 'onRouteChange'
  },
  methods: {
    onRouteChange (to) {
      this.loadData(to.params.artistName)
    },
    loadData (artistName) {
      const self = this
      getArtistInfo(artistName)
        .then(function (artist) {
          console.log(artist)
          self.artist = artist
        })
      getArtistTopAlbums(artistName)
        .then(function (albums) {
          self.albums = albums
        })
    }
  },
  data () {
    return {
      artist: {
        name: 'Cher'
      },
      albums: [
        {name: 'some album name'},
        {name: 'some other album name'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
