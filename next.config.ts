import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "1";
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : undefined,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
