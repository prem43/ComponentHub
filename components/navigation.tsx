"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "UI Components", href: "/ui-components" },
  { name: "Login & Signup", href: "/auth-gallery" },
  { name: "Dashboards", href: "/dashboards" },
  { name: "Animated UI", href: "/animated-ui" },
  { name: "Icons", href: "/icons" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              ComponentHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "transition-all",
                    pathname === item.href && "bg-primary/20 text-primary hover:bg-primary/30",
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground mt-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
