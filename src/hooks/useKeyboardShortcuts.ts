import { useEffect } from 'react';

interface KeyboardShortcuts {
  onDarkModeToggle: () => void;
  onSearch: () => void;
}

export const useKeyboardShortcuts = ({ onDarkModeToggle, onSearch }: KeyboardShortcuts) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Check if user is typing in an input field
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'd':
          event.preventDefault();
          onDarkModeToggle();
          break;
        case '/':
          event.preventDefault();
          onSearch();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onDarkModeToggle, onSearch]);
};