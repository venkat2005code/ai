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
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-72">
        {/* Top Bar */}
        <AdminTopBar />

        {/* Page Content */}
        <main className="p-8 space-y-8">
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
