
export default function MoviePage({ movie }) {

  return (
    <div>
      <div class="absolute w-full z-0 h-60 bg-gradient-to-b from-black">
      <img class="backdrop-contrast-[150%]" src={movie.movie_banner} width={'100%'} alt="" />
      </div>
      <div class="absolute w-full z-10 h-60 bg-gradient-to-b from-black"> 
      <div class="w-1/2 my-20 px-10">
      <h1 class="text-4xl font-bold uppercase">{movie.title}</h1>
      <h1 class="text-2xl font-bold uppercase">{movie.original_title}</h1>
      <p>{movie.description}</p>
      <div class="flex items-center gap-4">
      <h2>{movie.release_date}</h2>
      <div>&middot;</div>
      <h2>{movie.director}</h2>
      <div>&middot;</div>
      <h2>{movie.running_time}</h2>
      </div>
      <h3>{movie.rt_score}</h3>
      </div>
      </div>
    </div>
  );
}
