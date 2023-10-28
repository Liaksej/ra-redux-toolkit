"use client";

import { Movie } from "@/components/Movie";
import { Search } from "@/components/Search";

export default function Home() {
  return (
    <div>
      <Search />
      <Movie />;
    </div>
  );
}
