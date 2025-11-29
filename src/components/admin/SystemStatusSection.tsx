import { Server, Database, Cpu, HardDrive, Wifi, Shield } from "lucide-react";

const SystemStatusSection = () => {
  const systems = [
    { icon: Server, label: "API Server", status: "operational", uptime: "99.9%" },
    { icon: Database, label: "Database", status: "operational", uptime: "99.8%" },
    { icon: Cpu, label: "Processing Unit", status: "warning", uptime: "97.2%" },
    { icon: HardDrive, label: "Storage System", status: "operational", uptime: "99.7%" },
    { icon: Wifi, label: "Network", status: "operational", uptime: "99.9%" },
    { icon: Shield, label: "Security Layer", status: "maintenance", uptime: "95.1%" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-600";
      case "warning":
        return "bg-orange-600";
      case "maintenance":
        return "bg-blue-600";
      default:
        return "bg-slate-600";
    }
  };

  const getStatusBorder = (status: string) => {
    switch (status) {
      case "operational":
        return "border-green-600";
      case "warning":
        return "border-orange-600";
      case "maintenance":
        return "border-blue-600";
      default:
        return "border-slate-600";
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 shadow-lg">
      <div className="border-b-2 border-slate-200 px-7 py-5">
        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">System Status</h2>
      </div>
      
      <div className="p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {systems.map((system, index) => (
            <div 
              key={index}
              className={`bg-white border-2 ${getStatusBorder(system.status)} p-5 hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center">
                    <system.icon className="w-5 h-5 text-slate-700" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                      {system.label}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
                      {system.uptime} uptime
                    </p>
                  </div>
                </div>
                <div className={`w-4 h-4 ${getStatusColor(system.status)} border-2 border-white shadow-md`}></div>
              </div>
              <div className="h-2 bg-slate-100 overflow-hidden">
                <div 
                  className={`h-full ${getStatusColor(system.status)}`}
                  style={{ width: system.uptime }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemStatusSection;
