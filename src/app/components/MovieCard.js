export default function MovieCard({ movie }) {
    return (
        <div class="max-w-[12rem] m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-[2px]">

            <a href="#">
                <img class="rounded-lg" src={movie.image} width={'250px'} alt="" />
            </a>

            {/* <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.description}</p>
            </div> */}
        </div>
    )
}