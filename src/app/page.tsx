import AnimatedPageShell from "@/components/AnimatedPageShell";
import MenuButton from "@/components/MenuButton";

export default function Home() {
  return (
    <>
      <noscript><style>{".page-shell{visibility:visible}"}</style></noscript>
      <AnimatedPageShell>
        <header className="site-header">
          <span className="rule" aria-hidden="true" data-anim="rule" />
          <div className="header-grid">
            <h1 className="wordmark">
              <span className="line-mask"><span className="line" data-anim="line">STUDIO</span></span>
              <span className="line-mask"><span className="line" data-anim="line">VIU</span></span>
            </h1>
            <p className="tagline">
              <span className="line-mask"><span className="line" data-anim="line">GLOBAL BRANDING STUDIO</span></span>
            </p>
            <MenuButton />
          </div>
        </header>
        <main className="hero">
          <div className="hero-media">
            <video className="hero-video" muted loop playsInline preload="auto" poster="/videos/hero-ink-poster.jpg" aria-hidden="true">
              <source media="(max-width: 767px)" src="/videos/hero-ink-mobile.mp4" type="video/mp4" />
              <source src="/videos/hero-ink.mp4" type="video/mp4" />
            </video>
          </div>
          <nav id="site-menu" className="site-menu" aria-label="Main">
            <ul className="site-menu-list">
              <li><a className="site-menu-link" href="#about"><span className="line-mask"><span className="line">ABOUT</span></span></a></li>
              <li><a className="site-menu-link" href="#history"><span className="line-mask"><span className="line">HISTORY</span></span></a></li>
              <li><a className="site-menu-link" href="#inspiration"><span className="line-mask"><span className="line">INSPIRATION</span></span></a></li>
            </ul>
          </nav>
        </main>
        <footer className="site-footer">
          <span className="rule" aria-hidden="true" data-anim="rule" />
          <div className="footer-row">
            <p className="footer-label"><span className="line-mask"><span className="line" data-anim="line">DESIGNING THINGS THAT STAND OUT</span></span></p>
            <span className="footer-dot" aria-hidden="true" />
          </div>
        </footer>
      </AnimatedPageShell>
    </>
  );
}