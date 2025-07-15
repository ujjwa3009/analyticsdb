import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { FilterPanel } from '../FilterPanel/FilterPanel';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import { navigationItems } from '../../data/staticData';
import { FilterState } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const focusSearch = () => {
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    searchInput?.focus();
  };

  useKeyboardShortcuts({
    onDarkModeToggle: toggleDarkMode,
    onSearch: focusSearch
  });

  const handleFilterChange = (filters: FilterState) => {
    console.log('Filters changed:', filters);
    // Implement filter logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar isDarkMode={isDarkMode} onDarkModeToggle={toggleDarkMode} />
      
      <div className="flex">
        <Sidebar navigationItems={navigationItems} />
        
        <main className="flex-1 p-6" role="main">
          <div id="dashboard-content">
            {children}
          </div>
        </main>
      </div>

      <FilterPanel
        onFilterChange={handleFilterChange}
        isOpen={isFilterOpen}
        onToggle={() => setIsFilterOpen(!isFilterOpen)}
      />
    </div>
  );
};