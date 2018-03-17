<template>
    <div>
        <h2>Tracks</h2>
        <div v-for="track in tracks" :key="track.artist + track.name">{{track.name}}</div>
        <hr>
        <h2>Albums</h2>
        <div v-for="album in albums" :key="album.mbid">{{album.name}} <router-link to="Search">link</router-link></div>
        <hr>
        <h2>Artists</h2>
        <div v-for="artist in tracks" :key="">{{artist.name}}</div>
        <hr>

    </div>
</template>

<script>
import { searchTrack, searchArtist, searchAlbum } from '../rest'

export default {
  name: 'search',
  data () {
    return {
      tracks: [],
      albums: [],
      artists: []
    }
  },
  methods: {
    fetchData (phrase) {
      var vm = this

      searchTrack(phrase).then(function (data) {
        console.log(data.results.trackmatches.track)
        vm.tracks = data.results.trackmatches.track
      })
      searchAlbum(phrase).then(function (data) {
        console.log(data.results.albummatches.album)
        vm.albums = data.results.albummatches.album
      })
      searchArtist(phrase).then(function (data) {
        console.log(data.results.artistmatches.artist)
        vm.artists = data.results.artistmatches.artist
      })
    }
  },
  created () {
    this.fetchData(this.$route.params.phrase)
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<style scoped>

</style>
