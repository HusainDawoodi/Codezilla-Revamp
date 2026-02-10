import AboutHero from "@/components/who-we-are/AboutHero";
import AboutSolutions from "@/components/who-we-are/AboutSolutions";
import AboutExperts from "@/components/who-we-are/AboutExperts";
import AboutCulture from "@/components/who-we-are/AboutCulture";
import AboutSuccess from "@/components/who-we-are/AboutSuccess";
import AboutJourney from "@/components/who-we-are/AboutJourney";
import AboutCoreValues from "@/components/who-we-are/AboutCoreValues";
import AboutContact from "@/components/who-we-are/AboutContact";

export const metadata = {
  title: "About Us | Codezilla - Software Development & Innovation Agency",
  description:
    "Learn about Codezilla, our mission, experts, and the journey that shaped us into a leading software development and innovation agency.",
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutSolutions />
      <AboutExperts />
      <AboutCulture />
      <AboutSuccess />
      <AboutJourney />
      <AboutCoreValues />
      <AboutContact />
    </main>
  );
}
