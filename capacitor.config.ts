import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mx.student.app',
  appName: 'student-tools',
  webDir: 'build',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: '#ffffff',
      splashFullScreen: true,
      splashImmersive: false
    }
  }
};

export default config;