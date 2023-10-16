
export default function MoviePage({ movie }) {

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <h3>{movie.rt_score}</h3>
    </div>
  );
}