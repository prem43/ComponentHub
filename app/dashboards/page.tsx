"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Package,
  Bell,
  Search,
  Settings,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Calendar,
  FileText,
  Heart,
  Star,
  MessageSquare,
  Eye,
  ArrowRight,
  Check,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CompleteCodeBlock } from "@/components/complete-code-block"

export default function DashboardsPage() {
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null)

  const dashboards = [
    {
      id: "analytics-admin",
      name: "Analytics Admin",
      category: "admin",
      description: "Comprehensive analytics dashboard with charts and metrics",
      Component: AnalyticsAdminDashboard,
    },
    {
      id: "ecommerce-admin",
      name: "E-commerce Admin",
      category: "admin",
      description: "Sales, orders, and product management dashboard",
      Component: EcommerceAdminDashboard,
    },
    {
      id: "user-profile",
      name: "User Profile Dashboard",
      category: "user",
      description: "Personal dashboard with activity and stats",
      Component: UserProfileDashboard,
    },
    {
      id: "crm-admin",
      name: "CRM Admin",
      category: "admin",
      description: "Customer relationship management dashboard",
      Component: CRMAdminDashboard,
    },
    {
      id: "social-user",
      name: "Social Media User",
      category: "user",
      description: "Social media analytics and engagement dashboard",
      Component: SocialUserDashboard,
    },
    {
      id: "minimal-admin",
      name: "Minimal Admin",
      category: "admin",
      description: "Clean, minimalist admin dashboard",
      Component: MinimalAdminDashboard,
    },
    {
      id: "project-manager",
      name: "Project Manager",
      category: "admin",
      description: "Project management and task tracking",
      Component: ProjectManagerDashboard,
    },
    {
      id: "finance-admin",
      name: "Finance Admin",
      category: "admin",
      description: "Financial metrics and transaction tracking",
      Component: FinanceAdminDashboard,
    },
  ]

  const categories = [
    { id: "all", label: "All Dashboards", count: dashboards.length },
    { id: "admin", label: "Admin", count: dashboards.filter((d) => d.category === "admin").length },
    { id: "user", label: "User", count: dashboards.filter((d) => d.category === "user").length },
  ]

  const [activeCategory, setActiveCategory] = useState("all")
  const filteredDashboards =
    activeCategory === "all" ? dashboards : dashboards.filter((d) => d.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Complete Dashboard Templates
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Dashboard <span className="text-primary">Showcase</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Full-page dashboard templates for admin panels and user interfaces. Click any dashboard to view the full
              design.
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

          {/* Dashboard Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDashboards.map((dashboard, index) => (
              <Card
                key={dashboard.id}
                className="group overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedDashboard(dashboard.id)}
              >
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted p-4 flex items-center justify-center overflow-hidden relative">
                  <div className="scale-[0.2] origin-center w-[500%] h-[500%]">
                    <dashboard.Component preview />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedDashboard(dashboard.id)
                      }}
                    >
                      View Dashboard
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold group-hover:text-primary transition-colors">{dashboard.name}</h3>
                    <Badge variant="secondary" className="capitalize">
                      {dashboard.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{dashboard.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Full Preview Modal */}
          {selectedDashboard && (
            <div
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-auto animate-fade-in"
              onClick={() => setSelectedDashboard(null)}
            >
              <div className="min-h-screen p-4 sm:p-8">
                <div className="max-w-[1600px] mx-auto">
                  <div className="flex items-center justify-between mb-6 sticky top-0 bg-background/80 backdrop-blur-xl p-4 rounded-lg border border-border z-10">
                    <div>
                      <h2 className="text-2xl font-bold">{dashboards.find((d) => d.id === selectedDashboard)?.name}</h2>
                      <p className="text-sm text-muted-foreground">
                        {dashboards.find((d) => d.id === selectedDashboard)?.description}
                      </p>
                    </div>
                    <Button variant="outline" onClick={() => setSelectedDashboard(null)}>
                      Close
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Preview */}
                    <div>
                      <h3 className="text-lg font-bold mb-3">Live Preview</h3>
                      <div
                        className="rounded-lg border border-border overflow-hidden bg-background"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {dashboards.find((d) => d.id === selectedDashboard)?.Component({ preview: false })}
                      </div>
                    </div>

                    {/* Complete Code */}
                    <div>
                      <h3 className="text-lg font-bold mb-3">Complete Code</h3>
                      <CompleteCodeBlock
                        componentName={
                          dashboards.find((d) => d.id === selectedDashboard)?.name.replace(/\s/g, "") || "Dashboard"
                        }
                        componentCode={getDashboardCode(selectedDashboard)}
                        dependencies={[
                          "lucide-react",
                          "@/components/ui/card",
                          "@/components/ui/button",
                          "@/components/ui/badge",
                          "@/components/ui/input",
                        ]}
                        instructions="Copy this complete dashboard component into your project. All imports and dependencies are included. Customize colors, content, and layout as needed."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ============= DASHBOARD TEMPLATES =============

function AnalyticsAdminDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="font-bold text-lg">Analytics</span>
        </div>

        <nav className="space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: BarChart3, label: "Analytics" },
            { icon: Users, label: "Users" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm",
                item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard Overview</h1>
            <p className="text-muted-foreground">Welcome back, here's what's happening</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 days
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Revenue", value: "$54,239", change: "+12.5%", icon: DollarSign, trend: "up" },
            { label: "Active Users", value: "8,492", change: "+8.2%", icon: Users, trend: "up" },
            { label: "Total Orders", value: "3,241", change: "-3.1%", icon: ShoppingCart, trend: "down" },
            { label: "Conversion", value: "3.6%", change: "+0.8%", icon: TrendingUp, trend: "up" },
          ].map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className={cn("text-sm font-medium", stat.trend === "up" ? "text-green-500" : "text-red-500")}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Revenue Trend</h3>
            <div className="h-64 bg-muted/30 rounded-lg flex items-end justify-around p-4 gap-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Traffic Sources</h3>
            <div className="h-64 flex items-center justify-center">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary via-accent to-chart-3" />
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-medium text-sm">Order #{3240 + i}</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <Badge>Completed</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function EcommerceAdminDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">E-Store Admin</span>
            </div>
            <nav className="flex items-center gap-1">
              {["Dashboard", "Products", "Orders", "Customers"].map((item) => (
                <Button key={item} variant={item === "Dashboard" ? "secondary" : "ghost"} size="sm">
                  {item}
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-64" />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {[
            { label: "Today's Sales", value: "$12,426", icon: DollarSign, color: "text-green-500" },
            { label: "New Orders", value: "143", icon: ShoppingCart, color: "text-blue-500" },
            { label: "Products", value: "1,254", icon: Package, color: "text-purple-500" },
            { label: "Customers", value: "8,492", icon: Users, color: "text-orange-500" },
            { label: "Revenue", value: "$124k", icon: TrendingUp, color: "text-pink-500" },
          ].map((stat) => (
            <Card key={stat.label} className="p-4 hover:shadow-lg transition-shadow">
              <stat.icon className={cn("h-8 w-8 mb-3", stat.color)} />
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Charts and Orders */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Sales Overview</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Week
                </Button>
                <Button variant="outline" size="sm">
                  Month
                </Button>
                <Button variant="default" size="sm">
                  Year
                </Button>
              </div>
            </div>
            <div className="h-64 bg-muted/30 rounded-lg flex items-end justify-around p-4 gap-1">
              {[30, 45, 60, 40, 80, 55, 90, 65, 85, 70, 95, 80].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Top Products</h3>
            <div className="space-y-4">
              {["Premium Watch", "Leather Bag", "Sunglasses", "Sneakers"].map((product, i) => (
                <div key={product} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted" />
                    <div>
                      <p className="text-sm font-medium">{product}</p>
                      <p className="text-xs text-muted-foreground">${(i + 1) * 89} sales</p>
                    </div>
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Orders Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Recent Orders</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 text-sm font-medium text-muted-foreground">Order ID</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Product</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 text-sm font-medium">#ORD-{3240 + i}</td>
                  <td className="py-4 text-sm">Customer {i}</td>
                  <td className="py-4 text-sm">Product Name</td>
                  <td className="py-4 text-sm font-medium">${(i * 45).toFixed(2)}</td>
                  <td className="py-4">
                    <Badge className={i % 2 === 0 ? "bg-green-500" : "bg-yellow-500"}>
                      {i % 2 === 0 ? "Shipped" : "Processing"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}

function UserProfileDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <div className="border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
            <span className="font-bold">My Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Profile Header */}
        <Card className="p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
          <div className="relative flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">John Doe</h2>
              <p className="text-muted-foreground mb-4">Premium Member since 2023</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-2xl font-bold">1,249</p>
                  <p className="text-xs text-muted-foreground">Points</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent text-white">Edit Profile</Button>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Projects", value: "42", icon: FileText, gradient: "from-blue-500 to-cyan-500" },
            { label: "Messages", value: "127", icon: MessageSquare, gradient: "from-purple-500 to-pink-500" },
            { label: "Following", value: "892", icon: Users, gradient: "from-orange-500 to-red-500" },
            { label: "Achievements", value: "18", icon: Star, gradient: "from-yellow-500 to-orange-500" },
          ].map((stat) => (
            <Card key={stat.label} className="p-6 hover:shadow-lg transition-shadow">
              <div
                className={cn(
                  "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                  stat.gradient,
                )}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Activity and Stats */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "Completed project", time: "2 hours ago", icon: FileText },
                { action: "Earned achievement", time: "1 day ago", icon: Star },
                { action: "Joined team", time: "3 days ago", icon: Users },
                { action: "Posted update", time: "1 week ago", icon: MessageSquare },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <activity.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Performance</h3>
            <div className="space-y-6">
              {[
                { label: "Productivity", value: 85, color: "bg-primary" },
                { label: "Quality", value: 92, color: "bg-accent" },
                { label: "Efficiency", value: 78, color: "bg-chart-3" },
                { label: "Collaboration", value: 95, color: "bg-chart-4" },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm font-bold">{metric.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", metric.color)} style={{ width: `${metric.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CRMAdminDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <div className="border-b border-border bg-card px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">CRM Dashboard</span>
            <nav className="flex items-center gap-1">
              {["Overview", "Leads", "Contacts", "Deals", "Reports"].map((item) => (
                <Button key={item} variant={item === "Overview" ? "secondary" : "ghost"} size="sm">
                  {item}
                </Button>
              ))}
            </nav>
          </div>
          <Button className="bg-primary">
            <Users className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      <div className="p-8">
        {/* Pipeline Overview */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {[
            { stage: "Leads", count: "127", value: "$245k", color: "bg-blue-500" },
            { stage: "Qualified", count: "84", value: "$189k", color: "bg-purple-500" },
            { stage: "Proposal", count: "45", value: "$134k", color: "bg-orange-500" },
            { stage: "Negotiation", count: "28", value: "$98k", color: "bg-pink-500" },
            { stage: "Closed", count: "156", value: "$456k", color: "bg-green-500" },
          ].map((stage) => (
            <Card key={stage.stage} className="p-6 relative overflow-hidden">
              <div className={cn("absolute top-0 right-0 w-20 h-20 opacity-10 rounded-bl-full", stage.color)} />
              <p className="text-sm text-muted-foreground mb-2">{stage.stage}</p>
              <p className="text-2xl font-bold mb-1">{stage.count}</p>
              <p className="text-sm font-medium text-primary">{stage.value}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Deals List */}
          <Card className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Active Deals</h3>
              <div className="flex items-center gap-2">
                <Input placeholder="Search deals..." className="w-64" />
              </div>
            </div>
            <div className="space-y-3">
              {[
                { company: "Acme Corp", contact: "John Smith", value: "$45,000", stage: "Proposal", priority: "high" },
                {
                  company: "TechStart Inc",
                  contact: "Sarah Johnson",
                  value: "$32,000",
                  stage: "Negotiation",
                  priority: "medium",
                },
                {
                  company: "Global Solutions",
                  contact: "Mike Brown",
                  value: "$78,000",
                  stage: "Qualified",
                  priority: "high",
                },
                { company: "InnovateCo", contact: "Emma Davis", value: "$21,000", stage: "Proposal", priority: "low" },
              ].map((deal, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {deal.company[0]}
                    </div>
                    <div>
                      <p className="font-medium">{deal.company}</p>
                      <p className="text-sm text-muted-foreground">{deal.contact}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-bold text-right">{deal.value}</p>
                      <p className="text-sm text-muted-foreground">{deal.stage}</p>
                    </div>
                    <Badge variant={deal.priority === "high" ? "destructive" : "secondary"} className="capitalize">
                      {deal.priority}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Tasks & Activities */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Today's Tasks</h3>
            <div className="space-y-4">
              {[
                { task: "Follow up with Acme Corp", time: "10:00 AM", type: "call" },
                { task: "Send proposal to TechStart", time: "2:00 PM", type: "email" },
                { task: "Meeting with Global Solutions", time: "4:30 PM", type: "meeting" },
                { task: "Review contracts", time: "5:00 PM", type: "task" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <input type="checkbox" className="mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.task}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SocialUserDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-background dark:to-muted/30">
      {/* Header */}
      <div className="border-b border-border bg-white/80 dark:bg-card/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
            <span className="font-bold">Social Hub</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Followers", value: "12.5k", change: "+125", icon: Users, gradient: "from-blue-500 to-cyan-500" },
            { label: "Likes", value: "48.2k", change: "+892", icon: Heart, gradient: "from-pink-500 to-rose-500" },
            { label: "Posts", value: "324", change: "+12", icon: FileText, gradient: "from-purple-500 to-violet-500" },
            {
              label: "Engagement",
              value: "8.4%",
              change: "+1.2%",
              icon: TrendingUp,
              gradient: "from-orange-500 to-amber-500",
            },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="p-6 bg-white/80 dark:bg-card backdrop-blur-sm hover:shadow-lg transition-shadow"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center mb-4",
                  stat.gradient,
                )}
              >
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-xs text-green-500 font-medium mt-2">{stat.change} this week</p>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Recent Posts */}
          <Card className="col-span-2 p-6 bg-white/80 dark:bg-card backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-6">Recent Posts Performance</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500" />
                  <div className="flex-1">
                    <p className="font-medium mb-1">Post Title {i}</p>
                    <p className="text-sm text-muted-foreground">Posted 2 days ago</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <Heart className="h-4 w-4 inline text-pink-500 mr-1" />
                        <span className="font-medium">{(i * 234).toLocaleString()}</span>
                      </div>
                      <div>
                        <Eye className="h-4 w-4 inline text-blue-500 mr-1" />
                        <span className="font-medium">{(i * 1234).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Hashtags */}
          <Card className="p-6 bg-white/80 dark:bg-card backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-6">Trending Hashtags</h3>
            <div className="space-y-3">
              {["#design", "#coding", "#tech", "#ui", "#webdev"].map((tag, i) => (
                <div
                  key={tag}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-primary">{tag}</span>
                  <span className="text-sm text-muted-foreground">{(5 - i) * 245} posts</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MinimalAdminDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Minimal Header */}
      <div className="border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Export
            </Button>
            <Button variant="default" size="sm">
              New Report
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Clean Stats */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {[
            { label: "Revenue", value: "$124,592" },
            { label: "Users", value: "8,249" },
            { label: "Orders", value: "1,042" },
            { label: "Growth", value: "+14.2%" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-4xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Simple Chart */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Performance</h2>
          <div className="h-64 border border-border rounded-lg flex items-end justify-around p-8 gap-4">
            {[45, 68, 52, 78, 60, 85, 70, 92, 75, 88, 80, 95].map((height, i) => (
              <div key={i} className="flex-1 bg-foreground rounded-t" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        {/* Clean Table */}
        <div>
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 text-sm font-medium text-muted-foreground">User</th>
                <th className="text-left py-4 text-sm font-medium text-muted-foreground">Action</th>
                <th className="text-left py-4 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left py-4 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-4 text-sm font-medium">User {i}</td>
                  <td className="py-4 text-sm">Completed task</td>
                  <td className="py-4 text-sm text-muted-foreground">Dec {10 + i}, 2024</td>
                  <td className="py-4">
                    <span className="text-sm">Success</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function ProjectManagerDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Project Manager</span>
            <nav className="flex items-center gap-1">
              {["Projects", "Tasks", "Team", "Timeline"].map((item) => (
                <Button key={item} variant={item === "Projects" ? "secondary" : "ghost"} size="sm">
                  {item}
                </Button>
              ))}
            </nav>
          </div>
          <Button className="bg-primary">
            <Package className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      <div className="p-8">
        {/* Project Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Projects", value: "12", icon: Package, color: "text-blue-500" },
            { label: "Tasks Completed", value: "284", icon: Check, color: "text-green-500" },
            { label: "Team Members", value: "24", icon: Users, color: "text-purple-500" },
            { label: "Due This Week", value: "18", icon: Calendar, color: "text-orange-500" },
          ].map((stat) => (
            <Card key={stat.label} className="p-6">
              <stat.icon className={cn("h-8 w-8 mb-4", stat.color)} />
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "Website Redesign", progress: 75, tasks: "12/16", team: 5, color: "bg-blue-500" },
            { name: "Mobile App", progress: 45, tasks: "8/18", team: 4, color: "bg-purple-500" },
            { name: "Marketing Campaign", progress: 90, tasks: "18/20", team: 3, color: "bg-green-500" },
            { name: "API Development", progress: 30, tasks: "6/20", team: 6, color: "bg-orange-500" },
          ].map((project) => (
            <Card key={project.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-bold">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", project.color)}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tasks</p>
                    <p className="text-sm font-bold">{project.tasks}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Team</p>
                    <p className="text-sm font-bold">{project.team} members</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function FinanceAdminDashboard({ preview }: { preview?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-card px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-500" />
              <span className="font-bold text-lg">Finance Dashboard</span>
            </div>
            <nav className="flex items-center gap-1">
              {["Overview", "Transactions", "Reports", "Settings"].map((item) => (
                <Button key={item} variant={item === "Overview" ? "secondary" : "ghost"} size="sm">
                  {item}
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Dec 2024
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Export Report</Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Financial Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Balance", value: "$542,389", change: "+12.5%", trend: "up" },
            { label: "Income", value: "$124,592", change: "+8.2%", trend: "up" },
            { label: "Expenses", value: "$82,104", change: "-3.1%", trend: "down" },
            { label: "Profit", value: "$42,488", change: "+15.3%", trend: "up" },
          ].map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <span className={cn("text-sm font-medium", stat.trend === "up" ? "text-green-500" : "text-red-500")}>
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 inline" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 inline" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Charts and Transactions */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <Card className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Revenue vs Expenses</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs">Expenses</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end justify-around gap-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                  <div className="w-full bg-green-500 rounded-t" style={{ height: `${40 + Math.random() * 60}%` }} />
                  <div className="w-full bg-red-500 rounded-t" style={{ height: `${20 + Math.random() * 40}%` }} />
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-green-500 hover:bg-green-600 text-white">
                <DollarSign className="h-4 w-4 mr-2" />
                Add Income
              </Button>
              <Button className="w-full justify-start bg-red-500 hover:bg-red-600 text-white">
                <DollarSign className="h-4 w-4 mr-2" />
                Add Expense
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Payment
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-6">Recent Transactions</h3>
          <div className="space-y-3">
            {[
              { type: "income", desc: "Payment from Client A", amount: "$5,240", date: "Dec 15" },
              { type: "expense", desc: "Office Supplies", amount: "$324", date: "Dec 14" },
              { type: "income", desc: "Subscription Revenue", amount: "$1,890", date: "Dec 13" },
              { type: "expense", desc: "Software License", amount: "$890", date: "Dec 12" },
              { type: "income", desc: "Consulting Services", amount: "$3,200", date: "Dec 11" },
            ].map((transaction, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      transaction.type === "income" ? "bg-green-500/10" : "bg-red-500/10",
                    )}
                  >
                    <DollarSign
                      className={cn("h-5 w-5", transaction.type === "income" ? "text-green-500" : "text-red-500")}
                    />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.desc}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <p
                  className={cn("text-lg font-bold", transaction.type === "income" ? "text-green-500" : "text-red-500")}
                >
                  {transaction.type === "income" ? "+" : "-"}
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function getDashboardCode(dashboardId: string): string {
  const codes: Record<string, string> = {
    "analytics-admin": `"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, BarChart3, Users, Settings, DollarSign, ShoppingCart, TrendingUp, Bell, Calendar } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function AnalyticsAdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="font-bold text-lg">Analytics</span>
        </div>

        <nav className="space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: BarChart3, label: "Analytics" },
            { icon: Users, label: "Users" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm",
                item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard Overview</h1>
            <p className="text-muted-foreground">Welcome back, here's what's happening</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 days
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Revenue", value: "$54,239", change: "+12.5%", icon: DollarSign, trend: "up" },
            { label: "Active Users", value: "8,492", change: "+8.2%", icon: Users, trend: "up" },
            { label: "Total Orders", value: "3,241", change: "-3.1%", icon: ShoppingCart, trend: "down" },
            { label: "Conversion", value: "3.6%", change: "+0.8%", icon: TrendingUp, trend: "up" },
          ].map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className={cn("text-sm font-medium", stat.trend === "up" ? "text-green-500" : "text-red-500")}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Revenue Trend</h3>
            <div className="h-64 bg-muted/30 rounded-lg flex items-end justify-around p-4 gap-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t"
                  style={{ height: \`\${height}%\` }}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Traffic Sources</h3>
            <div className="h-64 flex items-center justify-center">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary via-accent to-chart-3" />
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-medium text-sm">Order #{3240 + i}</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <Badge>Completed</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}`,
    "ecommerce-admin": `"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, DollarSign, Package, Users, TrendingUp, Search, Bell } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function EcommerceAdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">E-Store Admin</span>
            </div>
            <nav className="flex items-center gap-1">
              {["Dashboard", "Products", "Orders", "Customers"].map((item) => (
                <Button key={item} variant={item === "Dashboard" ? "secondary" : "ghost"} size="sm">
                  {item}
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-64" />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {[
            { label: "Today's Sales", value: "$12,426", icon: DollarSign, color: "text-green-500" },
            { label: "New Orders", value: "143", icon: ShoppingCart, color: "text-blue-500" },
            { label: "Products", value: "1,254", icon: Package, color: "text-purple-500" },
            { label: "Customers", value: "8,492", icon: Users, color: "text-orange-500" },
            { label: "Revenue", value: "$124k", icon: TrendingUp, color: "text-pink-500" },
          ].map((stat) => (
            <Card key={stat.label} className="p-4 hover:shadow-lg transition-shadow">
              <stat.icon className={cn("h-8 w-8 mb-3", stat.color)} />
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Charts and Products */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Sales Overview</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Week</Button>
                <Button variant="outline" size="sm">Month</Button>
                <Button variant="default" size="sm">Year</Button>
              </div>
            </div>
            <div className="h-64 bg-muted/30 rounded-lg flex items-end justify-around p-4 gap-1">
              {[30, 45, 60, 40, 80, 55, 90, 65, 85, 70, 95, 80].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                  style={{ height: \`\${height}%\` }}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Top Products</h3>
            <div className="space-y-4">
              {["Premium Watch", "Leather Bag", "Sunglasses", "Sneakers"].map((product, i) => (
                <div key={product} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted" />
                    <div>
                      <p className="text-sm font-medium">{product}</p>
                      <p className="text-xs text-muted-foreground">\${(i + 1) * 89} sales</p>
                    </div>
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Recent Orders</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 text-sm font-medium text-muted-foreground">Order ID</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Product</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 text-sm font-medium">#ORD-{3240 + i}</td>
                  <td className="py-4 text-sm">Customer {i}</td>
                  <td className="py-4 text-sm">Product Name</td>
                  <td className="py-4 text-sm font-medium">\${(i * 45).toFixed(2)}</td>
                  <td className="py-4">
                    <Badge>{i % 2 === 0 ? "Shipped" : "Processing"}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}`,
  }

  return codes[dashboardId] || `// Code for ${dashboardId} dashboard component`
}
