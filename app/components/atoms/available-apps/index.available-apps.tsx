import React, { useLayoutEffect, useState } from 'react';
import { Text } from 'react-native';

import { type AppDetail } from 'react-native-launcher-kit/typescript/Interfaces/InstalledApps';

const styles = {
  appContainer: {
    backgroundColor: '#fff9c4',
    flex: 0.3
  },
  appName: {
    fontSize: 20,
    padding: 20,
    margin: 20
  }
};

export const AvailableAppsContainer = ({ apps }: { apps: AppDetail[] }) => {
  const [showAppContainer, setshowAppContainer] = useState(false);

  useLayoutEffect(() => {
    if (apps.length > 0) {
      setshowAppContainer(true);
    }
  }, [apps.length]);

  if (!showAppContainer) {
    return null;
  }

  return (
    <Text style={styles.appContainer}>
      {apps.map((app) => (
        <Text key={app.label} style={styles.appName}>
          {app.label}
        </Text>
      ))}
    </Text>
  );
};
