import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const posterApi = createApi({
  reducerPath: "posterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://img.omdbapi.com/`,
  }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: (imdbID) =>
        `?i=${imdbID}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
    }),
  }),
});

export const { useGetMovieQuery } = posterApi;
