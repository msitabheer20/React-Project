import { useEffect, useState } from 'react'
import './App.css'
// import movies from './assets/data' //import this if api not working

function App() {

  // uncomment line 2 and comment line containing useState and useEffect if api not working
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://dummyapi.online/api/movies").then((res) => res.json()).then((res) => {
      console.log(res)
      setMovies(res);
    })
  })

  return (
    <>
      <h1 className='heading'>Movies List</h1>
      <div className='container'>

        {
          movies?.map((mov) => {
            return (
              <div className='movie-card' key={mov.id}>
                <div className='movie-pic'>
                  <img src="./moviepic.jpg" alt="moviepic" />
                </div>
                <div className="movie-info">
                  <h2 className='movie-name'>{mov.movie}</h2>
                  <h3 className='movie-rating'>{mov.rating}⭐</h3>
                </div>

                <a className='imdb' href={mov.imdb_url}><button>Imdb</button></a>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
