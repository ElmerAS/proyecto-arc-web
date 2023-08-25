const resolve = (query) => {
  const requestUri = `https://www.omdbapi.com/?apikey=876f8984&plot=full`

  if (query.hasOwnProperty('movieTitle')) return `${requestUri}&t=${query.movieTitle}`

  throw new Error('movie-find content source requires a movieTitle')
}

export default {
  resolve,
  params: {
    movieTitle: 'text'
  }
}