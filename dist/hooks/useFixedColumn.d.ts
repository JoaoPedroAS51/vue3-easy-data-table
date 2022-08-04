import type { ComputedRef, Ref } from 'vue';
import type { HeaderForRender } from '../types/internal';
declare type FixedColumnsInfo = {
    value: string;
    fixed: Boolean;
    distance: number;
    width: number;
};
export default function useFixedColumn(headersForRender: Ref<HeaderForRender[]>): {
    fixedHeaders: ComputedRef<HeaderForRender[]>;
    lastFixedColumn: ComputedRef<string>;
    fixedColumnsInfos: ComputedRef<FixedColumnsInfo[]>;
};
export {};
