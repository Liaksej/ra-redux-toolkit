import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (title) =>
        `?s=${title}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
    }),
    getMovie: builder.query({
      query: (imdbID) =>
        `?i=${imdbID}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = omdbApi;
