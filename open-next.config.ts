import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Cloudflare Workers deployment config for the OpenNext adapter.
//
// The incremental cache is backed by Workers Static Assets: it is read-only and
// serves the pages prerendered at build time. That keeps the deployment on the
// Workers free plan (no R2/KV/D1/Durable Object resources), at the cost of
// runtime ISR — `revalidate`, `revalidatePath` and `revalidateTag` do not
// persist, so blog content refreshes on redeploy rather than on a timer.
// Swap in `r2IncrementalCache` + `d1NextTagCache` when ISR is needed.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
