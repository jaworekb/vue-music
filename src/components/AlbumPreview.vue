<template>
<img src="image">
  <ul>
    <li v-for="track in tracks">{{track.name}}</li>
  </ul>
</template>

<script>
export default {
  name: 'album-preview',
  data: function () {
    return {
      tracks: [
        {name: 'some track 1'},
        {name: 'some track 2'},
        {name: 'some track 3'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
