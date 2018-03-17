const baseUrl = 'http://localhost:8080/api'
const apiKey = 'xxx'
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
