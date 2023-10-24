import { useRef, useState, useEffect } from "react";

export default function MoviePage({ movie }) {

  const minToHr = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  // Reference to the title element to get its width
  const titleRef = useRef(null);

  // State to store the title width
  const [titleWidth, setTitleWidth] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // UseEffect to update the title width on component mount
  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }

    // Determine screen width and set the isSmallScreen state
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Call the handleResize function on component mount
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div>
        <div class="w-full rounded-lg px-2 pt-3">
          <img class="w-full rounded-lg backdrop-contrast-[150%]" src={movie.movie_banner} alt="" />
        </div>

        <div class="w-full">
          <div class="w-full pt-3 px-2">
            <h1 class="sm:text-xl md:text-3xl font-bold uppercase mb-2">{movie.original_title}</h1>
            <h1 ref={titleRef} class="text-3xl md:text-5xl mb-3 font-bold uppercase">{movie.title}</h1>

            <div class="w-full flex items-center justify-between gap-x-4 text-sm text-gray-300 font-normal my-3 px-2">
              <h2 class="rounded-full backdrop-blur-lg">{movie.release_date}</h2>
              <div>&middot;</div>
              <h2 class="rounded-full backdrop-blur-[2px]">{movie.director}</h2>
              <div>&middot;</div>
              <h2 class="rounded-full backdrop-blur-[2px]">{minToHr(movie.running_time)}</h2>
              <div>&middot;</div>
              <div class="flex items-center gap-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg" width={'18px'} />
                <p>{movie.rt_score}</p>
              </div>
            </div>

            <button class="w-full flex items-center justify-center gap-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xl font-bold py-4 px-8 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" /> </svg>
              WATCH NOW
            </button>

            <p class="text-justify text-xl text-gray-300 mb-2 pt-4">{movie.description}</p>

          </div>
        </div>
      </div>

    );
  }
  else {
    return (
      <div>
        <div class="absolute w-full z-0 h-60 bg-gradient-to-b from-black">
          <img class="w-screen h-screen backdrop-contrast-[150%]" src={movie.movie_banner} alt="" />
        </div>

        <div class="absolute w-full z-10 h-full bg-gradient-to-r from-black">
          <div class="w-1/2 my-20 px-10">
            <h1 class="text-3xl font-bold uppercase mb-2">{movie.original_title}</h1>
            <h1 ref={titleRef} class="w-fit text-5xl mb-3 font-bold uppercase">{movie.title}</h1>

            <p style={{ width: titleWidth }} class="line-clamp-4 text-justify text-xl mb-2">{movie.description}</p>
            <div style={{ width: titleWidth }} class="flex items-center gap-x-4 text-base font-semibold mb-3">
              <h2 class="rounded-full backdrop-blur-lg">{movie.release_date}</h2>
              <div>&middot;</div>
              <h2 class="rounded-full backdrop-blur-[2px]">{movie.director}</h2>
              <div>&middot;</div>
              <h2 class="rounded-full backdrop-blur-[2px]">{minToHr(movie.running_time)}</h2>
              <div>&middot;</div>
              <div class="flex items-center gap-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg" width={'24px'} />
                <p>{movie.rt_score}</p>
              </div>
            </div>

            <button style={{ width: titleWidth }} class="flex items-center justify-center gap-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xl font-bold py-4 px-8 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" /> </svg>
              WATCH NOW
            </button>

          </div>
        </div>
      </div>

    )
  }
}
