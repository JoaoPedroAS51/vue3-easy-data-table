import { Ref, ComputedRef } from 'vue';
import type { EmitsEventName } from '../types/internal';
export default function useClickRow(isMultipleSelectable: ComputedRef<boolean>, showIndex: Ref<boolean>, emits: (event: EmitsEventName, ...args: any[]) => void): {
    clickRow: (item: Item) => void;
};
