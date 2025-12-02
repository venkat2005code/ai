const RecentProjectsTable = () => {
  const projects = [
    { id: 1, name: "Project Alpha", client: "Client A", progress: 85, status: "active" },
    { id: 2, name: "Project Beta", client: "Client B", progress: 60, status: "active" },
    { id: 3, name: "Project Gamma", client: "Client C", progress: 100, status: "completed" },
    { id: 4, name: "Project Delta", client: "Client D", progress: 30, status: "active" },
    { id: 5, name: "Project Epsilon", client: "Client E", progress: 45, status: "paused" }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-600";
    if (progress >= 50) return "bg-blue-600";
    if (progress >= 30) return "bg-orange-600";
    return "bg-red-600";
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-600 text-white border-green-700";
      case "completed":
        return "bg-blue-600 text-white border-blue-700";
      case "paused":
        return "bg-orange-600 text-white border-orange-700";
      default:
        return "bg-slate-600 text-white border-slate-700";
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 shadow-lg">
      <div className="border-b-2 border-slate-200 px-7 py-5">
        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Recent Projects</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900 border-b-2 border-slate-700">
              <th className="px-7 py-4 text-start text-xs font-black text-white uppercase tracking-wider">ID</th>
              <th className="px-7 py-4 text-start text-xs font-black text-white uppercase tracking-wider">Project Name</th>
              <th className="px-7 py-4 text-start text-xs font-black text-white uppercase tracking-wider">Client</th>
              <th className="px-7 py-4 text-start text-xs font-black text-white uppercase tracking-wider">Progress</th>
              <th className="px-7 py-4 text-start text-xs font-black text-white uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-200">
            {projects.map((project) => (
              <tr 
                key={project.id}
                className="hover:bg-slate-50 transition-colors duration-150"
              >
                <td className="px-7 py-6">
                  <span className="text-sm font-black text-slate-900">#{project.id}</span>
                </td>
                <td className="px-7 py-6">
                  <span className="text-sm font-bold text-slate-900">{project.name}</span>
                </td>
                <td className="px-7 py-6">
                  <span className="text-sm font-medium text-slate-600">{project.client}</span>
                </td>
                <td className="px-7 py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-3 bg-slate-200 overflow-hidden max-w-[200px]">
                      <div 
                        className={`h-full ${getProgressColor(project.progress)} transition-all duration-300`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-black text-slate-900 min-w-[45px]">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-7 py-6">
                  <span className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wide border-2 ${getStatusStyles(project.status)}`}>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProjectsTable;
