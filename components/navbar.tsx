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

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (!section) return

    const offset = 80

    window.scrollTo({
      top:
        section.getBoundingClientRect().top +
        window.pageYOffset -
        offset,
      behavior: "smooth",
    })

    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        style={{
          paddingTop: "env(safe-area-inset-top)",
        }}
        className="relative mx-auto w-[92%] max-w-7xl sm:w-[95%] md:w-[96%] lg:w-full"
      >
        <div className="flex h-16 items-center justify-between sm:h-[72px]">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-bold tracking-tight transition-colors hover:text-primary sm:text-xl lg:text-2xl"
          >
            SK<span className="text-primary">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:text-base"
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
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="h-11 w-11 rounded-xl md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full mt-2 origin-top rounded-2xl border border-border bg-background/95 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full rounded-xl px-4 py-3 text-left text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
