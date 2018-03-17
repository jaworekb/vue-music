<template>
  <div>
    <h1> Artist view</h1>
    <ArtistDetails></ArtistDetails>
    <AlbumPreview></AlbumPreview>
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
  }
}
</script>

<style scoped>

</style>
