import { Ref, ComputedRef } from 'vue';
import type { ServerOptions } from '../types/main';
export default function usePagination(isServerSideMode: ComputedRef<boolean>, loading: Ref<boolean>, totalItemsLength: Ref<number>, rowsPerPage: Ref<number>, serverOptions: Ref<ServerOptions | null>, updateServerOptionsPage: (page: number) => void): {
    currentPaginationNumber: any;
    maxPaginationNumber: ComputedRef<number>;
    isLastPage: ComputedRef<boolean>;
    isFirstPage: ComputedRef<boolean>;
    nextPage: () => void;
    prevPage: () => void;
    updatePage: (page: number) => void;
    updateCurrentPaginationNumber: (page: number) => void;
};
