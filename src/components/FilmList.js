import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FilmList ({ searchQuery }){
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      fetch(`https://ghibliapi.vercel.app/films?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setFilms(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  if (loading) {
    return (
        <div class="m-6">
        <p>Loading...</p>
        </div>
        )
  }

  if (films.length === 0) {
    return(
        <div class="m-6">
        <p>No Results Found</p>
        </div>
    )
  }

  return (
    <ul>
      {films.map((film) => (
        <div key={film.id} class="m-6">

        <a href={`/movie/${film.id}`} class="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow
        hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image class="rounded-lg transition duration-300 ease-in-out hover:scale-105" src={film.image} width={100} height={180} alt="" />
        <div class="flex flex-col justify-end leading-normal ml-2">
        <p class="text-lg text-gray-900 dark:text-white md:text-xl md:max-w-xl">{film.original_title}</p>
        <p class="text-lg text-gray-900 dark:text-white md:text-3xl md:max-w-xl">{film.title}</p>

        <div class="flex items-center gap-x-4 text-base font-semibold mt-2">
            <p class="text-white font-normal rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-gray-900">{film.release_date}</p>
            <p class="text-white font-normal rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-gray-900">{film.running_time}min</p>
            <p class="text-white font-normal rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-gray-900">{film.director}</p>
        
        </div>
        </div>

        </a>

        </div>
      ))}
    </ul>
  );
};