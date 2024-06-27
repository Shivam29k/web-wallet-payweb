import CardsLandingPage from "./components/Landing Page/CardsLandingPage";
import { TilesBg } from "./components/Landing Page/tile";
import { NavLandingPage } from "./components/Landing Page/NavLandingPage";
import LandingPageTitle from "./components/Landing Page/LandingPageTitle";
import { TechUsed } from "./components/Landing Page/TechUsed";
import { Fotter } from "./components/Landing Page/Fotter";


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

        <section className="h-[93vh] relative">
          <div className="min-h-[43vh] bg-neutral-100">
            <CurveSVG className="fill-[#8969ce]" />
            <TechUsed />
          </div>
          <div className="min-h-[50vh] bg-[#8969ce] ">
            <CurveSVG className="fill-neutral-100" />     
            <Fotter />       
          </div>
        </section>
      </main>
    </>
  );
}





function CurveSVG({ className }: { className: string }) {
  return (
    <svg
      className=""
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className={className}
      ></path>
    </svg>
  );
}

