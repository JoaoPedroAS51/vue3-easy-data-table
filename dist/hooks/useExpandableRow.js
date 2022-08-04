import { ref } from "vue";
function useExpandableRow(items, emits) {
  const expandingItemIndexList = ref([]);
  const updateExpandingItemIndexList = (expandingItemIndex, expandingItem, event) => {
    event.stopPropagation();
    const index = expandingItemIndexList.value.indexOf(expandingItemIndex);
    if (index !== -1) {
      expandingItemIndexList.value.splice(index, 1);
    } else {
      emits("expandRow", items.value.findIndex((item) => item === expandingItem));
      expandingItemIndexList.value.push(expandingItemIndex);
    }
  };
  const clearExpandingItemIndexList = () => {
    expandingItemIndexList.value = [];
  };
  return {
    expandingItemIndexList,
    updateExpandingItemIndexList,
    clearExpandingItemIndexList
  };
}
export { useExpandableRow as default };
