"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { UserCircle, Users, Ticket, Settings, MessageSquare, HelpCircle, MenuIcon } from "lucide-react";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { 
      name: "User Management", 
      icon: <Users className="w-5 h-5" />, 
      path: "/zendesk/users" 
    },
    { 
      name: "Tickets", 
      icon: <Ticket className="w-5 h-5" />, 
      path: "/zendesk/tickets" 
    },
    { 
      name: "Live Chat", 
      icon: <MessageSquare className="w-5 h-5" />, 
      path: "/zendesk/chat" 
    },
    { 
      name: "Help Center", 
      icon: <HelpCircle className="w-5 h-5" />, 
      path: "/zendesk/support" 
    },
    { 
      name: "Settings", 
      icon: <Settings className="w-5 h-5" />, 
      path: "/zendesk/settings" 
    },
  ];

  return (
    <div className="h-screen">
      <Sidebar 
        collapsed={collapsed}
        backgroundColor="white"
        style={{ border: '1px solid #e5e7eb' }}
      >
        <div className="flex items-center h-16 px-4 border-b">
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
          {!collapsed && (
            <span className="ml-2 text-[#25CE7B] font-semibold text-xl">WeFlex</span>
          )}
        </div>

        <Menu
          menuItemStyles={{
            button: ({ level, active }: { level: number, active: boolean }) => {
              return {
                backgroundColor: active ? '#f3f4f6' : undefined,
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                },
                color: active ? '#25CE7B' : '#374151',
              };
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              icon={item.icon}
              onClick={() => router.push(item.path)}
              active={pathname === item.path}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex items-center space-x-3">
            <UserCircle className="w-8 h-8 text-gray-500" />
            {!collapsed && (
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@weflex.com</p>
              </div>
            )}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
