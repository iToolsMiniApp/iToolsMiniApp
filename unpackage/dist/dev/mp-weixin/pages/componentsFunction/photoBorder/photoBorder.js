(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/componentsFunction/photoBorder/photoBorder"],{

/***/ 148:
/*!*************************************************************************************************************************************!*\
  !*** /Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/main.js?{"page":"pages%2FcomponentsFunction%2FphotoBorder%2FphotoBorder"} ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);

__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _photoBorder = _interopRequireDefault(__webpack_require__(/*! ./pages/componentsFunction/photoBorder/photoBorder.vue */ 149));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_photoBorder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 149:
/*!****************************************************************************************************************!*\
  !*** /Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/pages/componentsFunction/photoBorder/photoBorder.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photoBorder.vue?vue&type=template&id=35a066a5&scoped=true& */ 150);
/* harmony import */ var _photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photoBorder.vue?vue&type=script&lang=js& */ 152);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _photoBorder_vue_vue_type_style_index_0_id_35a066a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoBorder.vue?vue&type=style&index=0&id=35a066a5&lang=scss&scoped=true& */ 156);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35a066a5",
  null,
  false,
  _photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsFunction/photoBorder/photoBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 150:
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/pages/componentsFunction/photoBorder/photoBorder.vue?vue&type=template&id=35a066a5&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./photoBorder.vue?vue&type=template&id=35a066a5&scoped=true& */ 151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_template_id_35a066a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 151:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/pages/componentsFunction/photoBorder/photoBorder.vue?vue&type=template&id=35a066a5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNoticeBar: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-notice-bar/u-notice-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-notice-bar/u-notice-bar")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-notice-bar/u-notice-bar.vue */ 174))
    },
    uIcon: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 182))
    },
    uButton: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 191))
    },
    uPopup: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 201))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 152:
/*!*****************************************************************************************************************************************!*\
  !*** /Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/pages/componentsFunction/photoBorder/photoBorder.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./photoBorder.vue?vue&type=script&lang=js& */ 153);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 153:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/pages/componentsFunction/photoBorder/photoBorder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));
















































var _izExif = __webpack_require__(/*! @/util/js_sdk/izExif/izExif.js */ 154);
var _index = _interopRequireDefault(__webpack_require__(/*! @/util/tools/index.js */ 155));
var _vuex = __webpack_require__(/*! vuex */ 19);

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ 141));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var infoForm = function infoForm() {__webpack_require__.e(/*! require.ensure | pages/componentsFunction/photoBorder/components/form */ "pages/componentsFunction/photoBorder/components/form").then((function () {return resolve(__webpack_require__(/*! ./components/form.vue */ 209));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
uni.loadFontFace({
  global: true,
  family: 'gilmerRegular',
  source: 'url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-915d01a8-6118-4e1e-840f-697d960cbba2/fb5d1790-57b8-4ae5-a1ab-f6bf975ea055.otf")',
  scopes: ['webview', 'native'],
  success: function success(res) {
    console.log('??????????????????');
  },
  fail: function fail(error) {
    console.log('??????????????????', error);
  } });var _default =

{
  components: {
    infoForm: infoForm },

  data: function data() {
    return {
      showGenerator: false, // ?????????????????????
      systemPlatform: 'devtools',
      systemPlatformText: 'ios?????????????????????????????????????????????????????????????????????',
      showQuality: 0.01,
      showForm: false,
      saveImgUrl: '', // ???????????????????????????
      photoConfigData: [], // ????????????logo??????
      defaultLogo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-915d01a8-6118-4e1e-840f-697d960cbba2/47e9cb99-42e4-4b8b-8447-c8597ea8b5b2.png',
      photoExifInfo: {}, // ??????EXIF??????
      userInfo: {}, // ????????????
      photoDrawList: [], // ?????????????????????????????????
      tempImage: '', // ???????????????????????????
      tempImageBase64: '', // ?????????????????????????????????base64
      loading: false,
      // canvas????????????
      canvasConfig: {
        maxCanvasSize: 320,
        maxCanvasInfoWrapperSize: 30,
        scale: 1 },

      // ????????????
      renderData: {},
      // ????????????
      downLoadData: {},
      // ???????????????????????????
      photoDrawInfo: {
        width: 320,
        height: 240,
        compress: 100,
        background: '#ffffff', // ????????????
        mainImage: {
          scale: 1, // ???????????? 1-0.5???????????????wrapper???100%???50%
          customAngle: 0, // ?????????????????????
          position: 'center', // ?????? ???????????????customXAxis???customYAxis
          content: '', // ????????????
          originWidth: 100,
          originHeight: 100,
          width: 100,
          height: 100,
          xAxis: 0, // x???????????????position???customXAxis??????
          yAxis: 0, // x???????????????position???customYAxis??????
          angle: 0 // ????????????
        },
        // ????????????
        EXIFInfo: {
          imgInfo: {
            xAxis: 0, // x?????????
            yAxis: 0, // y??????
            content: 'focal, fnumber, exposure, ISO', // ???????????? ?????? ?????? iso??????
            fontStyle: '', // ????????????120
            fontColor: '#000000', // ?????? ????????????110
            fontSize: 8 // ???????????? ????????????110
          },
          machineName: {
            xAxis: 0, // x?????????
            yAxis: 0, // y?????????
            content: 'machine name', // ????????????
            fontStyle: '', // ????????????120
            fontColor: '#000000', // ?????? ????????????110
            fontSize: 8 // ???????????? ????????????110
          },
          time: {
            xAxis: 0, // x?????????
            yAxis: 0, // y?????????
            content: '??????', // ??????
            fontStyle: '', // ????????????120
            fontColor: '#9f9f9f', // ?????? ????????????110
            fontSize: 6 // ???????????? ????????????110
          },
          authorName: {
            xAxis: 0, // x?????????
            yAxis: 0, // y?????????
            content: 'PHOTO BY @ ???',
            fontStyle: '', // ????????????120
            fontColor: '#9f9f9f', // ?????? ????????????110
            fontSize: 6 // ???????????? ????????????110
          },
          brandLogo: {
            xAxis: 0, // x?????????
            yAxis: 0, // y?????????
            content: 'default', // ????????????
            xPosition: 'center',
            yPosition: 'center' } } } };




  },
  mounted: function mounted() {
    this.getPlatform();
    this.getPhotoConfigList();
    // setTimeout(() => {
    // 	this.showForm = true;
    // }, 50);
  },
  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['setUserInfo'])), {}, {
    getPlatform: function getPlatform() {
      var that = this;
      uni.getSystemInfo({
        success: function success(res) {
          console.log('getSystemInfo', res);
          that.systemPlatform = res.platform;
        } });

    },
    // ??????????????????
    getUserInfo: function getUserInfo(callback) {
      var that = this;
      console.log(that.userInfo);
      if (that.userInfo.nickName) {
        console.log(that.userInfo);
        if (callback && typeof callback == 'function') {
          callback();
        }
      }
      uni.showLoading({
        title: '??????????????????',
        duration: 15000,
        mask: true });

      uni.getStorage({
        key: 'userInfo',
        success: function success(_ref) {var data = _ref.data;
          var time = new Date().getTime();
          if (data.expirationTime && time < data.expirationTime) {
            that.userInfo = data.userInfo;
            if (callback && typeof callback == 'function') {
              callback();
            }
          } else {
            that.getUserProfile(callback);
          }
          uni.hideLoading();
        },
        fail: function fail() {
          that.getUserProfile(callback);
          uni.hideLoading();
        } });

    },
    getUserProfile: function getUserProfile(callback) {
      var that = this;
      uni.getUserProfile({
        desc: '?????????????????????????????????????????????',
        lang: 'zh_CN',
        success: function success(resData) {
          that.userInfo = resData.userInfo,
          uni.setStorageSync('userInfo', {
            userInfo: resData.userInfo,
            expirationTime: new Date().getTime() + 12 * 60 * 60 * 1000 // ???????????????12??????
          });
          if (callback && typeof callback == 'function') {
            callback();
          }
        },
        fail: function fail() {
          uni.setStorageSync('userInfo', {});
          uni.showToast({
            title: '??????????????????',
            icon: 'none' });

          if (callback && typeof callback == 'function') {
            callback();
          }
        } });

    },
    // ??????????????????
    getPhotoConfigList: function getPhotoConfigList() {
      var that = this;
      uni.getStorage({
        key: 'photoConfigData',
        success: function success(_ref2) {var data = _ref2.data;
          var time = new Date().getTime();
          if (data.expirationTime && time < data.expirationTime) {
            that.photoConfigData = data.data;
          } else {

            that.getPhotoConfigListByWXDB();




          }
        },
        fail: function fail() {

          that.getPhotoConfigListByWXDB();




        } });

    },
    // ??????????????????????????????????????????
    getPhotoConfigListByDB: function getPhotoConfigListByDB() {
      var that = this;
      var db = uniCloud.database();
      console.log('??????????????????');
      db.collection('photo_broder_logo_list').
      get().
      then(function (_ref3) {var result = _ref3.result;
        // res ????????????????????????
        console.log('??????????????????');
        var list = result.data;
        list = _lodash.default.sortBy(list, function (o) {
          return o.sort_key;
        });
        that.photoConfigData = list;
        uni.setStorageSync('photoConfigData', {
          data: list,
          expirationTime: new Date().getTime() + 24 * 60 * 60 * 1000 // ???????????????24??????
        });
      }).
      catch(function (e) {
        that.photoConfigData = [];
        uni.showToast({
          icon: 'error',
          duration: 1000,
          title: '??????????????????' });

      });
    },
    getPhotoConfigListByWXDB: function getPhotoConfigListByWXDB() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var that, db, countObj, count, all, i, list;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                that = _this;
                wx.cloud.init({ traceUser: true });
                db = wx.cloud.database();
                // 1???????????????????????????
                _context.next = 5;return db.collection('photo_broder_logo_list').count();case 5:countObj = _context.sent;
                console.log('countObj', countObj);
                count = countObj.total || 20;
                all = [];
                i = 0;case 10:if (!(i < count)) {_context.next = 19;break;}_context.next = 13;return (
                  db.
                  collection('photo_broder_logo_list').
                  skip(i).
                  orderBy('sort_key', 'asc').
                  get());case 13:list = _context.sent;
                console.log('list', list);
                all = all.concat(list.data);case 16:i += 20;_context.next = 10;break;case 19:

                that.photoConfigData = all;
                console.log('getPhotoConfigListByWXDB list', all);
                uni.setStorageSync('photoConfigData', {
                  data: all,
                  expirationTime: new Date().getTime() + 24 * 60 * 60 * 1000 // ???????????????24??????
                });case 22:case "end":return _context.stop();}}}, _callee);}))();
    },
    // ????????????????????????
    onUpdatedFile: function onUpdatedFile() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                that = _this2;
                try {
                  that.getUserInfo(that.chooseImage);
                  uni.hideLoading();
                } catch (e) {
                  console.log('getUserInfo', e);
                  uni.showToast({
                    icon: 'error',
                    duration: 1000,
                    title: '??????????????????' });

                  uni.hideLoading();
                }case 2:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    chooseImage: function chooseImage() {var _this3 = this;
      var that = this;
      console.log('chooseImage');
      if (that.loading) {
        return;
      }
      uni.chooseImage({
        sizeType: ['original'],
        sourceType: ['album'],
        count: 1,
        success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {var src;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                    uni.showLoading({
                      title: '????????????',
                      duration: 15000,
                      mask: true });

                    that.loading = true;
                    setTimeout(function () {
                      _this3.loading = false;
                    }, 10000);
                    src = e.tempFilePaths[0];
                    that.photoDrawInfo.mainImage.content = src;
                    that.tempImage = '';
                    that.tempImageBase64 = '';
                    that.initPhotoInfo(src);case 8:case "end":return _context3.stop();}}}, _callee3);}));function success(_x) {return _success.apply(this, arguments);}return success;}(),

        fail: function fail() {
          uni.showToast({
            title: '??????????????????',
            icon: 'none' });

        } });

    },
    /**
        * ????????????????????????????????????
        */
    initPhotoInfo: function initPhotoInfo(src) {var _arguments = arguments,_this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var canvasId, that;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:canvasId = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 'canvas';
                that = _this4;_context4.next = 4;return (
                  that.getCanvasSize(src));case 4:
                setTimeout(function () {
                  (0, _izExif.getImageData)(src).
                  then(function (res) {
                    console.log('getImageData', JSON.stringify(res.exif));
                    that.photoExifInfo = res.exif;
                    that.initExifCanvasInfo(res.exif);
                    that.startDraw();
                  }).
                  catch(function (e) {
                    console.log('getImageData error', e);
                    that.initExifCanvasInfo();
                    that.startDraw();
                  });
                  // var array = uni.getFileSystemManager().readFileSync(src);
                  // var r = handleBinaryFile(array);
                }, 1000);case 5:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    // ?????????exif???info?????????
    initExifCanvasInfo: function initExifCanvasInfo() {var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var that = this;
      console.log('initExifCanvasInfo', info);
      if (!info.FNumber || !info.ExposureTime || !info.FocalLength || !info.Make || !info.Model) {
        uni.showToast({
          icon: 'error',
          duration: 1000,
          title: '????????????' });

      }
      this.photoDrawInfo.EXIFInfo.brandLogo.content = info.Make || 'default';
      this.photoDrawInfo.EXIFInfo.machineName.content = info.Model || 'machine name';
      var time = info.DateTimeOriginal;
      if (time && time.indexOf(':') >= 4) {
        time = time.replace(':', '-');
        time = time.replace(':', '-');
      }
      var currentTime = _index.default.formatTime(new Date(), 'yyyy-MM-dd hh:mm:ss');
      this.photoDrawInfo.EXIFInfo.time.content = time || currentTime;
      this.photoDrawInfo.EXIFInfo.authorName.content = 'PHOTO BY @' + that.userInfo.nickName || false;
      // ???????????? ?????? ?????? iso??????
      // ??????: 28mm f/8 1/500 ISO100
      // ??????
      var FocalLength = '?mm ';
      var FNumber = 'f/? ';
      var ExposureTime = '?/?';
      var ISOSpeedRatings = ' ISO ?';
      if (info.FocalLength) {
        FocalLength = info.FocalLength + 'mm ';
      }
      if (info.FNumber && info.FNumber.numerator && info.FNumber.denominator) {
        FNumber = 'f/' + info.FNumber.numerator / info.FNumber.denominator + ' ';
      }
      if (info.ExposureTime && info.ExposureTime.numerator && info.ExposureTime.denominator) {
        ExposureTime = info.ExposureTime.numerator + '/' + info.ExposureTime.denominator;
      }
      if (info.ISOSpeedRatings) {
        ISOSpeedRatings = ISOSpeedRatings = ' ISO' + (info.ISOSpeedRatings || ' ?');
      }
      this.photoDrawInfo.EXIFInfo.imgInfo.content = FocalLength + FNumber + ExposureTime + ISOSpeedRatings;
      console.log('photoDrawInfo', this.photoDrawInfo);
    },
    // ????????????
    resetPhotoInfo: function resetPhotoInfo(newPhotoInfo) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                _this5.tempImage = '';
                _this5.tempImageBase64 = '';
                _this5.loading = true;
                setTimeout(function () {
                  _this5.loading = false;
                }, 10000);
                _this5.closePopup();
                _this5.photoDrawInfo = newPhotoInfo;
                uni.showLoading({
                  title: '?????????...',
                  duration: 60000 });_context5.next = 9;return (

                  _this5.getCanvasSize(_this5.photoDrawInfo.mainImage.content));case 9:
                setTimeout(function () {
                  _this5.startDraw();
                }, 1000);case 10:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    // ????????????
    startDraw: function startDraw() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var that, photoDrawInfo, canvasConfig, mainImage, EXIFInfo, ctx, currentScanle, paddingX, paddingY, fontHeight, fontTopClose, fontFamily, dividingLinePadding, machineNameX, machineNameY, authorNameX, authorNameY, timeWidth, imgInfoWidth, rightWidth, imgInfoX, imgInfoY, timeX, timeY, dividingLineHeight, dividingLineX, dividingLineY, logoImg, listImgDefault, i;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                that = _this6;
                console.log('????????????');
                uni.showLoading({
                  title: '?????????...',
                  duration: 60000 });

                that.showGenerator = true;
                photoDrawInfo = _this6.photoDrawInfo, canvasConfig = _this6.canvasConfig;
                mainImage = photoDrawInfo.mainImage, EXIFInfo = photoDrawInfo.EXIFInfo;
                console.log('????????????>>>>>>>>>>>>>>>');
                ctx = uni.createCanvasContext('canvas');
                currentScanle = canvasConfig.scale;
                // ????????????
                console.log('cavans?????????', photoDrawInfo.width, photoDrawInfo.height);
                ctx.width = photoDrawInfo.width;
                ctx.height = photoDrawInfo.height;
                ctx.clearRect(0, 0, photoDrawInfo.width, photoDrawInfo.height);
                // ??????????????????
                ctx.setFillStyle(photoDrawInfo.background);
                ctx.fillRect(0, 0, photoDrawInfo.width, photoDrawInfo.height);
                // ????????????
                // ctx.drawImage(mainImage.content, mainImage.xAxis, mainImage.yAxis, mainImage.width, mainImage.height);
                ctx.drawImage(mainImage.content, mainImage.xAxis, mainImage.yAxis, mainImage.width, mainImage.height);
                // ??????????????????
                paddingX = that.calculationScaleSize(8, currentScanle);
                paddingY = that.calculationScaleSize(0, currentScanle);
                if (mainImage.yAxis * 1 > 0) {
                  paddingY = 0;
                }
                fontHeight = that.calculationScaleSize(15, currentScanle);
                fontTopClose = that.calculationScaleSize(3, currentScanle);
                fontFamily = 'gilmerRegular';
                dividingLinePadding = that.calculationScaleSize(5, currentScanle);
                // let fontFamily = '';

                machineNameX = paddingX + that.calculationScaleSize(EXIFInfo.machineName.xAxis, currentScanle);
                machineNameY = paddingY + mainImage.originHeight + fontTopClose;
                _this6.drawText(
                ctx,
                EXIFInfo.machineName.content,
                that.calculationScaleSize(EXIFInfo.machineName.fontSize, currentScanle),
                EXIFInfo.machineName.fontColor,
                machineNameX,
                machineNameY,
                5000,
                true,
                '',
                fontFamily);

                authorNameX = paddingX + that.calculationScaleSize(EXIFInfo.authorName.xAxis, currentScanle);
                authorNameY = paddingY + that.calculationScaleSize(EXIFInfo.authorName.yAxis, currentScanle) + mainImage.originHeight + fontHeight;
                _this6.drawText(
                ctx,
                EXIFInfo.authorName.content,
                that.calculationScaleSize(EXIFInfo.authorName.fontSize, currentScanle),
                EXIFInfo.authorName.fontColor,
                authorNameX,
                authorNameY,
                5000,
                false,
                '',
                fontFamily);_context6.next = 31;return (


                  _this6.getTextWidth(ctx, EXIFInfo.time.content, true, that.calculationScaleSize(EXIFInfo.time.fontSize, currentScanle), fontFamily));case 31:timeWidth = _context6.sent;_context6.next = 34;return (
                  _this6.getTextWidth(ctx, EXIFInfo.imgInfo.content, false, that.calculationScaleSize(EXIFInfo.imgInfo.fontSize, currentScanle), fontFamily));case 34:imgInfoWidth = _context6.sent;
                rightWidth = timeWidth >= imgInfoWidth ? timeWidth : imgInfoWidth;
                console.log('rightWidth', rightWidth, mainImage.width);

                imgInfoX = mainImage.originWidth - paddingX - rightWidth + that.calculationScaleSize(EXIFInfo.imgInfo.xAxis, currentScanle);
                imgInfoY = paddingY + that.calculationScaleSize(EXIFInfo.imgInfo.yAxis, currentScanle) + mainImage.originHeight + fontTopClose;
                _this6.drawText(
                ctx,
                EXIFInfo.imgInfo.content,
                that.calculationScaleSize(EXIFInfo.imgInfo.fontSize, currentScanle),
                EXIFInfo.imgInfo.fontColor,
                imgInfoX,
                imgInfoY,
                5000,
                true,
                '',
                fontFamily);

                timeX = mainImage.originWidth - paddingX - rightWidth + that.calculationScaleSize(EXIFInfo.time.xAxis, currentScanle);
                timeY = paddingY + that.calculationScaleSize(EXIFInfo.time.yAxis, currentScanle) + mainImage.originHeight + fontHeight;
                _this6.drawText(
                ctx,
                EXIFInfo.time.content,
                that.calculationScaleSize(EXIFInfo.time.fontSize, currentScanle),
                EXIFInfo.time.fontColor,
                timeX,
                timeY,
                5000,
                false,
                '',
                fontFamily);

                // ?????? logo ?????????
                dividingLineHeight =
                (EXIFInfo.InfoWrapperHeight +
                that.calculationScaleSize(EXIFInfo.time.fontSize, currentScanle) +
                that.calculationScaleSize(EXIFInfo.imgInfo.fontSize, currentScanle)) /
                2;
                dividingLineX = mainImage.originWidth - paddingX - rightWidth - dividingLinePadding;
                dividingLineY = mainImage.originHeight + (EXIFInfo.InfoWrapperHeight - dividingLineHeight) / 2;

                //????????????
                ctx.moveTo(dividingLineX, dividingLineY); //?????????????????????
                ctx.lineTo(dividingLineX, dividingLineHeight + dividingLineY); //?????????????????????
                ctx.strokeStyle = EXIFInfo.color; //?????????????????????
                // ctx.lineJoin = 'round';
                ctx.lineWidth = that.calculationScaleSize(0.3, currentScanle); //?????????????????????
                ctx.stroke();

                // ?????? logo
                logoImg = ''; // ???????????????logo ???url
                listImgDefault = '';
                i = 0;case 54:if (!(i < _this6.photoConfigData.length)) {_context6.next = 63;break;}
                if (_this6.photoConfigData[i].photo_keyword == 'default') {
                  listImgDefault = _this6.photoConfigData[i].photo_url;
                }if (!(

                _this6.photoDrawInfo.EXIFInfo.brandLogo.content && (
                _this6.photoDrawInfo.EXIFInfo.brandLogo.content.toLowerCase().indexOf(_this6.photoConfigData[i].photo_keyword.toLowerCase()) >= 0 ||
                _this6.photoConfigData[i].photo_keyword.toLowerCase().indexOf(_this6.photoDrawInfo.EXIFInfo.brandLogo.content.toLowerCase()) >= 0))) {_context6.next = 60;break;}

                console.log('setLogo');
                logoImg = _this6.photoConfigData[i].photo_url;return _context6.abrupt("break", 63);case 60:i++;_context6.next = 54;break;case 63:



                // ??????logo ???url
                if (!logoImg || logoImg == '') {
                  logoImg = listImgDefault;
                } else if ((!logoImg || logoImg == '') && (!listImgDefault || listImgDefault == '')) {
                  logoImg = _this6.defaultLogo;
                }
                console.log('logoImg', logoImg, dividingLineHeight);
                uni.getImageInfo({
                  src: logoImg, //logo ??????
                  success: function success(logoRes) {
                    console.log('logo width', logoRes.width);
                    console.log('logo height', logoRes.height);
                    // ??????????????????????????????
                    var proportion = 2 / 3;
                    var logoMaxHeight = dividingLineHeight * proportion;
                    if (logoRes.width / 2.3 > logoRes.height) {
                      logoMaxHeight = dividingLineHeight * proportion * proportion;
                    }
                    var newSize = that.calculationImageScaleSize({ width: logoRes.width, height: logoRes.height }, logoMaxHeight, 'height');
                    var logoImgX = mainImage.originWidth - paddingX - rightWidth - 2 * dividingLinePadding - newSize.width;
                    var logoImgY = mainImage.originHeight + (EXIFInfo.InfoWrapperHeight - logoMaxHeight) / 2;
                    ctx.drawImage(logoRes.path, logoImgX, logoImgY, newSize.width, newSize.height);
                    // ????????????
                    ctx.draw(false, function () {
                      that.saveTempImage();
                    });
                    console.log('????????????');
                    uni.hideLoading();
                  },
                  fail: function fail() {
                    // ????????????
                    ctx.draw(false, function () {
                      that.saveTempImage();
                    });
                    console.log('????????????');
                    uni.hideLoading();
                  } });case 66:case "end":return _context6.stop();}}}, _callee6);}))();

    },
    // ????????????
    drawText: function drawText(ctx, text) {var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#000';var x = arguments.length > 4 ? arguments[4] : undefined;var y = arguments.length > 5 ? arguments[5] : undefined;var maxWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 999;var bold = arguments.length > 7 ? arguments[7] : undefined;var align = arguments.length > 8 ? arguments[8] : undefined;var fontFamily = arguments.length > 9 ? arguments[9] : undefined;
      if (bold) {
        ctx.font = "bold ".concat(fontSize, "px ").concat(fontFamily ? fontFamily : 'normal');
      } else {
        ctx.font = "normal ".concat(fontSize, "px  ").concat(fontFamily ? fontFamily : 'normal');
      }
      if (align) {
        ctx.textAlign = align;
      } else {
        ctx.textAlign = 'left';
      }
      ctx.fillStyle = color;
      ctx.textBaseline = 'middle';
      // const fontHeight = 12;
      console.log('drawText', fontSize, Number(y) + Number(fontSize));
      if (ctx.measureText(text).width > maxWidth) {
        var count = 1;
        while (ctx.measureText(text.slice(0, text.length - count)).width > 693) {
          count++;
        }
        ctx.fillText(text.slice(0, text.length - (count + 1)) + '...', x, Number(y) + Number(fontSize));
      } else {
        ctx.fillText(text, x, Number(y) + Number(fontSize));
      }
    },

    // ??????canvas?????????????????????
    getCanvasSize: function getCanvasSize() {var _arguments2 = arguments,_this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var imgSource, that;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:imgSource = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : '';
                that = _this7;if (!(
                imgSource == '')) {_context7.next = 4;break;}throw (
                  '??????????????????');case 4:_context7.prev = 4;_context7.next = 7;return (


                  uni.getImageInfo({
                    src: imgSource,
                    success: function success(image) {
                      console.log('width', image.width);
                      console.log('height', image.height);
                      var tempWidth = image.width;
                      var tempHeight = image.height;
                      if (image.width > 3000) {
                        tempWidth = 3000;
                        tempHeight = _index.default.formatNumber(_index.default.formatDecimal(image.height / image.width * 3000, 2));
                      } else if (image.height > 3000) {
                        tempHeight = 3000;
                        tempWidth = _index.default.formatNumber(_index.default.formatDecimal(image.width / image.height * 3000, 2));
                      }
                      // if (image.width >= image.height) {
                      // canvas ??????
                      that.photoDrawInfo.width = tempWidth;
                      var scale = _index.default.formatNumber(_index.default.formatDecimal(320 / tempWidth, 5));
                      that.canvasConfig.scale = scale;
                      that.showQuality = scale;
                      var maxCanvasInfoWrapperSize = that.calculationScaleSize(that.canvasConfig.maxCanvasInfoWrapperSize, that.canvasConfig.scale);
                      that.photoDrawInfo.EXIFInfo.InfoWrapperHeight = maxCanvasInfoWrapperSize;
                      that.photoDrawInfo.height = tempHeight + maxCanvasInfoWrapperSize;
                      that.getImageSize(tempWidth, tempHeight);
                    } }));case 7:_context7.next = 12;break;case 9:_context7.prev = 9;_context7.t0 = _context7["catch"](4);


                //TODO handle the exception
                console.log('error', _context7.t0);case 12:case "end":return _context7.stop();}}}, _callee7, null, [[4, 9]]);}))();

    },
    // ??????????????????????????????px??????
    // ????????????logo ??? ?????????
    calculationImageScaleSize: function calculationImageScaleSize() {var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var maxLength = arguments.length > 1 ? arguments[1] : undefined;var maxType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'width';
      var newWidth = option.width;
      var newHeight = option.height;
      if (maxType == 'width') {
        // ????????????
        newWidth = maxLength;
        newHeight = _index.default.formatNumber(_index.default.formatDecimal(option.height / option.width * maxLength, 2));
      } else {
        // ????????????
        newHeight = maxLength;
        newWidth = _index.default.formatNumber(_index.default.formatDecimal(option.width / option.height * maxLength, 2));
      }
      return { width: newWidth, height: newHeight };
    },
    // ????????????????????????px??????
    calculationScaleSize: function calculationScaleSize(size, scale) {
      var tempScale = scale;
      if (!tempScale || tempScale == '') {
        tempScale = this.canvasConfig.scale;
      }
      return _index.default.formatNumber(_index.default.formatDecimal(size / tempScale, 0));
    },
    // ??????????????????
    getImageSize: function getImageSize() {var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var photoDrawInfo = _lodash.default.cloneDeep(this.photoDrawInfo);
      if (width && height) {
        photoDrawInfo.mainImage.originWidth = width;
        photoDrawInfo.mainImage.originHeight = height;
      }
      // ?????????????????????
      var originWidth = photoDrawInfo.mainImage.originWidth;
      var originHeight = photoDrawInfo.mainImage.originHeight;
      photoDrawInfo.mainImage.width = photoDrawInfo.mainImage.scale * photoDrawInfo.mainImage.originWidth;
      photoDrawInfo.mainImage.height = photoDrawInfo.mainImage.scale * photoDrawInfo.mainImage.originHeight;
      // ?????????????????????
      photoDrawInfo.mainImage.xAxis = 0;
      photoDrawInfo.mainImage.yAxis = 0;
      if (!photoDrawInfo.mainImage.customXAxis && !photoDrawInfo.mainImage.customXAxis) {
        var tempX = (originWidth - photoDrawInfo.mainImage.width) / 2;
        var tempY = (originHeight - photoDrawInfo.mainImage.height) / 2;
        var padding = tempX >= tempY ? tempX : tempY;

        if (photoDrawInfo.mainImage.position == 'left') {
          photoDrawInfo.mainImage.yAxis = padding;
          photoDrawInfo.mainImage.xAxis = 0;
        } else if (photoDrawInfo.mainImage.position == 'right') {
          photoDrawInfo.mainImage.yAxis = padding;
          photoDrawInfo.mainImage.xAxis = padding * 2;
        } else if (photoDrawInfo.mainImage.position == 'top') {
          photoDrawInfo.mainImage.yAxis = 0;
          photoDrawInfo.mainImage.xAxis = padding;
        } else if (photoDrawInfo.mainImage.position == 'bottom') {
          photoDrawInfo.mainImage.yAxis = padding * 2;
          photoDrawInfo.mainImage.xAxis = padding;
        } else {
          photoDrawInfo.mainImage.yAxis = padding;
          photoDrawInfo.mainImage.xAxis = padding;
        }

        var interpolation = Math.abs(tempX - tempY); // ????????????
        if (tempX > tempY) {
          photoDrawInfo.height += interpolation * 2;
          photoDrawInfo.mainImage.originHeight += interpolation * 2;
        } else {
          photoDrawInfo.width += interpolation * 2;
          photoDrawInfo.mainImage.originWidth += interpolation * 2;
        }
      }
      // if (photoDrawInfo.mainImage.customXAxis) {
      // 	photoDrawInfo.mainImage.xAxis = photoDrawInfo.mainImage.customXAxis;
      // }
      // if (photoDrawInfo.mainImage.customYAxis) {
      // 	photoDrawInfo.mainImage.yAxis = photoDrawInfo.mainImage.customYAxis;
      // }
      // ???????????????
      photoDrawInfo.mainImage.angle = photoDrawInfo.mainImage.customAngle;
      this.photoDrawInfo = photoDrawInfo;

      console.log('photoDrawInfo', JSON.stringify(photoDrawInfo));
    },
    getTextWidth: function getTextWidth(ctx, text, bold) {var fontSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;var fontFamily = arguments.length > 4 ? arguments[4] : undefined;
      if (bold) {
        ctx.font = "bold ".concat(fontSize, "px ").concat(fontFamily ? fontFamily : 'normal');
      } else {
        ctx.font = "normal ".concat(fontSize, "px  ").concat(fontFamily ? fontFamily : 'normal');
      }
      return ctx.measureText(text).width;
    },
    saveImage: function saveImage() {
      var that = this;
      if (!that.photoDrawInfo.mainImage.content || that.photoDrawInfo.mainImage.content == '') {
        uni.showModal({
          title: '??????',
          content: '?????????????????????',
          success: function success(res) {
            if (res.confirm) {
              that.onUpdatedFile();
            }
          } });

      } else {
        this.downloadImage();
      }
    },
    //?????????????????????
    saveTempImage: function saveTempImage() {var _this8 = this;
      console.log('saveTempImage');
      var that = this;var
      photoDrawInfo = this.photoDrawInfo,canvasConfig = this.canvasConfig;
      uni.showLoading({
        title: '?????????...',
        duration: 6000,
        mask: true });

      var currentScanle = canvasConfig.scale;
      var ctx = 'canvas';
      var compressTime = _index.default.formatNumber(_index.default.formatDecimal(photoDrawInfo.compress / 100, 2));
      console.log(' photoDrawInfo.width * compressTime * this.showQuality', photoDrawInfo.width * compressTime * this.showQuality);
      uni.canvasToTempFilePath({
        //???canvas????????????
        x: 0,
        y: 0,
        width: photoDrawInfo.width,
        height: photoDrawInfo.height,
        destWidth: photoDrawInfo.width * compressTime, //??????canvas?????????
        destHeight: photoDrawInfo.height * compressTime, //??????canvas?????????
        canvasId: ctx,
        success: function success(res) {
          that.tempImage = res.tempFilePath;
          that.tempImage = res.tempFilePath;
          uni.canvasToTempFilePath({
            //???canvas????????????
            x: 0,
            y: 0,
            width: photoDrawInfo.width,
            height: photoDrawInfo.height,
            destWidth: photoDrawInfo.width * compressTime, //??????canvas?????????
            destHeight: photoDrawInfo.height * compressTime, //??????canvas?????????
            canvasId: ctx,
            fileType: 'jpg',
            quality: _this8.showQuality,
            success: function success(res2) {
              // console.log('res.tempFilePath', res.tempFilePath);
              try {
                uni.getFileSystemManager().readFile({
                  filePath: res2.tempFilePath,
                  encoding: 'base64',
                  success: function success(res3) {
                    var base64 = 'data:image/jpeg;base64,' + res3.data; //?????????????????????????????????????????????
                    that.tempImageBase64 = base64;
                    that.showGenerator = false;
                  } });

              } catch (e) {
                //TODO handle the exception
                console.log('urlTobase64', e);
                that.showGenerator = false;
              }
            },
            fail: function fail(err) {
              console.log(err);
              that.loading = false;
              uni.hideLoading();
              that.showGenerator = false;
            } });

        },
        fail: function fail(err) {
          console.log(err);
          that.loading = false;
          uni.hideLoading();
          that.showGenerator = false;
        } });

    },
    //?????????????????????
    downloadImage: function downloadImage() {
      var that = this;var
      photoDrawInfo = this.photoDrawInfo;
      var compressTime = _index.default.formatNumber(_index.default.formatDecimal(photoDrawInfo.compress / 100, 2));
      if (photoDrawInfo.width * compressTime > 3000 || photoDrawInfo.height * compressTime > 3000) {
        uni.showLoading({
          title: '????????????????????????...',
          duration: 60000,
          mask: true });

      } else {
        uni.showLoading({
          title: '?????????...',
          duration: 15000,
          mask: true });

      }
      uni.saveImageToPhotosAlbum({
        filePath: that.tempImage,
        success: function success() {
          uni.hideLoading();
          uni.showToast({
            title: '??????????????????????????????',
            icon: 'none',
            duration: 2000 });

        },
        fail: function fail(error) {
          console.log('error', error);
          uni.hideLoading();
          if (error.errMsg.indexOf('cancel') >= 0) {
            uni.showToast({
              title: '????????????',
              icon: 'none' });

          } else {
            uni.showToast({
              title: '??????????????????????????????????????????',
              icon: 'none' });

          }
        } });

      that.loading = false;
      uni.hideLoading();
    },

    closePopup: function closePopup() {
      this.showForm = false;
    },
    openPopup: function openPopup() {
      var that = this;
      if (!that.photoDrawInfo.mainImage.content || that.photoDrawInfo.mainImage.content == '') {
        uni.showModal({
          title: '??????',
          content: '?????????????????????',
          success: function success(res) {
            if (res.confirm) {
              that.onUpdatedFile();
            }
          } });

      } else {
        that.showForm = true;
      }
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6)["default"]))

/***/ }),

/***/ 156:
/*!**************************************************************************************************************************************************************************!*\
  !*** /Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/pages/componentsFunction/photoBorder/photoBorder.vue?vue&type=style&index=0&id=35a066a5&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_style_index_0_id_35a066a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./photoBorder.vue?vue&type=style&index=0&id=35a066a5&lang=scss&scoped=true& */ 157);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_style_index_0_id_35a066a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_style_index_0_id_35a066a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_style_index_0_id_35a066a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_style_index_0_id_35a066a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photoBorder_vue_vue_type_style_index_0_id_35a066a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 157:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/zhengkaijie/Project/iTools-app/iToolsMiniApp/pages/componentsFunction/photoBorder/photoBorder.vue?vue&type=style&index=0&id=35a066a5&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[148,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentsFunction/photoBorder/photoBorder.js.map