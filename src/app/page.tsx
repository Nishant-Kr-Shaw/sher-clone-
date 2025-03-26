import HeroSection from "@/components/home/HeroSection";
import CourseSection from "@/components/home/CourseSection";
import CompaniesSection from "@/components/home/CompaniesSection";
import HoliOfferPopup from "@/components/home/HoliOfferPopup";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CourseSection />
      <CompaniesSection />
      <HoliOfferPopup />
    </div>
  );
}
