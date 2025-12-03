import { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopBar from "@/components/admin/AdminTopBar";
import RecentActivitySection from "@/components/admin/RecentActivitySection";
import NotificationsSection from "@/components/admin/NotificationsSection";
import ManageUsersTable from "@/components/admin/ManageUsersTable";
import QuickActionsGrid from "@/components/admin/QuickActionsGrid";
import SystemStatusSection from "@/components/admin/SystemStatusSection";
import RecentProjectsTable from "@/components/admin/RecentProjectsTable";

interface AdminDashboardProps {
  isRTL: boolean;
  setIsRTL: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminDashboard = ({ isRTL, setIsRTL }: AdminDashboardProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-secondary/20">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto lg:ms-64">
        {/* Top Bar */}
        <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-30">
          <AdminTopBar onMenuClick={() => setSidebarOpen(true)} setIsRTL={setIsRTL} />
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-8 space-y-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <RecentActivitySection />
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <NotificationsSection />
          </motion.div>

          {/* Manage Users Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ManageUsersTable />
          </motion.div>

          {/* Quick Actions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <QuickActionsGrid />
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <SystemStatusSection />
          </motion.div>

          {/* Recent Projects Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <RecentProjectsTable />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
