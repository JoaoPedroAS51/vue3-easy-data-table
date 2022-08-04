import { defineComponent, useCssVars, unref, computed, inject, openBlock, createElementBlock, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import "./ButtonsPagination.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _hoisted_1 = { class: "buttons-pagination" };
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonsPagination",
  props: {
    maxPaginationNumber: { type: Number, required: true },
    currentPaginationNumber: { type: Number, required: true }
  },
  emits: ["updatePage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "003cb2e0": unref(themeColor)
    }));
    const totalVisible = 7;
    const changePage = (item) => {
      if (item.type === "button" && !item.active)
        emits("updatePage", item.page);
    };
    const paginationItemsForRender = computed(() => {
      const paginationItems = [];
      if (props.maxPaginationNumber <= totalVisible) {
        for (let i = 1; i <= props.maxPaginationNumber; i += 1) {
          paginationItems.push({
            type: "button",
            page: i,
            active: i === props.currentPaginationNumber,
            activePrev: i + 1 === props.currentPaginationNumber
          });
        }
      } else if ([1, 2, props.maxPaginationNumber, props.maxPaginationNumber - 1].includes(props.currentPaginationNumber)) {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i <= 3) {
            paginationItems.push({
              type: "button",
              page: i,
              active: i === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 4) {
            paginationItems.push({
              type: "omission"
            });
          } else {
            const page = props.maxPaginationNumber - (totalVisible - i);
            paginationItems.push({
              type: "button",
              page,
              active: page === props.currentPaginationNumber,
              activePrev: page + 1 === props.currentPaginationNumber
            });
          }
        }
      } else if ([3, 4].includes(props.currentPaginationNumber)) {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i <= 5) {
            paginationItems.push({
              type: "button",
              page: i,
              active: i === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 6) {
            paginationItems.push({
              type: "omission"
            });
          } else {
            paginationItems.push({
              type: "button",
              page: props.maxPaginationNumber,
              active: props.maxPaginationNumber === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          }
        }
      } else if ([props.maxPaginationNumber - 2, props.maxPaginationNumber - 3].includes(props.currentPaginationNumber)) {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i === 1) {
            paginationItems.push({
              type: "button",
              page: 1,
              active: props.currentPaginationNumber === 1,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 2) {
            paginationItems.push({
              type: "omission"
            });
          } else {
            const page = props.maxPaginationNumber - (totalVisible - i);
            paginationItems.push({
              type: "button",
              page,
              active: page === props.currentPaginationNumber,
              activePrev: page + 1 === props.currentPaginationNumber
            });
          }
        }
      } else {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i === 1) {
            paginationItems.push({
              type: "button",
              page: 1,
              active: props.currentPaginationNumber === 1,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 2 || i === 6) {
            paginationItems.push({
              type: "omission"
            });
          } else if (i === 7) {
            paginationItems.push({
              type: "button",
              page: props.maxPaginationNumber,
              active: props.maxPaginationNumber === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else {
            const diff = 4 - i;
            const page = props.currentPaginationNumber - diff;
            paginationItems.push({
              type: "button",
              page,
              active: page === props.currentPaginationNumber,
              activePrev: page + 1 === props.currentPaginationNumber
            });
          }
        }
      }
      return paginationItems;
    });
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginationItemsForRender), (item, i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(["item", {
              button: item.type === "button",
              active: item.type === "button" && item.active,
              "active-prev": item.type === "button" && item.activePrev,
              omission: item.type === "omission"
            }]),
            onClick: ($event) => changePage(item)
          }, toDisplayString(item.type === "button" ? item.page : "..."), 11, _hoisted_2);
        }), 128))
      ]);
    };
  }
});
var ButtonsPagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e696c2be"]]);
export { ButtonsPagination as default };
