<template>
  <div class="card">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <div class="card-text">
        <ul>
          <li>{{artist}}</li>
          <li>{{albumName}}</li>
          <li>{{releaseDate}}</li>
        </ul>
      </div>
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
