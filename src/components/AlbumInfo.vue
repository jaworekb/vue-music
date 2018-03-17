<template>
  <div class="row">
    <div class="col-xs-12 col-sm-2">
      <img class="card-img-top" src="" alt="Card image cap">
    </div>
    <ul class="col">
      <li>{{album.artist}}</li>
      <li>{{album.name}}</li>
      <li>{{album.wiki.published}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'album-info',
  props: [
    'album'
  ]
}
</script>

<style scoped>

</style>
