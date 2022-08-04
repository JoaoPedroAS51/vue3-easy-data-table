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
import { computed } from "vue";
function useServerOptions(serverOptions, emits) {
  const serverOptionsComputed = computed({
    get: () => {
      if (serverOptions.value) {
        const {
          page,
          rowsPerPage,
          sortBy,
          sortType
        } = serverOptions.value;
        return {
          page,
          rowsPerPage,
          sortBy: sortBy != null ? sortBy : null,
          sortType: sortType != null ? sortType : null
        };
      }
      return null;
    },
    set: (value) => {
      emits("update:serverOptions", value);
    }
  });
  const updateServerOptionsPage = (page) => {
    if (serverOptionsComputed.value) {
      serverOptionsComputed.value = __spreadProps(__spreadValues({}, serverOptionsComputed.value), {
        page
      });
    }
  };
  const updateServerOptionsRowsPerPage = (rowsPerPage) => {
    if (serverOptionsComputed.value) {
      serverOptionsComputed.value = __spreadProps(__spreadValues({}, serverOptionsComputed.value), {
        page: 1,
        rowsPerPage
      });
    }
  };
  const updateServerOptionsSort = (newSortBy, newSortType) => {
    if (serverOptionsComputed.value) {
      serverOptionsComputed.value = __spreadProps(__spreadValues({}, serverOptionsComputed.value), {
        sortBy: newSortType !== null ? newSortBy : null,
        sortType: newSortType
      });
    }
  };
  return {
    serverOptionsComputed,
    updateServerOptionsPage,
    updateServerOptionsSort,
    updateServerOptionsRowsPerPage
  };
}
export { useServerOptions as default };
