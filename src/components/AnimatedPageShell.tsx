"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function AnimatedPageShell({ children }: { children: React.ReactNode }) {
  const shellRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const shell = shellRef.current;
    if (!shell) return;

    const media = gsap.matchMedia();
    const video = shell.querySelector<HTMLVideoElement>(".hero-video");

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(shell, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8, ease: "power2.out" }, 0)
        .fromTo('[data-anim="rule"]', { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease: "power3.inOut", stagger: 0.12, clearProps: "transform" }, 0.2)
        .fromTo('.wordmark [data-anim="line"]', { yPercent: 100 }, { yPercent: 0, duration: 1.3, stagger: 0.12, clearProps: "transform" }, 0.35)
        .fromTo('.tagline [data-anim="line"]', { yPercent: 100 }, { yPercent: 0, duration: 1.1, stagger: 0.08, clearProps: "transform" }, 0.5)
        .fromTo('.hero-media', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1.4, clearProps: "transform,opacity,visibility" }, 0.45)
        .fromTo('.hero-video', { scale: 1.18 }, { scale: 1, duration: 2.4, ease: "power3.out", clearProps: "transform" }, 0.45)
        .fromTo('.menu-button', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9, ease: "power2.out", clearProps: "opacity,visibility" }, 0.7)
        .fromTo('.footer-label [data-anim="line"]', { yPercent: 100 }, { yPercent: 0, duration: 1.1, clearProps: "transform" }, 0.9)
        .fromTo('.footer-dot', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8, ease: "power2.out", clearProps: "opacity,visibility" }, 1.0);

      if (video) {
        // iOS low power mode can reject play even for a muted video.
        video.play().catch(() => video.load());
      }
    });


    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(shell, { autoAlpha: 1 });
      video?.pause();
      video?.load();
    });

    return () => media.revert();
  }, { scope: shellRef });

  return <div className="page-shell" ref={shellRef}>{children}</div>;
}