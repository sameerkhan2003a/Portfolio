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
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8 xl:px-10">
        <div className="flex h-16 sm:h-[72px] items-center justify-between">
          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="text-base font-bold tracking-tight transition-colors hover:text-primary sm:text-xl lg:text-2xl"
          >
            SK<span className="text-primary">.</span>
          </button>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
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

          {/* Mobile */}

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
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "max-h-96 pb-3 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full rounded-xl px-4 py-3 text-left text-base font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
