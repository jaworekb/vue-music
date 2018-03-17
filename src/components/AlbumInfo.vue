<template>
  <div class="row">
    <div class="col">
      <img src="">
    </div>
    <div class="col">
      <ul>
        <li>{{artist}}</li>
        <li>{{albumName}}</li>
        <li>{{releaseDate}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'album-info',
  props: [
    'artist',
    'albumName',
    'image',
    'releaseDate'
  ]
}
</script>

<style scoped>

</style>
