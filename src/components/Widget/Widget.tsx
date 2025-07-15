import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, MoreHorizontal } from 'lucide-react';
import { Widget as WidgetType } from '../../types';
import { Chart } from '../Chart/Chart';

interface WidgetProps {
  widget: WidgetType;
}

export const Widget: React.FC<WidgetProps> = ({ widget }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: widget.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'large':
        return 'col-span-3 row-span-2';
      default:
        return 'col-span-2 row-span-1';
    }
  };

  const renderContent = () => {
    switch (widget.type) {
      case 'chart':
        return <Chart data={widget.data} type="line" height={widget.size === 'large' ? 400 : 200} />;
      case 'metric':
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {widget.data.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {widget.data.label}
            </div>
          </div>
        );
      default:
        return <div className="text-center text-gray-500">No content available</div>;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 ${getSizeClasses(widget.size)} hover:shadow-md transition-shadow duration-200`}
      {...attributes}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {widget.title}
        </h3>
        <div className="flex items-center space-x-2">
          <button
            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
          <button
            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-grab active:cursor-grabbing"
            aria-label="Drag to reorder"
            {...listeners}
          >
            <GripVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="h-full">
        {renderContent()}
      </div>
    </div>
  );
};