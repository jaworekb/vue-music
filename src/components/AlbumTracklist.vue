<template>
  <div>
    <ul>
      <li v-bind:key="index" v-for="(track, key, index) in tracks">{{track.trackNumber}}.  {{track.artistName}} - {{track.trackName}} -> {{track.duration}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'album-tracklist',
  data: function () {
    return {
      tracks: [
        {trackNumber: 1, trackName: 'Believe', duration: 239, artistName: 'Cher'},
        {trackNumber: 2, trackName: 'The Power', duration: 236, artistName: 'Cher'},
        {trackNumber: 3, trackName: 'Runaway', duration: 287, artistName: 'Cher'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
