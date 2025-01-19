import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Home,
  BarChart2,
  Users,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";

const SideBar = () => {
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Overview", href: "#overview" },
    { icon: BarChart2, label: "Analytics", href: "#analytics" },
    { icon: Users, label: "Team", href: "#team" },
    { icon: FileText, label: "Documents", href: "#documents" },
    { icon: Settings, label: "Settings", href: "#settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:transform-none transition-transform duration-200 ease-in-out
          w-64 bg-white border-r border-gray-200
        `}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center justify-center gap-4 mr-5">
              <h1 className="text-xl font-semibold text-gray-800">
                Organization Details
              </h1>
              <Link className="text-xl font-semibold text-gray-800" to="/home">Home</Link>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Add your dashboard content here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example card */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Organization Overview
                </h3>
                <p className="text-gray-600">Organization ID: {id}</p>
                {/* Add more content here */}
              </div>

              {/* Add more dashboard cards/components here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SideBar;
