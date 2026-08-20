// Builds the Next.js app for Cloudflare Workers via the OpenNext adapter.
//
// The embedded Sanity Studio at /studio pulls ~2.2 MiB (gzipped) of authoring
// UI into the server bundle, which alone blows past the 3 MiB Workers free-plan
// script limit. The Studio is an authoring tool, not part of the marketing
// site, so it is excluded from the Workers build only. The Vercel build is
// untouched and still serves /studio.
//
// Remove the exclusion once the worker is on a paid plan (10 MiB limit).

import { spawnSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const excludedRoutes = [["src/app/studio", ".cf-build-excluded/studio"]];

const moves = excludedRoutes.map(([from, to]) => [
  resolve(projectRoot, from),
  resolve(projectRoot, to),
]);

function stash() {
  for (const [from, to] of moves) {
    if (!existsSync(from)) continue;
    renameSync(from, to);
  }
}

function restore() {
  for (const [from, to] of moves) {
    if (!existsSync(to)) continue;
    renameSync(to, from);
  }
}

// Restore on Ctrl-C / kill so a cancelled build never leaves the tree mangled.
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    restore();
    process.exit(1);
  });
}

try {
  spawnSync("mkdir", ["-p", resolve(projectRoot, ".cf-build-excluded")]);
  stash();

  const result = spawnSync("npx", ["opennextjs-cloudflare", "build"], {
    cwd: projectRoot,
    stdio: "inherit",
    env: { ...process.env, CF_WORKERS_BUILD: "1" },
  });

  process.exitCode = result.status ?? 1;
} finally {
  restore();
}
