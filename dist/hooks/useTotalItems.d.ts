import type { WritableComputedRef, Ref,  ComputedRef } from 'vue';
import type { Item, FilterOption } from '../types/main';
import type { ClientSortOptions, EmitsEventName } from '../types/internal';
export default function useTotalItems(clientSortOptions: Ref<ClientSortOptions | null>, filterOptions: Ref<FilterOption[]>, isServerSideMode: ComputedRef<boolean>, items: Ref<Item[]>, itemsSelected: Ref<Item[]>, searchField: Ref<string>, searchValue: Ref<string>, serverItemsLength: Ref<number>, emits: (event: EmitsEventName, ...args: any[]) => void): {
    totalItems: ComputedRef<Item[]>;
    selectItemsComputed: WritableComputedRef<Item[]>;
    totalItemsLength: ComputedRef<number>;
    toggleSelectAll: (isChecked: boolean) => void;
    toggleSelectItem: (item: Item) => void;
};
