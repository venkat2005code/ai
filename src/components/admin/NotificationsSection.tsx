import { AlertTriangle, Info, CheckCircle, AlertCircle } from "lucide-react";

const NotificationsSection = () => {
  const notifications = [
    { 
      type: "critical", 
      icon: AlertTriangle, 
      title: "System Alert", 
      message: "Critical issue detected in module",
      iconColor: "text-red-600",
      bgColor: "bg-red-600",
      borderColor: "border-red-600"
    },
    { 
      type: "warning", 
      icon: AlertCircle, 
      title: "Warning Notice", 
      message: "Action required for pending tasks",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-600",
      borderColor: "border-orange-600"
    },
    { 
      type: "info", 
      icon: Info, 
      title: "Information Update", 
      message: "New features available in dashboard",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600",
      borderColor: "border-blue-600"
    },
    { 
      type: "success", 
      icon: CheckCircle, 
      title: "Success Confirmation", 
      message: "All systems operational and running",
      iconColor: "text-green-600",
      bgColor: "bg-green-600",
      borderColor: "border-green-600"
    }
  ];

  return (
    <div className="bg-white border-2 border-slate-200 shadow-lg">
      <div className="border-b-2 border-slate-200 px-7 py-5">
        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Notifications</h2>
      </div>
      
      <div className="p-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {notifications.map((notification, index) => (
            <div 
              key={index}
              className={`bg-white border-2 ${notification.borderColor} shadow-md hover:shadow-lg transition-shadow duration-200`}
            >
              <div className={`h-2 ${notification.bgColor}`}></div>
              <div className="p-5 flex items-start gap-4">
                <div className={`w-11 h-11 border-2 ${notification.borderColor} flex items-center justify-center flex-shrink-0`}>
                  <notification.icon className={`w-6 h-6 ${notification.iconColor}`} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-black text-slate-900 mb-1 uppercase tracking-tight">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">{notification.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;
