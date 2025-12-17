"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  Mail,
  Eye,
  EyeOff,
  Github,
  Chrome,
  ArrowRight,
  Sparkles,
  Phone,
  Check,
  Fingerprint,
  Zap,
  Shield,
  Heart,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CompleteCodeBlock } from "@/components/complete-code-block"

export default function AuthGalleryPage() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)

  const authDesigns = [
    {
      id: "gradient-wave",
      name: "Gradient Wave",
      category: "modern",
      Component: GradientWaveLogin,
    },
    {
      id: "glassmorphic",
      name: "Glassmorphic Blur",
      category: "modern",
      Component: GlassmorphicLogin,
    },
    {
      id: "minimalist-centered",
      name: "Minimalist Centered",
      category: "minimal",
      Component: MinimalistCenteredLogin,
    },
    {
      id: "split-screen",
      name: "Split Screen Hero",
      category: "modern",
      Component: SplitScreenLogin,
    },
    {
      id: "animated-bg",
      name: "Animated Background",
      category: "animated",
      Component: AnimatedBgLogin,
    },
    {
      id: "neon-glow",
      name: "Neon Glow",
      category: "futuristic",
      Component: NeonGlowLogin,
    },
    {
      id: "card-hover",
      name: "3D Card Hover",
      category: "animated",
      Component: CardHoverLogin,
    },
    {
      id: "social-first",
      name: "Social First",
      category: "minimal",
      Component: SocialFirstLogin,
    },
    {
      id: "elegant-sidebar",
      name: "Elegant Sidebar",
      category: "modern",
      Component: ElegantSidebarLogin,
    },
    {
      id: "floating-labels",
      name: "Floating Labels",
      category: "animated",
      Component: FloatingLabelsLogin,
    },
    {
      id: "gradient-border",
      name: "Gradient Border",
      category: "modern",
      Component: GradientBorderLogin,
    },
    {
      id: "dark-elegant",
      name: "Dark Elegant",
      category: "minimal",
      Component: DarkElegantLogin,
    },
    {
      id: "multi-step",
      name: "Multi-Step Signup",
      category: "complex",
      Component: MultiStepSignup,
    },
    {
      id: "biometric",
      name: "Biometric Auth",
      category: "futuristic",
      Component: BiometricLogin,
    },
    {
      id: "gradient-mesh",
      name: "Gradient Mesh",
      category: "modern",
      Component: GradientMeshLogin,
    },
    {
      id: "card-stack",
      name: "Card Stack",
      category: "animated",
      Component: CardStackLogin,
    },
    {
      id: "otp-verification",
      name: "OTP Verification",
      category: "complex",
      Component: OTPVerificationLogin,
    },
    {
      id: "neumorphic",
      name: "Neumorphic",
      category: "minimal",
      Component: NeumorphicLogin,
    },
    {
      id: "particle-bg",
      name: "Particle Background",
      category: "animated",
      Component: ParticleBgLogin,
    },
    {
      id: "slide-form",
      name: "Slide Form",
      category: "animated",
      Component: SlideFormLogin,
    },
    {
      id: "colorful-gradient",
      name: "Colorful Gradient",
      category: "modern",
      Component: ColorfulGradientLogin,
    },
    {
      id: "zen-minimal",
      name: "Zen Minimal",
      category: "minimal",
      Component: ZenMinimalLogin,
    },
    {
      id: "aurora-bg",
      name: "Aurora Background",
      category: "animated",
      Component: AuroraBgLogin,
    },
    {
      id: "wave-animation",
      name: "Wave Animation",
      category: "animated",
      Component: WaveAnimationLogin,
    },
    {
      id: "tech-grid",
      name: "Tech Grid",
      category: "futuristic",
      Component: TechGridLogin,
    },
  ]

  const categories = [
    { id: "all", label: "All Designs", count: authDesigns.length },
    { id: "modern", label: "Modern", count: authDesigns.filter((d) => d.category === "modern").length },
    { id: "minimal", label: "Minimal", count: authDesigns.filter((d) => d.category === "minimal").length },
    { id: "animated", label: "Animated", count: authDesigns.filter((d) => d.category === "animated").length },
    { id: "futuristic", label: "Futuristic", count: authDesigns.filter((d) => d.category === "futuristic").length },
    { id: "complex", label: "Advanced", count: authDesigns.filter((d) => d.category === "complex").length },
  ]

  const [activeCategory, setActiveCategory] = useState("all")

  const filteredDesigns =
    activeCategory === "all" ? authDesigns : authDesigns.filter((d) => d.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                25+ Unique Designs
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Login & Signup <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stunning, animated authentication forms. From minimalist to futuristic. Click any design to view and copy
              the code.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "transition-all",
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "hover:border-primary/50",
                )}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
              </Button>
            ))}
          </div>

          {/* Design Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesigns.map((design, index) => (
              <Card
                key={design.id}
                className="group overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedDemo(design.id)}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted p-4 flex items-center justify-center overflow-hidden relative">
                  <div className="scale-[0.35] origin-center w-[300%] h-[300%]">
                    <design.Component preview />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedDemo(design.id)
                      }}
                    >
                      View Code
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold group-hover:text-primary transition-colors">{design.name}</h3>
                  <p className="text-xs text-muted-foreground capitalize mt-1">{design.category}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Full Preview Modal */}
          {selectedDemo && (
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedDemo(null)}
            >
              <Card className="w-full max-w-6xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">{authDesigns.find((d) => d.id === selectedDemo)?.name}</h2>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedDemo(null)}>
                      Close
                    </Button>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3">Live Preview</h3>
                    <div className="rounded-lg border border-border overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                      <div className="p-8 flex items-center justify-center min-h-[500px]">
                        {authDesigns.find((d) => d.id === selectedDemo)?.Component({ preview: false })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Complete Code</h3>
                    <CompleteCodeBlock
                      componentName={authDesigns.find((d) => d.id === selectedDemo)?.name.replace(/\s/g, "") || "Login"}
                      componentCode={getAuthCode(selectedDemo)}
                      dependencies={[
                        "lucide-react",
                        "@/components/ui/card",
                        "@/components/ui/button",
                        "@/components/ui/input",
                      ]}
                      cssCode={getAuthCSS(selectedDemo)}
                      instructions="Copy this complete authentication component into your project. All imports, dependencies, and required CSS are included. Customize colors and content as needed."
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ============= AUTH COMPONENT DESIGNS =============

function GradientWaveLogin({ preview }: { preview?: boolean }) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-chart-3 p-1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-accent/50 to-chart-3/50 blur-2xl animate-pulse" />
        <div className="relative bg-background rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Welcome Back
            </h2>
            <p className="text-sm text-muted-foreground mt-2">Sign in to continue your journey</p>
          </div>

          <div className="space-y-4">
            <Input placeholder="Email" type="email" className="bg-muted/50" />
            <div className="relative">
              <Input placeholder="Password" type={showPassword ? "text" : "password"} className="bg-muted/50 pr-10" />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function GlassmorphicLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-3/20 blur-3xl rounded-full" />
      <Card className="relative backdrop-blur-xl bg-card/30 border-border/50 p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Glassmorphic Login</h2>
        <div className="space-y-4">
          <Input placeholder="Email" className="bg-background/50 backdrop-blur-sm" />
          <Input placeholder="Password" type="password" className="bg-background/50 backdrop-blur-sm" />
          <Button className="w-full bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-primary-foreground">
            Continue
          </Button>
        </div>
      </Card>
    </div>
  )
}

function MinimalistCenteredLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Sign In</h2>
        <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1.5 block">Email</label>
          <Input placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Password</label>
          <Input placeholder="••••••••" type="password" />
        </div>
        <Button className="w-full bg-foreground text-background hover:bg-foreground/90">Sign In</Button>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account? <button className="text-primary hover:underline font-medium">Sign up</button>
        </p>
      </div>
    </div>
  )
}

function SplitScreenLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 min-h-[600px] rounded-2xl overflow-hidden border border-border">
      <div className="bg-gradient-to-br from-primary via-accent to-chart-3 p-12 flex flex-col justify-center text-white">
        <Zap className="h-12 w-12 mb-6" />
        <h2 className="text-4xl font-bold mb-4">Start your journey with us</h2>
        <p className="text-white/80 text-lg">Join thousands of users who trust our platform every day</p>
      </div>
      <div className="bg-card p-12 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-6">Welcome back</h3>
        <div className="space-y-4">
          <Input placeholder="Email address" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 border-t border-border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              Github
            </Button>
            <Button variant="outline" size="sm">
              <Chrome className="h-4 w-4 mr-2" />
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimatedBgLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-float [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-chart-3/30 rounded-full blur-3xl animate-float [animation-delay:2s]" />
      </div>
      <Card className="relative p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Animated Login</h2>
        <div className="space-y-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
            Sign In
          </Button>
        </div>
      </Card>
    </div>
  )
}

function NeonGlowLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-8 bg-black/90 border-primary/50 shadow-lg shadow-primary/20">
        <div className="text-center mb-6">
          <div className="inline-block p-3 rounded-full bg-primary/20 border border-primary mb-4 shadow-lg shadow-primary/50">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Neon Access</h2>
          <p className="text-sm text-muted-foreground">Enter the digital realm</p>
        </div>
        <div className="space-y-4">
          <Input placeholder="Email" className="bg-black border-primary/30 text-white focus:border-primary" />
          <Input
            placeholder="Password"
            type="password"
            className="bg-black border-primary/30 text-white focus:border-primary"
          />
          <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold shadow-lg shadow-primary/50">
            Access System
          </Button>
        </div>
      </Card>
    </div>
  )
}

function CardHoverLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto perspective-1000">
      <Card className="p-8 transition-all hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-primary/20">
        <div className="text-center mb-6">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold">We missed you</h2>
          <p className="text-sm text-muted-foreground mt-2">Login to continue</p>
        </div>
        <div className="space-y-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Login</Button>
        </div>
      </Card>
    </div>
  )
}

function SocialFirstLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Quick Sign In</h2>
        <p className="text-sm text-muted-foreground mb-6 text-center">Choose your preferred method</p>
        <div className="space-y-3 mb-6">
          <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
            <Github className="h-5 w-5 mr-3" />
            Continue with GitHub
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
            <Chrome className="h-5 w-5 mr-3" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
            <Mail className="h-5 w-5 mr-3" />
            Continue with Email
          </Button>
        </div>
        <p className="text-xs text-center text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </Card>
    </div>
  )
}

function ElegantSidebarLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-5 min-h-[500px] rounded-2xl overflow-hidden border border-border bg-card">
      <div className="md:col-span-2 bg-gradient-to-br from-muted to-muted/50 p-8 flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-lg bg-primary mb-4" />
          <h3 className="text-lg font-bold">ComponentHub</h3>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            "This component library has transformed how we build interfaces. Absolutely love it!"
          </p>
          <p className="text-sm font-medium mt-4">— Sarah Chen, Lead Designer</p>
        </div>
      </div>
      <div className="md:col-span-3 p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
        <div className="space-y-4">
          <Input placeholder="Email address" />
          <Input placeholder="Password" type="password" />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <button className="text-primary hover:underline">Forgot password?</button>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign in</Button>
        </div>
      </div>
    </div>
  )
}

function FloatingLabelsLogin({ preview }: { preview?: boolean }) {
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Floating Labels</h2>
        <div className="space-y-6">
          <div className="relative">
            <Input
              onFocus={() => setEmailFocused(true)}
              onBlur={(e) => !e.target.value && setEmailFocused(false)}
              className="peer pt-6"
            />
            <label
              className={cn(
                "absolute left-3 transition-all pointer-events-none text-muted-foreground",
                emailFocused || "top-1/2 -translate-y-1/2",
                emailFocused && "top-2 text-xs text-primary",
              )}
            >
              Email Address
            </label>
          </div>
          <div className="relative">
            <Input
              type="password"
              onFocus={() => setPasswordFocused(true)}
              onBlur={(e) => !e.target.value && setPasswordFocused(false)}
              className="peer pt-6"
            />
            <label
              className={cn(
                "absolute left-3 transition-all pointer-events-none text-muted-foreground",
                passwordFocused || "top-1/2 -translate-y-1/2",
                passwordFocused && "top-2 text-xs text-primary",
              )}
            >
              Password
            </label>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
        </div>
      </Card>
    </div>
  )
}

function GradientBorderLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-chart-3">
        <Card className="p-8 bg-background rounded-2xl">
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Secure Login</h2>
          </div>
          <div className="space-y-4">
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button className="w-full bg-gradient-to-r from-primary via-accent to-chart-3 text-white hover:opacity-90">
              Sign In Securely
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function DarkElegantLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-black border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Welcome</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-white/60 mb-1.5 block">Email</label>
            <Input className="bg-white/5 border-white/10 text-white" placeholder="your@email.com" />
          </div>
          <div>
            <label className="text-sm text-white/60 mb-1.5 block">Password</label>
            <Input className="bg-white/5 border-white/10 text-white" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full bg-white text-black hover:bg-white/90 font-medium">Sign In</Button>
        </div>
      </div>
    </div>
  )
}

function MultiStepSignup({ preview }: { preview?: boolean }) {
  const [step, setStep] = useState(1)
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-8">
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                  s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                )}
              >
                {s < step ? <Check className="h-4 w-4" /> : s}
              </div>
              {s < 3 && <div className="w-12 h-0.5 bg-muted mx-2" />}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4">
          {step === 1 && "Account Details"}
          {step === 2 && "Personal Info"}
          {step === 3 && "Verify Email"}
        </h2>
        <div className="space-y-4">
          {step === 1 && (
            <>
              <Input placeholder="Email" />
              <Input placeholder="Password" type="password" />
            </>
          )}
          {step === 2 && (
            <>
              <Input placeholder="Full Name" />
              <Input placeholder="Phone Number" />
            </>
          )}
          {step === 3 && (
            <div className="text-center py-8">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Check your email for verification code</p>
            </div>
          )}
          <Button onClick={() => setStep(Math.min(3, step + 1))} className="w-full bg-primary text-primary-foreground">
            {step === 3 ? "Complete" : "Continue"}
          </Button>
        </div>
      </Card>
    </div>
  )
}

function BiometricLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-8">
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-primary/10 border-2 border-primary/20 mb-4 relative">
            <Fingerprint className="h-12 w-12 text-primary" />
            <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping" />
          </div>
          <h2 className="text-2xl font-bold">Biometric Login</h2>
          <p className="text-sm text-muted-foreground mt-2">Touch sensor to authenticate</p>
        </div>
        <div className="space-y-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Fingerprint className="h-5 w-5 mr-2" />
            Authenticate with Fingerprint
          </Button>
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 border-t border-border" />
          </div>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button variant="outline" className="w-full bg-transparent">
            Sign in with Password
          </Button>
        </div>
      </Card>
    </div>
  )
}

function GradientMeshLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 via-chart-3/30 to-chart-4/30 blur-3xl" />
      <Card className="relative p-8 backdrop-blur-sm bg-card/80">
        <h2 className="text-2xl font-bold mb-6 text-center">Gradient Mesh</h2>
        <div className="space-y-4">
          <Input placeholder="Email" className="backdrop-blur-sm" />
          <Input placeholder="Password" type="password" className="backdrop-blur-sm" />
          <Button className="w-full bg-gradient-to-r from-primary via-accent to-chart-3 text-white hover:opacity-90">
            Sign In
          </Button>
        </div>
      </Card>
    </div>
  )
}

function CardStackLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute top-2 left-2 right-2 h-full bg-primary/10 rounded-2xl -z-10" />
      <div className="absolute top-4 left-4 right-4 h-full bg-primary/5 rounded-2xl -z-20" />
      <Card className="p-8 relative">
        <h2 className="text-2xl font-bold mb-6">Stacked Login</h2>
        <div className="space-y-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
        </div>
      </Card>
    </div>
  )
}

function OTPVerificationLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-8">
        <div className="text-center mb-6">
          <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Verify Your Phone</h2>
          <p className="text-sm text-muted-foreground mt-2">Enter the 6-digit code sent to +1 (555) 123-4567</p>
        </div>
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Input key={i} className="w-12 h-12 text-center text-lg font-bold" maxLength={1} placeholder="•" />
          ))}
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Verify Code</Button>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Didn't receive code? <button className="text-primary hover:underline">Resend</button>
        </p>
      </Card>
    </div>
  )
}

function NeumorphicLogin({ preview }: { preview?: boolean }) {
  return (
    <div
      className="w-full max-w-md mx-auto p-8 bg-muted rounded-3xl"
      style={{ boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff" }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Neumorphic</h2>
      <div className="space-y-4">
        <input
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl bg-muted border-0 outline-none"
          style={{ boxShadow: "inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff" }}
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full px-4 py-3 rounded-xl bg-muted border-0 outline-none"
          style={{ boxShadow: "inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff" }}
        />
        <button
          className="w-full px-4 py-3 rounded-xl bg-muted font-medium"
          style={{ boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff" }}
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

function ParticleBgLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <Card className="relative p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Particle Login</h2>
        <div className="space-y-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
        </div>
      </Card>
    </div>
  )
}

function SlideFormLogin({ preview }: { preview?: boolean }) {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-8 overflow-hidden">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Button
            variant={!isSignUp ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsSignUp(false)}
            className="flex-1"
          >
            Sign In
          </Button>
          <Button
            variant={isSignUp ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsSignUp(true)}
            className="flex-1"
          >
            Sign Up
          </Button>
        </div>
        <div
          className="transition-all duration-500"
          style={{
            transform: isSignUp ? "translateX(-100%)" : "translateX(0)",
            display: "flex",
            width: "200%",
          }}
        >
          <div className="w-1/2 space-y-4 pr-4">
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button className="w-full bg-primary text-primary-foreground">Sign In</Button>
          </div>
          <div className="w-1/2 space-y-4 pl-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button className="w-full bg-primary text-primary-foreground">Create Account</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

function ColorfulGradientLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-2xl p-1 bg-gradient-to-br from-chart-1 via-chart-2 via-chart-3 to-chart-5">
        <Card className="p-8 bg-background rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-3 to-chart-5">
            Colorful Login
          </h2>
          <div className="space-y-4">
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button className="w-full bg-gradient-to-r from-chart-1 via-chart-3 to-chart-5 text-white hover:opacity-90">
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function ZenMinimalLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🧘</div>
        <h2 className="text-3xl font-bold">Zen</h2>
      </div>
      <div className="space-y-6">
        <input
          placeholder="Email"
          className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none transition-colors"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none transition-colors"
        />
        <Button className="w-full bg-foreground text-background hover:bg-foreground/90">Enter</Button>
      </div>
    </div>
  )
}

function AuroraBgLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl animate-pulse" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-accent/30 to-transparent blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-1/2 left-1/4 w-full h-full bg-gradient-to-t from-chart-3/30 to-transparent blur-3xl animate-pulse [animation-delay:2s]" />
      </div>
      <Card className="relative backdrop-blur-sm bg-card/80 p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Aurora</h2>
        <div className="space-y-4">
          <Input placeholder="Email" className="backdrop-blur-sm" />
          <Input placeholder="Password" type="password" className="backdrop-blur-sm" />
          <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
            Sign In
          </Button>
        </div>
      </Card>
    </div>
  )
}

function WaveAnimationLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative overflow-hidden rounded-2xl">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent">
        <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full">
          <path
            d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-primary/20"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z; M0,60 C150,30 350,90 600,60 C850,30 1050,90 1200,60 L1200,120 L0,120 Z; M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>
      <Card className="relative p-8 bg-card/95">
        <h2 className="text-2xl font-bold mb-6 text-center">Wave Login</h2>
        <div className="space-y-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
        </div>
      </Card>
    </div>
  )
}

function TechGridLogin({ preview }: { preview?: boolean }) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <Card className="relative p-8 bg-card/95 backdrop-blur-sm border-primary/30">
        <div className="text-center mb-6">
          <div className="inline-block p-3 rounded-lg bg-primary/10 mb-4">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-mono">TECH_LOGIN</h2>
          <p className="text-xs text-muted-foreground mt-2 font-mono">ACCESS TERMINAL</p>
        </div>
        <div className="space-y-4">
          <Input placeholder="user@system" className="font-mono bg-black/50 border-primary/50 text-primary" />
          <Input
            placeholder="password"
            type="password"
            className="font-mono bg-black/50 border-primary/50 text-primary"
          />
          <Button className="w-full bg-primary hover:bg-primary/90 text-black font-mono font-bold">
            {">> AUTHENTICATE"}
          </Button>
        </div>
      </Card>
    </div>
  )
}

function getAuthCode(authId: string): string {
  const codes: Record<string, string> = {
    "gradient-wave": `"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles, Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function GradientWaveLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your authentication logic here
    console.log("Login:", { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-chart-3 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-accent/50 to-chart-3/50 blur-2xl animate-pulse" />
          <div className="relative bg-background rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="inline-block p-3 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Welcome Back
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Sign in to continue your journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/50" 
                required
              />
              <div className="relative">
                <Input 
                  placeholder="Password" 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-muted/50 pr-10" 
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Don't have an account? <button className="text-primary hover:underline font-medium">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}`,
    glassmorphic: `"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function GlassmorphicLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-3/20 blur-3xl rounded-full" />
        <Card className="relative backdrop-blur-xl bg-card/30 border-border/50 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Glassmorphic Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              placeholder="Email" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 backdrop-blur-sm" 
              required
            />
            <Input 
              placeholder="Password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background/50 backdrop-blur-sm" 
              required
            />
            <Button 
              type="submit"
              className="w-full bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-primary-foreground"
            >
              Continue
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}`,
  }

  return codes[authId] || `// Code for ${authId} authentication component`
}

function getAuthCSS(authId: string): string {
  const cssMap: Record<string, string> = {
    "gradient-wave": `@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}`,
    "animated-bg": `@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}`,
  }

  return cssMap[authId] || ""
}
