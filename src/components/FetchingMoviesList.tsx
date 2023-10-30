"use client";

import { useGetMoviesQuery } from "@/redux/service/omdbApi";
import { useSelector } from "react-redux";
import { selectAppModule } from "@/redux/app/selector";
import { useRouter } from "next/navigation";
import { Movies } from "@/components/Movies";

export function FetchingMoviesList() {
  const state = useSelector((state) => selectAppModule(state).name);
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
    return <Movies data={data["Search"]} />;
  }
}
