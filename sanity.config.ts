"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/sanity/env";
import passwordReset from "./src/sanity/templates/password-reset.json";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "axisMeterBlog",
  title: "Axis Meter Content",
  basePath: "/studio",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
    templates: (templates) => [...templates, {
      id: "help-password-reset",
      title: "Password reset guide (with video)",
      schemaType: "helpArticle",
      value: passwordReset,
    }],
  },
});
