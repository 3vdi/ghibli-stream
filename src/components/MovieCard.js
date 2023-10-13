export default function MovieCard({ movie }) {
    return (
        <div class= "max-w-[18rem] min-w-[9rem] m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <a href="#">
                <img class="rounded-lg transition duration-300 ease-in-out hover:scale-105" src={movie.image} width={'300px'} alt="" />
            </a>
        </div>
    )
}