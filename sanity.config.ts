"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "axisMeterBlog",
  title: "Axis Meter Blog",
  basePath: "/studio",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
