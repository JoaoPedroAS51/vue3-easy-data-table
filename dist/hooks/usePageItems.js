var __defProp = Object.defineProperty;
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
import { computed } from "vue";
function usePageItems(currentPaginationNumber, isMultipleSelectable, isServerSideMode, items, rowsPerPageRef, selectItemsComputed, showIndex, totalItems, totalItemsLength) {
  const currentPageFirstIndex = computed(() => (currentPaginationNumber.value - 1) * rowsPerPageRef.value + 1);
  const currentPageLastIndex = computed(() => {
    if (isServerSideMode.value) {
      return Math.min(totalItemsLength.value, currentPaginationNumber.value * rowsPerPageRef.value);
    }
    return Math.min(totalItems.value.length, currentPaginationNumber.value * rowsPerPageRef.value);
  });
  const itemsInPage = computed(() => {
    if (isServerSideMode.value)
      return items.value;
    return totalItems.value.slice(currentPageFirstIndex.value - 1, currentPageLastIndex.value);
  });
  const itemsWithIndex = computed(() => {
    if (showIndex.value) {
      return itemsInPage.value.map((item, index) => __spreadValues({ index: currentPageFirstIndex.value + index }, item));
    }
    return itemsInPage.value;
  });
  const multipleSelectStatus = computed(() => {
    if (selectItemsComputed.value.length === 0) {
      return "noneSelected";
    }
    const isNoneSelected = selectItemsComputed.value.every((itemSelected) => {
      if (totalItems.value.findIndex((item) => JSON.stringify(itemSelected) === JSON.stringify(item)) !== -1) {
        return false;
      }
      return true;
    });
    if (isNoneSelected)
      return "noneSelected";
    if (selectItemsComputed.value.length === totalItems.value.length) {
      const isAllSelected = selectItemsComputed.value.every((itemSelected) => {
        if (totalItems.value.findIndex((item) => JSON.stringify(itemSelected) === JSON.stringify(item)) === -1) {
          return false;
        }
        return true;
      });
      return isAllSelected ? "allSelected" : "partSelected";
    }
    return "partSelected";
  });
  const pageItems = computed(() => {
    if (!isMultipleSelectable.value)
      return itemsWithIndex.value;
    if (multipleSelectStatus.value === "allSelected") {
      return itemsWithIndex.value.map((item) => __spreadValues({ checkbox: true }, item));
    }
    if (multipleSelectStatus.value === "noneSelected") {
      return itemsWithIndex.value.map((item) => __spreadValues({ checkbox: false }, item));
    }
    return itemsWithIndex.value.map((item) => {
      const isSelected = selectItemsComputed.value.findIndex((selectItem) => {
        const itemDeepCloned = __spreadValues({}, item);
        delete itemDeepCloned.index;
        return JSON.stringify(selectItem) === JSON.stringify(itemDeepCloned);
      }) !== -1;
      return __spreadValues({ checkbox: isSelected }, item);
    });
  });
  return {
    currentPageFirstIndex,
    currentPageLastIndex,
    multipleSelectStatus,
    pageItems
  };
}
export { usePageItems as default };
