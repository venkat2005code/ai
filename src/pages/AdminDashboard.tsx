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

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        {/* Top Bar */}
        <AdminTopBar onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content */}
        <main className="p-4 lg:p-8 space-y-6 lg:space-y-8">
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
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
