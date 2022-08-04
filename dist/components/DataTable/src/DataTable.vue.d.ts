import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, Ref, ComputedRef, Slot, WritableComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, EmitsOptions, PropType } from 'vue';
import type { FilterOption, ServerOptions, SortType, HeaderItemClassNameFunction, BodyRowClassNameFunction, BodyItemClassNameFunction, Header,  Item } from '../../../types/main';
import type { ServerOptionsComputed, MultipleSelectStatus, HeaderForRender } from '../../../types/internal';
import { generateColumnContent } from '../../../utils';
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
    serverOptionsComputed: WritableComputedRef<ServerOptionsComputed | null>;
    updateServerOptionsPage: (page: number) => void;
    updateServerOptionsSort: (newSortBy: string, newSortType: SortType | null) => void;
    updateServerOptionsRowsPerPage: (rowsPerPage: number) => void;
    clientSortOptions: Ref<{
        sortBy: string;
        sortDesc: boolean;
    } | null>;
    headerColumns: ComputedRef<string[]>;
    headersForRender: ComputedRef<HeaderForRender[]>;
    updateSortField: (newSortBy: string, oldSortType: SortType | "none") => void;
    rowsItemsComputed: ComputedRef<number[]>;
    rowsPerPageRef: Ref<number>;
    totalItems: ComputedRef<Item[]>;
    selectItemsComputed: WritableComputedRef<Item[]>;
    totalItemsLength: ComputedRef<number>;
    toggleSelectAll: (isChecked: boolean) => void;
    toggleSelectItem: (item: Item) => void;
    currentPaginationNumber: Ref<number>;
    maxPaginationNumber: ComputedRef<number>;
    isLastPage: ComputedRef<boolean>;
    isFirstPage: ComputedRef<boolean>;
    nextPage: () => void;
    prevPage: () => void;
    updatePage: (page: number) => void;
    updateCurrentPaginationNumber: (page: number) => void;
    currentPageFirstIndex: ComputedRef<number>;
    currentPageLastIndex: ComputedRef<number>;
    multipleSelectStatus: ComputedRef<MultipleSelectStatus>;
    pageItems: ComputedRef<Item[]>;
    expandingItemIndexList: Ref<number[]>;
    updateExpandingItemIndexList: (expandingItemIndex: number, expandingItem: Item, event: Event) => void;
    clearExpandingItemIndexList: () => void;
    fixedHeaders: ComputedRef<HeaderForRender[]>;
    lastFixedColumn: ComputedRef<string>;
    fixedColumnsInfos: ComputedRef<{
        value: string;
        fixed: Boolean;
        distance: number;
        width: number;
    }[]>;
    clickRow: (item: Item) => void;
    getColStyle: (header: HeaderForRender) => string | undefined;
    getFixedDistance: (column: string, type?: 'td' | 'th') => string | undefined;
    MultipleSelectCheckBox: DefineComponent<{
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
    SingleSelectCheckBox: DefineComponent<{
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
    }, {}>;
    RowsSelector: DefineComponent<{
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
    Loading: DefineComponent<{}, {
        themeColor: unknown;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    LoadingLine: DefineComponent<{}, {
        themeColor: unknown;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    ButtonsPagination: DefineComponent<{
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
    }, {}>;
    PaginationArrows: DefineComponent<{
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
    generateColumnContent: typeof generateColumnContent;
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
    headerItemClassName: string | HeaderItemClassNameFunction;
    bodyRowClassName: string | BodyRowClassNameFunction;
    bodyItemClassName: string | BodyItemClassNameFunction;
    noHover: boolean;
    borderCell: boolean;
    mustSort: boolean;
}>;
export default _sfc_main;
