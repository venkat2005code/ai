import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const ManageUsersTable = () => {
  const users = [
    { id: 1, name: "User Alpha", email: "alpha@domain.com", role: "Admin", status: "active" },
    { id: 2, name: "User Beta", email: "beta@domain.com", role: "Editor", status: "active" },
    { id: 3, name: "User Gamma", email: "gamma@domain.com", role: "Viewer", status: "inactive" },
    { id: 4, name: "User Delta", email: "delta@domain.com", role: "Editor", status: "active" },
    { id: 5, name: "User Epsilon", email: "epsilon@domain.com", role: "Viewer", status: "pending" }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-600 text-white border-green-700";
      case "inactive":
        return "bg-slate-600 text-white border-slate-700";
      case "pending":
        return "bg-orange-600 text-white border-orange-700";
      default:
        return "bg-slate-600 text-white border-slate-700";
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 shadow-lg">
      <div className="border-b-2 border-slate-200 px-7 py-5">
        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Manage Users</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900 border-b-2 border-slate-700">
              <th className="px-7 py-4 text-left text-xs font-black text-white uppercase tracking-wider">ID</th>
              <th className="px-7 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Name</th>
              <th className="px-7 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Email</th>
              <th className="px-7 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Role</th>
              <th className="px-7 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Status</th>
              <th className="px-7 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-200">
            {users.map((user) => (
              <tr 
                key={user.id}
                className="hover:bg-slate-50 transition-colors duration-150"
              >
                <td className="px-7 py-5">
                  <span className="text-sm font-black text-slate-900">#{user.id}</span>
                </td>
                <td className="px-7 py-5">
                  <span className="text-sm font-bold text-slate-900">{user.name}</span>
                </td>
                <td className="px-7 py-5">
                  <span className="text-sm font-medium text-slate-600">{user.email}</span>
                </td>
                <td className="px-7 py-5">
                  <span className="text-sm font-bold text-slate-700">{user.role}</span>
                </td>
                <td className="px-7 py-5">
                  <span className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wide border-2 ${getStatusStyles(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-7 py-5">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs px-4 py-2 shadow-md"
                  >
                    <Edit className="w-4 h-4 me-2" strokeWidth={2.5} />
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsersTable;
