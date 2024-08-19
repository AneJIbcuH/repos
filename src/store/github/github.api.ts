import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, ServerResponse } from "../../models/models";

export const githubApi = createApi({
  reducerPath: "githubApi",
  tagTypes: ["Repos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (build) => ({
    getRepos: build.query<IRepo[], string>({
      query: (nameRepo: string) => ({
        url: `search/repositories`,
        params: {
          q: nameRepo,
          per_page: 100,
        },
      }),
      providesTags: [{ type: "Repos" }],
      transformResponse: (response: ServerResponse<IRepo>) => response.items,
    }),
  }),
});

export const { useLazyGetReposQuery } = githubApi;
