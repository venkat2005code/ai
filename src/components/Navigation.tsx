import { Button } from "@/components/ui/button";
import { Menu, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = ({ isRTL, setIsRTL }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" aria-label="Go to home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-highlight flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">AI</span>
            </div>
            <span className="font-bold text-xl text-foreground">IntelliTools</span>
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                Home
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem asChild>
                  <Link to="/" className="cursor-pointer">Home 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/home-2" className="cursor-pointer">Home 2</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                Dashboard
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem asChild>
                  <Link to="/user-dashboard" className="cursor-pointer">User</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/admin" className="cursor-pointer">Admin</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsRTL((v) => !v)}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-foreground text-sm font-medium shadow hover:bg-accent transition-colors"
              aria-label="Toggle layout direction"
            >
              <Globe className="h-4 w-4" />
              <span>{isRTL ? "RTL" : "LTR"}</span>
            </button>
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Actions - Globe + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsRTL((v) => !v)}
              className="flex items-center justify-center p-2 rounded-lg bg-muted text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle layout direction"
            >
              <Globe className="h-5 w-5" />
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground px-2">Home</div>
              <Link
                to="/"
                className="block py-2 ps-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Home 1
              </Link>
              <Link
                to="/home-2"
                className="block py-2 ps-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Home 2
              </Link>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground px-2">Dashboard</div>
              <Link
                to="/user-dashboard"
                className="block py-2 ps-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                User
              </Link>
              <Link
                to="/dashboard/admin"
                className="block py-2 ps-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Admin
              </Link>
            </div>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
