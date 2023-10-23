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
    return <p>Loading...</p>;
  }

  if (films.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  );
};