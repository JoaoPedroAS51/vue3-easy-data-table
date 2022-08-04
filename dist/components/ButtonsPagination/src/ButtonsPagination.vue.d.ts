import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare type PaginationItem = {
    type: 'button';
    page: number;
    active: boolean;
    activePrev: boolean;
} | {
    type: 'omission';
};
declare const _sfc_main: DefineComponent<{
    maxPaginationNumber: {
        type: NumberConstructor;
        required: true;
    };
    currentPaginationNumber: {
        type: NumberConstructor;
        required: true;
    };
}, {
    emits: (event: "updatePage", ...args: any[]) => void;
    props: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        maxPaginationNumber: {
            type: NumberConstructor;
            required: true;
        };
        currentPaginationNumber: {
            type: NumberConstructor;
            required: true;
        };
    }>> & {
        onUpdatePage?: ((...args: any[]) => any) | undefined;
    }>>;
    totalVisible: number;
    changePage: (item: PaginationItem) => void;
    paginationItemsForRender: ComputedRef<PaginationItem[]>;
    themeColor: unknown;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "updatePage"[], "updatePage", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    maxPaginationNumber: {
        type: NumberConstructor;
        required: true;
    };
    currentPaginationNumber: {
        type: NumberConstructor;
        required: true;
    };
}>> & {
    onUpdatePage?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
