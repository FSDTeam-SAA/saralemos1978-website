import FAQ from "@/components/ReusableSection/FAQ";

import Review from "@/components/ReusableSection/Review";
import HaveAQuestion from "@/components/website/home/HaveAQuestion";

import HowToWork from "@/components/website/home/HowToWork";
import Subscription from "@/components/website/home/Subscription";
import WhyChooseUs from "@/components/website/home/WhyChooseUs";
import Banner from "@/components/website/PageSections/HomePage/Banner";

export default function page() {
  return (
    <div>
      <Banner />
      <HowToWork />
      <WhyChooseUs />

      <Subscription />
      <Review />
      <FAQ />
      <HaveAQuestion />
    </div>
  );
}
