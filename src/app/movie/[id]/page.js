"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, getSession } from 'next-auth/react';
import MoviePage from '@/components/MoviePage';
import Loader from '@/components/Loader';

const MovieDetailPage = ({params}) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const id = params.id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {

    if (id) {
      fetch(`/api/movie/${id}`)
        .then((response) => response.json())
        .then((data) => setMovie(data.movie))
        .catch((error) => console.error(error));
    }

    const checkSession = async () => {
      const userSession = await getSession();
      if (!userSession) {
        router.push('/login'); // Redirect to the login page if no session is found
      }
    };

    if (status === 'loading') {
      // Wait for the session to load
      return;
    }

    checkSession();

  }, [id, status, router]);


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