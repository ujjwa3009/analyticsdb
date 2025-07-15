export interface KPIData {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export interface Widget {
  id: string;
  title: string;
  type: 'chart' | 'table' | 'metric';
  data: ChartData | any;
  size: 'small' | 'medium' | 'large';
}

export interface FilterState {
  dateRange: string;
  category: string;
  status: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}