"use client";

import { useGetMoviesQuery } from "@/redux/service/omdbApi";
import { useSelector } from "react-redux";
import { selecAppModule } from "@/redux/app/selector";
import { Search } from "@/redux/service/apiTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Movie() {
  const state = useSelector((state) => selecAppModule(state).name);
  const { data, isLoading, error } = useGetMoviesQuery(state);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (state === "") {
    return null;
  }

  if (data["Response"] === "False") {
    return <div>{data["Error"]}</div>;
  }

  if (data["Response"] === "True" && data["Search"]) {
    return (
      <div>
        {data["Search"].map((movie: Search) => (
          <Link
            href="[id]/film"
            key={movie.imdbID}
            as={`/${movie.imdbID}/film`}
          >
            <div>{movie.Title}</div>
          </Link>
        ))}
      </div>
    );
  }
}
