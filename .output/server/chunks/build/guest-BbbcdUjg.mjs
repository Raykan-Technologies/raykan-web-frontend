import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderSlot } from 'vue/server-renderer';

//#region src/layouts/guest.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/guest.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var guest_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { guest_default as default };
//# sourceMappingURL=guest-BbbcdUjg.mjs.map
