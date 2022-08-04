import { computed } from "vue";
function useFixedColumn(headersForRender) {
  const fixedHeaders = computed(() => headersForRender.value.filter((header) => header.fixed));
  const lastFixedColumn = computed(() => {
    if (!fixedHeaders.value.length)
      return "";
    return fixedHeaders.value[fixedHeaders.value.length - 1].value;
  });
  const fixedColumnsInfos = computed(() => {
    if (!fixedHeaders.value.length)
      return [];
    const fixedHeadersWidthArr = fixedHeaders.value.map((header) => {
      var _a;
      return (_a = header.width) != null ? _a : 100;
    });
    return fixedHeaders.value.map((header, index) => {
      var _a, _b;
      return {
        value: header.value,
        fixed: (_a = header.fixed) != null ? _a : true,
        width: (_b = header.width) != null ? _b : 100,
        distance: index === 0 ? 0 : fixedHeadersWidthArr.reduce((previous, current, i) => {
          let distance = previous;
          if (i < index)
            distance += current;
          return distance;
        })
      };
    });
  });
  return {
    fixedHeaders,
    lastFixedColumn,
    fixedColumnsInfos
  };
}
export { useFixedColumn as default };
