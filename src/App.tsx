/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LoadingFallback } from "./components/LoadingFallback";

const PainSection = React.lazy(() => import("./components/PainSection").then(m => ({ default: m.PainSection })));
const WallOfLove = React.lazy(() => import("./components/WallOfLove").then(m => ({ default: m.WallOfLove })));
const ValueProps = React.lazy(() => import("./components/ValueProps").then(m => ({ default: m.ValueProps })));
const HowItWorks = React.lazy(() => import("./components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const Pricing = React.lazy(() => import("./components/Pricing").then(m => ({ default: m.Pricing })));
const FAQ = React.lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const Footer = React.lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setShouldLoad(true);
    } else {
      const handleLoad = () => setShouldLoad(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {shouldLoad && (
          <Suspense fallback={<LoadingFallback />}>
            <PainSection />
            <WallOfLove />
            <ValueProps />
            <HowItWorks />
            <Pricing />
            <FAQ />
          </Suspense>
        )}
      </main>
      {shouldLoad && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}
