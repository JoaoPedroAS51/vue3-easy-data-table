function getItemValue(column, item) {
  if (column.includes(".")) {
    let content = "";
    const keysArr = column.split(".");
    keysArr.forEach((key, index) => {
      content = index === 0 ? item[key] : content[key];
    });
    return content;
  }
  return item[column];
}
function generateColumnContent(column, item) {
  const content = getItemValue(column, item);
  return Array.isArray(content) ? content.join(",") : content;
}
export { generateColumnContent, getItemValue };
