import type { IconName } from './icons';

export interface CoreFeature {
  id: string;
  name: string;
  description: string;
  icon: IconName;
}

export interface AppData {
  appName: string;
  uiTheme: {
    primaryColor?: string;
  };
  coreFeatures?: CoreFeature[];
}
