import { Hero } from "@/components/sections/Hero";
import { WhyStatusMatters } from "@/components/sections/WhyStatusMatters";
import { JoinDiscoverConnect } from "@/components/sections/JoinDiscoverConnect";
import { MembershipBenefits } from "@/components/sections/MembershipBenefits";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * La Vie Lounge Landing Page
 * A single-page experience for the private business club
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyStatusMatters />
      <JoinDiscoverConnect />
      <MembershipBenefits />
      <FAQ />
      <FinalCTA />
    </>
  );
}
