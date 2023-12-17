import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    blockHosts: ['*.sentry.io'],
    viewportWidth: 1366,
    viewportHeight: 768,
    env: {
      environment: 'staging',
      staging: {
        baseUrl: 'https://www.cp.pt',
        keycloakUrl: 'http://192.168.100.220:8082',
        apiUrl: 'http://192.168.100.210:5056',
        username: 'jonathan.rockefeller',
        password: 'adminadmin',
      },
      dev: {
        baseUrl: 'https://www.cp.pt',
        keycloakUrl: 'http://192.168.100.220:8081',
        apiUrl: 'http://192.168.100.210:5055',
      },
    },
    setupNodeEvents(on, config) {
      const envConfig: Record<string, string> = config.env[config.env.environment];
      Object.assign(config.env, envConfig);
      config.baseUrl = envConfig['baseUrl'];
      return config;
    },
  },
});
