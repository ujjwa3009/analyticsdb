import React from 'react';
import * as Icons from 'lucide-react';
import { NavigationItem } from '../../types';

interface SidebarProps {
  navigationItems: NavigationItem[];
  isCollapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ navigationItems, isCollapsed = false }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  return (
    <aside 
      className={`bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      aria-label="Main navigation"
    >
      <nav className="mt-8 px-4">
        <ul className="space-y-2" role="list">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  item.isActive
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                aria-current={item.isActive ? 'page' : undefined}
                title={isCollapsed ? item.label : undefined}
              >
                <span className="flex-shrink-0">
                  {getIcon(item.icon)}
                </span>
                {!isCollapsed && (
                  <span className="ml-3">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};