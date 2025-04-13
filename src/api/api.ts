import ky from 'ky'
// const API_BASE_URL = 'https://api-de-hash.hula.co.ke'

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  credentials: 'omit'
})

api.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        console.log('Request Config:', request)
        return request
      }
    ],
    afterResponse: [
      (_request, _options, _response) => {
        return new Response('A different response', { status: 200 })
      }
    ]
  }
})

export default api
