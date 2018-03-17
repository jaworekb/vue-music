<template>
    <div class="search-view">
        <form action="" @submit.prevent="search">
            <input type="text" placeholder="Search" class="search-form" v-model="searchInput">
            <button type="submit">search</button>
        </form>

        <div class="row">
            <div class="list-block col-xs-12 col-sm-4">
                <h2>Tracks</h2>
                <div class="list-item" v-for="track in tracks" :key="track.artist + track.name">{{track.name}}</div>
            </div>
            <div class="list-block col-xs-12 col-sm-4">
                <h2>Albums</h2>
                <div class="list-item" v-for="album in albums" :key="album.mbid">{{album.name}} <router-link :to="{name: 'Album', params:{artistName: album.artist, albumName: album.name}}">link</router-link></div>
            </div>
            <div class="list-block col-xs-12 col-sm-4">
                <h2>Artists</h2>
                <div class="list-item" v-for="artist in artists" :key="artist.name">{{artist.name}} <router-link :to="{name: 'Artist', params: {artistName: artist.name}}">link</router-link></div>
            </div>
        </div>
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
        vm.tracks = data.results.trackmatches.track
      })
      searchAlbum(phrase).then(function (data) {
        vm.albums = data.results.albummatches.album
      })
      searchArtist(phrase).then(function (data) {
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
