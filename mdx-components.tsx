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

// Components exposed globally to every .mdx file. Authors can use the
// magazine components without import statements, and standard markdown
// elements (h3, ul, a, hr) get our editorial styling automatically.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Magazine layout pieces — used as JSX inside the MDX body.
    Callout,
    Columns,
    Divider,
    PhotoCard,
    PhotoStrip,
    PullQuote,
    SectionHead,
    SingleCol,
    Spread,
    // Plain markdown element overrides for body prose. h2 should never
    // appear in MDX (use SectionHead instead) — we leave its default so
    // any accidental `##` is visually obvious during authoring.
    h3: ({ children, ...rest }) => (
      <h3
        className="mt-8 mb-2 font-serif text-[22px] font-medium leading-[1.35] tracking-[-0.005em] text-brown-deep"
        {...rest}
      >
        {children}
      </h3>
    ),
    ul: ({ children, ...rest }) => (
      <ul className="my-[1em] list-disc pl-6 [&_li]:mt-[0.4em]" {...rest}>
        {children}
      </ul>
    ),
    ol: ({ children, ...rest }) => (
      <ol className="my-[1em] list-decimal pl-6 [&_li]:mt-[0.4em]" {...rest}>
        {children}
      </ol>
    ),
    a: ({ children, ...rest }) => (
      <a
        className="text-crimson underline decoration-1 underline-offset-[3px] transition-colors hover:text-brown-deep"
        {...rest}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="my-12 border-0 border-t border-brown/15" />,
  };
}
