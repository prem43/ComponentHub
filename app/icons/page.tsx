"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Check,
  Home,
  User,
  Settings,
  Bell,
  Mail,
  Heart,
  Star,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Download,
  Upload,
  Share2,
  Lock,
  Unlock,
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Bookmark,
  Flag,
  ThumbsUp,
  ThumbsDown,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Plus,
  Minus,
  Filter,
  Layers,
  Layout,
  Grid,
  List,
  BarChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  CreditCard,
  Wallet,
  Package,
  Truck,
  Tag,
  Gift,
  Target,
  Award,
  Shield,
  AlertCircle,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  HelpCircle,
  FileText,
  File,
  Folder,
  ImageIcon,
  Video,
  Music,
  Headphones,
  Mic,
  Camera,
  Paperclip,
  Link,
  ExternalLink,
  Code,
  Terminal,
  Cpu,
  HardDrive,
  Database,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  Zap,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  RefreshCw,
  RotateCw,
  Archive,
  Inbox,
  AtSign,
} from "lucide-react"

const allIcons = [
  { name: "Home", icon: Home, category: "Navigation" },
  { name: "User", icon: User, category: "User" },
  { name: "Settings", icon: Settings, category: "Settings" },
  { name: "Bell", icon: Bell, category: "Notification" },
  { name: "Mail", icon: Mail, category: "Communication" },
  { name: "Heart", icon: Heart, category: "Social" },
  { name: "Star", icon: Star, category: "Social" },
  { name: "Trash2", icon: Trash2, category: "Action" },
  { name: "Edit", icon: Edit, category: "Action" },
  { name: "Eye", icon: Eye, category: "Action" },
  { name: "EyeOff", icon: EyeOff, category: "Action" },
  { name: "Download", icon: Download, category: "Action" },
  { name: "Upload", icon: Upload, category: "Action" },
  { name: "Share2", icon: Share2, category: "Social" },
  { name: "Lock", icon: Lock, category: "Security" },
  { name: "Unlock", icon: Unlock, category: "Security" },
  { name: "Calendar", icon: Calendar, category: "Time" },
  { name: "Clock", icon: Clock, category: "Time" },
  { name: "MapPin", icon: MapPin, category: "Location" },
  { name: "Phone", icon: Phone, category: "Communication" },
  { name: "MessageSquare", icon: MessageSquare, category: "Communication" },
  { name: "Send", icon: Send, category: "Action" },
  { name: "Bookmark", icon: Bookmark, category: "Social" },
  { name: "Flag", icon: Flag, category: "Action" },
  { name: "ThumbsUp", icon: ThumbsUp, category: "Social" },
  { name: "ThumbsDown", icon: ThumbsDown, category: "Social" },
  { name: "Menu", icon: Menu, category: "Navigation" },
  { name: "X", icon: X, category: "Action" },
  { name: "ChevronLeft", icon: ChevronLeft, category: "Navigation" },
  { name: "ChevronRight", icon: ChevronRight, category: "Navigation" },
  { name: "ChevronUp", icon: ChevronUp, category: "Navigation" },
  { name: "ChevronDown", icon: ChevronDown, category: "Navigation" },
  { name: "Plus", icon: Plus, category: "Action" },
  { name: "Minus", icon: Minus, category: "Action" },
  { name: "Filter", icon: Filter, category: "Action" },
  { name: "Layers", icon: Layers, category: "Layout" },
  { name: "Layout", icon: Layout, category: "Layout" },
  { name: "Grid", icon: Grid, category: "Layout" },
  { name: "List", icon: List, category: "Layout" },
  { name: "BarChart", icon: BarChart, category: "Chart" },
  { name: "PieChart", icon: PieChart, category: "Chart" },
  { name: "TrendingUp", icon: TrendingUp, category: "Chart" },
  { name: "TrendingDown", icon: TrendingDown, category: "Chart" },
  { name: "DollarSign", icon: DollarSign, category: "Commerce" },
  { name: "ShoppingCart", icon: ShoppingCart, category: "Commerce" },
  { name: "CreditCard", icon: CreditCard, category: "Commerce" },
  { name: "Wallet", icon: Wallet, category: "Commerce" },
  { name: "Package", icon: Package, category: "Commerce" },
  { name: "Truck", icon: Truck, category: "Commerce" },
  { name: "Tag", icon: Tag, category: "Commerce" },
  { name: "Gift", icon: Gift, category: "Commerce" },
  { name: "Target", icon: Target, category: "Business" },
  { name: "Award", icon: Award, category: "Business" },
  { name: "Shield", icon: Shield, category: "Security" },
  { name: "AlertCircle", icon: AlertCircle, category: "Alert" },
  { name: "AlertTriangle", icon: AlertTriangle, category: "Alert" },
  { name: "Info", icon: Info, category: "Alert" },
  { name: "CheckCircle", icon: CheckCircle, category: "Alert" },
  { name: "XCircle", icon: XCircle, category: "Alert" },
  { name: "HelpCircle", icon: HelpCircle, category: "Alert" },
  { name: "FileText", icon: FileText, category: "File" },
  { name: "File", icon: File, category: "File" },
  { name: "Folder", icon: Folder, category: "File" },
  { name: "Image", icon: ImageIcon, category: "Media" },
  { name: "Video", icon: Video, category: "Media" },
  { name: "Music", icon: Music, category: "Media" },
  { name: "Headphones", icon: Headphones, category: "Media" },
  { name: "Mic", icon: Mic, category: "Media" },
  { name: "Camera", icon: Camera, category: "Media" },
  { name: "Paperclip", icon: Paperclip, category: "File" },
  { name: "Link", icon: Link, category: "Action" },
  { name: "ExternalLink", icon: ExternalLink, category: "Action" },
  { name: "Code", icon: Code, category: "Development" },
  { name: "Terminal", icon: Terminal, category: "Development" },
  { name: "Cpu", icon: Cpu, category: "Technology" },
  { name: "HardDrive", icon: HardDrive, category: "Technology" },
  { name: "Database", icon: Database, category: "Technology" },
  { name: "Server", icon: Server, category: "Technology" },
  { name: "Cloud", icon: Cloud, category: "Technology" },
  { name: "Wifi", icon: Wifi, category: "Technology" },
  { name: "Bluetooth", icon: Bluetooth, category: "Technology" },
  { name: "Battery", icon: Battery, category: "Technology" },
  { name: "Power", icon: Power, category: "Technology" },
  { name: "Zap", icon: Zap, category: "Technology" },
  { name: "Sun", icon: Sun, category: "Weather" },
  { name: "Moon", icon: Moon, category: "Weather" },
  { name: "Volume2", icon: Volume2, category: "Media" },
  { name: "VolumeX", icon: VolumeX, category: "Media" },
  { name: "Play", icon: Play, category: "Media" },
  { name: "Pause", icon: Pause, category: "Media" },
  { name: "SkipBack", icon: SkipBack, category: "Media" },
  { name: "SkipForward", icon: SkipForward, category: "Media" },
  { name: "Repeat", icon: Repeat, category: "Media" },
  { name: "Shuffle", icon: Shuffle, category: "Media" },
  { name: "Maximize", icon: Maximize, category: "Action" },
  { name: "Minimize", icon: Minimize, category: "Action" },
  { name: "RefreshCw", icon: RefreshCw, category: "Action" },
  { name: "RotateCw", icon: RotateCw, category: "Action" },
  { name: "Archive", icon: Archive, category: "File" },
  { name: "Inbox", icon: Inbox, category: "Communication" },
  { name: "AtSign", icon: AtSign, category: "Communication" },
]

export default function IconsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(allIcons.map((icon) => icon.category)))]

  const filteredIcons = useMemo(() => {
    return allIcons.filter((icon) => {
      const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || icon.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const copyIconCode = (iconName: string) => {
    const code = `import { ${iconName} } from 'lucide-react'\n\n<${iconName} className="h-5 w-5" />`
    navigator.clipboard.writeText(code)
    setCopiedIcon(iconName)
    setTimeout(() => setCopiedIcon(null), 2000)
  }

  const usageCode = `// Install lucide-react
npm install lucide-react

// Import icons
import { Home, User, Settings, Mail, ImageIcon } from 'lucide-react'

// Use in your components
export function MyComponent() {
  return (
    <div>
      <Home className="h-5 w-5 text-primary" />
      <User className="h-6 w-6" />
      <Settings className="h-4 w-4 text-muted-foreground" />
      <Mail className="h-8 w-8 text-blue-500" />
      <ImageIcon className="h-8 w-8 text-blue-500" />
    </div>
  )
}

// With animations
<Heart className="h-5 w-5 hover:scale-110 hover:text-red-500 transition-all" />
<Star className="h-5 w-5 hover:rotate-180 transition-transform duration-500" />`

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Icon Library</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Icon Library</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Browse and copy {allIcons.length}+ beautiful icons from Lucide React. Click any icon to copy its code
            instantly.
          </p>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Usage Guide */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">How to Use Icons</h2>
            <CodeBlock code={usageCode} filename="icon-usage.tsx" />
          </Card>

          {/* Search and Filter */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredIcons.length} of {allIcons.length} icons
            </p>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {filteredIcons.map((iconData) => {
              const Icon = iconData.icon
              const isCopied = copiedIcon === iconData.name

              return (
                <button
                  key={iconData.name}
                  onClick={() => copyIconCode(iconData.name)}
                  className="group relative flex flex-col items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-center leading-tight">{iconData.name}</span>

                  {/* Copy Indicator */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-background/95 rounded-lg transition-opacity ${
                      isCopied ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-6 w-6 text-green-500" />
                      <span className="text-xs font-medium text-green-500">Copied!</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge
                    variant="secondary"
                    className="absolute top-2 right-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {iconData.category}
                  </Badge>
                </button>
              )
            })}
          </div>

          {/* No Results */}
          {filteredIcons.length === 0 && (
            <Card className="p-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">No icons found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            Icons powered by{" "}
            <a
              href="https://lucide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lucide React
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
