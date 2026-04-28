import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { HowIBuildSection } from "@/components/sections/how-i-build"
import { AISection } from "@/components/sections/ai-section"
import { StatsSection } from "@/components/sections/stats"
import { TeachingSection } from "@/components/sections/teaching"
import { InterestsSection } from "@/components/sections/interests"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <HowIBuildSection />
      <AISection />
      <StatsSection />
      <TeachingSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
