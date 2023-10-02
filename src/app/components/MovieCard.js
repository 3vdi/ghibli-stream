export default function MovieCard({ movie }) {
    return (
        <div class="grid max-w-[12rem] m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-[2px]">

            <a href="#">
                <img class="rounded-lg" src={movie.image} width={'250px'} alt="" />
            </a>
        </div>
    )
}