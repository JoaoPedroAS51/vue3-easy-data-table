var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, useCssVars, unref, toRefs, computed, provide, useSlots, ref, onMounted, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, normalizeStyle, withModifiers, createBlock, renderSlot, normalizeProps, guardReactiveProps, toDisplayString, createCommentVNode, mergeProps, createTextVNode, createVNode, isRef, createSlots, withCtx, pushScopeId, popScopeId } from "vue";
import MultipleSelectCheckBox from "../../MultipleSelectCheckBox/src/MultipleSelectCheckBox.js";
import SingleSelectCheckBox from "../../SingleSelectCheckBox/src/SingleSelectCheckBox.js";
import RowsSelector from "../../RowsSelector/src/RowsSelector.js";
import Loading from "../../Loading/src/Loading.js";
import LoadingLine from "../../LoadingLine/src/LoadingLine.js";
import ButtonsPagination from "../../ButtonsPagination/src/ButtonsPagination.js";
import PaginationArrows from "../../PaginationArrows/src/PaginationArrows.js";
import useClickRow from "../../../hooks/useClickRow.js";
import useExpandableRow from "../../../hooks/useExpandableRow.js";
import useFixedColumn from "../../../hooks/useFixedColumn.js";
import useHeaders from "../../../hooks/useHeaders.js";
import usePageItems from "../../../hooks/usePageItems.js";
import usePagination from "../../../hooks/usePagination.js";
import useRows from "../../../hooks/useRows.js";
import useServerOptions from "../../../hooks/useServerOptions.js";
import useTotalItems from "../../../hooks/useTotalItems.js";
import { generateColumnContent } from "../../../utils.js";
import propsWithDefault from "./propsWithDefault.js";
import "./DataTable.vue_vue_type_style_index_0_lang.js";
import "./DataTable.vue_vue_type_style_index_1_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-e2e2ca6a"), n = n(), popScopeId(), n);
const _hoisted_1 = ["onClick"];
const _hoisted_2 = {
  key: 1,
  class: "header"
};
const _hoisted_3 = { class: "header-text" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["colspan"];
const _hoisted_7 = {
  key: 0,
  class: "vue3-easy-data-table__loading"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "vue3-easy-data-table__loading-mask" }, null, -1));
const _hoisted_9 = { class: "loading-entity" };
const _hoisted_10 = {
  key: 1,
  class: "vue3-easy-data-table__message"
};
const _hoisted_11 = {
  key: 0,
  class: "vue3-easy-data-table__footer"
};
const _hoisted_12 = {
  key: 0,
  class: "pagination__rows-per-page"
};
const _hoisted_13 = { class: "pagination__items-index" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  props: __spreadProps(__spreadValues({}, propsWithDefault), {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  }),
  emits: [
    "clickRow",
    "expandRow",
    "update:itemsSelected",
    "update:serverOptions"
  ],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "554cb9c4": unref(tableHeightPx)
    }));
    const {
      checkboxColumnWidth,
      expandColumnWidth,
      filterOptions,
      fixedCheckbox,
      fixedExpand,
      fixedHeader,
      fixedIndex,
      headers,
      indexColumnWidth,
      items,
      itemsSelected,
      loading,
      mustSort,
      rowsItems,
      rowsPerPage,
      searchField,
      searchValue,
      serverItemsLength,
      serverOptions,
      showIndex,
      sortBy,
      sortType,
      tableHeight,
      themeColor
    } = toRefs(props);
    const tableHeightPx = computed(() => tableHeight.value ? `${tableHeight.value}px` : null);
    provide("themeColor", themeColor.value);
    const slots = useSlots();
    const ifHasExpandSlot = computed(() => !!slots.expand);
    const dataTable = ref();
    const tableBody = ref();
    provide("dataTable", dataTable);
    const showShadow = ref(false);
    onMounted(() => {
      tableBody.value.addEventListener("scroll", () => {
        showShadow.value = tableBody.value.scrollLeft > 0;
      });
    });
    const isMultipleSelectable = computed(() => itemsSelected.value !== null);
    const isServerSideMode = computed(() => serverOptions.value !== null);
    const {
      serverOptionsComputed,
      updateServerOptionsPage,
      updateServerOptionsSort,
      updateServerOptionsRowsPerPage
    } = useServerOptions(serverOptions, emits);
    const {
      clientSortOptions,
      headerColumns,
      headersForRender,
      updateSortField
    } = useHeaders(checkboxColumnWidth, expandColumnWidth, fixedCheckbox, fixedExpand, fixedIndex, headers, ifHasExpandSlot, indexColumnWidth, isMultipleSelectable, isServerSideMode, mustSort, serverOptionsComputed, showIndex, sortBy, sortType, updateServerOptionsSort);
    const { rowsItemsComputed, rowsPerPageRef } = useRows(isServerSideMode, rowsItems, serverOptions, rowsPerPage);
    const {
      totalItems,
      selectItemsComputed,
      totalItemsLength,
      toggleSelectAll,
      toggleSelectItem
    } = useTotalItems(clientSortOptions, filterOptions, isServerSideMode, items, itemsSelected, searchField, searchValue, serverItemsLength, emits);
    const {
      currentPaginationNumber,
      maxPaginationNumber,
      isLastPage,
      isFirstPage,
      nextPage,
      prevPage,
      updatePage,
      updateCurrentPaginationNumber
    } = usePagination(isServerSideMode, loading, totalItemsLength, rowsPerPageRef, serverOptions, updateServerOptionsPage);
    const {
      currentPageFirstIndex,
      currentPageLastIndex,
      multipleSelectStatus,
      pageItems
    } = usePageItems(currentPaginationNumber, isMultipleSelectable, isServerSideMode, items, rowsPerPageRef, selectItemsComputed, showIndex, totalItems, totalItemsLength);
    const {
      expandingItemIndexList,
      updateExpandingItemIndexList,
      clearExpandingItemIndexList
    } = useExpandableRow(items, emits);
    const { fixedHeaders, lastFixedColumn, fixedColumnsInfos } = useFixedColumn(headersForRender);
    const { clickRow } = useClickRow(isMultipleSelectable, showIndex, emits);
    const getColStyle = (header) => {
      var _a;
      const width = (_a = header.width) != null ? _a : fixedHeaders.value.length ? 100 : null;
      if (width)
        return `width: ${width}px; min-width: ${width}px;`;
      return void 0;
    };
    const getFixedDistance = (column, type = "th") => {
      if (!fixedHeaders.value.length)
        return void 0;
      const columInfo = fixedColumnsInfos.value.find((info) => info.value === column);
      if (columInfo) {
        return `left: ${columInfo.distance}px;z-index: ${type === "th" ? 3 : 1};position: sticky;`;
      }
      return void 0;
    };
    watch(loading, (newVal, oldVal) => {
      if (serverOptionsComputed.value) {
        if (newVal === false && oldVal === true) {
          updateCurrentPaginationNumber(serverOptionsComputed.value.page);
          clearExpandingItemIndexList();
        }
      }
    });
    watch(items, () => {
      if (!isServerSideMode.value)
        updatePage(1);
    }, { deep: true });
    watch(rowsPerPageRef, (value) => {
      if (!isServerSideMode.value) {
        updatePage(1);
      } else {
        updateServerOptionsRowsPerPage(value);
      }
    });
    watch([currentPaginationNumber, clientSortOptions, searchField, searchValue, filterOptions], () => {
      clearExpandingItemIndexList();
    }, { deep: true });
    expose({
      currentPageFirstIndex,
      currentPageLastIndex,
      clientItemsLength: totalItemsLength,
      maxPaginationNumber,
      currentPaginationNumber,
      isLastPage,
      isFirstPage,
      nextPage,
      prevPage,
      updatePage
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "dataTable",
        ref: dataTable,
        class: normalizeClass(["vue3-easy-data-table", [_ctx.tableClassName]])
      }, [
        createElementVNode("div", {
          ref_key: "tableBody",
          ref: tableBody,
          class: normalizeClass(["vue3-easy-data-table__main", {
            "fixed-header": unref(fixedHeader),
            "fixed-height": unref(tableHeight),
            "show-shadow": showShadow.value,
            "table-fixed": unref(fixedHeaders).length,
            hoverable: !_ctx.noHover,
            "border-cell": _ctx.borderCell
          }])
        }, [
          createElementVNode("table", null, [
            createElementVNode("colgroup", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(headersForRender), (header, index) => {
                return openBlock(), createElementBlock("col", {
                  key: index,
                  style: normalizeStyle(getColStyle(header))
                }, null, 4);
              }), 128))
            ]),
            unref(headersForRender).length && !_ctx.hideHeader ? (openBlock(), createElementBlock("thead", {
              key: 0,
              class: normalizeClass(["vue3-easy-data-table__header", [_ctx.headerClassName]])
            }, [
              createElementVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(headersForRender), (header, index) => {
                  return openBlock(), createElementBlock("th", {
                    key: index,
                    class: normalizeClass([{
                      sortable: header.sortable,
                      "none": header.sortable && header.sortType === "none",
                      "desc": header.sortable && header.sortType === "desc",
                      "asc": header.sortable && header.sortType === "asc",
                      "shadow": header.value === unref(lastFixedColumn)
                    }, typeof _ctx.headerItemClassName === "string" ? _ctx.headerItemClassName : _ctx.headerItemClassName(header, index)]),
                    style: normalizeStyle(getFixedDistance(header.value)),
                    onClick: withModifiers(($event) => header.sortable && header.sortType ? unref(updateSortField)(header.value, header.sortType) : null, ["stop"])
                  }, [
                    header.text === "checkbox" ? (openBlock(), createBlock(MultipleSelectCheckBox, {
                      key: unref(multipleSelectStatus),
                      status: unref(multipleSelectStatus),
                      onChange: unref(toggleSelectAll)
                    }, null, 8, ["status", "onChange"])) : (openBlock(), createElementBlock("span", _hoisted_2, [
                      renderSlot(_ctx.$slots, `header-${header.value}`, normalizeProps(guardReactiveProps(header)), () => [
                        createElementVNode("span", _hoisted_3, toDisplayString(header.text), 1)
                      ], true),
                      header.sortable ? (openBlock(), createElementBlock("i", {
                        key: header.sortType ? header.sortType : "none",
                        class: normalizeClass(["sortType-icon", { desc: header.sortType === "desc" }])
                      }, null, 2)) : createCommentVNode("", true)
                    ]))
                  ], 14, _hoisted_1);
                }), 128))
              ])
            ], 2)) : createCommentVNode("", true),
            unref(items).length && unref(headerColumns).length ? (openBlock(), createElementBlock("tbody", {
              key: 1,
              class: normalizeClass(["vue3-easy-data-table__body", { "row-alternation": _ctx.alternating }])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pageItems), (item, index) => {
                return openBlock(), createElementBlock(Fragment, { key: index }, [
                  createElementVNode("tr", {
                    class: normalizeClass([
                      { "even-row": (index + 1) % 2 === 0 },
                      typeof _ctx.bodyRowClassName === "string" ? _ctx.bodyRowClassName : _ctx.bodyRowClassName(item, index)
                    ]),
                    onClick: ($event) => unref(clickRow)(item)
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(headerColumns), (column, i) => {
                      return openBlock(), createElementBlock("td", {
                        key: i,
                        style: normalizeStyle(getFixedDistance(column, "td")),
                        class: normalizeClass([
                          {
                            shadow: column === unref(lastFixedColumn),
                            "can-expand": column === "expand"
                          },
                          typeof _ctx.bodyItemClassName === "string" ? _ctx.bodyItemClassName : _ctx.bodyItemClassName(column, i)
                        ]),
                        onClick: ($event) => column === "expand" ? unref(updateExpandingItemIndexList)(index, item, $event) : null
                      }, [
                        unref(slots)[`item-${column}`] ? renderSlot(_ctx.$slots, `item-${column}`, normalizeProps(mergeProps({ key: 0 }, item)), void 0, true) : column === "expand" ? (openBlock(), createElementBlock("i", {
                          key: 1,
                          class: normalizeClass(["expand-icon", {
                            expanding: unref(expandingItemIndexList).includes(index)
                          }])
                        }, null, 2)) : column === "checkbox" ? (openBlock(), createBlock(SingleSelectCheckBox, {
                          key: 2,
                          checked: item[column],
                          onChange: ($event) => unref(toggleSelectItem)(item)
                        }, null, 8, ["checked", "onChange"])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                          createTextVNode(toDisplayString(unref(generateColumnContent)(column, item)), 1)
                        ], 64))
                      ], 14, _hoisted_5);
                    }), 128))
                  ], 10, _hoisted_4),
                  unref(ifHasExpandSlot) && unref(expandingItemIndexList).includes(index) ? (openBlock(), createElementBlock("tr", {
                    key: 0,
                    class: normalizeClass({ "even-row": (index + 1) % 2 === 0 })
                  }, [
                    createElementVNode("td", {
                      colspan: unref(headersForRender).length,
                      class: "expand"
                    }, [
                      item.expandLoading ? (openBlock(), createBlock(LoadingLine, {
                        key: 0,
                        class: "expand-loading"
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "expand", normalizeProps(guardReactiveProps(item)), void 0, true)
                    ], 8, _hoisted_6)
                  ], 2)) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ], 2)) : createCommentVNode("", true)
          ]),
          unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_7, [
            _hoisted_8,
            createElementVNode("div", _hoisted_9, [
              renderSlot(_ctx.$slots, "loading", {}, () => [
                createVNode(Loading)
              ], true)
            ])
          ])) : createCommentVNode("", true),
          !unref(pageItems).length && !unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_10, [
            renderSlot(_ctx.$slots, "emptyMessage", normalizeProps(guardReactiveProps({ emptyMessage: _ctx.emptyMessage })), () => [
              createTextVNode(toDisplayString(_ctx.emptyMessage), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ], 2),
        !_ctx.hideFooter ? (openBlock(), createElementBlock("div", _hoisted_11, [
          renderSlot(_ctx.$slots, "footer", normalizeProps(guardReactiveProps({
            rowsPerPageMessage: _ctx.rowsPerPageMessage,
            rowsPerPageRef: unref(rowsPerPageRef),
            rowsItemsComputed: unref(rowsItemsComputed),
            isFirstPage: unref(isFirstPage),
            isLastPage: unref(isLastPage),
            currentPaginationNumber: unref(currentPaginationNumber),
            maxPaginationNumber: unref(maxPaginationNumber),
            nextPage: unref(nextPage),
            prevPage: unref(prevPage),
            currentPageFirstIndex: unref(currentPageFirstIndex),
            currentPageLastIndex: unref(currentPageLastIndex),
            totalItemsLength: unref(totalItemsLength)
          })), () => [
            !_ctx.hideRowsPerPage ? (openBlock(), createElementBlock("div", _hoisted_12, [
              renderSlot(_ctx.$slots, "rowsPerPage", normalizeProps(guardReactiveProps({ rowsPerPageMessage: _ctx.rowsPerPageMessage, rowsPerPageRef: unref(rowsPerPageRef), rowsItemsComputed: unref(rowsItemsComputed) })), () => [
                createTextVNode(toDisplayString(_ctx.rowsPerPageMessage) + " ", 1),
                createVNode(RowsSelector, {
                  modelValue: unref(rowsPerPageRef),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(rowsPerPageRef) ? rowsPerPageRef.value = $event : null),
                  "rows-items": unref(rowsItemsComputed)
                }, null, 8, ["modelValue", "rows-items"])
              ], true)
            ])) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_13, [
              renderSlot(_ctx.$slots, "itemsIndex", normalizeProps(guardReactiveProps({ currentPageFirstIndex: unref(currentPageFirstIndex), currentPageLastIndex: unref(currentPageLastIndex), totalItemsLength: unref(totalItemsLength) })), () => [
                createTextVNode(toDisplayString(`${unref(currentPageFirstIndex)}\u2013${unref(currentPageLastIndex)}`) + " of " + toDisplayString(unref(totalItemsLength)), 1)
              ], true)
            ]),
            renderSlot(_ctx.$slots, "pagination", normalizeProps(guardReactiveProps({
              isFirstPage: unref(isFirstPage),
              isLastPage: unref(isLastPage),
              currentPaginationNumber: unref(currentPaginationNumber),
              maxPaginationNumber: unref(maxPaginationNumber),
              nextPage: unref(nextPage),
              prevPage: unref(prevPage)
            })), () => [
              createVNode(PaginationArrows, {
                "is-first-page": unref(isFirstPage),
                "is-last-page": unref(isLastPage),
                onClickNextPage: unref(nextPage),
                onClickPrevPage: unref(prevPage)
              }, createSlots({ _: 2 }, [
                _ctx.buttonsPagination ? {
                  name: "buttonsPagination",
                  fn: withCtx(() => [
                    createVNode(ButtonsPagination, {
                      "current-pagination-number": unref(currentPaginationNumber),
                      "max-pagination-number": unref(maxPaginationNumber),
                      onUpdatePage: unref(updatePage)
                    }, null, 8, ["current-pagination-number", "max-pagination-number", "onUpdatePage"])
                  ])
                } : void 0
              ]), 1032, ["is-first-page", "is-last-page", "onClickNextPage", "onClickPrevPage"])
            ], true)
          ], true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var DataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2e2ca6a"]]);
export { DataTable as default };
