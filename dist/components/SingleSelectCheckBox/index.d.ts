import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from '../../helpers';
export declare const EasyDataTableSingleSelectCheckBox: SFCWithInstall<DefineComponent<{
    checked: {
        type: BooleanConstructor;
        required: true;
    };
}, {
    emits: (event: "change", ...args: any[]) => void;
    themeColor: unknown;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "change"[], "change", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    checked: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>>;
