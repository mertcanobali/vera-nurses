import { useTranslations } from "next-intl";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import AppointmentForm from "@/components/home/AppointmentForm";
import WhyUs from "@/components/home/WhyUs";
import AboutCompany from "@/components/home/AboutCompany";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhyUs />
      <AboutCompany />
      <Services />
      <Process />
      <AppointmentForm />
    </div>
  );
}
