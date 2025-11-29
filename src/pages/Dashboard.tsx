import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Folder, 
  Bell, 
  Activity, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut,
  ArrowRight,
  FileText,
  Briefcase,
  HelpCircle,
  MessageSquare,
  BookOpen,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = ({ isRTL, setIsRTL }) => {
  // Mock user data
  const user = {
    name: "Venkat",
    email: "venkat@example.com",
    plan: "Pro Plan",
    role: "User",
    avatar: "V"
  };

  const stats = [
    { icon: Zap, label: "Active Plan", value: "Pro", color: "text-primary" },
    { icon: Activity, label: "API Requests", value: "12.4K", color: "text-accent" },
    { icon: Folder, label: "Projects", value: "8", color: "text-highlight" },
    { icon: Bell, label: "Notifications", value: "3", color: "text-muted-foreground" }
  ];

  const recentActivity = [
    {
      title: "Created new experiment",
      description: "AI Content Generator v2.0",
      timestamp: "2 hours ago",
      status: "completed",
      icon: CheckCircle
    },
    {
      title: "Updated portfolio project",
      description: "E-commerce Analytics Dashboard",
      timestamp: "5 hours ago",
      status: "completed",
      icon: CheckCircle
    },
    {
      title: "API integration activated",
      description: "Connected Stripe payment gateway",
      timestamp: "1 day ago",
      status: "completed",
      icon: CheckCircle
    },
    {
      title: "Team member invited",
      description: "sarah@example.com added to workspace",
      timestamp: "2 days ago",
      status: "pending",
      icon: Clock
    },
    {
      title: "Billing updated",
      description: "Payment method verified",
      timestamp: "3 days ago",
      status: "completed",
      icon: CheckCircle
    },
    {
      title: "Storage limit warning",
      description: "80% of plan storage used",
      timestamp: "4 days ago",
      status: "warning",
      icon: AlertCircle
    }
  ];

  const quickActions = [
    { label: "Go to Portfolio", href: "/portfolio", icon: Briefcase },
    { label: "View Billing", href: "#", icon: CreditCard },
    { label: "Open Support", href: "/contact", icon: MessageSquare },
    { label: "Update Profile", href: "#", icon: Settings }
  ];

  const shortcuts = [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Support", href: "/contact" },
    { label: "Documentation", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Top Header - Welcome Section */}
          <div className="mb-8">
            <Card className="border-border bg-gradient-to-r from-primary/5 via-highlight/5 to-accent/5">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      User Dashboard
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Welcome back, <span className="font-semibold text-foreground">{user.name}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* User Avatar & Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-highlight flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {user.avatar}
                      </div>
                      <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">{user.plan} • {user.role}</p>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="#">
                          <Settings className="w-4 h-4 mr-2" />
                          Manage Account
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/login">
                          <LogOut className="w-4 h-4 mr-2" />
                          Log out
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-highlight/10 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Area - Two Columns */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Recent Activity & Quick Actions */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Activity */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.status === 'completed' ? 'bg-green-500/10' :
                          activity.status === 'warning' ? 'bg-yellow-500/10' :
                          'bg-blue-500/10'
                        }`}>
                          <activity.icon className={`w-5 h-5 ${
                            activity.status === 'completed' ? 'text-green-600' :
                            activity.status === 'warning' ? 'text-yellow-600' :
                            'text-blue-600'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            {activity.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {activity.description}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {activity.timestamp}
                            </span>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                activity.status === 'completed' ? 'border-green-500/20 text-green-600' :
                                activity.status === 'warning' ? 'border-yellow-500/20 text-yellow-600' :
                                'border-blue-500/20 text-blue-600'
                              }`}
                            >
                              {activity.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start h-auto py-4 hover:border-primary/50 hover:bg-primary/5"
                        asChild
                      >
                        <Link to={action.href}>
                          <action.icon className="w-5 h-5 mr-3 text-primary" />
                          <span className="font-medium">{action.label}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Account Overview & Shortcuts */}
            <div className="space-y-8">
              {/* Account Overview */}
              <Card className="border-border bg-gradient-to-br from-primary/5 to-highlight/5">
                <CardHeader>
                  <CardTitle className="text-xl">Account Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Current Plan</span>
                      <Badge className="bg-primary text-white">Pro</Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">$49/month</div>
                    <p className="text-xs text-muted-foreground">Renews on Dec 28, 2025</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Storage Used</span>
                        <span className="font-semibold text-foreground">12.4 GB / 50 GB</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-[25%] bg-gradient-to-r from-primary to-highlight rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">API Requests</span>
                        <span className="font-semibold text-foreground">12.4K / 50K</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-[25%] bg-gradient-to-r from-accent to-primary rounded-full" />
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full justify-between mt-4 text-primary hover:text-primary/80" asChild>
                    <Link to="/pricing">
                      View full billing
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Shortcuts */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Shortcuts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {shortcuts.map((shortcut, index) => (
                      <Link
                        key={index}
                        to={shortcut.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                          {shortcut.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="border-border bg-gradient-to-br from-accent/5 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-highlight flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our support team is here to assist you 24/7
                  </p>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="md:hidden mt-8 flex gap-3">
            <Button variant="outline" className="flex-1" asChild>
              <Link to="#">
                <Settings className="w-4 h-4 mr-2" />
                Manage Account
              </Link>
            </Button>
            <Button variant="ghost" className="flex-1" asChild>
              <Link to="/login">
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
