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

//#region src/views/contact/ContactView.vue?vue&type=script&setup=true&lang.ts
var ContactView_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ContactView",
	__ssrInlineRender: true,
	setup(__props) {
		const { t } = useI18n();
		useHead$1({ title: () => t("contact.title") });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(unref(t)("contact.title"))}</h1></main>`);
		};
	}
});
//#endregion
//#region src/views/contact/ContactView.vue
var _sfc_setup = ContactView_vue_vue_type_script_setup_true_lang_default.setup;
ContactView_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/contact/ContactView.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ContactView_default = ContactView_vue_vue_type_script_setup_true_lang_default;

export { ContactView_default as default };
//# sourceMappingURL=ContactView-C5WPQqi9.mjs.map
