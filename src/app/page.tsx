import { Header } from "@/components/header/header";
import Banner from "@/sections/banner/banner";
import { Reason } from "@/sections/reason/reason";
import { About } from "@/sections/about-us/about-us";
import { Plans } from "@/sections/plans/plans";
import { Reviews } from "@/sections/reviews/reviews";
import Mission from "@/sections/mission/mission";
import { BagShoppingProvider } from "@/components/bag/context/bag-context";
import { PlanDetails } from "@/components/bag/plan-details";

export default function Home() {
  return (
    <BagShoppingProvider>
      <Header />
      <main>
        <Mission />
        <Plans />
        <Reviews />
        <Banner />
        <Reason />
        <About />

        <PlanDetails />
      </main>
    </BagShoppingProvider>
  );
}
