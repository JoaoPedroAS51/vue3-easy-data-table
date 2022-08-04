import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
declare const _sfc_main: DefineComponent<{
    status: {
        type: PropType<"allSelected" | "noneSelected" | "partSelected">;
        required: true;
    };
}, {
    emits: (event: "change", ...args: any[]) => void;
    props: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        status: {
            type: PropType<"allSelected" | "noneSelected" | "partSelected">;
            required: true;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }>>;
    isChecked: ComputedRef<boolean>;
    toggleChecked: () => void;
    themeColor: unknown;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "change"[], "change", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    status: {
        type: PropType<"allSelected" | "noneSelected" | "partSelected">;
        required: true;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
