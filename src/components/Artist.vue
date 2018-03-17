<template>
  <div>
    <h1> Artist view</h1>
    <ArtistDetails artist="artist"></ArtistDetails>
    <ul>
      <li v-for="(album, key, index) in albums" v-bind:key="index">
        <AlbumPreview album="album"></AlbumPreview>
      </li>
    </ul>
  </div>
</template>

<script>
import ArtistDetails from './ArtistDetails'
import AlbumPreview from './AlbumPreview'

export default {
  name: 'artist',
  components: {
    AlbumPreview,
    ArtistDetails
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
