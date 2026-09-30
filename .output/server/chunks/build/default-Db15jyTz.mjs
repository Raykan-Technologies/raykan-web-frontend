import { u as useI18n, S as SOLUTIONS } from '../virtual/entry.mjs';
import { f as RIcon_default, a as RButton_default, R as RSection_default } from './elements-wXYOpSMC.mjs';
import { defineComponent, computed, mergeProps, unref, ref, useTemplateRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useModel, watch, useSSRContext } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport, ssrRenderStyle } from 'vue/server-renderer';
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
import './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import 'swiper/vue';
import 'swiper/modules';

//#region src/assets/AppLogo.vue?vue&type=script&setup=true&lang.ts
var AppLogo_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppLogo",
	__ssrInlineRender: true,
	props: {
		width: { default: 200 },
		height: { default: 48 }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<svg${ssrRenderAttrs(mergeProps({
				width: __props.width,
				height: __props.height,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 200 48",
				fill: "none"
			}, _attrs))}><path d="M6.20778 40.8858H3.95258V47.8693H3.03743V40.8858H0.787686V40.0578H6.20778V40.8858Z" fill="currentColor"></path><path d="M14.6402 47.8693H10.5003V40.0578H14.4659V40.8858H11.4154V43.4842H14.2371V44.3067H11.4154V47.0413H14.6402V47.8693Z" fill="currentColor"></path><path d="M24.5217 47.5424C23.9443 47.8475 23.2252 48 22.3646 48C21.2533 48 20.3636 47.6423 19.6954 46.9269C19.0272 46.2115 18.6931 45.2727 18.6931 44.1106C18.6931 42.8614 19.0689 41.8518 19.8207 41.0819C20.5724 40.312 21.5257 39.9271 22.6805 39.9271C23.4213 39.9271 24.0351 40.0342 24.5217 40.2485V41.2235C23.9624 40.9112 23.3451 40.7551 22.6696 40.7551C21.7726 40.7551 21.0445 41.0547 20.4852 41.6539C19.9296 42.2531 19.6518 43.0538 19.6518 44.0561C19.6518 45.0076 19.9114 45.7666 20.4308 46.3331C20.9537 46.896 21.6382 47.1775 22.4844 47.1775C23.2688 47.1775 23.9479 47.0031 24.5217 46.6545V47.5424Z" fill="currentColor"></path><path d="M35.0459 47.8693H34.1308V44.3067H30.0889V47.8693H29.1737V40.0578H30.0889V43.4842H34.1308V40.0578H35.0459V47.8693Z" fill="currentColor"></path><path d="M46.4526 47.8693H45.3305L41.3104 41.643C41.2087 41.4868 41.1252 41.3234 41.0598 41.1527H41.0271C41.0562 41.3198 41.0707 41.6775 41.0707 42.2258V47.8693H40.1555V40.0578H41.3431L45.2542 46.186C45.4177 46.4402 45.523 46.6146 45.5702 46.709H45.592C45.5557 46.4838 45.5375 46.1007 45.5375 45.5596V40.0578H46.4526V47.8693Z" fill="currentColor"></path><path d="M54.7108 48C53.6032 48 52.7153 47.635 52.0471 46.9051C51.3825 46.1751 51.0502 45.2255 51.0502 44.0561C51.0502 42.7996 51.3897 41.7973 52.0688 41.0492C52.7479 40.3011 53.6722 39.9271 54.8415 39.9271C55.9201 39.9271 56.788 40.2902 57.4454 41.0165C58.1063 41.7428 58.4368 42.6925 58.4368 43.8655C58.4368 45.1402 58.099 46.1479 57.4236 46.8887C56.7481 47.6296 55.8438 48 54.7108 48ZM54.7762 40.7551C53.9554 40.7551 53.289 41.051 52.777 41.643C52.2649 42.2349 52.0089 43.0121 52.0089 43.9744C52.0089 44.9368 52.2577 45.7121 52.7552 46.3004C53.2564 46.8851 53.9082 47.1775 54.7108 47.1775C55.5678 47.1775 56.2433 46.8978 56.7372 46.3386C57.2311 45.7793 57.478 44.9967 57.478 43.9908C57.478 42.9594 57.2384 42.1623 56.759 41.5994C56.2796 41.0365 55.6187 40.7551 54.7762 40.7551Z" fill="currentColor"></path><path d="M67.0871 47.8693H63.0343V40.0578H63.9495V47.0413H67.0871V47.8693Z" fill="currentColor"></path><path d="M74.4955 48C73.3879 48 72.5 47.635 71.8318 46.9051C71.1672 46.1751 70.8349 45.2255 70.8349 44.0561C70.8349 42.7996 71.1744 41.7973 71.8535 41.0492C72.5326 40.3011 73.4569 39.9271 74.6262 39.9271C75.7048 39.9271 76.5727 40.2902 77.2301 41.0165C77.891 41.7428 78.2215 42.6925 78.2215 43.8655C78.2215 45.1402 77.8837 46.1479 77.2083 46.8887C76.5328 47.6296 75.6285 48 74.4955 48ZM74.5609 40.7551C73.7401 40.7551 73.0737 41.051 72.5617 41.643C72.0496 42.2349 71.7936 43.0121 71.7936 43.9744C71.7936 44.9368 72.0424 45.7121 72.5399 46.3004C73.0411 46.8851 73.6929 47.1775 74.4955 47.1775C75.3525 47.1775 76.028 46.8978 76.5219 46.3386C77.0158 45.7793 77.2627 44.9967 77.2627 43.9908C77.2627 42.9594 77.0231 42.1623 76.5437 41.5994C76.0643 41.0365 75.4034 40.7551 74.5609 40.7551Z" fill="currentColor"></path><path d="M88.6586 47.3354C87.8741 47.7785 87.0026 48 86.0438 48C84.9289 48 84.0265 47.6405 83.3365 46.9214C82.6501 46.2024 82.307 45.2509 82.307 44.067C82.307 42.8577 82.6883 41.8663 83.4509 41.0928C84.2172 40.3156 85.1868 39.9271 86.3598 39.9271C87.2096 39.9271 87.9232 40.0651 88.5006 40.3411V41.3543C87.8687 40.9548 87.1206 40.7551 86.2563 40.7551C85.3811 40.7551 84.6638 41.0565 84.1046 41.6593C83.5453 42.2621 83.2657 43.0429 83.2657 44.0017C83.2657 44.9894 83.5254 45.7666 84.0447 46.3331C84.564 46.896 85.2685 47.1775 86.1582 47.1775C86.7683 47.1775 87.2967 47.0558 87.7434 46.8125V44.6227H86.0329V43.7947H88.6586V47.3354Z" fill="currentColor"></path><path d="M94.4545 47.8693H93.5394V40.0578H94.4545V47.8693Z" fill="currentColor"></path><path d="M103.715 47.8693H99.575V40.0578H103.541V40.8858H100.49V43.4842H103.312V44.3067H100.49V47.0413H103.715V47.8693Z" fill="currentColor"></path><path d="M107.915 47.5533V46.4747C108.038 46.5837 108.185 46.6817 108.356 46.7689C108.53 46.8561 108.712 46.9305 108.901 46.9922C109.093 47.0503 109.286 47.0957 109.478 47.1284C109.671 47.1611 109.849 47.1775 110.012 47.1775C110.575 47.1775 110.994 47.074 111.27 46.867C111.55 46.6563 111.69 46.3549 111.69 45.9627C111.69 45.7521 111.643 45.5687 111.548 45.4125C111.457 45.2564 111.33 45.1147 111.167 44.9876C111.003 44.8569 110.809 44.7334 110.584 44.6172C110.363 44.4974 110.123 44.3721 109.865 44.2413C109.593 44.1033 109.338 43.9635 109.102 43.8219C108.866 43.6803 108.661 43.5241 108.487 43.3534C108.313 43.1827 108.175 42.9903 108.073 42.776C107.975 42.5581 107.926 42.3039 107.926 42.0134C107.926 41.6575 108.004 41.3488 108.16 41.0873C108.316 40.8222 108.521 40.6043 108.776 40.4337C109.03 40.263 109.318 40.1359 109.642 40.0523C109.968 39.9688 110.301 39.9271 110.639 39.9271C111.408 39.9271 111.969 40.0197 112.322 40.2049V41.2344C111.861 40.9148 111.269 40.7551 110.546 40.7551C110.346 40.7551 110.146 40.7768 109.947 40.8204C109.747 40.8604 109.569 40.9275 109.413 41.022C109.257 41.1164 109.13 41.238 109.032 41.3869C108.934 41.5358 108.884 41.7174 108.884 41.9317C108.884 42.1314 108.921 42.3039 108.993 42.4492C109.07 42.5944 109.18 42.727 109.326 42.8468C109.471 42.9667 109.647 43.0829 109.854 43.1955C110.065 43.308 110.306 43.4315 110.579 43.5659C110.858 43.7039 111.123 43.8491 111.374 44.0017C111.624 44.1542 111.844 44.3231 112.033 44.5083C112.222 44.6935 112.371 44.8987 112.48 45.1238C112.592 45.349 112.649 45.6068 112.649 45.8973C112.649 46.2823 112.572 46.6091 112.42 46.8778C112.271 47.143 112.068 47.359 111.81 47.5261C111.555 47.6931 111.261 47.813 110.927 47.8856C110.593 47.9619 110.241 48 109.87 48C109.747 48 109.594 47.9891 109.413 47.9673C109.231 47.9492 109.046 47.9201 108.857 47.8802C108.668 47.8438 108.489 47.7985 108.318 47.744C108.151 47.6859 108.017 47.6223 107.915 47.5533Z" fill="currentColor"></path><path d="M65.4001 2.37464L77.6568 23.9257L77.5838 33.9707H81.1287L81.2036 23.9257L93.3927 2.00937H89.5519L79.4631 20.273L69.3085 2.00937H65.4001" fill="currentColor"></path><path d="M147.015 1.6441L128.751 33.9707H133.149L147.015 9.26002L161.123 33.9707H165.457L147.015 1.6441Z" fill="currentColor"></path><path d="M46.0407 1.6441L27.7771 33.9707H32.175L46.0407 9.26002L60.1493 33.9707H64.4833L46.0407 1.6441Z" fill="currentColor"></path><path d="M97.5788 2.00937V33.9707H101.126V22.2619L127.524 46.7789L132.398 46.6511L106.311 21.5514L127.818 2.00937H122.697L101.197 21.9167L101.175 2.00937H97.5788Z" fill="currentColor"></path><path d="M168.042 1.27883V33.9707H171.663V9.21071L198.37 33.9707H199.183V2.04407L196.167 2.00937H195.254L195.437 25.9347L168.042 1.27883Z" fill="currentColor"></path><path d="M3.66916 0.000375634C1.64372 0.000375634 0.0164372 1.5126 0.0164372 3.37914C0.0164372 5.24568 1.64372 6.75791 3.66916 6.75791C4.29128 6.76613 4.90552 6.61813 5.45561 6.32744C6.00571 6.03676 6.47407 5.6127 6.8178 5.09409C7.13987 4.59375 7.31447 4.01279 7.32157 3.41779C7.32868 2.82279 7.16801 2.23783 6.85798 1.72994C6.51915 1.19262 6.04794 0.751364 5.48955 0.448504C4.93117 0.145644 4.30433 -0.00866566 3.66916 0.000375634ZM3.66916 5.11418C2.55873 5.11418 1.66016 4.29597 1.66016 3.28782C1.66016 2.27967 2.5569 1.46146 3.66916 1.46146C4.78141 1.46146 5.67815 2.27967 5.67815 3.28782C5.67815 4.29597 4.77958 5.11418 3.66916 5.11418Z" fill="currentColor"></path><path d="M3.65272 27.067C1.64372 27.067 0 28.5793 0 30.4458C0 32.3123 1.64372 33.8246 3.65272 33.8246C5.66172 33.8246 7.30544 32.3123 7.30544 30.4458C7.30544 28.5793 5.67085 27.067 3.65272 27.067ZM3.65272 32.1808C2.54229 32.1808 1.64372 31.3626 1.64372 30.3545C1.64372 29.3463 2.54229 28.5281 3.65272 28.5281C4.76315 28.5281 5.66172 29.3463 5.66172 30.3545C5.66172 31.3626 4.76315 32.1808 3.65272 32.1808Z" fill="currentColor"></path><path d="M1.8428 8.58427H5.55579L5.501 27.5309H1.8428V8.58427Z" fill="currentColor"></path><path d="M14.1799 28.5281H19.48L25.4649 33.9707H20.1831L14.1799 28.5281Z" fill="currentColor"></path><path d="M26.3598 14.6113C26.0731 17.8603 24.5225 20.9012 21.6533 22.7714C20.3365 23.628 18.848 24.1741 17.3669 24.6964C15.8857 25.2188 14.136 25.0215 12.558 25.0215H9.33087V21.9167C9.33087 21.8528 14.7369 21.8162 15.2574 21.7341C17.0582 21.4784 18.7275 20.6218 20.1374 19.4822C20.7728 18.991 21.3215 18.3972 21.7611 17.7252C22.3473 16.7791 22.603 15.6578 22.6615 14.5455C22.7601 12.6753 22.5848 10.7448 21.551 9.14313C20.6216 7.72768 19.2986 6.61483 17.7449 5.94152C17.1518 5.69406 16.5414 5.49018 15.9186 5.33152C14.189 4.86945 12.1873 5.11418 10.4102 5.10322L6.82693 5.09409L6.86711 1.72994H14.2456C17.1787 1.72994 20.3237 3.23303 22.5391 5.09227C24.307 6.5771 25.6768 8.59522 26.1407 10.8563C26.3959 12.0906 26.4697 13.3556 26.3598 14.6113Z" fill="currentColor"></path></svg>`);
		};
	}
});
//#endregion
//#region src/assets/AppLogo.vue
var _sfc_setup$5 = AppLogo_vue_vue_type_script_setup_true_lang_default.setup;
AppLogo_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/AppLogo.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var AppLogo_default = AppLogo_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/AppSocialLinks.vue?vue&type=script&setup=true&lang.ts
var AppSocialLinks_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppSocialLinks",
	__ssrInlineRender: true,
	props: {
		size: { default: 35 },
		effect: { default: "pulse" },
		tone: { default: "accent" }
	},
	setup(__props) {
		const { t } = useI18n();
		const links = [
			{
				icon: "facebook",
				url: "https://www.facebook.com/profile.php?id=61553746709358"
			},
			{
				icon: "linkedin",
				url: "https://www.linkedin.com/company/raykan-technologies/"
			},
			{
				icon: "instagram",
				url: "https://www.instagram.com/raykantech/"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<ul${ssrRenderAttrs(mergeProps({ class: ["app-social-links", [`app-social-links--${__props.effect}`, `app-social-links--${__props.tone}`]] }, _attrs))}><!--[-->`);
			ssrRenderList(links, (link) => {
				_push(`<li><a class="${ssrRenderClass([{ "animate-pulse": __props.effect === "pulse" }, "app-social-links__link"])}"${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener"${ssrRenderAttr("aria-label", unref(t)(`common.socials.${link.icon}`))}>`);
				_push(ssrRenderComponent(unref(RIcon_default), {
					name: link.icon,
					size: __props.size
				}, null, _parent));
				_push(`</a></li>`);
			});
			_push(`<!--]--></ul>`);
		};
	}
});
//#endregion
//#region src/components/AppSocialLinks.vue
var _sfc_setup$4 = AppSocialLinks_vue_vue_type_script_setup_true_lang_default.setup;
AppSocialLinks_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSocialLinks.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var AppSocialLinks_default = AppSocialLinks_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/AppFooter.vue?vue&type=script&setup=true&lang.ts
var AppFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppFooter",
	__ssrInlineRender: true,
	props: { transparent: { type: Boolean } },
	setup(__props) {
		const { t } = useI18n();
		const route = useRoute();
		const footer = useTemplateRef("footer");
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		const menus = computed(() => [
			{
				menu: t("menus.home"),
				route: "home"
			},
			{
				menu: t("menus.solutions"),
				route: "solutions"
			},
			{
				menu: t("menus.about"),
				route: "about"
			},
			{
				menu: t("menus.blog"),
				route: "blog"
			},
			{
				menu: t("menus.faq"),
				route: "faq"
			},
			{
				menu: t("menus.contact"),
				route: "contact"
			}
		]);
		const isActive = (name) => route.name === name || name === "solutions" && SOLUTIONS.some((solution) => solution === route.name);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(RSection_default), mergeProps({
				ref_key: "footer",
				ref: footer,
				class: ["app-footer", { "app-footer--transparent": __props.transparent }],
				tag: "footer",
				theme: __props.transparent ? "transparent" : "primary"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="app-footer__row"${_scopeId}>`);
						_push(ssrRenderComponent(unref(RouterLink), {
							to: { name: "home" },
							class: "app-footer__logo",
							"aria-label": unref(t)("common.companyName")
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(AppLogo_default, null, null, _parent, _scopeId));
								else return [createVNode(AppLogo_default)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(AppSocialLinks_default, {
							size: 28,
							effect: "highlight",
							tone: __props.transparent ? "light" : "accent",
							class: "app-footer__socials"
						}, null, _parent, _scopeId));
						_push(`</div><div class="app-footer__row"${_scopeId}><nav${ssrRenderAttr("aria-label", unref(t)("common.footerMenu"))}${_scopeId}><ul class="app-footer__menu"${_scopeId}><!--[-->`);
						ssrRenderList(menus.value, (item) => {
							_push(`<li${_scopeId}>`);
							_push(ssrRenderComponent(unref(RouterLink), {
								to: { name: item.route },
								class: ["app-footer__link", { "app-footer__link--active": isActive(item.route) }]
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(item.menu)}`);
									else return [createTextVNode(toDisplayString(item.menu), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</li>`);
						});
						_push(`<!--]--></ul></nav><p class="app-footer__copyright"${_scopeId}>${ssrInterpolate(unref(t)("common.copyright", { year: unref(year) }))}</p></div>`);
					} else return [createVNode("div", { class: "app-footer__row" }, [createVNode(unref(RouterLink), {
						to: { name: "home" },
						class: "app-footer__logo",
						"aria-label": unref(t)("common.companyName")
					}, {
						default: withCtx(() => [createVNode(AppLogo_default)]),
						_: 1
					}, 8, ["aria-label"]), createVNode(AppSocialLinks_default, {
						size: 28,
						effect: "highlight",
						tone: __props.transparent ? "light" : "accent",
						class: "app-footer__socials"
					}, null, 8, ["tone"])]), createVNode("div", { class: "app-footer__row" }, [createVNode("nav", { "aria-label": unref(t)("common.footerMenu") }, [createVNode("ul", { class: "app-footer__menu" }, [(openBlock(true), createBlock(Fragment, null, renderList(menus.value, (item) => {
						return openBlock(), createBlock("li", { key: item.route }, [createVNode(unref(RouterLink), {
							to: { name: item.route },
							class: ["app-footer__link", { "app-footer__link--active": isActive(item.route) }]
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.menu), 1)]),
							_: 2
						}, 1032, ["to", "class"])]);
					}), 128))])], 8, ["aria-label"]), createVNode("p", { class: "app-footer__copyright" }, toDisplayString(unref(t)("common.copyright", { year: unref(year) })), 1)])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region src/components/AppFooter.vue
var _sfc_setup$3 = AppFooter_vue_vue_type_script_setup_true_lang_default.setup;
AppFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var AppFooter_default = AppFooter_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/menu.ts
/**
* Main site menu (wp-raykan "main-menu"), shared by the desktop header and the mobile menu
*/
var useAppMenu = () => {
	const { t } = useI18n();
	const route = useRoute();
	const menus = computed(() => [
		{
			menu: t("menus.home"),
			route: "home"
		},
		{
			menu: t("menus.solutions"),
			route: "solutions",
			child: SOLUTIONS.map((solution) => ({
				menu: t(`solutions.items.${solution}`),
				route: solution
			}))
		},
		{
			menu: t("menus.about"),
			route: "about"
		},
		{
			menu: t("menus.blog"),
			route: "blog"
		},
		{
			menu: t("menus.faq"),
			route: "faq"
		},
		{
			menu: t("menus.contact"),
			route: "contact"
		},
		{
			menu: t("menus.kando"),
			route: "kando"
		}
	]);
	const isActive = (item) => route.name === item.route || !!item.child?.some(isActive);
	return {
		menus,
		isActive
	};
};
//#endregion
//#region src/components/AppMobileMenu.vue?vue&type=script&setup=true&lang.ts
var AppMobileMenu_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppMobileMenu",
	__ssrInlineRender: true,
	props: {
		"open": {
			type: Boolean,
			default: false
		},
		"openModifiers": {}
	},
	emits: ["update:open"],
	setup(__props) {
		const open = useModel(__props, "open");
		const { t } = useI18n();
		const route = useRoute();
		const { menus, isActive } = useAppMenu();
		const expanded = ref();
		const close = () => {
			open.value = false;
		};
		const onKeydown = (e) => {
			if (e.key === "Escape") close();
		};
		watch(open, (value) => {
			(void 0).body.style.overflow = value ? "hidden" : "";
			if (value) (void 0).addEventListener("keydown", onKeydown);
			else (void 0).removeEventListener("keydown", onKeydown);
		});
		watch(() => route.fullPath, close);
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderTeleport(_push, (_push) => {
				if (open.value) {
					_push(`<div class="app-mobile-menu"><div class="app-mobile-menu__panel" role="dialog" aria-modal="true"><button type="button" class="app-mobile-menu__close"${ssrRenderAttr("aria-label", unref(t)("buttons.closeMenu"))}>`);
					_push(ssrRenderComponent(unref(RIcon_default), {
						name: "x-icon",
						size: 30
					}, null, _parent));
					_push(`</button>`);
					_push(ssrRenderComponent(unref(RouterLink), {
						to: { name: "home" },
						class: "app-mobile-menu__logo",
						"aria-label": unref(t)("common.companyName")
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(AppLogo_default, {
								width: 160,
								height: 40
							}, null, _parent, _scopeId));
							else return [createVNode(AppLogo_default, {
								width: 160,
								height: 40
							})];
						}),
						_: 1
					}, _parent));
					_push(`<nav><ul class="app-mobile-menu__list"><!--[-->`);
					ssrRenderList(unref(menus), (item) => {
						_push(`<li class="app-mobile-menu__item">`);
						if (item.child) {
							_push(`<!--[--><button type="button" class="${ssrRenderClass([{ "app-mobile-menu__toggle--expanded": expanded.value === item.route }, "app-mobile-menu__toggle"])}"${ssrRenderAttr("aria-expanded", expanded.value === item.route)}>${ssrInterpolate(item.menu)} `);
							_push(ssrRenderComponent(unref(RIcon_default), {
								name: "chevron-down",
								size: 16,
								class: "app-mobile-menu__arrow"
							}, null, _parent));
							_push(`</button><ul class="app-mobile-menu__sublist" style="${ssrRenderStyle(expanded.value === item.route ? null : { display: "none" })}"><li>`);
							_push(ssrRenderComponent(unref(RouterLink), {
								to: { name: item.route },
								class: ["app-mobile-menu__sublink", { "app-mobile-menu__sublink--active": unref(route).name === item.route }]
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(unref(t)("menus.allSolutions"))}`);
									else return [createTextVNode(toDisplayString(unref(t)("menus.allSolutions")), 1)];
								}),
								_: 2
							}, _parent));
							_push(`</li><!--[-->`);
							ssrRenderList(item.child, (child) => {
								_push(`<li>`);
								_push(ssrRenderComponent(unref(RouterLink), {
									to: { name: child.route },
									class: ["app-mobile-menu__sublink", { "app-mobile-menu__sublink--active": unref(isActive)(child) }]
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(child.menu)}`);
										else return [createTextVNode(toDisplayString(child.menu), 1)];
									}),
									_: 2
								}, _parent));
								_push(`</li>`);
							});
							_push(`<!--]--></ul><!--]-->`);
						} else _push(ssrRenderComponent(unref(RouterLink), {
							to: { name: item.route },
							class: ["app-mobile-menu__link", { "app-mobile-menu__link--active": unref(isActive)(item) }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(item.menu)}`);
								else return [createTextVNode(toDisplayString(item.menu), 1)];
							}),
							_: 2
						}, _parent));
						_push(`</li>`);
					});
					_push(`<!--]--><li class="app-mobile-menu__item">`);
					_push(ssrRenderComponent(unref(RButton_default), {
						to: { name: "careers" },
						class: "app-mobile-menu__cta"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(t)("buttons.joinOurTeam"))}`);
							else return [createTextVNode(toDisplayString(unref(t)("buttons.joinOurTeam")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li></ul></nav>`);
					_push(ssrRenderComponent(AppSocialLinks_default, {
						size: 30,
						class: "app-mobile-menu__socials"
					}, null, _parent));
					_push(`</div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
		};
	}
});
//#endregion
//#region src/components/AppMobileMenu.vue
var _sfc_setup$2 = AppMobileMenu_vue_vue_type_script_setup_true_lang_default.setup;
AppMobileMenu_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppMobileMenu.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var AppMobileMenu_default = AppMobileMenu_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/components/AppHeader.vue?vue&type=script&setup=true&lang.ts
var AppHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppHeader",
	__ssrInlineRender: true,
	props: { transparent: { type: Boolean } },
	setup(__props) {
		const { t } = useI18n();
		const { menus, isActive } = useAppMenu();
		const scrolled = ref(false);
		const mobileMenuOpen = ref(false);
		useTemplateRef("header");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><header class="${ssrRenderClass([{
				"app-header--transparent": __props.transparent,
				"app-header--scrolled": scrolled.value
			}, "app-header"])}"><div class="app-header__container">`);
			_push(ssrRenderComponent(unref(RouterLink), {
				to: { name: "home" },
				class: "app-header__logo",
				"aria-label": unref(t)("common.companyName")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(AppLogo_default, null, null, _parent, _scopeId));
					else return [createVNode(AppLogo_default)];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="app-header__nav"><ul class="app-header__menu"><!--[-->`);
			ssrRenderList(unref(menus), (item) => {
				_push(`<li class="app-header__item">`);
				_push(ssrRenderComponent(unref(RouterLink), {
					to: { name: item.route },
					class: ["app-header__link", { "app-header__link--active": unref(isActive)(item) }]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`${ssrInterpolate(item.menu)} `);
							if (item.child) _push(ssrRenderComponent(unref(RIcon_default), {
								name: "chevron-down",
								size: 14,
								class: "app-header__arrow"
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
						} else return [createTextVNode(toDisplayString(item.menu) + " ", 1), item.child ? (openBlock(), createBlock(unref(RIcon_default), {
							key: 0,
							name: "chevron-down",
							size: 14,
							class: "app-header__arrow"
						})) : createCommentVNode("", true)];
					}),
					_: 2
				}, _parent));
				if (item.child) {
					_push(`<ul class="app-header__submenu"><!--[-->`);
					ssrRenderList(item.child, (child) => {
						_push(`<li>`);
						_push(ssrRenderComponent(unref(RouterLink), {
							to: { name: child.route },
							class: ["app-header__sublink", { "app-header__sublink--active": unref(isActive)(child) }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(child.menu)}`);
								else return [createTextVNode(toDisplayString(child.menu), 1)];
							}),
							_: 2
						}, _parent));
						_push(`</li>`);
					});
					_push(`<!--]--></ul>`);
				} else _push(`<!---->`);
				_push(`</li>`);
			});
			_push(`<!--]--></ul></nav><div class="app-header__actions">`);
			_push(ssrRenderComponent(unref(RButton_default), { to: { name: "careers" } }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(t)("buttons.joinOurTeam"))}`);
					else return [createTextVNode(toDisplayString(unref(t)("buttons.joinOurTeam")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div><button type="button" class="app-header__toggle"${ssrRenderAttr("aria-label", unref(t)("buttons.openMenu"))}${ssrRenderAttr("aria-expanded", mobileMenuOpen.value)}>`);
			_push(ssrRenderComponent(unref(RIcon_default), {
				name: "menu",
				size: 30
			}, null, _parent));
			_push(`</button></div></header>`);
			_push(ssrRenderComponent(AppMobileMenu_default, {
				open: mobileMenuOpen.value,
				"onUpdate:open": ($event) => mobileMenuOpen.value = $event
			}, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region src/components/AppHeader.vue
var _sfc_setup$1 = AppHeader_vue_vue_type_script_setup_true_lang_default.setup;
AppHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var AppHeader_default = AppHeader_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region src/layouts/default.vue?vue&type=script&setup=true&lang.ts
var default_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "default",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const headerTransparent = computed(() => !!route.meta.headerTransparent);
		const footerTransparent = computed(() => !!route.meta.footerTransparent);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["default-layout", { "default-layout--header-offset": !headerTransparent.value }] }, _attrs))}>`);
			_push(ssrRenderComponent(unref(AppHeader_default), { transparent: headerTransparent.value }, null, _parent));
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(ssrRenderComponent(unref(AppFooter_default), { transparent: footerTransparent.value }, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region src/layouts/default.vue
var _sfc_setup = default_vue_vue_type_script_setup_true_lang_default.setup;
default_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = default_vue_vue_type_script_setup_true_lang_default;

export { default_default as default };
//# sourceMappingURL=default-Db15jyTz.mjs.map
