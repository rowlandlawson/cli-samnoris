import { Contact } from "./components/Contact";
import { SpaSection } from "./components/Experience";
import { Hero } from "./components/Hero";
import RoomGridClient from "./components/rooms/RoomsCarousel";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <RoomGridClient />
      <SpaSection />
      <Contact />
    </div>
  );
}
