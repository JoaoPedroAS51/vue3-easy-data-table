import type { ComputedRef, Ref } from 'vue';
import type { ServerOptions } from '../types/main';
export default function useRows(isServerSideMode: Ref<boolean>, rowsItems: Ref<number[]>, serverOptions: Ref<ServerOptions | null>, rowsPerPage: Ref<number>): {
    rowsItemsComputed: ComputedRef<number[]>;
    rowsPerPageRef: any;
};
