let apiUrl
const apiUrls = {
  // local
  // production: 'https://aqueous-atoll-85096.herokuapp.com',
  production: 'https://shielded-island-51166.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
