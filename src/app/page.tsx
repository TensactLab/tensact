import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WorkWithUs } from "@/components/sections/WorkWithUs";
import { MediaOrbit } from "@/components/media-orbit/MediaOrbit";
import { ConnectionLines } from "@/components/visual/ConnectionLines";
import { TechnicalGrid } from "@/components/visual/TechnicalGrid";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="shell" id="home">
        <div className="stage">
          <TechnicalGrid />
          <div className="col-left">
            <WhatWeDo />
            <WorkWithUs />
          </div>
          <div className="orbit-col">
            <MediaOrbit />
            <ConnectionLines />
          </div>
          <div className="col-right">
            <WhoWeAre />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
