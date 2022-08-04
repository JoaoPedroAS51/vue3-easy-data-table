import { computed, ref } from "vue";
function useHeaders(checkboxColumnWidth, expandColumnWidth, fixedCheckbox, fixedExpand, fixedIndex, headers, ifHasExpandSlot, indexColumnWidth, isMultipleSelectable, isServerSideMode, mustSort, serverOptionsComputed, showIndex, sortBy, sortType, updateServerOptionsSort) {
  const hasFixedColumnsFromUser = computed(() => headers.value.findIndex((header) => header.fixed) !== -1);
  const fixedHeadersFromUser = computed(() => {
    if (hasFixedColumnsFromUser.value)
      return headers.value.filter((header) => header.fixed);
    return [];
  });
  const unFixedHeaders = computed(() => headers.value.filter((header) => !header.fixed));
  const clientSortOptions = ref((() => {
    if (sortBy.value !== "") {
      return {
        sortBy: sortBy.value,
        sortDesc: sortType.value === "desc"
      };
    }
    return null;
  })());
  const headersForRender = computed(() => {
    var _a;
    const fixedHeaders = [
      ...fixedHeadersFromUser.value,
      ...unFixedHeaders.value
    ];
    const headersSorting = fixedHeaders.map((header) => {
      const headerSorting = header;
      if (header.sortable)
        headerSorting.sortType = "none";
      if (serverOptionsComputed.value && header.value === serverOptionsComputed.value.sortBy && serverOptionsComputed.value.sortType) {
        headerSorting.sortType = serverOptionsComputed.value.sortType;
      }
      if (!isServerSideMode.value && clientSortOptions.value && header.value === clientSortOptions.value.sortBy) {
        headerSorting.sortType = clientSortOptions.value.sortDesc ? "desc" : "asc";
      }
      return headerSorting;
    });
    let headersWithExpand = [];
    if (!ifHasExpandSlot.value) {
      headersWithExpand = headersSorting;
    } else {
      const headerExpand = fixedExpand.value || hasFixedColumnsFromUser.value ? {
        text: "",
        value: "expand",
        fixed: true,
        width: expandColumnWidth.value
      } : { text: "", value: "expand" };
      headersWithExpand = [headerExpand, ...headersSorting];
    }
    let headersWithIndex = [];
    if (!showIndex.value) {
      headersWithIndex = headersWithExpand;
    } else {
      const headerIndex = fixedIndex.value || hasFixedColumnsFromUser.value ? {
        text: "#",
        value: "index",
        fixed: true,
        width: indexColumnWidth.value
      } : { text: "#", value: "index" };
      headersWithIndex = [headerIndex, ...headersWithExpand];
    }
    let headersWithCheckbox = [];
    if (!isMultipleSelectable.value) {
      headersWithCheckbox = headersWithIndex;
    } else {
      const headerCheckbox = fixedCheckbox.value || hasFixedColumnsFromUser.value ? {
        text: "checkbox",
        value: "checkbox",
        fixed: true,
        width: (_a = checkboxColumnWidth.value) != null ? _a : 36
      } : { text: "checkbox", value: "checkbox" };
      headersWithCheckbox = [headerCheckbox, ...headersWithIndex];
    }
    return headersWithCheckbox;
  });
  const headerColumns = computed(() => headersForRender.value.map((header) => header.value));
  const updateSortField = (newSortBy, oldSortType) => {
    let newSortType = null;
    if (oldSortType === "none") {
      newSortType = "asc";
    } else if (oldSortType === "asc") {
      newSortType = "desc";
    } else {
      newSortType = mustSort.value ? "asc" : null;
    }
    if (isServerSideMode.value) {
      updateServerOptionsSort(newSortBy, newSortType);
    } else if (newSortType === null) {
      clientSortOptions.value = null;
    } else {
      clientSortOptions.value = {
        sortBy: newSortBy,
        sortDesc: newSortType === "desc"
      };
    }
  };
  return {
    clientSortOptions,
    headerColumns,
    headersForRender,
    updateSortField
  };
}
export { useHeaders as default };
