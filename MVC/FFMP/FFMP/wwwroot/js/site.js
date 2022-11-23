window["easydata"] =
/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
                /******/
            }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
                /******/
            };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
            /******/
        }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/
            }
            /******/
        };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
            /******/
        };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
            /******/
        };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
        /******/
    })
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);

            // EXPORTS
            __webpack_require__.d(__webpack_exports__, "DataType", function () { return /* reexport */ data_type["a" /* DataType */]; });
            __webpack_require__.d(__webpack_exports__, "EntityAttrKind", function () { return /* reexport */ EntityAttrKind; });
            __webpack_require__.d(__webpack_exports__, "EditorTag", function () { return /* reexport */ EditorTag; });
            __webpack_require__.d(__webpack_exports__, "HttpMethod", function () { return /* reexport */ http_method["a" /* HttpMethod */]; });
            __webpack_require__.d(__webpack_exports__, "HttpRequest", function () { return /* reexport */ http_request["a" /* HttpRequest */]; });
            __webpack_require__.d(__webpack_exports__, "HttpResponseError", function () { return /* reexport */ http_client["b" /* HttpResponseError */]; });
            __webpack_require__.d(__webpack_exports__, "HttpClient", function () { return /* reexport */ http_client["a" /* HttpClient */]; });
            __webpack_require__.d(__webpack_exports__, "MetaData", function () { return /* reexport */ meta_data_MetaData; });
            __webpack_require__.d(__webpack_exports__, "MetaEntity", function () { return /* reexport */ MetaEntity; });
            __webpack_require__.d(__webpack_exports__, "MetaEntityAttr", function () { return /* reexport */ meta_entity_MetaEntityAttr; });
            __webpack_require__.d(__webpack_exports__, "ValueEditor", function () { return /* reexport */ value_editor_ValueEditor; });
            __webpack_require__.d(__webpack_exports__, "AggregationSettings", function () { return /* reexport */ AggregationSettings; });
            __webpack_require__.d(__webpack_exports__, "ColumnAlignment", function () { return /* reexport */ data_column["a" /* ColumnAlignment */]; });
            __webpack_require__.d(__webpack_exports__, "DataColumn", function () { return /* reexport */ data_column["b" /* DataColumn */]; });
            __webpack_require__.d(__webpack_exports__, "DataColumnList", function () { return /* reexport */ data_column["c" /* DataColumnList */]; });
            __webpack_require__.d(__webpack_exports__, "DataRow", function () { return /* reexport */ data_row["a" /* DataRow */]; });
            __webpack_require__.d(__webpack_exports__, "EasyDataTable", function () { return /* reexport */ easy_data_table["a" /* EasyDataTable */]; });
            __webpack_require__.d(__webpack_exports__, "EventEmitter", function () { return /* reexport */ event_emitter_EventEmitter; });
            __webpack_require__.d(__webpack_exports__, "i18n", function () { return /* reexport */ i18n["a" /* i18n */]; });
            __webpack_require__.d(__webpack_exports__, "EasyGuid", function () { return /* reexport */ EasyGuid; });
            __webpack_require__.d(__webpack_exports__, "repeatString", function () { return /* reexport */ string_utils["b" /* repeatString */]; });
            __webpack_require__.d(__webpack_exports__, "reverseString", function () { return /* reexport */ string_utils["c" /* reverseString */]; });
            __webpack_require__.d(__webpack_exports__, "strEndsWith", function () { return /* reexport */ string_utils["d" /* strEndsWith */]; });
            __webpack_require__.d(__webpack_exports__, "combinePath", function () { return /* reexport */ string_utils["a" /* combinePath */]; });
            __webpack_require__.d(__webpack_exports__, "utils", function () { return /* reexport */ utils["a" /* utils */]; });
            __webpack_require__.d(__webpack_exports__, "liquid", function () { return /* reexport */ liquid; });

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/types/data_type.js
            var data_type = __webpack_require__(2);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/types/entity_attr_kind.js
            var EntityAttrKind;
            (function (EntityAttrKind) {
                EntityAttrKind[EntityAttrKind["Data"] = 0] = "Data";
                EntityAttrKind[EntityAttrKind["Virtual"] = 1] = "Virtual";
                EntityAttrKind[EntityAttrKind["Lookup"] = 2] = "Lookup";
            })(EntityAttrKind || (EntityAttrKind = {}));
            //# sourceMappingURL=entity_attr_kind.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/types/editor_tag.js
            var EditorTag = {
                /** Unknown tag value */
                Unknown: "Unknown",
                /** Edit tag value */
                Edit: "EDIT",
                /** DateTime tag value  */
                DateTime: "DATETIME",
                /** List tag value */
                List: "LIST",
                /** CustomList tag value */
                CustomList: "CUSTOMLIST",
                /** File tag value */
                File: "FILE"
            };
            //# sourceMappingURL=editor_tag.js.map
            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/http/http_method.js
            var http_method = __webpack_require__(11);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/http/http_request.js
            var http_request = __webpack_require__(16);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/http/http_client.js
            var http_client = __webpack_require__(24);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/i18n/i18n.js
            var i18n = __webpack_require__(5);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/utils/utils.js
            var utils = __webpack_require__(4);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/meta/meta_entity.js



            /**
             * Represents one entity.
             */
            var MetaEntity = /** @class */ (function () {
                /** The default constructor. */
                function MetaEntity(parent) {
                    /** Returns false if this entity is read-only */
                    this.isEditable = true;
                    this.name = "";
                    this.caption = "";
                    this.description = "";
                    this.parent = parent;
                    this.attributes = new Array();
                    this.subEntities = new Array();
                }
                /**
                * Loads entity from its JSON representation object.
                * @param model The Data Model.
                * @param dto The JSON representation object.
                */
                MetaEntity.prototype.loadFromData = function (model, dto) {
                    if (dto) {
                        this.id = dto.id;
                        this.name = dto.name;
                        this.captionPlural = dto.namePlur;
                        this.caption = dto.name;
                        this.description = dto.desc;
                        if (typeof (dto.ied) !== 'undefined')
                            this.isEditable = dto.ied;
                        this.subEntities = new Array();
                        if (dto.ents) {
                            for (var i = 0; i < dto.ents.length; i++) {
                                var newEntity = model.createEntity(this);
                                newEntity.loadFromData(model, dto.ents[i]);
                                this.subEntities.push(newEntity);
                            }
                        }
                        this.attributes = new Array();
                        if (dto.attrs) {
                            for (var i = 0; i < dto.attrs.length; i++) {
                                var newAttr = model.createEntityAttr(this);
                                newAttr.loadFromData(model, dto.attrs[i]);
                                this.attributes.push(newAttr);
                            }
                        }
                    }
                };
                MetaEntity.prototype.scan = function (processAttribute, processEntity) {
                    var opts = { stop: false };
                    var internalProcessEntity = function (entity) {
                        if (processEntity)
                            processEntity(entity, opts);
                        if (entity.attributes) {
                            var attrCount = entity.attributes.length;
                            for (var i = 0; (i < attrCount) && !opts.stop; i++) {
                                var attr = entity.attributes[i];
                                if (processAttribute) {
                                    processAttribute(attr, opts);
                                }
                                if (opts.stop)
                                    return;
                            }
                        }
                        if (entity.subEntities) {
                            var subEntityCount = entity.subEntities.length;
                            for (var i = 0; (i < subEntityCount) && !opts.stop; i++) {
                                internalProcessEntity(entity.subEntities[i]);
                            }
                        }
                    };
                    internalProcessEntity(this);
                };
                MetaEntity.prototype.getFirstPrimaryAttr = function () {
                    return this.getPrimaryAttrs()[0];
                };
                MetaEntity.prototype.getPrimaryAttrs = function () {
                    return this.attributes.filter(function (attr) { return attr.isPrimaryKey; });
                };
                return MetaEntity;
            }());

            var meta_entity_MetaEntityAttr = /** @class */ (function () {
                /** The default constructor. */
                function MetaEntityAttr(entity) {
                    this.id = "";
                    this.caption = "{Unrecognized attribute}";
                    this.dataType = data_type["a" /* DataType */].String;
                    this.size = 0;
                    this.isPrimaryKey = false;
                    this.isForeignKey = false;
                    this.isNullable = true;
                    this.showOnView = true;
                    this.isEditable = true;
                    this.showOnCreate = true;
                    this.showOnEdit = true;
                    this.showInLookup = false;
                    this.lookupAttr = "";
                    this.expr = "";
                    this.entity = entity;
                    this.kind = EntityAttrKind.Data;
                }
                /**
                 * Loads entity attribute from JSON representation object.
                 * @param model The Data Model.
                 * @param dto The JSON representation object.
                 */
                MetaEntityAttr.prototype.loadFromData = function (model, dto) {
                    if (dto) {
                        this.id = dto.id;
                        this.description = dto.desc;
                        this.caption = dto.cptn;
                        this.dataType = dto.dtype;
                        this.isPrimaryKey = dto.ipk;
                        this.isForeignKey = dto.ifk;
                        this.size = dto.size;
                        this.lookupAttr = dto.lattr;
                        this.lookupEntity = dto.lent;
                        this.dataAttr = dto.dattr;
                        this.lookupDataAttr = dto.ldattr;
                        this.defaultValue = dto.defVal;
                        this.isNullable = utils["a" /* utils */].getIfDefined(dto.nul, this.isNullable);
                        this.isEditable = utils["a" /* utils */].getIfDefined(dto.ied, this.isEditable);
                        this.showOnView = utils["a" /* utils */].getIfDefined(dto.ivis || dto.sov, this.showOnView);
                        this.showOnCreate = utils["a" /* utils */].getIfDefined(dto.soc, this.showOnCreate);
                        this.showOnEdit = utils["a" /* utils */].getIfDefined(dto.soe, this.showOnEdit);
                        this.showInLookup = utils["a" /* utils */].getIfDefined(dto.sil, this.showInLookup);
                        this.kind = dto.kind;
                        this.displayFormat = dto.dfmt;
                        if (dto.udata)
                            this.userData = dto.udata;
                        if (dto.edtr) {
                            this.defaultEditor = model.getEditorById(dto.edtr) || model.createValueEditor();
                        }
                    }
                };
                return MetaEntityAttr;
            }());

            //# sourceMappingURL=meta_entity.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/meta/value_editor.js


            /**
             * Represents a value editor.
             */
            var value_editor_ValueEditor = /** @class */ (function () {
                /** The default constructor. */
                function ValueEditor() {
                    this.id = "";
                    this.tag = EditorTag.Unknown;
                    this.resType = data_type["a" /* DataType */].Unknown;
                    this.defValue = "";
                }
                /**
                 * Loads value editor from its JSON representation object.
                 * @param data The JSON representation object.
                 */
                ValueEditor.prototype.loadFromData = function (data) {
                    if (data) {
                        this.id = data.id;
                        this.tag = data.tag;
                        this.defValue = data.defval;
                        this.resType = data.rtype;
                        this.accept = data.accept;
                        this.multiline = data.multiline;
                        if (data.subType) {
                            this.resType = data.subType;
                        }
                        if (data.name) {
                            this.name = data.name;
                        }
                        if (data.values) {
                            this.values = data.values;
                        }
                    }
                };
                ValueEditor.prototype.getValueText = function (value) {
                    var result = "";
                    if (!this.values)
                        return result;
                    if (Array.isArray(value)) {
                        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (value.indexOf(item.id) >= 0) {
                                result += item.text + ',';
                            }
                        }
                    }
                    else {
                        for (var _b = 0, _c = this.values; _b < _c.length; _b++) {
                            var item = _c[_b];
                            if (item.id === value) {
                                result += item.text + ',';
                            }
                        }
                    }
                    if (result) {
                        result = result.substring(0, result.length - 1);
                    }
                    return result;
                };
                return ValueEditor;
            }());

            //# sourceMappingURL=value_editor.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/meta/meta_data.js






            /**
             * Represents a data model
             */
            var meta_data_MetaData = /** @class */ (function () {
                /** The default constructor. */
                function MetaData() {
                    this.mainEntity = null;
                    this.id = '__none';
                    this.name = 'Empty model';
                    this.rootEntity = this.createEntity();
                    this.displayFormats = new Map();
                }
                /**
                 * Gets the main entity of model
                 * @return The main entity.
                 */
                MetaData.prototype.getMainEntity = function () {
                    return this.mainEntity;
                };
                MetaData.prototype.createEntity = function (parent) {
                    return new MetaEntity(parent);
                };
                MetaData.prototype.createEntityAttr = function (parent) {
                    return new meta_entity_MetaEntityAttr(parent);
                };
                MetaData.prototype.createValueEditor = function () {
                    return new value_editor_ValueEditor();
                };
                /**
                 * Loads data model from JSON.
                 * @param stringJson The JSON string.
                 */
                MetaData.prototype.loadFromJSON = function (stringJson) {
                    var model = JSON.parse(stringJson);
                    this.loadFromData(model);
                };
                /**
                 * Loads data model from its JSON representation object.
                 * @param data The JSON representation object.
                 */
                MetaData.prototype.loadFromData = function (data) {
                    this.id = data.id;
                    this.name = data.name;
                    this.version = data.vers;
                    //Editors
                    this.editors = new Array();
                    if (data.editors) {
                        for (var i = 0; i < data.editors.length; i++) {
                            var newEditor = this.createValueEditor();
                            newEditor.loadFromData(data.editors[i]);
                            this.editors.push(newEditor);
                        }
                    }
                    //rootEntity
                    this.rootEntity.loadFromData(this, data.entroot);
                    //DataFormats
                    this.displayFormats = new Map();
                    if (data.displayFormats) {
                        for (var dtypeStr in data.displayFormats) {
                            var dtype = data_type["a" /* DataType */][dtypeStr];
                            var formats = data.displayFormats[dtypeStr] || new Array();
                            this.displayFormats.set(dtype, formats);
                        }
                    }
                };
                /**
                 * Gets the display formats.
                 * @returns The display formats.
                 */
                MetaData.prototype.getDisplayFormats = function () {
                    return this.displayFormats;
                };
                /**
                 * Gets the display formats for type
                 * @param type The type
                 * @returns An array of display formats
                 */
                MetaData.prototype.getDisplayFormatsForType = function (type) {
                    if (this.displayFormats.has(type)) {
                        return this.displayFormats.get(type);
                    }
                    return [];
                };
                /**
                 * Gets the default display format for the provided type
                 * @param type The type
                 * @returns The default type format or null
                 */
                MetaData.prototype.getDefaultFormat = function (type) {
                    if (this.displayFormats.has(type)) {
                        return this.displayFormats.get(type).filter(function (f) { return f.isdef; })[0];
                    }
                    return null;
                };
                /**
                 * Sets data to data model.
                 * @param model Its JSON representation object or JSON string.
                 */
                MetaData.prototype.setData = function (model) {
                    if (typeof model === 'string') {
                        this.loadFromJSON(model);
                    }
                    else {
                        this.loadFromData(model);
                    }
                };
                /**
                 * Checks wether the data model is empty.
                 * @returns `true` if the data model is empty, otherwise `false`.
                 */
                MetaData.prototype.isEmpty = function () {
                    return this.rootEntity.subEntities.length === 0 && this.rootEntity.attributes.length === 0;
                };
                /**
                 * Gets ID of the data model.
                 * @returns The ID.
                 */
                MetaData.prototype.getId = function () {
                    return this.id;
                };
                /**
                 * Gets name of the data model.
                 * @returns The name.
                 */
                MetaData.prototype.getName = function () {
                    return this.name;
                };
                /**
                 * Gets root entity of the data model.
                 * @returns The root entity.
                 */
                MetaData.prototype.getRootEntity = function () {
                    return this.rootEntity;
                };
                /**
                 * Finds editor by its ID.
                 * @param editorId The editor ID.
                 * @returns The value editor or `null`.
                 */
                MetaData.prototype.getEditorById = function (editorId) {
                    for (var _i = 0, _a = this.editors; _i < _a.length; _i++) {
                        var editor = _a[_i];
                        if (editor.id === editorId) {
                            return editor;
                        }
                    }
                    return null;
                };
                /**
                 * Gets entity attribute by its ID.
                 * This function runs through all attributes inside specified model (it's root entity and all its sub-entities).
                 * @param attrId The attribute ID.
                 * @returns The attribute or `null`.
                 */
                MetaData.prototype.getAttributeById = function (attrId) {
                    var attr = this.getEntityAttrById(this.getRootEntity(), attrId);
                    if (!attr) {
                        return null;
                    }
                    return attr;
                };
                /**
                 * Checks wether attribute contains such property.
                 * @param attrId The attribute ID.
                 * @param propName The property name.
                 * @returns `true` if the attribute contains the property, otherwise `false`.
                 */
                MetaData.prototype.checkAttrProperty = function (attrId, propName) {
                    var attribute = this.getAttributeById(attrId);
                    if (attribute) {
                        if (typeof attribute[propName] === 'undefined') {
                            throw 'No such property: ' + propName;
                        }
                        if (attribute[propName]) {
                            return true;
                        }
                        else if (attribute.lookupAttr) {
                            attrId = attribute.lookupAttr;
                            attribute = this.getAttributeById(attrId);
                            return attribute && attribute[propName];
                        }
                        else {
                            return false;
                        }
                    }
                    else
                        return false;
                };
                /**
                 * Gets entity attribute by its ID.
                 * This function runs through all attributes inside specified entity and all its sub-entities.
                 * @param entity
                 * @param attrId
                 * @returns The attribute or `null`.
                 */
                MetaData.prototype.getEntityAttrById = function (entity, attrId) {
                    var idx;
                    if (entity.attributes) {
                        var attrCount = entity.attributes.length;
                        for (idx = 0; idx < attrCount; idx++) {
                            if (entity.attributes[idx].id == attrId) {
                                return entity.attributes[idx];
                            }
                        }
                    }
                    var res;
                    if (entity.subEntities) {
                        var subEntityCount = entity.subEntities.length;
                        for (idx = 0; idx < subEntityCount; idx++) {
                            res = this.getEntityAttrById(entity.subEntities[idx], attrId);
                            if (res)
                                return res;
                        }
                    }
                    return null;
                };
                MetaData.prototype.listByEntityWithFilter = function (entity, filterFunc) {
                    var result = new Array();
                    var caption;
                    var ent = null;
                    if (entity.subEntities) {
                        var subEntityCount = entity.subEntities.length;
                        for (var entIdx = 0; entIdx < subEntityCount; entIdx++) {
                            ent = entity.subEntities[entIdx];
                            if (!filterFunc || filterFunc(ent, null)) {
                                caption = i18n["a" /* i18n */].getText('Entities', ent.name);
                                if (!caption) {
                                    caption = ent.caption;
                                }
                                var newEnt = utils["a" /* utils */].assign(this.createEntity(), { id: ent.name, text: caption, items: [], isEntity: true });
                                newEnt.items = this.listByEntityWithFilter(ent, filterFunc);
                                if (newEnt.items.length > 0)
                                    result.push(newEnt);
                            }
                        }
                    }
                    var attr = null;
                    if (entity.attributes) {
                        var attrCount = entity.attributes.length;
                        for (var attrIdx = 0; attrIdx < attrCount; attrIdx++) {
                            attr = entity.attributes[attrIdx];
                            if (!filterFunc || filterFunc(entity, attr)) {
                                caption = i18n["a" /* i18n */].getText('Attributes', attr.id);
                                if (!caption)
                                    caption = attr.caption;
                                var newEnt = utils["a" /* utils */].assign(this.createEntity(), { id: attr.id, text: caption, dataType: attr.dataType });
                                result.push(newEnt);
                            }
                        }
                    }
                    return result;
                };
                MetaData.prototype.listByEntity = function (entity, opts, filterFunc) {
                    opts = opts || {};
                    var resultEntities = [];
                    var resultAttributes = [];
                    var caption;
                    var ent = null;
                    if (entity.subEntities) {
                        var subEntityCount = entity.subEntities.length;
                        for (var entIdx = 0; entIdx < subEntityCount; entIdx++) {
                            ent = entity.subEntities[entIdx];
                            if (!filterFunc || filterFunc(ent, null)) {
                                caption = i18n["a" /* i18n */].getText('Entities', ent.name) || ent.caption;
                                var newEnt = utils["a" /* utils */].assign(this.createEntity(), {
                                    id: ent.name,
                                    text: caption,
                                    items: [],
                                    isEntity: true,
                                    description: ent.description
                                });
                                var newOpts = utils["a" /* utils */].assign({}, opts);
                                newOpts.includeRootData = false;
                                newEnt.items = this.listByEntity(ent, newOpts, filterFunc);
                                if (newEnt.items.length > 0) {
                                    resultEntities.push(newEnt);
                                }
                            }
                        }
                    }
                    var attr = null;
                    if (entity.attributes) {
                        var attrCount = entity.attributes.length;
                        for (var attrIdx = 0; attrIdx < attrCount; attrIdx++) {
                            attr = entity.attributes[attrIdx];
                            if (!filterFunc || filterFunc(entity, attr)) {
                                caption = i18n["a" /* i18n */].getText('Attributes', attr.id) || attr.caption;
                                resultAttributes.push(utils["a" /* utils */].assign(this.createEntityAttr(entity), {
                                    id: attr.id, text: caption,
                                    dataType: attr.dataType, lookupAttr: attr.lookupAttr,
                                    description: attr.description
                                }));
                            }
                        }
                    }
                    var sortCheck = function (a, b) {
                        if (a.text.toLowerCase() == b.text.toLowerCase()) {
                            return 0;
                        }
                        if (a.text.toLowerCase() > b.text.toLowerCase()) {
                            return 1;
                        }
                        return -1;
                    };
                    if (opts.sortEntities) {
                        resultEntities.sort(sortCheck);
                        resultAttributes.sort(sortCheck);
                    }
                    var result;
                    if (!opts.attrPlacement || opts.attrPlacement == 0) {
                        result = resultEntities.concat(resultAttributes);
                    }
                    else {
                        result = resultAttributes.concat(resultEntities);
                    }
                    if (opts.attrPlacement == 2) {
                        result.sort(sortCheck);
                    }
                    if (opts.includeRootData) {
                        caption = i18n["a" /* i18n */].getText('Entities', entity.name);
                        if (!caption)
                            caption = entity.caption;
                        return { id: entity.name, text: caption, items: result };
                    }
                    else {
                        return result;
                    }
                };
                /**
                 * Clears data model.
                 */
                MetaData.prototype.clear = function () {
                    this.rootEntity = this.createEntity();
                    this.editors = [];
                    this.version = '';
                };
                /**
                 * Add default value editors.
                 */
                MetaData.prototype.addDefaultValueEditors = function () {
                    var ve;
                    ve = this.addOrUpdateValueEditor('_DTE', EditorTag.Edit, data_type["a" /* DataType */].String);
                    ve.defValue = '';
                    this.addOrUpdateValueEditor('_DPDE', EditorTag.DateTime, data_type["a" /* DataType */].DateTime);
                    this.addOrUpdateValueEditor('_DPTE', EditorTag.DateTime, data_type["a" /* DataType */].DateTime);
                };
                /**
                * Add or update a value editor.
                * @param id The id.
                * @param tag The tag.
                * @param resType The result type.
                * @returns The value editor.
                */
                MetaData.prototype.addOrUpdateValueEditor = function (id, tag, resType) {
                    var ve = utils["a" /* utils */].findItemById(this.editors, id);
                    if (!ve) {
                        ve = this.createValueEditor();
                        ve.id = id;
                        this.editors.push(ve);
                    }
                    ve.tag = tag;
                    ve.resType = resType;
                    return ve;
                };
                /**
                 * Gets entities tree.
                 * @param opts The options.
                 * @param filterFunc The filter function.
                 * Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).
                 * @returns The tree of the entities and their attributes according to options and the filter function
                 */
                MetaData.prototype.getEntitiesTree = function (opts, filterFunc) {
                    return this.listByEntity(this.getRootEntity(), opts, filterFunc);
                };
                /**
                 * Gets entities tree due to filter.
                 * @param filterFunc The filter function.
                 * Takes two parameters, Entity and EntityAttr (second parameter will be null for entities), and returns boolean (true if the corresponding entity or attribute).
                 * @returns The tree of the entities and their attributes according to the filter function
                 */
                MetaData.prototype.getEntitiesTreeWithFilter = function (filterFunc) {
                    return this.listByEntityWithFilter(this.getRootEntity(), filterFunc);
                };
                /**
                 * Finds full entity path by attribute
                 * @param attrId The attribute id.
                 * @param sep The separator.
                 * @returns The path.
                 */
                MetaData.prototype.getFullEntityPathByAttr = function (attrId, sep) {
                    sep = sep || ' ';
                    return this.getEntityPathByAttr(this.getRootEntity(), attrId, sep, true);
                };
                /**
                * Finds entity path by attribute
                * @param entity The entity.
                * @param attrId The attribute id.
                * @param sep The separator.
                * @param root The root option.
                * @returns The path.
                */
                MetaData.prototype.getEntityPathByAttr = function (entity, attrId, sep, root) {
                    if (!entity)
                        return '';
                    sep = sep || ' ';
                    var entityCaption = '';
                    if (entity.caption && !root) {
                        var entityText = i18n["a" /* i18n */].getText('Entities', entity.caption);
                        entityCaption = entityText ? entityText : entity.caption;
                    }
                    if (entity.attributes) {
                        var attrCount = entity.attributes.length;
                        for (var i = 0; i < attrCount; i++) {
                            if (entity.attributes[i].id == attrId) {
                                return entityCaption;
                            }
                        }
                    }
                    if (entity.subEntities) {
                        var subEntityCount = entity.subEntities.length;
                        for (var i = 0; i < subEntityCount; i++) {
                            var ent = entity.subEntities[i];
                            var res = this.getEntityPathByAttr(ent, attrId, sep, false);
                            if (res !== '') {
                                if (entityCaption !== '')
                                    res = entityCaption + sep + res;
                                return res;
                            }
                        }
                    }
                    return '';
                };
                /**
                 * Gets the attribute text.
                 * @param attr The attribute.
                 * @param format The format.
                 * @returns Formatted text.
                 */
                MetaData.prototype.getAttributeText = function (attr, format) {
                    var attrText = i18n["a" /* i18n */].getText('Attributes', attr.id);
                    if (!attrText) {
                        attrText = attr.caption;
                    }
                    if (!format) {
                        return attrText;
                    }
                    var result = '';
                    var entityPath = this.getFullEntityPathByAttr(attr.id, ' ');
                    if (entityPath) {
                        result = format.replace(new RegExp('{attr}', 'g'), attrText);
                        result = result.replace(new RegExp('{entity}', 'g'), entityPath);
                    }
                    else {
                        result = attrText;
                    }
                    return result.trim();
                };
                /**
                 * Scans model's entity tree and calls the callback functions for each attribute and entity.
                 * @param processAttribute The callback function which is called for each attribute in model's entity tree.
                 * The processed attribute is passed in the first function parameter.
                 * @param processEntity The callback function which is called for each entity in tree.
                 * The processed entity is passed in the first function parameter.
                 */
                MetaData.prototype.runThroughEntities = function (processAttribute, processEntity) {
                    this.getRootEntity().scan(processAttribute, processEntity);
                };
                /**
                 * Finds first attribute by filter.
                 * @param filterFunc The filter function. Takes EntityAttr object in parameter and returns boolean
                 */
                MetaData.prototype.getFirstAttributeByFilter = function (filterFunc) {
                    var res = null;
                    this.runThroughEntities(function (attr, opts) {
                        if (filterFunc(attr)) {
                            opts.stop = true;
                            res = attr;
                        }
                    }, null);
                    return res;
                };
                return MetaData;
            }());

            //# sourceMappingURL=meta_data.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/data/aggr_settings.js
            var __assign = (undefined && undefined.__assign) || function () {
                __assign = Object.assign || function (t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            /**
             * Defines aggregations settings for the current context.
             * Group, aggregate columns, grand totals, etc.
             */
            var AggregationSettings = /** @class */ (function () {
                function AggregationSettings(colStore) {
                    this.colStore = colStore;
                    this.aggregates = [];
                    this.groups = [];
                    this.useGrandTotals = false;
                    this.useRecordCount = false;
                    this._caseSensitiveGroups = false;
                    this.COUNT_FIELD_NAME = 'GRPRECCNT';
                }
                Object.defineProperty(AggregationSettings.prototype, "caseSensitiveGroups", {
                    get: function () {
                        return this._caseSensitiveGroups;
                    },
                    set: function (value) {
                        this._caseSensitiveGroups = value;
                        this.updateCompareProc();
                    },
                    enumerable: true,
                    configurable: true
                });
                AggregationSettings.prototype.updateCompareProc = function () {
                    this.compareValues = this._caseSensitiveGroups
                        ? this.strictCompare
                        : this.caseInsensitiveCompare;
                };
                AggregationSettings.prototype.addGroup = function (settings) {
                    var cols = settings.columns || this.colStore.getColumnIds(settings.from, settings.to);
                    if (!this.colStore.validateColumns(cols))
                        throw "Invalid columns: " + cols;
                    if (this.hasColumnsInUse(cols))
                        throw "Can't add same columns to different groups/aggregates";
                    this.groups.push(__assign({ columns: cols }, settings));
                    return this;
                };
                AggregationSettings.prototype.addAggregateColumn = function (colIndexOrId, funcId) {
                    var colId = typeof colIndexOrId == 'string'
                        ? colIndexOrId
                        : this.colStore.getColumnIds(colIndexOrId, colIndexOrId)[0];
                    if (this.hasColumnsInUse([colId]) || !this.colStore.validateAggregate(colId, funcId))
                        throw 'Invalid aggregation function for the column: ' + colId;
                    this.aggregates.push({ colId: colId, funcId: funcId });
                    return this;
                };
                AggregationSettings.prototype.addGrandTotals = function () {
                    this.useGrandTotals = true;
                    return this;
                };
                AggregationSettings.prototype.addCounts = function () {
                    this.useRecordCount = true;
                    return this;
                };
                AggregationSettings.prototype.getGroups = function () {
                    var _this = this;
                    var cols = [];
                    var mappedGrops = this.groups.map(function (grp) {
                        cols = cols.concat(grp.columns);
                        return __assign(__assign({}, grp), { columns: Array.from(cols), aggregates: Array.from(_this.aggregates) });
                    });
                    return mappedGrops;
                };
                AggregationSettings.prototype.getInternalGroups = function () {
                    return this.groups;
                };
                AggregationSettings.prototype.lastGroup = function () {
                    var groups = this.getGroups();
                    return groups[groups.length - 1];
                };
                AggregationSettings.prototype.getAggregates = function () {
                    return this.aggregates;
                };
                AggregationSettings.prototype.hasAggregates = function () {
                    return this.aggregates.length > 0;
                };
                AggregationSettings.prototype.hasGroups = function () {
                    return this.groups.length > 0;
                };
                AggregationSettings.prototype.hasGrandTotals = function () {
                    return this.useGrandTotals;
                };
                AggregationSettings.prototype.hasRecordCount = function () {
                    return this.useRecordCount;
                };
                AggregationSettings.prototype.isEmpty = function () {
                    return !(this.hasAggregates() || this.hasGroups() ||
                        this.hasAggregates() || this.hasRecordCount());
                };
                AggregationSettings.prototype.drop = function () {
                    console.warn('"drop()" method is obsolete. Use "clear()" instead');
                    this.clear();
                };
                AggregationSettings.prototype.clear = function () {
                    this.groups = [];
                    this.aggregates = [];
                    this.useGrandTotals = false;
                    this.useRecordCount = false;
                    this.caseSensitiveGroups = false;
                    return this;
                };
                /**
                 * Checks if all columns from the list passed in the parameter are "unused".
                 * Here "unused column" means a column that is included neither in any group nor in the aggregates list.
                 * @param cols - the array of column IDs
                 * @returns true if all columns in the list are not used anywhere, othervise - fals
                 */
                AggregationSettings.prototype.hasColumnsInUse = function (cols) {
                    for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
                        var group = _a[_i];
                        var interCols = group.columns
                            .filter(function (c) { return cols.indexOf(c) >= 0; });
                        if (interCols.length > 0)
                            return true;
                    }
                    for (var _b = 0, _c = this.aggregates; _b < _c.length; _b++) {
                        var aggr = _c[_b];
                        if (cols.indexOf(aggr.colId) >= 0)
                            return true;
                    }
                    return false;
                };
                AggregationSettings.prototype.needAggrCalculation = function () {
                    return (this.hasAggregates() || this.hasRecordCount())
                        && (this.hasGrandTotals() || this.hasGroups());
                };
                AggregationSettings.prototype.saveToData = function () {
                    return {
                        groups: Array.from(this.groups),
                        ugt: this.useGrandTotals,
                        urc: this.useRecordCount,
                        csg: this.caseSensitiveGroups,
                        aggregates: Array.from(this.aggregates)
                    };
                };
                AggregationSettings.prototype.loadFromData = function (data) {
                    if (data) {
                        if (typeof data.ugt !== 'undefined')
                            this.useGrandTotals = data.ugt;
                        if (typeof data.urc !== 'undefined')
                            this.useRecordCount = data.urc;
                        if (typeof data.csg !== 'undefined')
                            this.caseSensitiveGroups = data.csg;
                        if (data.groups) {
                            this.groups = Array.from(data.groups);
                        }
                        if (data.aggregates) {
                            this.aggregates = Array.from(data.aggregates);
                        }
                    }
                };
                AggregationSettings.prototype.buildGroupKey = function (group, row) {
                    var caseInsensitive = !this.caseSensitiveGroups;
                    var result = {};
                    if (group) {
                        for (var _i = 0, _a = group.columns; _i < _a.length; _i++) {
                            var colId = _a[_i];
                            var keyVal = row.getValue(colId);
                            if (caseInsensitive && typeof (keyVal) === 'string') {
                                keyVal = keyVal.toLowerCase();
                            }
                            result[colId] = keyVal;
                        }
                    }
                    return result;
                };
                //returns true if value1 == value2
                AggregationSettings.prototype.strictCompare = function (value1, value2) {
                    return value1 === value2;
                };
                //makes a case insensative comparision of two values and return true if there are equal
                AggregationSettings.prototype.caseInsensitiveCompare = function (value1, value2) {
                    var val1 = (typeof value1 === 'string') ? value1.toLowerCase() : value1;
                    var val2 = (typeof value2 === 'string') ? value2.toLowerCase() : value2;
                    return val1 === val2;
                };
                return AggregationSettings;
            }());

            //# sourceMappingURL=aggr_settings.js.map
            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/data/data_column.js
            var data_column = __webpack_require__(17);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/data/data_row.js
            var data_row = __webpack_require__(15);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/data/easy_data_table.js
            var easy_data_table = __webpack_require__(28);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/utils/easy_guid.js
            /**
             * EasyData representation of GUID.
             */
            var EasyGuid = /** @class */ (function () {
                function EasyGuid() {
                }
                /**
                 * Generates new GUID.
                 * @returns The string representation of GUID.
                 */
                EasyGuid.newGuid = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                };
                return EasyGuid;
            }());

            //# sourceMappingURL=easy_guid.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/event/event_emitter.js

            /**
             * The representation of event emitter.
             */
            var event_emitter_EventEmitter = /** @class */ (function () {
                /**
                 * The default constructor.
                 * @param source The source.
                 */
                function EventEmitter(source) {
                    this.silentMode = 0;
                    this.events = new Array();
                    this.source = source;
                }
                /**
                 * Subscries to the event.
                 * @param eventType The event type.
                 * @param callback The callback.
                 * @returns The subscribtion ID.
                 */
                EventEmitter.prototype.subscribe = function (eventType, callback) {
                    var event = this.getEventRecByType(eventType);
                    var eventCallback = {
                        id: EasyGuid.newGuid(),
                        callback: callback
                    };
                    if (event) {
                        event.eventCallbacks.push(eventCallback);
                    }
                    else {
                        event = {
                            type: eventType,
                            eventCallbacks: new Array(eventCallback)
                        };
                        this.events.push(event);
                    }
                    return eventCallback.id;
                };
                /**
                 * Unsubsribes from the event.
                 * @param eventType The event type.
                 * @param callbackId The subscribtion ID.
                 */
                EventEmitter.prototype.unsubscribe = function (eventType, callbackId) {
                    var event = this.getEventRecByType(eventType);
                    if (event) {
                        var index = -1;
                        for (index = 0; index < event.eventCallbacks.length; index++) {
                            if (event.eventCallbacks[index].id === callbackId) {
                                break;
                            }
                        }
                        if (index >= 0) {
                            event.eventCallbacks.splice(index, 1);
                        }
                    }
                };
                /**
                 * Fires the event.
                 * @param eventType The event type.
                 * @param data The event data.
                 * @param postpone  The postpone.
                 * @param force To fire force. If value is `true`, ignores silent mode.
                 */
                EventEmitter.prototype.fire = function (eventType, data, postpone, force) {
                    if (postpone === void 0) { postpone = 0; }
                    if (force === void 0) { force = false; }
                    if (this.silentMode && !force) {
                        return;
                    }
                    var eventRec = this.getEventRecByType(eventType);
                    if (eventRec) {
                        var eqevent_1 = {
                            type: eventType,
                            source: this.source,
                            data: data
                        };
                        var emitAllFunc = function () {
                            for (var _i = 0, _a = eventRec.eventCallbacks; _i < _a.length; _i++) {
                                var callback = _a[_i];
                                callback.callback(eqevent_1);
                            }
                        };
                        if (postpone > 0) {
                            setTimeout(emitAllFunc, postpone);
                        }
                        else {
                            emitAllFunc();
                        }
                    }
                };
                /**
                 * Enters to silent mode.
                 */
                EventEmitter.prototype.enterSilentMode = function () {
                    this.silentMode++;
                };
                /**
                 * Exits from silent mode.
                 */
                EventEmitter.prototype.exitSilentMode = function () {
                    if (this.silentMode) {
                        this.silentMode--;
                    }
                };
                /**
                 * Checks if emitter is in silent mode.
                 * @return `true`, if silent mode is enable.
                 */
                EventEmitter.prototype.isSilent = function () {
                    return this.silentMode > 0;
                };
                EventEmitter.prototype.getEventRecByType = function (eventType) {
                    for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                        var event_1 = _a[_i];
                        if (event_1.type == eventType) {
                            return event_1;
                        }
                    }
                    return null;
                };
                return EventEmitter;
            }());

            //# sourceMappingURL=event_emitter.js.map
            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/utils/string_utils.js
            var string_utils = __webpack_require__(14);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/utils/liquid.js
            var liquid;
            (function (liquid) {
                function renderLiquidTemplate(template, vars) {
                    var result = template;
                    if (vars) {
                        for (var v in vars) {
                            var liquidVarRegexp = new RegExp('\{\{' + v + '\}\}', 'g');
                            result = result.replace(liquidVarRegexp, vars[v]);
                        }
                    }
                    return result;
                }
                liquid.renderLiquidTemplate = renderLiquidTemplate;
            })(liquid || (liquid = {}));
            //# sourceMappingURL=liquid.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/i18n/load_default_locale_settings.js

            i18n["a" /* i18n */].resetLocales();
            //# sourceMappingURL=load_default_locale_settings.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/public_api.js
            //types



            //http



            //meta data







            //event

            //i18n

            //utils





            if (typeof Object.values !== 'function') {
                Object.values = function (obj) {
                    return Object.keys(obj).map(function (key) { return obj[key]; });
                };
            }
            if (typeof Math.trunc !== 'function') {
                Math.trunc = function (x) {
                    if (isNaN(x)) {
                        return NaN;
                    }
                    if (x > 0) {
                        return Math.floor(x);
                    }
                    return Math.ceil(x);
                };
            }
            //# sourceMappingURL=public_api.js.map

            /***/
        }),
/* 1 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DomElementBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return DomTextAreaElementBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return DomInputElementBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return DomSelectElementBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () { return domel; });
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
            var __extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            };

            var DomElementBuilder = /** @class */ (function () {
                function DomElementBuilder(tag, parent) {
                    if (typeof tag === "string") {
                        this.element = document.createElement(tag);
                    }
                    else {
                        this.element = tag;
                    }
                    if (parent && this.element.parentElement !== parent) {
                        parent.appendChild(this.element);
                    }
                }
                DomElementBuilder.prototype.addChild = function (tag, childBuilder) {
                    var builder = domel(tag, this.element);
                    if (childBuilder) {
                        childBuilder(builder);
                    }
                    return this;
                };
                DomElementBuilder.prototype.addChildElement = function (element) {
                    if (element) {
                        this.element.appendChild(element);
                    }
                    return this;
                };
                DomElementBuilder.prototype.attr = function (attrId, attrValue) {
                    this.element.setAttribute(attrId, attrValue);
                    return this;
                };
                DomElementBuilder.prototype.id = function (value) {
                    return this.attr("id", value);
                };
                DomElementBuilder.prototype.focus = function () {
                    this.element.focus();
                    return this;
                };
                DomElementBuilder.prototype.title = function (value) {
                    return this.attr('title', value);
                };
                DomElementBuilder.prototype.data = function (dataId, dataValue) {
                    if (dataValue === void 0) { dataValue = null; }
                    if (dataValue === null) {
                        this.element.removeAttribute('data-' + dataId);
                        return this;
                    }
                    else {
                        return this.attr('data-' + dataId, dataValue);
                    }
                };
                DomElementBuilder.prototype.show = function () {
                    return this.removeStyle('display');
                };
                DomElementBuilder.prototype.hide = function (toHide) {
                    if (toHide === void 0) { toHide = true; }
                    return (toHide) ? this.setStyle('display', 'none') : this;
                };
                DomElementBuilder.prototype.visible = function (isVisible) {
                    if (isVisible === void 0) { isVisible = true; }
                    return isVisible ? this.setStyle('visibility', 'visible') : this.setStyle('visibility', 'hidden');
                };
                DomElementBuilder.prototype.isVisible = function () {
                    return !!(this.element.offsetWidth || this.element.offsetHeight || this.element.getClientRects().length);
                };
                DomElementBuilder.prototype.addClass = function (className) {
                    var classNames = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        classNames[_i - 1] = arguments[_i];
                    }
                    if (className) {
                        var fullList = __spreadArrays(className.trim().split(" "), classNames);
                        for (var i = 0; i < fullList.length; i++)
                            this.element.classList.add(fullList[i]);
                    }
                    return this;
                };
                DomElementBuilder.prototype.removeClass = function (className) {
                    var classNames = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        classNames[_i - 1] = arguments[_i];
                    }
                    if (className) {
                        var fullList = __spreadArrays(className.trim().split(" "), classNames);
                        for (var i = 0; i < fullList.length; i++)
                            this.element.classList.remove(fullList[i]);
                    }
                    return this;
                };
                DomElementBuilder.prototype.toggleClass = function (className, force) {
                    if (force === void 0) { force = undefined; }
                    if (className) {
                        this.element.classList.toggle(className, force);
                    }
                    return this;
                };
                DomElementBuilder.prototype.on = function (eventType, listener) {
                    var eventTypes = eventType.split(' ');
                    for (var i = 0; i < eventTypes.length; i++) {
                        this.element.addEventListener(eventTypes[i], listener);
                    }
                    return this;
                };
                DomElementBuilder.prototype.off = function (eventType, listener) {
                    var eventTypes = eventType.split(' ');
                    for (var i = 0; i < eventTypes.length; i++) {
                        this.element.removeEventListener(eventTypes[i], listener);
                    }
                    return this;
                };
                DomElementBuilder.prototype.setStyle = function (styleId, styleValue) {
                    this.element.style.setProperty(styleId, styleValue);
                    return this;
                };
                DomElementBuilder.prototype.removeStyle = function (styleId) {
                    this.element.style.removeProperty(styleId);
                    return this;
                };
                DomElementBuilder.prototype.text = function (text) {
                    this.element.innerText = text;
                    return this;
                };
                DomElementBuilder.prototype.html = function (html) {
                    this.element.innerHTML = html;
                    return this;
                };
                DomElementBuilder.prototype.clear = function () {
                    var oldElem = this.element;
                    this.element = document.createElement(this.element.tagName);
                    oldElem.replaceWith(this.element);
                };
                DomElementBuilder.prototype.addText = function (text) {
                    var textEl = document.createTextNode(text);
                    this.element.appendChild(textEl);
                    return this;
                };
                DomElementBuilder.prototype.addHtml = function (html) {
                    this.element.innerHTML += html;
                    return this;
                };
                DomElementBuilder.prototype.toDOM = function () {
                    return this.element;
                };
                DomElementBuilder.prototype.appendTo = function (parent) {
                    if (parent) {
                        parent.appendChild(this.element);
                    }
                    return this;
                };
                return DomElementBuilder;
            }());

            var DomTextAreaElementBuilder = /** @class */ (function (_super) {
                __extends(DomTextAreaElementBuilder, _super);
                function DomTextAreaElementBuilder(element, parent) {
                    var _this = this;
                    if (element) {
                        _this = _super.call(this, element, parent) || this;
                    }
                    else {
                        _this = _super.call(this, "textarea", parent) || this;
                    }
                    return _this;
                }
                DomTextAreaElementBuilder.prototype.name = function (value) {
                    this.element.name = value;
                    return this;
                };
                DomTextAreaElementBuilder.prototype.rows = function (rows) {
                    this.element.rows = rows;
                    return this;
                };
                DomTextAreaElementBuilder.prototype.cols = function (cols) {
                    this.element.cols = cols;
                    return this;
                };
                DomTextAreaElementBuilder.prototype.value = function (value) {
                    this.element.value = value;
                    return this;
                };
                return DomTextAreaElementBuilder;
            }(DomElementBuilder));

            var DomInputElementBuilder = /** @class */ (function (_super) {
                __extends(DomInputElementBuilder, _super);
                function DomInputElementBuilder(element, parent) {
                    var _this = this;
                    if (element) {
                        _this = _super.call(this, element, parent) || this;
                    }
                    else {
                        _this = _super.call(this, "input", parent) || this;
                    }
                    return _this;
                }
                DomInputElementBuilder.prototype.name = function (value) {
                    this.element.name = value;
                    return this;
                };
                DomInputElementBuilder.prototype.type = function (value) {
                    this.element.type = value;
                    return this;
                };
                DomInputElementBuilder.prototype.size = function (value) {
                    this.element.size = value;
                    return this;
                };
                DomInputElementBuilder.prototype.value = function (value) {
                    if (value instanceof Date) {
                        this.element.valueAsDate = value;
                    }
                    else if (typeof value === "number") {
                        this.element.valueAsNumber = value;
                    }
                    else {
                        this.element.value = value;
                    }
                    return this;
                };
                DomInputElementBuilder.prototype.mask = function (maskPattern) {
                    Object(_mask__WEBPACK_IMPORTED_MODULE_0__[/* mask */ "a"])(this.element, maskPattern);
                    return this;
                };
                return DomInputElementBuilder;
            }(DomElementBuilder));

            var DomSelectElementBuilder = /** @class */ (function (_super) {
                __extends(DomSelectElementBuilder, _super);
                function DomSelectElementBuilder(element, parent) {
                    var _this = this;
                    if (element) {
                        _this = _super.call(this, element, parent) || this;
                    }
                    else {
                        _this = _super.call(this, "select", parent) || this;
                    }
                    return _this;
                }
                DomSelectElementBuilder.prototype.addOption = function (value) {
                    var option = document.createElement('option');
                    if (typeof value === "string") {
                        option.value = value;
                        option.innerHTML = value;
                    }
                    else {
                        option.value = value.value;
                        option.innerHTML = value.title || value.value;
                        option.selected = value.selected || false;
                    }
                    this.element.appendChild(option);
                    return this;
                };
                DomSelectElementBuilder.prototype.value = function (value) {
                    this.element.value = value;
                    return this;
                };
                return DomSelectElementBuilder;
            }(DomElementBuilder));

            function domel(tag, parent) {
                if (tag === "div" || tag instanceof HTMLDivElement) {
                    return new DomElementBuilder(tag, parent);
                }
                if (tag === "span" || tag instanceof HTMLSpanElement) {
                    return new DomElementBuilder(tag, parent);
                }
                else if (tag === "a" || tag instanceof HTMLAnchorElement) {
                    return new DomElementBuilder(tag, parent);
                }
                else if (tag === "button" || tag instanceof HTMLButtonElement) {
                    return new DomElementBuilder(tag, parent);
                }
                else if (tag === "img" || tag instanceof HTMLImageElement) {
                    return new DomElementBuilder(tag, parent);
                }
                else if (tag === "input" || tag instanceof HTMLInputElement) {
                    return new DomInputElementBuilder(tag instanceof HTMLInputElement ? tag : null, parent);
                }
                else if (tag === "textarea" || tag instanceof HTMLTextAreaElement) {
                    return new DomTextAreaElementBuilder(tag instanceof HTMLTextAreaElement ? tag : null, parent);
                }
                else if (tag === "select" || tag instanceof HTMLSelectElement) {
                    return new DomSelectElementBuilder(tag instanceof HTMLSelectElement ? tag : null, parent);
                }
                return new DomElementBuilder(tag, parent);
            }
            //# sourceMappingURL=dom_elem_builder.js.map

            /***/
        }),
/* 2 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DataType; });
            /** Represents the common types of the data. */
            var DataType;
            (function (DataType) {
                /** Unknown type value*/
                DataType[DataType["Unknown"] = 0] = "Unknown";
                /** String value*/
                DataType[DataType["String"] = 1] = "String";
                /** 8-bit integer value */
                DataType[DataType["Byte"] = 2] = "Byte";
                /** 16-bit integer value */
                DataType[DataType["Word"] = 3] = "Word";
                /** 32-bit integer value */
                DataType[DataType["Int32"] = 4] = "Int32";
                /** 64-bit integer value */
                DataType[DataType["Int64"] = 5] = "Int64";
                /** Boolean value */
                DataType[DataType["Bool"] = 6] = "Bool";
                /** Floating-point numeric value */
                DataType[DataType["Float"] = 7] = "Float";
                /** Money value */
                DataType[DataType["Currency"] = 8] = "Currency";
                /** Binary-coded decimal value */
                DataType[DataType["BCD"] = 9] = "BCD";
                /** Date value */
                DataType[DataType["Date"] = 10] = "Date";
                /** Time value */
                DataType[DataType["Time"] = 11] = "Time";
                /** Date and time value */
                DataType[DataType["DateTime"] = 12] = "DateTime";
                /** Autoincrement 32-bit integer value */
                DataType[DataType["Autoinc"] = 13] = "Autoinc";
                /** MEMO value (text with unlimited length) */
                DataType[DataType["Memo"] = 14] = "Memo";
                /** BLOB value (any data with unlimited length) */
                DataType[DataType["Blob"] = 15] = "Blob";
                /** Fixed character value */
                DataType[DataType["FixedChar"] = 16] = "FixedChar";
                /** The unique identifier */
                DataType[DataType["Guid"] = 17] = "Guid";
                /*-------- Spatial data types ----------*/
                /** Any geometry data */
                DataType[DataType["Geometry"] = 18] = "Geometry";
                /** Any data that represents some geography objects</summary> */
                DataType[DataType["Geography"] = 19] = "Geography";
            })(DataType || (DataType = {}));
            //# sourceMappingURL=data_type.js.map

            /***/
        }),
/* 3 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);

            // EXPORTS
            __webpack_require__.d(__webpack_exports__, "EasyGrid", function () { return /* reexport */ easy_grid["a" /* EasyGrid */]; });
            __webpack_require__.d(__webpack_exports__, "AutoResizeColumns", function () { return /* reexport */ easy_grid_options["a" /* AutoResizeColumns */]; });
            __webpack_require__.d(__webpack_exports__, "GridColumnAlign", function () { return /* reexport */ easy_grid_columns["b" /* GridColumnAlign */]; });
            __webpack_require__.d(__webpack_exports__, "GridColumn", function () { return /* reexport */ easy_grid_columns["a" /* GridColumn */]; });
            __webpack_require__.d(__webpack_exports__, "GridColumnList", function () { return /* reexport */ easy_grid_columns["c" /* GridColumnList */]; });
            __webpack_require__.d(__webpack_exports__, "DFMT_REGEX", function () { return /* reexport */ easy_grid_cell_renderer["b" /* DFMT_REGEX */]; });
            __webpack_require__.d(__webpack_exports__, "CellRendererType", function () { return /* reexport */ easy_grid_cell_renderer["a" /* CellRendererType */]; });
            __webpack_require__.d(__webpack_exports__, "GridCellRendererStore", function () { return /* reexport */ easy_grid_cell_renderer["c" /* GridCellRendererStore */]; });
            __webpack_require__.d(__webpack_exports__, "Calendar", function () { return /* reexport */ Calendar; });
            __webpack_require__.d(__webpack_exports__, "DateTimePicker", function () { return /* reexport */ date_time_picker_DateTimePicker; });
            __webpack_require__.d(__webpack_exports__, "DefaultCalendar", function () { return /* reexport */ default_calendar_DefaultCalendar; });
            __webpack_require__.d(__webpack_exports__, "DefaultDateTimePicker", function () { return /* reexport */ default_date_time_picker_DefaultDateTimePicker; });
            __webpack_require__.d(__webpack_exports__, "DefaultTimePicker", function () { return /* reexport */ default_time_picker_DefaultTimePicker; });
            __webpack_require__.d(__webpack_exports__, "TimePicker", function () { return /* reexport */ TimePicker; });
            __webpack_require__.d(__webpack_exports__, "browserUtils", function () { return /* reexport */ browser_utils["a" /* browserUtils */]; });
            __webpack_require__.d(__webpack_exports__, "DomElementBuilder", function () { return /* reexport */ dom_elem_builder["a" /* DomElementBuilder */]; });
            __webpack_require__.d(__webpack_exports__, "DomTextAreaElementBuilder", function () { return /* reexport */ dom_elem_builder["d" /* DomTextAreaElementBuilder */]; });
            __webpack_require__.d(__webpack_exports__, "DomInputElementBuilder", function () { return /* reexport */ dom_elem_builder["b" /* DomInputElementBuilder */]; });
            __webpack_require__.d(__webpack_exports__, "DomSelectElementBuilder", function () { return /* reexport */ dom_elem_builder["c" /* DomSelectElementBuilder */]; });
            __webpack_require__.d(__webpack_exports__, "domel", function () { return /* reexport */ dom_elem_builder["e" /* domel */]; });
            __webpack_require__.d(__webpack_exports__, "DropEffect", function () { return /* reexport */ drag_manager["b" /* DropEffect */]; });
            __webpack_require__.d(__webpack_exports__, "EqDragEvent", function () { return /* reexport */ drag_manager["c" /* EqDragEvent */]; });
            __webpack_require__.d(__webpack_exports__, "DragManager", function () { return /* reexport */ drag_manager["a" /* DragManager */]; });
            __webpack_require__.d(__webpack_exports__, "eqDragManager", function () { return /* reexport */ drag_manager["d" /* eqDragManager */]; });
            __webpack_require__.d(__webpack_exports__, "mask", function () { return /* reexport */ mask["a" /* mask */]; });
            __webpack_require__.d(__webpack_exports__, "wrapInner", function () { return /* reexport */ ui_utils["q" /* wrapInner */]; });
            __webpack_require__.d(__webpack_exports__, "addElement", function () { return /* reexport */ ui_utils["b" /* addElement */]; });
            __webpack_require__.d(__webpack_exports__, "addCssClass", function () { return /* reexport */ ui_utils["a" /* addCssClass */]; });
            __webpack_require__.d(__webpack_exports__, "hideElement", function () { return /* reexport */ ui_utils["k" /* hideElement */]; });
            __webpack_require__.d(__webpack_exports__, "showElement", function () { return /* reexport */ ui_utils["m" /* showElement */]; });
            __webpack_require__.d(__webpack_exports__, "toggleVisibility", function () { return /* reexport */ ui_utils["p" /* toggleVisibility */]; });
            __webpack_require__.d(__webpack_exports__, "isVisible", function () { return /* reexport */ ui_utils["l" /* isVisible */]; });
            __webpack_require__.d(__webpack_exports__, "createBrowserEvent", function () { return /* reexport */ ui_utils["c" /* createBrowserEvent */]; });
            __webpack_require__.d(__webpack_exports__, "getViewportSize", function () { return /* reexport */ ui_utils["i" /* getViewportSize */]; });
            __webpack_require__.d(__webpack_exports__, "getDocSize", function () { return /* reexport */ ui_utils["f" /* getDocSize */]; });
            __webpack_require__.d(__webpack_exports__, "getScrollPos", function () { return /* reexport */ ui_utils["h" /* getScrollPos */]; });
            __webpack_require__.d(__webpack_exports__, "getElementAbsolutePos", function () { return /* reexport */ ui_utils["g" /* getElementAbsolutePos */]; });
            __webpack_require__.d(__webpack_exports__, "getWinSize", function () { return /* reexport */ ui_utils["j" /* getWinSize */]; });
            __webpack_require__.d(__webpack_exports__, "slideDown", function () { return /* reexport */ ui_utils["n" /* slideDown */]; });
            __webpack_require__.d(__webpack_exports__, "slideUp", function () { return /* reexport */ ui_utils["o" /* slideUp */]; });
            __webpack_require__.d(__webpack_exports__, "eqCssPrefix", function () { return /* reexport */ ui_utils["e" /* eqCssPrefix */]; });
            __webpack_require__.d(__webpack_exports__, "eqCssMobile", function () { return /* reexport */ ui_utils["d" /* eqCssMobile */]; });
            __webpack_require__.d(__webpack_exports__, "DefaultDialogService", function () { return /* reexport */ default_dialog_service["b" /* DefaultDialogService */]; });
            __webpack_require__.d(__webpack_exports__, "DefaultDialog", function () { return /* reexport */ default_dialog_service["a" /* DefaultDialog */]; });
            __webpack_require__.d(__webpack_exports__, "DefaultProgressDialog", function () { return /* reexport */ default_dialog_service["d" /* DefaultProgressDialog */]; });
            __webpack_require__.d(__webpack_exports__, "DefaultDialogSet", function () { return /* reexport */ default_dialog_service["c" /* DefaultDialogSet */]; });
            __webpack_require__.d(__webpack_exports__, "DialogFooterAlignment", function () { return /* reexport */ dialog_service["a" /* DialogFooterAlignment */]; });
            __webpack_require__.d(__webpack_exports__, "dialogs", function () { return /* binding */ dialogs; });

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/grid/easy_grid.js
            var easy_grid = __webpack_require__(29);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/grid/easy_grid_options.js
            var easy_grid_options = __webpack_require__(10);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/grid/easy_grid_columns.js
            var easy_grid_columns = __webpack_require__(8);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/grid/easy_grid_cell_renderer.js
            var easy_grid_cell_renderer = __webpack_require__(13);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/datetimepicker/calendar.js
            var Calendar = /** @class */ (function () {
                function Calendar(slot, options) {
                    this.slot = slot;
                    this.options = options || {};
                    if (!this.options.yearRange) {
                        this.options.yearRange = 'c-10:c+10';
                    }
                }
                Object.defineProperty(Calendar.prototype, "cssPrefix", {
                    get: function () {
                        return 'kdtp-cal';
                    },
                    enumerable: true,
                    configurable: true
                });
                Calendar.prototype.setDate = function (date) {
                    this.currentDate = new Date(date);
                };
                Calendar.prototype.getDate = function () {
                    return new Date(this.currentDate);
                };
                Calendar.prototype.dateChanged = function (apply) {
                    if (this.options.onDateChanged) {
                        this.options.onDateChanged(this.currentDate, apply);
                    }
                };
                return Calendar;
            }());

            //# sourceMappingURL=calendar.js.map
            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/utils/ui-utils.js
            var ui_utils = __webpack_require__(6);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/datetimepicker/date_time_picker.js

            var date_time_picker_DateTimePicker = /** @class */ (function () {
                function DateTimePicker(options) {
                    this.calendar = null;
                    this.timePicker = null;
                    this.options = options;
                    this.render();
                }
                Object.defineProperty(DateTimePicker.prototype, "cssPrefix", {
                    get: function () {
                        return 'kdtp';
                    },
                    enumerable: true,
                    configurable: true
                });
                DateTimePicker.prototype.setDateTime = function (dateTime) {
                    this.currentDateTime = new Date(dateTime);
                    if (this.calendar) {
                        this.calendar.setDate(this.currentDateTime);
                    }
                    if (this.timePicker) {
                        this.timePicker.setTime(this.currentDateTime);
                    }
                };
                DateTimePicker.prototype.getDateTime = function () {
                    return new Date(this.currentDateTime);
                };
                DateTimePicker.prototype.render = function () {
                    var _this = this;
                    if (this.options.showCalendar) {
                        this.calendar = this.createCalendar({
                            yearRange: this.options.yearRange,
                            showDateTimeInput: this.options.showDateTimeInput,
                            timePickerIsUsed: this.options.showTimePicker,
                            oneClickDateSelection: this.options.oneClickDateSelection,
                            onDateChanged: function (date, apply) {
                                _this.currentDateTime = date;
                                if (_this.timePicker) {
                                    _this.timePicker.setTime(_this.currentDateTime);
                                }
                                if (_this.options.showTimePicker) {
                                    _this.dateTimeChanged();
                                }
                                if (apply) {
                                    _this.apply(_this.currentDateTime);
                                }
                            }
                        });
                        if (this.calendar)
                            this.calendar.render();
                    }
                    if (this.options.showTimePicker) {
                        this.timePicker = this.createTimePicker({
                            onTimeChanged: function (time) {
                                _this.currentDateTime.setHours(time.getHours());
                                _this.currentDateTime.setMinutes(time.getMinutes());
                                if (_this.calendar) {
                                    _this.calendar.setDate(_this.currentDateTime);
                                }
                                _this.dateTimeChanged();
                            }
                        });
                        if (this.timePicker)
                            this.timePicker.render();
                    }
                    this.setDateTime(new Date());
                };
                DateTimePicker.prototype.createCalendar = function (options) {
                    return null;
                };
                DateTimePicker.prototype.createTimePicker = function (options) {
                    return null;
                };
                DateTimePicker.prototype.show = function (anchor) {
                    if (this.options.beforeShow) {
                        this.options.beforeShow();
                    }
                    var pos = Object(ui_utils["g" /* getElementAbsolutePos */])(anchor || document.body);
                    this.slot.style.top = pos.y + anchor.clientHeight + 'px';
                    this.slot.style.left = pos.x + 'px';
                };
                DateTimePicker.prototype.apply = function (date) {
                    if (this.options.onApply) {
                        this.options.onApply(date);
                    }
                    this.destroy();
                };
                DateTimePicker.prototype.cancel = function () {
                    if (this.options.onCancel) {
                        this.options.onCancel();
                    }
                    this.destroy();
                };
                DateTimePicker.prototype.destroy = function () {
                    if (this.slot && this.slot.parentElement) {
                        this.slot.parentElement.removeChild(this.slot);
                    }
                };
                DateTimePicker.prototype.dateTimeChanged = function () {
                    if (this.options.onDateTimeChanged) {
                        this.options.onDateTimeChanged(this.currentDateTime);
                    }
                };
                return DateTimePicker;
            }());

            //# sourceMappingURL=date_time_picker.js.map
            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/public_api.js + 10 modules
            var public_api = __webpack_require__(0);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/utils/dom_elem_builder.js
            var dom_elem_builder = __webpack_require__(1);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/datetimepicker/default_calendar.js
            var __extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();



            var default_calendar_DefaultCalendar = /** @class */ (function (_super) {
                __extends(DefaultCalendar, _super);
                function DefaultCalendar(slot, options) {
                    var _this = _super.call(this, slot, options) || this;
                    _this.daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    _this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    _this.calendarBody = null;
                    _this.isManualInputChanging = false;
                    for (var i = 0; i < _this.daysOfWeek.length; i++) {
                        _this.daysOfWeek[i] = public_api["i18n"].getShortWeekDayName(i + 1);
                    }
                    for (var i = 0; i < _this.months.length; i++) {
                        _this.months[i] = public_api["i18n"].getLongMonthName(i + 1);
                    }
                    return _this;
                }
                DefaultCalendar.prototype.setDate = function (date) {
                    _super.prototype.setDate.call(this, date);
                    this.selectedMonth = this.currentDate.getMonth();
                    this.selectedYear = this.currentDate.getFullYear();
                    this.rerenderMonth();
                };
                DefaultCalendar.prototype.render = function () {
                    var _this = this;
                    var header = Object(dom_elem_builder["e" /* domel */])('div', this.slot)
                        .addClass(this.cssPrefix + "-header");
                    if (this.options.showDateTimeInput) {
                        header
                            .addChildElement(this.renderManualDateInput());
                    }
                    else {
                        header
                            .addChild('span', function (builder) { return _this.headerTextElem = builder.toDOM(); });
                    }
                    Object(dom_elem_builder["e" /* domel */])(this.slot)
                        .addChildElement(this.renderCalendarButtons());
                    this.calendarBody = Object(dom_elem_builder["e" /* domel */])('div', this.slot)
                        .addClass(this.cssPrefix + "-body")
                        .toDOM();
                };
                DefaultCalendar.prototype.getInputDateFormat = function () {
                    var settings = public_api["i18n"].getLocaleSettings();
                    return (this.options.timePickerIsUsed)
                        ? settings.editDateFormat + " " + settings.editTimeFormat
                        : settings.editDateFormat;
                };
                DefaultCalendar.prototype.renderManualDateInput = function () {
                    var _this = this;
                    var format = this.getInputDateFormat();
                    var builder = Object(dom_elem_builder["e" /* domel */])('input')
                        .attr('placeholder', format)
                        .addClass(this.cssPrefix + "-header-input");
                    builder
                        .mask(format.replace('yyyy', '9999')
                            .replace('MM', '99')
                            .replace('dd', '99')
                            .replace('HH', '99')
                            .replace('mm', '99')
                            .replace('ss', '99'))
                        .on('input', function (ev) {
                            builder.removeClass('error');
                            try {
                                _this.isManualInputChanging = true;
                                var newDate = public_api["utils"].strToDateTime(_this.manualInputElem.value, format);
                                _this.currentDate = newDate;
                                _this.jump(_this.currentDate.getFullYear(), _this.currentDate.getMonth());
                                _this.dateChanged(false);
                            }
                            catch (e) {
                                builder.addClass('error');
                            }
                            finally {
                                _this.isManualInputChanging = false;
                            }
                        })
                        .on('keydown', function (ev) {
                            if (ev.keyCode === 13) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                if (_this.manualInputElem.className.indexOf('error') < 0
                                    && !_this.isManualInputChanging)
                                    _this.dateChanged(true);
                            }
                        })
                        .on('focus', function () {
                            setTimeout(function () {
                                _this.manualInputElem.selectionStart = 0;
                                _this.manualInputElem.selectionEnd = 0;
                            }, 50);
                        });
                    this.manualInputElem = builder.toDOM();
                    return this.manualInputElem;
                };
                DefaultCalendar.prototype.updateDisplayedDateValue = function () {
                    if (this.manualInputElem) {
                        if (!this.isManualInputChanging) {
                            var format = this.getInputDateFormat();
                            this.manualInputElem.value = public_api["utils"].dateTimeToStr(this.currentDate, format);
                            this.manualInputElem.focus();
                        }
                    }
                    else if (this.headerTextElem) {
                        var locale = public_api["i18n"].getCurrentLocale();
                        this.headerTextElem.innerText = this.currentDate.toLocaleString(locale == 'en' ? undefined : locale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        });
                    }
                };
                DefaultCalendar.prototype.renderCalendarButtons = function () {
                    var _this = this;
                    var builder = Object(dom_elem_builder["e" /* domel */])('nav')
                        .addClass(this.cssPrefix + "-nav")
                        .addChild('div', function (builder) {
                            return builder
                                .addClass(_this.cssPrefix + "-nav-prev")
                                .on('click', function () {
                                    _this.prev();
                                })
                                .addChild('span', function (builder) { return builder.html('&lsaquo;'); });
                        })
                        .addChild('div', function (builder) {
                            return builder
                                .addClass(_this.cssPrefix + "-nav-selectors")
                                .addChild('div', function (builder) {
                                    return builder
                                        .addClass(_this.cssPrefix + "-nav-month")
                                        .addChild('select', function (builder) {
                                            builder
                                                .on('change', function () {
                                                    _this.jump(_this.selectedYear, parseInt(_this.selectMonthElem.value));
                                                });
                                            var _loop_1 = function (i) {
                                                builder.addChild('option', function (builder) {
                                                    return builder
                                                        .attr('value', i.toString())
                                                        .text(_this.months[i]);
                                                });
                                            };
                                            for (var i = 0; i < _this.months.length; i++) {
                                                _loop_1(i);
                                            }
                                            _this.selectMonthElem = builder.toDOM();
                                        });
                                })
                                .addChild('div', function (builder) {
                                    return builder
                                        .addClass(_this.cssPrefix + "-nav-year")
                                        .addChild('select', function (builder) {
                                            return _this.selectYearElem = builder
                                                .on('change', function () {
                                                    _this.jump(parseInt(_this.selectYearElem.value), _this.selectedMonth);
                                                })
                                                .toDOM();
                                        });
                                });
                        })
                        .addChild('div', function (builder) {
                            return builder
                                .addClass(_this.cssPrefix + "-nav-next")
                                .on('click', function () {
                                    _this.next();
                                })
                                .addChild('span', function (builder) { return builder.html('&rsaquo;'); });
                        });
                    return builder.toDOM();
                };
                DefaultCalendar.prototype.prev = function () {
                    this.selectedYear = (this.selectedMonth === 0) ? this.selectedYear - 1 : this.selectedYear;
                    this.selectedMonth = (this.selectedMonth === 0) ? 11 : this.selectedMonth - 1;
                    this.rerenderMonth();
                };
                DefaultCalendar.prototype.next = function () {
                    this.selectedYear = (this.selectedMonth === 11) ? this.selectedYear + 1 : this.selectedYear;
                    this.selectedMonth = (this.selectedMonth + 1) % 12;
                    this.rerenderMonth();
                };
                DefaultCalendar.prototype.rerenderSelectYear = function () {
                    var match = /c-(\d*):c\+(\d*)/g.exec(this.options.yearRange);
                    var minusYear = 0;
                    var plusYear = 1;
                    if (match !== null) {
                        minusYear = parseInt(match[1]);
                        plusYear = parseInt(match[2]);
                    }
                    this.selectYearElem.innerHTML = '';
                    for (var i = 0; i <= minusYear + plusYear; i++) {
                        var op = document.createElement("option");
                        var year = this.selectedYear - minusYear + i;
                        op.value = year.toString();
                        op.innerText = year.toString();
                        this.selectYearElem.appendChild(op);
                    }
                };
                DefaultCalendar.prototype.jump = function (year, month) {
                    this.selectedYear = year;
                    this.selectedMonth = month;
                    this.rerenderMonth();
                };
                DefaultCalendar.prototype.rerenderMonth = function () {
                    var _this = this;
                    //header text
                    this.updateDisplayedDateValue();
                    this.rerenderSelectYear();
                    var firstDay = (new Date(this.selectedYear, this.selectedMonth)).getDay();
                    var daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
                    this.calendarBody.innerHTML = "";
                    this.selectYearElem.value = this.selectedYear.toString();
                    this.selectMonthElem.value = this.selectedMonth.toString();
                    this.daysOfWeek.forEach(function (day, idx) {
                        Object(dom_elem_builder["e" /* domel */])('div', _this.calendarBody)
                            .addClass(_this.cssPrefix + "-weekday")
                            .addClass(idx == 0 || idx == 6 ? _this.cssPrefix + "-weekend" : '')
                            .text(day);
                    });
                    // Add empty cells before first day
                    for (var i = 0; i < firstDay; i++) {
                        Object(dom_elem_builder["e" /* domel */])('div', this.calendarBody)
                            .addClass(this.cssPrefix + "-day-empty");
                    }
                    // Add all month days
                    var today = new Date();
                    for (var day = 1; day <= daysInMonth; day++) {
                        var builder = Object(dom_elem_builder["e" /* domel */])('div', this.calendarBody)
                            .addClass(this.cssPrefix + "-day")
                            .attr('data-date', day.toString())
                            .text(day.toString())
                            .on('click', function (e) {
                                _this.currentDate.setFullYear(_this.selectedYear);
                                _this.currentDate.setMonth(_this.selectedMonth);
                                _this.currentDate.setDate(parseInt(e.target.getAttribute('data-date')));
                                _this.dateChanged(_this.options.oneClickDateSelection);
                            });
                        if (day === today.getDate() && this.selectedYear === today.getFullYear() && this.selectedMonth === today.getMonth()) {
                            builder.addClass(this.cssPrefix + "-day-current");
                        }
                        if (day === this.currentDate.getDate() && this.selectedYear === this.currentDate.getFullYear() && this.selectedMonth === this.currentDate.getMonth()) {
                            builder.addClass(this.cssPrefix + "-day-selected");
                        }
                        var dayOfWeek = (firstDay + day - 1) % 7;
                        if (dayOfWeek == 0 || dayOfWeek == 6) {
                            builder.addClass(this.cssPrefix + "-weekend");
                        }
                    }
                    // Add empty cells after last day
                    var cellsDrawnInLastRow = (firstDay + daysInMonth) % 7;
                    var cellsToDraw = cellsDrawnInLastRow == 0 ? 0 : 7 - cellsDrawnInLastRow;
                    for (var i = 0; i < cellsToDraw; i++) {
                        Object(dom_elem_builder["e" /* domel */])('div', this.calendarBody)
                            .addClass(this.cssPrefix + "-day-empty");
                    }
                };
                DefaultCalendar.prototype.dateChanged = function (apply) {
                    _super.prototype.dateChanged.call(this, apply);
                    this.rerenderMonth();
                };
                return DefaultCalendar;
            }(Calendar));

            //# sourceMappingURL=default_calendar.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/datetimepicker/time_picker.js
            var TimePicker = /** @class */ (function () {
                function TimePicker(slot, options) {
                    this.slot = slot;
                    this.options = options || {};
                }
                Object.defineProperty(TimePicker.prototype, "cssPrefix", {
                    get: function () {
                        return 'kdtp-tp';
                    },
                    enumerable: true,
                    configurable: true
                });
                TimePicker.prototype.setTime = function (time) {
                    this.currentTime = new Date(time);
                };
                TimePicker.prototype.getTime = function () {
                    return new Date(this.currentTime);
                };
                TimePicker.prototype.timeChanged = function () {
                    if (this.options.onTimeChanged) {
                        this.options.onTimeChanged(this.currentTime);
                    }
                };
                return TimePicker;
            }());

            //# sourceMappingURL=time_picker.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/datetimepicker/default_time_picker.js
            var default_time_picker_extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();



            var default_time_picker_DefaultTimePicker = /** @class */ (function (_super) {
                default_time_picker_extends(DefaultTimePicker, _super);
                function DefaultTimePicker() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DefaultTimePicker.prototype.setTime = function (time) {
                    _super.prototype.setTime.call(this, time);
                    this.updateDisplayedTime();
                    this.hoursInput.valueAsNumber = time.getHours();
                    this.minutesInput.valueAsNumber = time.getMinutes();
                };
                DefaultTimePicker.prototype.render = function () {
                    var _this = this;
                    Object(dom_elem_builder["e" /* domel */])('div', this.slot)
                        .addClass(this.cssPrefix + "-time")
                        .addChild('span', function (builder) { return _this.timeText = builder.toDOM(); })
                        .toDOM();
                    var slidersBuilder = Object(dom_elem_builder["e" /* domel */])('div', this.slot)
                        .addClass(this.cssPrefix + "-sliders");
                    slidersBuilder
                        .addChild('div', function (builder) {
                            return builder
                                .addClass(_this.cssPrefix + "-time-row")
                                .title('Hours')
                                .addChild('input', function (builder) {
                                    return _this.hoursInput = builder
                                        .addClass(_this.cssPrefix + "-input-hours")
                                        .type('range')
                                        .attr('min', '0')
                                        .attr('max', '23')
                                        .attr('step', '1')
                                        .on('input', function (e) {
                                            _this.currentTime.setHours(_this.hoursInput.valueAsNumber);
                                            _this.updateDisplayedTime();
                                            _this.timeChanged();
                                        })
                                        .toDOM();
                                });
                        });
                    slidersBuilder
                        .addChild('div', function (builder) {
                            return builder
                                .addClass(_this.cssPrefix + "-time-row")
                                .title('Minutes')
                                .addChild('input', function (builder) {
                                    return _this.minutesInput = builder
                                        .addClass(_this.cssPrefix + "-input-minutes")
                                        .type('range')
                                        .attr('min', '0')
                                        .attr('max', '59')
                                        .attr('step', '1')
                                        .on('input', function (e) {
                                            _this.currentTime.setMinutes(_this.minutesInput.valueAsNumber);
                                            _this.updateDisplayedTime();
                                            _this.timeChanged();
                                        })
                                        .toDOM();
                                });
                        });
                    return this.slot;
                };
                DefaultTimePicker.prototype.updateDisplayedTime = function () {
                    var locale = public_api["i18n"].getCurrentLocale();
                    var timeToDraw = this.currentTime.toLocaleString(locale == 'en' ? undefined : locale, {
                        hour: "numeric",
                        minute: "numeric"
                    });
                    this.timeText.innerText = timeToDraw;
                };
                return DefaultTimePicker;
            }(TimePicker));

            //# sourceMappingURL=default_time_picker.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/datetimepicker/default_date_time_picker.js
            var default_date_time_picker_extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();






            var default_date_time_picker_DefaultDateTimePicker = /** @class */ (function (_super) {
                default_date_time_picker_extends(DefaultDateTimePicker, _super);
                function DefaultDateTimePicker() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DefaultDateTimePicker.prototype.render = function () {
                    var _this = this;
                    var sb = Object(dom_elem_builder["e" /* domel */])('div', document.body)
                        .addClass("" + this.cssPrefix)
                        .attr('tabIndex', '0')
                        .setStyle('position', 'absolute')
                        .setStyle('top', '-1000px')
                        .setStyle('left', '-1000px')
                        .on('keydown', function (ev) {
                            if (ev.keyCode === 27) { // ESC is pressed
                                _this.cancel();
                            }
                            else if (ev.keyCode === 13) { // Enter is pressed
                                _this.apply(_this.getDateTime());
                            }
                            return false;
                        });
                    if (this.options.zIndex) {
                        sb.setStyle('z-index', "" + this.options.zIndex);
                    }
                    this.slot = sb.toDOM();
                    _super.prototype.render.call(this);
                    this.renderButtons();
                    this.globalMouseDownHandler = function (e) {
                        var event = window.event || e;
                        var o = event.srcElement || event.target;
                        var isOutside = !_this.slot.contains(event.target);
                        if (isOutside) {
                            document.removeEventListener('mousedown', _this.globalMouseDownHandler, true);
                            _this.cancel();
                        }
                        return true;
                    };
                };
                DefaultDateTimePicker.prototype.renderButtons = function () {
                    var _this = this;
                    var builder = Object(dom_elem_builder["e" /* domel */])('div', this.slot)
                        .addClass(this.cssPrefix + "-buttons")
                        .addChild('button', function (b) {
                            return _this.nowButton = b
                                .addClass(_this.cssPrefix + "-button " + _this.cssPrefix + "-button-now")
                                .text(public_api["i18n"].getText('ButtonNow'))
                                .on('click', function () {
                                    _this.setDateTime(new Date());
                                    _this.dateTimeChanged();
                                    return false;
                                })
                                .toDOM();
                        });
                    if (this.options.showTimePicker || !this.options.oneClickDateSelection) {
                        builder.addChild('button', function (b) {
                            return _this.submitButton = b
                                .addClass(_this.cssPrefix + "-button " + _this.cssPrefix + "-button-apply")
                                .text(public_api["i18n"].getText('ButtonApply'))
                                .on('click', function () {
                                    _this.apply(_this.getDateTime());
                                    return false;
                                })
                                .toDOM();
                        });
                    }
                    builder.addChild('button', function (b) {
                        return _this.submitButton = b
                            .addClass(_this.cssPrefix + "-button " + _this.cssPrefix + "-button-cancel")
                            .text(public_api["i18n"].getText('ButtonCancel'))
                            .on('click', function () {
                                _this.cancel();
                                return false;
                            })
                            .toDOM();
                    });
                };
                DefaultDateTimePicker.prototype.createCalendar = function (options) {
                    this.calendarSlot =
                        Object(dom_elem_builder["e" /* domel */])('div', this.slot)
                            .addClass(this.cssPrefix + "-cal")
                            .toDOM();
                    return new default_calendar_DefaultCalendar(this.calendarSlot, options);
                };
                DefaultDateTimePicker.prototype.createTimePicker = function (options) {
                    this.timePickerSlot =
                        Object(dom_elem_builder["e" /* domel */])('div', this.slot)
                            .addClass(this.cssPrefix + "-tp")
                            .toDOM();
                    return new default_time_picker_DefaultTimePicker(this.timePickerSlot, options);
                };
                DefaultDateTimePicker.prototype.show = function (anchor) {
                    var _this = this;
                    if (this.options.showDateTimeInput) {
                        if (this.options.beforeShow) {
                            this.options.beforeShow();
                        }
                        var anchorPos = Object(ui_utils["g" /* getElementAbsolutePos */])(anchor || document.body);
                        var parentPos = Object(ui_utils["g" /* getElementAbsolutePos */])(anchor ? anchor.parentElement || anchor : document.body);
                        this.slot.style.top = parentPos.y + 'px';
                        this.slot.style.left = anchorPos.x + 'px';
                    }
                    else {
                        _super.prototype.show.call(this, anchor);
                        this.slot.focus();
                    }
                    setTimeout(function () {
                        document.addEventListener('mousedown', _this.globalMouseDownHandler, true);
                    }, 1);
                };
                return DefaultDateTimePicker;
            }(date_time_picker_DateTimePicker));

            //# sourceMappingURL=default_date_time_picker.js.map
            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/utils/browser_utils.js
            var browser_utils = __webpack_require__(18);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/utils/drag_manager.js
            var drag_manager = __webpack_require__(12);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/utils/mask.js
            var mask = __webpack_require__(19);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/dialogs/default_dialog_service.js
            var default_dialog_service = __webpack_require__(20);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/dialogs/dialog_service.js
            var dialog_service = __webpack_require__(21);

            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/i18n/text_resources.js

            function addEasyDataUITexts() {
                public_api["i18n"].updateDefaultTexts({
                    GridPageInfo: '{FirstPageRecordNum} - {LastPageRecordNum} of {Total} records',
                    GridItemsPerPage: 'items per page',
                    ButtonOK: "OK",
                    ButtonCancel: "Cancel",
                    ButtonApply: 'Apply',
                    ButtonNow: 'Now',
                    LblTotal: 'Total'
                });
            }
            addEasyDataUITexts();
            //# sourceMappingURL=text_resources.js.map
            // CONCATENATED MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/public_api.js
            // grid




            //datetimepicker






            // utils





            //dialogs




            // export dialogs to use outside of context as global
            var dialogs = new default_dialog_service["b" /* DefaultDialogService */]();

            //# sourceMappingURL=public_api.js.map

            /***/
        }),
/* 4 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return utils; });
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _types_data_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



            var utils;
            (function (utils) {
                function getAllDataTypes() {
                    return Object.values(_types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"]).filter(function (item) { return typeof item === "number"; });
                }
                utils.getAllDataTypes = getAllDataTypes;
                function getDateDataTypes() {
                    return [_types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Time, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Date, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].DateTime];
                }
                utils.getDateDataTypes = getDateDataTypes;
                function getStringDataTypes() {
                    return [_types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].String, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Memo, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].FixedChar];
                }
                utils.getStringDataTypes = getStringDataTypes;
                var _numericTypes = [_types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Byte, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Word, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Int32,
                _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Int64, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Float, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Currency, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Autoinc];
                function getNumericDataTypes() {
                    return _numericTypes;
                }
                utils.getNumericDataTypes = getNumericDataTypes;
                var _intTypes = [_types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Byte, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Word, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Int32, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Int64, _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Autoinc];
                //-------------- object functions -------------------
                /**
                 * Copy the content of all objests passed in `args` parameters into `target`
                 * and returns the result
                 * NB: This function copies only the first level properties.
                 * For a deep copy please use `assignDeep`
                 * @param target - the target object
                 * @param args  - an array of the source objects
                 */
                function assign(target) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    for (var i = 0; i < args.length; i++) {
                        var source = args[i];
                        if (source) {
                            for (var key in source) {
                                if (source.hasOwnProperty(key)) {
                                    target[key] = source[key];
                                }
                            }
                        }
                    }
                    return target;
                }
                utils.assign = assign;
                /**
                 * Copy the content of all objests passed in `args` parameters into `target`
                 * and returns the result
                 * NB: This function make a deep copy -
                 * so `assignDeep` will be called recursively for all object properties
                 * on the first level.
                 * @param target - the target object
                 * @param sources  - an array of the source objects
                 */
                function assignDeep(target) {
                    var sources = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        sources[_i - 1] = arguments[_i];
                    }
                    return assignDeepCore(new WeakMap(), target, sources);
                }
                utils.assignDeep = assignDeep;
                function assignDeepCore(hashSet, target, sources) {
                    if (!target) {
                        target = {};
                    }
                    for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                        var source = sources_1[_i];
                        if (source) {
                            for (var key in source) {
                                if (source.hasOwnProperty(key)) {
                                    var sourceVal = source[key];
                                    if (sourceVal !== null && typeof sourceVal === 'object') {
                                        if (hashSet.has(sourceVal)) {
                                            target[key] = hashSet.get(sourceVal);
                                        }
                                        else {
                                            if (Array.isArray(sourceVal)) {
                                                target[key] = createArrayFrom(sourceVal);
                                                hashSet.set(sourceVal, target[key]);
                                            }
                                            else {
                                                if (typeof target[key] == 'undefined' || target[key] == null) {
                                                    target[key] = Object.create(Object.getPrototypeOf(sourceVal));
                                                }
                                                hashSet.set(sourceVal, target[key]);
                                                assignDeepCore(hashSet, target[key], [sourceVal]);
                                            }
                                        }
                                    }
                                    else {
                                        target[key] = sourceVal;
                                    }
                                }
                            }
                        }
                    }
                    return target;
                }
                function getIfDefined(value, defaultValue) {
                    return (typeof value !== 'undefined') ? value : defaultValue;
                }
                utils.getIfDefined = getIfDefined;
                function IsDefinedAndNotNull(value) {
                    return typeof value !== 'undefined' && value !== null;
                }
                utils.IsDefinedAndNotNull = IsDefinedAndNotNull;
                function copyArrayTo(collection1, collection2) {
                    var len1 = collection1.length;
                    var len2 = collection2.length;
                    for (var i = 0; i < len1 && i < len2; i++) {
                        collection2[i] = collection1[i];
                    }
                }
                utils.copyArrayTo = copyArrayTo;
                function createArrayFrom(collection) {
                    var result = [];
                    for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
                        var item = collection_1[_i];
                        result.push(item);
                    }
                    return result;
                }
                utils.createArrayFrom = createArrayFrom;
                /**
                 * Searches an array of the objects which implement ItemWithId by ID
                 * Returs the found object or null.
                 * @param array
                 * @param id
                 */
                function findItemById(array, id) {
                    var arrLength = array.length;
                    for (var idx = 0; idx < arrLength; idx++) {
                        if (array[idx].id === id)
                            return array[idx];
                    }
                    return null;
                }
                utils.findItemById = findItemById;
                function findItemIndexById(array, id) {
                    var arrLength = array.length;
                    for (var idx = 0; idx < arrLength; idx++) {
                        if (array[idx].id === id)
                            return idx;
                    }
                    return -1;
                }
                utils.findItemIndexById = findItemIndexById;
                /**
                 * Searches an array of the objects which implement ItemWithId by ID
                 * Returs the index of the found element, or -1 if nothing was found.
                 * @param array
                 * @param id
                 */
                function indexOfArrayItem(arr, item) {
                    if (arr.indexOf) {
                        return arr.indexOf(item);
                    }
                    else {
                        var len = arr.length;
                        for (var i = 0; i < len; i++) {
                            if (item == arr[i]) {
                                return i;
                            }
                        }
                        return -1;
                    }
                }
                utils.indexOfArrayItem = indexOfArrayItem;
                /**
                 * Moves an item in some array to a new position
                 * @param array
                 * @param index1
                 * @param index2
                 */
                function moveArrayItem(array, index1, index2) {
                    if (index1 >= array.length) {
                        throw 'Index out of bounds: ' + index1;
                    }
                    if (index2 >= array.length) {
                        index2 = array.length - 1;
                    }
                    var item = array.splice(index1, 1)[0];
                    array.splice(index2, 0, item);
                }
                utils.moveArrayItem = moveArrayItem;
                /**
                 * Searches for a particular item in the array are removes that item if found.
                 * @param arr
                 * @param value
                 */
                function removeArrayItem(arr, value) {
                    var index = arr.indexOf(value);
                    if (index != -1) {
                        return arr.splice(index, 1)[0];
                    }
                }
                utils.removeArrayItem = removeArrayItem;
                function insertArrayItem(arr, index, value) {
                    arr.splice(index, 0, value);
                }
                utils.insertArrayItem = insertArrayItem;
                function fillArray(arr, value, start, end) {
                    if (start === void 0) { start = 0; }
                    var len = arr.length >>> 0;
                    var relativeStart = start >> 0;
                    var k = relativeStart < 0 ?
                        Math.max(len + relativeStart, 0) :
                        Math.min(relativeStart, len);
                    var relativeEnd = end === undefined ?
                        len : end >> 0;
                    var final = relativeEnd < 0 ?
                        Math.max(len + relativeEnd, 0) :
                        Math.min(relativeEnd, len);
                    while (k < final) {
                        arr[k] = value;
                        k++;
                    }
                    return arr;
                }
                utils.fillArray = fillArray;
                //------------ DOM utils ------------
                /**
                 * Calculates the shift on which we need to move our element horizontally
                 * to find current window
                 * @param absLeft
                 * @param width
                 */
                function shiftToFitWindow(absLeft, width) {
                    var body = document.getElementsByTagName('body')[0];
                    var winWidth = window.innerWidth || document.documentElement.clientWidth || body.clientWidth;
                    var absRight = absLeft + width;
                    var shift = 0;
                    if (absRight > winWidth) {
                        shift = winWidth - absRight - 10;
                        if (absLeft + shift < 0) {
                            shift = 10 - absLeft;
                        }
                    }
                    return shift;
                }
                utils.shiftToFitWindow = shiftToFitWindow;
                /**
                 * Returns `true` if the value passed in the parameter is an object
                 * @param val
                 */
                function isObject(val) {
                    if (val === null) {
                        return false;
                    }
                    return ((typeof val === 'function') || (typeof val === 'object'));
                }
                utils.isObject = isObject;
                /**
                 * Returns `true` if the `DataType` value passed in the parameter
                 * represents some numeric type
                 * @param dtype
                 */
                function isNumericType(dtype) {
                    var index = _numericTypes.indexOf(dtype);
                    return (index >= 0);
                }
                utils.isNumericType = isNumericType;
                /**
                 * Returns `true` if the `DataType` value passed in the parameter
                 * represents some numeric type
                 * @param dtype
                 */
                function isIntType(dtype) {
                    var index = _intTypes.indexOf(dtype);
                    return (index >= 0);
                }
                utils.isIntType = isIntType;
                /**
                 * Returns `true` if the value passed in the parameter is an a numeric value
                 * @param val
                 */
                function isNumeric(val) {
                    return !isNaN(parseFloat(val)) && isFinite(val);
                }
                utils.isNumeric = isNumeric;
                /**
                 * Returns `true` if two data types  passed in parameters
                 * are compatible - so it's safe to copy the values between
                 * two expressions with these two types
                 * @param type1
                 * @param type2
                 */
                function areCompatibleDataTypes(type1, type2) {
                    return typeof type1 == "undefined" || typeof type2 == "undefined" || type1 == _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Unknown || type2 == _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Unknown
                        || (type1 == type2) || (type1 == _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Date && type2 == _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].DateTime)
                        || (type1 == _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].DateTime && type2 == _types_data_type__WEBPACK_IMPORTED_MODULE_1__[/* DataType */ "a"].Date);
                }
                utils.areCompatibleDataTypes = areCompatibleDataTypes;
                /**
                 * Returns `true` if the property with named `propName`
                 * in the object `obj` has some value
                 * @param obj
                 * @param propName
                 */
                function isPropSet(obj, propName) {
                    return obj[propName] || obj[propName.toLowerCase()] || obj[propName.toUpperCase()];
                }
                utils.isPropSet = isPropSet;
                //-------------- ID generator -----------
                var prefixIdLen = 4;
                var symbols = "0123456789abcdefghijklmnopqrstuvwxyz";
                var magicTicks = 636712160627685350;
                /**
                 * Generates an unique ID
                 */
                function generateId(prefix) {
                    if (!prefix) {
                        prefix = 'easy';
                    }
                    var prfx = (prefix.length > prefixIdLen) ? squeezeMoniker(prefix, prefixIdLen) : prefix;
                    if (prfx && prfx.length > 0) {
                        prfx += "-";
                    }
                    //adding 2 random symbols
                    var randValue = _string_utils__WEBPACK_IMPORTED_MODULE_0__[/* repeatString */ "b"]("", 2);
                    ;
                    var maxSymbolIndex = symbols.length - 1;
                    randValue = replaceAtString(randValue, 0, symbols[getRandomInt(0, maxSymbolIndex)]);
                    randValue = replaceAtString(randValue, 1, symbols[getRandomInt(0, maxSymbolIndex)]);
                    //generating main ID part (64-base representation of the current value of the time ticks)
                    var ticksNum64 = intToNum36(getNowTicks() - magicTicks);
                    return prfx + randValue + ticksNum64;
                }
                utils.generateId = generateId;
                function intToNum36(value) {
                    var targetBase = 36;
                    var i = 14;
                    var buffer = _string_utils__WEBPACK_IMPORTED_MODULE_0__[/* repeatString */ "b"]("", i);
                    var rest = value;
                    do {
                        buffer = replaceAtString(buffer, i--, symbols[rest % targetBase]);
                        rest = Math.floor(rest /= targetBase);
                    } while (rest > 0);
                    return _string_utils__WEBPACK_IMPORTED_MODULE_0__[/* reverseString */ "c"](buffer.trim());
                }
                function squeezeMoniker(str, maxlen) {
                    var parts = str.split('-');
                    var pml = 1;
                    var ptt = maxlen;
                    if (parts.length < maxlen) {
                        pml = maxlen / parts.length;
                        ptt = parts.length;
                    }
                    var result = "";
                    for (var i = 0; i < ptt; i++) {
                        result += squeeze(parts[i], pml);
                    }
                    return result;
                }
                function squeeze(str, maxlen) {
                    var len = str.length;
                    if (len > maxlen) {
                        var step = len / maxlen;
                        var result = "";
                        result += str[0];
                        var nextIndex = step;
                        var ch = void 0;
                        for (var i = 1; i < len; i++) {
                            ch = str[i];
                            if (i + 1 > nextIndex) {
                                result += ch;
                                nextIndex += step;
                            }
                        }
                        return result;
                    }
                    else {
                        return str;
                    }
                }
                function replaceAtString(str, index, value) {
                    return str.substr(0, index) + value + str.substr(index + value.length);
                }
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                }
                function getNowTicks() {
                    return (621355968e9 + (new Date()).getTime() * 1e4);
                }
                function safeParseInt(str) {
                    var res = parseInt(str);
                    if (isNaN(res))
                        throw "\"" + str + "\" is not a valid number";
                    return res;
                }
                function getDaysInMonth(month, year) {
                    return new Date(year, month + 1, 0).getDate();
                }
                // ------------- date/time functions -------------------
                // TO DO: improve to process all datetime cases
                function strToDateTime(value, format) {
                    if (!value || value.length == 0)
                        return new Date();
                    var normalizedValue = value.replace(/[^a-zA-Z0-9_]/g, '-');
                    var normalizedFormat = format.replace(/[^a-zA-Z0-9_]/g, '-');
                    var formatItems = normalizedFormat.split('-');
                    var dateItems = normalizedValue.split('-');
                    var monthIndex = formatItems.indexOf("MM");
                    var dayIndex = formatItems.indexOf("dd");
                    var yearIndex = formatItems.indexOf("yyyy");
                    var hourIndex = formatItems.indexOf("HH");
                    var minutesIndex = formatItems.indexOf("mm");
                    var secondsIndex = formatItems.indexOf("ss");
                    var today = new Date();
                    try {
                        var year = yearIndex > -1 && yearIndex < dateItems.length
                            ? safeParseInt(dateItems[yearIndex])
                            : today.getFullYear();
                        var month = monthIndex > -1 && monthIndex < dateItems.length
                            ? safeParseInt(dateItems[monthIndex]) - 1
                            : today.getMonth() - 1;
                        if (month > 11)
                            throw '';
                        var day = dayIndex > -1 && dayIndex < dateItems.length
                            ? safeParseInt(dateItems[dayIndex])
                            : today.getDate();
                        if (day > getDaysInMonth(month, year))
                            throw '';
                        var hour = hourIndex > -1 && hourIndex < dateItems.length
                            ? safeParseInt(dateItems[hourIndex])
                            : 0;
                        if (hour > 23)
                            throw '';
                        var minute = minutesIndex > -1 && minutesIndex < dateItems.length
                            ? safeParseInt(dateItems[minutesIndex])
                            : 0;
                        if (minute > 59)
                            throw '';
                        var second = secondsIndex > -1 && secondsIndex < dateItems.length
                            ? safeParseInt(dateItems[secondsIndex])
                            : 0;
                        if (second > 59)
                            throw '';
                        return new Date(year, month, day, hour, minute, second);
                    }
                    catch (_a) {
                        throw value + " is not a valid date.";
                    }
                }
                utils.strToDateTime = strToDateTime;
                function strToTime(str) {
                    var timeItems = str.split(':');
                    try {
                        var hour = timeItems.length > 0 ? safeParseInt(timeItems[0]) : 0;
                        if (hour > 23)
                            throw '';
                        var minute = timeItems.length > 1 ? safeParseInt(timeItems[1]) : 0;
                        if (minute > 59)
                            throw '';
                        var second = timeItems.length > 1 ? safeParseInt(timeItems[1]) : 0;
                        if (second > 59)
                            throw '';
                        return new Date(0, 0, 0, hour, minute, second);
                    }
                    catch (_a) {
                        throw str + " is not a valid time.";
                    }
                }
                utils.strToTime = strToTime;
                var DT_FORMAT_RGEX = /\[([^\]]+)]|y{4}|M{1,4}|d{1,2}|H{1,2}|h{1,2}|m{2}|s{2}|t{2}/g;
                /**
                 * Returns string representation of the date/time value according to the custom format (second parameter)
                 * The format is compatible with the one used in .NET: https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings
                 * @param date
                 * @param format
                 */
                function dateTimeToStr(date, format) {
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var hour = date.getHours();
                    var minute = date.getMinutes();
                    var second = date.getSeconds();
                    var hour12 = hour % 12 || 12; //the remainder of the division by 12. Or 12 if it's 0
                    var isPm = hour > 11;
                    var matches = {
                        yyyy: year.toString(),
                        MMMM: _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "a"].getLongMonthName(month),
                        MMM: _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "a"].getShortMonthName(month),
                        MM: (month < 10) ? '0' + month : month.toString(),
                        M: month.toString(),
                        dd: (day < 10) ? '0' + day : day.toString(),
                        d: day.toString(),
                        HH: (hour < 10) ? '0' + hour : hour.toString(),
                        H: hour.toString(),
                        hh: (hour12 < 10) ? '0' + hour12 : hour12.toString(),
                        h: hour12.toString(),
                        tt: isPm ? 'PM' : 'AM',
                        mm: (minute < 10) ? '0' + minute : minute.toString(),
                        ss: (second < 10) ? '0' + second : second.toString()
                    };
                    return format.replace(DT_FORMAT_RGEX, function (match, $1) {
                        return $1 || matches[match];
                    });
                }
                utils.dateTimeToStr = dateTimeToStr;
                /**
                * Converts a numeric value to the string taking into the account the decimal separator
                * @param value - the number to convert
                * @param decimalSeparator - the symbol that represents decimal separator. If not specified the function gets the one from the current locale settings.
                */
                function numberToStr(number, decimalSeparator) {
                    decimalSeparator = decimalSeparator || _i18n_i18n__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "a"].getLocaleSettings().decimalSeparator;
                    return number.toString().replace('.', decimalSeparator);
                }
                utils.numberToStr = numberToStr;
            })(utils || (utils = {}));
            //# sourceMappingURL=utils.js.map

            /***/
        }),
/* 5 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return i18n; });
/* harmony import */ var _types_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


            /**
             * Contains internatialization functionality.
             */
            var i18n;
            (function (i18n) {
                var englishUSLocaleSettings = {
                    shortDateFormat: 'MM/dd/yyyy',
                    longDateFormat: 'dd MMM, yyyy',
                    editDateFormat: 'MM/dd/yyyy',
                    shortTimeFormat: 'HH:mm',
                    editTimeFormat: 'HH:mm',
                    longTimeFormat: 'HH:mm:ss',
                    shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    longMonthNames: ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'],
                    shortWeekDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    longWeekDayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    decimalSeparator: '.',
                    currency: 'USD'
                };
                var defaultLocale = {
                    localeId: 'en-US',
                    englishName: 'English',
                    displayName: 'English',
                    texts: {
                        ButtonOK: 'OK',
                        ButtonCancel: 'Cancel',
                        Yes: 'Yes',
                        No: 'No',
                        True: 'True',
                        False: 'False'
                    },
                    settings: englishUSLocaleSettings
                };
                var allLocales = {
                    'en-US': defaultLocale
                };
                var currentLocale;
                var mappers = [];
                function mapInfo(info) {
                    for (var _i = 0, mappers_1 = mappers; _i < mappers_1.length; _i++) {
                        var mapper = mappers_1[_i];
                        mapper(info);
                    }
                }
                function addMapper(mapper) {
                    mappers.push(mapper);
                }
                i18n.addMapper = addMapper;
                /**
                 * Gets added locales with their names.
                 * @returns  The locales.
                 */
                function getLocales() {
                    var result = [];
                    for (var locale in allLocales) {
                        result.push({
                            locale: locale,
                            englishName: allLocales[locale].englishName,
                            displayName: allLocales[locale].displayName
                        });
                    }
                    return result.sort(function (a, b) {
                        if (a.englishName > b.englishName) {
                            return 1;
                        }
                        else if (a.englishName === b.englishName) {
                            return 0;
                        }
                        return -1;
                    });
                }
                i18n.getLocales = getLocales;
                /**
                 * Gets the current locale ID.
                 * @returns The locale.
                 */
                function getCurrentLocale() {
                    return currentLocale.localeId;
                }
                i18n.getCurrentLocale = getCurrentLocale;
                /**
                * Sets the curent locale.
                * @deprecated Use setCurrentLocale instead
                * @param l The locale.
                */
                function setLocale(l) {
                    console.warn('This method is deprecated. Use setCurrentLocale instead');
                    setCurrentLocale(l);
                }
                i18n.setLocale = setLocale;
                /**
                 * Sets the curent locale.
                 * @param localeId The locale.
                 */
                function setCurrentLocale(localeId) {
                    var newLocale = allLocales[localeId];
                    if (newLocale) {
                        _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep(currentLocale, newLocale);
                    }
                    else {
                        currentLocale.englishName = localeId;
                        currentLocale.displayName = localeId;
                        currentLocale.texts = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep({}, defaultLocale.texts);
                    }
                    currentLocale.localeId = localeId;
                }
                i18n.setCurrentLocale = setCurrentLocale;
                /**
                 * Returns localized text by the key defined in parameter.
                 * Here we get the text of the resource string assigned to CmdClickToAddCondition key:
                 *
                 ```
                   const text = i18n.getText('CmdClickToAddCondition')
                 ```
                 * @param args The keys of the resource string.
                 * @returns Text of the resource defined by key or null if the key is not found
                 *
                 */
                function getText() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var textsObj = currentLocale.texts;
                    var resText = '';
                    if (args && args.length) {
                        var argLength = args.length;
                        for (var i = 0; i < argLength; i++) {
                            resText = textsObj[args[i]];
                            if (typeof resText === 'object') {
                                textsObj = resText;
                            }
                            else {
                                break;
                            }
                        }
                    }
                    return resText;
                }
                i18n.getText = getText;
                function getLocaleSettings() {
                    return currentLocale.settings;
                }
                i18n.getLocaleSettings = getLocaleSettings;
                function getOneLocaleSetting(key) {
                    return currentLocale.settings[key];
                }
                i18n.getOneLocaleSetting = getOneLocaleSetting;
                function getShortMonthName(monthNum) {
                    var settings = getLocaleSettings();
                    if (monthNum > 0 && monthNum < 13) {
                        return settings.shortMonthNames[monthNum - 1];
                    }
                    else {
                        throw 'Wrong month number: ' + monthNum;
                    }
                }
                i18n.getShortMonthName = getShortMonthName;
                function getLongMonthName(monthNum) {
                    var settings = getLocaleSettings();
                    if (monthNum > 0 && monthNum < 13) {
                        return settings.longMonthNames[monthNum - 1];
                    }
                    else {
                        throw 'Wrong month number: ' + monthNum;
                    }
                }
                i18n.getLongMonthName = getLongMonthName;
                function getShortWeekDayName(dayNum) {
                    var settings = getLocaleSettings();
                    if (dayNum > 0 && dayNum < 8) {
                        return settings.shortWeekDayNames.length >= dayNum
                            ? settings.shortWeekDayNames[dayNum - 1]
                            : dayNum.toString();
                    }
                    else {
                        throw 'Wrong month number: ' + dayNum;
                    }
                }
                i18n.getShortWeekDayName = getShortWeekDayName;
                function getLongWeekDayName(dayNum) {
                    var settings = getLocaleSettings();
                    if (dayNum > 0 && dayNum < 8) {
                        return settings.longWeekDayNames.length >= dayNum
                            ? settings.longWeekDayNames[dayNum - 1]
                            : dayNum.toString();
                    }
                    else {
                        throw 'Wrong month number: ' + dayNum;
                    }
                }
                i18n.getLongWeekDayName = getLongWeekDayName;
                /**
                 * Updates the locale settings (date/time formats, separators, etc) for the specified locale.
                 * @param settingsToUpdate a LocaleSettings object
                 */
                function updateLocaleSettings(settingsToUpdate) {
                    if (!currentLocale.settings) {
                        currentLocale.settings = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep({}, englishUSLocaleSettings);
                    }
                    currentLocale.settings = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep(currentLocale.settings, settingsToUpdate);
                }
                i18n.updateLocaleSettings = updateLocaleSettings;
                /**
                 * Updates the texts for the current locale
                 * @param texts A plain JS object that contains textual resources
                 */
                function updateLocaleTexts(texts) {
                    if (typeof texts !== 'object') {
                        console.error('Wrong parameter type in updateLocaleTexts function call.' +
                            'The first parameter (localeId) is not necessary. Use updateLocaleTexts(texts) instead');
                        return;
                    }
                    mapInfo({ localeId: currentLocale.localeId, texts: texts });
                    _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep(currentLocale.texts, texts);
                }
                i18n.updateLocaleTexts = updateLocaleTexts;
                function updateDefaultTexts(texts) {
                    for (var localeId in allLocales) {
                        var locale = allLocales[localeId];
                        locale.texts = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep({}, texts, locale.texts);
                    }
                    currentLocale.texts = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep({}, texts, currentLocale.texts);
                }
                i18n.updateDefaultTexts = updateDefaultTexts;
                /**
                 * Updates the information for the specified locale.
                 * @param localeId The locale ID (like 'en', 'de', 'uk', etc).
                 * If the locale does exist yet - it will be added
                 * @param localeInfo  a LocaleInfo object that contains the locale settings and textual resources
                 */
                function updateLocaleInfo(localeId, localeData) {
                    mapInfo(localeData);
                    var localeInfoToUpdate = currentLocale;
                    if (localeId) {
                        if (!localeData.localeId) {
                            localeData.localeId = localeId;
                        }
                        localeInfoToUpdate = allLocales[localeId];
                        if (!localeInfoToUpdate) {
                            localeInfoToUpdate = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep({}, defaultLocale);
                            allLocales[localeId] = localeInfoToUpdate;
                        }
                    }
                    _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep(localeInfoToUpdate, localeData);
                }
                i18n.updateLocaleInfo = updateLocaleInfo;
                /**
                 * Adds the locale.
                 * @param localeId The locale ID (like 'en', 'de', 'uk', etc).
                 * If the locale does exist yet - it will be created
                 * @param localeInfo - a LocaleInfo object that contains the locale settings and textual resources
                 */
                function addLocale(localeId, localeInfo) {
                    updateLocaleInfo(localeId, localeInfo);
                }
                i18n.addLocale = addLocale;
                /**
                 * Overwrites some locale settings (date/time formats) with the formats used in browser's current language
                 */
                function determineSettingsByLocale(localeId) {
                    var now = new Date(2020, 5, 7, 19, 34, 56, 88);
                    var dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
                    var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
                    var dateStr = now.toLocaleDateString(localeId, dateOptions);
                    var timeStr = now.toLocaleTimeString(localeId, timeOptions);
                    var dateFormat = dateStr
                        .replace('07', 'dd')
                        .replace('7', 'd')
                        .replace('06', 'MM')
                        .replace('6', 'M')
                        .replace('2020', 'yyyy')
                        .replace('20', 'yy');
                    var timeFormat = timeStr
                        .replace('19', 'HH')
                        .replace('07', 'hh')
                        .replace('7', 'h')
                        .replace('34', 'mm')
                        .replace('56', 'ss')
                        .replace('PM', 'tt');
                    if (!currentLocale.settings) {
                        currentLocale.settings = {};
                    }
                    var localeSettings = {
                        shortDateFormat: dateFormat,
                        shortTimeFormat: timeFormat
                    };
                    updateLocaleSettings(localeSettings);
                }
                function loadBrowserLocaleSettings() {
                    var lang = typeof navigator === 'object' ? navigator.language : undefined;
                    determineSettingsByLocale(lang);
                }
                function resetLocales() {
                    if (!currentLocale) {
                        currentLocale = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].assignDeep({}, defaultLocale);
                        loadBrowserLocaleSettings();
                    }
                }
                i18n.resetLocales = resetLocales;
                function dateTimeToStr(dateTime, dataType, format) {
                    if (format) {
                        if (format == 'd') {
                            format = buildShortDateTimeFormat(_types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Date);
                        }
                        else if (format == 'D') {
                            format = buildLongDateTimeFormat(_types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Date);
                        }
                        else if (format == 'f') {
                            format = buildShortDateTimeFormat(_types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].DateTime);
                        }
                        else if (format == 'F') {
                            format = buildLongDateTimeFormat(_types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].DateTime);
                        }
                    }
                    else {
                        format = buildShortDateTimeFormat(dataType);
                    }
                    return _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].dateTimeToStr(dateTime, format);
                }
                i18n.dateTimeToStr = dateTimeToStr;
                function buildShortDateTimeFormat(dataType) {
                    var localeSettings = getLocaleSettings();
                    var format;
                    switch (dataType) {
                        case _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Date:
                            format = localeSettings.shortDateFormat;
                            break;
                        case _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Time:
                            format = localeSettings.shortTimeFormat;
                            break;
                        default:
                            format = localeSettings.shortDateFormat + ' ' + localeSettings.shortTimeFormat;
                            break;
                    }
                    return format;
                }
                function buildLongDateTimeFormat(dataType) {
                    var localeSettings = getLocaleSettings();
                    var format;
                    switch (dataType) {
                        case _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Date:
                            format = localeSettings.longDateFormat;
                            break;
                        case _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Time:
                            format = localeSettings.longTimeFormat;
                            break;
                        default:
                            format = localeSettings.longDateFormat + ' ' + localeSettings.longTimeFormat;
                            break;
                    }
                    return format;
                }
                function numberToStr(number, format) {
                    if (format && format.length > 0) {
                        var type = format.charAt(0).toUpperCase();
                        if (type === 'S') {
                            return formatWithSequence(number, format.slice(1));
                        }
                        else if (['D', 'F', 'C'].indexOf(type) >= 0) {
                            var locale = getCurrentLocale();
                            return number.toLocaleString(locale, getNumberFromatOptions(format));
                        }
                        else {
                            return convertWithMask(Math.trunc(number), format);
                        }
                    }
                    var localeSettings = getLocaleSettings();
                    return _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].numberToStr(number, localeSettings.decimalSeparator);
                }
                i18n.numberToStr = numberToStr;
                function booleanToStr(bool, format) {
                    if (format && format.length > 0) {
                        var type = format.charAt(0).toUpperCase();
                        if (type === 'S') {
                            var values = format.slice(1).split('|');
                            if (values.length > 1) {
                                var value = values[(bool) ? 1 : 0];
                                return i18n.getText(value) || value;
                            }
                        }
                    }
                    return "" + bool;
                }
                i18n.booleanToStr = booleanToStr;
                var cachedSequenceFormats = {};
                function formatWithSequence(number, format) {
                    if (!cachedSequenceFormats[format]) {
                        // parse and save in cache format values 
                        var values_2 = format.split('|')
                            .filter(function (v) { return v.length > 0; })
                            .map(function (v) { return v.split('='); });
                        cachedSequenceFormats[format] = {};
                        if (values_2.length > 0) {
                            if (values_2[0].length > 1) {
                                for (var _i = 0, values_1 = values_2; _i < values_1.length; _i++) {
                                    var value = values_1[_i];
                                    cachedSequenceFormats[format][Number.parseInt(value[1])] = value[0];
                                }
                            }
                            else {
                                values_2.forEach(function (value, index) {
                                    cachedSequenceFormats[format][index] = value[0];
                                });
                            }
                        }
                    }
                    var values = cachedSequenceFormats[format];
                    if (values[number] !== undefined) {
                        var value = values[number];
                        return i18n.getText(value) || value;
                    }
                    return number.toString();
                }
                function convertWithMask(number, mask) {
                    var value = number.toString();
                    var result = '';
                    var index = value.length - 1;
                    for (var i = mask.length - 1; i >= 0; i--) {
                        var ch = mask.charAt(i);
                        if (ch === '#' || ch === '0') {
                            if (index >= 0) {
                                result += value.charAt(index);
                                index--;
                            }
                            else {
                                if (ch === '0') {
                                    result += 0;
                                }
                            }
                        }
                        else {
                            result += ch;
                        }
                    }
                    return result.split('').reverse().join('');
                }
                function getNumberFromatOptions(format) {
                    var localeSettings = getLocaleSettings();
                    var type = format[0].toUpperCase();
                    var digits = (format.length > 1)
                        ? Number.parseInt(format.slice(1))
                        : type == 'D' ? 1 : 2;
                    switch (type) {
                        case 'D':
                            return {
                                style: 'decimal',
                                useGrouping: false,
                                minimumIntegerDigits: digits
                            };
                        case 'C':
                            return {
                                style: 'currency',
                                currency: localeSettings.currency,
                                minimumFractionDigits: digits
                            };
                        default:
                            return {
                                style: 'decimal',
                                minimumFractionDigits: digits
                            };
                    }
                }
            })(i18n || (i18n = {}));
            //# sourceMappingURL=i18n.js.map

            /***/
        }),
/* 6 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function () { return wrapInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return addElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return addCssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function () { return hideElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function () { return showElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function () { return toggleVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function () { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return createBrowserEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function () { return getViewportSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () { return getDocSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () { return getScrollPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () { return getElementAbsolutePos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function () { return getWinSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function () { return slideDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () { return slideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () { return eqCssPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return eqCssMobile; });
/* harmony import */ var _browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);

            /**
             * Wraps all the elements inside "parent" by "wrapper" element
             * @param parent The element to add wrapper to.
             * @param wrapper The element that will wrap child elements.
             */
            function wrapInner(parent, wrapper) {
                parent.appendChild(wrapper);
                while (parent.firstChild !== wrapper) {
                    wrapper.appendChild(parent.firstChild);
                }
            }
            /**
             * Creates ands adds a new [[HTMLElement]] to "parent"
             * @param parent The element to add new element to.
             * @param tag Html tag of the new element.
             * @param options The options. In particular, options.cssClass sets the new element class.
             * @returns New element.
             */
            function addElement(parent, tag, options) {
                var element = document.createElement(tag);
                var opts = options || {};
                if (opts.cssClass) {
                    element.className = opts.cssClass;
                }
                parent.appendChild(element);
                return element;
            }
            /**
             * Adds css class to the html element.
             * @param element The element to add css class to.
             * @param className The name of the css class to be added.
             */
            function addCssClass(element, className) {
                element.className = (element.className)
                    ? element.className + ' ' + className
                    : className;
            }
            /**
             * Hides the html element.
             * @param element The element to be hidden.
             */
            function hideElement(element) {
                element.style.display = 'none';
            }
            /**
             * Shows the html element.
             * @param element The element to be shown.
             * @param display The value of "display" style to be set. Default value is "block".
             */
            function showElement(element, display) {
                if (!display) {
                    display = '';
                }
                element.style.display = display;
            }
            /**
             * Hides the "first" element and shows the "second".
             * @param first The element to be hidden.
             * @param second The element to be shown.
             * @param options The options. The following options are applied:
             * - display - the value of "display" style to be set. Default value is "block"
             * - duration - the duration of fading in and out
             * - complete - the callback to be called when toggle is complete
             */
            function toggleVisibility(first, second, options) {
                if (!options) {
                    options = {};
                }
                if (!options.display) {
                    options.display = '';
                }
                if (!options.duration) {
                    options.duration = 200;
                }
                //TODO: later we need to make it fading in and out
                hideElement(first);
                showElement(second, options.display);
                if (options.complete) {
                    options.complete();
                }
            }
            /**
             * Checks if element is visible
             * @param element The element to check.
             * @returns `true` if visible, otherwise - `false`.
             */
            function isVisible(element) {
                return element.style.display != 'none'
                    && element.offsetWidth != 0
                    && element.offsetHeight != 0;
            }
            function createBrowserEvent(eventName) {
                var event;
                if (typeof (Event) === 'function') {
                    event = new Event(eventName);
                }
                else {
                    event = document.createEvent('Event');
                    event.initEvent(eventName, true, true);
                }
                return event;
            }
            function getViewportSize() {
                var width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                var height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                return {
                    width: width,
                    height: height
                };
            }
            function getDocSize() {
                if (_browser_utils__WEBPACK_IMPORTED_MODULE_0__[/* browserUtils */ "a"].IsIE())
                    return getWinSize();
                var width = Math.max(document.documentElement.clientWidth, document.body.clientWidth || 0);
                var height = Math.max(document.documentElement.clientHeight, document.body.clientHeight || 0);
                return {
                    width: width,
                    height: height
                };
            }
            function getScrollPos() {
                var body = document.body;
                var docElem = document.documentElement;
                return {
                    top: window.pageYOffset || docElem.scrollTop || body.scrollTop,
                    left: window.pageXOffset || docElem.scrollLeft || body.scrollLeft
                };
            }
            function getElementAbsolutePos(element) {
                var res = { x: 0, y: 0 };
                if (element !== null) {
                    var position = offset(element);
                    res = { x: position.left, y: position.top };
                }
                return res;
            }
            function offset(element) {
                var defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                var box;
                try {
                    box = element.getBoundingClientRect();
                }
                catch (_a) {
                    box = defaultBoundingClientRect;
                }
                var body = document.body;
                var docElem = document.documentElement;
                var scollPos = getScrollPos();
                var scrollTop = scollPos.top;
                var scrollLeft = scollPos.left;
                var clientTop = docElem.clientTop || body.clientTop || 0;
                var clientLeft = docElem.clientLeft || body.clientLeft || 0;
                var top = box.top + scrollTop - clientTop;
                var left = box.left + scrollLeft - clientLeft;
                return { top: Math.round(top), left: Math.round(left) };
            }
            function getWinSize() {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
            function slideDown(target, duration, callback) {
                target.style.removeProperty('display');
                var display = window.getComputedStyle(target).display;
                if (display === 'none')
                    display = 'block';
                target.style.display = display;
                var height = target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0 + 'px';
                target.style.paddingTop = 0 + 'px';
                target.style.paddingBottom = 0 + 'px';
                target.style.marginTop = 0 + 'px';
                target.style.marginBottom = 0 + 'px';
                target.offsetHeight;
                target.style.boxSizing = 'border-box';
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + 'ms';
                target.style.height = height + 'px';
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                window.setTimeout(function () {
                    target.style.removeProperty('height');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property');
                    target.style.removeProperty('box-sizing');
                    if (callback) {
                        callback();
                    }
                }, duration);
            }
            function slideUp(target, duration, callback) {
                target.style.transitionProperty = 'height, margin, padding';
                target.style.transitionDuration = duration + 'ms';
                target.style.boxSizing = 'border-box';
                target.style.height = target.offsetHeight + 'px';
                target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0 + 'px';
                target.style.paddingTop = 0 + 'px';
                target.style.paddingBottom = 0 + 'px';
                target.style.marginTop = 0 + 'px';
                target.style.marginBottom = 0 + 'px';
                window.setTimeout(function () {
                    target.style.display = 'none';
                    target.style.removeProperty('height');
                    target.style.removeProperty('padding-top');
                    target.style.removeProperty('padding-bottom');
                    target.style.removeProperty('margin-top');
                    target.style.removeProperty('margin-bottom');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property');
                    target.style.removeProperty('box-sizing');
                    if (callback) {
                        callback();
                    }
                }, duration);
            }
            var eqCssPrefix = 'eqjs';
            var eqCssMobile = 'eqjs-mobile';
            //# sourceMappingURL=ui-utils.js.map

            /***/
        }),
/* 7 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return getInternalDateTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return getEditDateTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return setLocation; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


            var internalDateFormat = 'yyyy-MM-dd';
            var internalTimeFormat = 'HH:mm';
            var getInternalDateTimeFormat = function (dtype) {
                if (dtype == _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Date)
                    return internalDateFormat;
                if (dtype == _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Time)
                    return internalTimeFormat;
                return internalDateFormat + "T" + internalTimeFormat;
            };
            var getEditDateTimeFormat = function (dtype) {
                var settings = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].getLocaleSettings();
                if (dtype == _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Date)
                    return settings.editDateFormat;
                if (dtype == _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Time)
                    return settings.editTimeFormat;
                return settings.editDateFormat + " " + settings.editTimeFormat;
            };
            var setLocation = function (path) {
                var state = window.history.state;
                history.pushState(state, document.title, path);
                window.dispatchEvent(new Event('ed_set_location'));
            };
            //# sourceMappingURL=utils.js.map

            /***/
        }),
/* 8 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return GridColumnAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return GridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return GridColumnList; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _easy_grid_cell_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


            var DEFAULT_WIDTH_STRING = 250;
            var ROW_NUM_WIDTH = 60;
            var GridColumnAlign;
            (function (GridColumnAlign) {
                GridColumnAlign[GridColumnAlign["NONE"] = 1] = "NONE";
                GridColumnAlign[GridColumnAlign["LEFT"] = 2] = "LEFT";
                GridColumnAlign[GridColumnAlign["CENTER"] = 3] = "CENTER";
                GridColumnAlign[GridColumnAlign["RIGHT"] = 4] = "RIGHT";
            })(GridColumnAlign || (GridColumnAlign = {}));
            function MapAlignment(alignment) {
                switch (alignment) {
                    case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["ColumnAlignment"].Left:
                        return GridColumnAlign.LEFT;
                    case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["ColumnAlignment"].Center:
                        return GridColumnAlign.CENTER;
                    case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["ColumnAlignment"].Right:
                        return GridColumnAlign.RIGHT;
                    default:
                        return GridColumnAlign.NONE;
                }
            }
            var GridColumn = /** @class */ (function () {
                function GridColumn(column, grid, isRowNum) {
                    if (isRowNum === void 0) { isRowNum = false; }
                    this._label = null;
                    this._description = null;
                    //public left: number;
                    this.align = GridColumnAlign.NONE;
                    this.isVisible = true;
                    this.isRowNum = false;
                    this.dataColumn = column;
                    this.grid = grid;
                    var widthOptions = grid.options.columnWidths || {};
                    if (column) {
                        if (column.style.alignment) {
                            this.align = MapAlignment(column.style.alignment);
                        }
                        this.width = (widthOptions && widthOptions[this.type]) ? widthOptions[this.type].default : DEFAULT_WIDTH_STRING;
                        this.cellRenderer = this.grid.cellRendererStore.getDefaultRenderer(column.type);
                        this._description = column.description;
                    }
                    else if (isRowNum) {
                        this.isRowNum = true;
                        this.width = (widthOptions && widthOptions.rowNumColumn) ? widthOptions.rowNumColumn.default : ROW_NUM_WIDTH;
                        this._label = '';
                        this.cellRenderer = this.grid.cellRendererStore.getDefaultRendererByType(_easy_grid_cell_renderer__WEBPACK_IMPORTED_MODULE_1__[/* CellRendererType */ "a"].NUMBER);
                    }
                    if (grid && grid.options && grid.options.onGetCellRenderer) {
                        this.cellRenderer = grid.options.onGetCellRenderer(this, this.cellRenderer) || this.cellRenderer;
                    }
                }
                Object.defineProperty(GridColumn.prototype, "label", {
                    get: function () {
                        return this._label ? this._label : this.isRowNum ? '' : this.dataColumn.label;
                    },
                    set: function (value) {
                        this._label = this.label;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(GridColumn.prototype, "description", {
                    /** Get column description. */
                    get: function () {
                        return this._description;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GridColumn.prototype, "type", {
                    get: function () {
                        return this.dataColumn ? this.dataColumn.type : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                return GridColumn;
            }());

            var GridColumnList = /** @class */ (function () {
                function GridColumnList(columnList, grid) {
                    this.items = [];
                    this.grid = grid;
                    this.sync(columnList);
                }
                GridColumnList.prototype.sync = function (columnList, hasRowNumCol) {
                    if (hasRowNumCol === void 0) { hasRowNumCol = true; }
                    this.clear();
                    var rowNumCol = new GridColumn(null, this.grid, true);
                    this.add(rowNumCol);
                    if (!hasRowNumCol) {
                        rowNumCol.isVisible = false;
                    }
                    if (columnList) {
                        for (var _i = 0, _a = columnList.getItems(); _i < _a.length; _i++) {
                            var column = _a[_i];
                            var col = new GridColumn(column, this.grid);
                            if (this.grid.options.onSyncGridColumn) {
                                this.grid.options.onSyncGridColumn(col);
                            }
                            this.add(col);
                        }
                    }
                };
                Object.defineProperty(GridColumnList.prototype, "count", {
                    get: function () {
                        return this.items.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                GridColumnList.prototype.add = function (col) {
                    var index = this.items.length;
                    this.items.push(col);
                    return index;
                };
                GridColumnList.prototype.put = function (index, col) {
                    if (index >= 0 && index < this.items.length) {
                        this.items[index] = col;
                    }
                };
                GridColumnList.prototype.move = function (col, newIndex) {
                    var oldIndex = this.items.indexOf(col);
                    if (oldIndex >= 0 && oldIndex != newIndex)
                        _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].moveArrayItem(this.items, oldIndex, newIndex);
                };
                GridColumnList.prototype.get = function (index) {
                    if (index >= 0 && index < this.items.length) {
                        return this.items[index];
                    }
                    else {
                        return null;
                    }
                };
                //    public getIndex(name: string) : number {
                //        return this.mapper[name];
                //    }
                GridColumnList.prototype.getItems = function () {
                    return this.items;
                };
                GridColumnList.prototype.removeAt = function (index) {
                    var col = this.get(index);
                    this.items.splice(index, 1);
                    //delete this.mapper[col.name];
                };
                GridColumnList.prototype.clear = function () {
                    this.items = [];
                    //this.mapper = {};
                };
                return GridColumnList;
            }());

            //# sourceMappingURL=easy_grid_columns.js.map

            /***/
        }),
/* 9 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return Validator; });
            var Validator = /** @class */ (function () {
                function Validator() {
                }
                return Validator;
            }());

            //# sourceMappingURL=validator.js.map

            /***/
        }),
/* 10 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return AutoResizeColumns; });
            var AutoResizeColumns;
            (function (AutoResizeColumns) {
                AutoResizeColumns[AutoResizeColumns["Always"] = 0] = "Always";
                AutoResizeColumns[AutoResizeColumns["Once"] = 1] = "Once";
                AutoResizeColumns[AutoResizeColumns["Never"] = 2] = "Never";
            })(AutoResizeColumns || (AutoResizeColumns = {}));
            //# sourceMappingURL=easy_grid_options.js.map

            /***/
        }),
/* 11 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return HttpMethod; });
            var HttpMethod;
            (function (HttpMethod) {
                HttpMethod["Trace"] = "TRACE";
                HttpMethod["Options"] = "OPTIONS";
                HttpMethod["Get"] = "GET";
                HttpMethod["Put"] = "PUT";
                HttpMethod["Post"] = "POST";
                HttpMethod["Delete"] = "DELETE";
            })(HttpMethod || (HttpMethod = {}));
            //# sourceMappingURL=http_method.js.map

            /***/
        }),
/* 12 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return DropEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return EqDragEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DragManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return eqDragManager; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



            var touchEventIsDefined = typeof TouchEvent !== 'undefined';
            var DropEffect;
            (function (DropEffect) {
                DropEffect["None"] = "none";
                DropEffect["Allow"] = "allow";
                DropEffect["Forbid"] = "forbid";
            })(DropEffect || (DropEffect = {}));
            var EqDragEvent = /** @class */ (function () {
                function EqDragEvent(item, dragImage, sourceEvent) {
                    this.dropEffect = DropEffect.Allow;
                    this.pageX = 0;
                    this.pageY = 0;
                    this.item = item;
                    this.dragImage = dragImage;
                    this.data = item.data;
                    this.sourceEvent = sourceEvent;
                    if (sourceEvent && sourceEvent instanceof MouseEvent) {
                        this.pageX = sourceEvent.pageX,
                            this.pageY = sourceEvent.pageY;
                    }
                    if (sourceEvent && touchEventIsDefined && sourceEvent instanceof TouchEvent
                        && sourceEvent.touches[0]) {
                        this.pageX = sourceEvent.touches[0].pageX,
                            this.pageY = sourceEvent.touches[0].pageY;
                    }
                }
                return EqDragEvent;
            }());

            var Position = /** @class */ (function () {
                function Position(ev) {
                    if (ev && ev instanceof MouseEvent) {
                        this.x = ev.pageX,
                            this.y = ev.pageY;
                    }
                    if (ev && touchEventIsDefined && ev instanceof TouchEvent && ev.touches[0]) {
                        this.x = ev.touches[0].pageX,
                            this.y = ev.touches[0].pageY;
                    }
                }
                return Position;
            }());
            var DragManager = /** @class */ (function () {
                function DragManager() {
                    this.delta = 5;
                    this.draggableItem = null;
                    this.dragImage = null;
                    this.finishedSuccessfully = false;
                    this.mouseDownPosition = null;
                    this.containerDescriptors = [];
                    this.containerDescriptorIndex = -1;
                    this.dropEffect = DropEffect.None;
                    this.classPrefix = 'eqjs-drop';
                    this.DRAG_DISABLED_ATTR = 'drag-disabled';
                }
                DragManager.prototype.registerDraggableItem = function (descriptor) {
                    var _this = this;
                    var element = descriptor.element;
                    if (!element) {
                        throw Error("Element in draggle item is null or undefined");
                    }
                    element.ondragstart = function () {
                        return false;
                    };
                    var detectDragging = function (ev) {
                        if (element.hasAttribute(_this.DRAG_DISABLED_ATTR)) {
                            return;
                        }
                        ev.preventDefault();
                        if (ev instanceof MouseEvent) {
                            ev.stopPropagation();
                        }
                        var cursorPosition = new Position(ev);
                        if (Math.abs(cursorPosition.x - _this.mouseDownPosition.x) > _this.delta
                            || Math.abs(cursorPosition.y - _this.mouseDownPosition.y) > _this.delta) {
                            startDragging(ev);
                        }
                    };
                    var mouseMoveEventListener = function (ev) {
                        _this.mouseMoveDragListener(ev);
                    };
                    var startDragging = function (ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        element.removeEventListener('mousemove', detectDragging);
                        element.removeEventListener('touchmove', detectDragging);
                        _this.finishedSuccessfully = false;
                        if (descriptor.beforeDragStart)
                            descriptor.beforeDragStart();
                        _this.dragImage = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .setStyle('position', 'absolute')
                            .setStyle('z-index', '65530')
                            .toDOM();
                        document.body.appendChild(_this.dragImage);
                        _this.dragImage.appendChild(element.cloneNode(true));
                        if (descriptor.renderer) {
                            descriptor.renderer(_this.dragImage);
                        }
                        _this.dropEffect = DropEffect.None;
                        _this.updateCusror(_this.dropEffect);
                        _this.updateImageClass(_this.dropEffect);
                        _this.draggableItem = {
                            element: element,
                            scope: descriptor.scope,
                            data: descriptor.data
                        };
                        _this.updateDragItemPosition(ev);
                        var event = new EqDragEvent(_this.draggableItem, _this.dragImage, ev);
                        event.dropEffect = _this.dropEffect;
                        if (descriptor.onDragStart) {
                            descriptor.onDragStart(event);
                        }
                        if (_this.dropEffect !== event.dropEffect) {
                            _this.dropEffect = event.dropEffect;
                            _this.updateImageClass(_this.dropEffect);
                        }
                        document.addEventListener('mousemove', mouseMoveEventListener, true);
                        document.addEventListener('touchmove', mouseMoveEventListener, true);
                    };
                    var mouseDownListener = function (ev) {
                        if (touchEventIsDefined && ev instanceof TouchEvent) {
                            ev.preventDefault();
                        }
                        _this.mouseDownPosition = new Position(ev);
                        element.addEventListener('mousemove', detectDragging);
                        element.addEventListener('touchmove', detectDragging);
                        document.addEventListener('mouseup', mouseUpListener);
                        document.addEventListener('touchend', mouseUpListener);
                    };
                    element.addEventListener('mousedown', mouseDownListener);
                    element.addEventListener('touchstart', mouseDownListener);
                    var mouseUpListener = function (ev) {
                        _this.mouseDownPosition = null;
                        element.removeEventListener('mousemove', detectDragging);
                        element.removeEventListener('touchmove', detectDragging);
                        document.removeEventListener('mousemove', mouseMoveEventListener, true);
                        document.removeEventListener('touchmove', mouseMoveEventListener, true);
                        if (_this.draggableItem) {
                            endDraggind(ev);
                        }
                    };
                    var endDraggind = function (ev) {
                        try {
                            if (_this.containerDescriptorIndex >= 0) {
                                var dropContDesc = _this.containerDescriptors[_this.containerDescriptorIndex];
                                var container = {
                                    element: dropContDesc.element,
                                    scopes: dropContDesc.scopes,
                                    data: dropContDesc.data
                                };
                                var event_1 = new EqDragEvent(_this.draggableItem, _this.dragImage, ev);
                                try {
                                    if (container.scopes.indexOf(_this.draggableItem.scope) >= 0
                                        && _this.dropEffect === DropEffect.Allow) {
                                        _this.finishedSuccessfully = true;
                                        if (dropContDesc.onDrop) {
                                            dropContDesc.onDrop(container, event_1);
                                        }
                                    }
                                }
                                finally {
                                    if (dropContDesc.onDragLeave) {
                                        dropContDesc.onDragLeave(container, event_1);
                                    }
                                }
                            }
                        }
                        finally {
                            try {
                                var event_2 = new EqDragEvent(_this.draggableItem, _this.dragImage, ev);
                                event_2.data.finishedSuccessfully = _this.finishedSuccessfully;
                                if (descriptor.onDragEnd) {
                                    descriptor.onDragEnd(event_2);
                                }
                            }
                            finally {
                                _this.draggableItem = null;
                                if (_this.dragImage && _this.dragImage.parentElement) {
                                    _this.dragImage.parentElement.removeChild(_this.dragImage);
                                }
                                _this.dragImage = null;
                                _this.finishedSuccessfully = false;
                                document.removeEventListener('mouseup', mouseUpListener);
                                document.removeEventListener('touchend', mouseUpListener);
                            }
                        }
                    };
                };
                DragManager.prototype.registerDropContainer = function (descriptor) {
                    var element = descriptor.element;
                    if (!element) {
                        throw Error("Element in drop container is null or undefined");
                    }
                    this.containerDescriptors.push(descriptor);
                };
                DragManager.prototype.removeDropContainer = function (descriptorOrSlot) {
                    var descs = this.containerDescriptors
                        .filter(function (desc) {
                            return desc === descriptorOrSlot
                                || desc.element == descriptorOrSlot;
                        });
                    if (descs) {
                        for (var _i = 0, descs_1 = descs; _i < descs_1.length; _i++) {
                            var desc = descs_1[_i];
                            _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].removeArrayItem(this.containerDescriptors, desc);
                        }
                    }
                };
                DragManager.prototype.mouseMoveDragListener = function (ev) {
                    if (ev instanceof MouseEvent) {
                        ev.preventDefault();
                    }
                    ev.stopPropagation();
                    this.updateDragItemPosition(ev);
                    if (this.containerDescriptorIndex == -1) {
                        for (var i = 0; i < this.containerDescriptors.length; i++) {
                            var descriptor = this.containerDescriptors[i];
                            if (this.detectDragEnterEvent(descriptor.element, ev)) {
                                this.containerDescriptorIndex = i;
                                break;
                            }
                        }
                        if (this.containerDescriptorIndex >= 0) {
                            this.dragEnterEvent(ev);
                        }
                    }
                    else {
                        var descriptor = this.containerDescriptors[this.containerDescriptorIndex];
                        if (this.detectDragLeaveEvent(descriptor.element, ev)) {
                            this.dragLeaveEvent(ev);
                            this.containerDescriptorIndex = -1;
                        }
                    }
                    if (this.containerDescriptorIndex >= 0) {
                        var descriptor = this.containerDescriptors[this.containerDescriptorIndex];
                        var container = {
                            element: descriptor.element,
                            scopes: descriptor.scopes,
                            data: descriptor.data
                        };
                        if (container.scopes.indexOf(this.draggableItem.scope) >= 0) {
                            var event_3 = new EqDragEvent(this.draggableItem, this.dragImage, ev);
                            event_3.dropEffect = this.dropEffect;
                            if (descriptor.onDragOver) {
                                descriptor.onDragOver(container, event_3);
                            }
                        }
                    }
                };
                DragManager.prototype.updateCusror = function (dropEffect) {
                    switch (dropEffect) {
                        case DropEffect.Allow:
                            this.setCursorStyle(this.dragImage, 'grabbing');
                            break;
                        case DropEffect.Forbid:
                            this.setCursorStyle(this.dragImage, 'no-drop');
                            break;
                        default:
                            this.setCursorStyle(this.dragImage, 'grabbing');
                            break;
                    }
                };
                DragManager.prototype.updateImageClass = function (dropEffect) {
                    this.dragImage.classList.remove(this.classPrefix + "-allow");
                    this.dragImage.classList.remove(this.classPrefix + "-forbid");
                    this.dragImage.classList.remove(this.classPrefix + "-none");
                    switch (dropEffect) {
                        case DropEffect.Allow:
                            this.dragImage.classList.add(this.classPrefix + "-allow");
                            break;
                        case DropEffect.None:
                            this.dragImage.classList.add(this.classPrefix + "-none");
                            break;
                        case DropEffect.Forbid:
                            this.dragImage.classList.add(this.classPrefix + "-forbid");
                            break;
                        default:
                            this.dragImage.classList.add(this.classPrefix + "-none");
                            break;
                    }
                };
                DragManager.prototype.setCursorStyle = function (element, cursor) {
                    if (element) {
                        element.style.cursor = cursor;
                        for (var i = 0; i < element.children.length; i++) {
                            this.setCursorStyle(element.children[i], cursor);
                        }
                    }
                };
                DragManager.prototype.updateDragItemPosition = function (ev) {
                    if (this.dragImage) {
                        var pos = new Position(ev);
                        this.dragImage.style.top = (pos.y - this.dragImage.offsetHeight / 2) + 'px';
                        this.dragImage.style.left = (pos.x - this.dragImage.offsetWidth / 2) + 'px';
                    }
                };
                DragManager.prototype.dragEnterEvent = function (ev) {
                    var descriptor = this.containerDescriptors[this.containerDescriptorIndex];
                    var container = {
                        element: descriptor.element,
                        scopes: descriptor.scopes,
                        data: descriptor.data
                    };
                    if (container.scopes.indexOf(this.draggableItem.scope) >= 0) {
                        var event_4 = new EqDragEvent(this.draggableItem, this.dragImage, ev);
                        event_4.dropEffect = DropEffect.Allow;
                        if (descriptor.onDragEnter) {
                            descriptor.onDragEnter(container, event_4);
                        }
                        this.dropEffect = event_4.dropEffect;
                        this.updateCusror(this.dropEffect);
                        this.updateImageClass(this.dropEffect);
                    }
                    else {
                        if (this.dropEffect !== DropEffect.Forbid) {
                            this.dropEffect = DropEffect.None;
                            this.updateCusror(this.dropEffect);
                            this.updateImageClass(this.dropEffect);
                        }
                    }
                };
                DragManager.prototype.dragLeaveEvent = function (ev) {
                    var descriptor = this.containerDescriptors[this.containerDescriptorIndex];
                    var container = {
                        element: descriptor.element,
                        scopes: descriptor.scopes,
                        data: descriptor.data
                    };
                    if (container.scopes.indexOf(this.draggableItem.scope) >= 0) {
                        var event_5 = new EqDragEvent(this.draggableItem, this.dragImage, ev);
                        event_5.dropEffect = DropEffect.None;
                        if (descriptor.onDragLeave) {
                            descriptor.onDragLeave(container, event_5);
                        }
                        this.dropEffect = event_5.dropEffect;
                        this.updateCusror(this.dropEffect);
                        this.updateImageClass(this.dropEffect);
                    }
                };
                DragManager.prototype.detectDragEnterEvent = function (container, ev) {
                    var containerPos = Object(_ui_utils__WEBPACK_IMPORTED_MODULE_1__[/* getElementAbsolutePos */ "g"])(container);
                    var pos = new Position(ev);
                    if (pos.y < containerPos.y || pos.y > containerPos.y + container.offsetHeight) {
                        return false;
                    }
                    if (pos.x < containerPos.x || pos.x > containerPos.x + container.offsetWidth) {
                        return false;
                    }
                    return true;
                };
                DragManager.prototype.detectDragLeaveEvent = function (container, ev) {
                    var containerPos = Object(_ui_utils__WEBPACK_IMPORTED_MODULE_1__[/* getElementAbsolutePos */ "g"])(container);
                    var pos = new Position(ev);
                    if (pos.y > containerPos.y && pos.y < containerPos.y + container.offsetHeight
                        && pos.x > containerPos.x && pos.x < containerPos.x + container.offsetWidth) {
                        return false;
                    }
                    return true;
                };
                return DragManager;
            }());

            //global variable
            var eqDragManager = new DragManager();
            //# sourceMappingURL=drag_manager.js.map

            /***/
        }),
/* 13 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return DFMT_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return CellRendererType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return GridCellRendererStore; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _easy_grid_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


            var cssPrefix = "keg";
            var DFMT_REGEX = /{0:(.*?)}/g;
            var CellRendererType;
            (function (CellRendererType) {
                CellRendererType[CellRendererType["STRING"] = 1] = "STRING";
                CellRendererType[CellRendererType["NUMBER"] = 2] = "NUMBER";
                CellRendererType[CellRendererType["DATETIME"] = 3] = "DATETIME";
                CellRendererType[CellRendererType["BOOL"] = 4] = "BOOL";
            })(CellRendererType || (CellRendererType = {}));
            var StringCellRendererDefault = function (value, column, cellValueElement, rowElement) {
                var text = value ? value.toString().replace(/\n/g, '\u21B5 ') : '';
                cellValueElement.innerHTML = text;
                cellValueElement.title = text;
                if (column.align == _easy_grid_columns__WEBPACK_IMPORTED_MODULE_1__[/* GridColumnAlign */ "b"].NONE) {
                    cellValueElement.classList.add(cssPrefix + "-cell-value-align-left");
                }
            };
            var NumberCellRendererDefault = function (value, column, cellValueElement, rowElement) {
                var strValue = (value || '').toString();
                if (typeof value == 'number') {
                    if (column.dataColumn && column.dataColumn.displayFormat
                        && DFMT_REGEX.test(column.dataColumn.displayFormat)) {
                        strValue = column.dataColumn.displayFormat.replace(DFMT_REGEX, function (_, $1) {
                            return _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].numberToStr(value, $1);
                        });
                    }
                    else {
                        strValue = value.toLocaleString();
                    }
                }
                cellValueElement.innerHTML = strValue;
                cellValueElement.title = strValue;
                if (column.align == _easy_grid_columns__WEBPACK_IMPORTED_MODULE_1__[/* GridColumnAlign */ "b"].NONE) {
                    cellValueElement.classList.add(cssPrefix + "-cell-value-align-right");
                }
            };
            var DateTimeCellRendererDefault = function (value, column, cellValueElement, rowElement) {
                var isDate = Object.prototype.toString.call(value) === '[object Date]';
                var strValue = (value || '').toString();
                if (isDate) {
                    if (column.dataColumn && column.dataColumn.displayFormat
                        && DFMT_REGEX.test(column.dataColumn.displayFormat)) {
                        strValue = column.dataColumn.displayFormat.replace(DFMT_REGEX, function (_, $1) {
                            return _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].dateTimeToStr(value, column.type, $1);
                        });
                    }
                    else {
                        var locale = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].getCurrentLocale();
                        var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
                        switch (column.type) {
                            case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Date:
                                strValue = value.toLocaleDateString(locale);
                                break;
                            case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Time:
                                strValue = value.toLocaleTimeString(locale, timeOptions);
                                break;
                            case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].DateTime:
                                strValue = value.toLocaleDateString(locale) + " " + value.toLocaleTimeString(locale, timeOptions);
                                break;
                        }
                    }
                }
                cellValueElement.innerHTML = strValue;
                cellValueElement.title = strValue;
                if (column.align == _easy_grid_columns__WEBPACK_IMPORTED_MODULE_1__[/* GridColumnAlign */ "b"].NONE) {
                    cellValueElement.classList.add(cssPrefix + "-cell-value-align-right");
                }
            };
            var BoolCellRendererDefault = function (value, column, cellValueElement, rowElement) {
                if (column.dataColumn && column.dataColumn.displayFormat
                    && DFMT_REGEX.test(column.dataColumn.displayFormat)) {
                    var strValue = column.dataColumn.displayFormat.replace(DFMT_REGEX, function (_, $1) {
                        return _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].booleanToStr(value, $1);
                    });
                    return StringCellRendererDefault(strValue, column, cellValueElement, rowElement);
                }
                else {
                    cellValueElement.classList.add(cssPrefix + "-cell-value-bool");
                    cellValueElement.classList.add(cssPrefix + "-" + (value ? 'cell-value-true' : 'cell-value-false'));
                }
            };
            var GridCellRendererStore = /** @class */ (function () {
                function GridCellRendererStore(options) {
                    this.renderers = {};
                    this.defaultRenderers = {};
                    this.registerRenderer('StringDefault', StringCellRendererDefault);
                    this.setDefaultRenderer(CellRendererType.STRING, StringCellRendererDefault);
                    this.registerRenderer('NumberDefault', NumberCellRendererDefault);
                    this.setDefaultRenderer(CellRendererType.NUMBER, NumberCellRendererDefault);
                    this.registerRenderer('DateTimeDefault', DateTimeCellRendererDefault);
                    this.setDefaultRenderer(CellRendererType.DATETIME, DateTimeCellRendererDefault);
                    this.registerRenderer('BoolDefault', BoolCellRendererDefault);
                    this.setDefaultRenderer(CellRendererType.BOOL, BoolCellRendererDefault);
                }
                GridCellRendererStore.prototype.getDefaultRenderer = function (columnType) {
                    var cellType = this.getCellType(columnType);
                    return this.defaultRenderers[CellRendererType[cellType]];
                };
                GridCellRendererStore.prototype.getDefaultRendererByType = function (rendererType) {
                    return this.defaultRenderers[CellRendererType[rendererType]];
                };
                GridCellRendererStore.prototype.setDefaultRenderer = function (cellType, renderer) {
                    if (renderer) {
                        this.defaultRenderers[CellRendererType[cellType]] = renderer;
                    }
                };
                GridCellRendererStore.prototype.getRenderer = function (name) {
                    return this.renderers[name];
                };
                GridCellRendererStore.prototype.registerRenderer = function (name, renderer) {
                    this.renderers[name] = renderer;
                };
                GridCellRendererStore.prototype.getCellType = function (dataType) {
                    switch (dataType) {
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Autoinc:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Byte:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Word:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Currency:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Float:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Int32:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Int64:
                            return CellRendererType.NUMBER;
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Date:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].DateTime:
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Time:
                            return CellRendererType.DATETIME;
                        case _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Bool:
                            return CellRendererType.BOOL;
                        default:
                            return CellRendererType.STRING;
                    }
                };
                return GridCellRendererStore;
            }());

            //# sourceMappingURL=easy_grid_cell_renderer.js.map

            /***/
        }),
/* 14 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return repeatString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return reverseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return strEndsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return combinePath; });
            function repeatString(str, times) {
                var result = "";
                for (var i = 0; i < times; i++) {
                    result += str;
                }
                return result;
            }
            function reverseString(str) {
                return str.split("").reverse().join("");
            }
            function strEndsWith(str, symbol) {
                return str && str.lastIndexOf(symbol) == (str.length - symbol.length);
            }
            /**
             * Adds two paths and returns the result
             * Correctly processes leading and trailing slashes
             * @param path1
             * @param path2
             */
            function combinePath(path1, path2) {
                var result = path1;
                if (result != null && result.length > 0) {
                    if (result.charAt(result.length - 1) != '/')
                        result += "/";
                    result += path2;
                }
                else {
                    result = path2;
                }
                return result;
            }
            //# sourceMappingURL=string_utils.js.map

            /***/
        }),
/* 15 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DataRow; });
            var DataRow = /** @class */ (function () {
                function DataRow(columns, values) {
                    this.columns = columns;
                    this.values = values;
                }
                DataRow.prototype.toArray = function () {
                    return Array.from(this.values);
                };
                DataRow.prototype.size = function () {
                    return this.values.length;
                };
                DataRow.prototype.getValue = function (colIdOrIndex) {
                    var index;
                    if (typeof colIdOrIndex === "string") {
                        index = this.columns.getIndex(colIdOrIndex);
                        if (index === undefined) {
                            throw new RangeError("No column with id '" + colIdOrIndex + "'");
                        }
                    }
                    else {
                        index = colIdOrIndex;
                    }
                    if (index >= this.values.length)
                        throw new RangeError("Out of range: " + index);
                    return this.values[index];
                };
                DataRow.prototype.setValue = function (colIdOrIndex, value) {
                    var index;
                    if (typeof colIdOrIndex === "string") {
                        index = this.columns.getIndex(colIdOrIndex);
                        if (index === undefined) {
                            throw new RangeError("No column with id '" + colIdOrIndex + "'");
                        }
                    }
                    else {
                        index = colIdOrIndex;
                    }
                    if (index >= this.values.length)
                        throw new RangeError("Out of range: " + index);
                    this.values[index] = value;
                };
                return DataRow;
            }());

            //# sourceMappingURL=data_row.js.map

            /***/
        }),
/* 16 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return HttpRequest; });
            var HttpRequest = /** @class */ (function () {
                function HttpRequest(xhr, descriptor) {
                    this.xhr = xhr;
                    this.method = descriptor.method;
                    this.url = descriptor.url;
                    this.headers = descriptor.headers;
                    this.queryParams = descriptor.queryParams;
                    this.data = descriptor.data;
                }
                HttpRequest.prototype.setHeader = function (name, value) {
                    this.headers[name] = value;
                };
                HttpRequest.prototype.setQueryParam = function (name, value) {
                    this.queryParams[name] = value;
                };
                HttpRequest.prototype.getXMLHttpRequest = function () {
                    return this.xhr;
                };
                HttpRequest.prototype.getResponseHeaders = function () {
                    if (this.xhr.readyState == this.xhr.HEADERS_RECEIVED) {
                        var headers = this.xhr.getAllResponseHeaders();
                        var arr = headers.trim().split(/[\r\n]+/);
                        // Create a map of header names to values
                        var headerMap = {};
                        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                            var line = arr_1[_i];
                            var parts = line.split(': ');
                            var header = parts.shift();
                            var value = parts.join(': ');
                            headerMap[header] = value;
                        }
                        return headerMap;
                    }
                    return {};
                };
                HttpRequest.prototype.open = function () {
                    var _this = this;
                    if (this.xhr.readyState !== this.xhr.UNSENT)
                        return;
                    var url = this.url;
                    if (this.queryParams && Object.keys(this.queryParams).length > 0) {
                        url += encodeURI('?' + Object.keys(this.queryParams)
                            .map(function (param) { return param + '=' + _this.queryParams[param]; })
                            .join('&'));
                    }
                    this.xhr.open(this.method, url, true);
                    this.xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    for (var header in this.headers) {
                        this.xhr.setRequestHeader(header, this.headers[header]);
                    }
                };
                HttpRequest.prototype.abort = function () {
                    this.xhr.abort();
                };
                return HttpRequest;
            }());

            //# sourceMappingURL=http_request.js.map

            /***/
        }),
/* 17 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ColumnAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return DataColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return DataColumnList; });
/* harmony import */ var _types_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


            var ColumnAlignment;
            (function (ColumnAlignment) {
                ColumnAlignment[ColumnAlignment["None"] = 0] = "None";
                ColumnAlignment[ColumnAlignment["Left"] = 1] = "Left";
                ColumnAlignment[ColumnAlignment["Center"] = 2] = "Center";
                ColumnAlignment[ColumnAlignment["Right"] = 3] = "Right";
            })(ColumnAlignment || (ColumnAlignment = {}));
            var DataColumn = /** @class */ (function () {
                function DataColumn(desc) {
                    if (!desc)
                        throw Error("Options are required");
                    if (!desc.id)
                        throw Error("Field Id is required");
                    if (!desc.label)
                        throw Error("Label is required");
                    this.id = desc.id;
                    this.type = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].getIfDefined(desc.type, _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].String);
                    this.label = desc.label;
                    this.originAttrId = desc.originAttrId;
                    this.isAggr = desc.isAggr || false;
                    this.displayFormat = desc.dfmt;
                    this.groupFooterColumnTemplate = desc.gfct;
                    this.style = desc.style || {};
                    this.description = desc.description;
                    this.calculatedWidth = 0;
                }
                return DataColumn;
            }());

            var DataColumnList = /** @class */ (function () {
                function DataColumnList() {
                    this.items = [];
                    this.mapper = {};
                    this._dateColumnIdx = [];
                }
                Object.defineProperty(DataColumnList.prototype, "count", {
                    get: function () {
                        return this.items.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                DataColumnList.prototype.add = function (colOrDesc) {
                    var col;
                    if (colOrDesc instanceof DataColumn) {
                        col = colOrDesc;
                    }
                    else {
                        col = new DataColumn(colOrDesc);
                    }
                    var index = this.items.length;
                    this.items.push(col);
                    this.mapper[col.id] = index;
                    if ([_types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Date, _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].DateTime, _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Time].indexOf(col.type) >= 0) {
                        this._dateColumnIdx.push(index);
                    }
                    return index;
                };
                DataColumnList.prototype.updateDateColumnIdx = function () {
                    this._dateColumnIdx = this.getItems()
                        .filter(function (col) { return [_types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Date, _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].DateTime, _types_data_type__WEBPACK_IMPORTED_MODULE_0__[/* DataType */ "a"].Time].indexOf(col.type) >= 0; })
                        .map(function (col, index) { return index; });
                };
                DataColumnList.prototype.put = function (index, col) {
                    if (index >= 0 && index < this.count) {
                        this.items[index] = col;
                        this.updateDateColumnIdx();
                    }
                };
                DataColumnList.prototype.move = function (col, newIndex) {
                    var oldIndex = this.items.indexOf(col);
                    if (oldIndex >= 0 && oldIndex != newIndex) {
                        _utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].moveArrayItem(this.items, oldIndex, newIndex);
                        this.updateDateColumnIdx();
                    }
                };
                DataColumnList.prototype.get = function (index) {
                    if (index >= 0 && index < this.count) {
                        return this.items[index];
                    }
                    else {
                        return null;
                    }
                };
                DataColumnList.prototype.getIndex = function (id) {
                    return this.mapper[id];
                };
                DataColumnList.prototype.getItems = function () {
                    return this.items;
                };
                DataColumnList.prototype.getDateColumnIndexes = function () {
                    return this._dateColumnIdx;
                };
                DataColumnList.prototype.removeAt = function (index) {
                    var col = this.get(index);
                    this.items.splice(index, 1);
                    var removeDate = this._dateColumnIdx.indexOf(index);
                    if (removeDate >= 0) {
                        this._dateColumnIdx.splice(removeDate, 1);
                    }
                    delete this.mapper[col.id];
                };
                DataColumnList.prototype.clear = function () {
                    this.items = [];
                    this._dateColumnIdx = [];
                    this.mapper = {};
                };
                return DataColumnList;
            }());

            //# sourceMappingURL=data_column.js.map

            /***/
        }),
/* 18 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return browserUtils; });
            var browserUtils;
            (function (browserUtils) {
                var _isFirefox = null;
                var _isIE = null;
                function IsIE() {
                    // return eval('/*@cc_on!@*/false || !!document.documentMode');
                    if (_isIE === null) {
                        var ua = navigator.userAgent;
                        /* MSIE used to detect old browsers and Trident used to newer ones*/
                        _isIE = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
                    }
                    return _isIE;
                }
                browserUtils.IsIE = IsIE;
                function IsEdge() {
                    return !IsIE() && eval('!!window.StyleMedia');
                }
                browserUtils.IsEdge = IsEdge;
                function IsFirefox() {
                    if (_isFirefox === null) {
                        var ua = navigator.userAgent;
                        _isFirefox = ua.toLowerCase().indexOf('firefox') > -1;
                    }
                    return _isFirefox;
                }
                browserUtils.IsFirefox = IsFirefox;
                var _detectedIsMobileMode = false;
                var _isMobileMode = undefined;
                var detectIsMobileMode = function () {
                    var oldValue = isMobileMode();
                    _detectedIsMobileMode = window.matchMedia('only screen and (max-width: 840px)').matches
                        || window.matchMedia('only screen and (max-height: 420px)').matches;
                    var newValue = isMobileMode();
                    if (newValue !== oldValue && mobileModeChangeHandler) {
                        mobileModeChangeHandler(newValue);
                    }
                };
                detectIsMobileMode();
                window.addEventListener('resize', function () { return detectIsMobileMode(); });
                function isMobileMode() {
                    if (_isMobileMode !== undefined) {
                        return _isMobileMode;
                    }
                    else {
                        return _detectedIsMobileMode;
                    }
                }
                browserUtils.isMobileMode = isMobileMode;
                function setIsMobileMode(value) {
                    var oldValue = isMobileMode();
                    _isMobileMode = value;
                    var newValue = isMobileMode();
                    if (newValue !== oldValue && mobileModeChangeHandler) {
                        mobileModeChangeHandler(newValue);
                    }
                }
                browserUtils.setIsMobileMode = setIsMobileMode;
                var mobileModeChangeHandler;
                function onMobileModeChanged(callback) {
                    mobileModeChangeHandler = callback;
                }
                browserUtils.onMobileModeChanged = onMobileModeChanged;
                function getMobileCssClass() {
                    return isMobileMode() ? 'k-mobile' : null;
                }
                browserUtils.getMobileCssClass = getMobileCssClass;
            })(browserUtils || (browserUtils = {}));
            //# sourceMappingURL=browser_utils.js.map

            /***/
        }),
/* 19 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return mask; });
            function mask(input, maskPattern) {
                var d = { 9: '[0-9]', a: '[a-z]' };
                var mask = maskPattern.split('');
                var keyDownHandler = function (e) {
                    // backspace key or delete key
                    if (e.keyCode === 8 || e.keyCode === 46) {
                        e.preventDefault();
                        var mskd = [];
                        var startSelection = input.selectionStart;
                        if (startSelection == 0)
                            return;
                        var selection = startSelection;
                        var onlyLodash = true;
                        for (var index = mask.length - 1; index >= 0; index--) {
                            var el = mask[index];
                            if (d[el]) {
                                var t = new RegExp(d[el], 'i').test(input.value.charAt(index));
                                if (t && index != startSelection - 1) {
                                    onlyLodash = false;
                                }
                                if (index === startSelection - 1)
                                    selection--;
                                mskd.push(t && index != startSelection - 1
                                    ? input.value.charAt(index)
                                    : '_');
                            }
                            else {
                                if (index === selection - 1)
                                    selection--;
                                if (startSelection - 1 === index)
                                    startSelection--;
                                mskd.push(el);
                            }
                        }
                        input.value = !onlyLodash ? mskd.reverse().join('') : '';
                        input.selectionStart = input.selectionEnd = selection < 0 ? 0 : selection;
                        var event_1 = document.createEvent('Event');
                        event_1.initEvent('input', true, true);
                        input.dispatchEvent(event_1);
                    }
                };
                var keyPressHandler = function (e) {
                    var char = String.fromCharCode(e.charCode);
                    if (char) {
                        e.preventDefault();
                        var mskd_1 = [];
                        var selectionStart_1 = input.selectionStart;
                        var selection_1 = selectionStart_1;
                        mask.forEach(function (el, index) {
                            if (d[el]) {
                                var ch = (index != selectionStart_1)
                                    ? input.value.charAt(index)
                                    : char;
                                var t = new RegExp(d[el], 'i').test(ch);
                                mskd_1.push(t ? ch : '_');
                                if (t && selectionStart_1 === index)
                                    selection_1++;
                            }
                            else {
                                mskd_1.push(el);
                                if (selection_1 === index)
                                    selection_1++;
                                if (selectionStart_1 === index)
                                    selectionStart_1++;
                            }
                        });
                        input.value = mskd_1.join('');
                        input.selectionStart = input.selectionEnd = selection_1;
                        var event_2 = document.createEvent('Event');
                        event_2.initEvent('input', true, true);
                        input.dispatchEvent(event_2);
                    }
                };
                var inputHandler = function (e) {
                    if (e.type === 'focus' && input.value !== '')
                        return;
                    var mskd = [];
                    var startSelection = input.selectionStart;
                    mask.forEach(function (el, index) {
                        if (d[el]) {
                            var t = new RegExp(d[el], 'i').test(input.value.charAt(index));
                            mskd.push(t ? input.value.charAt(index) : '_');
                        }
                        else {
                            mskd.push(el);
                        }
                    });
                    input.value = mskd.join('');
                    input.selectionStart = input.selectionEnd = startSelection;
                };
                input.addEventListener('keydown', keyDownHandler);
                input.addEventListener('keypress', keyPressHandler);
                input.addEventListener('input', inputHandler);
                input.addEventListener('focus', inputHandler);
            }
            //# sourceMappingURL=mask.js.map

            /***/
        }),
/* 20 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* WEBPACK VAR INJECTION */(function (Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return DefaultDialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DefaultDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return DefaultProgressDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return DefaultDialogSet; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();



                var cssPrefix = "kdlg";
                var DefaultDialogService = /** @class */ (function () {
                    function DefaultDialogService() {
                    }
                    DefaultDialogService.prototype.openConfirm = function (title, content, callback) {
                        var _this = this;
                        var template = "<div id=\"" + cssPrefix + "-dialog-confirm\">" + content + "</div>";
                        var options = {
                            title: title,
                            closable: false,
                            submitable: true,
                            cancelable: true,
                            body: template
                        };
                        if (callback) {
                            options.onSubmit = function () {
                                callback(true);
                            };
                            options.onCancel = function () {
                                callback(false);
                            };
                            this.open(options);
                            return;
                        }
                        return new Promise(function (resolve) {
                            options.onSubmit = function () {
                                resolve(true);
                            };
                            options.onCancel = function () {
                                resolve(false);
                            };
                            _this.open(options);
                        });
                    };
                    DefaultDialogService.prototype.openPrompt = function (title, content, defVal, callback) {
                        var _this = this;
                        var template = "<div id=\"" + cssPrefix + "-dialog-form\" class=\"kfrm-form\">\n            <div class=\"kfrm-fields label-above\">\n                <label for=\"" + cssPrefix + "-dialog-form-input\" id=\"" + cssPrefix + "-dialog-form-content\">" + content + "</label>\n                <input type=\"text\" name=\"" + cssPrefix + "-dialog-form-input\" id=\"" + cssPrefix + "-dialog-form-input\" />\n            </div>\n        </div>";
                        var options = {
                            title: title,
                            submitable: true,
                            closable: true,
                            cancelable: true,
                            submitOnEnter: true,
                            body: template,
                            arrangeParents: false,
                            beforeOpen: function () {
                                var input = document.getElementById(cssPrefix + "-dialog-form-input");
                                if (defVal) {
                                    input.value = defVal;
                                }
                                input.focus();
                            }
                        };
                        var processInput = function (callback) {
                            var input = document.getElementById(cssPrefix + "-dialog-form-input");
                            var result = input.value;
                            if (result && result.replace(/\s/g, '').length > 0) {
                                callback(result);
                                return true;
                            }
                            input.classList.add('eqjs-invalid');
                            return false;
                        };
                        if (callback) {
                            options.onSubmit = function () {
                                return processInput(callback);
                            };
                            options.onCancel = function () {
                                callback("");
                            };
                            this.open(options);
                            return;
                        }
                        return new Promise(function (resolve) {
                            options.onSubmit = function () {
                                return processInput(resolve);
                            };
                            options.onCancel = function () {
                                resolve("");
                            };
                            _this.open(options);
                        });
                    };
                    DefaultDialogService.prototype.open = function (options, data) {
                        var _this = this;
                        var dialog = new DefaultDialog(options, data);
                        var onDestroy = options.onDestroy;
                        options.onDestroy = function (dlg) {
                            _this.untrack(dlg);
                            onDestroy && onDestroy(dlg);
                        };
                        dialog.open();
                        this.track(dialog);
                        return dialog;
                    };
                    DefaultDialogService.prototype.createSet = function (options) {
                        return new DefaultDialogSet(options, this);
                    };
                    DefaultDialogService.prototype.untrack = function (dlg) {
                        var index = DefaultDialogService.openDialogs.indexOf(dlg);
                        if (index >= 0) {
                            DefaultDialogService.openDialogs.splice(index, 1);
                        }
                    };
                    DefaultDialogService.prototype.track = function (dlg) {
                        DefaultDialogService.openDialogs.push(dlg);
                    };
                    DefaultDialogService.prototype.openProgress = function (options) {
                        var _this = this;
                        var dialog = new DefaultProgressDialog(options);
                        var onDestroy = options.onDestroy;
                        options.onDestroy = function (dlg) {
                            _this.untrack(dlg);
                            onDestroy && onDestroy(dlg);
                        };
                        dialog.open();
                        this.track(dialog);
                        return dialog;
                    };
                    DefaultDialogService.prototype.getAllDialogs = function () {
                        return Array.from(DefaultDialogService.openDialogs);
                    };
                    DefaultDialogService.prototype.closeAllDialogs = function () {
                        for (var _i = 0, _a = Array.from(DefaultDialogService.openDialogs); _i < _a.length; _i++) {
                            var dialog = _a[_i];
                            dialog.close();
                        }
                    };
                    DefaultDialogService.openDialogs = [];
                    return DefaultDialogService;
                }());

                var DefaultDialog = /** @class */ (function () {
                    function DefaultDialog(options, data) {
                        var _this = this;
                        this.options = options;
                        this.submitHandler = function (token) {
                            if (_this.options.onSubmit && _this.options.onSubmit(_this, token) === false) {
                                return false;
                            }
                            _this.destroy();
                            return true;
                        };
                        this.cancelHandler = function () {
                            if (_this.options.onCancel) {
                                _this.options.onCancel(_this);
                            }
                            _this.destroy();
                        };
                        this.keydownHandler = function (ev) {
                            if (ev.keyCode == 13 && _this.isActiveDialog()) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                if (_this.submitHandler()) {
                                    window.removeEventListener('keydown', _this.keydownHandler, false);
                                    return false;
                                }
                            }
                            return true;
                        };
                        this.dialogId = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].generateId('dlg');
                        this.data = data;
                        this.slot =
                            Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', document.body)
                                .attr('tab-index', '-1')
                                .data('dialog-id', this.dialogId)
                                .addClass(cssPrefix + "-modal", 'is-active')
                                .focus()
                                .addChild('div', function (b) {
                                    return b
                                        .addClass('kdlg-modal-background');
                                })
                                .addChild('div', function (b) {
                                    return _this.windowElement = b
                                        .addClass(cssPrefix + "-modal-window")
                                        .addChild('header', function (b) {
                                            _this.headerElement = b
                                                .addClass(cssPrefix + "-header")
                                                .addChild('p', function (b) {
                                                    return b
                                                        .addClass(cssPrefix + "-header-title")
                                                        .addText(options.title);
                                                })
                                                .toDOM();
                                            if (options.closable !== false)
                                                b.addChild('button', function (b) {
                                                    return b
                                                        .addClass(cssPrefix + "-modal-close")
                                                        .on('click', function () {
                                                            _this.cancelHandler();
                                                        })
                                                        .focus();
                                                });
                                        })
                                        .addChild('div', function (b) {
                                            b.addClass(cssPrefix + "-alert-container");
                                            _this.alertElement = b.toDOM();
                                        })
                                        .addChild('section', function (b) {
                                            _this.bodyElement = b
                                                .addClass(cssPrefix + "-body")
                                                .toDOM();
                                            if (typeof options.body === 'string') {
                                                var html = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["liquid"].renderLiquidTemplate(options.body, data);
                                                b.addHtml(html);
                                            }
                                            else {
                                                b.addChildElement(options.body);
                                            }
                                        })
                                        .addChild('footer', function (b) {
                                            var alignClass = null;
                                            if (options.footerAlignment && options.footerAlignment == _dialog_service__WEBPACK_IMPORTED_MODULE_1__[/* DialogFooterAlignment */ "a"].Center) {
                                                alignClass = 'align-center';
                                            }
                                            else {
                                                alignClass = 'align-right';
                                            }
                                            _this.footerElement = b
                                                .addClass(cssPrefix + "-footer")
                                                .toDOM();
                                            b.addClass(alignClass);
                                            if (options.submitable === false)
                                                return;
                                            b.addChild('button', function (bb) {
                                                bb.id(_this.dialogId + '-btn-submit')
                                                    .addClass('kfrm-button', 'is-info')
                                                    .addText(options.submitButtonText || _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].getText('ButtonOK'));
                                                if (options.recaptchaSiteKey) {
                                                    bb.data('sitekey', options.recaptchaSiteKey);
                                                    bb.addClass('g-recaptcha');
                                                    bb.on('click', function (e) {
                                                        if (grecaptcha) {
                                                            grecaptcha.ready(function () {
                                                                grecaptcha.execute(options.recaptchaSiteKey, { action: 'submit' })
                                                                    .then(function (token) {
                                                                        _this.submitHandler(token);
                                                                    });
                                                            });
                                                        }
                                                        else {
                                                            _this.submitHandler();
                                                        }
                                                    });
                                                }
                                                else {
                                                    bb.on('click', function (e) {
                                                        _this.submitHandler();
                                                    });
                                                }
                                                bb.focus();
                                            });
                                            if (options.cancelable !== false)
                                                b.addChild('button', function (bb) {
                                                    return bb
                                                        .id(_this.dialogId + '-btn-cancel')
                                                        .addClass('kfrm-button')
                                                        .addText(options.cancelButtonText || _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].getText('ButtonCancel'))
                                                        .on('click', function (e) {
                                                            _this.cancelHandler();
                                                        });
                                                });
                                        })
                                        .toDOM();
                                })
                                .toDOM();
                    }
                    DefaultDialog.prototype.getData = function () {
                        return this.data;
                    };
                    DefaultDialog.prototype.getRootElement = function () {
                        return this.slot;
                    };
                    DefaultDialog.prototype.getSubmitButtonElement = function () {
                        return document.getElementById(this.dialogId + '-btn-submit');
                    };
                    DefaultDialog.prototype.getCancelButtonElement = function () {
                        return document.getElementById(this.dialogId + '-btn-cancel');
                    };
                    DefaultDialog.prototype.open = function () {
                        var _this = this;
                        if (this.options.beforeOpen) {
                            this.options.beforeOpen(this);
                        }
                        Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(this.slot).show();
                        if (this.options.arrangeParents) {
                            this.arrangeParents(true);
                        }
                        var windowDiv = this.slot
                            .querySelector("." + cssPrefix + "-modal-window");
                        if (this.options.height) {
                            windowDiv.style.height = typeof this.options.height === 'string'
                                ? this.options.height
                                : this.options.height + "px";
                        }
                        if (this.options.width) {
                            windowDiv.style.width = typeof this.options.width === 'string'
                                ? this.options.width
                                : this.options.width + "px";
                        }
                        if (this.options.submitOnEnter) {
                            window.addEventListener('keydown', this.keydownHandler, false);
                        }
                        //clear alert on change in any input element 
                        this.slot.querySelectorAll('input')
                            .forEach(function (element) {
                                return element.addEventListener('input', function () {
                                    _this.clearAlert();
                                    if (_this.options.onInput) {
                                        _this.options.onInput(_this);
                                    }
                                });
                            });
                        if (this.options.onShow) {
                            this.options.onShow(this);
                        }
                    };
                    DefaultDialog.prototype.submit = function () {
                        this.submitHandler();
                    };
                    DefaultDialog.prototype.cancel = function () {
                        this.cancelHandler();
                    };
                    DefaultDialog.prototype.close = function () {
                        this.destroy();
                    };
                    DefaultDialog.prototype.disableButtons = function () {
                        var buttons = this.slot.querySelectorAll('button');
                        buttons.forEach(function (button) { return button.disabled = true; });
                    };
                    DefaultDialog.prototype.enableButtons = function () {
                        var buttons = this.slot.querySelectorAll('button');
                        buttons.forEach(function (button) { return button.disabled = false; });
                    };
                    DefaultDialog.prototype.showAlert = function (text, reason, replace) {
                        var alert = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(cssPrefix + "-alert " + (reason || ''))
                            .addChild('span', function (b) {
                                return b
                                    .addClass(cssPrefix + "-alert-closebtn")
                                    .text('Ã—')
                                    .on('click', function (ev) {
                                        var alert = ev.target.parentElement;
                                        alert.parentElement.removeChild(alert);
                                    });
                            })
                            .addText(text)
                            .toDOM();
                        if (replace === true) {
                            this.clearAlert();
                        }
                        this.alertElement.appendChild(alert);
                    };
                    DefaultDialog.prototype.clearAlert = function () {
                        this.alertElement.innerHTML = '';
                    };
                    DefaultDialog.prototype.destroy = function () {
                        var elem = document.querySelectorAll("[data-dialog-id=\"" + this.dialogId + "\"]");
                        if (elem.length <= 0)
                            return;
                        if (this.options.arrangeParents) {
                            this.arrangeParents(false);
                        }
                        document.body.removeChild(this.slot);
                        if (this.options.submitOnEnter) {
                            window.removeEventListener('keydown', this.keydownHandler, false);
                        }
                        if (this.options.onDestroy) {
                            this.options.onDestroy(this);
                        }
                    };
                    DefaultDialog.prototype.isActiveDialog = function () {
                        var windowDivs = document.documentElement.querySelectorAll('.kdlg-modal');
                        return windowDivs[windowDivs.length - 1] === this.slot;
                    };
                    DefaultDialog.prototype.arrangeParents = function (turnOn) {
                        var windowDivs = document.documentElement.querySelectorAll('.kdlg-modal-window');
                        for (var i = 0; i < windowDivs.length - 1; i++) {
                            if (turnOn) {
                                var offset = i == 0 ? 20 : i * 40 + 20;
                                Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(windowDivs[i])
                                    .setStyle('margin-top', offset + "px")
                                    .setStyle('margin-left', offset + "px");
                            }
                            else {
                                Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(windowDivs[i])
                                    .removeStyle('margin-top')
                                    .removeStyle('margin-left');
                            }
                        }
                    };
                    return DefaultDialog;
                }());

                var DefaultProgressDialog = /** @class */ (function (_super) {
                    __extends(DefaultProgressDialog, _super);
                    function DefaultProgressDialog(options, data) {
                        var _this = this;
                        var contentElement;
                        var progressElement;
                        var body = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addChild('div', function (b) {
                                return contentElement = b
                                    .text(options.content || '')
                                    .toDOM();
                            })
                            .addChild('div', function (b) {
                                b
                                    .addClass(cssPrefix + "-progress-line")
                                    .addChild('div', function (b) {
                                        progressElement = b
                                            .addClass('fill')
                                            .toDOM();
                                        if (options.determinated) {
                                            b.setStyle('width', '0%');
                                        }
                                        else {
                                            b.addClass('indeterminate');
                                        }
                                    });
                            })
                            .toDOM();
                        _this = _super.call(this, {
                            title: options.title,
                            body: body,
                            beforeOpen: options.beforeOpen,
                            onSubmit: options.onSubmit,
                            width: options.width,
                            height: options.height,
                            submitable: false,
                            cancelable: false,
                            closable: false,
                            onDestroy: options.onDestroy
                        }, data) || this;
                        _this.contentElement = contentElement;
                        _this.progressElement = progressElement;
                        return _this;
                    }
                    DefaultProgressDialog.prototype.updateContent = function (content) {
                        this.contentElement.innerText = content;
                    };
                    DefaultProgressDialog.prototype.updateProgress = function (progress) {
                        var _this = this;
                        progress = this.in01(progress);
                        this.progressElement.style.width = progress * 100 + "%";
                        if (progress === 1) {
                            // postpone for 0.5s for smooth closing
                            setTimeout(function () {
                                _this.submit();
                            }, 500);
                        }
                    };
                    DefaultProgressDialog.prototype.in01 = function (num) {
                        if (num > 1)
                            return 1;
                        if (num < 0)
                            return 0;
                        return num;
                    };
                    return DefaultProgressDialog;
                }(DefaultDialog));

                var DefaultDialogSet = /** @class */ (function () {
                    function DefaultDialogSet(options, dialogService) {
                        this.options = options;
                        this.dialogService = dialogService;
                        this.currentDialog = null;
                        this.currentIndex = 0;
                        this.options = options;
                        this.dialogService = dialogService;
                    }
                    DefaultDialogSet.prototype.getCurrent = function () {
                        return this.currentDialog;
                    };
                    DefaultDialogSet.prototype.openNext = function (data) {
                        return this.open(this.currentIndex + 1, data);
                    };
                    DefaultDialogSet.prototype.openPrev = function (data) {
                        return this.open(this.currentIndex - 1, data);
                    };
                    DefaultDialogSet.prototype.open = function (page, data) {
                        if (page < 0) {
                            this.currentIndex = 0;
                        }
                        else if (page >= this.options.length) {
                            this.currentIndex = this.options.length - 1;
                        }
                        else {
                            this.currentIndex = page;
                        }
                        if (this.currentDialog) {
                            try {
                                this.currentDialog.close();
                            }
                            catch (e) { }
                        }
                        var dlgOptions = this.options[this.currentIndex];
                        this.currentDialog = this.dialogService.open(dlgOptions, data);
                        return this.currentDialog;
                    };
                    DefaultDialogSet.prototype.close = function () {
                        if (this.currentDialog) {
                            this.currentDialog.close();
                            this.currentDialog = null;
                        }
                    };
                    return DefaultDialogSet;
                }());

                //# sourceMappingURL=default_dialog_service.js.map
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(30)))

            /***/
        }),
/* 21 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DialogFooterAlignment; });
            var DialogFooterAlignment;
            (function (DialogFooterAlignment) {
                DialogFooterAlignment[DialogFooterAlignment["Left"] = 1] = "Left";
                DialogFooterAlignment[DialogFooterAlignment["Center"] = 2] = "Center";
                DialogFooterAlignment[DialogFooterAlignment["Right"] = 3] = "Right";
            })(DialogFooterAlignment || (DialogFooterAlignment = {}));
            //# sourceMappingURL=dialog_service.js.map

            /***/
        }),
/* 22 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* WEBPACK VAR INJECTION */(function (Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return TextDataFilter; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
                var __assign = (undefined && undefined.__assign) || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };

                var TextDataFilter = /** @class */ (function () {
                    function TextDataFilter(loader, sourceTable, sourceId, isLookup) {
                        if (isLookup === void 0) { isLookup = false; }
                        this.loader = loader;
                        this.sourceTable = sourceTable;
                        this.sourceId = sourceId;
                        this.isLookup = isLookup;
                        this.filterValue = '';
                        //turns off client-side search
                        //for test purposes
                        this.justServerSide = false;
                    }
                    TextDataFilter.prototype.getValue = function () {
                        return this.filterValue;
                    };
                    TextDataFilter.prototype.apply = function (value) {
                        this.filterValue = value;
                        if (this.filterValue) {
                            return this.applyCore();
                        }
                        else {
                            return this.clear();
                        }
                    };
                    TextDataFilter.prototype.clear = function () {
                        this.filterValue = '';
                        return Promise.resolve(this.sourceTable);
                    };
                    TextDataFilter.prototype.applyCore = function () {
                        var _this = this;
                        if (this.sourceTable.getTotal() == this.sourceTable.getCachedCount() && !this.justServerSide) {
                            return this.applyInMemoryFilter();
                        }
                        else {
                            var filters_1 = [
                                { class: "__substring", value: this.filterValue }
                            ];
                            return this.loader.loadChunk({
                                offset: 0,
                                limit: this.sourceTable.chunkSize,
                                needTotal: true,
                                filters: filters_1,
                                sourceId: this.sourceId,
                                lookup: this.isLookup
                            })
                                .then(function (data) {
                                    var filteredTable = new _easydata_core__WEBPACK_IMPORTED_MODULE_0__["EasyDataTable"]({
                                        chunkSize: _this.sourceTable.chunkSize,
                                        loader: {
                                            loadChunk: function (params) {
                                                return _this.loader
                                                    .loadChunk(__assign(__assign({}, params), { filters: filters_1, sourceId: _this.sourceId, lookup: _this.isLookup }));
                                            }
                                        }
                                    });
                                    for (var _i = 0, _a = _this.sourceTable.columns.getItems(); _i < _a.length; _i++) {
                                        var col = _a[_i];
                                        filteredTable.columns.add(col);
                                    }
                                    filteredTable.setTotal(data.total);
                                    for (var _b = 0, _c = data.table.getCachedRows(); _b < _c.length; _b++) {
                                        var row = _c[_b];
                                        filteredTable.addRow(row);
                                    }
                                    return filteredTable;
                                });
                        }
                    };
                    TextDataFilter.prototype.applyInMemoryFilter = function () {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            var filteredTable = new _easydata_core__WEBPACK_IMPORTED_MODULE_0__["EasyDataTable"]({
                                chunkSize: _this.sourceTable.chunkSize,
                                inMemory: true
                            });
                            for (var _i = 0, _a = _this.sourceTable.columns.getItems(); _i < _a.length; _i++) {
                                var col = _a[_i];
                                filteredTable.columns.add(col);
                            }
                            var words = _this.filterValue.split('||').map(function (w) { return w.trim().toLowerCase(); });
                            var suitableColumns = _this.sourceTable.columns.getItems()
                                .filter(function (col) {
                                    return _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].isNumericType(col.type)
                                        || _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getStringDataTypes().indexOf(col.type) >= 0;
                                });
                            var hasEnterance = function (row) {
                                for (var _i = 0, suitableColumns_1 = suitableColumns; _i < suitableColumns_1.length; _i++) {
                                    var col = suitableColumns_1[_i];
                                    var value = row.getValue(col.id);
                                    if (value) {
                                        var normalized = value.toString().toLowerCase();
                                        for (var _a = 0, words_1 = words; _a < words_1.length; _a++) {
                                            var word = words_1[_a];
                                            if (normalized.indexOf(word) >= 0) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            };
                            for (var _b = 0, _c = _this.sourceTable.getCachedRows(); _b < _c.length; _b++) {
                                var row = _c[_b];
                                if (hasEnterance(row)) {
                                    filteredTable.addRow(row);
                                }
                            }
                            filteredTable.setTotal(filteredTable.getCachedCount());
                            resolve(filteredTable);
                        });
                    };
                    return TextDataFilter;
                }());

                //# sourceMappingURL=text_data_filter.js.map
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(31)))

            /***/
        }),
/* 23 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* WEBPACK VAR INJECTION */(function (Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return EntityEditForm; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _easydata_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);




                var EntityEditForm = /** @class */ (function () {
                    function EntityEditForm(context) {
                        this.context = context;
                        this.validators = [new _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_3__[/* DateTimeValidator */ "a"]()];
                    }
                    EntityEditForm.prototype.getHtml = function () {
                        return this.html;
                    };
                    EntityEditForm.prototype.setHtmlInt = function (html) {
                        this.html = html;
                        this.errorsDiv = this.html.querySelector('.errors-block');
                    };
                    EntityEditForm.prototype.validate = function () {
                        this.clearErrors();
                        var inputs = Array.from(this.html.querySelectorAll('input, select'));
                        var isValid = true;
                        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
                            var input = inputs_1[_i];
                            var attr = this.context.getMetaData().getAttributeById(input.name);
                            if (input.type === 'checkbox')
                                continue;
                            var result = this.validateValue(attr, input.value);
                            if (!result.successed) {
                                if (isValid) {
                                    Object(_easydata_ui__WEBPACK_IMPORTED_MODULE_1__["domel"])(this.errorsDiv)
                                        .addChild('ul');
                                }
                                isValid = false;
                                for (var _a = 0, _b = result.messages; _a < _b.length; _a++) {
                                    var message = _b[_a];
                                    this.errorsDiv.firstElementChild.innerHTML += "<li>" + attr.caption + ": " + message + "</li>";
                                }
                            }
                            this.markInputValid(input, result.successed);
                        }
                        return isValid;
                    };
                    EntityEditForm.prototype.getData = function () {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            var filePromises = [];
                            var inputs = Array.from(_this.html
                                .querySelectorAll('input, select, textarea'));
                            var obj = {};
                            var _loop_1 = function (input) {
                                var property = input.name.substring(input.name.lastIndexOf('.') + 1);
                                var attr = _this.context.getMetaData().getAttributeById(input.name);
                                if (input.type === 'checkbox') {
                                    obj[property] = input.checked;
                                }
                                else if (input.type === 'file') {
                                    filePromises.push(_this.fileToBase64(input.files[0])
                                        .then(function (content) { return obj[property] = content; }));
                                }
                                else {
                                    obj[property] = _this.mapValue(attr.dataType, input.value);
                                }
                            };
                            for (var _i = 0, inputs_2 = inputs; _i < inputs_2.length; _i++) {
                                var input = inputs_2[_i];
                                _loop_1(input);
                            }
                            Promise.all(filePromises)
                                .then(function () { return resolve(obj); })
                                .catch(function (e) { return reject(e); });
                        });
                    };
                    EntityEditForm.prototype.fileToBase64 = function (file) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = function () {
                                var result = reader.result.toString();
                                resolve(result.substring(result.indexOf(',') + 1));
                            };
                            reader.onerror = function (error) { return reject(error); };
                        });
                    };
                    EntityEditForm.prototype.useValidator = function () {
                        var validator = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            validator[_i] = arguments[_i];
                        }
                        this.useValidators(validator);
                    };
                    EntityEditForm.prototype.useValidators = function (validators) {
                        this.validators = this.validators.concat(validators);
                    };
                    EntityEditForm.prototype.mapValue = function (type, value) {
                        if (_easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getDateDataTypes().indexOf(type) >= 0) {
                            if (type !== _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Time && value && value.length) {
                                var editFormat = _utils_utils__WEBPACK_IMPORTED_MODULE_2__[/* getEditDateTimeFormat */ "a"](type);
                                var internalFormat = _utils_utils__WEBPACK_IMPORTED_MODULE_2__[/* getInternalDateTimeFormat */ "b"](type);
                                var date = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].strToDateTime(value, editFormat);
                                return _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].dateTimeToStr(date, internalFormat);
                            }
                            return value && value.length ? value : null;
                        }
                        if (_easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].isIntType(type))
                            return parseInt(value);
                        if (_easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].isNumericType(type))
                            return parseFloat(value);
                        return value;
                    };
                    EntityEditForm.prototype.clearErrors = function () {
                        this.errorsDiv.innerHTML = '';
                        this.html.querySelectorAll('input, select').forEach(function (el) {
                            el.classList.remove('is-valid');
                            el.classList.remove('is-invalid');
                        });
                    };
                    EntityEditForm.prototype.markInputValid = function (input, valid) {
                        input.classList.add(valid ? 'is-valid' : 'is-invalid');
                    };
                    EntityEditForm.prototype.validateValue = function (attr, value) {
                        var result = { successed: true, messages: [] };
                        for (var _i = 0, _a = this.validators; _i < _a.length; _i++) {
                            var validator = _a[_i];
                            var res = validator.validate(attr, value);
                            if (!res.successed) {
                                result.successed = false;
                                result.messages = result.messages.concat(res.messages);
                            }
                        }
                        return result;
                    };
                    return EntityEditForm;
                }());

                //# sourceMappingURL=entity_edit_form.js.map
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(31)))

            /***/
        }),
/* 24 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* WEBPACK VAR INJECTION */(function (Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return HttpResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return HttpClient; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _http_action_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _http_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _http_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();
                var __assign = (undefined && undefined.__assign) || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };




                var HttpResponseError = /** @class */ (function (_super) {
                    __extends(HttpResponseError, _super);
                    function HttpResponseError(status, message) {
                        var _this = _super.call(this, message) || this;
                        _this.status = status;
                        return _this;
                    }
                    return HttpResponseError;
                }(Error));

                var HttpClient = /** @class */ (function () {
                    function HttpClient() {
                        this.defaultHeaders = {};
                        this.customPayload = undefined;
                    }
                    HttpClient.prototype.get = function (url, options) {
                        return this.send(_http_method__WEBPACK_IMPORTED_MODULE_2__[/* HttpMethod */ "a"].Get, url, null, options);
                    };
                    HttpClient.prototype.post = function (url, data, options) {
                        return this.send(_http_method__WEBPACK_IMPORTED_MODULE_2__[/* HttpMethod */ "a"].Post, url, data, options);
                    };
                    HttpClient.prototype.put = function (url, data, options) {
                        return this.send(_http_method__WEBPACK_IMPORTED_MODULE_2__[/* HttpMethod */ "a"].Put, url, data, options);
                    };
                    HttpClient.prototype.delete = function (url, data, options) {
                        return this.send(_http_method__WEBPACK_IMPORTED_MODULE_2__[/* HttpMethod */ "a"].Delete, url, data, options);
                    };
                    HttpClient.prototype.send = function (method, url, data, options) {
                        options = options || {};
                        var dataType = options.dataType || 'json';
                        var contentType = options.contentType || (dataType !== 'form-data')
                            ? 'application/json'
                            : null;
                        if (data && dataType != 'form-data' && this.customPayload) {
                            data.data = _utils_utils__WEBPACK_IMPORTED_MODULE_0__[/* utils */ "a"].assignDeep(data.data || {}, this.customPayload);
                        }
                        var XHR = ('onload' in new XMLHttpRequest())
                            ? XMLHttpRequest
                            : window["XDomainRequest"]; //IE support
                        var xhr = new XHR();
                        var desc = {
                            method: method,
                            url: url,
                            headers: __assign(__assign({}, this.defaultHeaders), options.headers || {}),
                            queryParams: options.queryParams || {},
                            data: data
                        };
                        if (contentType)
                            desc.headers['Content-Type'] = contentType;
                        var request = new _http_request__WEBPACK_IMPORTED_MODULE_3__[/* HttpRequest */ "a"](xhr, desc);
                        if (this.beforeEachRequest) {
                            console.warn("HttpClient: 'beforeEachRequest' is deprecated and will be removed in future updates.\n            Use 'onRequest' instead");
                            this.beforeEachRequest(request);
                        }
                        if (this.onRequest) {
                            this.onRequest(request);
                        }
                        var dataToSend = (request.data && typeof request.data !== 'string'
                            && dataType == 'json')
                            ? JSON.stringify(request.data)
                            : request.data;
                        request.open();
                        return new _http_action_result__WEBPACK_IMPORTED_MODULE_1__[/* HttpActionResult */ "a"](request, new Promise(function (resolve, reject) {
                            if (options.responseType)
                                xhr.responseType = options.responseType;
                            xhr.onerror = function (error) {
                                reject(new HttpResponseError(xhr.status, xhr.responseText));
                            };
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState != 4)
                                    return; //we process only the state change to DONE(4)
                                var responseContentType = xhr.getResponseHeader('Content-Type') || '';
                                var status = xhr.status;
                                if (status === 0) {
                                    reject(new HttpResponseError(status, "Network error or the request was aborted"));
                                }
                                else if (status >= 200 && status < 400) {
                                    //Success
                                    var responseObj = (xhr.responseType === 'arraybuffer' || xhr.responseType === 'blob')
                                        ? xhr.response
                                        : (responseContentType.indexOf('application/json') == 0
                                            ? JSON.parse(xhr.responseText)
                                            : xhr.responseText);
                                    resolve(responseObj);
                                }
                                else {
                                    //Error
                                    var rtPromise = (xhr.responseType === 'arraybuffer' || xhr.responseType === 'blob')
                                        ? HttpClient.decodeArrayBuffer(xhr.response)
                                        : Promise.resolve(xhr.responseText);
                                    rtPromise.then(function (responseText) {
                                        var responseObj = (responseContentType.indexOf('application/json') == 0)
                                            ? JSON.parse(responseText)
                                            : responseText;
                                        var message = responseObj.message ||
                                            (status == 404
                                                ? "No such endpoint: " + url
                                                : responseObj);
                                        reject(new HttpResponseError(status, message));
                                    });
                                }
                            };
                            xhr.send(dataToSend);
                        }));
                    };
                    HttpClient.decodeArrayBuffer = function (uintArray) {
                        var reader = new FileReader();
                        return new Promise(function (resolve) {
                            reader.onloadend = function () {
                                if (reader.readyState == FileReader.DONE) {
                                    resolve(reader.result);
                                }
                            };
                            reader.readAsText(new Blob([uintArray]));
                        });
                    };
                    return HttpClient;
                }());

                //# sourceMappingURL=http_client.js.map
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(25)))

            /***/
        }),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

                (function (global, factory) {
                    true ? module.exports = factory() :
                        undefined;
                }(this, (function () {
                    'use strict';

                    function objectOrFunction(x) {
                        var type = typeof x;
                        return x !== null && (type === 'object' || type === 'function');
                    }

                    function isFunction(x) {
                        return typeof x === 'function';
                    }



                    var _isArray = void 0;
                    if (Array.isArray) {
                        _isArray = Array.isArray;
                    } else {
                        _isArray = function (x) {
                            return Object.prototype.toString.call(x) === '[object Array]';
                        };
                    }

                    var isArray = _isArray;

                    var len = 0;
                    var vertxNext = void 0;
                    var customSchedulerFn = void 0;

                    var asap = function asap(callback, arg) {
                        queue[len] = callback;
                        queue[len + 1] = arg;
                        len += 2;
                        if (len === 2) {
                            // If len is 2, that means that we need to schedule an async flush.
                            // If additional callbacks are queued before the queue is flushed, they
                            // will be processed by this flush that we are scheduling.
                            if (customSchedulerFn) {
                                customSchedulerFn(flush);
                            } else {
                                scheduleFlush();
                            }
                        }
                    };

                    function setScheduler(scheduleFn) {
                        customSchedulerFn = scheduleFn;
                    }

                    function setAsap(asapFn) {
                        asap = asapFn;
                    }

                    var browserWindow = typeof window !== 'undefined' ? window : undefined;
                    var browserGlobal = browserWindow || {};
                    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
                    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

                    // test for web worker but not in IE10
                    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

                    // node
                    function useNextTick() {
                        // node version 0.10.x displays a deprecation warning when nextTick is used recursively
                        // see https://github.com/cujojs/when/issues/410 for details
                        return function () {
                            return process.nextTick(flush);
                        };
                    }

                    // vertx
                    function useVertxTimer() {
                        if (typeof vertxNext !== 'undefined') {
                            return function () {
                                vertxNext(flush);
                            };
                        }

                        return useSetTimeout();
                    }

                    function useMutationObserver() {
                        var iterations = 0;
                        var observer = new BrowserMutationObserver(flush);
                        var node = document.createTextNode('');
                        observer.observe(node, { characterData: true });

                        return function () {
                            node.data = iterations = ++iterations % 2;
                        };
                    }

                    // web worker
                    function useMessageChannel() {
                        var channel = new MessageChannel();
                        channel.port1.onmessage = flush;
                        return function () {
                            return channel.port2.postMessage(0);
                        };
                    }

                    function useSetTimeout() {
                        // Store setTimeout reference so es6-promise will be unaffected by
                        // other code modifying setTimeout (like sinon.useFakeTimers())
                        var globalSetTimeout = setTimeout;
                        return function () {
                            return globalSetTimeout(flush, 1);
                        };
                    }

                    var queue = new Array(1000);
                    function flush() {
                        for (var i = 0; i < len; i += 2) {
                            var callback = queue[i];
                            var arg = queue[i + 1];

                            callback(arg);

                            queue[i] = undefined;
                            queue[i + 1] = undefined;
                        }

                        len = 0;
                    }

                    function attemptVertx() {
                        try {
                            var vertx = Function('return this')().require('vertx');
                            vertxNext = vertx.runOnLoop || vertx.runOnContext;
                            return useVertxTimer();
                        } catch (e) {
                            return useSetTimeout();
                        }
                    }

                    var scheduleFlush = void 0;
                    // Decide what async method to use to triggering processing of queued callbacks:
                    if (isNode) {
                        scheduleFlush = useNextTick();
                    } else if (BrowserMutationObserver) {
                        scheduleFlush = useMutationObserver();
                    } else if (isWorker) {
                        scheduleFlush = useMessageChannel();
                    } else if (browserWindow === undefined && "function" === 'function') {
                        scheduleFlush = attemptVertx();
                    } else {
                        scheduleFlush = useSetTimeout();
                    }

                    function then(onFulfillment, onRejection) {
                        var parent = this;

                        var child = new this.constructor(noop);

                        if (child[PROMISE_ID] === undefined) {
                            makePromise(child);
                        }

                        var _state = parent._state;


                        if (_state) {
                            var callback = arguments[_state - 1];
                            asap(function () {
                                return invokeCallback(_state, child, callback, parent._result);
                            });
                        } else {
                            subscribe(parent, child, onFulfillment, onRejection);
                        }

                        return child;
                    }

                    /**
                      `Promise.resolve` returns a promise that will become resolved with the
                      passed `value`. It is shorthand for the following:
                    
                      ```javascript
                      let promise = new Promise(function(resolve, reject){
                        resolve(1);
                      });
                    
                      promise.then(function(value){
                        // value === 1
                      });
                      ```
                    
                      Instead of writing the above, your code now simply becomes the following:
                    
                      ```javascript
                      let promise = Promise.resolve(1);
                    
                      promise.then(function(value){
                        // value === 1
                      });
                      ```
                    
                      @method resolve
                      @static
                      @param {Any} value value that the returned promise will be resolved with
                      Useful for tooling.
                      @return {Promise} a promise that will become fulfilled with the given
                      `value`
                    */
                    function resolve$1(object) {
                        /*jshint validthis:true */
                        var Constructor = this;

                        if (object && typeof object === 'object' && object.constructor === Constructor) {
                            return object;
                        }

                        var promise = new Constructor(noop);
                        resolve(promise, object);
                        return promise;
                    }

                    var PROMISE_ID = Math.random().toString(36).substring(2);

                    function noop() { }

                    var PENDING = void 0;
                    var FULFILLED = 1;
                    var REJECTED = 2;

                    function selfFulfillment() {
                        return new TypeError("You cannot resolve a promise with itself");
                    }

                    function cannotReturnOwn() {
                        return new TypeError('A promises callback cannot return that same promise.');
                    }

                    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                        try {
                            then$$1.call(value, fulfillmentHandler, rejectionHandler);
                        } catch (e) {
                            return e;
                        }
                    }

                    function handleForeignThenable(promise, thenable, then$$1) {
                        asap(function (promise) {
                            var sealed = false;
                            var error = tryThen(then$$1, thenable, function (value) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;
                                if (thenable !== value) {
                                    resolve(promise, value);
                                } else {
                                    fulfill(promise, value);
                                }
                            }, function (reason) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;

                                reject(promise, reason);
                            }, 'Settle: ' + (promise._label || ' unknown promise'));

                            if (!sealed && error) {
                                sealed = true;
                                reject(promise, error);
                            }
                        }, promise);
                    }

                    function handleOwnThenable(promise, thenable) {
                        if (thenable._state === FULFILLED) {
                            fulfill(promise, thenable._result);
                        } else if (thenable._state === REJECTED) {
                            reject(promise, thenable._result);
                        } else {
                            subscribe(thenable, undefined, function (value) {
                                return resolve(promise, value);
                            }, function (reason) {
                                return reject(promise, reason);
                            });
                        }
                    }

                    function handleMaybeThenable(promise, maybeThenable, then$$1) {
                        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                            handleOwnThenable(promise, maybeThenable);
                        } else {
                            if (then$$1 === undefined) {
                                fulfill(promise, maybeThenable);
                            } else if (isFunction(then$$1)) {
                                handleForeignThenable(promise, maybeThenable, then$$1);
                            } else {
                                fulfill(promise, maybeThenable);
                            }
                        }
                    }

                    function resolve(promise, value) {
                        if (promise === value) {
                            reject(promise, selfFulfillment());
                        } else if (objectOrFunction(value)) {
                            var then$$1 = void 0;
                            try {
                                then$$1 = value.then;
                            } catch (error) {
                                reject(promise, error);
                                return;
                            }
                            handleMaybeThenable(promise, value, then$$1);
                        } else {
                            fulfill(promise, value);
                        }
                    }

                    function publishRejection(promise) {
                        if (promise._onerror) {
                            promise._onerror(promise._result);
                        }

                        publish(promise);
                    }

                    function fulfill(promise, value) {
                        if (promise._state !== PENDING) {
                            return;
                        }

                        promise._result = value;
                        promise._state = FULFILLED;

                        if (promise._subscribers.length !== 0) {
                            asap(publish, promise);
                        }
                    }

                    function reject(promise, reason) {
                        if (promise._state !== PENDING) {
                            return;
                        }
                        promise._state = REJECTED;
                        promise._result = reason;

                        asap(publishRejection, promise);
                    }

                    function subscribe(parent, child, onFulfillment, onRejection) {
                        var _subscribers = parent._subscribers;
                        var length = _subscribers.length;


                        parent._onerror = null;

                        _subscribers[length] = child;
                        _subscribers[length + FULFILLED] = onFulfillment;
                        _subscribers[length + REJECTED] = onRejection;

                        if (length === 0 && parent._state) {
                            asap(publish, parent);
                        }
                    }

                    function publish(promise) {
                        var subscribers = promise._subscribers;
                        var settled = promise._state;

                        if (subscribers.length === 0) {
                            return;
                        }

                        var child = void 0,
                            callback = void 0,
                            detail = promise._result;

                        for (var i = 0; i < subscribers.length; i += 3) {
                            child = subscribers[i];
                            callback = subscribers[i + settled];

                            if (child) {
                                invokeCallback(settled, child, callback, detail);
                            } else {
                                callback(detail);
                            }
                        }

                        promise._subscribers.length = 0;
                    }

                    function invokeCallback(settled, promise, callback, detail) {
                        var hasCallback = isFunction(callback),
                            value = void 0,
                            error = void 0,
                            succeeded = true;

                        if (hasCallback) {
                            try {
                                value = callback(detail);
                            } catch (e) {
                                succeeded = false;
                                error = e;
                            }

                            if (promise === value) {
                                reject(promise, cannotReturnOwn());
                                return;
                            }
                        } else {
                            value = detail;
                        }

                        if (promise._state !== PENDING) {
                            // noop
                        } else if (hasCallback && succeeded) {
                            resolve(promise, value);
                        } else if (succeeded === false) {
                            reject(promise, error);
                        } else if (settled === FULFILLED) {
                            fulfill(promise, value);
                        } else if (settled === REJECTED) {
                            reject(promise, value);
                        }
                    }

                    function initializePromise(promise, resolver) {
                        try {
                            resolver(function resolvePromise(value) {
                                resolve(promise, value);
                            }, function rejectPromise(reason) {
                                reject(promise, reason);
                            });
                        } catch (e) {
                            reject(promise, e);
                        }
                    }

                    var id = 0;
                    function nextId() {
                        return id++;
                    }

                    function makePromise(promise) {
                        promise[PROMISE_ID] = id++;
                        promise._state = undefined;
                        promise._result = undefined;
                        promise._subscribers = [];
                    }

                    function validationError() {
                        return new Error('Array Methods must be provided an Array');
                    }

                    var Enumerator = function () {
                        function Enumerator(Constructor, input) {
                            this._instanceConstructor = Constructor;
                            this.promise = new Constructor(noop);

                            if (!this.promise[PROMISE_ID]) {
                                makePromise(this.promise);
                            }

                            if (isArray(input)) {
                                this.length = input.length;
                                this._remaining = input.length;

                                this._result = new Array(this.length);

                                if (this.length === 0) {
                                    fulfill(this.promise, this._result);
                                } else {
                                    this.length = this.length || 0;
                                    this._enumerate(input);
                                    if (this._remaining === 0) {
                                        fulfill(this.promise, this._result);
                                    }
                                }
                            } else {
                                reject(this.promise, validationError());
                            }
                        }

                        Enumerator.prototype._enumerate = function _enumerate(input) {
                            for (var i = 0; this._state === PENDING && i < input.length; i++) {
                                this._eachEntry(input[i], i);
                            }
                        };

                        Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                            var c = this._instanceConstructor;
                            var resolve$$1 = c.resolve;


                            if (resolve$$1 === resolve$1) {
                                var _then = void 0;
                                var error = void 0;
                                var didError = false;
                                try {
                                    _then = entry.then;
                                } catch (e) {
                                    didError = true;
                                    error = e;
                                }

                                if (_then === then && entry._state !== PENDING) {
                                    this._settledAt(entry._state, i, entry._result);
                                } else if (typeof _then !== 'function') {
                                    this._remaining--;
                                    this._result[i] = entry;
                                } else if (c === Promise$1) {
                                    var promise = new c(noop);
                                    if (didError) {
                                        reject(promise, error);
                                    } else {
                                        handleMaybeThenable(promise, entry, _then);
                                    }
                                    this._willSettleAt(promise, i);
                                } else {
                                    this._willSettleAt(new c(function (resolve$$1) {
                                        return resolve$$1(entry);
                                    }), i);
                                }
                            } else {
                                this._willSettleAt(resolve$$1(entry), i);
                            }
                        };

                        Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                            var promise = this.promise;


                            if (promise._state === PENDING) {
                                this._remaining--;

                                if (state === REJECTED) {
                                    reject(promise, value);
                                } else {
                                    this._result[i] = value;
                                }
                            }

                            if (this._remaining === 0) {
                                fulfill(promise, this._result);
                            }
                        };

                        Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                            var enumerator = this;

                            subscribe(promise, undefined, function (value) {
                                return enumerator._settledAt(FULFILLED, i, value);
                            }, function (reason) {
                                return enumerator._settledAt(REJECTED, i, reason);
                            });
                        };

                        return Enumerator;
                    }();

                    /**
                      `Promise.all` accepts an array of promises, and returns a new promise which
                      is fulfilled with an array of fulfillment values for the passed promises, or
                      rejected with the reason of the first passed promise to be rejected. It casts all
                      elements of the passed iterable to promises as it runs this algorithm.
                    
                      Example:
                    
                      ```javascript
                      let promise1 = resolve(1);
                      let promise2 = resolve(2);
                      let promise3 = resolve(3);
                      let promises = [ promise1, promise2, promise3 ];
                    
                      Promise.all(promises).then(function(array){
                        // The array here would be [ 1, 2, 3 ];
                      });
                      ```
                    
                      If any of the `promises` given to `all` are rejected, the first promise
                      that is rejected will be given as an argument to the returned promises's
                      rejection handler. For example:
                    
                      Example:
                    
                      ```javascript
                      let promise1 = resolve(1);
                      let promise2 = reject(new Error("2"));
                      let promise3 = reject(new Error("3"));
                      let promises = [ promise1, promise2, promise3 ];
                    
                      Promise.all(promises).then(function(array){
                        // Code here never runs because there are rejected promises!
                      }, function(error) {
                        // error.message === "2"
                      });
                      ```
                    
                      @method all
                      @static
                      @param {Array} entries array of promises
                      @param {String} label optional string for labeling the promise.
                      Useful for tooling.
                      @return {Promise} promise that is fulfilled when all `promises` have been
                      fulfilled, or rejected if any of them become rejected.
                      @static
                    */
                    function all(entries) {
                        return new Enumerator(this, entries).promise;
                    }

                    /**
                      `Promise.race` returns a new promise which is settled in the same way as the
                      first passed promise to settle.
                    
                      Example:
                    
                      ```javascript
                      let promise1 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 1');
                        }, 200);
                      });
                    
                      let promise2 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 2');
                        }, 100);
                      });
                    
                      Promise.race([promise1, promise2]).then(function(result){
                        // result === 'promise 2' because it was resolved before promise1
                        // was resolved.
                      });
                      ```
                    
                      `Promise.race` is deterministic in that only the state of the first
                      settled promise matters. For example, even if other promises given to the
                      `promises` array argument are resolved, but the first settled promise has
                      become rejected before the other promises became fulfilled, the returned
                      promise will become rejected:
                    
                      ```javascript
                      let promise1 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 1');
                        }, 200);
                      });
                    
                      let promise2 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          reject(new Error('promise 2'));
                        }, 100);
                      });
                    
                      Promise.race([promise1, promise2]).then(function(result){
                        // Code here never runs
                      }, function(reason){
                        // reason.message === 'promise 2' because promise 2 became rejected before
                        // promise 1 became fulfilled
                      });
                      ```
                    
                      An example real-world use case is implementing timeouts:
                    
                      ```javascript
                      Promise.race([ajax('foo.json'), timeout(5000)])
                      ```
                    
                      @method race
                      @static
                      @param {Array} promises array of promises to observe
                      Useful for tooling.
                      @return {Promise} a promise which settles in the same way as the first passed
                      promise to settle.
                    */
                    function race(entries) {
                        /*jshint validthis:true */
                        var Constructor = this;

                        if (!isArray(entries)) {
                            return new Constructor(function (_, reject) {
                                return reject(new TypeError('You must pass an array to race.'));
                            });
                        } else {
                            return new Constructor(function (resolve, reject) {
                                var length = entries.length;
                                for (var i = 0; i < length; i++) {
                                    Constructor.resolve(entries[i]).then(resolve, reject);
                                }
                            });
                        }
                    }

                    /**
                      `Promise.reject` returns a promise rejected with the passed `reason`.
                      It is shorthand for the following:
                    
                      ```javascript
                      let promise = new Promise(function(resolve, reject){
                        reject(new Error('WHOOPS'));
                      });
                    
                      promise.then(function(value){
                        // Code here doesn't run because the promise is rejected!
                      }, function(reason){
                        // reason.message === 'WHOOPS'
                      });
                      ```
                    
                      Instead of writing the above, your code now simply becomes the following:
                    
                      ```javascript
                      let promise = Promise.reject(new Error('WHOOPS'));
                    
                      promise.then(function(value){
                        // Code here doesn't run because the promise is rejected!
                      }, function(reason){
                        // reason.message === 'WHOOPS'
                      });
                      ```
                    
                      @method reject
                      @static
                      @param {Any} reason value that the returned promise will be rejected with.
                      Useful for tooling.
                      @return {Promise} a promise rejected with the given `reason`.
                    */
                    function reject$1(reason) {
                        /*jshint validthis:true */
                        var Constructor = this;
                        var promise = new Constructor(noop);
                        reject(promise, reason);
                        return promise;
                    }

                    function needsResolver() {
                        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                    }

                    function needsNew() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    }

                    /**
                      Promise objects represent the eventual result of an asynchronous operation. The
                      primary way of interacting with a promise is through its `then` method, which
                      registers callbacks to receive either a promise's eventual value or the reason
                      why the promise cannot be fulfilled.
                    
                      Terminology
                      -----------
                    
                      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
                      - `thenable` is an object or function that defines a `then` method.
                      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
                      - `exception` is a value that is thrown using the throw statement.
                      - `reason` is a value that indicates why a promise was rejected.
                      - `settled` the final resting state of a promise, fulfilled or rejected.
                    
                      A promise can be in one of three states: pending, fulfilled, or rejected.
                    
                      Promises that are fulfilled have a fulfillment value and are in the fulfilled
                      state.  Promises that are rejected have a rejection reason and are in the
                      rejected state.  A fulfillment value is never a thenable.
                    
                      Promises can also be said to *resolve* a value.  If this value is also a
                      promise, then the original promise's settled state will match the value's
                      settled state.  So a promise that *resolves* a promise that rejects will
                      itself reject, and a promise that *resolves* a promise that fulfills will
                      itself fulfill.
                    
                    
                      Basic Usage:
                      ------------
                    
                      ```js
                      let promise = new Promise(function(resolve, reject) {
                        // on success
                        resolve(value);
                    
                        // on failure
                        reject(reason);
                      });
                    
                      promise.then(function(value) {
                        // on fulfillment
                      }, function(reason) {
                        // on rejection
                      });
                      ```
                    
                      Advanced Usage:
                      ---------------
                    
                      Promises shine when abstracting away asynchronous interactions such as
                      `XMLHttpRequest`s.
                    
                      ```js
                      function getJSON(url) {
                        return new Promise(function(resolve, reject){
                          let xhr = new XMLHttpRequest();
                    
                          xhr.open('GET', url);
                          xhr.onreadystatechange = handler;
                          xhr.responseType = 'json';
                          xhr.setRequestHeader('Accept', 'application/json');
                          xhr.send();
                    
                          function handler() {
                            if (this.readyState === this.DONE) {
                              if (this.status === 200) {
                                resolve(this.response);
                              } else {
                                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
                              }
                            }
                          };
                        });
                      }
                    
                      getJSON('/posts.json').then(function(json) {
                        // on fulfillment
                      }, function(reason) {
                        // on rejection
                      });
                      ```
                    
                      Unlike callbacks, promises are great composable primitives.
                    
                      ```js
                      Promise.all([
                        getJSON('/posts'),
                        getJSON('/comments')
                      ]).then(function(values){
                        values[0] // => postsJSON
                        values[1] // => commentsJSON
                    
                        return values;
                      });
                      ```
                    
                      @class Promise
                      @param {Function} resolver
                      Useful for tooling.
                      @constructor
                    */

                    var Promise$1 = function () {
                        function Promise(resolver) {
                            this[PROMISE_ID] = nextId();
                            this._result = this._state = undefined;
                            this._subscribers = [];

                            if (noop !== resolver) {
                                typeof resolver !== 'function' && needsResolver();
                                this instanceof Promise ? initializePromise(this, resolver) : needsNew();
                            }
                        }

                        /**
                        The primary way of interacting with a promise is through its `then` method,
                        which registers callbacks to receive either a promise's eventual value or the
                        reason why the promise cannot be fulfilled.
                         ```js
                        findUser().then(function(user){
                          // user is available
                        }, function(reason){
                          // user is unavailable, and you are given the reason why
                        });
                        ```
                         Chaining
                        --------
                         The return value of `then` is itself a promise.  This second, 'downstream'
                        promise is resolved with the return value of the first promise's fulfillment
                        or rejection handler, or rejected if the handler throws an exception.
                         ```js
                        findUser().then(function (user) {
                          return user.name;
                        }, function (reason) {
                          return 'default name';
                        }).then(function (userName) {
                          // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
                          // will be `'default name'`
                        });
                         findUser().then(function (user) {
                          throw new Error('Found user, but still unhappy');
                        }, function (reason) {
                          throw new Error('`findUser` rejected and we're unhappy');
                        }).then(function (value) {
                          // never reached
                        }, function (reason) {
                          // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
                          // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
                        });
                        ```
                        If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
                         ```js
                        findUser().then(function (user) {
                          throw new PedagogicalException('Upstream error');
                        }).then(function (value) {
                          // never reached
                        }).then(function (value) {
                          // never reached
                        }, function (reason) {
                          // The `PedgagocialException` is propagated all the way down to here
                        });
                        ```
                         Assimilation
                        ------------
                         Sometimes the value you want to propagate to a downstream promise can only be
                        retrieved asynchronously. This can be achieved by returning a promise in the
                        fulfillment or rejection handler. The downstream promise will then be pending
                        until the returned promise is settled. This is called *assimilation*.
                         ```js
                        findUser().then(function (user) {
                          return findCommentsByAuthor(user);
                        }).then(function (comments) {
                          // The user's comments are now available
                        });
                        ```
                         If the assimliated promise rejects, then the downstream promise will also reject.
                         ```js
                        findUser().then(function (user) {
                          return findCommentsByAuthor(user);
                        }).then(function (comments) {
                          // If `findCommentsByAuthor` fulfills, we'll have the value here
                        }, function (reason) {
                          // If `findCommentsByAuthor` rejects, we'll have the reason here
                        });
                        ```
                         Simple Example
                        --------------
                         Synchronous Example
                         ```javascript
                        let result;
                         try {
                          result = findResult();
                          // success
                        } catch(reason) {
                          // failure
                        }
                        ```
                         Errback Example
                         ```js
                        findResult(function(result, err){
                          if (err) {
                            // failure
                          } else {
                            // success
                          }
                        });
                        ```
                         Promise Example;
                         ```javascript
                        findResult().then(function(result){
                          // success
                        }, function(reason){
                          // failure
                        });
                        ```
                         Advanced Example
                        --------------
                         Synchronous Example
                         ```javascript
                        let author, books;
                         try {
                          author = findAuthor();
                          books  = findBooksByAuthor(author);
                          // success
                        } catch(reason) {
                          // failure
                        }
                        ```
                         Errback Example
                         ```js
                         function foundBooks(books) {
                         }
                         function failure(reason) {
                         }
                         findAuthor(function(author, err){
                          if (err) {
                            failure(err);
                            // failure
                          } else {
                            try {
                              findBoooksByAuthor(author, function(books, err) {
                                if (err) {
                                  failure(err);
                                } else {
                                  try {
                                    foundBooks(books);
                                  } catch(reason) {
                                    failure(reason);
                                  }
                                }
                              });
                            } catch(error) {
                              failure(err);
                            }
                            // success
                          }
                        });
                        ```
                         Promise Example;
                         ```javascript
                        findAuthor().
                          then(findBooksByAuthor).
                          then(function(books){
                            // found books
                        }).catch(function(reason){
                          // something went wrong
                        });
                        ```
                         @method then
                        @param {Function} onFulfilled
                        @param {Function} onRejected
                        Useful for tooling.
                        @return {Promise}
                        */

                        /**
                        `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
                        as the catch block of a try/catch statement.
                        ```js
                        function findAuthor(){
                        throw new Error('couldn't find that author');
                        }
                        // synchronous
                        try {
                        findAuthor();
                        } catch(reason) {
                        // something went wrong
                        }
                        // async with promises
                        findAuthor().catch(function(reason){
                        // something went wrong
                        });
                        ```
                        @method catch
                        @param {Function} onRejection
                        Useful for tooling.
                        @return {Promise}
                        */


                        Promise.prototype.catch = function _catch(onRejection) {
                            return this.then(null, onRejection);
                        };

                        /**
                          `finally` will be invoked regardless of the promise's fate just as native
                          try/catch/finally behaves
                        
                          Synchronous example:
                        
                          ```js
                          findAuthor() {
                            if (Math.random() > 0.5) {
                              throw new Error();
                            }
                            return new Author();
                          }
                        
                          try {
                            return findAuthor(); // succeed or fail
                          } catch(error) {
                            return findOtherAuther();
                          } finally {
                            // always runs
                            // doesn't affect the return value
                          }
                          ```
                        
                          Asynchronous example:
                        
                          ```js
                          findAuthor().catch(function(reason){
                            return findOtherAuther();
                          }).finally(function(){
                            // author was either found, or not
                          });
                          ```
                        
                          @method finally
                          @param {Function} callback
                          @return {Promise}
                        */


                        Promise.prototype.finally = function _finally(callback) {
                            var promise = this;
                            var constructor = promise.constructor;

                            if (isFunction(callback)) {
                                return promise.then(function (value) {
                                    return constructor.resolve(callback()).then(function () {
                                        return value;
                                    });
                                }, function (reason) {
                                    return constructor.resolve(callback()).then(function () {
                                        throw reason;
                                    });
                                });
                            }

                            return promise.then(callback, callback);
                        };

                        return Promise;
                    }();

                    Promise$1.prototype.then = then;
                    Promise$1.all = all;
                    Promise$1.race = race;
                    Promise$1.resolve = resolve$1;
                    Promise$1.reject = reject$1;
                    Promise$1._setScheduler = setScheduler;
                    Promise$1._setAsap = setAsap;
                    Promise$1._asap = asap;

                    /*global self*/
                    function polyfill() {
                        var local = void 0;

                        if (typeof global !== 'undefined') {
                            local = global;
                        } else if (typeof self !== 'undefined') {
                            local = self;
                        } else {
                            try {
                                local = Function('return this')();
                            } catch (e) {
                                throw new Error('polyfill failed because global object is unavailable in this environment');
                            }
                        }

                        var P = local.Promise;

                        if (P) {
                            var promiseToString = null;
                            try {
                                promiseToString = Object.prototype.toString.call(P.resolve());
                            } catch (e) {
                                // silently ignored
                            }

                            if (promiseToString === '[object Promise]' && !P.cast) {
                                return;
                            }
                        }

                        local.Promise = Promise$1;
                    }

                    // Strange compat..
                    Promise$1.polyfill = polyfill;
                    Promise$1.Promise = Promise$1;

                    return Promise$1;

                })));



                //# sourceMappingURL=es6-promise.map

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(26), __webpack_require__(27)))

            /***/
        }),
/* 26 */
/***/ (function (module, exports) {

            // shim for using process in browser
            var process = module.exports = {};

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function () {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            }())
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                }
                // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }


            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    //normal enviroments in sane situations
                    return clearTimeout(marker);
                }
                // if clearTimeout wasn't available but was latter defined
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }



            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }

            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;

                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }

            process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };

            // v8 likes predictible objects
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};

            function noop() { }

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function (name) { return [] }

            process.binding = function (name) {
                throw new Error('process.binding is not supported');
            };

            process.cwd = function () { return '/' };
            process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function () { return 0; };


            /***/
        }),
/* 27 */
/***/ (function (module, exports) {

            var g;

            // This works in non-strict mode
            g = (function () {
                return this;
            })();

            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }

            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}

            module.exports = g;


            /***/
        }),
/* 28 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* WEBPACK VAR INJECTION */(function (Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return EasyDataTable; });
/* harmony import */ var _data_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _data_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _types_data_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




                var EasyDataTable = /** @class */ (function () {
                    function EasyDataTable(options) {
                        this._chunkSize = 1000;
                        this._elasticChunks = false;
                        this.cachedRows = [];
                        this.total = 0;
                        this.loader = null;
                        this.needTotal = true;
                        this.isInMemory = false;
                        options = options || {};
                        this._chunkSize = options.chunkSize || this._chunkSize;
                        this._elasticChunks = options.elasticChunks || this._elasticChunks;
                        this.loader = options.loader;
                        if (typeof options.inMemory !== 'undefined') {
                            this.isInMemory = options.inMemory;
                        }
                        if (this.isInMemory) {
                            this.needTotal = false;
                        }
                        this._columns = new _data_column__WEBPACK_IMPORTED_MODULE_0__[/* DataColumnList */ "c"]();
                        this.onUpdate = options.onUpdate;
                        if (options.columns) {
                            for (var _i = 0, _a = options.columns; _i < _a.length; _i++) {
                                var colDesc = _a[_i];
                                this._columns.add(colDesc);
                            }
                        }
                        if (options.rows) {
                            for (var _b = 0, _c = options.rows; _b < _c.length; _b++) {
                                var rowData = _c[_b];
                                var row = this.createRow(rowData);
                                this.addRow(row);
                            }
                        }
                        this.needTotal = !this._elasticChunks;
                    }
                    Object.defineProperty(EasyDataTable.prototype, "columns", {
                        get: function () {
                            return this._columns;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(EasyDataTable.prototype, "chunkSize", {
                        get: function () {
                            return this._chunkSize;
                        },
                        set: function (value) {
                            this._chunkSize = value;
                            this.total = 0;
                            this.needTotal = !this.elasticChunks;
                            this.cachedRows = [];
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(EasyDataTable.prototype, "elasticChunks", {
                        get: function () {
                            return this._elasticChunks;
                        },
                        set: function (value) {
                            this._elasticChunks = value;
                            this.total = 0;
                            this.needTotal = !this.elasticChunks;
                            this.cachedRows = [];
                        },
                        enumerable: true,
                        configurable: true
                    });
                    EasyDataTable.prototype.getRows = function (params) {
                        var _this = this;
                        var fromIndex = 0, count = this._chunkSize;
                        if (params) {
                            if ('page' in params) {
                                fromIndex = params.pageSize * (params.page - 1);
                                count = params.pageSize;
                            }
                            else {
                                fromIndex = params.offset;
                                count = params.limit;
                            }
                        }
                        var endIndex = fromIndex + count; //the first index of the next page
                        //if we don't calculate total on this request
                        if (!this.needTotal && !this.elasticChunks) {
                            if (fromIndex >= this.total) {
                                return Promise.resolve([]);
                            }
                            if (endIndex > this.total) {
                                endIndex = this.total;
                            }
                        }
                        if (this.isInMemory && endIndex > this.cachedRows.length) {
                            endIndex = this.cachedRows.length;
                        }
                        var allChunksCached = endIndex <= this.cachedRows.length;
                        if (allChunksCached) {
                            return Promise.resolve(this.cachedRows.slice(fromIndex, endIndex));
                        }
                        //if loader is not defined
                        if (!this.loader) {
                            throw "Loader is not defined. Can't get the rows from " + fromIndex + " to " + endIndex;
                        }
                        // we need total only for the first request
                        var needTotal = this.needTotal;
                        if (this.needTotal) {
                            this.needTotal = false;
                        }
                        var offset = this.cachedRows.length;
                        var limit = endIndex - offset;
                        if (limit < this._chunkSize) {
                            limit = this._chunkSize;
                        }
                        var resultPromise = this.loader.loadChunk({
                            offset: offset,
                            limit: limit,
                            needTotal: needTotal
                        })
                            .then(function (result) {
                                if (needTotal) {
                                    _this.total = result.total;
                                }
                                Array.prototype.push.apply(_this.cachedRows, result.table.getCachedRows());
                                if (endIndex > _this.cachedRows.length) {
                                    endIndex = _this.cachedRows.length;
                                }
                                if (_this.elasticChunks) {
                                    var count_1 = result.table.getCachedCount();
                                    if (count_1 < limit) {
                                        _this.total = _this.cachedRows.length;
                                    }
                                }
                                _this.fireUpdated();
                                return _this.cachedRows.slice(fromIndex, endIndex);
                            });
                        return resultPromise;
                    };
                    EasyDataTable.prototype.getRow = function (index) {
                        return this.getRows({ offset: index, limit: 1 })
                            .then(function (rows) { return rows.length > 0 ? rows[0] : null; });
                    };
                    EasyDataTable.prototype.getTotal = function () {
                        return this.total;
                    };
                    EasyDataTable.prototype.setTotal = function (total) {
                        this.total = total;
                        this.needTotal = false;
                    };
                    EasyDataTable.prototype.getCachedCount = function () {
                        return this.cachedRows.length;
                    };
                    EasyDataTable.prototype.clear = function () {
                        this.columns.clear();
                        this.cachedRows = [];
                        this.total = 0;
                        this.needTotal = !this._elasticChunks;
                        this.fireUpdated();
                    };
                    EasyDataTable.prototype.createRow = function (dataOrRow) {
                        var _this = this;
                        var dateIdx = this._columns.getDateColumnIndexes();
                        var values = new Array(this._columns.count);
                        var getValue = dataOrRow instanceof _data_row__WEBPACK_IMPORTED_MODULE_1__[/* DataRow */ "a"]
                            ? function (colId) { return dataOrRow.getValue(colId); }
                            : function (colId) { return dataOrRow[colId]; };
                        if (dataOrRow) {
                            this.columns.getItems().forEach(function (column) {
                                var value = getValue(column.id);
                                var index = _this.columns.getIndex(column.id);
                                values[index] = (dateIdx.indexOf(index) >= 0)
                                    ? _this.mapDate(value, column.type)
                                    : value;
                            });
                        }
                        return new _data_row__WEBPACK_IMPORTED_MODULE_1__[/* DataRow */ "a"](this._columns, values);
                    };
                    EasyDataTable.prototype.mapDate = function (value, dtype) {
                        if (value) {
                            var result = new Date(value);
                            if (isNaN(result.getTime())
                                && dtype == _types_data_type__WEBPACK_IMPORTED_MODULE_2__[/* DataType */ "a"].Time) {
                                result = _utils_utils__WEBPACK_IMPORTED_MODULE_3__[/* utils */ "a"].strToTime(value);
                            }
                            return result;
                        }
                        return null;
                    };
                    EasyDataTable.prototype.addRow = function (rowOrValues) {
                        var newRow;
                        if (Array.isArray(rowOrValues)) {
                            var values = rowOrValues;
                            var dateIdx = this._columns.getDateColumnIndexes();
                            if (dateIdx.length > 0) {
                                for (var _i = 0, dateIdx_1 = dateIdx; _i < dateIdx_1.length; _i++) {
                                    var idx = dateIdx_1[_i];
                                    if (values[idx]) {
                                        values[idx] = this.mapDate(values[idx], this._columns.get(idx).type);
                                    }
                                }
                            }
                            newRow = new _data_row__WEBPACK_IMPORTED_MODULE_1__[/* DataRow */ "a"](this._columns, values);
                        }
                        else {
                            newRow = this.createRow(rowOrValues);
                        }
                        this.cachedRows.push(newRow);
                        var cachedTotal = this.getCachedCount();
                        if (cachedTotal > this.total) {
                            this.total = cachedTotal;
                        }
                        return newRow;
                    };
                    EasyDataTable.prototype.getCachedRows = function () {
                        return this.cachedRows;
                    };
                    EasyDataTable.prototype.totalIsKnown = function () {
                        if (this.elasticChunks) {
                            var count = this.getCachedCount();
                            return count === this.total;
                        }
                        return !this.needTotal;
                    };
                    EasyDataTable.prototype.fireUpdated = function () {
                        if (this.onUpdate) {
                            this.onUpdate(this);
                        }
                    };
                    return EasyDataTable;
                }());

                //# sourceMappingURL=easy_data_table.js.map
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(25)))

            /***/
        }),
/* 29 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* WEBPACK VAR INJECTION */(function (Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return EasyGrid; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _utils_drag_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _utils_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _easy_grid_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _easy_grid_columns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _easy_grid_cell_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
                var __assign = (undefined && undefined.__assign) || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
                    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                    for (var r = Array(s), k = 0, i = 0; i < il; i++)
                        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                            r[k] = a[j];
                    return r;
                };







                var DEFAULT_ROW_HEIGHT = 36;
                var DEFAULT_ROW_COUNT = 15;
                var EasyGrid = /** @class */ (function () {
                    function EasyGrid(options) {
                        this.cssPrefix = "keg";
                        this.pagination = { page: 1, pageSize: 30, total: 0 };
                        this.paginationOptions = {
                            maxButtonCount: 10,
                            useBootstrap: false //true
                        };
                        this.defaultDataGridOptions = {
                            slot: null,
                            dataTable: null,
                            fixHeightOnFirstRender: false,
                            syncGridColumns: true,
                            useRowNumeration: true,
                            allowDragDrop: false,
                            aggregates: {
                                settings: null,
                                calculator: null
                            },
                            paging: {
                                enabled: true,
                                pageSize: 30,
                                pageSizeItems: [20, 30, 50, 100, 200]
                            },
                            columnWidths: {
                                autoResize: _easy_grid_options__WEBPACK_IMPORTED_MODULE_4__[/* AutoResizeColumns */ "a"].Always,
                                stringColumns: {
                                    min: 100,
                                    max: 500,
                                    default: 250
                                },
                                numberColumns: {
                                    min: 60,
                                    default: 120
                                },
                                boolColumns: {
                                    min: 50,
                                    default: 80
                                },
                                dateColumns: {
                                    min: 80,
                                    default: 200
                                },
                                otherColumns: {
                                    min: 100,
                                    max: 500,
                                    default: 250
                                },
                                rowNumColumn: {
                                    min: 40,
                                    default: 60
                                }
                            },
                            showPlusButton: false,
                            viewportRowsCount: null,
                            showActiveRow: true
                        };
                        this.rowsOnPagePromise = null;
                        this.containerInitialHeight = 0;
                        this.firstRender = true;
                        this.prevRowTotals = null;
                        this.landingIndex = -1;
                        this.landingSlot = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-col-landing-slot")
                            .addChildElement(Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                                .toDOM())
                            .toDOM();
                        this._activeRowIndex = -1;
                        if (options && options.paging) {
                            options.paging = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].assign(this.defaultDataGridOptions.paging, options.paging);
                        }
                        this.options = this.mergeOptions(options);
                        this.processColumnWidthsOptions();
                        if (!this.options.slot)
                            throw Error('"slot" parameter is required to initialize EasyDataGrid');
                        if (!this.options.dataTable)
                            throw Error('"dataTable" parameter is required to initialize EasyDataGrid');
                        this.dataTable = options.dataTable;
                        this.eventEmitter = new _easydata_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](this);
                        this.cellRendererStore = new _easy_grid_cell_renderer__WEBPACK_IMPORTED_MODULE_6__[/* GridCellRendererStore */ "c"](options);
                        this.columns = new _easy_grid_columns__WEBPACK_IMPORTED_MODULE_5__[/* GridColumnList */ "c"](this.dataTable.columns, this);
                        this.setSlot(this.options.slot);
                        this.init(this.options);
                    }
                    EasyGrid.prototype.mergeOptions = function (options) {
                        var colWidthOptions = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].assignDeep({}, this.defaultDataGridOptions.columnWidths, options.columnWidths);
                        var pagingOptions = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].assignDeep({}, this.defaultDataGridOptions.paging, options.paging);
                        var result = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].assign({}, this.defaultDataGridOptions, options);
                        result.columnWidths = colWidthOptions;
                        result.paging = pagingOptions;
                        return result;
                    };
                    EasyGrid.prototype.processColumnWidthsOptions = function () {
                        var widthOptions = this.options.columnWidths;
                        if (!widthOptions)
                            return;
                        //string columns
                        _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getStringDataTypes().forEach(function (dataType) {
                            widthOptions[dataType] = __assign(__assign({}, widthOptions.stringColumns), widthOptions[dataType]);
                        });
                        //numeric columns
                        _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getNumericDataTypes().forEach(function (dataType) {
                            widthOptions[dataType] = __assign(__assign({}, widthOptions.numberColumns), widthOptions[dataType]);
                        });
                        //bool columns
                        widthOptions[_easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Bool] = __assign(__assign({}, widthOptions.boolColumns), widthOptions[_easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Bool]);
                        //date columns
                        _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getDateDataTypes().forEach(function (dataType) {
                            widthOptions[dataType] = __assign(__assign({}, widthOptions.dateColumns), widthOptions[dataType]);
                        });
                        //other columns
                        var knownTypes = __spreadArrays(_easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getStringDataTypes(), _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getNumericDataTypes(), _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getDateDataTypes(), [
                            _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataType"].Bool
                        ]);
                        _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getAllDataTypes().forEach(function (dataType) {
                            if (!(dataType in knownTypes)) {
                                widthOptions[dataType] = __assign(__assign({}, widthOptions.otherColumns), widthOptions[dataType]);
                            }
                        });
                    };
                    EasyGrid.prototype.setSlot = function (slot) {
                        if (typeof slot === 'string') {
                            if (slot.length) {
                                if (slot[0] === '#') {
                                    this.slot = document.getElementById(slot.substring(1));
                                }
                                else if (slot[0] === '.') {
                                    var result = document.getElementsByClassName(slot.substring(1));
                                    if (result.length)
                                        this.slot = result[0];
                                }
                                else {
                                    throw Error('Unrecognized slot parameter ' +
                                        '(Must be id, class or HTMLElement): ' + slot);
                                }
                            }
                        }
                        else {
                            this.slot = slot;
                        }
                    };
                    EasyGrid.prototype.init = function (options) {
                        var _this = this;
                        if (options.onInit) {
                            this.addEventListener('init', options.onInit);
                        }
                        if (options.onRowClick) {
                            this.addEventListener('rowClick', options.onRowClick);
                        }
                        if (options.onRowDbClick) {
                            this.addEventListener('rowDbClick', options.onRowDbClick);
                        }
                        if (options.onPlusButtonClick) {
                            this.addEventListener('plusButtonClick', options.onPlusButtonClick);
                        }
                        if (options.onColumnChanged) {
                            this.addEventListener('columnChanged', options.onColumnChanged);
                        }
                        if (options.onColumnDeleted) {
                            this.addEventListener('columnDeleted', options.onColumnDeleted);
                        }
                        if (options.onColumnMoved) {
                            this.addEventListener('columnMoved', options.onColumnMoved);
                        }
                        if (options.onPageChanged) {
                            this.addEventListener('pageChanged', options.onPageChanged);
                        }
                        if (options.onActiveRowChanged) {
                            this.addEventListener('activeRowChanged', options.onActiveRowChanged);
                        }
                        this.addEventListener('pageChanged', function (ev) { return _this.activeRowIndex = -1; });
                        _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].assignDeep(this.paginationOptions, options.pagination);
                        this.pagination.pageSize = this.options.paging.pageSize
                            || this.pagination.pageSize;
                        if (this.options.allowDragDrop) {
                            _utils_drag_manager__WEBPACK_IMPORTED_MODULE_1__[/* eqDragManager */ "d"].registerDropContainer({
                                element: this.slot,
                                scopes: ["gridColumnMove"],
                                onDragEnter: function (_, ev) {
                                    _this.slot.classList.add(_utils_ui_utils__WEBPACK_IMPORTED_MODULE_3__[/* eqCssPrefix */ "e"] + "-drophover");
                                    _this.showLandingSlot(ev.pageX, ev.pageY);
                                },
                                onDragOver: function (_, ev) {
                                    _this.showLandingSlot(ev.pageX, ev.pageY);
                                },
                                onDragLeave: function (_, ev) {
                                    ev.dropEffect = _utils_drag_manager__WEBPACK_IMPORTED_MODULE_1__[/* DropEffect */ "b"].Forbid;
                                    _this.slot.classList.remove(_utils_ui_utils__WEBPACK_IMPORTED_MODULE_3__[/* eqCssPrefix */ "e"] + "-drophover");
                                    _this.hideLandingSlot();
                                },
                                onDrop: function (_, ev) {
                                    _this.dataTable.columns.move(ev.data.column, _this.landingIndex);
                                    _this.refresh();
                                    _this.fireEvent({
                                        type: 'columnMoved',
                                        columnId: ev.data.column.id,
                                        newIndex: _this.landingIndex
                                    });
                                }
                            });
                        }
                        this.refresh();
                        this.fireEvent('init');
                    };
                    EasyGrid.prototype.fireEvent = function (event) {
                        if (typeof event === "string") {
                            this.eventEmitter.fire(event);
                        }
                        else {
                            this.eventEmitter.fire(event.type, event);
                        }
                    };
                    EasyGrid.prototype.setData = function (data) {
                        this.dataTable = data;
                        this.clear();
                        this.refresh();
                    };
                    EasyGrid.prototype.getData = function () {
                        return this.dataTable;
                    };
                    EasyGrid.prototype.getColumns = function () {
                        return this.columns;
                    };
                    EasyGrid.prototype.destroy = function () {
                        this.slot.innerHTML = "";
                    };
                    EasyGrid.prototype.refresh = function () {
                        this.clearDOM();
                        this.render();
                    };
                    EasyGrid.prototype.clearDOM = function () {
                        this.slot.innerHTML = '';
                    };
                    EasyGrid.prototype.clear = function () {
                        this.pagination.page = 1;
                        this.clearDOM();
                    };
                    EasyGrid.prototype.render = function () {
                        var _this = this;
                        if (!this.hasData() && !this.options.showPlusButton)
                            return;
                        this.containerInitialHeight = this.slot.clientHeight;
                        this.rootDiv = document.createElement('div');
                        this.rootDiv.style.width = '100%';
                        this.rootDiv.classList.add(this.cssPrefix + "-root");
                        this.columns.sync(this.dataTable.columns, this.options.useRowNumeration);
                        this.renderHeader();
                        this.rootDiv.appendChild(this.headerDiv);
                        this.renderBody();
                        this.rootDiv.appendChild(this.bodyDiv);
                        this.renderFooter();
                        this.rootDiv.appendChild(this.footerDiv);
                        var gridContainer = document.createElement('div');
                        gridContainer.classList.add(this.cssPrefix + "-container");
                        gridContainer.appendChild(this.rootDiv);
                        this.slot.appendChild(gridContainer);
                        var needAutoResize = this.options.columnWidths.autoResize !== _easy_grid_options__WEBPACK_IMPORTED_MODULE_4__[/* AutoResizeColumns */ "a"].Never;
                        if (this.rowsOnPagePromise) {
                            this.rowsOnPagePromise
                                .then(function () { return _this.updateHeight(); })
                                .then(function () {
                                    _this.firstRender = false;
                                    _this.rowsOnPagePromise = null;
                                });
                        }
                        else {
                            setTimeout(function () {
                                _this.updateHeight()
                                    .then(function () {
                                        _this.firstRender = false;
                                        if (needAutoResize) {
                                            _this.resizeColumns();
                                        }
                                    });
                            }, 100);
                        }
                    };
                    EasyGrid.prototype.updateHeight = function () {
                        var _this = this;
                        return new Promise(function (resolve) {
                            if (_this.options.viewportRowsCount) {
                                var firstRow = _this.bodyCellContainerDiv.firstElementChild;
                                var rowHeight = firstRow ? firstRow.offsetHeight : DEFAULT_ROW_HEIGHT;
                                var rowCount = _this.options.viewportRowsCount; // || DEFAULT_ROW_COUNT;
                                var viewportHeight_1 = rowHeight * rowCount;
                                Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(_this.bodyViewportDiv)
                                    .setStyle('height', viewportHeight_1 + "px");
                                setTimeout(function () {
                                    var sbHeight = _this.bodyViewportDiv.offsetHeight - _this.bodyViewportDiv.clientHeight;
                                    viewportHeight_1 = viewportHeight_1 + sbHeight;
                                    Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(_this.bodyViewportDiv)
                                        .setStyle('height', viewportHeight_1 + "px");
                                    resolve();
                                }, 100);
                                return;
                            }
                            else if (_this.containerInitialHeight > 0) {
                                // comment for now since it does not work in all cases
                                // const bodyHeight = this.containerInitialHeight - this.headerDiv.offsetHeight - this.footerDiv.offsetHeight;
                                // domel(this.bodyDiv)
                                //     .setStyle('height', `${bodyHeight}px`);
                            }
                            resolve();
                        })
                            .then(function () {
                                if (_this.options.fixHeightOnFirstRender && _this.firstRender) {
                                    _this.slot.style.height = _this.slot.offsetHeight + "px";
                                }
                            });
                    };
                    EasyGrid.prototype.getContainerWidth = function () {
                        return this.columns.getItems()
                            .filter(function (col) { return col.isVisible; })
                            .map(function (col) { return col.width; })
                            .reduce(function (sum, current) { return sum + current; });
                    };
                    EasyGrid.prototype.renderHeader = function () {
                        var _this = this;
                        this.headerDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-header")
                            .toDOM();
                        this.headerViewportDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', this.headerDiv)
                            .addClass(this.cssPrefix + "-header-viewport")
                            .toDOM();
                        this.headerCellContainerDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', this.headerViewportDiv)
                            .addClass(this.cssPrefix + "-header-cell-container")
                            .toDOM();
                        this.headerRowDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', this.headerCellContainerDiv)
                            .addClass(this.cssPrefix + "-header-row")
                            .toDOM();
                        this.columns.getItems().forEach(function (column, index) {
                            if (!column.isVisible) {
                                return;
                            }
                            var hd = _this.renderColumnHeader(column, index);
                            _this.headerRowDiv.appendChild(hd);
                            if (column.isRowNum) {
                                Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(hd)
                                    .addChildElement(_this.renderHeaderButtons());
                            }
                        });
                        var containerWidth = this.getContainerWidth();
                        Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(this.headerCellContainerDiv)
                            .setStyle('width', containerWidth + "px");
                    };
                    EasyGrid.prototype.hasData = function () {
                        return this.dataTable.columns.count > 0;
                    };
                    EasyGrid.prototype.renderColumnHeader = function (column, index) {
                        var _this = this;
                        var colBuilder = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-header-cell")
                            .data('col-idx', "" + index)
                            .setStyle('width', column.width + "px");
                        if (column.dataColumn) {
                            colBuilder
                                .data('col-id', "" + column.dataColumn.id);
                        }
                        var colDiv = colBuilder.toDOM();
                        Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', colDiv)
                            .addClass(this.cssPrefix + "-header-cell-resize");
                        if (!column.isRowNum) {
                            Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', colDiv)
                                .addClass(this.cssPrefix + "-header-cell-label")
                                .text(column.label);
                        }
                        if (column.description) {
                            Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', colDiv)
                                .addClass('question-mark')
                                .title(column.description);
                        }
                        if (this.options.allowDragDrop) {
                            _utils_drag_manager__WEBPACK_IMPORTED_MODULE_1__[/* eqDragManager */ "d"].registerDraggableItem({
                                element: colDiv,
                                scope: "gridColumnMove",
                                data: { column: column },
                                renderer: function (dragImage) {
                                    dragImage.innerHTML = '';
                                    var attrLabel = document.createElement('div');
                                    attrLabel.innerText = column.label;
                                    dragImage.classList.add(_this.cssPrefix + "-sortable-helper");
                                    dragImage.appendChild(attrLabel);
                                },
                                onDragStart: function (ev) {
                                    ev.dropEffect = _utils_drag_manager__WEBPACK_IMPORTED_MODULE_1__[/* DropEffect */ "b"].Allow;
                                }
                            });
                        }
                        return colDiv;
                    };
                    EasyGrid.prototype.renderBody = function () {
                        var _this = this;
                        this.bodyDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-body")
                            .toDOM();
                        this.bodyViewportDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', this.bodyDiv)
                            .addClass(this.cssPrefix + "-body-viewport")
                            .attr('tabIndex', '0')
                            .toDOM();
                        this.bodyCellContainerDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div', this.bodyViewportDiv)
                            .addClass(this.cssPrefix + "-cell-container")
                            .toDOM();
                        var showAggrs = this.canShowAggregates();
                        if (this.dataTable) {
                            this.showProgress();
                            this.rowsOnPagePromise = this.getRowsToRender()
                                .then(function (rows) {
                                    _this.pagination.total = _this.dataTable.getTotal();
                                    _this.hideProgress();
                                    //prevent double rendering (bad solution, we have to figure out how to avoid this behavior properly)
                                    _this.bodyCellContainerDiv.innerHTML = '';
                                    _this.prevRowTotals = null;
                                    var rowsToRender = 0;
                                    if (rows.length) {
                                        var groups_1 = showAggrs
                                            ? _this.options.aggregates.settings.getGroups()
                                            : [];
                                        rowsToRender = (rows.length < _this.pagination.pageSize)
                                            ? rows.length
                                            : _this.pagination.pageSize;
                                        rows.forEach(function (row, index) {
                                            if (showAggrs)
                                                _this.updateTotalsState(groups_1, row);
                                            //we don't actually render the last row
                                            if (index < rowsToRender) {
                                                var tr = _this.renderRow(row, index);
                                                _this.bodyCellContainerDiv.appendChild(tr);
                                            }
                                        });
                                        var showGrandTotalsOnEachPage = _this.options.aggregates && _this.options.aggregates.showGrandTotalsOnEachPage;
                                        if (showAggrs && (_this.isLastPage() || showGrandTotalsOnEachPage)) {
                                            var row = new _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataRow"](_this.dataTable.columns, new Array(_this.dataTable.columns.count));
                                            _this.updateTotalsState(groups_1, row, true);
                                        }
                                    }
                                    var needAutoResize = _this.options.columnWidths.autoResize !== _easy_grid_options__WEBPACK_IMPORTED_MODULE_4__[/* AutoResizeColumns */ "a"].Never;
                                    if (needAutoResize) {
                                        _this.resizeColumns();
                                    }
                                    else {
                                        var containerWidth = _this.getContainerWidth();
                                        Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(_this.bodyCellContainerDiv)
                                            .setStyle('width', containerWidth + "px");
                                    }
                                    return rowsToRender;
                                })
                                .catch(function (error) { console.error(error); return 0; });
                        }
                        this.bodyViewportDiv.addEventListener('scroll', function (ev) {
                            Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])(_this.headerViewportDiv)
                                .setStyle('margin-left', "-" + _this.bodyViewportDiv.scrollLeft + "px");
                        });
                        this.bodyViewportDiv.addEventListener('keydown', this.onViewportKeydown.bind(this));
                    };
                    EasyGrid.prototype.isLastPage = function () {
                        if (this.dataTable.elasticChunks) {
                            return this.dataTable.totalIsKnown()
                                && (this.pagination.page * this.pagination.pageSize) >= this.pagination.total;
                        }
                        return this.pagination.page * this.pagination.pageSize >= this.pagination.total;
                    };
                    EasyGrid.prototype.canShowAggregates = function () {
                        if (!this.options || !this.options.aggregates || !this.options.aggregates.settings)
                            return false;
                        var aggrSettings = this.options.aggregates.settings;
                        var result = (aggrSettings.hasAggregates() || aggrSettings.hasRecordCount())
                            && (aggrSettings.hasGroups() || aggrSettings.hasGrandTotals());
                        return result;
                    };
                    EasyGrid.prototype.updateTotalsState = function (groups, newRow, isLast) {
                        if (isLast === void 0) { isLast = false; }
                        var aggrSettings = this.options.aggregates.settings;
                        if (this.prevRowTotals && aggrSettings.hasGroups()) {
                            var changeLevel = -1;
                            for (var level = 1; level <= groups.length; level++) {
                                var group = groups[level - 1];
                                for (var _i = 0, _a = group.columns; _i < _a.length; _i++) {
                                    var col = _a[_i];
                                    if (!aggrSettings.compareValues(this.prevRowTotals.getValue(col), newRow.getValue(col))) {
                                        changeLevel = level;
                                        break;
                                    }
                                }
                                if (changeLevel !== -1)
                                    break;
                            }
                            if (changeLevel !== -1) {
                                for (var level = groups.length; level >= changeLevel; level--) {
                                    var row = new _easydata_core__WEBPACK_IMPORTED_MODULE_0__["DataRow"](this.dataTable.columns, this.prevRowTotals.toArray());
                                    var tr = this.renderTotalsRow(level, row);
                                    this.bodyCellContainerDiv.appendChild(tr);
                                }
                            }
                        }
                        if (isLast && aggrSettings.hasGrandTotals() && aggrSettings.hasAggregates()) {
                            var tr = this.renderTotalsRow(0, newRow);
                            this.bodyCellContainerDiv.appendChild(tr);
                        }
                        this.prevRowTotals = newRow;
                    };
                    EasyGrid.prototype.applyGroupColumnTemplate = function (template, value, count) {
                        var result = template.replace(/{{\s*GroupValue\s*}}/g, value ? "<span>" + value + "</span>" : '-');
                        result = result.replace(/{{\s*GroupCount\s*}}/g, count ? "<span>" + count + "</span>" : '-');
                        return result;
                    };
                    EasyGrid.prototype.renderTotalsRow = function (level, row) {
                        var _this = this;
                        var aggrSettings = this.options.aggregates.settings;
                        var group = (level > 0)
                            ? aggrSettings.getGroups()[level - 1]
                            : { columns: [], aggregates: aggrSettings.getAggregates() };
                        var rowBuilder = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-row")
                            .addClass(this.cssPrefix + "-row-totals")
                            .addClass(this.cssPrefix + "-totals-lv" + level)
                            .data('totals-level', "" + level)
                            .attr('tabindex', '-1');
                        var rowElement = rowBuilder.toDOM();
                        this.columns.getItems().forEach(function (column, index) {
                            if (!column.isVisible) {
                                return;
                            }
                            var val = '';
                            var colIndex = !column.isRowNum
                                ? _this.dataTable.columns.getIndex(column.dataColumn.id)
                                : -1;
                            if (!column.isRowNum && column.dataColumn) {
                                if (group.columns.indexOf(column.dataColumn.id) >= 0) {
                                    val = row.getValue(colIndex);
                                }
                                ;
                            }
                            if (colIndex == _this.dataTable.columns.count - 1) {
                                val = '.  .  .  .  .  .';
                            }
                            rowElement.appendChild(_this.renderCell(column, index, val, rowElement));
                        });
                        var aggrContainer = this.options.aggregates.calculator.getAggrContainer();
                        var aggrCols = aggrSettings.getAggregates().map(function (c) { return c.colId; });
                        var key = aggrSettings.buildGroupKey(group, row);
                        aggrContainer.getAggregateData(level, key)
                            .then(function (values) {
                                for (var _i = 0, aggrCols_1 = aggrCols; _i < aggrCols_1.length; _i++) {
                                    var aggrColId = aggrCols_1[_i];
                                    row.setValue(aggrColId, values[aggrColId]);
                                }
                                rowElement.innerHTML = '';
                                _this.columns.getItems().forEach(function (column, index) {
                                    if (!column.isVisible) {
                                        return;
                                    }
                                    var val = '';
                                    var colIndex = !column.isRowNum
                                        ? _this.dataTable.columns.getIndex(column.dataColumn.id)
                                        : -1;
                                    if (!column.isRowNum) {
                                        var isLastGroupColumn = false;
                                        if (column.dataColumn) {
                                            var groupColIndex = group.columns.indexOf(column.dataColumn.id);
                                            var aggrColIndex = aggrCols.indexOf(column.dataColumn.id);
                                            if (level > 0) {
                                                isLastGroupColumn = groupColIndex == group.columns.length - 1;
                                            }
                                            else {
                                                //if it's a grand total row consider first column as the last group column
                                                isLastGroupColumn = colIndex == 0;
                                            }
                                            if (groupColIndex >= 0 || aggrColIndex >= 0) {
                                                val = row.getValue(colIndex);
                                            }
                                            ;
                                        }
                                        var groupFooterTemplate = '';
                                        if (level > 0) {
                                            groupFooterTemplate = column.dataColumn.groupFooterColumnTemplate;
                                            //set the default template for the last grouping column
                                            if (!groupFooterTemplate && aggrSettings.hasRecordCount() && isLastGroupColumn) {
                                                groupFooterTemplate = '{{GroupValue}} ({{GroupCount}})';
                                            }
                                        }
                                        if (groupFooterTemplate) {
                                            var cellDiv_1 = _this.renderCell(column, index, val, rowElement);
                                            var innerCell = cellDiv_1.firstChild;
                                            val = innerCell.innerHTML;
                                            val = _this.applyGroupColumnTemplate(groupFooterTemplate, val, values[aggrSettings.COUNT_FIELD_NAME]);
                                        }
                                    }
                                    var cellDiv = _this.renderCell(column, index, val, rowElement);
                                    rowElement.appendChild(cellDiv);
                                });
                            })
                            .catch(function (error) { return console.error(error); });
                        return rowElement;
                    };
                    EasyGrid.prototype.onViewportKeydown = function (ev) {
                        if (this.options.showActiveRow) {
                            var rowCount = this.bodyCellContainerDiv.querySelectorAll("." + this.cssPrefix + "-row").length;
                            var newValue = void 0;
                            switch (ev.key) {
                                case 'ArrowLeft':
                                    break;
                                case 'ArrowRight':
                                    break;
                                case 'ArrowUp':
                                    ev.preventDefault();
                                    newValue = this.activeRowIndex < 0 || this.activeRowIndex >= rowCount ? rowCount - 1 : this.activeRowIndex - 1;
                                    this.activeRowIndex = newValue >= 0 ? newValue : 0;
                                    break;
                                case 'ArrowDown':
                                    ev.preventDefault();
                                    newValue = this.activeRowIndex < 0 || this.activeRowIndex >= rowCount ? 0 : this.activeRowIndex + 1;
                                    this.activeRowIndex = newValue < rowCount ? newValue : rowCount - 1;
                                    break;
                            }
                        }
                    };
                    EasyGrid.prototype.ensureRowVisibility = function (rowOrIndex) {
                        var row = typeof rowOrIndex === 'number'
                            ? this.getDataRow(rowOrIndex)
                            : rowOrIndex;
                        if (row) {
                            var rowRect = row.getBoundingClientRect();
                            var viewportRect = this.bodyViewportDiv.getBoundingClientRect();
                            var rowTop = rowRect.top - viewportRect.top;
                            var rowBottom = rowRect.bottom - viewportRect.top;
                            var viewportHeight = this.bodyViewportDiv.clientHeight;
                            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
                            if (rowTop > 0 &&
                                rowBottom <= viewportHeight &&
                                rowRect.top > 0 &&
                                rowRect.bottom < windowHeight) {
                                return;
                            }
                            if (rowTop < 0) {
                                this.bodyViewportDiv.scrollTop = this.bodyViewportDiv.scrollTop + rowTop;
                            }
                            else if (rowBottom > viewportHeight) {
                                this.bodyViewportDiv.scrollTop = this.bodyViewportDiv.scrollTop + rowBottom - viewportHeight;
                            }
                            rowRect = row.getBoundingClientRect();
                            if (rowRect.top < 0) {
                                document.documentElement.scrollTop = document.documentElement.scrollTop + rowRect.top;
                            }
                            else if (rowRect.bottom > windowHeight) {
                                document.documentElement.scrollTop = document.documentElement.scrollTop + rowRect.bottom - windowHeight;
                            }
                        }
                    };
                    /** Returns a promise with the list of the rows to render on one page.
                     * The list contains pageSize+1 row to make it possible
                     * to render the totals row (if it appears to be on the edge between pages)
                     */
                    EasyGrid.prototype.getRowsToRender = function () {
                        if (this.options.paging.enabled === false) {
                            return Promise.resolve(this.dataTable.getCachedRows());
                        }
                        return this.dataTable.getRows({
                            offset: (this.pagination.page - 1) * this.pagination.pageSize,
                            limit: this.pagination.pageSize + 1
                        })
                            .catch(function (error) {
                                console.error(error);
                                return [];
                            });
                    };
                    EasyGrid.prototype.renderFooter = function () {
                        var _this = this;
                        this.footerDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-footer")
                            .toDOM();
                        if (this.rowsOnPagePromise) {
                            this.rowsOnPagePromise.then(function (count) {
                                _this.footerPaginateDiv = _this.renderPageNavigator();
                                _this.footerDiv.appendChild(_this.footerPaginateDiv);
                                var pageInfoBlock = _this.renderPageInfoBlock(count);
                                _this.footerDiv.appendChild(pageInfoBlock);
                            });
                        }
                    };
                    EasyGrid.prototype.renderPageInfoBlock = function (count) {
                        var pageInfoDiv = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-page-info")
                            .toDOM();
                        var rowCount = this.dataTable.getTotal();
                        if (rowCount > 0) {
                            var fistPageRecordNum = count
                                ? (this.pagination.page - 1) * this.pagination.pageSize + 1
                                : 0;
                            var lastPageRecordNum = count
                                ? fistPageRecordNum + count - 1
                                : 0;
                            var totalStr = this.dataTable.getTotal().toString();
                            if (this.dataTable.elasticChunks) {
                                var count_1 = this.dataTable.getCachedCount();
                                var total = this.dataTable.getTotal();
                                if (count_1 !== total)
                                    totalStr = '?';
                            }
                            pageInfoDiv.innerHTML = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].getText('GridPageInfo')
                                .replace('{FirstPageRecordNum}', "<span>" + fistPageRecordNum.toString() + "</span>")
                                .replace('{LastPageRecordNum}', "<span>" + lastPageRecordNum.toString() + "</span>")
                                .replace('{Total}', "<span>" + totalStr + "</span>");
                        }
                        return pageInfoDiv;
                    };
                    EasyGrid.prototype.showProgress = function () {
                    };
                    EasyGrid.prototype.hideProgress = function () {
                    };
                    EasyGrid.prototype.getLocalIndexByGlobal = function (index) {
                        if (this.pagination) {
                            return index % this.pagination.pageSize;
                        }
                        else {
                            return index;
                        }
                    };
                    EasyGrid.prototype.getGlobalIndexByLocal = function (index) {
                        if (this.pagination) {
                            return (this.pagination.page - 1) * this.pagination.pageSize + index;
                        }
                        else {
                            return index;
                        }
                    };
                    EasyGrid.prototype.renderRow = function (row, index) {
                        var _this = this;
                        var indexGlobal = this.getGlobalIndexByLocal(index);
                        var rowBuilder = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-row")
                            .addClass(this.cssPrefix + "-row-" + (index % 2 == 1 ? 'odd' : 'even'))
                            .data('row-idx', "" + indexGlobal)
                            .attr('tabindex', '-1')
                            .on('click', function (ev) {
                                _this.activeRowIndex = index;
                                _this.fireEvent({
                                    type: 'rowClick',
                                    row: row,
                                    rowIndex: index,
                                    sourceEvent: ev
                                });
                            })
                            .on('dblclick', function (ev) {
                                _this.fireEvent({
                                    type: 'rowDbClick',
                                    row: row,
                                    rowIndex: index,
                                    sourceEvent: ev
                                });
                            });
                        if (index == 0) {
                            rowBuilder.addClass(this.cssPrefix + "-row-first");
                        }
                        var rowElement = rowBuilder.toDOM();
                        if (this.options.showActiveRow && index == this.activeRowIndex) {
                            rowBuilder.addClass(this.cssPrefix + "-row-active");
                        }
                        this.columns.getItems().forEach(function (column, index) {
                            if (!column.isVisible) {
                                return;
                            }
                            var colindex = column.isRowNum ? -1 : _this.dataTable.columns.getIndex(column.dataColumn.id);
                            var val = column.isRowNum ? indexGlobal + 1 : row.getValue(colindex);
                            rowElement.appendChild(_this.renderCell(column, index, val, rowElement));
                        });
                        return rowElement;
                    };
                    EasyGrid.prototype.renderCell = function (column, colIndex, value, rowElement) {
                        var builder = Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-cell")
                            .data('col-idx', "" + colIndex)
                            .attr('tabindex', '-1')
                            .setStyle('width', column.width + "px");
                        if (column.align == _easy_grid_columns__WEBPACK_IMPORTED_MODULE_5__[/* GridColumnAlign */ "b"].LEFT) {
                            builder.addClass(this.cssPrefix + "-cell-align-left");
                        }
                        else if (column.align == _easy_grid_columns__WEBPACK_IMPORTED_MODULE_5__[/* GridColumnAlign */ "b"].RIGHT) {
                            builder.addClass(this.cssPrefix + "-cell-align-right");
                        }
                        else if (column.align == _easy_grid_columns__WEBPACK_IMPORTED_MODULE_5__[/* GridColumnAlign */ "b"].CENTER) {
                            builder.addClass(this.cssPrefix + "-cell-align-center");
                        }
                        var cellElement = builder.toDOM();
                        var valueCell = cellElement.appendChild(Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                            .addClass(this.cssPrefix + "-cell-value")
                            .toDOM());
                        if (column.cellRenderer) {
                            column.cellRenderer(value, column, valueCell, rowElement);
                        }
                        return cellElement;
                    };
                    EasyGrid.prototype.setPage = function (page) {
                        this.pagination.page = page;
                        this.fireEvent({ type: "pageChanged", page: page });
                        this.refresh();
                        this.bodyViewportDiv.focus();
                    };
                    EasyGrid.prototype.renderPageNavigator = function () {
                        var _this = this;
                        var paginateDiv = document.createElement('div');
                        paginateDiv.className = this.cssPrefix + "-pagination-wrapper";
                        var rowCount = this.dataTable.getTotal();
                        if (this.options.paging && this.options.paging.enabled && rowCount > 0) {
                            var prefix_1 = this.paginationOptions.useBootstrap ? '' : this.cssPrefix + "-";
                            var buttonClickHandler_1 = function (ev) {
                                var element = ev.target;
                                if (element.hasAttribute('data-page')) {
                                    var page = parseInt(element.getAttribute('data-page'));
                                    _this.setPage(page);
                                }
                            };
                            var renderPageCell = function (pageIndex, content, disabled, extreme, active) {
                                var li = document.createElement('li');
                                li.className = prefix_1 + "page-item";
                                if (!extreme) {
                                    if (active) {
                                        li.className += ' active';
                                    }
                                    var a_1 = document.createElement('a');
                                    a_1.setAttribute('href', 'javascript:void(0)');
                                    a_1.innerHTML = content || pageIndex.toString();
                                    a_1.setAttribute("data-page", "" + pageIndex);
                                    a_1.className = prefix_1 + "page-link";
                                    a_1.addEventListener("click", buttonClickHandler_1);
                                    li.appendChild(a_1);
                                    return li;
                                }
                                var a = document.createElement('span');
                                a.setAttribute('aria-hidden', 'true');
                                a.className = prefix_1 + "page-link";
                                if (disabled) {
                                    li.className += ' disabled';
                                }
                                else {
                                    if (_this.paginationOptions.useBootstrap) {
                                        a = document.createElement('a');
                                        a.setAttribute('href', 'javascript:void(0)');
                                        a.setAttribute("data-page", "" + pageIndex);
                                    }
                                    else {
                                        var newA = document.createElement('a');
                                        newA.setAttribute('href', 'javascript:void(0)');
                                        newA.setAttribute('data-page', "" + pageIndex);
                                        a = newA;
                                    }
                                    a.className = prefix_1 + "page-link";
                                    a.addEventListener("click", buttonClickHandler_1);
                                }
                                a.innerHTML = content;
                                li.appendChild(a);
                                return li;
                            };
                            if (this.dataTable.elasticChunks) {
                                var pageIndex = this.pagination.page || 1;
                                var ul = document.createElement('ul');
                                ul.className = prefix_1 + "pagination";
                                var cell = renderPageCell(pageIndex - 1, '&laquo;', pageIndex == 1, true, false);
                                ul.appendChild(cell);
                                cell = renderPageCell(pageIndex + 1, '&raquo;', this.isLastPage(), true, false);
                                ul.appendChild(cell);
                                paginateDiv.appendChild(ul);
                            }
                            else {
                                if (this.pagination.total > this.pagination.pageSize) {
                                    var pageIndex = this.pagination.page || 1;
                                    var pageCount = Math.ceil(this.pagination.total / this.pagination.pageSize) || 1;
                                    var maxButtonCount = this.paginationOptions.maxButtonCount || 10;
                                    var zeroBasedIndex = pageIndex - 1;
                                    var firstPageIndex = zeroBasedIndex - (zeroBasedIndex % maxButtonCount) + 1;
                                    var lastPageIndex = firstPageIndex + maxButtonCount - 1;
                                    if (lastPageIndex > pageCount) {
                                        lastPageIndex = pageCount;
                                    }
                                    var ul = document.createElement('ul');
                                    ul.className = prefix_1 + "pagination";
                                    var cell = renderPageCell(firstPageIndex - 1, '&laquo;', firstPageIndex == 1, true, false);
                                    ul.appendChild(cell);
                                    for (var i = firstPageIndex; i <= lastPageIndex; i++) {
                                        cell = renderPageCell(i, i.toString(), false, false, i == pageIndex);
                                        ul.appendChild(cell);
                                    }
                                    cell = renderPageCell(lastPageIndex + 1, '&raquo;', lastPageIndex == pageCount, true, false);
                                    ul.appendChild(cell);
                                    paginateDiv.appendChild(ul);
                                }
                            }
                            if (this.options.paging.allowPageSizeChange) {
                                var selectChangeHandler = function (ev) {
                                    var newValue = parseInt(ev.target.value);
                                    _this.pagination.pageSize = newValue;
                                    _this.pagination.page = 1;
                                    _this.refresh();
                                };
                                var pageSizes = document.createElement('div');
                                pageSizes.className = this.cssPrefix + "-page-sizes";
                                var selectSize = document.createElement('div');
                                selectSize.className = "kfrm-select " + this.cssPrefix + "-page-sizes-select";
                                pageSizes.appendChild(selectSize);
                                var sel_1 = document.createElement('select');
                                var selOptions = this.options.paging.pageSizeItems || [];
                                var selSet = new Set(selOptions);
                                selSet.add(this.options.paging.pageSize || 20);
                                Array.from(selSet).forEach(function (el) {
                                    var option = document.createElement("option");
                                    option.value = el.toString();
                                    option.text = el.toString();
                                    sel_1.appendChild(option);
                                });
                                sel_1.value = (this.pagination.pageSize || 20).toString();
                                selectSize.appendChild(sel_1);
                                sel_1.addEventListener('change', selectChangeHandler);
                                var labelDiv = document.createElement('div');
                                labelDiv.className = this.cssPrefix + "-page-sizes-label";
                                pageSizes.appendChild(labelDiv);
                                var label = document.createElement('span');
                                label.innerText = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].getText('GridItemsPerPage');
                                labelDiv.appendChild(label);
                                paginateDiv.appendChild(pageSizes);
                            }
                        }
                        return paginateDiv;
                    };
                    EasyGrid.prototype.addEventListener = function (eventType, handler) {
                        return this.eventEmitter.subscribe(eventType, function (event) { return handler(event.data); });
                    };
                    EasyGrid.prototype.removeEventListener = function (eventType, handlerId) {
                        this.eventEmitter.unsubscribe(eventType, handlerId);
                    };
                    EasyGrid.prototype.renderHeaderButtons = function () {
                        var _this = this;
                        if (this.options.showPlusButton) {
                            return Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('div')
                                .addClass(this.cssPrefix + "-header-btn-plus")
                                .title(this.options.plusButtonTitle || 'Add')
                                .addChild('a', function (builder) {
                                    return builder
                                        .attr('href', 'javascript:void(0)')
                                        .on('click', function (e) {
                                            e.preventDefault();
                                            _this.fireEvent({
                                                type: 'plusButtonClick',
                                                sourceEvent: e
                                            });
                                        });
                                })
                                .toDOM();
                        }
                        return Object(_utils_dom_elem_builder__WEBPACK_IMPORTED_MODULE_2__[/* domel */ "e"])('span')
                            .addText('#')
                            .toDOM();
                    };
                    EasyGrid.prototype.showLandingSlot = function (pageX, pageY) {
                        var colElems = this.headerRowDiv.querySelectorAll("[class*=" + this.cssPrefix + "-table-col]");
                        var cols = [];
                        for (var i = 1; i < colElems.length; i++) {
                            var rowElem = colElems[i];
                            if (rowElem.style.display === 'none')
                                continue;
                            cols.push(rowElem);
                        }
                        if (cols.length === 0) {
                            this.landingIndex = 0;
                            this.headerRowDiv.appendChild(this.landingSlot);
                            return;
                        }
                        var landingPos = Object(_utils_ui_utils__WEBPACK_IMPORTED_MODULE_3__[/* getElementAbsolutePos */ "g"])(this.landingSlot);
                        if (pageX >= landingPos.x && pageX <= landingPos.x + this.landingSlot.offsetWidth) {
                            return;
                        }
                        var newLandingIndex = this.landingIndex;
                        for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
                            var col = cols_1[_i];
                            var colPos = Object(_utils_ui_utils__WEBPACK_IMPORTED_MODULE_3__[/* getElementAbsolutePos */ "g"])(col);
                            var width = col.offsetWidth;
                            if (pageX > colPos.x && pageX < colPos.x + width) {
                                // -1 as we don't need to count add button here
                                newLandingIndex = parseInt(col.getAttribute('data-col-idx')) - 1;
                            }
                        }
                        if (newLandingIndex != this.landingIndex) {
                            this.landingIndex = newLandingIndex;
                            if (this.landingIndex < cols.length) {
                                this.headerRowDiv.insertBefore(this.landingSlot, cols[this.landingIndex]);
                            }
                            else {
                                this.headerRowDiv.appendChild(this.landingSlot);
                            }
                        }
                    };
                    EasyGrid.prototype.hideLandingSlot = function () {
                        var _this = this;
                        this.landingIndex = -1;
                        setTimeout(function () {
                            if (_this.landingSlot.parentElement) {
                                _this.landingSlot.parentElement.removeChild(_this.landingSlot);
                            }
                        }, 10);
                    };
                    Object.defineProperty(EasyGrid.prototype, "activeRowIndex", {
                        get: function () {
                            return this._activeRowIndex;
                        },
                        set: function (value) {
                            if (value !== this._activeRowIndex) {
                                var oldValue = this._activeRowIndex;
                                this._activeRowIndex = value;
                                this.updateActiveRow();
                                this.fireEvent({
                                    type: 'activeRowChanged',
                                    oldValue: oldValue,
                                    newValue: this.activeRowIndex,
                                    rowIndex: this.getGlobalIndexByLocal(this.activeRowIndex)
                                });
                            }
                        },
                        enumerable: true,
                        configurable: true
                    });
                    EasyGrid.prototype.updateActiveRow = function () {
                        var _this = this;
                        if (this.options.showActiveRow) {
                            var rows = this.bodyCellContainerDiv.querySelectorAll("[class*=" + this.cssPrefix + "-row-active]");
                            rows.forEach(function (el) { el.classList.remove(_this.cssPrefix + "-row-active"); });
                            var activeRow = this.getActiveRow();
                            if (activeRow) {
                                activeRow.classList.add(this.cssPrefix + "-row-active");
                                this.ensureRowVisibility(this.activeRowIndex);
                            }
                        }
                    };
                    EasyGrid.prototype.getActiveRow = function () {
                        return this.getDataRow(this.activeRowIndex);
                    };
                    EasyGrid.prototype.getDataRow = function (index) {
                        var rows = Array.from(this.bodyCellContainerDiv.querySelectorAll("." + this.cssPrefix + "-row:not(." + this.cssPrefix + "-row-totals)"));
                        if (index >= 0 && index < rows.length)
                            return rows[index];
                        return null;
                    };
                    EasyGrid.prototype.focus = function () {
                        this.bodyViewportDiv.focus();
                    };
                    EasyGrid.prototype.resizeColumns = function () {
                        if (this.options.columnWidths.autoResize === _easy_grid_options__WEBPACK_IMPORTED_MODULE_4__[/* AutoResizeColumns */ "a"].Never)
                            return;
                        var containerWidth = this.bodyCellContainerDiv.style.width;
                        this.bodyCellContainerDiv.style.visibility = 'hidden';
                        this.bodyCellContainerDiv.style.width = '1px';
                        //this.headerRowDiv.style.visibility = 'hidden';
                        this.headerRowDiv.style.width = '1px';
                        var sumWidth = 0;
                        var columns = this.columns.getItems();
                        var headerCells = this.headerCellContainerDiv.querySelectorAll("." + this.cssPrefix + "-header-cell");
                        var headerIdx = 0;
                        var _loop_1 = function (idx) {
                            var column = columns[idx];
                            if (!column.isVisible)
                                return "continue";
                            var calculatedWidth = this_1.options.columnWidths.autoResize !== _easy_grid_options__WEBPACK_IMPORTED_MODULE_4__[/* AutoResizeColumns */ "a"].Always && column.dataColumn
                                ? column.dataColumn.calculatedWidth
                                : 0;
                            var cellValues = this_1.bodyCellContainerDiv.querySelectorAll("." + this_1.cssPrefix + "-cell[data-col-idx=\"" + idx + "\"] > ." + this_1.cssPrefix + "-cell-value");
                            var maxWidth = 0;
                            if (calculatedWidth > 0) {
                                sumWidth += calculatedWidth;
                                column.width = calculatedWidth;
                                cellValues.forEach(function (value) {
                                    value.parentElement.style.width = calculatedWidth + "px";
                                });
                                headerCells[headerIdx].style.width = calculatedWidth + "px";
                            }
                            else {
                                if (cellValues.length == 0) {
                                    headerCells[headerIdx].style.width = null;
                                    headerCells[headerIdx].style.whiteSpace = 'nowrap';
                                }
                                maxWidth = headerCells[headerIdx].offsetWidth;
                                if (cellValues.length > 0) {
                                    cellValues.forEach(function (value) {
                                        value.parentElement.style.width = null;
                                        var width = value.parentElement.offsetWidth;
                                        if (width > maxWidth) {
                                            maxWidth = width;
                                        }
                                    });
                                    maxWidth += 3;
                                    var maxOption = column.isRowNum
                                        ? this_1.options.columnWidths.rowNumColumn.max || 500
                                        : this_1.options.columnWidths[column.dataColumn.type].max || 2000;
                                    var minOption = column.isRowNum
                                        ? this_1.options.columnWidths.rowNumColumn.min || 0
                                        : this_1.options.columnWidths[column.dataColumn.type].min || 20;
                                    if (maxWidth > maxOption) {
                                        maxWidth = maxOption;
                                    }
                                    if (maxWidth < minOption) {
                                        maxWidth = minOption;
                                    }
                                    if (_easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].isNumericType(column.type)) {
                                        //increase the calculated width in 1.3 times for numeric columns
                                        maxWidth = Math.round(maxWidth * 1.3);
                                    }
                                    sumWidth += maxWidth;
                                    column.width = maxWidth;
                                    cellValues.forEach(function (value) {
                                        value.parentElement.style.width = maxWidth + "px";
                                    });
                                    headerCells[headerIdx].style.width = maxWidth + "px";
                                    if (column.dataColumn) {
                                        column.dataColumn.calculatedWidth = maxWidth;
                                    }
                                }
                                else {
                                    sumWidth += maxWidth;
                                }
                            }
                            headerIdx++;
                        };
                        var this_1 = this;
                        for (var idx = 0; idx < this.columns.count; idx++) {
                            _loop_1(idx);
                        }
                        if (sumWidth > 0) {
                            this.bodyCellContainerDiv.style.width = sumWidth + "px";
                            this.headerCellContainerDiv.style.width = sumWidth + "px";
                        }
                        else {
                            this.bodyCellContainerDiv.style.width = containerWidth;
                            this.headerCellContainerDiv.style.width = containerWidth;
                        }
                        this.bodyCellContainerDiv.style.visibility = null;
                        this.headerRowDiv.removeAttribute('style');
                    };
                    return EasyGrid;
                }());

                //# sourceMappingURL=easy_grid.js.map
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(30)))

            /***/
        }),
/* 30 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

                (function (global, factory) {
                    true ? module.exports = factory() :
                        undefined;
                }(this, (function () {
                    'use strict';

                    function objectOrFunction(x) {
                        var type = typeof x;
                        return x !== null && (type === 'object' || type === 'function');
                    }

                    function isFunction(x) {
                        return typeof x === 'function';
                    }



                    var _isArray = void 0;
                    if (Array.isArray) {
                        _isArray = Array.isArray;
                    } else {
                        _isArray = function (x) {
                            return Object.prototype.toString.call(x) === '[object Array]';
                        };
                    }

                    var isArray = _isArray;

                    var len = 0;
                    var vertxNext = void 0;
                    var customSchedulerFn = void 0;

                    var asap = function asap(callback, arg) {
                        queue[len] = callback;
                        queue[len + 1] = arg;
                        len += 2;
                        if (len === 2) {
                            // If len is 2, that means that we need to schedule an async flush.
                            // If additional callbacks are queued before the queue is flushed, they
                            // will be processed by this flush that we are scheduling.
                            if (customSchedulerFn) {
                                customSchedulerFn(flush);
                            } else {
                                scheduleFlush();
                            }
                        }
                    };

                    function setScheduler(scheduleFn) {
                        customSchedulerFn = scheduleFn;
                    }

                    function setAsap(asapFn) {
                        asap = asapFn;
                    }

                    var browserWindow = typeof window !== 'undefined' ? window : undefined;
                    var browserGlobal = browserWindow || {};
                    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
                    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

                    // test for web worker but not in IE10
                    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

                    // node
                    function useNextTick() {
                        // node version 0.10.x displays a deprecation warning when nextTick is used recursively
                        // see https://github.com/cujojs/when/issues/410 for details
                        return function () {
                            return process.nextTick(flush);
                        };
                    }

                    // vertx
                    function useVertxTimer() {
                        if (typeof vertxNext !== 'undefined') {
                            return function () {
                                vertxNext(flush);
                            };
                        }

                        return useSetTimeout();
                    }

                    function useMutationObserver() {
                        var iterations = 0;
                        var observer = new BrowserMutationObserver(flush);
                        var node = document.createTextNode('');
                        observer.observe(node, { characterData: true });

                        return function () {
                            node.data = iterations = ++iterations % 2;
                        };
                    }

                    // web worker
                    function useMessageChannel() {
                        var channel = new MessageChannel();
                        channel.port1.onmessage = flush;
                        return function () {
                            return channel.port2.postMessage(0);
                        };
                    }

                    function useSetTimeout() {
                        // Store setTimeout reference so es6-promise will be unaffected by
                        // other code modifying setTimeout (like sinon.useFakeTimers())
                        var globalSetTimeout = setTimeout;
                        return function () {
                            return globalSetTimeout(flush, 1);
                        };
                    }

                    var queue = new Array(1000);
                    function flush() {
                        for (var i = 0; i < len; i += 2) {
                            var callback = queue[i];
                            var arg = queue[i + 1];

                            callback(arg);

                            queue[i] = undefined;
                            queue[i + 1] = undefined;
                        }

                        len = 0;
                    }

                    function attemptVertx() {
                        try {
                            var vertx = Function('return this')().require('vertx');
                            vertxNext = vertx.runOnLoop || vertx.runOnContext;
                            return useVertxTimer();
                        } catch (e) {
                            return useSetTimeout();
                        }
                    }

                    var scheduleFlush = void 0;
                    // Decide what async method to use to triggering processing of queued callbacks:
                    if (isNode) {
                        scheduleFlush = useNextTick();
                    } else if (BrowserMutationObserver) {
                        scheduleFlush = useMutationObserver();
                    } else if (isWorker) {
                        scheduleFlush = useMessageChannel();
                    } else if (browserWindow === undefined && "function" === 'function') {
                        scheduleFlush = attemptVertx();
                    } else {
                        scheduleFlush = useSetTimeout();
                    }

                    function then(onFulfillment, onRejection) {
                        var parent = this;

                        var child = new this.constructor(noop);

                        if (child[PROMISE_ID] === undefined) {
                            makePromise(child);
                        }

                        var _state = parent._state;


                        if (_state) {
                            var callback = arguments[_state - 1];
                            asap(function () {
                                return invokeCallback(_state, child, callback, parent._result);
                            });
                        } else {
                            subscribe(parent, child, onFulfillment, onRejection);
                        }

                        return child;
                    }

                    /**
                      `Promise.resolve` returns a promise that will become resolved with the
                      passed `value`. It is shorthand for the following:
                    
                      ```javascript
                      let promise = new Promise(function(resolve, reject){
                        resolve(1);
                      });
                    
                      promise.then(function(value){
                        // value === 1
                      });
                      ```
                    
                      Instead of writing the above, your code now simply becomes the following:
                    
                      ```javascript
                      let promise = Promise.resolve(1);
                    
                      promise.then(function(value){
                        // value === 1
                      });
                      ```
                    
                      @method resolve
                      @static
                      @param {Any} value value that the returned promise will be resolved with
                      Useful for tooling.
                      @return {Promise} a promise that will become fulfilled with the given
                      `value`
                    */
                    function resolve$1(object) {
                        /*jshint validthis:true */
                        var Constructor = this;

                        if (object && typeof object === 'object' && object.constructor === Constructor) {
                            return object;
                        }

                        var promise = new Constructor(noop);
                        resolve(promise, object);
                        return promise;
                    }

                    var PROMISE_ID = Math.random().toString(36).substring(2);

                    function noop() { }

                    var PENDING = void 0;
                    var FULFILLED = 1;
                    var REJECTED = 2;

                    function selfFulfillment() {
                        return new TypeError("You cannot resolve a promise with itself");
                    }

                    function cannotReturnOwn() {
                        return new TypeError('A promises callback cannot return that same promise.');
                    }

                    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                        try {
                            then$$1.call(value, fulfillmentHandler, rejectionHandler);
                        } catch (e) {
                            return e;
                        }
                    }

                    function handleForeignThenable(promise, thenable, then$$1) {
                        asap(function (promise) {
                            var sealed = false;
                            var error = tryThen(then$$1, thenable, function (value) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;
                                if (thenable !== value) {
                                    resolve(promise, value);
                                } else {
                                    fulfill(promise, value);
                                }
                            }, function (reason) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;

                                reject(promise, reason);
                            }, 'Settle: ' + (promise._label || ' unknown promise'));

                            if (!sealed && error) {
                                sealed = true;
                                reject(promise, error);
                            }
                        }, promise);
                    }

                    function handleOwnThenable(promise, thenable) {
                        if (thenable._state === FULFILLED) {
                            fulfill(promise, thenable._result);
                        } else if (thenable._state === REJECTED) {
                            reject(promise, thenable._result);
                        } else {
                            subscribe(thenable, undefined, function (value) {
                                return resolve(promise, value);
                            }, function (reason) {
                                return reject(promise, reason);
                            });
                        }
                    }

                    function handleMaybeThenable(promise, maybeThenable, then$$1) {
                        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                            handleOwnThenable(promise, maybeThenable);
                        } else {
                            if (then$$1 === undefined) {
                                fulfill(promise, maybeThenable);
                            } else if (isFunction(then$$1)) {
                                handleForeignThenable(promise, maybeThenable, then$$1);
                            } else {
                                fulfill(promise, maybeThenable);
                            }
                        }
                    }

                    function resolve(promise, value) {
                        if (promise === value) {
                            reject(promise, selfFulfillment());
                        } else if (objectOrFunction(value)) {
                            var then$$1 = void 0;
                            try {
                                then$$1 = value.then;
                            } catch (error) {
                                reject(promise, error);
                                return;
                            }
                            handleMaybeThenable(promise, value, then$$1);
                        } else {
                            fulfill(promise, value);
                        }
                    }

                    function publishRejection(promise) {
                        if (promise._onerror) {
                            promise._onerror(promise._result);
                        }

                        publish(promise);
                    }

                    function fulfill(promise, value) {
                        if (promise._state !== PENDING) {
                            return;
                        }

                        promise._result = value;
                        promise._state = FULFILLED;

                        if (promise._subscribers.length !== 0) {
                            asap(publish, promise);
                        }
                    }

                    function reject(promise, reason) {
                        if (promise._state !== PENDING) {
                            return;
                        }
                        promise._state = REJECTED;
                        promise._result = reason;

                        asap(publishRejection, promise);
                    }

                    function subscribe(parent, child, onFulfillment, onRejection) {
                        var _subscribers = parent._subscribers;
                        var length = _subscribers.length;


                        parent._onerror = null;

                        _subscribers[length] = child;
                        _subscribers[length + FULFILLED] = onFulfillment;
                        _subscribers[length + REJECTED] = onRejection;

                        if (length === 0 && parent._state) {
                            asap(publish, parent);
                        }
                    }

                    function publish(promise) {
                        var subscribers = promise._subscribers;
                        var settled = promise._state;

                        if (subscribers.length === 0) {
                            return;
                        }

                        var child = void 0,
                            callback = void 0,
                            detail = promise._result;

                        for (var i = 0; i < subscribers.length; i += 3) {
                            child = subscribers[i];
                            callback = subscribers[i + settled];

                            if (child) {
                                invokeCallback(settled, child, callback, detail);
                            } else {
                                callback(detail);
                            }
                        }

                        promise._subscribers.length = 0;
                    }

                    function invokeCallback(settled, promise, callback, detail) {
                        var hasCallback = isFunction(callback),
                            value = void 0,
                            error = void 0,
                            succeeded = true;

                        if (hasCallback) {
                            try {
                                value = callback(detail);
                            } catch (e) {
                                succeeded = false;
                                error = e;
                            }

                            if (promise === value) {
                                reject(promise, cannotReturnOwn());
                                return;
                            }
                        } else {
                            value = detail;
                        }

                        if (promise._state !== PENDING) {
                            // noop
                        } else if (hasCallback && succeeded) {
                            resolve(promise, value);
                        } else if (succeeded === false) {
                            reject(promise, error);
                        } else if (settled === FULFILLED) {
                            fulfill(promise, value);
                        } else if (settled === REJECTED) {
                            reject(promise, value);
                        }
                    }

                    function initializePromise(promise, resolver) {
                        try {
                            resolver(function resolvePromise(value) {
                                resolve(promise, value);
                            }, function rejectPromise(reason) {
                                reject(promise, reason);
                            });
                        } catch (e) {
                            reject(promise, e);
                        }
                    }

                    var id = 0;
                    function nextId() {
                        return id++;
                    }

                    function makePromise(promise) {
                        promise[PROMISE_ID] = id++;
                        promise._state = undefined;
                        promise._result = undefined;
                        promise._subscribers = [];
                    }

                    function validationError() {
                        return new Error('Array Methods must be provided an Array');
                    }

                    var Enumerator = function () {
                        function Enumerator(Constructor, input) {
                            this._instanceConstructor = Constructor;
                            this.promise = new Constructor(noop);

                            if (!this.promise[PROMISE_ID]) {
                                makePromise(this.promise);
                            }

                            if (isArray(input)) {
                                this.length = input.length;
                                this._remaining = input.length;

                                this._result = new Array(this.length);

                                if (this.length === 0) {
                                    fulfill(this.promise, this._result);
                                } else {
                                    this.length = this.length || 0;
                                    this._enumerate(input);
                                    if (this._remaining === 0) {
                                        fulfill(this.promise, this._result);
                                    }
                                }
                            } else {
                                reject(this.promise, validationError());
                            }
                        }

                        Enumerator.prototype._enumerate = function _enumerate(input) {
                            for (var i = 0; this._state === PENDING && i < input.length; i++) {
                                this._eachEntry(input[i], i);
                            }
                        };

                        Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                            var c = this._instanceConstructor;
                            var resolve$$1 = c.resolve;


                            if (resolve$$1 === resolve$1) {
                                var _then = void 0;
                                var error = void 0;
                                var didError = false;
                                try {
                                    _then = entry.then;
                                } catch (e) {
                                    didError = true;
                                    error = e;
                                }

                                if (_then === then && entry._state !== PENDING) {
                                    this._settledAt(entry._state, i, entry._result);
                                } else if (typeof _then !== 'function') {
                                    this._remaining--;
                                    this._result[i] = entry;
                                } else if (c === Promise$1) {
                                    var promise = new c(noop);
                                    if (didError) {
                                        reject(promise, error);
                                    } else {
                                        handleMaybeThenable(promise, entry, _then);
                                    }
                                    this._willSettleAt(promise, i);
                                } else {
                                    this._willSettleAt(new c(function (resolve$$1) {
                                        return resolve$$1(entry);
                                    }), i);
                                }
                            } else {
                                this._willSettleAt(resolve$$1(entry), i);
                            }
                        };

                        Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                            var promise = this.promise;


                            if (promise._state === PENDING) {
                                this._remaining--;

                                if (state === REJECTED) {
                                    reject(promise, value);
                                } else {
                                    this._result[i] = value;
                                }
                            }

                            if (this._remaining === 0) {
                                fulfill(promise, this._result);
                            }
                        };

                        Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                            var enumerator = this;

                            subscribe(promise, undefined, function (value) {
                                return enumerator._settledAt(FULFILLED, i, value);
                            }, function (reason) {
                                return enumerator._settledAt(REJECTED, i, reason);
                            });
                        };

                        return Enumerator;
                    }();

                    /**
                      `Promise.all` accepts an array of promises, and returns a new promise which
                      is fulfilled with an array of fulfillment values for the passed promises, or
                      rejected with the reason of the first passed promise to be rejected. It casts all
                      elements of the passed iterable to promises as it runs this algorithm.
                    
                      Example:
                    
                      ```javascript
                      let promise1 = resolve(1);
                      let promise2 = resolve(2);
                      let promise3 = resolve(3);
                      let promises = [ promise1, promise2, promise3 ];
                    
                      Promise.all(promises).then(function(array){
                        // The array here would be [ 1, 2, 3 ];
                      });
                      ```
                    
                      If any of the `promises` given to `all` are rejected, the first promise
                      that is rejected will be given as an argument to the returned promises's
                      rejection handler. For example:
                    
                      Example:
                    
                      ```javascript
                      let promise1 = resolve(1);
                      let promise2 = reject(new Error("2"));
                      let promise3 = reject(new Error("3"));
                      let promises = [ promise1, promise2, promise3 ];
                    
                      Promise.all(promises).then(function(array){
                        // Code here never runs because there are rejected promises!
                      }, function(error) {
                        // error.message === "2"
                      });
                      ```
                    
                      @method all
                      @static
                      @param {Array} entries array of promises
                      @param {String} label optional string for labeling the promise.
                      Useful for tooling.
                      @return {Promise} promise that is fulfilled when all `promises` have been
                      fulfilled, or rejected if any of them become rejected.
                      @static
                    */
                    function all(entries) {
                        return new Enumerator(this, entries).promise;
                    }

                    /**
                      `Promise.race` returns a new promise which is settled in the same way as the
                      first passed promise to settle.
                    
                      Example:
                    
                      ```javascript
                      let promise1 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 1');
                        }, 200);
                      });
                    
                      let promise2 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 2');
                        }, 100);
                      });
                    
                      Promise.race([promise1, promise2]).then(function(result){
                        // result === 'promise 2' because it was resolved before promise1
                        // was resolved.
                      });
                      ```
                    
                      `Promise.race` is deterministic in that only the state of the first
                      settled promise matters. For example, even if other promises given to the
                      `promises` array argument are resolved, but the first settled promise has
                      become rejected before the other promises became fulfilled, the returned
                      promise will become rejected:
                    
                      ```javascript
                      let promise1 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 1');
                        }, 200);
                      });
                    
                      let promise2 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          reject(new Error('promise 2'));
                        }, 100);
                      });
                    
                      Promise.race([promise1, promise2]).then(function(result){
                        // Code here never runs
                      }, function(reason){
                        // reason.message === 'promise 2' because promise 2 became rejected before
                        // promise 1 became fulfilled
                      });
                      ```
                    
                      An example real-world use case is implementing timeouts:
                    
                      ```javascript
                      Promise.race([ajax('foo.json'), timeout(5000)])
                      ```
                    
                      @method race
                      @static
                      @param {Array} promises array of promises to observe
                      Useful for tooling.
                      @return {Promise} a promise which settles in the same way as the first passed
                      promise to settle.
                    */
                    function race(entries) {
                        /*jshint validthis:true */
                        var Constructor = this;

                        if (!isArray(entries)) {
                            return new Constructor(function (_, reject) {
                                return reject(new TypeError('You must pass an array to race.'));
                            });
                        } else {
                            return new Constructor(function (resolve, reject) {
                                var length = entries.length;
                                for (var i = 0; i < length; i++) {
                                    Constructor.resolve(entries[i]).then(resolve, reject);
                                }
                            });
                        }
                    }

                    /**
                      `Promise.reject` returns a promise rejected with the passed `reason`.
                      It is shorthand for the following:
                    
                      ```javascript
                      let promise = new Promise(function(resolve, reject){
                        reject(new Error('WHOOPS'));
                      });
                    
                      promise.then(function(value){
                        // Code here doesn't run because the promise is rejected!
                      }, function(reason){
                        // reason.message === 'WHOOPS'
                      });
                      ```
                    
                      Instead of writing the above, your code now simply becomes the following:
                    
                      ```javascript
                      let promise = Promise.reject(new Error('WHOOPS'));
                    
                      promise.then(function(value){
                        // Code here doesn't run because the promise is rejected!
                      }, function(reason){
                        // reason.message === 'WHOOPS'
                      });
                      ```
                    
                      @method reject
                      @static
                      @param {Any} reason value that the returned promise will be rejected with.
                      Useful for tooling.
                      @return {Promise} a promise rejected with the given `reason`.
                    */
                    function reject$1(reason) {
                        /*jshint validthis:true */
                        var Constructor = this;
                        var promise = new Constructor(noop);
                        reject(promise, reason);
                        return promise;
                    }

                    function needsResolver() {
                        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                    }

                    function needsNew() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    }

                    /**
                      Promise objects represent the eventual result of an asynchronous operation. The
                      primary way of interacting with a promise is through its `then` method, which
                      registers callbacks to receive either a promise's eventual value or the reason
                      why the promise cannot be fulfilled.
                    
                      Terminology
                      -----------
                    
                      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
                      - `thenable` is an object or function that defines a `then` method.
                      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
                      - `exception` is a value that is thrown using the throw statement.
                      - `reason` is a value that indicates why a promise was rejected.
                      - `settled` the final resting state of a promise, fulfilled or rejected.
                    
                      A promise can be in one of three states: pending, fulfilled, or rejected.
                    
                      Promises that are fulfilled have a fulfillment value and are in the fulfilled
                      state.  Promises that are rejected have a rejection reason and are in the
                      rejected state.  A fulfillment value is never a thenable.
                    
                      Promises can also be said to *resolve* a value.  If this value is also a
                      promise, then the original promise's settled state will match the value's
                      settled state.  So a promise that *resolves* a promise that rejects will
                      itself reject, and a promise that *resolves* a promise that fulfills will
                      itself fulfill.
                    
                    
                      Basic Usage:
                      ------------
                    
                      ```js
                      let promise = new Promise(function(resolve, reject) {
                        // on success
                        resolve(value);
                    
                        // on failure
                        reject(reason);
                      });
                    
                      promise.then(function(value) {
                        // on fulfillment
                      }, function(reason) {
                        // on rejection
                      });
                      ```
                    
                      Advanced Usage:
                      ---------------
                    
                      Promises shine when abstracting away asynchronous interactions such as
                      `XMLHttpRequest`s.
                    
                      ```js
                      function getJSON(url) {
                        return new Promise(function(resolve, reject){
                          let xhr = new XMLHttpRequest();
                    
                          xhr.open('GET', url);
                          xhr.onreadystatechange = handler;
                          xhr.responseType = 'json';
                          xhr.setRequestHeader('Accept', 'application/json');
                          xhr.send();
                    
                          function handler() {
                            if (this.readyState === this.DONE) {
                              if (this.status === 200) {
                                resolve(this.response);
                              } else {
                                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
                              }
                            }
                          };
                        });
                      }
                    
                      getJSON('/posts.json').then(function(json) {
                        // on fulfillment
                      }, function(reason) {
                        // on rejection
                      });
                      ```
                    
                      Unlike callbacks, promises are great composable primitives.
                    
                      ```js
                      Promise.all([
                        getJSON('/posts'),
                        getJSON('/comments')
                      ]).then(function(values){
                        values[0] // => postsJSON
                        values[1] // => commentsJSON
                    
                        return values;
                      });
                      ```
                    
                      @class Promise
                      @param {Function} resolver
                      Useful for tooling.
                      @constructor
                    */

                    var Promise$1 = function () {
                        function Promise(resolver) {
                            this[PROMISE_ID] = nextId();
                            this._result = this._state = undefined;
                            this._subscribers = [];

                            if (noop !== resolver) {
                                typeof resolver !== 'function' && needsResolver();
                                this instanceof Promise ? initializePromise(this, resolver) : needsNew();
                            }
                        }

                        /**
                        The primary way of interacting with a promise is through its `then` method,
                        which registers callbacks to receive either a promise's eventual value or the
                        reason why the promise cannot be fulfilled.
                         ```js
                        findUser().then(function(user){
                          // user is available
                        }, function(reason){
                          // user is unavailable, and you are given the reason why
                        });
                        ```
                         Chaining
                        --------
                         The return value of `then` is itself a promise.  This second, 'downstream'
                        promise is resolved with the return value of the first promise's fulfillment
                        or rejection handler, or rejected if the handler throws an exception.
                         ```js
                        findUser().then(function (user) {
                          return user.name;
                        }, function (reason) {
                          return 'default name';
                        }).then(function (userName) {
                          // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
                          // will be `'default name'`
                        });
                         findUser().then(function (user) {
                          throw new Error('Found user, but still unhappy');
                        }, function (reason) {
                          throw new Error('`findUser` rejected and we're unhappy');
                        }).then(function (value) {
                          // never reached
                        }, function (reason) {
                          // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
                          // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
                        });
                        ```
                        If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
                         ```js
                        findUser().then(function (user) {
                          throw new PedagogicalException('Upstream error');
                        }).then(function (value) {
                          // never reached
                        }).then(function (value) {
                          // never reached
                        }, function (reason) {
                          // The `PedgagocialException` is propagated all the way down to here
                        });
                        ```
                         Assimilation
                        ------------
                         Sometimes the value you want to propagate to a downstream promise can only be
                        retrieved asynchronously. This can be achieved by returning a promise in the
                        fulfillment or rejection handler. The downstream promise will then be pending
                        until the returned promise is settled. This is called *assimilation*.
                         ```js
                        findUser().then(function (user) {
                          return findCommentsByAuthor(user);
                        }).then(function (comments) {
                          // The user's comments are now available
                        });
                        ```
                         If the assimliated promise rejects, then the downstream promise will also reject.
                         ```js
                        findUser().then(function (user) {
                          return findCommentsByAuthor(user);
                        }).then(function (comments) {
                          // If `findCommentsByAuthor` fulfills, we'll have the value here
                        }, function (reason) {
                          // If `findCommentsByAuthor` rejects, we'll have the reason here
                        });
                        ```
                         Simple Example
                        --------------
                         Synchronous Example
                         ```javascript
                        let result;
                         try {
                          result = findResult();
                          // success
                        } catch(reason) {
                          // failure
                        }
                        ```
                         Errback Example
                         ```js
                        findResult(function(result, err){
                          if (err) {
                            // failure
                          } else {
                            // success
                          }
                        });
                        ```
                         Promise Example;
                         ```javascript
                        findResult().then(function(result){
                          // success
                        }, function(reason){
                          // failure
                        });
                        ```
                         Advanced Example
                        --------------
                         Synchronous Example
                         ```javascript
                        let author, books;
                         try {
                          author = findAuthor();
                          books  = findBooksByAuthor(author);
                          // success
                        } catch(reason) {
                          // failure
                        }
                        ```
                         Errback Example
                         ```js
                         function foundBooks(books) {
                         }
                         function failure(reason) {
                         }
                         findAuthor(function(author, err){
                          if (err) {
                            failure(err);
                            // failure
                          } else {
                            try {
                              findBoooksByAuthor(author, function(books, err) {
                                if (err) {
                                  failure(err);
                                } else {
                                  try {
                                    foundBooks(books);
                                  } catch(reason) {
                                    failure(reason);
                                  }
                                }
                              });
                            } catch(error) {
                              failure(err);
                            }
                            // success
                          }
                        });
                        ```
                         Promise Example;
                         ```javascript
                        findAuthor().
                          then(findBooksByAuthor).
                          then(function(books){
                            // found books
                        }).catch(function(reason){
                          // something went wrong
                        });
                        ```
                         @method then
                        @param {Function} onFulfilled
                        @param {Function} onRejected
                        Useful for tooling.
                        @return {Promise}
                        */

                        /**
                        `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
                        as the catch block of a try/catch statement.
                        ```js
                        function findAuthor(){
                        throw new Error('couldn't find that author');
                        }
                        // synchronous
                        try {
                        findAuthor();
                        } catch(reason) {
                        // something went wrong
                        }
                        // async with promises
                        findAuthor().catch(function(reason){
                        // something went wrong
                        });
                        ```
                        @method catch
                        @param {Function} onRejection
                        Useful for tooling.
                        @return {Promise}
                        */


                        Promise.prototype.catch = function _catch(onRejection) {
                            return this.then(null, onRejection);
                        };

                        /**
                          `finally` will be invoked regardless of the promise's fate just as native
                          try/catch/finally behaves
                        
                          Synchronous example:
                        
                          ```js
                          findAuthor() {
                            if (Math.random() > 0.5) {
                              throw new Error();
                            }
                            return new Author();
                          }
                        
                          try {
                            return findAuthor(); // succeed or fail
                          } catch(error) {
                            return findOtherAuther();
                          } finally {
                            // always runs
                            // doesn't affect the return value
                          }
                          ```
                        
                          Asynchronous example:
                        
                          ```js
                          findAuthor().catch(function(reason){
                            return findOtherAuther();
                          }).finally(function(){
                            // author was either found, or not
                          });
                          ```
                        
                          @method finally
                          @param {Function} callback
                          @return {Promise}
                        */


                        Promise.prototype.finally = function _finally(callback) {
                            var promise = this;
                            var constructor = promise.constructor;

                            if (isFunction(callback)) {
                                return promise.then(function (value) {
                                    return constructor.resolve(callback()).then(function () {
                                        return value;
                                    });
                                }, function (reason) {
                                    return constructor.resolve(callback()).then(function () {
                                        throw reason;
                                    });
                                });
                            }

                            return promise.then(callback, callback);
                        };

                        return Promise;
                    }();

                    Promise$1.prototype.then = then;
                    Promise$1.all = all;
                    Promise$1.race = race;
                    Promise$1.resolve = resolve$1;
                    Promise$1.reject = reject$1;
                    Promise$1._setScheduler = setScheduler;
                    Promise$1._setAsap = setAsap;
                    Promise$1._asap = asap;

                    /*global self*/
                    function polyfill() {
                        var local = void 0;

                        if (typeof global !== 'undefined') {
                            local = global;
                        } else if (typeof self !== 'undefined') {
                            local = self;
                        } else {
                            try {
                                local = Function('return this')();
                            } catch (e) {
                                throw new Error('polyfill failed because global object is unavailable in this environment');
                            }
                        }

                        var P = local.Promise;

                        if (P) {
                            var promiseToString = null;
                            try {
                                promiseToString = Object.prototype.toString.call(P.resolve());
                            } catch (e) {
                                // silently ignored
                            }

                            if (promiseToString === '[object Promise]' && !P.cast) {
                                return;
                            }
                        }

                        local.Promise = Promise$1;
                    }

                    // Strange compat..
                    Promise$1.polyfill = polyfill;
                    Promise$1.Promise = Promise$1;

                    return Promise$1;

                })));



                //# sourceMappingURL=es6-promise.map

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(26), __webpack_require__(27)))

            /***/
        }),
/* 31 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

                (function (global, factory) {
                    true ? module.exports = factory() :
                        undefined;
                }(this, (function () {
                    'use strict';

                    function objectOrFunction(x) {
                        var type = typeof x;
                        return x !== null && (type === 'object' || type === 'function');
                    }

                    function isFunction(x) {
                        return typeof x === 'function';
                    }



                    var _isArray = void 0;
                    if (Array.isArray) {
                        _isArray = Array.isArray;
                    } else {
                        _isArray = function (x) {
                            return Object.prototype.toString.call(x) === '[object Array]';
                        };
                    }

                    var isArray = _isArray;

                    var len = 0;
                    var vertxNext = void 0;
                    var customSchedulerFn = void 0;

                    var asap = function asap(callback, arg) {
                        queue[len] = callback;
                        queue[len + 1] = arg;
                        len += 2;
                        if (len === 2) {
                            // If len is 2, that means that we need to schedule an async flush.
                            // If additional callbacks are queued before the queue is flushed, they
                            // will be processed by this flush that we are scheduling.
                            if (customSchedulerFn) {
                                customSchedulerFn(flush);
                            } else {
                                scheduleFlush();
                            }
                        }
                    };

                    function setScheduler(scheduleFn) {
                        customSchedulerFn = scheduleFn;
                    }

                    function setAsap(asapFn) {
                        asap = asapFn;
                    }

                    var browserWindow = typeof window !== 'undefined' ? window : undefined;
                    var browserGlobal = browserWindow || {};
                    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
                    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

                    // test for web worker but not in IE10
                    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

                    // node
                    function useNextTick() {
                        // node version 0.10.x displays a deprecation warning when nextTick is used recursively
                        // see https://github.com/cujojs/when/issues/410 for details
                        return function () {
                            return process.nextTick(flush);
                        };
                    }

                    // vertx
                    function useVertxTimer() {
                        if (typeof vertxNext !== 'undefined') {
                            return function () {
                                vertxNext(flush);
                            };
                        }

                        return useSetTimeout();
                    }

                    function useMutationObserver() {
                        var iterations = 0;
                        var observer = new BrowserMutationObserver(flush);
                        var node = document.createTextNode('');
                        observer.observe(node, { characterData: true });

                        return function () {
                            node.data = iterations = ++iterations % 2;
                        };
                    }

                    // web worker
                    function useMessageChannel() {
                        var channel = new MessageChannel();
                        channel.port1.onmessage = flush;
                        return function () {
                            return channel.port2.postMessage(0);
                        };
                    }

                    function useSetTimeout() {
                        // Store setTimeout reference so es6-promise will be unaffected by
                        // other code modifying setTimeout (like sinon.useFakeTimers())
                        var globalSetTimeout = setTimeout;
                        return function () {
                            return globalSetTimeout(flush, 1);
                        };
                    }

                    var queue = new Array(1000);
                    function flush() {
                        for (var i = 0; i < len; i += 2) {
                            var callback = queue[i];
                            var arg = queue[i + 1];

                            callback(arg);

                            queue[i] = undefined;
                            queue[i + 1] = undefined;
                        }

                        len = 0;
                    }

                    function attemptVertx() {
                        try {
                            var vertx = Function('return this')().require('vertx');
                            vertxNext = vertx.runOnLoop || vertx.runOnContext;
                            return useVertxTimer();
                        } catch (e) {
                            return useSetTimeout();
                        }
                    }

                    var scheduleFlush = void 0;
                    // Decide what async method to use to triggering processing of queued callbacks:
                    if (isNode) {
                        scheduleFlush = useNextTick();
                    } else if (BrowserMutationObserver) {
                        scheduleFlush = useMutationObserver();
                    } else if (isWorker) {
                        scheduleFlush = useMessageChannel();
                    } else if (browserWindow === undefined && "function" === 'function') {
                        scheduleFlush = attemptVertx();
                    } else {
                        scheduleFlush = useSetTimeout();
                    }

                    function then(onFulfillment, onRejection) {
                        var parent = this;

                        var child = new this.constructor(noop);

                        if (child[PROMISE_ID] === undefined) {
                            makePromise(child);
                        }

                        var _state = parent._state;


                        if (_state) {
                            var callback = arguments[_state - 1];
                            asap(function () {
                                return invokeCallback(_state, child, callback, parent._result);
                            });
                        } else {
                            subscribe(parent, child, onFulfillment, onRejection);
                        }

                        return child;
                    }

                    /**
                      `Promise.resolve` returns a promise that will become resolved with the
                      passed `value`. It is shorthand for the following:
                    
                      ```javascript
                      let promise = new Promise(function(resolve, reject){
                        resolve(1);
                      });
                    
                      promise.then(function(value){
                        // value === 1
                      });
                      ```
                    
                      Instead of writing the above, your code now simply becomes the following:
                    
                      ```javascript
                      let promise = Promise.resolve(1);
                    
                      promise.then(function(value){
                        // value === 1
                      });
                      ```
                    
                      @method resolve
                      @static
                      @param {Any} value value that the returned promise will be resolved with
                      Useful for tooling.
                      @return {Promise} a promise that will become fulfilled with the given
                      `value`
                    */
                    function resolve$1(object) {
                        /*jshint validthis:true */
                        var Constructor = this;

                        if (object && typeof object === 'object' && object.constructor === Constructor) {
                            return object;
                        }

                        var promise = new Constructor(noop);
                        resolve(promise, object);
                        return promise;
                    }

                    var PROMISE_ID = Math.random().toString(36).substring(2);

                    function noop() { }

                    var PENDING = void 0;
                    var FULFILLED = 1;
                    var REJECTED = 2;

                    function selfFulfillment() {
                        return new TypeError("You cannot resolve a promise with itself");
                    }

                    function cannotReturnOwn() {
                        return new TypeError('A promises callback cannot return that same promise.');
                    }

                    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                        try {
                            then$$1.call(value, fulfillmentHandler, rejectionHandler);
                        } catch (e) {
                            return e;
                        }
                    }

                    function handleForeignThenable(promise, thenable, then$$1) {
                        asap(function (promise) {
                            var sealed = false;
                            var error = tryThen(then$$1, thenable, function (value) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;
                                if (thenable !== value) {
                                    resolve(promise, value);
                                } else {
                                    fulfill(promise, value);
                                }
                            }, function (reason) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;

                                reject(promise, reason);
                            }, 'Settle: ' + (promise._label || ' unknown promise'));

                            if (!sealed && error) {
                                sealed = true;
                                reject(promise, error);
                            }
                        }, promise);
                    }

                    function handleOwnThenable(promise, thenable) {
                        if (thenable._state === FULFILLED) {
                            fulfill(promise, thenable._result);
                        } else if (thenable._state === REJECTED) {
                            reject(promise, thenable._result);
                        } else {
                            subscribe(thenable, undefined, function (value) {
                                return resolve(promise, value);
                            }, function (reason) {
                                return reject(promise, reason);
                            });
                        }
                    }

                    function handleMaybeThenable(promise, maybeThenable, then$$1) {
                        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                            handleOwnThenable(promise, maybeThenable);
                        } else {
                            if (then$$1 === undefined) {
                                fulfill(promise, maybeThenable);
                            } else if (isFunction(then$$1)) {
                                handleForeignThenable(promise, maybeThenable, then$$1);
                            } else {
                                fulfill(promise, maybeThenable);
                            }
                        }
                    }

                    function resolve(promise, value) {
                        if (promise === value) {
                            reject(promise, selfFulfillment());
                        } else if (objectOrFunction(value)) {
                            var then$$1 = void 0;
                            try {
                                then$$1 = value.then;
                            } catch (error) {
                                reject(promise, error);
                                return;
                            }
                            handleMaybeThenable(promise, value, then$$1);
                        } else {
                            fulfill(promise, value);
                        }
                    }

                    function publishRejection(promise) {
                        if (promise._onerror) {
                            promise._onerror(promise._result);
                        }

                        publish(promise);
                    }

                    function fulfill(promise, value) {
                        if (promise._state !== PENDING) {
                            return;
                        }

                        promise._result = value;
                        promise._state = FULFILLED;

                        if (promise._subscribers.length !== 0) {
                            asap(publish, promise);
                        }
                    }

                    function reject(promise, reason) {
                        if (promise._state !== PENDING) {
                            return;
                        }
                        promise._state = REJECTED;
                        promise._result = reason;

                        asap(publishRejection, promise);
                    }

                    function subscribe(parent, child, onFulfillment, onRejection) {
                        var _subscribers = parent._subscribers;
                        var length = _subscribers.length;


                        parent._onerror = null;

                        _subscribers[length] = child;
                        _subscribers[length + FULFILLED] = onFulfillment;
                        _subscribers[length + REJECTED] = onRejection;

                        if (length === 0 && parent._state) {
                            asap(publish, parent);
                        }
                    }

                    function publish(promise) {
                        var subscribers = promise._subscribers;
                        var settled = promise._state;

                        if (subscribers.length === 0) {
                            return;
                        }

                        var child = void 0,
                            callback = void 0,
                            detail = promise._result;

                        for (var i = 0; i < subscribers.length; i += 3) {
                            child = subscribers[i];
                            callback = subscribers[i + settled];

                            if (child) {
                                invokeCallback(settled, child, callback, detail);
                            } else {
                                callback(detail);
                            }
                        }

                        promise._subscribers.length = 0;
                    }

                    function invokeCallback(settled, promise, callback, detail) {
                        var hasCallback = isFunction(callback),
                            value = void 0,
                            error = void 0,
                            succeeded = true;

                        if (hasCallback) {
                            try {
                                value = callback(detail);
                            } catch (e) {
                                succeeded = false;
                                error = e;
                            }

                            if (promise === value) {
                                reject(promise, cannotReturnOwn());
                                return;
                            }
                        } else {
                            value = detail;
                        }

                        if (promise._state !== PENDING) {
                            // noop
                        } else if (hasCallback && succeeded) {
                            resolve(promise, value);
                        } else if (succeeded === false) {
                            reject(promise, error);
                        } else if (settled === FULFILLED) {
                            fulfill(promise, value);
                        } else if (settled === REJECTED) {
                            reject(promise, value);
                        }
                    }

                    function initializePromise(promise, resolver) {
                        try {
                            resolver(function resolvePromise(value) {
                                resolve(promise, value);
                            }, function rejectPromise(reason) {
                                reject(promise, reason);
                            });
                        } catch (e) {
                            reject(promise, e);
                        }
                    }

                    var id = 0;
                    function nextId() {
                        return id++;
                    }

                    function makePromise(promise) {
                        promise[PROMISE_ID] = id++;
                        promise._state = undefined;
                        promise._result = undefined;
                        promise._subscribers = [];
                    }

                    function validationError() {
                        return new Error('Array Methods must be provided an Array');
                    }

                    var Enumerator = function () {
                        function Enumerator(Constructor, input) {
                            this._instanceConstructor = Constructor;
                            this.promise = new Constructor(noop);

                            if (!this.promise[PROMISE_ID]) {
                                makePromise(this.promise);
                            }

                            if (isArray(input)) {
                                this.length = input.length;
                                this._remaining = input.length;

                                this._result = new Array(this.length);

                                if (this.length === 0) {
                                    fulfill(this.promise, this._result);
                                } else {
                                    this.length = this.length || 0;
                                    this._enumerate(input);
                                    if (this._remaining === 0) {
                                        fulfill(this.promise, this._result);
                                    }
                                }
                            } else {
                                reject(this.promise, validationError());
                            }
                        }

                        Enumerator.prototype._enumerate = function _enumerate(input) {
                            for (var i = 0; this._state === PENDING && i < input.length; i++) {
                                this._eachEntry(input[i], i);
                            }
                        };

                        Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                            var c = this._instanceConstructor;
                            var resolve$$1 = c.resolve;


                            if (resolve$$1 === resolve$1) {
                                var _then = void 0;
                                var error = void 0;
                                var didError = false;
                                try {
                                    _then = entry.then;
                                } catch (e) {
                                    didError = true;
                                    error = e;
                                }

                                if (_then === then && entry._state !== PENDING) {
                                    this._settledAt(entry._state, i, entry._result);
                                } else if (typeof _then !== 'function') {
                                    this._remaining--;
                                    this._result[i] = entry;
                                } else if (c === Promise$1) {
                                    var promise = new c(noop);
                                    if (didError) {
                                        reject(promise, error);
                                    } else {
                                        handleMaybeThenable(promise, entry, _then);
                                    }
                                    this._willSettleAt(promise, i);
                                } else {
                                    this._willSettleAt(new c(function (resolve$$1) {
                                        return resolve$$1(entry);
                                    }), i);
                                }
                            } else {
                                this._willSettleAt(resolve$$1(entry), i);
                            }
                        };

                        Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                            var promise = this.promise;


                            if (promise._state === PENDING) {
                                this._remaining--;

                                if (state === REJECTED) {
                                    reject(promise, value);
                                } else {
                                    this._result[i] = value;
                                }
                            }

                            if (this._remaining === 0) {
                                fulfill(promise, this._result);
                            }
                        };

                        Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                            var enumerator = this;

                            subscribe(promise, undefined, function (value) {
                                return enumerator._settledAt(FULFILLED, i, value);
                            }, function (reason) {
                                return enumerator._settledAt(REJECTED, i, reason);
                            });
                        };

                        return Enumerator;
                    }();

                    /**
                      `Promise.all` accepts an array of promises, and returns a new promise which
                      is fulfilled with an array of fulfillment values for the passed promises, or
                      rejected with the reason of the first passed promise to be rejected. It casts all
                      elements of the passed iterable to promises as it runs this algorithm.
                    
                      Example:
                    
                      ```javascript
                      let promise1 = resolve(1);
                      let promise2 = resolve(2);
                      let promise3 = resolve(3);
                      let promises = [ promise1, promise2, promise3 ];
                    
                      Promise.all(promises).then(function(array){
                        // The array here would be [ 1, 2, 3 ];
                      });
                      ```
                    
                      If any of the `promises` given to `all` are rejected, the first promise
                      that is rejected will be given as an argument to the returned promises's
                      rejection handler. For example:
                    
                      Example:
                    
                      ```javascript
                      let promise1 = resolve(1);
                      let promise2 = reject(new Error("2"));
                      let promise3 = reject(new Error("3"));
                      let promises = [ promise1, promise2, promise3 ];
                    
                      Promise.all(promises).then(function(array){
                        // Code here never runs because there are rejected promises!
                      }, function(error) {
                        // error.message === "2"
                      });
                      ```
                    
                      @method all
                      @static
                      @param {Array} entries array of promises
                      @param {String} label optional string for labeling the promise.
                      Useful for tooling.
                      @return {Promise} promise that is fulfilled when all `promises` have been
                      fulfilled, or rejected if any of them become rejected.
                      @static
                    */
                    function all(entries) {
                        return new Enumerator(this, entries).promise;
                    }

                    /**
                      `Promise.race` returns a new promise which is settled in the same way as the
                      first passed promise to settle.
                    
                      Example:
                    
                      ```javascript
                      let promise1 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 1');
                        }, 200);
                      });
                    
                      let promise2 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 2');
                        }, 100);
                      });
                    
                      Promise.race([promise1, promise2]).then(function(result){
                        // result === 'promise 2' because it was resolved before promise1
                        // was resolved.
                      });
                      ```
                    
                      `Promise.race` is deterministic in that only the state of the first
                      settled promise matters. For example, even if other promises given to the
                      `promises` array argument are resolved, but the first settled promise has
                      become rejected before the other promises became fulfilled, the returned
                      promise will become rejected:
                    
                      ```javascript
                      let promise1 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          resolve('promise 1');
                        }, 200);
                      });
                    
                      let promise2 = new Promise(function(resolve, reject){
                        setTimeout(function(){
                          reject(new Error('promise 2'));
                        }, 100);
                      });
                    
                      Promise.race([promise1, promise2]).then(function(result){
                        // Code here never runs
                      }, function(reason){
                        // reason.message === 'promise 2' because promise 2 became rejected before
                        // promise 1 became fulfilled
                      });
                      ```
                    
                      An example real-world use case is implementing timeouts:
                    
                      ```javascript
                      Promise.race([ajax('foo.json'), timeout(5000)])
                      ```
                    
                      @method race
                      @static
                      @param {Array} promises array of promises to observe
                      Useful for tooling.
                      @return {Promise} a promise which settles in the same way as the first passed
                      promise to settle.
                    */
                    function race(entries) {
                        /*jshint validthis:true */
                        var Constructor = this;

                        if (!isArray(entries)) {
                            return new Constructor(function (_, reject) {
                                return reject(new TypeError('You must pass an array to race.'));
                            });
                        } else {
                            return new Constructor(function (resolve, reject) {
                                var length = entries.length;
                                for (var i = 0; i < length; i++) {
                                    Constructor.resolve(entries[i]).then(resolve, reject);
                                }
                            });
                        }
                    }

                    /**
                      `Promise.reject` returns a promise rejected with the passed `reason`.
                      It is shorthand for the following:
                    
                      ```javascript
                      let promise = new Promise(function(resolve, reject){
                        reject(new Error('WHOOPS'));
                      });
                    
                      promise.then(function(value){
                        // Code here doesn't run because the promise is rejected!
                      }, function(reason){
                        // reason.message === 'WHOOPS'
                      });
                      ```
                    
                      Instead of writing the above, your code now simply becomes the following:
                    
                      ```javascript
                      let promise = Promise.reject(new Error('WHOOPS'));
                    
                      promise.then(function(value){
                        // Code here doesn't run because the promise is rejected!
                      }, function(reason){
                        // reason.message === 'WHOOPS'
                      });
                      ```
                    
                      @method reject
                      @static
                      @param {Any} reason value that the returned promise will be rejected with.
                      Useful for tooling.
                      @return {Promise} a promise rejected with the given `reason`.
                    */
                    function reject$1(reason) {
                        /*jshint validthis:true */
                        var Constructor = this;
                        var promise = new Constructor(noop);
                        reject(promise, reason);
                        return promise;
                    }

                    function needsResolver() {
                        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                    }

                    function needsNew() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    }

                    /**
                      Promise objects represent the eventual result of an asynchronous operation. The
                      primary way of interacting with a promise is through its `then` method, which
                      registers callbacks to receive either a promise's eventual value or the reason
                      why the promise cannot be fulfilled.
                    
                      Terminology
                      -----------
                    
                      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
                      - `thenable` is an object or function that defines a `then` method.
                      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
                      - `exception` is a value that is thrown using the throw statement.
                      - `reason` is a value that indicates why a promise was rejected.
                      - `settled` the final resting state of a promise, fulfilled or rejected.
                    
                      A promise can be in one of three states: pending, fulfilled, or rejected.
                    
                      Promises that are fulfilled have a fulfillment value and are in the fulfilled
                      state.  Promises that are rejected have a rejection reason and are in the
                      rejected state.  A fulfillment value is never a thenable.
                    
                      Promises can also be said to *resolve* a value.  If this value is also a
                      promise, then the original promise's settled state will match the value's
                      settled state.  So a promise that *resolves* a promise that rejects will
                      itself reject, and a promise that *resolves* a promise that fulfills will
                      itself fulfill.
                    
                    
                      Basic Usage:
                      ------------
                    
                      ```js
                      let promise = new Promise(function(resolve, reject) {
                        // on success
                        resolve(value);
                    
                        // on failure
                        reject(reason);
                      });
                    
                      promise.then(function(value) {
                        // on fulfillment
                      }, function(reason) {
                        // on rejection
                      });
                      ```
                    
                      Advanced Usage:
                      ---------------
                    
                      Promises shine when abstracting away asynchronous interactions such as
                      `XMLHttpRequest`s.
                    
                      ```js
                      function getJSON(url) {
                        return new Promise(function(resolve, reject){
                          let xhr = new XMLHttpRequest();
                    
                          xhr.open('GET', url);
                          xhr.onreadystatechange = handler;
                          xhr.responseType = 'json';
                          xhr.setRequestHeader('Accept', 'application/json');
                          xhr.send();
                    
                          function handler() {
                            if (this.readyState === this.DONE) {
                              if (this.status === 200) {
                                resolve(this.response);
                              } else {
                                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
                              }
                            }
                          };
                        });
                      }
                    
                      getJSON('/posts.json').then(function(json) {
                        // on fulfillment
                      }, function(reason) {
                        // on rejection
                      });
                      ```
                    
                      Unlike callbacks, promises are great composable primitives.
                    
                      ```js
                      Promise.all([
                        getJSON('/posts'),
                        getJSON('/comments')
                      ]).then(function(values){
                        values[0] // => postsJSON
                        values[1] // => commentsJSON
                    
                        return values;
                      });
                      ```
                    
                      @class Promise
                      @param {Function} resolver
                      Useful for tooling.
                      @constructor
                    */

                    var Promise$1 = function () {
                        function Promise(resolver) {
                            this[PROMISE_ID] = nextId();
                            this._result = this._state = undefined;
                            this._subscribers = [];

                            if (noop !== resolver) {
                                typeof resolver !== 'function' && needsResolver();
                                this instanceof Promise ? initializePromise(this, resolver) : needsNew();
                            }
                        }

                        /**
                        The primary way of interacting with a promise is through its `then` method,
                        which registers callbacks to receive either a promise's eventual value or the
                        reason why the promise cannot be fulfilled.
                         ```js
                        findUser().then(function(user){
                          // user is available
                        }, function(reason){
                          // user is unavailable, and you are given the reason why
                        });
                        ```
                         Chaining
                        --------
                         The return value of `then` is itself a promise.  This second, 'downstream'
                        promise is resolved with the return value of the first promise's fulfillment
                        or rejection handler, or rejected if the handler throws an exception.
                         ```js
                        findUser().then(function (user) {
                          return user.name;
                        }, function (reason) {
                          return 'default name';
                        }).then(function (userName) {
                          // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
                          // will be `'default name'`
                        });
                         findUser().then(function (user) {
                          throw new Error('Found user, but still unhappy');
                        }, function (reason) {
                          throw new Error('`findUser` rejected and we're unhappy');
                        }).then(function (value) {
                          // never reached
                        }, function (reason) {
                          // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
                          // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
                        });
                        ```
                        If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
                         ```js
                        findUser().then(function (user) {
                          throw new PedagogicalException('Upstream error');
                        }).then(function (value) {
                          // never reached
                        }).then(function (value) {
                          // never reached
                        }, function (reason) {
                          // The `PedgagocialException` is propagated all the way down to here
                        });
                        ```
                         Assimilation
                        ------------
                         Sometimes the value you want to propagate to a downstream promise can only be
                        retrieved asynchronously. This can be achieved by returning a promise in the
                        fulfillment or rejection handler. The downstream promise will then be pending
                        until the returned promise is settled. This is called *assimilation*.
                         ```js
                        findUser().then(function (user) {
                          return findCommentsByAuthor(user);
                        }).then(function (comments) {
                          // The user's comments are now available
                        });
                        ```
                         If the assimliated promise rejects, then the downstream promise will also reject.
                         ```js
                        findUser().then(function (user) {
                          return findCommentsByAuthor(user);
                        }).then(function (comments) {
                          // If `findCommentsByAuthor` fulfills, we'll have the value here
                        }, function (reason) {
                          // If `findCommentsByAuthor` rejects, we'll have the reason here
                        });
                        ```
                         Simple Example
                        --------------
                         Synchronous Example
                         ```javascript
                        let result;
                         try {
                          result = findResult();
                          // success
                        } catch(reason) {
                          // failure
                        }
                        ```
                         Errback Example
                         ```js
                        findResult(function(result, err){
                          if (err) {
                            // failure
                          } else {
                            // success
                          }
                        });
                        ```
                         Promise Example;
                         ```javascript
                        findResult().then(function(result){
                          // success
                        }, function(reason){
                          // failure
                        });
                        ```
                         Advanced Example
                        --------------
                         Synchronous Example
                         ```javascript
                        let author, books;
                         try {
                          author = findAuthor();
                          books  = findBooksByAuthor(author);
                          // success
                        } catch(reason) {
                          // failure
                        }
                        ```
                         Errback Example
                         ```js
                         function foundBooks(books) {
                         }
                         function failure(reason) {
                         }
                         findAuthor(function(author, err){
                          if (err) {
                            failure(err);
                            // failure
                          } else {
                            try {
                              findBoooksByAuthor(author, function(books, err) {
                                if (err) {
                                  failure(err);
                                } else {
                                  try {
                                    foundBooks(books);
                                  } catch(reason) {
                                    failure(reason);
                                  }
                                }
                              });
                            } catch(error) {
                              failure(err);
                            }
                            // success
                          }
                        });
                        ```
                         Promise Example;
                         ```javascript
                        findAuthor().
                          then(findBooksByAuthor).
                          then(function(books){
                            // found books
                        }).catch(function(reason){
                          // something went wrong
                        });
                        ```
                         @method then
                        @param {Function} onFulfilled
                        @param {Function} onRejected
                        Useful for tooling.
                        @return {Promise}
                        */

                        /**
                        `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
                        as the catch block of a try/catch statement.
                        ```js
                        function findAuthor(){
                        throw new Error('couldn't find that author');
                        }
                        // synchronous
                        try {
                        findAuthor();
                        } catch(reason) {
                        // something went wrong
                        }
                        // async with promises
                        findAuthor().catch(function(reason){
                        // something went wrong
                        });
                        ```
                        @method catch
                        @param {Function} onRejection
                        Useful for tooling.
                        @return {Promise}
                        */


                        Promise.prototype.catch = function _catch(onRejection) {
                            return this.then(null, onRejection);
                        };

                        /**
                          `finally` will be invoked regardless of the promise's fate just as native
                          try/catch/finally behaves
                        
                          Synchronous example:
                        
                          ```js
                          findAuthor() {
                            if (Math.random() > 0.5) {
                              throw new Error();
                            }
                            return new Author();
                          }
                        
                          try {
                            return findAuthor(); // succeed or fail
                          } catch(error) {
                            return findOtherAuther();
                          } finally {
                            // always runs
                            // doesn't affect the return value
                          }
                          ```
                        
                          Asynchronous example:
                        
                          ```js
                          findAuthor().catch(function(reason){
                            return findOtherAuther();
                          }).finally(function(){
                            // author was either found, or not
                          });
                          ```
                        
                          @method finally
                          @param {Function} callback
                          @return {Promise}
                        */


                        Promise.prototype.finally = function _finally(callback) {
                            var promise = this;
                            var constructor = promise.constructor;

                            if (isFunction(callback)) {
                                return promise.then(function (value) {
                                    return constructor.resolve(callback()).then(function () {
                                        return value;
                                    });
                                }, function (reason) {
                                    return constructor.resolve(callback()).then(function () {
                                        throw reason;
                                    });
                                });
                            }

                            return promise.then(callback, callback);
                        };

                        return Promise;
                    }();

                    Promise$1.prototype.then = then;
                    Promise$1.all = all;
                    Promise$1.race = race;
                    Promise$1.resolve = resolve$1;
                    Promise$1.reject = reject$1;
                    Promise$1._setScheduler = setScheduler;
                    Promise$1._setAsap = setAsap;
                    Promise$1._asap = asap;

                    /*global self*/
                    function polyfill() {
                        var local = void 0;

                        if (typeof global !== 'undefined') {
                            local = global;
                        } else if (typeof self !== 'undefined') {
                            local = self;
                        } else {
                            try {
                                local = Function('return this')();
                            } catch (e) {
                                throw new Error('polyfill failed because global object is unavailable in this environment');
                            }
                        }

                        var P = local.Promise;

                        if (P) {
                            var promiseToString = null;
                            try {
                                promiseToString = Object.prototype.toString.call(P.resolve());
                            } catch (e) {
                                // silently ignored
                            }

                            if (promiseToString === '[object Promise]' && !P.cast) {
                                return;
                            }
                        }

                        local.Promise = Promise$1;
                    }

                    // Strange compat..
                    Promise$1.polyfill = polyfill;
                    Promise$1.Promise = Promise$1;

                    return Promise$1;

                })));



                //# sourceMappingURL=es6-promise.map

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(40), __webpack_require__(41)))

            /***/
        }),
/* 32 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return HttpActionResult; });
            var HttpActionResult = /** @class */ (function () {
                function HttpActionResult(request, promise) {
                    this.request = request;
                    this.promise = promise;
                }
                HttpActionResult.prototype.getPromise = function () {
                    return this.promise;
                };
                HttpActionResult.prototype.getRequest = function () {
                    return this.request;
                };
                HttpActionResult.prototype.then = function (onfulfilled, onrejected) {
                    return this.promise.then(onfulfilled, onrejected);
                };
                HttpActionResult.prototype.catch = function (onrejected) {
                    return this.promise.catch(onrejected);
                };
                HttpActionResult.prototype.finally = function (onfinally) {
                    return this.promise.finally(onfinally);
                };
                return HttpActionResult;
            }());

            //# sourceMappingURL=http_action_result.js.map

            /***/
        }),
/* 33 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return DateTimeValidator; });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
            var __extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();



            var DateTimeValidator = /** @class */ (function (_super) {
                __extends(DateTimeValidator, _super);
                function DateTimeValidator() {
                    var _this = _super.call(this) || this;
                    _this.name = 'DateTime';
                    return _this;
                }
                DateTimeValidator.prototype.validate = function (attr, value) {
                    if (!_easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].IsDefinedAndNotNull(value) || value == '')
                        return { successed: true };
                    if (_easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].getDateDataTypes().indexOf(attr.dataType) >= 0) {
                        try {
                            var editFormat = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[/* getEditDateTimeFormat */ "a"])(attr.dataType);
                            var newDate = _easydata_core__WEBPACK_IMPORTED_MODULE_0__["utils"].strToDateTime(value, editFormat);
                        }
                        catch (_a) {
                            return {
                                successed: false,
                                messages: [_easydata_core__WEBPACK_IMPORTED_MODULE_0__["i18n"].getText('DateTimeError')]
                            };
                        }
                    }
                    return { successed: true };
                };
                return DateTimeValidator;
            }(_validator__WEBPACK_IMPORTED_MODULE_1__[/* Validator */ "a"]));

            //# sourceMappingURL=datetime_validator.js.map

            /***/
        }),
/* 34 */
/***/ (function (module, exports, __webpack_require__) {

            __webpack_require__(35);
            module.exports = __webpack_require__(42);


            /***/
        }),
/* 35 */
/***/ (function (module, exports, __webpack_require__) {

            __webpack_require__(36);
            __webpack_require__(37);
            __webpack_require__(38);
            __webpack_require__(39);

            /***/
        }),
/* 36 */
/***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),
/* 37 */
/***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),
/* 38 */
/***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),
/* 39 */
/***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),
/* 40 */
/***/ (function (module, exports) {

            // shim for using process in browser
            var process = module.exports = {};

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function () {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            }())
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                }
                // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }


            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    //normal enviroments in sane situations
                    return clearTimeout(marker);
                }
                // if clearTimeout wasn't available but was latter defined
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }



            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }

            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;

                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }

            process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };

            // v8 likes predictible objects
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};

            function noop() { }

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function (name) { return [] }

            process.binding = function (name) {
                throw new Error('process.binding is not supported');
            };

            process.cwd = function () { return '/' };
            process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function () { return 0; };


            /***/
        }),
/* 41 */
/***/ (function (module, exports) {

            var g;

            // This works in non-strict mode
            g = (function () {
                return this;
            })();

            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }

            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}

            module.exports = g;


            /***/
        }),
/* 42 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);

            // EXPORTS
            __webpack_require__.d(__webpack_exports__, "core", function () { return /* reexport */ public_api; });
            __webpack_require__.d(__webpack_exports__, "ui", function () { return /* reexport */ lib_public_api; });
            __webpack_require__.d(__webpack_exports__, "crud", function () { return /* reexport */ public_api_namespaceObject; });

            // NAMESPACE OBJECT: ./dist/lib/public_api.js
            var public_api_namespaceObject = {};
            __webpack_require__.r(public_api_namespaceObject);
            __webpack_require__.d(public_api_namespaceObject, "TextDataFilter", function () { return text_data_filter["a" /* TextDataFilter */]; });
            __webpack_require__.d(public_api_namespaceObject, "EntityEditForm", function () { return entity_edit_form["a" /* EntityEditForm */]; });
            __webpack_require__.d(public_api_namespaceObject, "EntityEditFormBuilder", function () { return entity_form_builder_EntityEditFormBuilder; });
            __webpack_require__.d(public_api_namespaceObject, "TextFilterWidget", function () { return text_filter_widget_TextFilterWidget; });
            __webpack_require__.d(public_api_namespaceObject, "ProgressBar", function () { return ProgressBar; });
            __webpack_require__.d(public_api_namespaceObject, "DataContext", function () { return data_context_DataContext; });
            __webpack_require__.d(public_api_namespaceObject, "EasyDataServerLoader", function () { return easy_data_server_loader_EasyDataServerLoader; });
            __webpack_require__.d(public_api_namespaceObject, "Validator", function () { return validator["a" /* Validator */]; });
            __webpack_require__.d(public_api_namespaceObject, "TypeValidator", function () { return type_validator_TypeValidator; });
            __webpack_require__.d(public_api_namespaceObject, "RequiredValidator", function () { return required_validator_RequiredValidator; });
            __webpack_require__.d(public_api_namespaceObject, "EasyDataViewDispatcher", function () { return easy_data_view_dispatcher_EasyDataViewDispatcher; });
            __webpack_require__.d(public_api_namespaceObject, "RootDataView", function () { return root_data_view_RootDataView; });
            __webpack_require__.d(public_api_namespaceObject, "EntityDataView", function () { return entity_data_view_EntityDataView; });

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/core/dist/lib/public_api.js + 10 modules
            var public_api = __webpack_require__(0);

            // EXTERNAL MODULE: d:/a/easydata/easydata/easydata.js/packs/ui/dist/lib/public_api.js + 7 modules
            var lib_public_api = __webpack_require__(3);

            // EXTERNAL MODULE: ./dist/lib/filter/text_data_filter.js
            var text_data_filter = __webpack_require__(22);

            // EXTERNAL MODULE: ./dist/lib/form/entity_edit_form.js
            var entity_edit_form = __webpack_require__(23);

            // EXTERNAL MODULE: ./dist/lib/utils/utils.js
            var utils = __webpack_require__(7);

            // CONCATENATED MODULE: ./dist/lib/widgets/text_filter_widget.js


            var text_filter_widget_TextFilterWidget = /** @class */ (function () {
                function TextFilterWidget(slot, grid, filter, options) {
                    var _this = this;
                    this.slot = slot;
                    this.grid = grid;
                    this.filter = filter;
                    this.options = {
                        focus: false,
                        instantMode: false,
                        instantTimeout: 1000
                    };
                    this.options = public_api["utils"].assignDeep(this.options, options || {});
                    var stringDefRenderer = this.grid.cellRendererStore
                        .getDefaultRendererByType(lib_public_api["CellRendererType"].STRING);
                    this.grid.cellRendererStore
                        .setDefaultRenderer(lib_public_api["CellRendererType"].STRING, function (value, column, cellElement, rowElement) {
                            return _this.highlightCellRenderer(stringDefRenderer, value, column, cellElement, rowElement);
                        });
                    var numDefRenderer = this.grid.cellRendererStore
                        .getDefaultRendererByType(lib_public_api["CellRendererType"].NUMBER);
                    this.grid.cellRendererStore
                        .setDefaultRenderer(lib_public_api["CellRendererType"].NUMBER, function (value, column, cellElement, rowElement) {
                            return _this.highlightCellRenderer(numDefRenderer, value, column, cellElement, rowElement);
                        });
                    this.render();
                }
                TextFilterWidget.prototype.render = function () {
                    var _this = this;
                    var horizClass = lib_public_api["browserUtils"].IsIE()
                        ? 'kfrm-fields-ie is-horizontal'
                        : 'kfrm-fields is-horizontal';
                    var isEdgeOrIE = lib_public_api["browserUtils"].IsIE() || lib_public_api["browserUtils"].IsEdge();
                    Object(lib_public_api["domel"])(this.slot)
                        .addClass(horizClass)
                        .addChild('div', function (b) {
                            b
                                .addClass('control')
                                .addChild('input', function (b) {
                                    _this.filterInput = b.toDOM();
                                    b
                                        .attr('placeholder', public_api["i18n"].getText('SearchInputPlaceholder'))
                                        .type('text');
                                    b.on('keydown', _this.inputKeydownHandler.bind(_this));
                                    if (_this.options.instantMode) {
                                        b.on('keyup', _this.inputKeyupHandler.bind(_this));
                                    }
                                });
                            if (!isEdgeOrIE) {
                                b
                                    .addClass('has-icons-right')
                                    .addChild('span', function (b) {
                                        b
                                            .addClass('icon')
                                            .addClass('is-right')
                                            .addClass('is-clickable')
                                            .html('&#x1F5D9;')
                                            .on('click', _this.clearButtonClickHander.bind(_this));
                                    });
                            }
                        });
                    if (!this.options.instantMode) {
                        Object(lib_public_api["domel"])(this.slot)
                            .addChild('button', function (b) {
                                return b
                                    .addClass('kfrm-button')
                                    .addText(public_api["i18n"].getText('SearchBtn'))
                                    .on('click', _this.searchButtonClickHandler.bind(_this));
                            });
                    }
                    if (this.options.focus) {
                        this.filterInput.focus();
                    }
                };
                TextFilterWidget.prototype.inputKeydownHandler = function (ev) {
                    if (ev.keyCode == 13) {
                        this.applyFilter();
                    }
                };
                TextFilterWidget.prototype.inputKeyupHandler = function () {
                    var _this = this;
                    if (this.applyFilterTimeout) {
                        clearTimeout(this.applyFilterTimeout);
                    }
                    this.applyFilterTimeout = setTimeout(function () {
                        _this.applyFilter();
                    }, this.options.instantTimeout);
                };
                TextFilterWidget.prototype.clearButtonClickHander = function () {
                    this.filterInput.value = '';
                    this.filterInput.focus();
                    this.applyFilter();
                };
                TextFilterWidget.prototype.searchButtonClickHandler = function () {
                    this.applyFilter();
                };
                TextFilterWidget.prototype.applyFilter = function () {
                    var _this = this;
                    if (this.applyFilterTimeout) {
                        clearTimeout(this.applyFilterTimeout);
                    }
                    var filterValue = this.filter.getValue();
                    if (filterValue != this.filterInput.value) {
                        this.filter.apply(this.filterInput.value)
                            .then(function (data) {
                                _this.grid.setData(data);
                            });
                    }
                };
                TextFilterWidget.prototype.highlightCellRenderer = function (defaultRenderer, value, column, cellElement, rowElement) {
                    if (public_api["utils"].isNumericType(column.type)
                        || public_api["utils"].getStringDataTypes().indexOf(column.type) >= 0) {
                        if (value) {
                            if (column.dataColumn && column.dataColumn.displayFormat
                                && lib_public_api["DFMT_REGEX"].test(column.dataColumn.displayFormat)) {
                                value = column.dataColumn.displayFormat.replace(lib_public_api["DFMT_REGEX"], function (_, $1) {
                                    return public_api["i18n"].numberToStr(value, $1);
                                });
                            }
                            else {
                                value = value.toLocaleString();
                            }
                            value = this.highlightText(value.toString());
                        }
                    }
                    defaultRenderer(value, column, cellElement, rowElement);
                };
                TextFilterWidget.prototype.highlightText = function (content) {
                    var normalizedContent = content.toLowerCase();
                    var filterValue = this.filter.getValue().toString();
                    if (filterValue && filterValue.length > 0 && content && content.length > 0) {
                        var insertValue1 = "<span style='background-color: yellow'>";
                        var insertValue2 = "</span>";
                        var indexInMas = [];
                        var words = filterValue.split('||').map(function (w) { return w.trim().toLowerCase(); });
                        for (var i = 0; i < words.length; i++) {
                            var pos = 0;
                            var lowerWord = words[i];
                            if (!lowerWord.length)
                                continue;
                            if (lowerWord === normalizedContent) {
                                return insertValue1 + content + insertValue2;
                            }
                            while (pos < content.length - 1) {
                                var index = normalizedContent.indexOf(lowerWord, pos);
                                if (index >= 0) {
                                    indexInMas.push({ index: index, length: words[i].length });
                                    pos = index + lowerWord.length;
                                }
                                else {
                                    pos++;
                                }
                            }
                        }
                        if (indexInMas.length > 0) {
                            //sort array item by index
                            indexInMas.sort(function (item1, item2) {
                                if (item1.index > item2.index) {
                                    return 1;
                                }
                                else if (item1.index == item2.index2) {
                                    return 0;
                                }
                                else {
                                    return -1;
                                }
                            });
                            //remove intersecting gaps
                            for (var i = 0; i < indexInMas.length - 1;) {
                                var delta = indexInMas[i + 1].index - (indexInMas[i].index + indexInMas[i].length);
                                if (delta < 0) {
                                    var addDelta = indexInMas[i + 1].length + delta;
                                    if (addDelta > 0) {
                                        indexInMas[i].length += addDelta;
                                    }
                                    indexInMas.splice(i + 1, 1);
                                }
                                else {
                                    i++;
                                }
                            }
                            var result = '';
                            for (var i = 0; i < indexInMas.length; i++) {
                                if (i === 0) {
                                    result += content.substring(0, indexInMas[i].index);
                                }
                                result += insertValue1
                                    + content.substring(indexInMas[i].index, indexInMas[i].index + indexInMas[i].length)
                                    + insertValue2;
                                if (i < indexInMas.length - 1) {
                                    result += content.substring(indexInMas[i].index
                                        + indexInMas[i].length, indexInMas[i + 1].index);
                                }
                                else {
                                    result += content.substring(indexInMas[i].index
                                        + indexInMas[i].length);
                                }
                            }
                            content = result;
                        }
                    }
                    return content;
                };
                return TextFilterWidget;
            }());

            //# sourceMappingURL=text_filter_widget.js.map
            // CONCATENATED MODULE: ./dist/lib/form/entity_form_builder.js
            var __assign = (undefined && undefined.__assign) || function () {
                __assign = Object.assign || function (t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };





            var isIE = lib_public_api["browserUtils"].IsIE();
            var entity_form_builder_EntityEditFormBuilder = /** @class */ (function () {
                function EntityEditFormBuilder(context, params) {
                    this.context = context;
                    this.params = params;
                    this.params = params || {};
                    this.reset();
                }
                EntityEditFormBuilder.prototype.reset = function () {
                    this.form = new entity_edit_form["a" /* EntityEditForm */](this.context);
                };
                EntityEditFormBuilder.prototype.setupLookupField = function (parent, attr, readOnly, value) {
                    var _this = this;
                    var lookupEntity = this.context.getMetaData().getRootEntity()
                        .subEntities.filter(function (ent) { return ent.id == attr.lookupEntity; })[0];
                    var dataAttr = this.context.getMetaData().getAttributeById(attr.dataAttr);
                    if (!dataAttr)
                        return;
                    readOnly = readOnly || !dataAttr.isEditable;
                    value = this.params.values
                        ? this.params.values.getValue(dataAttr.id)
                        : undefined;
                    var horizClass = isIE
                        ? 'kfrm-fields-ie is-horizontal'
                        : 'kfrm-fields is-horizontal';
                    var inputEl;
                    Object(lib_public_api["domel"])(parent)
                        .addChild('div', function (b) {
                            b
                                .addClass(horizClass)
                                .addChild('input', function (b) {
                                    inputEl = b.toDOM();
                                    b.attr('readonly', '');
                                    b.name(dataAttr.id);
                                    b.type(_this.resolveInputType(dataAttr.dataType));
                                    b.value(public_api["utils"].IsDefinedAndNotNull(value)
                                        ? value.toString() : '');
                                });
                            if (!readOnly)
                                b.addChild('button', function (b) {
                                    return b
                                        .addClass('kfrm-button')
                                        .attr('title', public_api["i18n"].getText('NavigationBtnTitle'))
                                        .addText('...')
                                        .on('click', function (ev) {
                                            var lookupTable = new public_api["EasyDataTable"]({
                                                loader: {
                                                    loadChunk: function (chunkParams) {
                                                        return _this.context.getDataLoader()
                                                            .loadChunk(__assign(__assign({}, chunkParams), { id: lookupEntity.id }));
                                                    }
                                                }
                                            });
                                            _this.context.getDataLoader()
                                                .loadChunk({ offset: 0, limit: 1000, needTotal: true, sourceId: lookupEntity.id })
                                                .then(function (data) {
                                                    var _a;
                                                    var _loop_1 = function (col) {
                                                        var attrs = lookupEntity.attributes.filter(function (attr) {
                                                            return attr.id == col.id && (attr.isPrimaryKey || attr.showInLookup);
                                                        });
                                                        if (attrs.length) {
                                                            lookupTable.columns.add(col);
                                                        }
                                                    };
                                                    for (var _i = 0, _b = data.table.columns.getItems(); _i < _b.length; _i++) {
                                                        var col = _b[_i];
                                                        _loop_1(col);
                                                    }
                                                    lookupTable.setTotal(data.total);
                                                    for (var _c = 0, _d = data.table.getCachedRows(); _c < _d.length; _c++) {
                                                        var row = _d[_c];
                                                        lookupTable.addRow(row);
                                                    }
                                                    var ds = new lib_public_api["DefaultDialogService"]();
                                                    var gridSlot = null;
                                                    var selectedSlot = null;
                                                    var widgetSlot;
                                                    var slot = Object(lib_public_api["domel"])('div')
                                                        .addClass("kfrm-form")
                                                        .addChild('div', function (b) {
                                                            return b
                                                                .addClass("kfrm-field")
                                                                .addChild('label', function (b) {
                                                                    return b
                                                                        .addText(public_api["i18n"].getText('LookupSelectedItem'))
                                                                        .toDOM();
                                                                })
                                                                .addChild('div', function (b) {
                                                                    return selectedSlot = b
                                                                        .addText('None')
                                                                        .toDOM();
                                                                });
                                                        })
                                                        .addChild('div', function (b) { return widgetSlot = b.toDOM(); })
                                                        .addChild('div', function (b) {
                                                            return b
                                                                .addClass('kfrm-control')
                                                                .addChild('div', function (b) { return gridSlot = b.toDOM(); });
                                                        })
                                                        .toDOM();
                                                    var selectedValue = inputEl.value;
                                                    var getValue = function (row, colId) {
                                                        if (row instanceof public_api["DataRow"]) {
                                                            return row.getValue(colId);
                                                        }
                                                        var property = colId.substring(colId.lastIndexOf('.') + 1);
                                                        return row[property];
                                                    };
                                                    var updateSelectedValue = function (row) {
                                                        selectedSlot.innerHTML = lookupTable.columns
                                                            .getItems()
                                                            .map(function (col) {
                                                                return "<b>" + col.label + ":</b> " + getValue(row, col.id);
                                                            })
                                                            .join(', ');
                                                    };
                                                    if (selectedValue) {
                                                        var attr_1 = lookupEntity.getFirstPrimaryAttr();
                                                        var key = attr_1.id.substring(attr_1.id.lastIndexOf('.') + 1);
                                                        _this.context.fetchRecord((_a = {}, _a[key] = selectedValue, _a), lookupEntity.id)
                                                            .then(function (data) {
                                                                if (data.entity) {
                                                                    updateSelectedValue(data.entity);
                                                                }
                                                            })
                                                            .catch(function (error) {
                                                                console.error(error);
                                                            });
                                                    }
                                                    var lookupGrid = new lib_public_api["EasyGrid"]({
                                                        slot: gridSlot,
                                                        dataTable: lookupTable,
                                                        fixHeightOnFirstRender: true,
                                                        paging: {
                                                            pageSize: 10
                                                        },
                                                        onActiveRowChanged: function (ev) {
                                                            lookupGrid.getData().getRow(ev.rowIndex)
                                                                .then(function (row) {
                                                                    selectedValue = row.getValue(attr.lookupDataAttr);
                                                                    updateSelectedValue(row);
                                                                });
                                                        }
                                                    });
                                                    ds.open({
                                                        title: public_api["i18n"].getText('LookupDlgCaption')
                                                            .replace('{entity}', lookupEntity.caption),
                                                        body: slot,
                                                        arrangeParents: true,
                                                        beforeOpen: function () {
                                                            var dataFilter = _this.context.createFilter(lookupEntity.id, lookupGrid.getData(), true);
                                                            new text_filter_widget_TextFilterWidget(widgetSlot, lookupGrid, dataFilter, { instantMode: true, focus: true });
                                                        },
                                                        onSubmit: function () {
                                                            inputEl.value = selectedValue;
                                                            return true;
                                                        },
                                                        onDestroy: function () {
                                                            lookupGrid.destroy();
                                                            // return focus on button
                                                            b.toDOM().focus();
                                                        }
                                                    });
                                                });
                                        });
                                });
                        });
                };
                EntityEditFormBuilder.prototype.setupDateTimeField = function (parent, attr, value, readOnly, hidden) {
                    var _this = this;
                    var horizClass = isIE
                        ? 'kfrm-fields-ie is-horizontal'
                        : 'kfrm-fields is-horizontal';
                    var editFormat = utils["a" /* getEditDateTimeFormat */](attr.dataType);
                    var inputEl;
                    var btnEl;
                    var mask = editFormat
                        .replace('yyyy', '9999')
                        .replace('MM', '99')
                        .replace('dd', '99')
                        .replace('HH', '99')
                        .replace('mm', '99')
                        .replace('ss', '99');
                    Object(lib_public_api["domel"])(parent)
                        .addChild('div', function (b) {
                            b
                                .addClass(horizClass)
                                .addChild('input', function (b) {
                                    inputEl = b.toDOM();
                                    b.name(attr.id);
                                    b.type(hidden ? 'hidden' : _this.resolveInputType(attr.dataType));
                                    if (readOnly) {
                                        b.attr('readonly', '');
                                    }
                                    else {
                                        b.mask(mask);
                                        b.on('keypress', function (ev) { return _this.applySumbit(ev); })
                                            .on('input', function (ev) {
                                                b.removeClass('is-invalid');
                                                try {
                                                    var newDate = public_api["utils"].strToDateTime(inputEl.value, editFormat);
                                                }
                                                catch (e) {
                                                    b.addClass('is-invalid');
                                                }
                                                finally {
                                                }
                                            })
                                            .on('blur', function (ev) {
                                                if (inputEl.value === mask.replace(/[9]/g, '_')) {
                                                    inputEl.value = '';
                                                }
                                            });
                                    }
                                    b.value((public_api["utils"].IsDefinedAndNotNull(value)
                                        ? public_api["utils"].dateTimeToStr(value, editFormat)
                                        : ''));
                                });
                            if (!readOnly)
                                b.addChild('button', function (b) {
                                    return btnEl = b
                                        .addClass('kfrm-button')
                                        .attr('title', public_api["i18n"].getText(attr.dataType !== public_api["DataType"].Time
                                            ? 'CalendarBtnTitle'
                                            : 'TimerBtnTitle'))
                                        .addChild('i', function (b) {
                                            return b.addClass(attr.dataType !== public_api["DataType"].Time
                                                ? 'ed-calendar-icon'
                                                : 'ed-timer-icon');
                                        })
                                        .on('click', function (ev) {
                                            var value;
                                            try {
                                                value = inputEl.value.length
                                                    ? attr.dataType !== public_api["DataType"].Time
                                                        ? public_api["utils"].strToDateTime(inputEl.value, editFormat)
                                                        : public_api["utils"].strToTime(inputEl.value)
                                                    : new Date(new Date().setSeconds(0));
                                            }
                                            catch (_a) {
                                                value = new Date(new Date().setSeconds(0));
                                            }
                                            var pickerOptions = {
                                                zIndex: 9999999999,
                                                showCalendar: attr.dataType !== public_api["DataType"].Time,
                                                showTimePicker: attr.dataType !== public_api["DataType"].Date,
                                                onApply: function (dateTime) {
                                                    dateTime.setSeconds(0);
                                                    dateTime.setMilliseconds(0);
                                                    inputEl.value = public_api["utils"].dateTimeToStr(dateTime, editFormat);
                                                }
                                            };
                                            var dtp = new lib_public_api["DefaultDateTimePicker"](pickerOptions);
                                            dtp.setDateTime(value);
                                            dtp.show(ev.target);
                                        }).toDOM();
                                });
                        });
                };
                EntityEditFormBuilder.prototype.setupListField = function (parent, attr, value, values, readOnly) {
                    var _this = this;
                    Object(lib_public_api["domel"])(parent)
                        .addChild('div', function (b) {
                            return b
                                .addClass('kfrm-select full-width')
                                .addChild('select', function (b) {
                                    if (readOnly)
                                        b.attr('readonly', '');
                                    b.attr('name', attr.id);
                                    b.on('keypress', function (ev) { return _this.applySumbit(ev); });
                                    if (values) {
                                        for (var i = 0; i < values.length; i++) {
                                            var val = values[i];
                                            b.addOption({
                                                value: val.id,
                                                title: val.text,
                                                selected: i === 0
                                            });
                                        }
                                    }
                                    b.value(value);
                                });
                        });
                };
                EntityEditFormBuilder.prototype.setupFileField = function (parent, attr, readOnly, accept) {
                    var _this = this;
                    Object(lib_public_api["domel"])(parent)
                        .addChild('input', function (b) {
                            if (readOnly)
                                b.attr('readonly', '');
                            b.name(attr.id)
                                .type(_this.resolveInputType(attr.dataType));
                            b.attr('accept', accept);
                        });
                };
                EntityEditFormBuilder.prototype.setupTextField = function (parent, attr, value, readOnly, hidden) {
                    var _this = this;
                    Object(lib_public_api["domel"])(parent)
                        .addChild('input', function (b) {
                            if (readOnly) {
                                b.attr('readonly', '');
                            }
                            b.type(hidden ? 'hidden' : _this.resolveInputType(attr.dataType));
                            b.name(attr.id)
                                .type(_this.resolveInputType(attr.dataType));
                            if (attr.dataType == public_api["DataType"].Bool) {
                                if (value)
                                    b.attr('checked', '');
                            }
                            else {
                                b.on('keypress', function (ev) { return _this.applySumbit(ev); })
                                    .value(public_api["utils"].IsDefinedAndNotNull(value)
                                        ? value.toString()
                                        : '');
                            }
                        });
                };
                EntityEditFormBuilder.prototype.setupTextArea = function (parent, attr, value, readOnly) {
                    // feature: modify size in value editor ??
                    Object(lib_public_api["domel"])(parent)
                        .addChild('textarea', function (b) {
                            if (readOnly)
                                b.attr('readonly', '');
                            b.attr('name', attr.id);
                            b.setStyle('height', "120px");
                            b.value(public_api["utils"].IsDefinedAndNotNull(value)
                                ? value.toString()
                                : '');
                        });
                };
                EntityEditFormBuilder.prototype.addFormField = function (parent, attr) {
                    var value = (this.params.values && attr.kind !== public_api["EntityAttrKind"].Lookup)
                        ? this.params.values.getValue(attr.id)
                        : !this.params.isEditForm
                            ? attr.defaultValue
                            : undefined;
                    var editor = this.resolveEditor(attr);
                    var readOnly = this.params.isEditForm && (attr.isPrimaryKey || !attr.isEditable);
                    var required = !attr.isNullable;
                    if (isIE) {
                        parent = Object(lib_public_api["domel"])('div', parent)
                            .addClass('kfrm-field-ie')
                            .toDOM();
                    }
                    Object(lib_public_api["domel"])(parent)
                        .addChild('label', function (b) {
                            b.attr('for', attr.id);
                            b.addHtml(attr.caption + " " + (required ? '<sup style="color: red">*</sup>' : '') + ": ");
                            if (attr.description) {
                                b.addChild('div', function (b) {
                                    return b
                                        .attr('title', attr.description)
                                        .addClass('question-mark')
                                        .setStyle('vertical-align', 'middle')
                                        .setStyle('display', 'inline-block');
                                });
                            }
                        });
                    var hidden = attr.isPrimaryKey;
                    if (attr.kind === public_api["EntityAttrKind"].Lookup) {
                        this.setupLookupField(parent, attr, readOnly, value);
                        return;
                    }
                    switch (editor.tag) {
                        case public_api["EditorTag"].DateTime:
                            this.setupDateTimeField(parent, attr, value, readOnly, hidden);
                            break;
                        case public_api["EditorTag"].List:
                            this.setupListField(parent, attr, value, editor.values, readOnly);
                            break;
                        case public_api["EditorTag"].File:
                            this.setupFileField(parent, attr, readOnly, editor.accept);
                            break;
                        case public_api["EditorTag"].Edit:
                        default:
                            if (editor.multiline) {
                                this.setupTextArea(parent, attr, value, readOnly);
                            }
                            else {
                                this.setupTextField(parent, attr, value, readOnly, hidden);
                            }
                            break;
                    }
                };
                EntityEditFormBuilder.prototype.resolveInputType = function (dataType) {
                    if (dataType === public_api["DataType"].Bool)
                        return 'checkbox';
                    if (dataType === public_api["DataType"].Blob)
                        return 'file';
                    return 'text';
                };
                EntityEditFormBuilder.prototype.resolveEditor = function (attr) {
                    var editor = attr.defaultEditor || new public_api["ValueEditor"]();
                    if (editor.tag == public_api["EditorTag"].Unknown) {
                        if (public_api["utils"].getDateDataTypes().indexOf(attr.dataType) >= 0) {
                            editor.tag = public_api["EditorTag"].DateTime;
                        }
                        else {
                            editor.tag = public_api["EditorTag"].Edit;
                        }
                    }
                    return editor;
                };
                EntityEditFormBuilder.prototype.applySumbit = function (ev) {
                    if (ev.keyCode === 13) {
                        this.sumbitCallback && this.sumbitCallback();
                        return false;
                    }
                    return false;
                };
                EntityEditFormBuilder.prototype.onSubmit = function (sumbitCallback) {
                    this.sumbitCallback = sumbitCallback;
                    return this;
                };
                EntityEditFormBuilder.prototype.build = function () {
                    var fb;
                    var formHtml = Object(lib_public_api["domel"])('div')
                        .addClass('kfrm-form')
                        .addChild('div', function (b) {
                            return b
                                .addClass("errors-block")
                                .toDOM();
                        })
                        .addChild('div', function (b) {
                            b.addClass("" + (isIE
                                ? 'kfrm-fields-ie col-ie-1-4 label-align-right'
                                : 'kfrm-fields col-a-1 label-align-right'));
                            fb = b;
                        })
                        .toDOM();
                    this.form['setHtmlInt'](formHtml);
                    for (var _i = 0, _a = this.context.getActiveEntity().attributes; _i < _a.length; _i++) {
                        var attr = _a[_i];
                        if (!this.params.isEditForm && !attr.showOnCreate)
                            continue;
                        if (!attr.isPrimaryKey && this.params.isEditForm && !attr.showOnEdit) {
                            continue;
                        }
                        this.addFormField(fb.toDOM(), attr);
                    }
                    return this.form;
                };
                return EntityEditFormBuilder;
            }());

            //# sourceMappingURL=entity_form_builder.js.map
            // CONCATENATED MODULE: ./dist/lib/widgets/progress_bar.js
            var ProgressBar = /** @class */ (function () {
                function ProgressBar(slot) {
                    this.slot = slot;
                    this.hide();
                    this.slot.classList.add('ed-progress-bar');
                }
                ProgressBar.prototype.show = function () {
                    this.slot.style.removeProperty('display');
                };
                ProgressBar.prototype.hide = function () {
                    this.slot.style.display = 'none';
                };
                return ProgressBar;
            }());

            //# sourceMappingURL=progress_bar.js.map
            // CONCATENATED MODULE: ./dist/lib/main/easy_data_server_loader.js

            var easy_data_server_loader_EasyDataServerLoader = /** @class */ (function () {
                function EasyDataServerLoader(context) {
                    this.context = context;
                }
                EasyDataServerLoader.prototype.loadChunk = function (params) {
                    var _this = this;
                    var url = this.context.resolveEndpoint('FetchDataset', { sourceId: params.sourceId || this.context.getActiveEntity().id });
                    delete params.sourceId;
                    this.context.startProcess();
                    var http = this.context.getHttpClient();
                    return http.post(url, params)
                        .then(function (result) {
                            var dataTable = new public_api["EasyDataTable"]({
                                chunkSize: 1000
                            });
                            var resultSet = result.resultSet;
                            for (var _i = 0, _a = resultSet.cols; _i < _a.length; _i++) {
                                var col = _a[_i];
                                dataTable.columns.add(col);
                            }
                            for (var _b = 0, _c = resultSet.rows; _b < _c.length; _b++) {
                                var row = _c[_b];
                                dataTable.addRow(row);
                            }
                            var totalRecords = 0;
                            if (result.meta && result.meta.totalRecords) {
                                totalRecords = result.meta.totalRecords;
                            }
                            return {
                                table: dataTable,
                                total: totalRecords,
                                hasNext: !params.needTotal
                                    || params.offset + params.limit < totalRecords
                            };
                        })
                        .finally(function () {
                            _this.context.endProcess();
                        });
                };
                return EasyDataServerLoader;
            }());

            //# sourceMappingURL=easy_data_server_loader.js.map
            // CONCATENATED MODULE: ./dist/lib/main/data_context.js
            var data_context_assign = (undefined && undefined.__assign) || function () {
                data_context_assign = Object.assign || function (t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                    }
                    return t;
                };
                return data_context_assign.apply(this, arguments);
            };



            var data_context_DataContext = /** @class */ (function () {
                function DataContext(options) {
                    this.endpoints = new Map();
                    this.endpointVarsRegex = /\{.*?\}/g;
                    this.options = options || {};
                    this.http = new public_api["HttpClient"]();
                    this.model = new public_api["MetaData"]();
                    this.model.id = options.metaDataId || '__default';
                    this.dataLoader = new easy_data_server_loader_EasyDataServerLoader(this);
                    var dataTableOptions = data_context_assign({ loader: this.dataLoader }, options.dataTable);
                    this.data = new public_api["EasyDataTable"](dataTableOptions);
                    this.setDefaultEndpoints(this.options.endpoint || '/api/easydata');
                }
                DataContext.prototype.getActiveEntity = function () {
                    return this.activeEntity;
                };
                DataContext.prototype.setActiveSource = function (entityId) {
                    this.activeEntity = this.model.getRootEntity().subEntities
                        .filter(function (e) { return e.id == entityId; })[0];
                };
                DataContext.prototype.getMetaData = function () {
                    return this.model;
                };
                DataContext.prototype.getData = function () {
                    return this.data;
                };
                DataContext.prototype.getDataLoader = function () {
                    return this.dataLoader;
                };
                DataContext.prototype.createFilter = function (sourceId, data, isLookup) {
                    return new text_data_filter["a" /* TextDataFilter */](this.dataLoader, data || this.getData(), sourceId || this.activeEntity.id, isLookup);
                };
                DataContext.prototype.loadMetaData = function () {
                    var _this = this;
                    var url = this.resolveEndpoint('GetMetaData');
                    this.startProcess();
                    return this.http.get(url)
                        .then(function (result) {
                            if (result.model) {
                                _this.model.loadFromData(result.model);
                            }
                            return _this.model;
                        })
                        .catch(function (error) {
                            console.error("Error: " + error.message + ". Source: " + error.sourceError);
                            return null;
                        })
                        .finally(function () {
                            _this.endProcess();
                        });
                };
                DataContext.prototype.getHttpClient = function () {
                    return this.http;
                };
                DataContext.prototype.fetchDataset = function () {
                    var _this = this;
                    this.data.clear();
                    return this.dataLoader.loadChunk({ offset: 0, limit: this.data.chunkSize, needTotal: true })
                        .then(function (result) {
                            for (var _i = 0, _a = result.table.columns.getItems(); _i < _a.length; _i++) {
                                var col = _a[_i];
                                _this.data.columns.add(col);
                            }
                            _this.data.setTotal(result.total);
                            for (var _b = 0, _c = result.table.getCachedRows(); _b < _c.length; _b++) {
                                var row = _c[_b];
                                _this.data.addRow(row);
                            }
                            return _this.data;
                        });
                };
                DataContext.prototype.fetchRecord = function (keys, sourceId) {
                    var _this = this;
                    var url = this.resolveEndpoint('FetchRecord', { sourceId: sourceId || this.activeEntity.id });
                    this.startProcess();
                    return this.http.get(url, { queryParams: keys })
                        .finally(function () { return _this.endProcess(); });
                };
                DataContext.prototype.createRecord = function (obj, sourceId) {
                    var _this = this;
                    var url = this.resolveEndpoint('CreateRecord', { sourceId: sourceId || this.activeEntity.id });
                    this.startProcess();
                    return this.http.post(url, obj, { dataType: 'json' })
                        .finally(function () { return _this.endProcess(); });
                };
                DataContext.prototype.updateRecord = function (obj, sourceId) {
                    var _this = this;
                    var url = this.resolveEndpoint('UpdateRecord', { sourceId: sourceId || this.activeEntity.id });
                    this.startProcess();
                    return this.http.post(url, obj, { dataType: 'json' })
                        .finally(function () { return _this.endProcess(); });
                };
                DataContext.prototype.deleteRecord = function (obj, sourceId) {
                    var _this = this;
                    var url = this.resolveEndpoint('DeleteRecord', { sourceId: sourceId || this.activeEntity.id });
                    this.startProcess();
                    return this.http.post(url, obj, { dataType: 'json' })
                        .finally(function () { return _this.endProcess(); });
                };
                DataContext.prototype.setEndpoint = function (key, value) {
                    this.endpoints.set(key, value);
                };
                DataContext.prototype.setEnpointIfNotExist = function (key, value) {
                    if (!this.endpoints.has(key))
                        this.endpoints.set(key, value);
                };
                DataContext.prototype.resolveEndpoint = function (endpointKey, options) {
                    options = options || {};
                    var result = this.endpoints.get(endpointKey);
                    if (!result) {
                        throw endpointKey + ' endpoint is not defined';
                    }
                    var matches = result.match(this.endpointVarsRegex);
                    if (matches) {
                        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                            var match = matches_1[_i];
                            var opt = match.substring(1, match.length - 1);
                            var optVal = options[opt];
                            if (!optVal) {
                                if (opt == 'modelId') {
                                    optVal = this.model.getId();
                                }
                                else if (opt == 'sourceId') {
                                    optVal = this.activeEntity.id;
                                }
                                else {
                                    throw "Parameter [" + opt + "] is not defined";
                                }
                            }
                            result = result.replace(match, optVal);
                        }
                    }
                    return result;
                };
                DataContext.prototype.startProcess = function () {
                    if (this.options.onProcessStart)
                        this.options.onProcessStart();
                };
                DataContext.prototype.endProcess = function () {
                    if (this.options.onProcessEnd)
                        this.options.onProcessEnd();
                };
                DataContext.prototype.setDefaultEndpoints = function (endpointBase) {
                    this.setEnpointIfNotExist('GetMetaData', Object(public_api["combinePath"])(endpointBase, 'models/{modelId}'));
                    this.setEnpointIfNotExist('FetchDataset', Object(public_api["combinePath"])(endpointBase, 'models/{modelId}/sources/{sourceId}/fetch'));
                    this.setEnpointIfNotExist('FetchRecord', Object(public_api["combinePath"])(endpointBase, 'models/{modelId}/sources/{sourceId}/fetch'));
                    this.setEnpointIfNotExist('CreateRecord', Object(public_api["combinePath"])(endpointBase, 'models/{modelId}/sources/{sourceId}/create'));
                    this.setEnpointIfNotExist('UpdateRecord', Object(public_api["combinePath"])(endpointBase, 'models/{modelId}/sources/{sourceId}/update'));
                    this.setEnpointIfNotExist('DeleteRecord', Object(public_api["combinePath"])(endpointBase, 'models/{modelId}/sources/{sourceId}/delete'));
                };
                return DataContext;
            }());

            //# sourceMappingURL=data_context.js.map
            // EXTERNAL MODULE: ./dist/lib/validators/validator.js
            var validator = __webpack_require__(9);

            // CONCATENATED MODULE: ./dist/lib/validators/type_validator.js
            var __extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();


            var type_validator_TypeValidator = /** @class */ (function (_super) {
                __extends(TypeValidator, _super);
                function TypeValidator() {
                    var _this = _super.call(this) || this;
                    _this.name = 'Type';
                    return _this;
                }
                TypeValidator.prototype.validate = function (attr, value) {
                    if (!public_api["utils"].IsDefinedAndNotNull(value) || value == '')
                        return { successed: true };
                    if (public_api["utils"].isNumericType(attr.dataType)) {
                        if (!public_api["utils"].isNumeric(value))
                            return {
                                successed: false,
                                messages: [public_api["i18n"].getText('NumberError')]
                            };
                        if (public_api["utils"].isIntType(attr.dataType)
                            && !Number.isInteger(Number.parseFloat(value))) {
                            return {
                                successed: false,
                                messages: [public_api["i18n"].getText('IntNumberError')]
                            };
                        }
                    }
                    return { successed: true };
                };
                return TypeValidator;
            }(validator["a" /* Validator */]));

            //# sourceMappingURL=type_validator.js.map
            // CONCATENATED MODULE: ./dist/lib/validators/required_validator.js
            var required_validator_extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();


            var required_validator_RequiredValidator = /** @class */ (function (_super) {
                required_validator_extends(RequiredValidator, _super);
                function RequiredValidator() {
                    var _this = _super.call(this) || this;
                    _this.name = 'Required';
                    return _this;
                }
                RequiredValidator.prototype.validate = function (attr, value) {
                    if (!attr.isNullable && (!public_api["utils"].IsDefinedAndNotNull(value)
                        || value === ''))
                        return {
                            successed: false,
                            messages: [public_api["i18n"].getText('RequiredError')]
                        };
                    return { successed: true };
                };
                return RequiredValidator;
            }(validator["a" /* Validator */]));

            //# sourceMappingURL=required_validator.js.map
            // CONCATENATED MODULE: ./dist/lib/views/entity_data_view.js







            var entity_data_view_EntityDataView = /** @class */ (function () {
                function EntityDataView(slot, context, basePath, options) {
                    var _this = this;
                    this.slot = slot;
                    this.context = context;
                    this.basePath = basePath;
                    this.options = {
                        showFilterBox: true,
                        showBackToEntities: true
                    };
                    this.defaultValidators = [new required_validator_RequiredValidator(), new type_validator_TypeValidator()];
                    this.options = public_api["utils"].assignDeep(this.options, options || {});
                    this.dlg = new lib_public_api["DefaultDialogService"]();
                    var ent = this.context.getActiveEntity();
                    if (!ent) {
                        throw "Can't find active entity for " + window.location.pathname;
                    }
                    this.slot.innerHTML += "<h1>" + (ent.captionPlural || ent.caption) + "</h1>";
                    if (this.options.showBackToEntities) {
                        Object(lib_public_api["domel"])(this.slot)
                            .addChild('a', function (b) {
                                return b
                                    .attr('href', 'javascript:void(0)')
                                    .text("\u2190 " + public_api["i18n"].getText('BackToEntities'))
                                    .on('click', function (e) {
                                        e.preventDefault();
                                        Object(utils["c" /* setLocation */])(_this.basePath);
                                    });
                            });
                    }
                    this.renderGrid();
                }
                EntityDataView.prototype.syncGridColumnHandler = function (column) {
                    if (column.dataColumn) {
                        var attr = this.context.getMetaData().getAttributeById(column.dataColumn.id);
                        if (attr) {
                            column.isVisible = attr.showOnView;
                        }
                    }
                };
                EntityDataView.prototype.renderGrid = function () {
                    var _this = this;
                    this.context.fetchDataset()
                        .then(function (result) {
                            var gridSlot = document.createElement('div');
                            _this.slot.appendChild(gridSlot);
                            gridSlot.id = 'Grid';
                            _this.grid = new lib_public_api["EasyGrid"](public_api["utils"].assignDeep({
                                slot: gridSlot,
                                dataTable: result,
                                paging: {
                                    pageSize: 15,
                                    allowPageSizeChange: true,
                                    pageSizeItems: [15, 30, 50, 100, 200]
                                },
                                showPlusButton: _this.context.getActiveEntity().isEditable,
                                plusButtonTitle: public_api["i18n"].getText('AddRecordBtnTitle'),
                                showActiveRow: false,
                                onPlusButtonClick: _this.addClickHandler.bind(_this),
                                onGetCellRenderer: _this.manageCellRenderer.bind(_this),
                                onRowDbClick: _this.rowDbClickHandler.bind(_this),
                                onSyncGridColumn: _this.syncGridColumnHandler.bind(_this)
                            }, _this.options.grid || {}));
                            if (_this.options.showFilterBox) {
                                var filterWidgetSlot_1;
                                var filterBarDiv = Object(lib_public_api["domel"])('div')
                                    .addClass("kfrm-form")
                                    .setStyle('margin', '10px 0px')
                                    .addChild('div', function (b) {
                                        return filterWidgetSlot_1 = b.toDOM();
                                    }).toDOM();
                                _this.slot.insertBefore(filterBarDiv, gridSlot);
                                var dataFilter = _this.context.createFilter();
                                new text_filter_widget_TextFilterWidget(filterWidgetSlot_1, _this.grid, dataFilter);
                            }
                        });
                };
                EntityDataView.prototype.manageCellRenderer = function (column, defaultRenderer) {
                    var _this = this;
                    if (column.isRowNum) {
                        column.width = 110;
                        return function (value, column, cell, rowEl) {
                            var b = Object(lib_public_api["domel"])('div', cell)
                                .addClass("keg-cell-value");
                            if (_this.context.getActiveEntity().isEditable) {
                                b.addChild('a', function (b) {
                                    return b
                                        .attr('href', 'javascript:void(0)')
                                        .text(public_api["i18n"].getText('EditBtn'))
                                        .on('click', function (ev) { return _this.editClickHandler(ev, parseInt(rowEl.getAttribute('data-row-idx'))); });
                                })
                                    .addChild('span', function (b) { return b.text(' | '); })
                                    .addChild('a', function (b) {
                                        return b
                                            .attr('href', 'javascript:void(0)')
                                            .text(public_api["i18n"].getText('DeleteBtn'))
                                            .on('click', function (ev) {
                                                return _this.deleteClickHandler(ev, parseInt(rowEl.getAttribute('data-row-idx')));
                                            });
                                    });
                            }
                        };
                    }
                };
                EntityDataView.prototype.addClickHandler = function () {
                    var _this = this;
                    var activeEntity = this.context.getActiveEntity();
                    var form = new entity_form_builder_EntityEditFormBuilder(this.context)
                        .onSubmit(function () { return dlg.submit(); })
                        .build();
                    form.useValidators(this.defaultValidators);
                    var dlg = this.dlg.open({
                        title: public_api["i18n"].getText('AddDlgCaption')
                            .replace('{entity}', activeEntity.caption),
                        body: form.getHtml(),
                        onSubmit: function () {
                            if (!form.validate())
                                return false;
                            form.getData()
                                .then(function (obj) { return _this.context.createRecord(obj); })
                                .then(function () {
                                    return _this.refreshData();
                                })
                                .catch(function (error) {
                                    _this.processError(error);
                                });
                        }
                    });
                };
                EntityDataView.prototype.editClickHandler = function (ev, rowIndex) {
                    var _this = this;
                    this.context.getData().getRow(rowIndex)
                        .then(function (row) {
                            if (row) {
                                _this.showEditForm(row);
                            }
                        });
                };
                EntityDataView.prototype.showEditForm = function (row) {
                    var _this = this;
                    var activeEntity = this.context.getActiveEntity();
                    var form = new entity_form_builder_EntityEditFormBuilder(this.context, { isEditForm: true, values: row })
                        .onSubmit(function () { return dlg.submit(); })
                        .build();
                    form.useValidators(this.defaultValidators);
                    var dlg = this.dlg.open({
                        title: public_api["i18n"].getText('EditDlgCaption')
                            .replace('{entity}', activeEntity.caption),
                        body: form.getHtml(),
                        onSubmit: function () {
                            if (!form.validate())
                                return false;
                            form.getData()
                                .then(function (obj) { return _this.context.updateRecord(obj); })
                                .then(function () {
                                    return _this.refreshData();
                                })
                                .catch(function (error) {
                                    _this.processError(error);
                                });
                        }
                    });
                };
                EntityDataView.prototype.rowDbClickHandler = function (ev) {
                    if (this.context.getActiveEntity().isEditable) {
                        this.showEditForm(ev.row);
                    }
                };
                EntityDataView.prototype.deleteClickHandler = function (ev, rowIndex) {
                    var _this = this;
                    this.context.getData().getRow(rowIndex)
                        .then(function (row) {
                            if (row) {
                                var activeEntity = _this.context.getActiveEntity();
                                var keyAttrs = activeEntity.getPrimaryAttrs();
                                var keyVals_1 = keyAttrs.map(function (attr) { return row.getValue(attr.id); });
                                var keys_1 = keyAttrs.reduce(function (val, attr, index) {
                                    var property = attr.id.substring(attr.id.lastIndexOf('.') + 1);
                                    val[property] = keyVals_1[index];
                                    return val;
                                }, {});
                                _this.dlg.openConfirm(public_api["i18n"].getText('DeleteDlgCaption')
                                    .replace('{entity}', activeEntity.caption), public_api["i18n"].getText('DeleteDlgMessage')
                                        .replace('{recordId}', Object.keys(keys_1)
                                            .map(function (key) { return key + ":" + keys_1[key]; }).join(';')))
                                    .then(function (result) {
                                        if (result) {
                                            _this.context.deleteRecord(keys_1)
                                                .then(function () {
                                                    return _this.refreshData();
                                                })
                                                .catch(function (error) {
                                                    _this.processError(error);
                                                });
                                        }
                                    });
                            }
                        });
                };
                EntityDataView.prototype.processError = function (error) {
                    this.dlg.open({
                        title: 'Ooops, something went wrong',
                        body: error.message,
                        closable: true,
                        cancelable: false
                    });
                };
                EntityDataView.prototype.refreshData = function () {
                    var _this = this;
                    return this.context.fetchDataset()
                        .then(function () {
                            _this.grid.refresh();
                        });
                };
                return EntityDataView;
            }());

            //# sourceMappingURL=entity_data_view.js.map
            // CONCATENATED MODULE: ./dist/lib/views/root_data_view.js



            var root_data_view_RootDataView = /** @class */ (function () {
                function RootDataView(slot, context, basePath) {
                    this.slot = slot;
                    this.context = context;
                    this.basePath = basePath;
                    this.metaData = this.context.getMetaData();
                    this.slot.innerHTML += "<h1>" + public_api["i18n"].getText('RootViewTitle') + "</h1>";
                    this.renderEntitySelector();
                }
                RootDataView.prototype.renderEntitySelector = function () {
                    var _this = this;
                    var entities = this.metaData.getRootEntity().subEntities;
                    if (this.slot) {
                        Object(lib_public_api["domel"])(this.slot)
                            .addChild('div', function (b) {
                                return b
                                    .addClass('ed-root')
                                    .addChild('div', function (b) {
                                        return b
                                            .addClass('ed-menu-description')
                                        // .addText(public_api["i18n"].getText(!_this.metaData.isEmpty() ? 'EntityMenuDesc' : 'ModelIsEmpty'));
                                    })
                                    .addChild('ul', function (b) {
                                        b.addClass('ed-entity-menu');
                                        entities.forEach(function (ent) {
                                            b.addChild('li', function (b) {
                                                b.addClass('ed-entity-item')
                                                    .on('click', function () {
                                                        Object(utils["c" /* setLocation */])(_this.basePath + "/" + decodeURIComponent(ent.id));
                                                    })
                                                    .addChild('div', function (b) {
                                                        b.addClass('ed-entity-item-caption')
                                                            .addText(ent.captionPlural || ent.caption);
                                                    });
                                                if (ent.description) {
                                                    b.addChild('div', function (b) {
                                                        b.addClass('ed-entity-item-descr')
                                                            .addText("" + ent.description);
                                                    });
                                                }
                                            });
                                        });
                                    });
                            });
                    }
                };
                return RootDataView;
            }());

            //# sourceMappingURL=root_data_view.js.map
            // CONCATENATED MODULE: ./dist/lib/views/easy_data_view_dispatcher.js





            var easy_data_view_dispatcher_EasyDataViewDispatcher = /** @class */ (function () {
                function EasyDataViewDispatcher(options) {
                    var _this = this;
                    this.options = {
                        container: '#EasyDataContainer',
                        basePath: 'easydata'
                    };
                    this.onSetLocation = function () {
                        _this.setActiveView();
                    };
                    this.attach = function () {
                        window.addEventListener('ed_set_location', _this.onSetLocation);
                        window.addEventListener('popstate', _this.onSetLocation);
                    };
                    this.options = public_api["utils"].assign(this.options, options || {});
                    if (this.options.rootEntity) {
                        this.options.showBackToEntities = false;
                        this.basePath = '/';
                    }
                    else {
                        this.basePath = this.normalizeBasePath(this.options.basePath);
                    }
                    this.setContainer(this.options.container);
                    var progressBarSlot = document.createElement('div');
                    var bar = new ProgressBar(progressBarSlot);
                    var parent = this.container.parentElement;
                    parent.insertBefore(progressBarSlot, parent.firstElementChild);
                    this.context = new data_context_DataContext({
                        endpoint: this.options.endpoint,
                        dataTable: this.options.dataTable,
                        onProcessStart: function () { return bar.show(); },
                        onProcessEnd: function () { return bar.hide(); }
                    });
                }
                EasyDataViewDispatcher.prototype.normalizeBasePath = function (basePath) {
                    basePath = this.trimSlashes(basePath);
                    var fullPath = decodeURIComponent(window.location.pathname);
                    var idx = fullPath.toLocaleLowerCase().indexOf(basePath);
                    return idx >= 0 ? fullPath.substring(0, idx + basePath.length) : '/';
                };
                EasyDataViewDispatcher.prototype.trimSlashes = function (path) {
                    return path.replace(/^\/|\/$/g, '');
                };
                EasyDataViewDispatcher.prototype.setContainer = function (container) {
                    if (!container) {
                        throw 'Container is undefined';
                    }
                    if (typeof container === 'string') {
                        if (container.length) {
                            if (container[0] === '.') {
                                var result = document.getElementsByClassName(container.substring(1));
                                if (result.length)
                                    this.container = result[0];
                            }
                            else {
                                if (container[0] === '#') {
                                    container = container.substring(1);
                                }
                                this.container = document.getElementById(container);
                            }
                            if (!this.container) {
                                throw Error('Unrecognized `container` parameter: ' + container + '\n'
                                    + 'It must be an element ID, a class name (starting with .) or an HTMLElement object itself.');
                            }
                        }
                    }
                    else {
                        this.container = container;
                    }
                };
                EasyDataViewDispatcher.prototype.getActiveSourceId = function () {
                    if (this.options.rootEntity)
                        return this.options.rootEntity;
                    var path = decodeURIComponent(window.location.pathname);
                    var idIndex = this.basePath.length + 1;
                    return idIndex < path.length ? path.substring(idIndex) : null;
                };
                EasyDataViewDispatcher.prototype.run = function () {
                    var _this = this;
                    this.attach();
                    return this.context.loadMetaData()
                        .then(function () {
                            _this.setActiveView();
                        })
                        .catch(function (error) { return console.error(error); });
                };
                EasyDataViewDispatcher.prototype.setActiveView = function () {
                    this.clear();
                    var sourceId = this.getActiveSourceId();
                    if (sourceId) {
                        this.context.setActiveSource(sourceId);
                        window['EDView'] = new entity_data_view_EntityDataView(this.container, this.context, this.basePath, this.options);
                    }
                    else {
                        window['EDView'] = new root_data_view_RootDataView(this.container, this.context, this.basePath);
                    }
                };
                EasyDataViewDispatcher.prototype.clear = function () {
                    this.container.innerHTML = '';
                    this.context.getData().clear();
                };
                EasyDataViewDispatcher.prototype.detach = function () {
                    window.removeEventListener('ed_set_location', this.onSetLocation);
                    window.removeEventListener('popstate', this.onSetLocation);
                };
                return EasyDataViewDispatcher;
            }());

            //# sourceMappingURL=easy_data_view_dispatcher.js.map
            // CONCATENATED MODULE: ./dist/lib/i18n/text_resources.js

            function addEasyDataCRUDTexts() {
                public_api["i18n"].updateDefaultTexts({
                    RequiredError: 'Value is required.',
                    NumberError: 'Value should be a number',
                    IntNumberError: 'Value should be an integer number',
                    DateTimeError: 'Invalid date or time value',
                    LookupSelectedItem: 'Selected item: ',
                    LookupDlgCaption: 'Select {entity}',
                    None: 'None',
                    NavigationBtnTitle: 'Navigation values',
                    CalendarBtnTitle: 'Open calendar',
                    TimerBtnTitle: 'Open timer',
                    AddBtnTitle: 'Add',
                    AddRecordBtnTitle: 'Add record',
                    EditBtn: 'Edit',
                    DeleteBtn: 'Delete',
                    SelectLink: '[ select ]',
                    AddDlgCaption: 'Create {entity}',
                    EditDlgCaption: 'Edit {entity}',
                    DeleteDlgCaption: 'Delete {entity}',
                    DeleteDlgMessage: 'Are you sure you want to remove this record: {{recordId}}?',
                    // EntityMenuDesc: 'Click on an entity to view/edit its content',
                    BackToEntities: 'Back to entities',
                    SearchBtn: 'Search',
                    SearchInputPlaceholder: 'Search...',
                    RootViewTitle: 'Entities',
                    ModelIsEmpty: 'No entity was found.'
                });
            }
            addEasyDataCRUDTexts();
            //# sourceMappingURL=text_resources.js.map
            // CONCATENATED MODULE: ./dist/lib/public_api.js














            //# sourceMappingURL=public_api.js.map
            // CONCATENATED MODULE: ./api-easydata.js






            /***/
        })
/******/]);
//# sourceMappingURL=easydata.js.map