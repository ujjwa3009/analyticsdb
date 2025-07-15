import React, { useRef } from 'react';
import { Bell, Download } from 'lucide-react';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import { SearchBar, SearchBarRef } from '../SearchBar/SearchBar';
import { exportToPDF } from '../../utils/exportToPDF';

interface NavbarProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onDarkModeToggle }) => {
  const searchRef = useRef<SearchBarRef>(null);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality here
  };

  const handleExportPDF = () => {
    exportToPDF('dashboard-content', 'analytics-dashboard');
  };

  const focusSearch = () => {
    searchRef.current?.focus();
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <SearchBar
            ref={searchRef}
            onSearch={handleSearch}
            placeholder="Search dashboard... (Press '/')"
          />
          
          <button
            onClick={handleExportPDF}
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            aria-label="Export to PDF"
            title="Export dashboard to PDF"
          >
            <Download className="h-5 w-5" />
          </button>

          <button
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>

          <DarkModeToggle isDarkMode={isDarkMode} onToggle={onDarkModeToggle} />
        </div>
      </div>
    </nav>
  );
};