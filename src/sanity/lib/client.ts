import "server-only";

import { createClient } from "next-sanity";
import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
} from "@/sanity/env";

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  perspective: "published",
  useCdn: true,
});

export function getSanityWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN?.trim();
  if (!token) {
    throw new Error("SANITY_API_WRITE_TOKEN is not configured");
  }

  return sanityClient.withConfig({ token, useCdn: false });
}
