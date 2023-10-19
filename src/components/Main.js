"use client";

import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import MarqueePage from "./Marquee";

import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};

export default function Main() {
    const router = useRouter();
    const isBreakpoint = useMediaQuery(1000)

    return (
        <div class=" relative h-full  ">
            <div class="w-full flex justify-center">
            </div>
            <div class="z-10 absolute w-full  h-60 bg-gradient-to-b from-black   ">
                <Navbar />
            </div>
            <div class="z-10 h-60 bg-gradient-to-t absolute from-black text-white bottom-0 w-full"></div>
            <div class="-z-10 flex w-full object-fit">

                {isBreakpoint ? (
                    <div>
                        <MarqueePage />
                    </div>
                ) : (
                    <div>
                        <img class="flex w-screen h-screen object-fit" src="https://i.gifer.com/Py0.gif" />
                    </div>
                )}

            </div>
        </div>
    )
}