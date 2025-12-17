import { cn } from "@/lib/utils"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Palette, Layout, Gauge, Sparkles, ArrowRight, Code2, Zap, Package, Lock, Wand2 } from "lucide-react"

export default function HomePage() {
  const categories = [
    {
      title: "UI Components",
      description: "Beautiful buttons, cards, inputs, modals, and more with animations",
      icon: Palette,
      href: "/ui-components",
      gradient: "from-primary to-accent",
      items: "50+ Components",
    },
    {
      title: "Login & Signup Gallery",
      description: "20+ stunning animated login and signup page designs ready to use",
      icon: Lock,
      href: "/auth-gallery",
      gradient: "from-accent to-chart-3",
      items: "25+ Templates",
    },
    {
      title: "Dashboard Layouts",
      description: "Complete admin and user dashboard templates with charts and analytics",
      icon: Gauge,
      href: "/dashboards",
      gradient: "from-chart-3 to-chart-4",
      items: "15+ Dashboards",
    },
    {
      title: "Animated UI",
      description: "Micro-interactions, transitions, and animated components that wow",
      icon: Wand2,
      href: "/animated-ui",
      gradient: "from-chart-4 to-chart-5",
      items: "30+ Animations",
    },
    {
      title: "Icon Library",
      description: "Comprehensive icon collection with search and copy functionality",
      icon: Sparkles,
      href: "/icons",
      gradient: "from-chart-5 to-primary",
      items: "1000+ Icons",
    },
  ]

  const features = [
    {
      icon: Code2,
      title: "Copy & Paste",
      description: "All components come with clean, readable code you can copy instantly",
    },
    {
      icon: Zap,
      title: "Animated",
      description: "Smooth animations and transitions built-in for better UX",
    },
    {
      icon: Package,
      title: "Production Ready",
      description: "Built with Next.js, React, and TypeScript following best practices",
    },
    {
      icon: Layout,
      title: "Responsive",
      description: "All components are fully responsive and mobile-friendly",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-fade-in">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Premium Component Library ✨
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up">
            Build Beautiful Web Apps
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-chart-3 bg-[length:200%_auto] animate-shimmer">
              That Users Love
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up [animation-delay:100ms]">
            150+ beautifully designed, animated components with code examples. Including 25+ login/signup templates, 15+
            dashboards, and interactive UI elements. Copy, paste, and make users happy.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up [animation-delay:200ms]">
            <Link href="/auth-gallery">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground group"
              >
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboards">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                View Dashboards
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground animate-fade-in-up [animation-delay:300ms]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-success/20">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>TypeScript Support</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Dark Mode Ready</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-chart-3/20">
              <div className="w-2 h-2 rounded-full bg-chart-3 animate-pulse" />
              <span>150+ Components</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Explore Component Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Each category is carefully crafted with live previews and production-ready code
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link key={category.href} href={category.href}>
                  <Card
                    className="p-6 h-full hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 group animate-fade-in-up cursor-pointer relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity",
                        category.gradient,
                      )}
                    />

                    <div className="relative">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                          `bg-gradient-to-br ${category.gradient}`,
                        )}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-primary">{category.items}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why ComponentHub?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern web applications faster
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="text-center animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:border-primary/50 transition-all group-hover:scale-110">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-chart-3/10" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Start exploring our component library and create delightful experiences for your users
          </p>
          <Link href="/auth-gallery">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground group"
            >
              Start Building Now
              <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p className="font-medium">Built with Next.js, React, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">© 2025 ComponentHub. All components are free to use in your projects.</p>
        </div>
      </footer>
    </div>
  )
}
