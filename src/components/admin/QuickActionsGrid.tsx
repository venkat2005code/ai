import { UserPlus, FileText, Settings, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const QuickActionsGrid = () => {
  const actions = [
    { 
      icon: UserPlus, 
      title: "Add New User", 
      description: "Create user account",
      gradient: "from-blue-600 to-cyan-600",
      hoverGradient: "from-blue-700 to-cyan-700"
    },
    { 
      icon: FileText, 
      title: "Create Content", 
      description: "Add new content item",
      gradient: "from-purple-600 to-pink-600",
      hoverGradient: "from-purple-700 to-pink-700"
    },
    { 
      icon: Settings, 
      title: "System Config", 
      description: "Modify settings",
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-700 to-red-700"
    },
    { 
      icon: BarChart3, 
      title: "View Reports", 
      description: "Analytics overview",
      gradient: "from-green-600 to-teal-600",
      hoverGradient: "from-green-700 to-teal-700"
    }
  ];

  return (
    <div className="bg-white border-2 border-slate-200 shadow-lg">
      <div className="border-b-2 border-slate-200 px-7 py-5">
        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Quick Actions</h2>
      </div>
      
      <div className="p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-br ${action.gradient} hover:${action.hoverGradient} text-white p-6 shadow-xl hover:shadow-2xl transition-all duration-200 group`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <action.icon className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight mb-1">
                    {action.title}
                  </h3>
                  <p className="text-xs font-semibold text-white/90">
                    {action.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActionsGrid;
