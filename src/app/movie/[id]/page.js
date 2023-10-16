"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MoviePage from '@/components/MoviePage';

const MovieDetailPage = ({params}) => {
  const router = useRouter();
  const id = params.id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/movie/${id}`)
        .then((response) => response.json())
        .then((data) => setMovie(data.movie))
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div>
      {movie ? (
        <MoviePage key={movie.id} movie={movie} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailPage;