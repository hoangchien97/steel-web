import { IHome } from "@/types/home";
import { sanityClient } from "./client";
import * as queries from "./santityQueries";

export async function getHomePage() {
  const result = await sanityClient.fetch<IHome>(
    queries.getHomePageQuery,
    {},
    { cache: "no-cache" }
  );

  return result;
}
