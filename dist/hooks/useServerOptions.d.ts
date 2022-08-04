import type { WritableComputedRef, Ref } from 'vue';
import type { SortType, ServerOptions } from '../types/main';
import type { ServerOptionsComputed, EmitsEventName } from '../types/internal';
export default function useServerOptions(serverOptions: Ref<ServerOptions | null>, emits: (event: EmitsEventName, ...args: any[]) => void): {
    serverOptionsComputed: WritableComputedRef<ServerOptionsComputed | null>;
    updateServerOptionsPage: (page: number) => void;
    updateServerOptionsSort: (newSortBy: string, newSortType: SortType | null) => void;
    updateServerOptionsRowsPerPage: (rowsPerPage: number) => void;
};
