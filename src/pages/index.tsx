import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import NewestProgram from "@/components/NewestProgram";
import OurDiff from "@/components/OurDiff";
import LearningPath from "@/components/LearningPath";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import GetStarted from "@/components/GetStarted";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <NewestProgram />
      <OurDiff />
      <LearningPath />
      <About />
      <Services />
      <Testimonials />
      <GetStarted />
      <ContactUs />
      <Footer />
    </div>
  );
}
