"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Sparkles,
  Heart,
  Star,
  Zap,
  Rocket,
  Check,
  X,
  Bell,
  Mail,
  Download,
  Upload,
  Loader2,
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AnimatedUIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-pulse">
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                30+ Animated Components
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Animated UI <span className="text-primary">Components</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Beautiful micro-interactions, hover effects, and animated components to make your UI come alive
            </p>
          </div>

          {/* Components Showcase */}
          <div className="space-y-16">
            {/* Animated Buttons */}
            <Section
              title="Animated Buttons"
              description="Buttons with delightful hover effects and animations"
              Component={AnimatedButtons}
            />

            {/* Loading Animations */}
            <Section
              title="Loading Animations"
              description="Various loading spinners and progress indicators"
              Component={LoadingAnimations}
            />

            {/* Hover Cards */}
            <Section
              title="Hover Cards"
              description="Cards with stunning hover effects and transitions"
              Component={HoverCards}
            />

            {/* Animated Icons */}
            <Section
              title="Animated Icons"
              description="Interactive icon animations and effects"
              Component={AnimatedIcons}
            />

            {/* Toast Notifications */}
            <Section
              title="Toast Notifications"
              description="Animated notification toasts with various styles"
              Component={ToastNotifications}
            />

            {/* Skeleton Loaders */}
            <Section
              title="Skeleton Loaders"
              description="Content placeholder animations"
              Component={SkeletonLoaders}
            />

            {/* Progress Indicators */}
            <Section
              title="Progress Indicators"
              description="Animated progress bars and circular progress"
              Component={ProgressIndicators}
            />

            {/* Count Up Animation */}
            <Section
              title="Count Up Animations"
              description="Animated number counters and statistics"
              Component={CountUpAnimation}
            />

            {/* Accordion with Animation */}
            <Section
              title="Animated Accordions"
              description="Smooth expanding and collapsing accordions"
              Component={AnimatedAccordions}
            />

            {/* Floating Action Button */}
            <Section
              title="Floating Action Buttons"
              description="FAB with expanding menu animations"
              Component={FloatingActionButtons}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({
  title,
  description,
  Component,
}: {
  title: string
  description: string
  Component: React.ComponentType
}) {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Card className="p-8 bg-gradient-to-br from-muted/30 to-muted/10">
        <Component />
      </Card>
    </div>
  )
}

// ============= ANIMATED COMPONENTS =============

function AnimatedButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Gradient Shimmer */}
      <Button className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white transition-all duration-500 animate-shimmer">
        <Sparkles className="h-4 w-4 mr-2" />
        Shimmer Effect
      </Button>

      {/* Scale on Hover */}
      <Button className="transition-transform hover:scale-110 bg-primary text-primary-foreground">
        <Rocket className="h-4 w-4 mr-2" />
        Scale Up
      </Button>

      {/* Bounce on Hover */}
      <Button className="hover:animate-bounce bg-accent text-accent-foreground">
        <Zap className="h-4 w-4 mr-2" />
        Bounce
      </Button>

      {/* Rotate Icon */}
      <Button className="group bg-chart-3 text-white">
        <Star className="h-4 w-4 mr-2 transition-transform group-hover:rotate-180 duration-500" />
        Rotate Icon
      </Button>

      {/* Slide Arrow */}
      <Button className="group bg-gradient-to-r from-chart-4 to-chart-5 text-white">
        Slide Arrow
        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1 duration-300" />
      </Button>

      {/* Pulse Ring */}
      <Button className="relative bg-destructive text-destructive-foreground">
        <span className="absolute inset-0 rounded-md animate-ping opacity-20 bg-destructive" />
        <span className="relative flex items-center">
          <Bell className="h-4 w-4 mr-2" />
          Pulse Ring
        </span>
      </Button>

      {/* Gradient Border */}
      <div className="relative p-[2px] rounded-md bg-gradient-to-r from-primary via-accent to-chart-3 animate-shimmer bg-[length:200%_100%]">
        <Button className="bg-background hover:bg-transparent transition-colors">Gradient Border</Button>
      </div>

      {/* Success Check */}
      <Button className="group bg-success text-white">
        <Check className="h-4 w-4 mr-2 transition-transform group-hover:scale-125 duration-300" />
        Success
      </Button>
    </div>
  )
}

function LoadingAnimations() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      {/* Spinner */}
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
        <p className="text-xs text-muted-foreground">Classic Spinner</p>
      </div>

      {/* Dots */}
      <div className="text-center">
        <div className="flex gap-2 mb-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-3 h-3 bg-chart-3 rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
        <p className="text-xs text-muted-foreground">Bouncing Dots</p>
      </div>

      {/* Pulse Circles */}
      <div className="text-center">
        <div className="relative w-12 h-12 mx-auto mb-2">
          <div className="absolute inset-0 rounded-full bg-primary animate-ping" />
          <div className="absolute inset-2 rounded-full bg-primary" />
        </div>
        <p className="text-xs text-muted-foreground">Pulse Circles</p>
      </div>

      {/* Bars */}
      <div className="text-center">
        <div className="flex items-end gap-1 h-12 mb-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 bg-primary rounded-t animate-pulse"
              style={{
                height: "60%",
                animationDelay: `${i * 0.1}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Loading Bars</p>
      </div>

      {/* Gradient Ring */}
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-transparent border-t-primary border-r-accent animate-spin mx-auto mb-2" />
        <p className="text-xs text-muted-foreground">Gradient Ring</p>
      </div>

      {/* Progress Bar */}
      <div className="text-center flex-1 min-w-[200px]">
        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse rounded-full w-3/4" />
        </div>
        <p className="text-xs text-muted-foreground">Progress Bar</p>
      </div>
    </div>
  )
}

function HoverCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Lift on Hover */}
      <Card className="p-6 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
        <Sparkles className="h-8 w-8 text-primary mb-4" />
        <h3 className="font-bold mb-2">Lift Effect</h3>
        <p className="text-sm text-muted-foreground">Card lifts up on hover</p>
      </Card>

      {/* Tilt Effect */}
      <Card className="p-6 transition-all hover:rotate-2 hover:scale-105 hover:shadow-xl cursor-pointer">
        <Rocket className="h-8 w-8 text-accent mb-4" />
        <h3 className="font-bold mb-2">Tilt & Scale</h3>
        <p className="text-sm text-muted-foreground">Card tilts and scales</p>
      </Card>

      {/* Border Glow */}
      <Card className="p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/50 cursor-pointer">
        <Zap className="h-8 w-8 text-chart-3 mb-4" />
        <h3 className="font-bold mb-2">Border Glow</h3>
        <p className="text-sm text-muted-foreground">Glowing border effect</p>
      </Card>

      {/* Gradient Overlay */}
      <Card className="p-6 relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Star className="h-8 w-8 text-warning relative z-10 mb-4" />
        <h3 className="font-bold mb-2 relative z-10">Gradient Overlay</h3>
        <p className="text-sm text-muted-foreground relative z-10">Gradient appears on hover</p>
      </Card>

      {/* Expand Effect */}
      <Card className="p-6 transition-all hover:scale-110 hover:z-10 cursor-pointer">
        <Heart className="h-8 w-8 text-destructive mb-4" />
        <h3 className="font-bold mb-2">Expand</h3>
        <p className="text-sm text-muted-foreground">Card expands uniformly</p>
      </Card>

      {/* Shine Effect */}
      <Card className="p-6 relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Check className="h-8 w-8 text-success relative z-10 mb-4" />
        <h3 className="font-bold mb-2 relative z-10">Shine Effect</h3>
        <p className="text-sm text-muted-foreground relative z-10">Light shines across</p>
      </Card>
    </div>
  )
}

function AnimatedIcons() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      {/* Beating Heart */}
      <div className="text-center">
        <Heart className="h-12 w-12 text-red-500 mx-auto mb-2 animate-pulse" />
        <p className="text-xs text-muted-foreground">Beating Heart</p>
      </div>

      {/* Spinning Star */}
      <div className="text-center">
        <Star className="h-12 w-12 text-yellow-500 mx-auto mb-2 animate-spin" style={{ animationDuration: "3s" }} />
        <p className="text-xs text-muted-foreground">Spinning Star</p>
      </div>

      {/* Bouncing Bell */}
      <div className="text-center">
        <Bell className="h-12 w-12 text-primary mx-auto mb-2 animate-bounce" />
        <p className="text-xs text-muted-foreground">Bouncing Bell</p>
      </div>

      {/* Shaking Mail */}
      <div className="text-center">
        <Mail className="h-12 w-12 text-accent mx-auto mb-2 hover:animate-bounce" />
        <p className="text-xs text-muted-foreground">Hover to Shake</p>
      </div>

      {/* Floating Rocket */}
      <div className="text-center">
        <Rocket className="h-12 w-12 text-chart-3 mx-auto mb-2 animate-float" />
        <p className="text-xs text-muted-foreground">Floating Rocket</p>
      </div>

      {/* Pulsing Zap */}
      <div className="text-center">
        <div className="relative inline-block">
          <Zap className="h-12 w-12 text-warning relative z-10" />
          <div className="absolute inset-0 animate-ping">
            <Zap className="h-12 w-12 text-warning opacity-75" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Pulsing Zap</p>
      </div>

      {/* Download Arrow */}
      <div className="text-center">
        <Download className="h-12 w-12 text-success mx-auto mb-2 animate-bounce" />
        <p className="text-xs text-muted-foreground">Downloading</p>
      </div>

      {/* Upload Arrow */}
      <div className="text-center">
        <Upload className="h-12 w-12 text-blue-500 mx-auto mb-2 animate-bounce [animation-direction:reverse]" />
        <p className="text-xs text-muted-foreground">Uploading</p>
      </div>
    </div>
  )
}

function ToastNotifications() {
  const [toasts, setToasts] = useState<Array<{ id: number; type: string; message: string }>>([])

  const showToast = (type: string, message: string) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, type, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8">
        <Button
          onClick={() => showToast("success", "Action completed successfully!")}
          className="bg-success text-white"
        >
          <Check className="h-4 w-4 mr-2" />
          Show Success
        </Button>
        <Button onClick={() => showToast("error", "Something went wrong!")} className="bg-destructive">
          <X className="h-4 w-4 mr-2" />
          Show Error
        </Button>
        <Button onClick={() => showToast("info", "Here's some information")} className="bg-primary">
          <Bell className="h-4 w-4 mr-2" />
          Show Info
        </Button>
        <Button onClick={() => showToast("warning", "Warning: Check this out")} className="bg-warning text-black">
          <Zap className="h-4 w-4 mr-2" />
          Show Warning
        </Button>
      </div>

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Card
            key={toast.id}
            className={cn(
              "p-4 min-w-[300px] animate-fade-in shadow-lg flex items-center gap-3",
              toast.type === "success" && "border-success bg-success/10",
              toast.type === "error" && "border-destructive bg-destructive/10",
              toast.type === "info" && "border-primary bg-primary/10",
              toast.type === "warning" && "border-warning bg-warning/10",
            )}
          >
            {toast.type === "success" && <Check className="h-5 w-5 text-success" />}
            {toast.type === "error" && <X className="h-5 w-5 text-destructive" />}
            {toast.type === "info" && <Bell className="h-5 w-5 text-primary" />}
            {toast.type === "warning" && <Zap className="h-5 w-5 text-warning" />}
            <p className="text-sm font-medium flex-1">{toast.message}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SkeletonLoaders() {
  return (
    <div className="space-y-6">
      {/* Card Skeleton */}
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-muted animate-pulse rounded w-1/3" />
            <div className="h-3 bg-muted animate-pulse rounded w-1/2" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-muted animate-pulse rounded" />
          <div className="h-3 bg-muted animate-pulse rounded w-5/6" />
          <div className="h-3 bg-muted animate-pulse rounded w-4/6" />
        </div>
      </Card>

      {/* List Skeleton */}
      <Card className="p-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
            <div className="w-10 h-10 rounded bg-muted animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-muted animate-pulse rounded w-2/3" />
              <div className="h-2 bg-muted animate-pulse rounded w-1/2" />
            </div>
            <div className="w-16 h-8 bg-muted animate-pulse rounded" />
          </div>
        ))}
      </Card>
    </div>
  )
}

function ProgressIndicators() {
  const [progress, setProgress] = useState(65)

  return (
    <div className="space-y-8">
      {/* Linear Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Linear Progress</span>
          <span className="text-sm font-bold">{progress}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Striped Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Striped Progress</span>
          <span className="text-sm font-bold">{progress}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{
              width: `${progress}%`,
              backgroundImage:
                "linear-gradient(45deg, rgba(255,255,255,.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.2) 50%, rgba(255,255,255,.2) 75%, transparent 75%, transparent)",
              backgroundSize: "1rem 1rem",
            }}
          />
        </div>
      </div>

      {/* Circular Progress */}
      <div className="flex items-center justify-center gap-8">
        {[35, 65, 85].map((value) => (
          <div key={value} className="relative w-24 h-24">
            <svg className="w-full h-full -rotate-90">
              <circle cx="48" cy="48" r="40" className="stroke-muted fill-none" strokeWidth="8" />
              <circle
                cx="48"
                cy="48"
                r="40"
                className="stroke-primary fill-none transition-all duration-500"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - value / 100)}`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold">{value}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Control */}
      <div className="flex items-center gap-4 justify-center">
        <Button onClick={() => setProgress(Math.max(0, progress - 10))} variant="outline" size="sm">
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium w-16 text-center">{progress}%</span>
        <Button onClick={() => setProgress(Math.min(100, progress + 10))} variant="outline" size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function CountUpAnimation() {
  const stats = [
    { label: "Happy Clients", value: 1240, suffix: "+" },
    { label: "Projects Done", value: 856, suffix: "" },
    { label: "Success Rate", value: 98, suffix: "%" },
    { label: "Team Members", value: 42, suffix: "" },
  ]

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <Card key={stat.label} className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
            {stat.value}
            {stat.suffix}
          </div>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </Card>
      ))}
    </div>
  )
}

function AnimatedAccordions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    { title: "What is ComponentHub?", content: "ComponentHub is a comprehensive library of beautiful UI components." },
    { title: "How do I use components?", content: "Simply copy the code and paste it into your React project." },
    { title: "Is it free?", content: "Yes! All components are completely free to use in your projects." },
  ]

  return (
    <div className="space-y-3 max-w-2xl">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown
              className={cn("h-5 w-5 transition-transform duration-300", openIndex === index && "rotate-180")}
            />
          </button>
          <div
            className={cn("overflow-hidden transition-all duration-300", openIndex === index ? "max-h-32" : "max-h-0")}
          >
            <div className="p-4 pt-0 text-sm text-muted-foreground">{item.content}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}

function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { icon: Mail, label: "Email", color: "bg-blue-500" },
    { icon: Bell, label: "Notifications", color: "bg-purple-500" },
    { icon: Star, label: "Favorites", color: "bg-yellow-500" },
  ]

  return (
    <div className="relative h-64 flex items-end justify-center">
      {/* Action Buttons */}
      {isOpen &&
        actions.map((action, i) => (
          <div
            key={action.label}
            className="absolute bottom-20 animate-fade-in"
            style={{
              animationDelay: `${i * 0.1}s`,
              transform: `translateY(-${(i + 1) * 60}px)`,
            }}
          >
            <button
              className={cn(
                "w-12 h-12 rounded-full text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center",
                action.color,
              )}
              title={action.label}
            >
              <action.icon className="h-5 w-5" />
            </button>
          </div>
        ))}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center relative z-10",
          isOpen && "rotate-45",
        )}
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  )
}
