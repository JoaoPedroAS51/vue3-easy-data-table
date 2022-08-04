import { defineComponent, useCssVars, unref, inject, openBlock, createElementBlock } from "vue";
import "./LoadingLine.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _hoisted_1 = { class: "loader-line" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoadingLine",
  setup(__props) {
    useCssVars((_ctx) => ({
      "7279d886": unref(themeColor)
    }));
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1);
    };
  }
});
var LoadingLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-236a1418"]]);
export { LoadingLine as default };
