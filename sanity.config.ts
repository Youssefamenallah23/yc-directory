"use client";

/**
 * This configuration is used for the Sanity Studio mounted at the `/app/studio/[[...tool]]/page.tsx` route.
 */

import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { markdownSchema } from "sanity-plugin-markdown";

// Import your environment variables, API details, and schemas
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio", // Base path for the Sanity Studio
  projectId: projectId || "your-project-id", // Fallback in case `projectId` isn't defined
  dataset: dataset || "production", // Fallback for the dataset
  schema, // Schema for the content types
  plugins: [
    structureTool({ structure }), // Custom structure plugin
    visionTool({ defaultApiVersion: apiVersion }), // GROQ querying tool
    markdownSchema(), // Markdown support plugin
  ],
});
