import { defineComponent, useCssVars, unref, inject, openBlock, createElementBlock, pushScopeId, popScopeId, createElementVNode } from "vue";
import "./Loading.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-2b783304"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "lds-ring" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_6 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Loading",
  setup(__props) {
    useCssVars((_ctx) => ({
      "390b9085": unref(themeColor)
    }));
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_6);
    };
  }
});
var Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b783304"]]);
export { Loading as default };
