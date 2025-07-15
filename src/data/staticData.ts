import { KPIData, Widget, NavigationItem } from '../types';

export const kpiData: KPIData[] = [
  {
    id: '1',
    title: 'Total Users',
    value: '45,678',
    change: '+12.5%',
    changeType: 'positive',
    icon: 'users'
  },
  {
    id: '2',
    title: 'Revenue',
    value: '$125,430',
    change: '+8.2%',
    changeType: 'positive',
    icon: 'dollar-sign'
  },
  {
    id: '3',
    title: 'Growth Rate',
    value: '23.5%',
    change: '-2.1%',
    changeType: 'negative',
    icon: 'trending-up'
  },
  {
    id: '4',
    title: 'Conversion',
    value: '3.2%',
    change: '+0.8%',
    changeType: 'positive',
    icon: 'target'
  }
];

export const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 2
    }
  ]
};

export const widgets: Widget[] = [
  {
    id: '1',
    title: 'Revenue Overview',
    type: 'chart',
    data: chartData,
    size: 'large'
  },
  {
    id: '2',
    title: 'User Growth',
    type: 'chart',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'New Users',
          data: [1200, 1900, 1500, 2100],
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderColor: 'rgb(16, 185, 129)',
          borderWidth: 2
        }
      ]
    },
    size: 'medium'
  },
  {
    id: '3',
    title: 'Sales Performance',
    type: 'metric',
    data: { value: '98.5%', label: 'Target Achievement' },
    size: 'small'
  }
];

export const navigationItems: NavigationItem[] = [
  { id: '1', label: 'Dashboard', icon: 'layout-dashboard', href: '/', isActive: true },
  { id: '2', label: 'Analytics', icon: 'bar-chart-3', href: '/analytics' },
  { id: '3', label: 'Users', icon: 'users', href: '/users' },
  { id: '4', label: 'Revenue', icon: 'dollar-sign', href: '/revenue' },
  { id: '5', label: 'Settings', icon: 'settings', href: '/settings' }
];