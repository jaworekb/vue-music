<template>
  <div>
    <img :src="image" />
    <ul>
      <li v-bind:key="index" v-for="(track, key, index) in tracks">{{track.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'album-preview',
  data: function () {
    return {
      image: 'someimgurl',
      name: 'some album name',
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
