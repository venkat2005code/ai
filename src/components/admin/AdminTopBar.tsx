import { Bell, Globe, ChevronDown, User, Settings, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface AdminTopBarProps {
  onMenuClick: () => void;
  setIsRTL: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminTopBar = ({ onMenuClick, setIsRTL }: AdminTopBarProps) => {
  return (
    <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-lg"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-xl lg:text-2xl font-bold text-foreground">Admin Dashboard</h1>
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
                AD
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
  );
};

export default AdminTopBar;
