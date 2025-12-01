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
    <header className="h-16 lg:h-20 bg-white border-b-2 border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className="h-full px-4 lg:px-8 flex items-center justify-between">
        {/* Left: Menu Button (Mobile) + Title + Breadcrumb */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-10 h-10"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tight">Admin Dashboard</h1>
            <div className="hidden sm:flex items-center gap-2 mt-0.5">
              <span className="text-xs font-bold text-slate-400 uppercase">Home</span>
              <span className="text-xs text-slate-300">/</span>
              <span className="text-xs font-bold text-primary uppercase">Dashboard</span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-10 h-10 bg-slate-100 hover:bg-slate-200 transition-colors"
            onClick={() => setIsRTL(prev => !prev)}
            aria-label="Toggle layout direction"
          >
            <Globe className="w-5 h-5 text-slate-700" strokeWidth={2.5} />
          </Button>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-10 h-10 bg-slate-100 hover:bg-slate-200 transition-colors relative"
          >
            <Bell className="w-5 h-5 text-slate-700" strokeWidth={2.5} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white"></span>
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="gap-3 h-12 px-4 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                  AD
                </div>
                <ChevronDown className="w-4 h-4 text-slate-700" strokeWidth={2.5} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 bg-white border-2 border-slate-200 shadow-xl p-2"
            >
              <DropdownMenuItem asChild>
                <Link to="#" className="cursor-pointer py-3 px-3 flex items-center gap-3">
                  <User className="w-4 h-4" strokeWidth={2.5} />
                  <span className="font-bold text-sm">Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="#" className="cursor-pointer py-3 px-3 flex items-center gap-3">
                  <Settings className="w-4 h-4" strokeWidth={2.5} />
                  <span className="font-bold text-sm">Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2 bg-slate-200" />
              <DropdownMenuItem asChild>
                <Link to="/login" className="cursor-pointer py-3 px-3 flex items-center gap-3 text-red-600">
                  <LogOut className="w-4 h-4" strokeWidth={2.5} />
                  <span className="font-bold text-sm">Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AdminTopBar;
