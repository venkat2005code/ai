import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Cpu,
  BarChart2,
  FileText,
  Bell,
  ClipboardList,
  Settings,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Manage Users", icon: Users },
    { id: "ai-tools", label: "AI Tools", icon: Cpu },
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "content", label: "Content", icon: FileText },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "reports", label: "Reports", icon: ClipboardList },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <aside className={`w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 fixed inset-y-0 start-0 border-e border-slate-700/50 shadow-2xl z-50 transition-transform duration-300 flex flex-col lg:translate-x-0 ${isOpen ? 'translate-x-0' : 'max-lg:ltr:-translate-x-full max-lg:rtl:translate-x-full'
      }`}>
      {/* Logo Section */}
      <div className="h-20 flex items-center justify-between px-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-tr from-primary via-accent to-highlight rounded-sm flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-xl">A</span>
          </div>
          <div>
            <h1 className="text-white font-black text-lg tracking-tight">ADMIN PANEL</h1>
            <p className="text-slate-400 text-xs font-medium">Control Center</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-slate-700/50"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Admin Avatar Section */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">AD</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-base">Admin User</h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Super Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`w-full flex items-center text-start gap-4 px-5 py-3.5 rounded-lg transition-all duration-200 ${activeItem === item.id
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
            <span className="text-sm font-bold tracking-wide uppercase">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700/50 flex-shrink-0">
        <div className="text-center">
          <p className="text-slate-500 text-xs font-semibold">v3.2.1</p>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
