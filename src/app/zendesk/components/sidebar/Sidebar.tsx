"use client";

import Link from "next/link";
import { UserCircle, Users, Ticket, Settings, MessageSquare, HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="flex items-center h-16 px-4 border-b">
          <span className="text-[#25CE7B] font-semibold text-xl">WeFlex</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            href="/zendesk/users"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Users className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">User Management</span>
          </Link>
          <Link 
            href="/zendesk/tickets"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Ticket className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">Tickets</span>
          </Link>

          <Link 
            href="/zendesk/chat"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">Live Chat</span>
          </Link>

          <Link 
            href="/zendesk/support"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <HelpCircle className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">Help Center</span>
          </Link>

          <Link 
            href="/zendesk/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center space-x-3 px-3 py-2">
            <UserCircle className="w-8 h-8 text-gray-500" />
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@weflex.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
