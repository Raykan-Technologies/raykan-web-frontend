import { u as useI18n } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { defineComponent, computed, mergeProps, createVNode, resolveDynamicComponent, unref, ref, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useTemplateRef, useSSRContext } from 'vue';
import { RouterLink } from 'vue-router';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Pagination, A11y } from 'swiper/modules';

//#region src/components/elements/RButton.vue?vue&type=script&setup=true&lang.ts
var RButton_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "RButton",
	__ssrInlineRender: true,
	props: {
		to: {},
		href: {},
		variant: { default: "solid" },
		block: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const tag = computed(() => props.to ? RouterLink : props.href ? "a" : "button");
		const isExternal = computed(() => !!props.href && /^https?:\/\//.test(props.href));
		const pressed = ref(false);
		let pointerType = "";
		const onPointerDown = (e) => {
			pointerType = e.pointerType;
			if (e.pointerType === "touch") pressed.value = true;
		};
		const release = () => {
			pressed.value = false;
		};
		const onContextMenu = (e) => {
			if (pointerType === "touch") e.preventDefault();
		};
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
				class: ["r-button", [`r-button--${__props.variant}`, {
					"r-button--block": __props.block,
					"r-button--pressed": pressed.value
				}]],
				to: __props.to,
				href: __props.href,
				target: isExternal.value ? "_blank" : void 0,
				rel: isExternal.value ? "noopener" : void 0,
				type: tag.value === "button" ? "button" : void 0,
				onPointerdown: onPointerDown,
				onPointerup: release,
				onPointercancel: release,
				onPointerleave: release,
				onContextmenu: onContextMenu
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}), _parent);
		};
	}
});
//#endregion
//#region src/components/elements/RButton.vue
var _sfc_setup$26 = RButton_vue_vue_type_script_setup_true_lang_default.setup;
RButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/RButton.vue");
	return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
var RButton_default = RButton_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/utils.ts
/**
* Converts a PascalCase / camelCase string to kebab-case
*
* @see Source https://stackoverflow.com/a/67243723
*/
var kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
//#endregion
//#region src/components/icons/ArrowRight.vue
var _sfc_main$19 = {};
function _sfc_ssrRender$19(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, _attrs))}><path d="M18.5 12H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="r-icon__two-tone" d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$25 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ArrowRight.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
var ArrowRight_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$19, [["ssrRender", _sfc_ssrRender$19]]);
//#endregion
//#region src/components/icons/Blocks.vue
var _sfc_main$18 = {};
function _sfc_ssrRender$18(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "none"
	}, _attrs))}><rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="20" y="3" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="11.5" y="20" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M12 7.5H20M7.5 12L13 20M24.5 12L19 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$24 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Blocks.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
var Blocks_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$18, [["ssrRender", _sfc_ssrRender$18]]);
//#endregion
//#region src/components/icons/ChartGrowth.vue
var _sfc_main$17 = {};
function _sfc_ssrRender$17(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "none"
	}, _attrs))}><path d="M4 4V28H28" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 24V19M16 24V15M22 24V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 13L14 8L19 11L26 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 5H26V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$23 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ChartGrowth.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
var ChartGrowth_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$17, [["ssrRender", _sfc_ssrRender$17]]);
//#endregion
//#region src/components/icons/Check.vue
var _sfc_main$16 = {};
function _sfc_ssrRender$16(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none"
	}, _attrs))}><path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5"></path><path class="r-icon__active-path" opacity="0.2" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="currentColor"></path><path class="r-icon__two-tone" d="M8 12.5L10.5 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$22 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Check.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
var Check_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$16, [["ssrRender", _sfc_ssrRender$16]]);
//#endregion
//#region src/components/icons/ChevronDown.vue
var _sfc_main$15 = {};
function _sfc_ssrRender$15(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none"
	}, _attrs))}><path d="M6 9C6 9 10.4189 15 12 15C13.5812 15 18 9 18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$21 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ChevronDown.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
var ChevronDown_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$15, [["ssrRender", _sfc_ssrRender$15]]);
//#endregion
//#region src/components/icons/CodeWindow.vue
var _sfc_main$14 = {};
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "15.83 20.58 32.34 32.34",
		fill: "none"
	}, _attrs))}><path d="M44.3886 35.2742V23.8709C44.3886 22.8288 43.4768 21.917 42.4347 21.917H18.9881C17.946 21.917 17.0342 22.8288 17.0342 23.8709V45.3636C17.0342 46.4056 17.946 47.3175 18.9881 47.3175H30.684" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0342 27.7807H44.3886" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.9671 45.0072C40.8105 45.0072 40.6836 44.8804 40.6836 44.7238C40.6836 44.5671 40.8105 44.4402 40.9671 44.4402" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.9678 45.0072C41.1244 45.0072 41.2513 44.8804 41.2513 44.7238C41.2513 44.5671 41.1244 44.4402 40.9678 44.4402" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M42.213 38.8336L42.6122 40.3304C42.8117 40.8294 43.3107 41.1288 43.8097 41.029L45.3065 40.7296C46.6039 40.4303 47.502 42.0269 46.6039 42.925L45.6059 44.0227C45.2068 44.4218 45.2068 45.0207 45.6059 45.4198L46.6039 46.5175C47.502 47.5154 46.6039 49.0122 45.3065 48.7128L43.8097 48.4135C43.3107 48.3137 42.8117 48.6131 42.6122 49.1121L42.213 50.6089C41.8139 51.9063 40.0176 51.9063 39.7183 50.6089L39.3192 49.1121C39.1195 48.6131 38.6206 48.3137 38.1216 48.4135L36.6247 48.7128C35.3275 49.0122 34.4293 47.4156 35.3275 46.5175L36.3254 45.4198C36.7245 45.0207 36.7245 44.4218 36.3254 44.0227L35.3275 42.925C34.4293 41.9271 35.3275 40.4303 36.6247 40.7296L38.1216 41.029C38.6206 41.1288 39.1195 40.8294 39.3192 40.3304L39.7183 38.8336C40.0176 37.5363 41.8139 37.5363 42.213 38.8336Z" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.3213 32.4496L34.9648 35.839L32.3213 39.2264" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.414 39.2345L20.7705 35.8451L23.414 32.4576" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.457 39.8584L29.2773 31.8179" stroke="currentColor" stroke-width="2.0286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$20 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/CodeWindow.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
var CodeWindow_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$14, [["ssrRender", _sfc_ssrRender$14]]);
//#endregion
//#region src/components/icons/Facebook.vue
var _sfc_main$13 = {};
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512",
		fill: "currentColor"
	}, _attrs))}><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>`);
}
var _sfc_setup$19 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Facebook.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var Facebook_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$13, [["ssrRender", _sfc_ssrRender$13]]);
//#endregion
//#region src/components/icons/Hexagon.vue
var _sfc_main$12 = {};
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 64 74",
		fill: "none"
	}, _attrs))}><path d="M1.6271 17.7107L31.0043 0.852746C31.9227 0.325716 33.0536 0.333285 33.9649 0.872562L62.4077 17.7044C63.3019 18.2335 63.8504 19.1954 63.8504 20.2345V53.0324C63.8504 54.0655 63.3082 55.0227 62.4222 55.5539L33.9792 72.6073C33.0607 73.158 31.9155 73.1657 30.9897 72.6275L1.61269 55.5478C0.707392 55.0215 0.150391 54.0534 0.150391 53.0062V20.2607C0.150391 19.2076 0.713681 18.2349 1.6271 17.7107Z" fill="currentColor"></path></svg>`);
}
var _sfc_setup$18 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Hexagon.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var Hexagon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$12, [["ssrRender", _sfc_ssrRender$12]]);
//#endregion
//#region src/components/icons/Instagram.vue
var _sfc_main$11 = {};
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 448 512",
		fill: "currentColor"
	}, _attrs))}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>`);
}
var _sfc_setup$17 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Instagram.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var Instagram_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$11, [["ssrRender", _sfc_ssrRender$11]]);
//#endregion
//#region src/components/icons/Linkedin.vue
var _sfc_main$10 = {};
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 448 512",
		fill: "currentColor"
	}, _attrs))}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`);
}
var _sfc_setup$16 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Linkedin.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var Linkedin_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$10, [["ssrRender", _sfc_ssrRender$10]]);
//#endregion
//#region src/components/icons/Megaphone.vue
var _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "none"
	}, _attrs))}><path d="M6 12H10L21 6V26L10 20H6C4.9 20 4 19.1 4 18V14C4 12.9 4.9 12 6 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 20L12 27H15L13.5 20.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 12.5A4 4 0 0 1 25 19.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.5 10A7.5 7.5 0 0 1 27.5 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$15 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Megaphone.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var Megaphone_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
//#endregion
//#region src/components/icons/Menu.vue
var _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 448 512",
		fill: "currentColor"
	}, _attrs))}><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>`);
}
var _sfc_setup$14 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Menu.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Menu_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
//#endregion
//#region src/components/icons/Modules.vue
var _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "none"
	}, _attrs))}><rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M27.5 20.9A5 5 0 1 0 27.7 24.7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9 17.6L27.5 20.9L24.3 20.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$13 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Modules.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var Modules_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
//#endregion
//#region src/components/icons/Quote.vue
var _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 45 45",
		fill: "currentColor"
	}, _attrs))}><path d="M30 37.5013H37.5C39.4891 37.5013 41.3968 36.7112 42.8033 35.3046C44.2098 33.8981 45 31.9905 45 30.0013V22.5013C45 21.5068 44.6049 20.553 43.9017 19.8497C43.1984 19.1464 42.2446 18.7513 41.25 18.7513H30.1688C30.6136 16.1328 31.9697 13.7558 33.9974 12.0403C36.0252 10.3248 38.594 9.38127 41.25 9.37634C41.7473 9.37634 42.2242 9.1788 42.5758 8.82717C42.9275 8.47554 43.125 7.99862 43.125 7.50134C43.125 7.00406 42.9275 6.52715 42.5758 6.17552C42.2242 5.82388 41.7473 5.62634 41.25 5.62634C37.2731 5.63081 33.4604 7.2126 30.6483 10.0247C27.8363 12.8368 26.2545 16.6495 26.25 20.6263V33.7513C26.25 34.7459 26.6451 35.6997 27.3484 36.403C28.0516 37.1063 29.0054 37.5013 30 37.5013Z"></path><path d="M3.75 37.5013H11.25C13.2391 37.5013 15.1468 36.7112 16.5533 35.3046C17.9598 33.8981 18.75 31.9905 18.75 30.0013V22.5013C18.75 21.5068 18.3549 20.553 17.6516 19.8497C16.9484 19.1464 15.9946 18.7513 15 18.7513H3.91875C4.36363 16.1328 5.71973 13.7558 7.74744 12.0403C9.77516 10.3248 12.344 9.38127 15 9.37634C15.4973 9.37634 15.9742 9.1788 16.3258 8.82717C16.6775 8.47554 16.875 7.99862 16.875 7.50134C16.875 7.00406 16.6775 6.52715 16.3258 6.17552C15.9742 5.82388 15.4973 5.62634 15 5.62634C11.0231 5.63081 7.21041 7.2126 4.39833 10.0247C1.58625 12.8368 0.00446701 16.6495 0 20.6263V33.7513C0 34.7459 0.395088 35.6997 1.09835 36.403C1.80161 37.1063 2.75544 37.5013 3.75 37.5013Z"></path></svg>`);
}
var _sfc_setup$12 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Quote.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var Quote_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
//#endregion
//#region src/components/icons/ServerShield.vue
var _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "none"
	}, _attrs))}><rect x="3" y="4" width="26" height="9" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="3" y="17" width="14" height="9" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M7 8.5H7.01M7 21.5H7.01M11 8.5H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 16L30 18V22C30 25.5 27.8 27.6 25 28.5C22.2 27.6 20 25.5 20 22V18L25 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.8 22.2L24.5 23.8L27.4 20.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
var _sfc_setup$11 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ServerShield.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var ServerShield_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
//#endregion
//#region src/components/icons/Star.vue
var _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 576 512",
		fill: "currentColor"
	}, _attrs))}><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>`);
}
var _sfc_setup$10 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Star.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var Star_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
//#endregion
//#region src/components/icons/XIcon.vue
var _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		viewBox: "0 0 10 10",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, _attrs))}><path d="M9.65625 1.28125L5.9375 5L9.65625 8.71875L8.71875 9.65625L5 5.9375L1.28125 9.65625L0.34375 8.71875L4.0625 5L0.34375 1.28125L1.28125 0.34375L5 4.0625L8.71875 0.34375L9.65625 1.28125Z" fill="currentColor"></path></svg>`);
}
var _sfc_setup$9 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/XIcon.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region src/components/icons/index.ts
var iconComponents$1 = {
	ArrowRight: ArrowRight_default,
	Blocks: Blocks_default,
	ChartGrowth: ChartGrowth_default,
	Check: Check_default,
	ChevronDown: ChevronDown_default,
	CodeWindow: CodeWindow_default,
	Facebook: Facebook_default,
	Hexagon: Hexagon_default,
	Instagram: Instagram_default,
	Linkedin: Linkedin_default,
	Megaphone: Megaphone_default,
	Menu: Menu_default,
	Modules: Modules_default,
	Quote: Quote_default,
	ServerShield: ServerShield_default,
	Star: Star_default,
	XIcon: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]])
};
var ICONS = { ...Object.keys(iconComponents$1).reduce((obj, name) => {
	obj[kebabize(name)] = iconComponents$1[name];
	return obj;
}, {}) };
//#endregion
//#region src/components/file-icons/Document.vue
var _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24"
	}, _attrs))}><path fill="currentColor" d="m17,13.5c0,.276-.224.5-.5.5H7.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h9c.276,0,.5.224.5.5Zm-3.5,3.5h-6c-.276,0-.5.224-.5.5s.224.5.5.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm8.5-7.015v9.515c0,2.481-2.019,4.5-4.5,4.5H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h5.515c1.735,0,3.368.676,4.597,1.904l3.484,3.485c1.228,1.227,1.904,2.859,1.904,4.596Zm-6.096-7.375c-.551-.55-1.2-.959-1.904-1.231v5.12c0,.827.673,1.5,1.5,1.5h5.121c-.273-.704-.682-1.354-1.232-1.904l-3.484-3.485Zm5.096,7.375c0-.335-.038-.663-.096-.985h-5.404c-1.379,0-2.5-1.122-2.5-2.5V1.096c-.323-.058-.651-.096-.985-.096h-5.515c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5v-9.515Z"></path></svg>`);
}
var _sfc_setup$8 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/file-icons/Document.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Document_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
//#endregion
//#region src/components/file-icons/Image.vue
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24"
	}, _attrs))}><path fill="currentColor" d="M20.1,5.39l-3.49-3.49c-1.23-1.23-2.86-1.9-4.6-1.9H6.5C4.02,0,2,2.02,2,4.5v15c0,2.48,2.02,4.5,4.5,4.5h11c2.48,0,4.5-2.02,4.5-4.5V9.99c0-1.74-.68-3.37-1.9-4.6Zm-.71,.71c.55,.55,.97,1.2,1.24,1.9h-5.13c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.49,3.49ZM6.5,1h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v5.3l-2.79-2.79c-.65-.65-1.78-.65-2.43,0l-3.27,3.27c-.27,.27-.74,.27-1.02,0l-3.27-3.27c-.65-.65-1.78-.65-2.43,0l-2.79,2.79V4.5c0-1.93,1.57-3.5,3.5-3.5Zm11,22H6.5c-1.93,0-3.5-1.57-3.5-3.5v-2.79l3.5-3.5c.27-.27,.74-.27,1.02,0l3.27,3.27c.32,.32,.76,.5,1.21,.5s.89-.18,1.22-.5l3.27-3.27c.27-.27,.74-.27,1.02,0l3.49,3.49v2.8c0,1.93-1.57,3.5-3.5,3.5Z"></path></svg>`);
}
var _sfc_setup$7 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/file-icons/Image.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Image_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
//#endregion
//#region src/components/file-icons/Pdf.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24"
	}, _attrs))}><path fill="currentColor" d="M20.1,5.39l-3.49-3.49c-1.23-1.23-2.86-1.9-4.6-1.9H6.5C4.02,0,2,2.02,2,4.5v15c0,2.48,2.02,4.5,4.5,4.5h11c2.48,0,4.5-2.02,4.5-4.5V9.99c0-1.74-.68-3.37-1.9-4.6Zm-.71,.71c.55,.55,.97,1.2,1.24,1.9h-5.13c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.49,3.49Zm1.61,13.4c0,1.93-1.57,3.5-3.5,3.5H6.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v9.51ZM6.97,13h-.97c-.55,0-1,.45-1,1v4.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-1.5h.97c1.11,0,2.01-.92,2.01-2.02s-.9-1.98-2.01-1.98Zm0,3h-.97v-2h.97c.56,0,1.01,.44,1.01,.98s-.46,1.02-1.01,1.02Zm5.03-3h0s-.51,0-1,0c-.55,0-1,.45-1,1v4c0,.55,.45,1,1,1,.48,0,.97,0,1,0h0c1.11,0,2-.89,2-1.98v-2.03c0-1.09-.89-1.98-2-1.98Zm1,4.02c0,.53-.43,.96-.96,.98h-1.04v-4h1.04c.53,.02,.96,.46,.96,.98v2.03Zm6-3.52c0,.28-.22,.5-.5,.5h-2.5v2s1.5,0,1.5,0c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-1.5v1.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-4.5c0-.55,.45-1,1-1h2.5c.28,0,.5,.22,.5,.5Z"></path></svg>`);
}
var _sfc_setup$6 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/file-icons/Pdf.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region src/components/file-icons/index.ts
var iconComponents = {
	FileDocument: Document_default,
	FileImage: Image_default,
	FilePdf: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]])
};
var FILE_ICONS = { ...Object.keys(iconComponents).reduce((obj, name) => {
	obj[kebabize(name)] = iconComponents[name];
	return obj;
}, {}) };
//#endregion
//#region src/components/elements/RIcon.vue?vue&type=script&setup=true&lang.ts
var RIcon_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "RIcon",
	__ssrInlineRender: true,
	props: {
		name: {},
		size: { default: 24 },
		spin: { type: Boolean },
		type: { default: "default" },
		hover: { type: Boolean },
		activeHover: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const iconStyles = computed(() => ({
			width: `${props.size}px`,
			height: `${props.size}px`,
			cursor: props.hover || props.activeHover ? "pointer" : void 0
		}));
		const iconClasses = computed(() => [`r-icon--${props.type}`, {
			"r-icon--spinning": props.spin,
			"animate-loading": props.spin,
			"r-icon--hoverable": props.activeHover
		}]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: ["r-icon", iconClasses.value],
				style: iconStyles.value
			}, _attrs))}>`);
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent({
				...unref(ICONS),
				...unref(FILE_ICONS)
			}[__props.name]), {
				height: __props.size,
				width: __props.size,
				type: props.activeHover ? "default" : props.type
			}, null), _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region src/components/elements/RIcon.vue
var _sfc_setup$5 = RIcon_vue_vue_type_script_setup_true_lang_default.setup;
RIcon_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/RIcon.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var RIcon_default = RIcon_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/elements/RCard.vue?vue&type=script&setup=true&lang.ts
var RCard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "RCard",
	__ssrInlineRender: true,
	props: {
		icon: {},
		title: {},
		to: {}
	},
	setup(__props) {
		const props = __props;
		const tag = computed(() => props.to ? RouterLink : "div");
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
				class: ["r-card", { "r-card--link": __props.to }],
				to: __props.to
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (__props.icon) {
							_push(`<div class="r-card__icon"${_scopeId}>`);
							_push(ssrRenderComponent(RIcon_default, {
								name: "hexagon",
								size: 74,
								class: "r-card__icon-badge"
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(RIcon_default, {
								name: __props.icon,
								size: 32,
								class: "r-card__icon-glyph"
							}, null, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						if (__props.title) _push(`<h3 class="r-card__title"${_scopeId}>${ssrInterpolate(__props.title)}</h3>`);
						else _push(`<!---->`);
						if (_ctx.$slots.default) {
							_push(`<div class="r-card__body"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [
						__props.icon ? (openBlock(), createBlock("div", {
							key: 0,
							class: "r-card__icon"
						}, [createVNode(RIcon_default, {
							name: "hexagon",
							size: 74,
							class: "r-card__icon-badge"
						}), createVNode(RIcon_default, {
							name: __props.icon,
							size: 32,
							class: "r-card__icon-glyph"
						}, null, 8, ["name"])])) : createCommentVNode("", true),
						__props.title ? (openBlock(), createBlock("h3", {
							key: 1,
							class: "r-card__title"
						}, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
						_ctx.$slots.default ? (openBlock(), createBlock("div", {
							key: 2,
							class: "r-card__body"
						}, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("", true)
					];
				}),
				_: 3
			}), _parent);
		};
	}
});
//#endregion
//#region src/components/elements/RCard.vue
var _sfc_setup$4 = RCard_vue_vue_type_script_setup_true_lang_default.setup;
RCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/RCard.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var RCard_default = RCard_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/elements/RCarousel.vue?vue&type=script&setup=true&lang.ts
var RCarousel_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "RCarousel",
	__ssrInlineRender: true,
	props: {
		items: {},
		slidesPerView: { default: () => ({
			desktop: 4,
			tablet: 4,
			mobile: 1
		}) },
		spaceBetween: { default: () => ({
			desktop: 10,
			tablet: 8,
			mobile: 10
		}) },
		speed: { default: 2e3 },
		autoplay: { default: 5e3 },
		loop: {
			type: Boolean,
			default: true
		},
		fadeEdges: {
			type: Boolean,
			default: true
		},
		effect: { default: "slide" },
		pagination: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const { t } = useI18n();
		const isImage = (item) => "src" in item && "alt" in item;
		const modules = [
			Autoplay,
			...props.effect === "fade" ? [EffectFade] : [],
			...props.pagination ? [Pagination, A11y] : []
		];
		const paginationOptions = computed(() => props.pagination ? { clickable: true } : false);
		const a11yOptions = computed(() => ({
			paginationBulletMessage: t("common.carousel.goToSlide", { index: "{{index}}" }),
			slideLabelMessage: t("common.carousel.slideLabel", {
				index: "{{index}}",
				total: "{{slidesLength}}"
			})
		}));
		const onAutoplayTimeLeft = (swiper, _time, timeLeft) => {
			swiper.el.style.setProperty("--r-carousel-progress", String(1 - timeLeft));
		};
		const toBreakpoints = (value) => {
			const { desktop, tablet, mobile } = typeof value === "number" ? { desktop: value } : value;
			return {
				mobile: mobile ?? tablet ?? desktop,
				tablet: tablet ?? desktop,
				desktop
			};
		};
		const swiperOptions = computed(() => {
			const perView = toBreakpoints(props.slidesPerView);
			const space = toBreakpoints(props.spaceBetween);
			return {
				slidesPerView: perView.mobile,
				spaceBetween: space.mobile,
				breakpoints: {
					768: {
						slidesPerView: perView.tablet,
						spaceBetween: space.tablet
					},
					1025: {
						slidesPerView: perView.desktop,
						spaceBetween: space.desktop
					}
				}
			};
		});
		const autoplayOptions = computed(() => props.autoplay > 0 ? {
			delay: props.autoplay,
			disableOnInteraction: false
		} : false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Swiper), mergeProps({
				class: ["r-carousel", {
					"r-carousel--fade": __props.fadeEdges,
					"r-carousel--pagination": __props.pagination
				}],
				modules,
				"slides-per-view": swiperOptions.value.slidesPerView,
				"space-between": swiperOptions.value.spaceBetween,
				breakpoints: swiperOptions.value.breakpoints,
				speed: __props.speed,
				loop: __props.loop,
				autoplay: autoplayOptions.value,
				effect: __props.effect,
				"fade-effect": { crossFade: true },
				pagination: paginationOptions.value,
				a11y: a11yOptions.value,
				onAutoplayTimeLeft
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(__props.items, (item, index) => {
							_push(ssrRenderComponent(unref(SwiperSlide), {
								key: index,
								class: "r-carousel__slide"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) ssrRenderSlot(_ctx.$slots, "default", {
										item,
										index
									}, () => {
										if (isImage(item)) _push(`<img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.alt)}${ssrRenderAttr("width", item.width)}${ssrRenderAttr("height", item.height)}${_scopeId}>`);
										else _push(`<!---->`);
									}, _push, _parent, _scopeId);
									else return [renderSlot(_ctx.$slots, "default", {
										item,
										index
									}, () => [isImage(item) ? (openBlock(), createBlock("img", {
										key: 0,
										src: item.src,
										alt: item.alt,
										width: item.width,
										height: item.height
									}, null, 8, [
										"src",
										"alt",
										"width",
										"height"
									])) : createCommentVNode("", true)])];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
						return openBlock(), createBlock(unref(SwiperSlide), {
							key: index,
							class: "r-carousel__slide"
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
								item,
								index
							}, () => [isImage(item) ? (openBlock(), createBlock("img", {
								key: 0,
								src: item.src,
								alt: item.alt,
								width: item.width,
								height: item.height
							}, null, 8, [
								"src",
								"alt",
								"width",
								"height"
							])) : createCommentVNode("", true)])]),
							_: 2
						}, 1024);
					}), 128))];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region src/components/elements/RCarousel.vue
var _sfc_setup$3 = RCarousel_vue_vue_type_script_setup_true_lang_default.setup;
RCarousel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/RCarousel.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var RCarousel_default = RCarousel_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/elements/RSection.vue?vue&type=script&setup=true&lang.ts
var RSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "RSection",
	__ssrInlineRender: true,
	props: {
		tag: { default: "section" },
		title: {},
		titleTag: { default: "h2" },
		label: {},
		description: {},
		inner: { type: Boolean },
		theme: {},
		width: {},
		gutter: {},
		minHeight: {},
		columns: {},
		gap: { default: "default" },
		columnsAlign: { default: "stretch" },
		align: { default: "start" },
		verticalAlign: { default: "middle" },
		image: {},
		imagePosition: { default: "center center" },
		imageSize: { default: "cover" },
		overlay: {},
		overlayOpacity: { default: 1 }
	},
	setup(__props) {
		const props = __props;
		const theme = computed(() => props.theme ?? (props.inner ? "transparent" : "light"));
		const width = computed(() => props.width ?? (props.inner ? "full" : "boxed"));
		const gutter = computed(() => props.gutter ?? (props.inner ? "none" : "default"));
		const toBreakpoints = (value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : { desktop: value };
		const toGridColumns = (columns) => {
			if (columns === void 0) return void 0;
			if (typeof columns === "number") return `repeat(${columns}, minmax(0, 1fr))`;
			return columns.map((size) => `minmax(0, ${size}fr)`).join(" ");
		};
		const hasColumns = computed(() => props.columns !== void 0);
		const sectionStyles = computed(() => {
			const minHeight = toBreakpoints(props.minHeight);
			const columns = toBreakpoints(props.columns);
			return {
				"--section-min-height": minHeight.desktop,
				"--section-min-height-tablet": minHeight.tablet,
				"--section-min-height-mobile": minHeight.mobile,
				"--section-width": width.value === "boxed" || width.value === "full" ? void 0 : width.value,
				"--section-columns": toGridColumns(columns.desktop),
				"--section-columns-tablet": toGridColumns(columns.tablet),
				"--section-columns-mobile": toGridColumns(columns.mobile),
				backgroundImage: props.image ? `url(${props.image})` : void 0,
				backgroundPosition: props.image ? props.imagePosition : void 0,
				backgroundSize: props.image ? props.imageSize : void 0
			};
		});
		const overlayStyles = computed(() => ({
			backgroundColor: props.overlay,
			opacity: props.overlayOpacity
		}));
		const sectionClasses = computed(() => [
			`r-section--${theme.value}`,
			`r-section--gutter-${gutter.value}`,
			`r-section--gap-${props.gap}`,
			`r-section--align-${props.align}`,
			`r-section--valign-${props.verticalAlign}`,
			`r-section--columns-${props.columnsAlign}`,
			{
				"r-section--inner": props.inner,
				"r-section--full": width.value === "full",
				"r-section--grid": hasColumns.value
			}
		]);
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), mergeProps({
				class: ["r-section", sectionClasses.value],
				style: sectionStyles.value
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (__props.overlay) _push(`<div class="r-section__overlay" style="${ssrRenderStyle(overlayStyles.value)}"${_scopeId}></div>`);
						else _push(`<!---->`);
						ssrRenderSlot(_ctx.$slots, "background", {}, null, _push, _parent, _scopeId);
						_push(`<div class="r-section__container"${_scopeId}>`);
						if (__props.title || __props.label || __props.description) {
							_push(`<div class="r-section__header"${_scopeId}>`);
							if (__props.label) _push(`<span class="r-section__label"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
							else _push(`<!---->`);
							if (__props.title) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.titleTag), { class: "r-section__title" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(__props.title)}`);
									else return [createTextVNode(toDisplayString(__props.title), 1)];
								}),
								_: 1
							}), _parent, _scopeId);
							else _push(`<!---->`);
							if (__props.description) _push(`<p class="r-section__description"${_scopeId}>${ssrInterpolate(__props.description)}</p>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</div>`);
					} else return [
						__props.overlay ? (openBlock(), createBlock("div", {
							key: 0,
							class: "r-section__overlay",
							style: overlayStyles.value
						}, null, 4)) : createCommentVNode("", true),
						renderSlot(_ctx.$slots, "background"),
						createVNode("div", { class: "r-section__container" }, [__props.title || __props.label || __props.description ? (openBlock(), createBlock("div", {
							key: 0,
							class: "r-section__header"
						}, [
							__props.label ? (openBlock(), createBlock("span", {
								key: 0,
								class: "r-section__label"
							}, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
							__props.title ? (openBlock(), createBlock(resolveDynamicComponent(__props.titleTag), {
								key: 1,
								class: "r-section__title"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
								_: 1
							})) : createCommentVNode("", true),
							__props.description ? (openBlock(), createBlock("p", {
								key: 2,
								class: "r-section__description"
							}, toDisplayString(__props.description), 1)) : createCommentVNode("", true)
						])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")])
					];
				}),
				_: 3
			}), _parent);
		};
	}
});
//#endregion
//#region src/components/elements/RSection.vue
var _sfc_setup$2 = RSection_vue_vue_type_script_setup_true_lang_default.setup;
RSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/RSection.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var RSection_default = RSection_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/elements/RStat.vue?vue&type=script&setup=true&lang.ts
var RStat_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "RStat",
	__ssrInlineRender: true,
	props: {
		value: {},
		suffix: { default: "" },
		duration: { default: 2e3 }
	},
	setup(__props) {
		const root = useTemplateRef("root");
		const current = ref(0);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "root",
				ref: root,
				class: "r-stat"
			}, _attrs))}><p class="r-stat__value"><span class="sr-only">${ssrInterpolate(__props.value)}${ssrInterpolate(__props.suffix)}</span><span aria-hidden="true">${ssrInterpolate(current.value)}${ssrInterpolate(__props.suffix)}</span></p>`);
			if (_ctx.$slots.default) {
				_push(`<div class="r-stat__description">`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region src/components/elements/RStat.vue
var _sfc_setup$1 = RStat_vue_vue_type_script_setup_true_lang_default.setup;
RStat_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/RStat.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var RStat_default = RStat_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/elements/RTestimonialCard.vue?vue&type=script&setup=true&lang.ts
var RTestimonialCard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "RTestimonialCard",
	__ssrInlineRender: true,
	props: {
		quote: {},
		name: {},
		role: {},
		photo: {},
		rating: { default: 5 }
	},
	setup(__props) {
		const { t } = useI18n();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<figure${ssrRenderAttrs(mergeProps({ class: "r-testimonial-card" }, _attrs))}>`);
			if (__props.rating) {
				_push(`<div class="r-testimonial-card__rating" role="img"${ssrRenderAttr("aria-label", unref(t)("common.rating", { rating: __props.rating }))}><!--[-->`);
				ssrRenderList(__props.rating, (star) => {
					_push(ssrRenderComponent(RIcon_default, {
						key: star,
						name: "star",
						size: 16
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`<blockquote class="r-testimonial-card__quote"><p>${ssrInterpolate(__props.quote)}</p></blockquote><figcaption class="r-testimonial-card__author">`);
			if (__props.photo) _push(`<img class="r-testimonial-card__photo"${ssrRenderAttr("src", __props.photo)} alt="" width="70" height="70">`);
			else _push(`<!---->`);
			_push(`<span class="r-testimonial-card__info"><strong class="r-testimonial-card__name">${ssrInterpolate(__props.name)}</strong>`);
			if (__props.role) _push(`<span class="r-testimonial-card__role">${ssrInterpolate(__props.role)}</span>`);
			else _push(`<!---->`);
			_push(`</span></figcaption>`);
			_push(ssrRenderComponent(RIcon_default, {
				name: "quote",
				size: 48,
				class: "r-testimonial-card__mark"
			}, null, _parent));
			_push(`</figure>`);
		};
	}
});
//#endregion
//#region src/components/elements/RTestimonialCard.vue
var _sfc_setup = RTestimonialCard_vue_vue_type_script_setup_true_lang_default.setup;
RTestimonialCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/RTestimonialCard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var RTestimonialCard_default = RTestimonialCard_vue_vue_type_script_setup_true_lang_default;

export { RSection_default as R, RButton_default as a, RCarousel_default as b, RCard_default as c, RTestimonialCard_default as d, RStat_default as e, RIcon_default as f };
//# sourceMappingURL=elements-wXYOpSMC.mjs.map
