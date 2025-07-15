import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './components/Dashboard/Dashboard';

/*
# Analytics Dashboard

A modern, responsive admin analytics dashboard built with React and TypeScript.

## Features

- 🌙 Dark mode support with keyboard shortcut (Press 'D')
- 🔍 Search functionality with keyboard shortcut (Press '/')
- 📊 Interactive KPI cards with real-time data
- 🎯 Draggable widgets for customizable layout
- 📱 Fully responsive design
- ♿ ARIA-compliant accessibility
- 📄 PDF export functionality
- 🎨 Beautiful UI with Tailwind CSS

## Architecture

- **Components**: Modular component structure with single responsibility
- **Hooks**: Custom hooks for dark mode and keyboard shortcuts
- **Types**: TypeScript interfaces for type safety
- **Data**: Static data for demonstration purposes
- **Utils**: Utility functions for common operations

## Performance

- Optimized for >95 Lighthouse score
- Efficient rendering with React best practices
- Lazy loading and code splitting ready
- Semantic HTML for better SEO

## Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Focus management
- Color contrast compliance

## Usage

- Use 'D' key to toggle dark mode
- Use '/' key to focus search
- Drag widgets to reorder them
- Click filter button to apply filters
- Export dashboard to PDF

*/

function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;