import { Header } from "@/components/header/header";
import Banner from "@/sections/banner/banner";
import { Reason } from "@/sections/reason/reason";
import { About } from "@/sections/about-us/about-us";
import { Plans } from "@/sections/plans/plans";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />

        <Reason />

        <About />

        <Plans />
      </main>
    </>
  );
}
