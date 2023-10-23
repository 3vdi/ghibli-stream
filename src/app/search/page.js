"use client";
import Navbar from '@/components/Navbar';
import FilmList from "@/components/FilmList";
import SearchComponent from "@/components/SearchComponent";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
        <Navbar />
      <SearchComponent onSearch={setSearchQuery} />
      <FilmList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;