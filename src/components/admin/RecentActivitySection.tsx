import { Activity, UserPlus, FileEdit, Trash2, Settings, Upload } from "lucide-react";

const RecentActivitySection = () => {
  const activities = [
    { icon: UserPlus, label: "New User Registration", time: "2m ago", color: "text-green-600 bg-green-50" },
    { icon: FileEdit, label: "Content Updated", time: "15m ago", color: "text-blue-600 bg-blue-50" },
    { icon: Trash2, label: "Item Deleted", time: "1h ago", color: "text-red-600 bg-red-50" },
    { icon: Settings, label: "System Configuration", time: "3h ago", color: "text-purple-600 bg-purple-50" },
    { icon: Upload, label: "File Upload Complete", time: "5h ago", color: "text-orange-600 bg-orange-50" },
    { icon: Activity, label: "Analytics Report Generated", time: "6h ago", color: "text-cyan-600 bg-cyan-50" }
  ];

  return (
    <div className="bg-white border-2 border-slate-200 shadow-lg">
      <div className="border-b-2 border-slate-200 px-7 py-5">
        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Recent Activity</h2>
      </div>
      
      <div className="p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-slate-100 transition-all duration-200 border-s-4 border-primary"
            >
              <div className={`w-12 h-12 ${activity.color} flex items-center justify-center flex-shrink-0`}>
                <activity.icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{activity.label}</p>
                <p className="text-xs font-semibold text-slate-500 uppercase mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivitySection;
