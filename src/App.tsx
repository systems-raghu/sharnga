/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LoadingFallback } from "./components/LoadingFallback";

// New design sections
import { TrustStrip } from "./components/TrustStrip";
import { HowItWorks } from "./components/HowItWorks";
import { LiveDemo } from "./components/LiveDemo";
import { Results } from "./components/Results";
import { Comparison } from "./components/Comparison";
import { Integrations } from "./components/Integrations";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

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
        <TrustStrip />
        <HowItWorks />
        <LiveDemo />
        <Results />
        <Comparison />
        <Integrations />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
