export declare type SortType = 'asc' | 'desc';
export declare type FilterComparison = '=' | '!=' | '>' | '>=' | '<' | '<=' | 'between';
export declare type Item = Record<string, any>;
export declare type FilterOption = {
    field: string;
    comparison: 'between';
    criteria: [number, number];
} | {
    field: string;
    comparison: '=' | '!=';
    criteria: number | string;
} | {
    field: string;
    comparison: '>' | '>=' | '<' | '<=';
    criteria: number;
} | {
    field: string;
    comparison: (value: any, criteria: string) => boolean;
    criteria: string;
};
export declare type Header = {
    text: string;
    value: string;
    sortable?: boolean;
    fixed?: boolean;
    width?: number;
};
export declare type ServerOptions = {
    page: number;
    rowsPerPage: number;
    sortBy?: string;
    sortType?: SortType;
};
export declare type ClickRowArgument = Item & {
    isSelected?: boolean;
    indexInCurrentPage?: number;
};
export declare type HeaderItemClassNameFunction = (header: Header, index: number) => string;
export declare type BodyRowClassNameFunction = (item: Item, index: number) => string;
export declare type BodyItemClassNameFunction = (column: string, index: number) => string;
