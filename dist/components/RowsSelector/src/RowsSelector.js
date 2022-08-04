import { defineComponent, useCssVars, unref, ref, inject, watch, computed, onMounted, onBeforeUnmount, openBlock, createElementBlock, createElementVNode, toDisplayString, normalizeClass, Fragment, renderList, pushScopeId, popScopeId } from "vue";
import "./RowsSelector.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-2556d013"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "easy-data-table__rows-selector" };
const _hoisted_2 = { class: "rows-input" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "triangle" }, null, -1));
const _hoisted_4 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RowsSelector",
  props: {
    modelValue: { type: Number, required: true },
    rowsItems: { type: Array, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "770c70a2": unref(themeColor)
    }));
    const showList = ref(false);
    const showInsideOfTable = ref(false);
    const dataTable = inject("dataTable");
    watch(showList, (val) => {
      if (val && dataTable) {
        const windowHeight = window.innerHeight;
        const dataTableHeight = dataTable.value.getBoundingClientRect().height;
        const dataTableTop = dataTable.value.getBoundingClientRect().top;
        if (windowHeight - (dataTableHeight + dataTableTop) <= 100) {
          showInsideOfTable.value = true;
        } else {
          showInsideOfTable.value = false;
        }
      }
    });
    const rowsComputed = computed({
      get: () => props.modelValue,
      set: (value) => {
        emits("update:modelValue", value);
      }
    });
    const changeSelectedRows = (value) => {
      rowsComputed.value = value;
      showList.value = false;
    };
    const isDescendant = (child, className) => {
      let node = child.parentNode;
      while (node != null) {
        if (node.classList && node.classList.contains(className)) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };
    const closeRowsSelector = (e) => {
      if (!isDescendant(e.target, "easy-data-table__rows-selector"))
        showList.value = false;
    };
    onMounted(() => {
      document.addEventListener("click", closeRowsSelector);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", closeRowsSelector);
    });
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: "rows-input__wrapper",
          onClick: _cache[0] || (_cache[0] = ($event) => showList.value = !showList.value)
        }, [
          createElementVNode("div", _hoisted_2, toDisplayString(unref(rowsComputed)), 1),
          _hoisted_3
        ]),
        createElementVNode("ul", {
          class: normalizeClass(["select-items", { show: showList.value, inside: showInsideOfTable.value }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rowsItems, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item,
              class: normalizeClass({ selected: item === unref(rowsComputed) }),
              onClick: ($event) => changeSelectedRows(item)
            }, toDisplayString(item), 11, _hoisted_4);
          }), 128))
        ], 2)
      ]);
    };
  }
});
var RowsSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2556d013"]]);
export { RowsSelector as default };
