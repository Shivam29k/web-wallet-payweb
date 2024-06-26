"use client"

import CardsLandingPage from "./components/Landing Page/CardsLandingPage";
import {TilesBg} from "./components/Landing Page/tile";
import { NavLandingPage } from "./components/Landing Page/NavLandingPage";
import LandingPageTitle from "./components/Landing Page/LandingPageTitle";

export default function Page() {
  return (
    <>
      <main>
        <div className="w-full relative">
          <NavLandingPage />
          <TilesBg />
          <LandingPageTitle />
        </div>
        <CardsLandingPage />
        <div className="h-[100vh]">

        </div>
      </main>
    </>
  );
}

