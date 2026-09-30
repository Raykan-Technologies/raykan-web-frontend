import { u as useI18n, b as useRequestEvent, s as setResponseStatus$1, a as useHead$1 } from '../virtual/entry.mjs';
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

//#region src/views/errors/HttpError.vue?vue&type=script&setup=true&lang.ts
var HttpError_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "HttpError",
	__ssrInlineRender: true,
	props: { code: { default: "404" } },
	setup(__props) {
		const props = __props;
		const { t } = useI18n();
		const event = useRequestEvent();
		if (event) setResponseStatus$1(event, Number(props.code));
		useHead$1({ title: () => t(`errorPages.${props.code}.title`) });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(__props.code)}</h1><h3>${ssrInterpolate(unref(t)(`errorPages.${__props.code}.title`))}</h3><p>${ssrInterpolate(unref(t)(`errorPages.${__props.code}.description`))}</p></main>`);
		};
	}
});
//#endregion
//#region src/views/errors/HttpError.vue
var _sfc_setup = HttpError_vue_vue_type_script_setup_true_lang_default.setup;
HttpError_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/errors/HttpError.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var HttpError_default = HttpError_vue_vue_type_script_setup_true_lang_default;

export { HttpError_default as default };
//# sourceMappingURL=HttpError-BJnlTLos.mjs.map
