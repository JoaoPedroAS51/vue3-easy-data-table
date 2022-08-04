import type { DefineComponent, Slot, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from '../../helpers';
export declare const EasyDataTablePaginationArrows: SFCWithInstall<DefineComponent<{
    isFirstPage: {
        type: BooleanConstructor;
        required: false;
    };
    isLastPage: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    emits: (event: "clickPrevPage" | "clickNextPage", ...args: any[]) => void;
    slots: Readonly<{
        [name: string]: Slot | undefined;
    }>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("clickPrevPage" | "clickNextPage")[], "clickPrevPage" | "clickNextPage", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    isFirstPage: {
        type: BooleanConstructor;
        required: false;
    };
    isLastPage: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    onClickPrevPage?: ((...args: any[]) => any) | undefined;
    onClickNextPage?: ((...args: any[]) => any) | undefined;
}, {
    isLastPage: boolean;
    isFirstPage: boolean;
}>>;
