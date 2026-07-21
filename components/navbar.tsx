"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const navbarOffset = 80

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset

    window.scrollTo({
      top: y,
      behavior: "smooth",
    })

    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            SK<span className="text-primary">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative group text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 overflow-hidden rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-lg">
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full px-5 py-3 text-left text-base font-medium text-muted-foreground transition-all hover:bg-muted/50 hover:text-foreground"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
