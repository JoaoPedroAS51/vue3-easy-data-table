import { ref, computed } from "vue";
function usePagination(isServerSideMode, loading, totalItemsLength, rowsPerPage, serverOptions, updateServerOptionsPage) {
  const currentPaginationNumber = ref(serverOptions.value ? serverOptions.value.page : 1);
  const maxPaginationNumber = computed(() => Math.ceil(totalItemsLength.value / rowsPerPage.value));
  const isLastPage = computed(() => currentPaginationNumber.value === maxPaginationNumber.value);
  const isFirstPage = computed(() => currentPaginationNumber.value === 1);
  const nextPage = () => {
    if (isLastPage.value)
      return;
    if (loading.value)
      return;
    if (isServerSideMode.value) {
      const nextPaginationNumber = currentPaginationNumber.value + 1;
      updateServerOptionsPage(nextPaginationNumber);
    } else {
      currentPaginationNumber.value += 1;
    }
  };
  const prevPage = () => {
    if (isFirstPage.value)
      return;
    if (loading.value)
      return;
    if (isServerSideMode.value) {
      const prevPaginationNumber = currentPaginationNumber.value - 1;
      updateServerOptionsPage(prevPaginationNumber);
    } else {
      currentPaginationNumber.value -= 1;
    }
  };
  const updatePage = (page) => {
    if (loading.value)
      return;
    if (isServerSideMode.value) {
      updateServerOptionsPage(page);
    } else {
      currentPaginationNumber.value = page;
    }
  };
  const updateCurrentPaginationNumber = (page) => {
    currentPaginationNumber.value = page;
  };
  return {
    currentPaginationNumber,
    maxPaginationNumber,
    isLastPage,
    isFirstPage,
    nextPage,
    prevPage,
    updatePage,
    updateCurrentPaginationNumber
  };
}
export { usePagination as default };
