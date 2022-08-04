import type { ComputedOptions, MethodOptions, App,  Component } from 'vue';
export declare type SFCWithInstall<T> = T & {
    install(app: App): void;
};
export declare const withInstall: <T extends Component<any, any, any, ComputedOptions, MethodOptions>>(main: T, name?: string | undefined) => SFCWithInstall<T>;
