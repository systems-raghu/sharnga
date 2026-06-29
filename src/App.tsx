/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LoadingFallback } from "./components/LoadingFallback";

// New design sections
const TrustStrip = React.lazy(() => import("./components/TrustStrip").then(m => ({ default: m.TrustStrip })));
const HowItWorks = React.lazy(() => import("./components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const LiveDemo = React.lazy(() => import("./components/LiveDemo").then(m => ({ default: m.LiveDemo })));
const Results = React.lazy(() => import("./components/Results").then(m => ({ default: m.Results })));
const Comparison = React.lazy(() => import("./components/Comparison").then(m => ({ default: m.Comparison })));
const Integrations = React.lazy(() => import("./components/Integrations").then(m => ({ default: m.Integrations })));
const Pricing = React.lazy(() => import("./components/Pricing").then(m => ({ default: m.Pricing })));
const FAQ = React.lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const Footer = React.lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

// Removed or replaced sections:
// - PainSection
// - WallOfLove
// - ValueProps

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <TrustStrip />
          <HowItWorks />
          <LiveDemo />
          <Results />
          <Comparison />
          <Integrations />
          <Pricing />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
