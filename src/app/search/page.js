"use client";

import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import FilmList from "@/components/FilmList";
import SearchComponent from "@/components/SearchComponent";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    const checkSession = async () => {
      const userSession = await getSession();
      if (!userSession) {
        router.push('/login'); // Redirect to the login page if no session is found
      }
    };

    if (status === 'loading') {
      // Wait for the session to load
      return;
    }

    checkSession();
  }, [status, router]);

  return (
    <div>
        <Navbar />
      <SearchComponent onSearch={setSearchQuery} />
      <FilmList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;