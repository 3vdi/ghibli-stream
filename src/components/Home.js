// // pages/index.js (or any other Next.js component)
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movie')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div class="grid justify-items-center grid-cols-2 md:grid-cols-4 grid-rows-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};