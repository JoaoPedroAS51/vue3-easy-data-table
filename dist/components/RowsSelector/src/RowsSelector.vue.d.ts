import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, WritableComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType,  Ref } from 'vue';
declare const _sfc_main: DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    rowsItems: {
        type: PropType<number[]>;
        required: true;
    };
}, {
    props: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        modelValue: {
            type: NumberConstructor;
            required: true;
        };
        rowsItems: {
            type: PropType<number[]>;
            required: true;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>>;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    showList: Ref<boolean>;
    showInsideOfTable: Ref<boolean>;
    dataTable: Ref<HTMLDivElement>;
    rowsComputed: WritableComputedRef<number>;
    changeSelectedRows: (value: number) => void;
    isDescendant: (child: any, className: any) => boolean;
    closeRowsSelector: (e: any) => void;
    themeColor: unknown;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    rowsItems: {
        type: PropType<number[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
