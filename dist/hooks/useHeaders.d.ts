import { Ref, ComputedRef, WritableComputedRef } from 'vue';
import type { Header, SortType } from '../types/main';
import type { ServerOptionsComputed, HeaderForRender } from '../types/internal';
export default function useHeaders(checkboxColumnWidth: Ref<number>, expandColumnWidth: Ref<number>, fixedCheckbox: Ref<boolean>, fixedExpand: Ref<boolean>, fixedIndex: Ref<boolean>, headers: Ref<Header[]>, ifHasExpandSlot: ComputedRef<boolean>, indexColumnWidth: Ref<number>, isMultipleSelectable: ComputedRef<boolean>, isServerSideMode: ComputedRef<boolean>, mustSort: Ref<boolean>, serverOptionsComputed: WritableComputedRef<ServerOptionsComputed | null>, showIndex: Ref<boolean>, sortBy: Ref<string>, sortType: Ref<SortType>, updateServerOptionsSort: (newSortBy: string, newSortType: SortType | null) => void): {
    clientSortOptions: Ref<{
        sortBy: string;
        sortDesc: boolean;
    } | null>;
    headerColumns: ComputedRef<string[]>;
    headersForRender: ComputedRef<HeaderForRender[]>;
    updateSortField: (newSortBy: string, oldSortType: SortType | 'none') => void;
};
