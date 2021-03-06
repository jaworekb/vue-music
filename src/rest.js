const baseUrl = 'http://localhost:8080/api'
const apiKey = 'd50c6cc75491a481bd767cc53d917030'
// const methods = {};
const format = 'json'

function encodeParams (params) {
  return Object
    .entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')
}

export function getArtistInfo (name) {
  const method = 'artist.getInfo'
  return fetch(baseUrl + '?' + encodeParams({api_key: apiKey, method, artist: name, format}))
    .then((response) => response.json())
    .then((data) => data.artist)
}

export function getArtistTopAlbums (artistName) {
  const method = 'artist.gettopalbums'
  return fetch(baseUrl + '?' + encodeParams({api_key: apiKey, method, artist: artistName, format}))
    .then((response) => response.json())
    .then((data) => data.topalbums.album)
}

export function searchTrack (name) {
  const method = 'track.search'

  return fetch(baseUrl + '?' + encodeParams({api_key: apiKey, method, track: name, format, limit: 10}))
    .then(function (response) {
      return response.json()
    })
}

export function searchAlbum (name) {
  const method = 'album.search'

  return fetch(baseUrl + '?' + encodeParams({api_key: apiKey, method, album: name, format, limit: 10}))
    .then(function (response) {
      return response.json()
    })
}
export function searchArtist (name) {
  const method = 'artist.search'

  return fetch(baseUrl + '?' + encodeParams({api_key: apiKey, method, artist: name, format, limit: 10}))
    .then(function (response) {
      return response.json()
    })
}

export function getAlbumInfo (sartistName, albumName) {
  const method = 'album.getInfo'
  return fetch(baseUrl + '?' + encodeParams({api_key: apiKey, method, artist: sartistName, album: albumName, format}))
    .then(function (response) {
      return response.json()
    })
}
