import { computed } from "vue";
import { getItemValue } from "../utils.js";
function useTotalItems(clientSortOptions, filterOptions, isServerSideMode, items, itemsSelected, searchField, searchValue, serverItemsLength, emits) {
  const itemsSearching = computed(() => {
    if (!isServerSideMode.value && searchValue.value !== "") {
      const regex = new RegExp(searchValue.value, "i");
      return items.value.filter((item) => regex.test(searchField.value !== "" ? item[searchField.value] : Object.values(item).join(" ")));
    }
    return items.value;
  });
  const itemsFiltering = computed(() => {
    let itemsFiltered = [...itemsSearching.value];
    if (filterOptions.value) {
      filterOptions.value.forEach((option) => {
        itemsFiltered = itemsFiltered.filter((item) => {
          const { field, comparison, criteria } = option;
          if (typeof comparison === "function") {
            return comparison(item[field], criteria);
          }
          switch (comparison) {
            case "=":
              return item[field] === criteria;
            case "!=":
              return item[field] !== criteria;
            case ">":
              return item[field] > criteria;
            case "<":
              return item[field] < criteria;
            case "<=":
              return item[field] <= criteria;
            case ">=":
              return item[field] >= criteria;
            case "between":
              return item[field] >= Math.min(...criteria) && item[field] <= Math.max(...criteria);
            default:
              return item[field] === criteria;
          }
        });
      });
      return itemsFiltered;
    }
    return itemsSearching.value;
  });
  const totalItems = computed(() => {
    if (isServerSideMode.value)
      return items.value;
    if (clientSortOptions.value === null)
      return itemsFiltering.value;
    const { sortBy, sortDesc } = clientSortOptions.value;
    const itemsFilteringSorted = [...itemsFiltering.value];
    return itemsFilteringSorted.sort((a, b) => {
      if (getItemValue(sortBy, a) < getItemValue(sortBy, b))
        return sortDesc ? 1 : -1;
      if (getItemValue(sortBy, a) > getItemValue(sortBy, b))
        return sortDesc ? -1 : 1;
      return 0;
    });
  });
  const totalItemsLength = computed(() => isServerSideMode.value ? serverItemsLength.value : totalItems.value.length);
  const selectItemsComputed = computed({
    get: () => {
      var _a;
      return (_a = itemsSelected.value) != null ? _a : [];
    },
    set: (value) => {
      emits("update:itemsSelected", value);
    }
  });
  const toggleSelectAll = (isChecked) => {
    selectItemsComputed.value = isChecked ? totalItems.value : [];
  };
  const toggleSelectItem = (item) => {
    const isAlreadyChecked = item.checkbox;
    delete item.checkbox;
    delete item.index;
    if (!isAlreadyChecked) {
      const selectItemsArr = selectItemsComputed.value;
      selectItemsArr.unshift(item);
      selectItemsComputed.value = selectItemsArr;
    } else {
      selectItemsComputed.value = selectItemsComputed.value.filter((selectedItem) => JSON.stringify(selectedItem) !== JSON.stringify(item));
    }
  };
  return {
    totalItems,
    selectItemsComputed,
    totalItemsLength,
    toggleSelectAll,
    toggleSelectItem
  };
}
export { useTotalItems as default };
