import { defineComponent, useCssVars, unref, computed, inject, openBlock, createElementBlock, withModifiers, createElementVNode, normalizeClass, pushScopeId, popScopeId } from "vue";
import "./MultipleSelectCheckBox.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-50e28b77"), n = n(), popScopeId(), n);
const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["checked"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("label", { for: "checbox" }, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MultipleSelectCheckBox",
  props: {
    status: { type: String, required: true }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "5a91fae2": unref(themeColor)
    }));
    const isChecked = computed(() => props.status === "allSelected");
    const toggleChecked = () => {
      emits("change", !isChecked.value);
    };
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "easy-checkbox",
        onClick: withModifiers(toggleChecked, ["stop", "prevent"])
      }, [
        createElementVNode("input", {
          type: "checkbox",
          checked: unref(isChecked),
          class: normalizeClass(__props.status)
        }, null, 10, _hoisted_2),
        _hoisted_3
      ], 8, _hoisted_1);
    };
  }
});
var MultipleSelectCheckBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50e28b77"]]);
export { MultipleSelectCheckBox as default };
