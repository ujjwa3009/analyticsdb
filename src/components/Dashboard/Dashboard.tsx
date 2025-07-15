import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import { KPICard } from '../KPICard/KPICard';
import { Widget } from '../Widget/Widget';
import { kpiData, widgets } from '../../data/staticData';
import { Widget as WidgetType } from '../../types';

export const Dashboard: React.FC = () => {
  const [widgetList, setWidgetList] = useState<WidgetType[]>(widgets);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setWidgetList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor your key performance indicators and track business metrics
        </p>
      </div>

      {/* KPI Cards */}
      <section aria-label="Key Performance Indicators">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} />
          ))}
        </div>
      </section>

      {/* Draggable Widgets */}
      <section aria-label="Dashboard Widgets">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Analytics Widgets
        </h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={widgetList} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {widgetList.map((widget) => (
                <Widget key={widget.id} widget={widget} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </section>

      {/* Quick Actions */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300">Generate Report</h3>
            <p className="text-sm text-blue-700 dark:text-blue-400">Create a custom analytics report</p>
          </button>
          <button className="p-4 text-left bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200">
            <h3 className="font-semibold text-green-900 dark:text-green-300">Export Data</h3>
            <p className="text-sm text-green-700 dark:text-green-400">Download data in various formats</p>
          </button>
          <button className="p-4 text-left bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200">
            <h3 className="font-semibold text-purple-900 dark:text-purple-300">Schedule Alert</h3>
            <p className="text-sm text-purple-700 dark:text-purple-400">Set up automated notifications</p>
          </button>
        </div>
      </section>
    </div>
  );
};