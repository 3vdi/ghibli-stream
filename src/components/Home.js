// pages/index.js (or any other Next.js component)
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/ghibliMovies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Ghibli Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};