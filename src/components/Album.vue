<template>
<AlbumInfo artist="Cher" albumName="Believe" releaseDate="6 Apr 1999"></AlbumInfo>
</template>

<script>
import AlbumTracklist from './AlbumTracklist'
import AlbumInfo from './AlbumInfo'
export default {
  name: 'album',
  components: {
    AlbumTracklist,
    AlbumInfo
  }
}
</script>

<style scoped>

</style>
