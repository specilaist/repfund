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
      <HomeTabs />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
