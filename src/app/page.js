// import Main from "@/components/Main";


// export default function Home() {
//   return (
//     <Main/>
    
//   )
// }

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Main from "@/components/Main";
import Home from "@/components/Home";

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    // User is not signed in, render the "Main" component
    return <Main />;
  }

  // User is signed in, render the "Home" component
  return <Home />;
  
}

