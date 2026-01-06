import { Hero } from "@/components/sections/Hero";
import { WhyStatusMatters } from "@/components/sections/WhyStatusMatters";
import { Gallery } from "@/components/sections/Gallery";
import { MeetTheTeam } from "@/components/sections/MeetTheTeam";
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
      <Gallery />
      <MeetTheTeam />
      <JoinDiscoverConnect />
      <MembershipBenefits />
      <FAQ />
      <FinalCTA />
    </>
  );
}
