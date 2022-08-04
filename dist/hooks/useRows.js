import { computed, ref } from "vue";
function useRows(isServerSideMode, rowsItems, serverOptions, rowsPerPage) {
  const rowsItemsComputed = computed(() => {
    if (!isServerSideMode.value && rowsItems.value.findIndex((item) => item === rowsPerPage.value) === -1) {
      return [rowsPerPage.value, ...rowsItems.value];
    }
    return rowsItems.value;
  });
  const rowsPerPageRef = ref(serverOptions.value ? serverOptions.value.rowsPerPage : rowsPerPage.value);
  return {
    rowsItemsComputed,
    rowsPerPageRef
  };
}
export { useRows as default };
