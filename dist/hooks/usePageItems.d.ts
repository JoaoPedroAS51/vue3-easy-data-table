import { Ref, ComputedRef, WritableComputedRef } from 'vue';
import type { Item } from '../types/main';
import type { MultipleSelectStatus } from '../types/internal';
export default function usePageItems(currentPaginationNumber: Ref<number>, isMultipleSelectable: ComputedRef<boolean>, isServerSideMode: ComputedRef<boolean>, items: Ref<Item[]>, rowsPerPageRef: Ref<number>, selectItemsComputed: WritableComputedRef<Item[]>, showIndex: Ref<boolean>, totalItems: ComputedRef<Item[]>, totalItemsLength: ComputedRef<number>): {
    currentPageFirstIndex: ComputedRef<number>;
    currentPageLastIndex: ComputedRef<number>;
    multipleSelectStatus: ComputedRef<MultipleSelectStatus>;
    pageItems: ComputedRef<Item[]>;
};
