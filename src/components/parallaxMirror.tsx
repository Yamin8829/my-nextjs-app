"use client";
import { ParallaxBannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

export default function ParallaxMirror() {
  {
    const appBarStyle = {
      backgroundAttachment: "fixed",
    };
    return (
      <>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(http://localhost:3000/images/fbg2.jpg)`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Tujuan pendidikan itu untuk mempertajam kecerdasan, memperkukuh
                kemauan, dan memperhalus perasaan.
              </p>

              <Link href="/album" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
