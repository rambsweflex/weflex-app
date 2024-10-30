"use client";

import { useParams } from "next/navigation";
import UserManagement from "./components/main/UserManagement";
import Sidebar from "./components/sidebar/Sidebar";

const Zendesk = () => {
  const params = useParams();

  console.log(params);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {params?.section === 'users' ? (
          <UserManagement />
        ) : (
          <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Zendesk Dashboard</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Active Tickets</h2>
                <p className="text-2xl sm:text-3xl font-bold text-[#25CE7B]">24</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">5 urgent tickets</p>
              </div>

              <div className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Response Time</h2>
                <p className="text-2xl sm:text-3xl font-bold text-[#25CE7B]">1.5h</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Average response time</p>
              </div>

              <div className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Customer Satisfaction</h2>
                <p className="text-2xl sm:text-3xl font-bold text-[#25CE7B]">94%</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Based on recent tickets</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Zendesk
