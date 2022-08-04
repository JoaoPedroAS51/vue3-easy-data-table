import { PropType } from 'vue';
import type { SortType, Item, ServerOptions, FilterOption, HeaderItemClassNameFunction, BodyItemClassNameFunction, BodyRowClassNameFunction } from '../../../types/main';
declare const _default: {
    alternating: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonsPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkboxColumnWidth: {
        type: NumberConstructor;
        default: null;
    };
    emptyMessage: {
        type: StringConstructor;
        default: string;
    };
    expandColumnWidth: {
        type: NumberConstructor;
        default: number;
    };
    filterOptions: {
        type: PropType<FilterOption[]>;
        default: null;
    };
    fixedExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideRowsPerPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    indexColumnWidth: {
        type: NumberConstructor;
        default: number;
    };
    itemsSelected: {
        type: PropType<Item[]> | null;
        default: null;
    };
    loading: {
        type: BooleanConstructor;
        deault: boolean;
    };
    rowsPerPage: {
        type: NumberConstructor;
        default: number;
    };
    rowsItems: {
        type: PropType<number[]>;
        default: () => number[];
    };
    rowsPerPageMessage: {
        type: StringConstructor;
        default: string;
    };
    searchField: {
        type: StringConstructor;
        default: string;
    };
    searchValue: {
        type: StringConstructor;
        default: string;
    };
    serverOptions: {
        type: PropType<ServerOptions> | null;
        default: null;
    };
    serverItemsLength: {
        type: NumberConstructor;
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortBy: {
        type: StringConstructor;
        default: string;
    };
    sortType: {
        type: PropType<SortType>;
        default: string;
    };
    tableHeight: {
        type: NumberConstructor;
        default: null;
    };
    themeColor: {
        type: StringConstructor;
        default: string;
    };
    tableClassName: {
        type: StringConstructor;
        default: string;
    };
    headerClassName: {
        type: StringConstructor;
        default: string;
    };
    headerItemClassName: {
        type: PropType<string | HeaderItemClassNameFunction>;
        default: string;
    };
    bodyRowClassName: {
        type: PropType<string | BodyRowClassNameFunction>;
        default: string;
    };
    bodyItemClassName: {
        type: PropType<string | BodyItemClassNameFunction>;
        default: string;
    };
    noHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderCell: {
        type: BooleanConstructor;
        default: boolean;
    };
    mustSort: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export default _default;
