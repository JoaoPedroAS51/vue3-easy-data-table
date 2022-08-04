import type { DefineComponent, Slot, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
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
}>;
export default _sfc_main;
