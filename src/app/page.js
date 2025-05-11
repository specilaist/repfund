import Image from "next/image";
// import '@/styles/globals.css';
import NavBar from "../components/navbar.jsx";
import Banner from "@/components/banner.jsx";
import HomeTabs from "@/components/Tabs/homeTabs.jsx";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
      <Banner/>
      <div class="text-amber-950 text-center border-4 border-white px-18 py-10">
        <h1 class="text-4xl text-decoration: underline">
          What We Do:
        </h1>
        <br></br>
        <p class="text-2xl">
        The Rep Fund is a a non profit centered around Real Effective Politics to REPresent political concerns of the many, the voiceless, and the uniformed. What that means is we finds problems affecting a majority of constituents and devise REAL solutions for those problems. Whether it be Housing, Fair Pay, Civil Rights and even International Relations, the REP Fund is here to lobby and fight for the will of the majority.
        </p>
      </div>
      <HomeTabs />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-dGreen">
      © REP Fund 2023 Oakland, CA -  info@repfund.org - @rep_fund

      </footer>
    </div>
  );
}
