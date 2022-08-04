import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import type { SFCWithInstall } from '../../helpers';
export declare const EasyDataTableButtonsPagination: SFCWithInstall<DefineComponent<{
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
    changePage: (item: {
        type: "button";
        page: number;
        active: boolean;
        activePrev: boolean;
    } | {
        type: "omission";
    }) => void;
    paginationItemsForRender: ComputedRef<({
        type: "button";
        page: number;
        active: boolean;
        activePrev: boolean;
    } | {
        type: "omission";
    })[]>;
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
}, {}>>;
