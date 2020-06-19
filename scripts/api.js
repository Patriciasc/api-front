const API = axios.create({
  baseURL: 'https://mighty-thicket-30115.herokuapp.com/api/',
  timeout: 1000
})

function handleError(err) {
  if (err.response.data.error === 'Token not valid + TokenExpiredError: jwt expired') {
    localStorage.clear();
  } else {
    alert(err.response.data.error)
  }
}
