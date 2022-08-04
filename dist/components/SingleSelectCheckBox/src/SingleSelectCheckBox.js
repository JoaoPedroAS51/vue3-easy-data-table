import { defineComponent, useCssVars, unref, inject, openBlock, createElementBlock, withModifiers, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./SingleSelectCheckBox.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-6fdf4c70"), n = n(), popScopeId(), n);
const _hoisted_1 = ["checked"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("label", { for: "checbox" }, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SingleSelectCheckBox",
  props: {
    checked: { type: Boolean, required: true }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    useCssVars((_ctx) => ({
      "5279356c": unref(themeColor)
    }));
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "easy-checkbox",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emits("change"), ["stop", "prevent"]))
      }, [
        createElementVNode("input", {
          type: "checkbox",
          checked: __props.checked
        }, null, 8, _hoisted_1),
        _hoisted_2
      ]);
    };
  }
});
var SingleSelectCheckBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fdf4c70"]]);
export { SingleSelectCheckBox as default };
