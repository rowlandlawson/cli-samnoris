import ContactPage from "./components/Contact";
import { SignatureExperience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { RoomsCarousel } from "./components/rooms/RoomsCarousel";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <RoomsCarousel />
      <SignatureExperience />
      <Testimonials />
      <ContactPage/>
    </div>
  );
}
