import Image from "next/image";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-[5px] inline-block align-middle"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-[5px] inline-block shrink-0 align-middle"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-green-deep px-8 py-14">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-start justify-between gap-10">
        <div className="min-w-[220px]">
          <Image
            src="/dali-house-title.png"
            alt="Dali House"
            width={200}
            height={40}
            className="mb-2 block h-10 w-auto opacity-75 brightness-0 invert"
          />
          <p className="eyebrow mb-3 text-cream/45">Coliving for women in Dallas</p>
          <div className="flex flex-col gap-1.5">
            <a
              href="mailto:dalihouse.dtx@gmail.com"
              className="flex items-center text-[13px] text-cream/60 transition-colors hover:text-pink"
            >
              <EmailIcon />
              dalihouse.dtx@gmail.com
            </a>
            <a
              href="https://instagram.com/dalihouse.dtx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[13px] text-cream/60 transition-colors hover:text-pink"
            >
              <InstagramIcon />
              @dalihouse.dtx
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="eyebrow mb-1 text-cream/45">Navigate</span>
          <Link href="/" className="text-[13px] text-cream/60 transition-colors hover:text-pink">
            Home
          </Link>
          <Link href="/the-space" className="text-[13px] text-cream/60 transition-colors hover:text-pink">
            The Space
          </Link>
          <Link href="/#how-it-works" className="text-[13px] text-cream/60 transition-colors hover:text-pink">
            How It Works
          </Link>
          <Link href="/about" className="text-[13px] text-cream/60 transition-colors hover:text-pink">
            About
          </Link>
          <Link href="/alumni" className="text-[13px] text-cream/60 transition-colors hover:text-pink">
            Alumni
          </Link>
          <Link href="/#faq" className="text-[13px] text-cream/60 transition-colors hover:text-pink">
            FAQs
          </Link>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="eyebrow mb-1 text-cream/45">Resources</span>
          <Link href="/blog" className="text-[13px] text-cream/60 transition-colors hover:text-pink">
            Blog
          </Link>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="eyebrow mb-1 text-cream/45">Apply</span>
          <a
            href="https://form.typeform.com/to/J9BtSauc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-cream/60 transition-colors hover:text-pink"
          >
            Apply Now
          </a>
        </div>
      </div>

      <p className="mx-auto mt-9 max-w-[1080px] border-t border-cream/10 pt-6 text-center text-[11px] text-cream/25">
        &copy; {new Date().getFullYear()} Dali House. All rights reserved.
      </p>
    </footer>
  );
}
