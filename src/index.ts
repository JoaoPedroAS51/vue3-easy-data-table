import type { App } from 'vue';

import { EasyDataTable } from './components/DataTable';
import { EasyDataTablePaginationArrows } from './components/PaginationArrows';
import { EasyDataTableButtonsPagination } from './components/ButtonsPagination';
import { EasyDataTableRowsSelector } from './components/RowsSelector';
import { EasyDataTableSingleSelectCheckBox } from './components/SingleSelectCheckBox';
import { EasyDataTableMultipleSelectCheckBox } from './components/MultipleSelectCheckBox';
import { EasyDataTableLoading } from './components/Loading';
import { EasyDataTableLoadingLine } from './components/LoadingLine';

// install
const install = (app: App): void => {
  app.use(EasyDataTable);
  app.use(EasyDataTablePaginationArrows);
  app.use(EasyDataTableButtonsPagination);
  app.use(EasyDataTableRowsSelector);
  app.use(EasyDataTableSingleSelectCheckBox);
  app.use(EasyDataTableMultipleSelectCheckBox);
  app.use(EasyDataTableLoading);
  app.use(EasyDataTableLoadingLine);
};

export default { install };

export * from './components/DataTable';
export * from './components/PaginationArrows';
export * from './components/ButtonsPagination';
export * from './components/RowsSelector';
export * from './components/SingleSelectCheckBox';
export * from './components/MultipleSelectCheckBox';
export * from './components/Loading';
export * from './components/LoadingLine';
export * from './types/main';
