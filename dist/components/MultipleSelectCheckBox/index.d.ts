import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import type { SFCWithInstall } from '../../helpers';
export declare const EasyDataTableMultipleSelectCheckBox: SFCWithInstall<DefineComponent<{
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
}, {}>>;
