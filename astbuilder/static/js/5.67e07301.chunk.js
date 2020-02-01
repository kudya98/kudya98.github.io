(this["webpackJsonpkudyakov_diplom"] = this["webpackJsonpkudyakov_diplom"] || []).push([[5],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFileExtensionByLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLangByFileName; });
function getFileExtensionByLang(lang){switch(lang){case'javascript':{return'js';}case'php':{return'php';}case'json':{return'json';}case'xml':{return'xml';}default:{return'txt';}}}function getLangByFileName(fileName){var extension=fileName.match(/\.[0-9a-z]+$/i)?fileName.match(/\.[0-9a-z]+$/i)[0]:null;switch(extension){case'.json':{return'json';}case'.xml':{return'xml';}case'.js':{return'javascript';}case'.c':{return'c';}case'.java':{return'java';}case'.php':{return'php';}default:{throw new Error('Can\'t read this file');}}}

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inputEditorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return outputEditorOptions; });
var inputEditorOptions={minimap:{enabled:false},scrollBeyondLastLine:false};var outputEditorOptions={minimap:{enabled:false},lineNumbers:'on',scrollBeyondLastLine:false,readOnly:true};

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAAAAp0EAqj4AqUAAp0EAp0AAqEEAqUEAqkAAqEAAqEIAqEEAAABZjcEoAAAAC3RSTlMAWi1EhiDf4yQ40oJEJAIAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4woODjsTRPkv8gAABXNJREFUeNrt08uxVTcQhtELVa6yGRGCc8AZkIOTIAGGhEAIZOEBydkGm+d9nL23WupurT+C1ldLd3fD9+xj2F6OvzZgAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAKvfJoAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIEDKAM9fnd8fcQFeXzjr90MBfnkT94o1++vdMQJ/rj549N4e/APdCBwF0I7AUQDdCBwH0IzAcQC9CJwB0IrAGQCdCJwD0IjAOQB9CJwF0IbAWQBdCJwH0ITAeQA9CFwB0ILAFQAdCFwD0IDANQD1CVwFUJ7AVQDVCVwHUJzAdQC1CYwAUJrACACVCYwBUJjAGAB1CYwCUJbAKABVCYwDUJTAOAA1CYwEUJLASAAVCYwFUJDAWAD1CIwGUI7AaADVCIwHUIzAeAC1CEQAKEUgAkAlAjEAChGIAVCHQBSAMgSiAFQhEAegCIE4ADUIRAIoQSASQAUCsQAKEIgFkJ9ANID0BKIBZCcQDyA5gXgAuQnMAJCawAwAmQnMAZCYwBwAeQnMApCWwCwAWQnMA5CUwDwAOQnMBJCSwEwAGQnMBZCQwFwA+QjMBpCOwGwA2QjMB5CMwHwAuQisAJCKwAoAmQisAZCIwBoAeQisApCGwCoAWQisA5CEwDoAOQisBJCCwEoAGQisBZCAwFoA6wmsBrCcwGoAqwmsB7CYwHoAawlkALCUQAYAKwnkALCQQA4A6whkAbCMQBYAqwjkAbCIQB4AawhkArCEQCYAKwjkArCAQC4A8wlkAzCdQDYAswnkAzCZQD4AcwlkBDCVQEYAMwnkBDCRQE4A8whkBTCNQFYAswjkBTCJQF4AcwhkBjCFQGYAMwjkBjCBQG4A8QSyAwgnkB1ANIH8AIIJ5AcQS6ACgFACFQBEEqgBIJBADQBxBKoACCNQBUAUgToAggjUARBDoBKAEAKVAEQQqAUggEAtAOMJVAMwnEA1AKMJ1AMwmEA9AGMJVAQwlEBFACMJ1AQwkEBNAOMIVAUwjEBVAKMI1AUwiEBdAGMIVAYwhEBlACMI1AYwgEBtANcJVAdwmUB1AFcJ1AdwkUB9ANcIdABwiUAHAFcI9ABwgUAPAOcJdAFwmkAXAGcJ9AFwkkAfAOcIdAJwikAnAGcI9AJwgkAvAMcJdANwmEA3AEcJ9ANwkEA/AMcIdARwiEBHAEcI9ARwgEBPALcT6ArgZgJdAdxKoC+AGwn0BXAbgc4AbiLQGcAtBHoDuIFAbwBPE+gO4EkC3QE8RaA/gCcI9AfwOIEdADxKYAcAjxHYA8AjBPYA8DCBXQA8SGAXAA8R2AfAAwT2AXA/gZ0A3EtgJwD3EdgLwD0E9gLwM4HdAPxEYDcAPxLYD8APBPYD8D2BHQF8R2BHAN8S2BPANwT2BPCVwK4AvhDYFcD/BPYF8B+BfQF8JrAzgE8EdgbwL4G9AfxDYG8Ad3e/vlt9gZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlZ6/32qt3eHwrw4mO7fRBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQIDV5woggAACCCCAAAIIIIAAAoQG+Btar0IYaELWyQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMC0xNFQxNDo1OToxOSswMDowMGsk6KgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTAtMTRUMTQ6NTk6MTkrMDA6MDAaeVAUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/react-monaco-editor/lib/index.js
var lib = __webpack_require__(180);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/config/editors.js
var editors = __webpack_require__(166);

// EXTERNAL MODULE: ./src/helpers/index.js
var helpers = __webpack_require__(138);

// EXTERNAL MODULE: ./src/assets/downloadButton.png
var downloadButton = __webpack_require__(317);
var downloadButton_default = /*#__PURE__*/__webpack_require__.n(downloadButton);

// CONCATENATED MODULE: ./src/components/DownloadButton.js
var DownloadButton_DownloadButton=function DownloadButton(_ref){var outputType=_ref.outputType,href=_ref.href;return react_default.a.createElement("a",{download:"output.".concat(Object(helpers["a" /* getFileExtensionByLang */])(outputType)),href:href},react_default.a.createElement("img",{className:"logo",src:downloadButton_default.a,alt:"Download"}));};/* harmony default export */ var components_DownloadButton = (DownloadButton_DownloadButton);
// CONCATENATED MODULE: ./src/components/OutputStatistics.js
var OutputStatistics_OutputStatistics=function OutputStatistics(_ref){var size=_ref.size,timer=_ref.timer;var sizeString=size?"".concat(size/1000,"kB"):'';var timerString=timer?"".concat(timer.toFixed(2),"ms"):'';return(size||timer)&&react_default.a.createElement("pre",{className:"statistics"},"".concat(sizeString," ").concat(timerString));};/* harmony default export */ var components_OutputStatistics = (OutputStatistics_OutputStatistics);
// CONCATENATED MODULE: ./src/containers/OutputWindow.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){Object(defineProperty["a" /* default */])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var OutputWindow_OutputWindow=function OutputWindow(_ref){var output=_ref.output,outputType=_ref.outputType,theme=_ref.theme;var outputBlob=new Blob([output[outputType]],{type:"application/".concat(outputType)});var outputUrl=URL.createObjectURL(outputBlob);var timer=output&&output.timer&&output.timer[outputType];return react_default.a.createElement("div",{className:output.isLoading?'output loading':'output'},!output.error&&!output.isLoading&&react_default.a.createElement(components_OutputStatistics,{size:outputBlob.size,timer:timer}),!output.error&&!output.isLoading&&react_default.a.createElement(components_DownloadButton,{output:output,outputType:outputType,href:outputUrl}),react_default.a.createElement(lib_default.a,{language:output.error?'plaintext':outputType,theme:theme,value:output.error?output.error:output[outputType],options:output.error?_objectSpread({},editors["b" /* outputEditorOptions */],{lineNumbers:'off'}):editors["b" /* outputEditorOptions */],editorDidMount:function editorDidMount(editor){window.addEventListener('resize',function(){return editor.layout();});}}));};var mapStateToProps=function mapStateToProps(_ref2){var output=_ref2.output,outputType=_ref2.outputType,theme=_ref2.theme;return{output:output,outputType:outputType,theme:theme};};/* harmony default export */ var containers_OutputWindow = __webpack_exports__["default"] = (Object(es["b" /* connect */])(mapStateToProps)(OutputWindow_OutputWindow));

/***/ })

}]);
//# sourceMappingURL=5.67e07301.chunk.js.map