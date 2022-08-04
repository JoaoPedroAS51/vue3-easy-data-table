import { Ref } from 'vue';
import type { Item } from '../types/main';
import type { EmitsEventName } from '../types/internal';
export default function useExpandableRow(items: Ref<Item[]>, emits: (event: EmitsEventName, ...args: any[]) => void): {
    expandingItemIndexList: Ref<number[]>;
    updateExpandingItemIndexList: (expandingItemIndex: number, expandingItem: Item, event: Event) => void;
    clearExpandingItemIndexList: () => void;
};
