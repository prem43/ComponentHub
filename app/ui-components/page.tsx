"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Sparkles, Loader2, Star, Heart, Bell, Check } from "lucide-react"

export default function UIComponentsPage() {
  const [activeTab, setActiveTab] = useState("preview")

  const buttonCode = `import { Button } from "@/components/ui/button"
import { Sparkles, Loader2 } from 'lucide-react'

export function ButtonExamples() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Primary Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      
      {/* With Icons */}
      <Button>
        <Sparkles className="mr-2 h-4 w-4" />
        With Icon
      </Button>
      
      {/* Loading State */}
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    </div>
  )
}`

  const cardCode = `import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function CardExample() {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold">Card Title</h3>
        <Badge variant="secondary">New</Badge>
      </div>
      <p className="text-muted-foreground mb-4">
        This is a beautiful card component with hover effects
        and smooth transitions.
      </p>
      <Button size="sm">Learn More</Button>
    </Card>
  )
}`

  const badgeCode = `import { Badge } from "@/components/ui/badge"

export function BadgeExamples() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      
      {/* Custom Colors */}
      <Badge className="bg-green-500 text-white">Success</Badge>
      <Badge className="bg-blue-500 text-white">Info</Badge>
      <Badge className="bg-yellow-500 text-black">Warning</Badge>
    </div>
  )
}`

  const inputCode = `import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function InputExamples() {
  return (
    <div className="space-y-4 max-w-md">
      <Input type="text" placeholder="Enter your name..." />
      <Input type="email" placeholder="email@example.com" />
      
      {/* With Icon */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          type="search" 
          placeholder="Search..." 
          className="pl-9"
        />
      </div>
      
      <Input type="password" placeholder="Password" />
    </div>
  )
}`

  const animatedButtonCode = `import { Button } from "@/components/ui/button"
import { Star, Heart } from 'lucide-react'

export function AnimatedButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Hover Scale */}
      <Button className="hover:scale-105 transition-transform">
        Hover Me
      </Button>
      
      {/* Gradient Hover */}
      <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all">
        Gradient Button
      </Button>
      
      {/* Icon Animations */}
      <Button className="group">
        <Star className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
        Star
      </Button>
      
      <Button className="group">
        <Heart className="mr-2 h-4 w-4 group-hover:scale-125 group-hover:text-red-500 transition-all" />
        Like
      </Button>
    </div>
  )
}`

  const components = [
    {
      title: "Buttons",
      description: "Various button styles with icons and states",
      code: buttonCode,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button>
            <Sparkles className="mr-2 h-4 w-4" />
            With Icon
          </Button>
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </Button>
        </div>
      ),
    },
    {
      title: "Cards",
      description: "Beautiful card components with hover effects",
      code: cardCode,
      preview: (
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">Card Title</h3>
              <Badge variant="secondary">New</Badge>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              This is a beautiful card component with hover effects and smooth transitions.
            </p>
            <Button size="sm">Learn More</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition-all">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">Premium Card</h3>
              <Badge className="bg-primary text-primary-foreground">Pro</Badge>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Enhanced card with gradient border on hover and premium badge.
            </p>
            <Button size="sm" variant="outline">
              Explore
            </Button>
          </Card>
        </div>
      ),
    },
    {
      title: "Badges",
      description: "Status badges and labels with multiple variants",
      code: badgeCode,
      preview: (
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-green-500 text-white hover:bg-green-600">Success</Badge>
          <Badge className="bg-blue-500 text-white hover:bg-blue-600">Info</Badge>
          <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">Warning</Badge>
          <Badge className="bg-gradient-to-r from-primary to-accent text-white">Gradient</Badge>
        </div>
      ),
    },
    {
      title: "Input Fields",
      description: "Form inputs with various styles and icons",
      code: inputCode,
      preview: (
        <div className="space-y-4 max-w-md">
          <Input type="text" placeholder="Enter your name..." />
          <Input type="email" placeholder="email@example.com" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-9" />
          </div>
          <Input type="password" placeholder="Password" />
        </div>
      ),
    },
    {
      title: "Animated Buttons",
      description: "Interactive buttons with smooth animations",
      code: animatedButtonCode,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Button className="hover:scale-105 transition-transform">Hover Me</Button>
          <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all">
            Gradient Button
          </Button>
          <Button className="group">
            <Star className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            Star
          </Button>
          <Button className="group">
            <Heart className="mr-2 h-4 w-4 group-hover:scale-125 group-hover:text-red-500 transition-all" />
            Like
          </Button>
          <Button className="group">
            <Bell className="mr-2 h-4 w-4 group-hover:animate-wiggle" />
            Notify
          </Button>
          <Button className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              <Check className="mr-2 h-4 w-4" />
              Success
            </span>
            <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform" />
          </Button>
        </div>
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
            <span className="text-sm font-medium text-primary">UI Components</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Beautiful UI Components</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A comprehensive collection of reusable UI components with live previews and ready-to-use code. Copy and
            customize for your projects.
          </p>
        </div>
      </div>

      {/* Components Grid */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {components.map((component, index) => (
            <div key={component.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{component.title}</h2>
                <p className="text-muted-foreground">{component.description}</p>
              </div>

              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                  <Card className="p-8 min-h-[200px] flex items-center justify-center">{component.preview}</Card>
                </TabsContent>

                <TabsContent value="code">
                  <CodeBlock
                    code={component.code}
                    filename={`${component.title.toLowerCase().replace(/\s+/g, "-")}.tsx`}
                  />
                </TabsContent>
              </Tabs>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>More components coming soon. Stay tuned!</p>
        </div>
      </footer>
    </div>
  )
}
