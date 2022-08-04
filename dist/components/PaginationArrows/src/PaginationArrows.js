import { defineComponent, useSlots, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, unref, renderSlot, createCommentVNode, pushScopeId, popScopeId } from "vue";
import "./PaginationArrows.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-579fdfd7"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "arrow arrow-right" }, null, -1));
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "arrow arrow-left" }, null, -1));
const _hoisted_4 = [
  _hoisted_3
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PaginationArrows",
  props: {
    isFirstPage: { type: Boolean, required: false },
    isLastPage: { type: Boolean, required: false }
  },
  emits: ["clickPrevPage", "clickNextPage"],
  setup(__props, { emit: emits }) {
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass(["previous-page__click-button", { "first-page": __props.isFirstPage }]),
          onClick: _cache[0] || (_cache[0] = ($event) => emits("clickPrevPage"))
        }, _hoisted_2, 2),
        unref(slots).buttonsPagination ? renderSlot(_ctx.$slots, "buttonsPagination", { key: 0 }, void 0, true) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["next-page__click-button", { "last-page": __props.isLastPage }]),
          onClick: _cache[1] || (_cache[1] = ($event) => emits("clickNextPage"))
        }, _hoisted_4, 2)
      ], 64);
    };
  }
});
var PaginationArrows = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-579fdfd7"]]);
export { PaginationArrows as default };
