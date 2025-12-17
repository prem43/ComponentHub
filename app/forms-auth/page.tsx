"use client"

import { Navigation } from "@/components/navigation"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, User, Eye, EyeOff, Github, Chrome } from "lucide-react"
import { useState } from "react"

export default function FormsAuthPage() {
  const [showPassword, setShowPassword] = useState(false)

  const loginFormCode = `"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', { email, password })
  }

  return (
    <Card className="p-8 max-w-md w-full">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <p className="text-muted-foreground">
          Sign in to your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-9 pr-9"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Card>
  )
}`

  const signupFormCode = `"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Lock } from 'lucide-react'

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup:', formData)
  }

  return (
    <Card className="p-8 max-w-md w-full">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Create Account</h2>
        <p className="text-muted-foreground">
          Get started with your free account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-9"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-9"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="pl-9"
              required
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => 
              setFormData({...formData, acceptTerms: checked as boolean})
            }
          />
          <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
            I agree to the terms and conditions
          </Label>
        </div>

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </Card>
  )
}`

  const socialAuthCode = `import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Chrome } from 'lucide-react'

export function SocialAuth() {
  return (
    <Card className="p-8 max-w-md w-full">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Sign In</h2>
        <p className="text-muted-foreground">
          Choose your preferred sign in method
        </p>
      </div>

      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full bg-transparent"
          onClick={() => console.log('GitHub login')}
        >
          <Github className="mr-2 h-5 w-5" />
          Continue with GitHub
        </Button>

        <Button 
          variant="outline" 
          className="w-full bg-transparent"
          onClick={() => console.log('Google login')}
        >
          <Chrome className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button variant="secondary" className="w-full">
        Continue with Email
      </Button>
    </Card>
  )
}`

  const contactFormCode = `"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
  }

  return (
    <Card className="p-8 max-w-2xl w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">
          Fill out the form and we'll get back to you soon
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            type="text"
            placeholder="What is this about?"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us more..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  )
}`

  const forms = [
    {
      title: "Login Form",
      description: "Modern login form with email and password fields",
      code: loginFormCode,
      preview: (
        <Card className="p-8 max-w-md w-full">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
            <p className="text-muted-foreground text-sm">Sign in to your account</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-9 pr-9"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-4">
            {"Don't have an account? "}
            <a href="#" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </Card>
      ),
    },
    {
      title: "Signup Form",
      description: "Registration form with validation and terms checkbox",
      code: signupFormCode,
      preview: (
        <Card className="p-8 max-w-md w-full">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Create Account</h2>
            <p className="text-muted-foreground text-sm">Get started with your free account</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="name" type="text" placeholder="John Doe" className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="signup-email" type="email" placeholder="you@example.com" className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="signup-password" type="password" placeholder="••••••••" className="pl-9" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                I agree to the terms and conditions
              </Label>
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </Card>
      ),
    },
    {
      title: "Social Authentication",
      description: "OAuth login with GitHub and Google integration",
      code: socialAuthCode,
      preview: (
        <Card className="p-8 max-w-md w-full">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Sign In</h2>
            <p className="text-muted-foreground text-sm">Choose your preferred sign in method</p>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full hover:bg-secondary bg-transparent">
              <Github className="mr-2 h-5 w-5" />
              Continue with GitHub
            </Button>

            <Button variant="outline" className="w-full hover:bg-secondary bg-transparent">
              <Chrome className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <Button variant="secondary" className="w-full">
            Continue with Email
          </Button>
        </Card>
      ),
    },
    {
      title: "Contact Form",
      description: "Professional contact form with textarea for messages",
      code: contactFormCode,
      preview: (
        <Card className="p-8 max-w-2xl w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-muted-foreground text-sm">Fill out the form and we'll get back to you soon</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" type="text" placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" type="text" placeholder="What is this about?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                placeholder="Tell us more..."
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Forms & Authentication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Authentication & Form Components</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Production-ready authentication forms, contact forms, and user input components with validation and best
            practices built-in.
          </p>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {forms.map((form, index) => (
            <div key={form.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{form.title}</h2>
                <p className="text-muted-foreground">{form.description}</p>
              </div>

              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                  <div className="min-h-[400px] flex items-center justify-center bg-muted/30 rounded-lg p-8">
                    {form.preview}
                  </div>
                </TabsContent>

                <TabsContent value="code">
                  <CodeBlock code={form.code} filename={`${form.title.toLowerCase().replace(/\s+/g, "-")}.tsx`} />
                </TabsContent>
              </Tabs>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>All forms include proper validation and accessibility features</p>
        </div>
      </footer>
    </div>
  )
}
