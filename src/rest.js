const baseUrl = 'http://localhost:8081/api'
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
    .then(function (response) {
      return response.json()
    })
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
