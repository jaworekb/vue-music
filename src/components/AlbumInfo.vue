<template>
  <div class="row">
    <div class="col-xs-12 col-sm-2">
      <img class="card-img-top" src="" alt="Card image cap">
    </div>
    <ul class="col">
      <li>{{artist}}</li>
      <li>{{albumName}}</li>
      <li>{{releaseDate}}</li>
    </ul>
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
