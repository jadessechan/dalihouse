/* Footer.jsx — charcoal with inverted wordmark, 4-column layout, IG + email links.
   Source: jadessechan/dalihouse@master src/components/Footer.tsx */

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a className="brand" href="/"><img src="/assets/logo-wordmark.png" alt="Dali House" /></a>
          <p className="tagline">Coliving for women in Dallas</p>
          <div>
            <a className="footer-ic" href="mailto:dalihouse.dtx@gmail.com"><EmailIcon /> dalihouse.dtx@gmail.com</a>
          </div>
          <div>
            <a className="footer-ic" href="https://instagram.com/dalihouse.dtx" target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> @dalihouse.dtx
            </a>
          </div>
        </div>

        <div className="col">
          <p className="col-title">Navigate</p>
          <a href="/">Home</a>
          <a href="#the-space">The Space</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#meet-your-host">Your Host</a>
          <a href="#faq">FAQs</a>
        </div>

        <div className="col">
          <p className="col-title">Resources</p>
          <a href="/blog">Blog</a>
        </div>

        <div className="col">
          <p className="col-title">Apply</p>
          <a href="https://form.typeform.com/to/J9BtSauc" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
      <p className="copy">&copy; {new Date().getFullYear()} Dali House. All rights reserved.</p>
    </footer>
  );
}
