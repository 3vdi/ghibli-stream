"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import MoviePage from '@/components/MoviePage';
import Loader from '@/components/Loader';

const MovieDetailPage = ({params}) => {
  const router = useRouter();
  const { data: session } = useSession();
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

  if (!session) {
    // If the user is not authenticated, redirect to the login page
    router.push('/login'); // Replace with the actual URL of your login page
  }

  return (
    <div>
      {movie ? (
        <MoviePage key={movie.id} movie={movie} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MovieDetailPage;