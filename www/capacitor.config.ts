import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "athens-capacitor",
  webDir: "out",
  server: {
    androidScheme: "https",
    url: "http://192.168.0.38:3000",
    cleartext: true,
  },
};

export default config;
