import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();
    if(!session){
    return (
        <div>
            <nav class="absolute w-full h-60 bg-gradient-to-b from-black">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" class="flex items-center">
                        <Image src='/ghibli_logo.svg' alt='logo' width={70} height={70} />
                    </Link>
                    <div class="flex items-center">

                    <Link href="/login">  
                    <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none 
                    focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
                    dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2" >SIGN IN</button>
                    </Link>  
                    </div>
                </div>
            </nav>
        </div>

    )
}

return (
    <div>
        <nav class="w-full bg-gradient-to-b from-black">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" class="flex items-center">
                    <Image src='/ghibli_logo.svg' alt='logo' width={70} height={70} />
                </Link>
                <div class="flex items-center">
                <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none 
                focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
                dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2" onClick={signOut}>SIGN OUT</button>
                </div>
            </div>
        </nav>
    </div>

)

}