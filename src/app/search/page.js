"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import FilmList from "@/components/FilmList";
import SearchComponent from "@/components/SearchComponent";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    // If the user is not authenticated, redirect to the login page
    router.push('/login'); // Replace with the actual URL of your login page
  }

  return (
    <div>
        <Navbar />
      <SearchComponent onSearch={setSearchQuery} />
      <FilmList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;