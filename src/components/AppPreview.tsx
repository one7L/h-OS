import type { FC } from 'react';
import type { AppData } from './Editor';
import { fallbackIcon, iconMap, isIconName } from './icons';

interface FeatureIconProps {
  readonly name?: string;
  readonly className?: string;
}

const FeatureIcon: FC<FeatureIconProps> = ({ name, className }) => {
  const Icon = name && isIconName(name) ? iconMap[name] : fallbackIcon;
  return <Icon aria-hidden className={className} />;
};

interface AppPreviewProps {
  readonly appData: AppData;
}

export const AppPreview: FC<AppPreviewProps> = ({ appData }) => {
  const primaryColor = appData.uiTheme?.primaryColor ?? '#1D4ED8';
  const coreFeatures = appData.coreFeatures ?? [];
  const featureCount = coreFeatures.length;

  return (
    <div className="w-full h-[calc(100vh-16rem)] bg-muted/30 rounded-xl overflow-hidden border">
      <div className="h-full flex flex-col bg-background">
        {/* App Header */}
        <header
          style={{ backgroundColor: primaryColor }}
          className="p-4 text-white flex items-center justify-between shadow-md transition-colors duration-300"
        >
          <h1 className="text-xl font-bold truncate">{appData.appName}</h1>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/50" />
          </div>
        </header>

        {/* App Body */}
        <div className="p-6 flex-grow overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Core Features</h2>
            <span className="text-sm text-muted-foreground">{featureCount} features</span>
          </div>
          {featureCount > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreFeatures.map(feature => (
                <div
                  key={feature.id}
                  className="bg-card p-4 rounded-xl border hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div
                      style={{ backgroundColor: primaryColor }}
                      className="p-2.5 rounded-lg text-white transition-transform duration-300 group-hover:scale-110"
                    >
                      <FeatureIcon name={feature.icon} className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground mb-1 truncate">{feature.name}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-muted p-6 text-center text-sm text-muted-foreground">
              <span>No core features have been added yet.</span>
              <span className="text-xs">Start by defining features in the editor to see them previewed here.</span>
            </div>
          )}
        </div>

        {/* App Bottom Navigation */}
        {featureCount > 0 && (
          <footer className="mt-auto p-3 border-t bg-card/50">
            <div className="flex justify-around">
              {coreFeatures.slice(0, 4).map(feature => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer py-2"
                >
                  <FeatureIcon name={feature.icon} className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium truncate">{feature.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};
