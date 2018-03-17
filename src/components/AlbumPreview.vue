<template>
  <div class="card">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <div class="card-text">
        <ul>
          <li v-bind:key="index" v-for="(track, key, index) in tracks">{{track.name}}</li>
        </ul>
      </div>
    </div>
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
