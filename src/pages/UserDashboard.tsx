import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard,
  User,
  Wrench,
  BarChart3,
  Bell,
  HelpCircle,
  Settings,
  Globe,
  ChevronDown,
  LogOut,
  Plus,
  List,
  MessageSquare,
  CheckCircle2,
  FileText,
  Folder,
  Zap,
  CreditCard,
  ArrowRight,
  Circle,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDashboard = ({ isRTL, setIsRTL }) => {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "profile", label: "Profile", icon: User },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "support", label: "Support", icon: HelpCircle },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  const usageData = [
    { label: "Tool A", value: "245", max: "500" },
    { label: "Tool B", value: "89", max: "100" },
    { label: "Tool C", value: "1.2K", max: "5K" }
  ];

  const recentItems = [
    {
      icon: FileText,
      title: "Document Processing",
      description: "Completed analysis of quarterly report",
      timestamp: "15 min ago",
      status: "success"
    },
    {
      icon: Folder,
      title: "Project Alpha",
      description: "New files added to workspace",
      timestamp: "1 hour ago",
      status: "info"
    },
    {
      icon: Zap,
      title: "Automation Task",
      description: "Workflow executed successfully",
      timestamp: "3 hours ago",
      status: "success"
    },
    {
      icon: MessageSquare,
      title: "Team Message",
      description: "New comment on shared document",
      timestamp: "5 hours ago",
      status: "info"
    },
    {
      icon: CheckCircle2,
      title: "Backup Complete",
      description: "All data synced to cloud storage",
      timestamp: "1 day ago",
      status: "success"
    }
  ];

  return (
    <div className="flex h-screen bg-secondary/20">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <aside className={`w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col fixed inset-y-0 start-0 z-50 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'ltr:-translate-x-full rtl:translate-x-full'
      } lg:translate-x-0`}>
        {/* Logo Area */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-highlight flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="font-bold text-xl">IntelliTools</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* User Profile Block */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
              UN
            </div>
            <div>
              <p className="font-semibold text-sm">User Name</p>
              <p className="text-xs text-white/60">Plan: Pro</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activePage === item.id
                  ? "bg-primary text-white shadow-lg"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom User Info */}
        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">v2.5.0 • 2025</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto lg:ms-64">
        {/* Top Bar */}
        <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-30">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-lg"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl lg:text-2xl font-bold text-foreground">User Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Language/RTL Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-lg"
                onClick={() => setIsRTL((v) => !v)}
                aria-label="Toggle layout direction"
              >
                <Globe className="w-5 h-5" />
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="rounded-lg relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
              </Button>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-highlight flex items-center justify-center text-white text-sm font-semibold">
                      UN
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-background border-border">
                  <DropdownMenuItem asChild>
                    <Link to="#" className="cursor-pointer">
                      <User className="w-4 h-4 me-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="#" className="cursor-pointer">
                      <Settings className="w-4 h-4 me-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="cursor-pointer text-red-600">
                      <LogOut className="w-4 h-4 me-2" />
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-8 space-y-6">
          {/* Welcome / Summary Banner */}
          <Card className="overflow-hidden border-s-4 border-s-primary">
            <CardContent className="p-4 lg:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Welcome back!</h2>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    You have 3 active projects and 12 pending tasks. Stay productive and keep moving forward.
                  </p>
                </div>
                <div className="flex gap-3 lg:gap-6">
                  <div className="text-center px-6 py-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">8</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Active Projects</div>
                  </div>
                  <div className="text-center px-6 py-4 bg-accent/5 rounded-lg border border-accent/10">
                    <div className="text-3xl font-bold text-accent mb-1">2.4K</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Usage This Month</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metrics / Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Usage Overview Card */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Usage Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usageData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">
                          {item.value} / {item.max}
                        </span>
                        <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-highlight rounded-full"
                            style={{ width: `${(parseInt(item.value) / parseInt(item.max)) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activity Breakdown Card */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Activity Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8">
                  {/* Chart Placeholder */}
                  <div className="w-40 h-40 rounded-full border-8 border-primary/20 relative mb-6">
                    <div className="absolute inset-0 rounded-full" style={{
                      background: `conic-gradient(from 0deg, hsl(var(--primary)) 0% 40%, hsl(var(--accent)) 40% 70%, hsl(var(--highlight)) 70% 100%)`
                    }}></div>
                    <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">100%</div>
                        <div className="text-xs text-muted-foreground">Total</div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-primary"></div>
                        <span className="text-sm text-muted-foreground">Category A</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-accent"></div>
                        <span className="text-sm text-muted-foreground">Category B</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-highlight"></div>
                        <span className="text-sm text-muted-foreground">Category C</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">30%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Items - Left Column (2/3) */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader className="border-b border-border">
                  <CardTitle className="text-lg">Recent Items</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {recentItems.map((item, index) => (
                      <div key={index} className="p-4 hover:bg-secondary/30 transition-colors flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.status === 'success' ? 'bg-green-500/10' : 'bg-blue-500/10'
                        }`}>
                          <item.icon className={`w-5 h-5 ${
                            item.status === 'success' ? 'text-green-600' : 'text-blue-600'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-1">
                            <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                            <Badge 
                              variant="outline" 
                              className={`text-xs whitespace-nowrap ${
                                item.status === 'success' 
                                  ? 'border-green-500/30 text-green-600 bg-green-500/5' 
                                  : 'border-blue-500/30 text-blue-600 bg-blue-500/5'
                              }`}
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Stacked Cards */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-primary hover:bg-primary/90 rounded-lg" asChild>
                    <Link to="#">
                      <Plus className="w-4 h-4 me-2" />
                      Create New
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-lg" asChild>
                    <Link to="#">
                      <List className="w-4 h-4 me-2" />
                      View All Items
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-lg" asChild>
                    <Link to="#">
                      <Settings className="w-4 h-4 me-2" />
                      Open Settings
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Support & Status */}
              <Card className="border-border bg-gradient-to-br from-accent/5 to-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Support & Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Need help? Our support team is available 24/7 to assist you with any questions.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 rounded-lg" asChild>
                    <Link to="/contact">
                      <MessageSquare className="w-4 h-4 me-2" />
                      Contact Support
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2 pt-2 border-t border-border">
                    <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                    <span className="text-xs text-muted-foreground">All systems normal</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Plan & Billing Row */}
          <Card className="border-t-4 border-t-primary/50">
            <CardHeader>
              <CardTitle className="text-lg">Plan & Billing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-primary text-white px-3 py-1">Pro Plan</Badge>
                      <span className="text-sm text-muted-foreground">Active</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Renewal:</span>
                        <span className="font-medium text-foreground">Dec 28, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Current Balance:</span>
                        <span className="font-medium text-foreground">$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Payment Method:</span>
                        <span className="font-medium text-foreground">•••• 4242</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Billing Information</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Manage your subscription, payment methods, and view billing history.
                    </p>
                  </div>
                  <Button variant="ghost" className="justify-start text-primary hover:text-primary/80 p-0 h-auto mt-4" asChild>
                    <Link to="/pricing">
                      Manage billing
                      <ArrowRight className="w-4 h-4 ms-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
