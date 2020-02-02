(this["webpackJsonpkudyakov_diplom"] = this["webpackJsonpkudyakov_diplom"] || []).push([[4],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return startParsing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeFile; });
function updateOptions(options,lang){return{type:'UPDATE_OPTIONS',payload:{options:options,lang:lang}};}function updateInput(value,lang){return{type:'UPDATE_INPUT',payload:{value:value,lang:lang}};}function updateLang(lang){return{type:'UPDATE_LANG',payload:lang};}function updateTheme(theme){return{type:'UPDATE_THEME',payload:theme};}function startParsing(){return{type:'START_PARSING'};}function updateOutput(output){return{type:'UPDATE_OUTPUT',payload:output};}function updateOutputType(type){return{type:'UPDATE_OUTPUT_TYPE',payload:type};}function loadFile(file){return{type:'LOAD_FILE',payload:file};}function closeFile(){return{type:'CLOSE_FILE'};}

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startParserWorker; });
/* harmony import */ var _workers_parser_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _workers_parser_worker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workers_parser_worker__WEBPACK_IMPORTED_MODULE_0__);
function startParserWorker(message,callback){var worker=new _workers_parser_worker__WEBPACK_IMPORTED_MODULE_0___default.a();worker.postMessage(message);worker.onmessage=function(e){callback(e);worker.terminate();};}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(){return new Worker(__webpack_require__.p+"2d7a5579cc218295a3c0.worker.js");};

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFileExtensionByLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLangByFileName; });
function getFileExtensionByLang(lang){switch(lang){case'javascript':{return'js';}case'php':{return'php';}case'json':{return'json';}case'xml':{return'xml';}default:{return'txt';}}}function getLangByFileName(fileName){var extension=fileName.match(/\.[0-9a-z]+$/i)?fileName.match(/\.[0-9a-z]+$/i)[0]:null;switch(extension){case'.json':{return'json';}case'.xml':{return'xml';}case'.js':{return'javascript';}case'.c':{return'c';}case'.java':{return'java';}case'.php':{return'php';}default:{throw new Error('Can\'t read this file');}}}

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(){return new Worker(__webpack_require__.p+"8fd21f729f795f9afc26.worker.js");};

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(12);

// EXTERNAL MODULE: ./src/actions/index.js
var actions = __webpack_require__(135);

// EXTERNAL MODULE: ./src/workers/fileLoader.worker.js
var fileLoader_worker = __webpack_require__(218);
var fileLoader_worker_default = /*#__PURE__*/__webpack_require__.n(fileLoader_worker);

// EXTERNAL MODULE: ./src/helpers/startParserWorker.js
var startParserWorker = __webpack_require__(136);

// EXTERNAL MODULE: ./src/helpers/index.js
var helpers = __webpack_require__(138);

// EXTERNAL MODULE: ./src/helpers/preloadedState.js + 2 modules
var preloadedState = __webpack_require__(7);

// CONCATENATED MODULE: ./src/components/ParserOptions.js
var keyMap={retainLines:'Save codelines'};var ParserOptions_ParserOptions=function ParserOptions(_ref){var options=_ref.options,disabled=_ref.disabled,onChange=_ref.onChange;return react_default.a.createElement("div",{className:"dropdown"},react_default.a.createElement("input",{type:"text",className:"form-control",placeholder:"Options",readOnly:true}),options&&Object.keys(options).length>0&&react_default.a.createElement("div",{className:"dropdown-content"},Object.keys(options).map(function(key){return react_default.a.createElement("div",{key:key,className:"custom-control custom-switch"},react_default.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customSwitch1",value:key,checked:options[key],disabled:disabled,onChange:onChange}),react_default.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},keyMap[key]));})));};/* harmony default export */ var components_ParserOptions = (ParserOptions_ParserOptions);
// CONCATENATED MODULE: ./src/components/ThemeOptions.js
var ThemeOptions_ThemeOptions=function ThemeOptions(_ref){var theme=_ref.theme,onChange=_ref.onChange;return react_default.a.createElement("select",{className:"form-control",value:theme,onChange:onChange},react_default.a.createElement("option",{value:"vs"},"vs"),react_default.a.createElement("option",{value:"vs-dark"},"vs-dark"));};/* harmony default export */ var components_ThemeOptions = (ThemeOptions_ThemeOptions);
// CONCATENATED MODULE: ./src/components/LangOptions.js
var LangOptions_LangOptions=function LangOptions(_ref){var disabled=_ref.disabled,lang=_ref.lang,onChange=_ref.onChange;return react_default.a.createElement("select",{className:"form-control",value:lang,onChange:onChange,disabled:disabled},react_default.a.createElement("option",{value:"javascript"},"javascript"),react_default.a.createElement("option",{value:"php"},"php"),react_default.a.createElement("option",{value:"java"},"java"),react_default.a.createElement("option",{value:"c"},"c"));};/* harmony default export */ var components_LangOptions = (LangOptions_LangOptions);
// CONCATENATED MODULE: ./src/components/FileLoader.js
var FileLoader_FileLoader=function FileLoader(_ref){var file=_ref.file,onCloseFile=_ref.onCloseFile,onLoadFile=_ref.onLoadFile;return file&&!file.isLoading?react_default.a.createElement("button",{className:"btn btn-danger close-file",onClick:onCloseFile},"Close file "):react_default.a.createElement("div",{className:"custom-file"},react_default.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:onLoadFile}),react_default.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Choose file"));};/* harmony default export */ var components_FileLoader = (FileLoader_FileLoader);
// CONCATENATED MODULE: ./src/components/OutputTypeSwitcher.js
var allowedTypes=['xml','json','javascript'];var OutputTypeSwitcher_OutputTypeSwitcher=function OutputTypeSwitcher(_ref){var output=_ref.output,outputType=_ref.outputType,updateOutputType=_ref.updateOutputType;return react_default.a.createElement("div",{className:"output"},Object.keys(output).filter(function(key){return allowedTypes.includes(key);}).map(function(key){return react_default.a.createElement("button",{className:outputType===key?'btn btn-dark':'btn btn-light',key:key,value:key,onClick:function onClick(event){return updateOutputType(event.target.value);}},key);}));};/* harmony default export */ var components_OutputTypeSwitcher = (OutputTypeSwitcher_OutputTypeSwitcher);
// CONCATENATED MODULE: ./src/containers/MenuBar.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){Object(defineProperty["a" /* default */])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var MenuBar_MenuBar=function MenuBar(_ref){var options=_ref.options,input=_ref.input,lang=_ref.lang,theme=_ref.theme,output=_ref.output,outputType=_ref.outputType,file=_ref.file,startParsing=_ref.startParsing,updateInput=_ref.updateInput,updateOptions=_ref.updateOptions,updateLang=_ref.updateLang,updateTheme=_ref.updateTheme,updateOutput=_ref.updateOutput,updateOutputType=_ref.updateOutputType,loadFile=_ref.loadFile,closeFile=_ref.closeFile;var handleParserComplete=function handleParserComplete(e){var output=e.data;updateOutput(output);updateOutputType(Object.keys(output)[0]);};var handleLoadFile=function handleLoadFile(e){if(!e.target.files[0]){return;}var file=e.target.files[0];var fileLang;try{fileLang=Object(helpers["b" /* getLangByFileName */])(file.name);}catch(e){alert(e.message);return;}loadFile(file);updateInput(_objectSpread({},input,{isLoading:true}));var worker=new fileLoader_worker_default.a();worker.postMessage({file:file});worker.onmessage=function(_ref2){var data=_ref2.data;worker.terminate();updateInput(_objectSpread({},input,{isLoading:false}));updateInput(data,fileLang);updateLang(fileLang);startParsing();Object(startParserWorker["a" /* default */])({input:data,lang:fileLang,options:options[fileLang]},handleParserComplete);};worker.onerror=function(e){closeFile();alert(e.message);};};var handleLangChanged=function handleLangChanged(event){updateLang(event.target.value);startParsing();Object(startParserWorker["a" /* default */])({input:input[event.target.value],lang:event.target.value,options:options[lang]},handleParserComplete);};var handleParserOptionsChanged=function handleParserOptionsChanged(event){var newOptions=_objectSpread({},options[lang]);newOptions[event.target.value]=!newOptions[event.target.value];updateOptions(newOptions,lang);startParsing();Object(startParserWorker["a" /* default */])({input:input[lang],lang:lang,options:newOptions},handleParserComplete);};var handleCloseFile=function handleCloseFile(){var prevState=JSON.parse(window.localStorage.getItem('state'));var input=prevState.input||preloadedState["a" /* default */].input;var lang=prevState.lang||preloadedState["a" /* default */].lang;closeFile();updateInput(input);updateLang(lang);startParsing();Object(startParserWorker["a" /* default */])({input:input[lang],lang:lang,options:options[lang]},handleParserComplete);};return react_default.a.createElement("div",{className:"menu"},react_default.a.createElement("div",{className:"options form-group"},react_default.a.createElement(components_LangOptions,{disabled:file,lang:lang,onChange:handleLangChanged}),react_default.a.createElement(components_ThemeOptions,{theme:theme,onChange:function onChange(event){return updateTheme(event.target.value);}}),react_default.a.createElement(components_ParserOptions,{options:options[lang],disabled:output.isLoading,onChange:handleParserOptionsChanged}),react_default.a.createElement(components_FileLoader,{file:file,onCloseFile:handleCloseFile,onLoadFile:handleLoadFile})),react_default.a.createElement(components_OutputTypeSwitcher,{output:output,outputType:outputType,updateOutputType:updateOutputType}));};var mapStateToProps=function mapStateToProps(_ref3){var options=_ref3.options,input=_ref3.input,lang=_ref3.lang,theme=_ref3.theme,output=_ref3.output,outputType=_ref3.outputType,file=_ref3.file;return{options:options,input:input,lang:lang,theme:theme,output:output,outputType:outputType,file:file};};var MenuBar_mapDispatchToProps=function mapDispatchToProps(dispatch){return{updateOptions:Object(redux["a" /* bindActionCreators */])(actions["f" /* updateOptions */],dispatch),startParsing:Object(redux["a" /* bindActionCreators */])(actions["c" /* startParsing */],dispatch),updateLang:Object(redux["a" /* bindActionCreators */])(actions["e" /* updateLang */],dispatch),updateTheme:Object(redux["a" /* bindActionCreators */])(actions["i" /* updateTheme */],dispatch),updateInput:Object(redux["a" /* bindActionCreators */])(actions["d" /* updateInput */],dispatch),updateOutput:Object(redux["a" /* bindActionCreators */])(actions["g" /* updateOutput */],dispatch),updateOutputType:Object(redux["a" /* bindActionCreators */])(actions["h" /* updateOutputType */],dispatch),loadFile:Object(redux["a" /* bindActionCreators */])(actions["b" /* loadFile */],dispatch),closeFile:Object(redux["a" /* bindActionCreators */])(actions["a" /* closeFile */],dispatch)};};/* harmony default export */ var containers_MenuBar = __webpack_exports__["default"] = (Object(es["b" /* connect */])(mapStateToProps,MenuBar_mapDispatchToProps)(MenuBar_MenuBar));

/***/ })

}]);
//# sourceMappingURL=4.4353527c.chunk.js.map