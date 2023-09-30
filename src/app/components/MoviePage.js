import MovieCard from "./MovieCard";
import moviesData from "../../../sample.json"

export default function MoviePage(){
    return(
        <div>
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    )
}