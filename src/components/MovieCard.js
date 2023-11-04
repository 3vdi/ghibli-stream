import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ movie }) {
    return (
        <div class= "max-w-[34rem] min-w-[4rem] m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <Link href={`/movie/${movie.id}`}>
                <Image class="rounded-lg transition duration-300 ease-in-out hover:scale-105" src={movie.image} width={400} height={740} alt="" />
            </Link>
        </div>
    )
}