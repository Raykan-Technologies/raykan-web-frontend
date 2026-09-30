import { u as useI18n, a as useHead$1 } from '../virtual/entry.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import '@vue/shared';
import 'pinia';
import 'fnv1a-64';
import 'object-identity';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region src/views/solutions/SolutionsView.vue?vue&type=script&setup=true&lang.ts
var SolutionsView_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SolutionsView",
	__ssrInlineRender: true,
	setup(__props) {
		const { t } = useI18n();
		useHead$1({ title: () => t("solutions.title") });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(unref(t)("solutions.title"))}</h1></main>`);
		};
	}
});
//#endregion
//#region src/views/solutions/SolutionsView.vue
var _sfc_setup = SolutionsView_vue_vue_type_script_setup_true_lang_default.setup;
SolutionsView_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/solutions/SolutionsView.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SolutionsView_default = SolutionsView_vue_vue_type_script_setup_true_lang_default;

export { SolutionsView_default as default };
//# sourceMappingURL=SolutionsView-DeQZ1j38.mjs.map
