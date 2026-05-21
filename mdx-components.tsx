import type { MDXComponents } from "mdx/types";
import {
  Callout,
  Columns,
  Divider,
  PhotoCard,
  PhotoStrip,
  PullQuote,
  SectionHead,
  SingleCol,
  Spread,
} from "@/components/blog/MagazineBody";

// Components exposed globally to every .mdx file. Authors can use these
// without import statements at the top of the post.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    Columns,
    Divider,
    PhotoCard,
    PhotoStrip,
    PullQuote,
    SectionHead,
    SingleCol,
    Spread,
  };
}
