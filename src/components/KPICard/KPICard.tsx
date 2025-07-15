import React from 'react';
import * as Icons from 'lucide-react';
import { KPIData } from '../../types';

interface KPICardProps {
  data: KPIData;
}

export const KPICard: React.FC<KPICardProps> = ({ data }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600 dark:text-green-400';
      case 'negative':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span className="text-blue-600 dark:text-blue-400">
              {getIcon(data.icon)}
            </span>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {data.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {data.value}
            </p>
          </div>
        </div>
        <div className={`text-sm font-medium ${getChangeColor(data.changeType)}`}>
          {data.change}
        </div>
      </div>
    </div>
  );
};