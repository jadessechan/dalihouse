import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["178.156.233.94"],
  // We don't add `mdx`/`md` to pageExtensions because blog posts live under
  // content/ and are loaded via dynamic import, not filesystem routing.
};

const withMDX = createMDX({
  options: {
    // Plugin names are passed as strings so Turbopack can serialize them and
    // hand them off to the Rust-side loader. remark-frontmatter teaches MDX
    // to skip our YAML frontmatter block (gray-matter parses it in blog.ts).
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
