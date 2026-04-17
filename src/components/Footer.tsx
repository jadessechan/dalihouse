export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-14 text-center text-cream/50">
      <p className="font-serif text-lg text-cream/80">Dali House</p>
      <p className="mt-1 text-sm">Coliving for women in Dallas</p>

      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <a
          href="mailto:dalihouse.dtx@gmail.com"
          className="text-cream/70 transition-colors hover:text-tan"
        >
          dalihouse.dtx@gmail.com
        </a>
        <a
          href="https://instagram.com/dalihouse.dtx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream/70 transition-colors hover:text-tan"
        >
          @dalihouse.dtx
        </a>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <a
          href="https://form.typeform.com/to/J9BtSauc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-cream/60 transition-colors hover:text-tan"
        >
          Apply
        </a>
        <a
          href="#the-space"
          className="text-sm text-cream/60 transition-colors hover:text-tan"
        >
          The Space
        </a>
        <a
          href="#faq"
          className="text-sm text-cream/60 transition-colors hover:text-tan"
        >
          FAQs
        </a>
        <a
          href="/blog"
          className="text-sm text-cream/60 transition-colors hover:text-tan"
        >
          Blog
        </a>
      </div>
      <p className="mt-8 text-xs text-cream/30">
        &copy; {new Date().getFullYear()} Dali House. All rights reserved.
      </p>
    </footer>
  );
}
