import type { App, Component } from 'vue';

export type SFCWithInstall<T> = T & { install(app: App): void };

export const withInstall = <T extends Component>(
  main: T,
  name?: string,
): SFCWithInstall<T> => ({
    ...main,
    install: (app: App): void => {
      app.component(name ?? main.name ?? 'Unknown', main);
    },
  });
