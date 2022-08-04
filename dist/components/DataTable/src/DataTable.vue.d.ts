import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, Ref, ComputedRef, Slot, ComputedOptions, MethodOptions, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
declare const _sfc_main: DefineComponent<{
    items: {
        type: PropType<Item[]>;
        required: true;
    };
    headers: {
        type: PropType<Header[]>;
        required: true;
    };
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
        type: PropType<any>;
        default: string;
    };
    bodyRowClassName: {
        type: PropType<any>;
        default: string;
    };
    bodyItemClassName: {
        type: PropType<any>;
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
}, {
    props: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        items: {
            type: PropType<Item[]>;
            required: true;
        };
        headers: {
            type: PropType<Header[]>;
            required: true;
        };
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
            type: PropType<any>;
            default: string;
        };
        bodyRowClassName: {
            type: PropType<any>;
            default: string;
        };
        bodyItemClassName: {
            type: PropType<any>;
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
    }>> & {
        onClickRow?: ((...args: any[]) => any) | undefined;
        onExpandRow?: ((...args: any[]) => any) | undefined;
        "onUpdate:itemsSelected"?: ((...args: any[]) => any) | undefined;
        "onUpdate:serverOptions"?: ((...args: any[]) => any) | undefined;
    }>>;
    checkboxColumnWidth: Ref<number>;
    expandColumnWidth: Ref<number>;
    filterOptions: Ref<FilterOption[]>;
    fixedCheckbox: Ref<boolean>;
    fixedExpand: Ref<boolean>;
    fixedHeader: Ref<boolean>;
    fixedIndex: Ref<boolean>;
    headers: Ref<Header[]>;
    indexColumnWidth: Ref<number>;
    items: Ref<Item[]>;
    itemsSelected: Ref<Item[]>;
    loading: Ref<boolean>;
    mustSort: Ref<boolean>;
    rowsItems: Ref<number[]>;
    rowsPerPage: Ref<number>;
    searchField: Ref<string>;
    searchValue: Ref<string>;
    serverItemsLength: Ref<number>;
    serverOptions: Ref<ServerOptions>;
    showIndex: Ref<boolean>;
    sortBy: Ref<string>;
    sortType: Ref<SortType>;
    tableHeight: Ref<number>;
    themeColor: Ref<string>;
    tableHeightPx: ComputedRef<string | null>;
    slots: Readonly<{
        [name: string]: Slot | undefined;
    }>;
    ifHasExpandSlot: ComputedRef<boolean>;
    dataTable: Ref<any>;
    tableBody: Ref<any>;
    showShadow: Ref<boolean>;
    emits: (event: "clickRow" | "expandRow" | "update:itemsSelected" | "update:serverOptions", ...args: any[]) => void;
    isMultipleSelectable: ComputedRef<boolean>;
    isServerSideMode: ComputedRef<boolean>;
    serverOptionsComputed: any;
    updateServerOptionsPage: any;
    updateServerOptionsSort: any;
    updateServerOptionsRowsPerPage: any;
    clientSortOptions: any;
    headerColumns: any;
    headersForRender: any;
    updateSortField: any;
    rowsItemsComputed: any;
    rowsPerPageRef: any;
    totalItems: any;
    selectItemsComputed: any;
    totalItemsLength: any;
    toggleSelectAll: any;
    toggleSelectItem: any;
    currentPaginationNumber: any;
    maxPaginationNumber: any;
    isLastPage: any;
    isFirstPage: any;
    nextPage: any;
    prevPage: any;
    updatePage: any;
    updateCurrentPaginationNumber: any;
    currentPageFirstIndex: any;
    currentPageLastIndex: any;
    multipleSelectStatus: any;
    pageItems: any;
    expandingItemIndexList: any;
    updateExpandingItemIndexList: any;
    clearExpandingItemIndexList: any;
    fixedHeaders: any;
    lastFixedColumn: any;
    fixedColumnsInfos: any;
    clickRow: any;
    getColStyle: (header: HeaderForRender) => string | undefined;
    getFixedDistance: (column: string, type?: 'td' | 'th') => string | undefined;
    MultipleSelectCheckBox: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    SingleSelectCheckBox: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    RowsSelector: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    Loading: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    LoadingLine: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    ButtonsPagination: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    PaginationArrows: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    generateColumnContent: any;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("clickRow" | "expandRow" | "update:itemsSelected" | "update:serverOptions")[], "clickRow" | "expandRow" | "update:itemsSelected" | "update:serverOptions", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    items: {
        type: PropType<Item[]>;
        required: true;
    };
    headers: {
        type: PropType<Header[]>;
        required: true;
    };
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
        type: PropType<any>;
        default: string;
    };
    bodyRowClassName: {
        type: PropType<any>;
        default: string;
    };
    bodyItemClassName: {
        type: PropType<any>;
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
}>> & {
    onClickRow?: ((...args: any[]) => any) | undefined;
    onExpandRow?: ((...args: any[]) => any) | undefined;
    "onUpdate:itemsSelected"?: ((...args: any[]) => any) | undefined;
    "onUpdate:serverOptions"?: ((...args: any[]) => any) | undefined;
}, {
    alternating: boolean;
    buttonsPagination: boolean;
    checkboxColumnWidth: number;
    emptyMessage: string;
    expandColumnWidth: number;
    filterOptions: FilterOption[];
    fixedExpand: boolean;
    fixedHeader: boolean;
    fixedCheckbox: boolean;
    fixedIndex: boolean;
    hideFooter: boolean;
    hideRowsPerPage: boolean;
    hideHeader: boolean;
    indexColumnWidth: number;
    itemsSelected: Item[];
    loading: boolean;
    rowsPerPage: number;
    rowsItems: number[];
    rowsPerPageMessage: string;
    searchField: string;
    searchValue: string;
    serverOptions: ServerOptions;
    serverItemsLength: number;
    showIndex: boolean;
    sortBy: string;
    sortType: SortType;
    tableHeight: number;
    themeColor: string;
    tableClassName: string;
    headerClassName: string;
    headerItemClassName: any;
    bodyRowClassName: any;
    bodyItemClassName: any;
    noHover: boolean;
    borderCell: boolean;
    mustSort: boolean;
}>;
export default _sfc_main;
