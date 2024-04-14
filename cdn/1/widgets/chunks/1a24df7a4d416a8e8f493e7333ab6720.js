/*! For license information please see 1a24df7a4d416a8e8f493e7333ab6720.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[41036],{41036:(e,t,i)=>{i.r(t),i.d(t,{arcgis_field_info:()=>S});var s=i(28384),n=i(62727),a=i(66716),l=i(34077);i(18869),i(81068),i(72637);const r="section",o="title",u="missing",c="data",d="statistics-row",h="statistics-row-top-values";var m,p;function f(e){return null!=e}function g(e){var t;return"scene"===e.type?null===(t=e.associatedLayer)||void 0===t?void 0:t.url:e.url}async function v(e){e.statisticsStatus=m.IN_PROGRESS;const{layer:t,view:i}=e;if("imagery"===t.type||"imagery-tile"===t.type||"stream"===t.type)throw new Error("could not get feature count");try{return await(0,l.g)(t,i)}catch(e){return}}async function y(e){const{layer:t}=e;if(["imagery","imagery-tile","stream","ogc-feature"].indexOf(t.type)>-1)throw new Error("cannot get feature from service");const[i]=await(0,a.l)(["esri/rest/support/Query"]),s=new i({where:"1=1",outFields:["*"],returnGeometry:!1});return t.queryFeatures(s)}!function(e){e.MISSING="missing",e.IN_PROGRESS="inProgress",e.SUCCESS="success",e.FAILED="failed"}(m||(m={})),function(e){e.NUMBER="number",e.STRING="string",e.DATE="date",e.DATE_ONLY="date-only",e.TIME_ONLY="time-only",e.TIMESTAMP_OFFSET="timestamp-offset",e.OID="oid",e.GUID="guid",e.UNKNOWN="unknown"}(p||(p={}));const S=class{constructor(e){(0,s.r)(this,e),this.arcgisFieldInfoComplete=(0,s.c)(this,"arcgisFieldInfoComplete",7),this.view=void 0,this.layer=void 0,this.fieldName=void 0,this.hideStatistics=!1,this.oneFeatureResponse=void 0,this.oneFeatureResponseStatus=m.MISSING,this.statistics=void 0,this.statisticsStatus=m.MISSING,this.uniqueValues=void 0,this.uniqueValuesStatus=m.MISSING}async componentWillLoad(){const[e,t,i]=await(0,n.g)(this.hostElement);this.strings=e,this.locale=t,this.localIntl=i;const[s,l,r]=await(0,a.l)(["esri/core/lang","esri/core/sql/SqlTimestampOffset","esri/intl"]),{view:o,layer:u,fieldName:c,hideStatistics:d}=this;let h;if("esri.layers.support.Sublayer"===u.declaredClass){const e=u,[t]=await(0,a.l)(["esri/core/reactiveUtils"]);o&&await t.whenOnce((()=>!o.updating)),h=await e.createFeatureLayer(),await h.load()}this.props={view:o,layer:h||u,fieldName:c,hideStatistics:d,modules:{esriLang:s,SqlTimeStampOffset:l,intl:r}},this.props.fieldInfo=function(e){var t;const{layer:i,fieldName:s}=e;let n;const{popupTemplate:a}=i,l=a?a.fieldInfos:[];return("imagery-tile"===i.type||"imagery"===i.type&&(null===(t=i.rasterFields)||void 0===t?void 0:t.length)?i.rasterFields:i.fields).filter((e=>e.name===s)).forEach((t=>{const i=l?l.filter((e=>e.fieldName===t.name)):null,a=(null==i?void 0:i.length)?i[0].label:null;/^raster.(item|service)pixelvalue/i.test(s)&&(t.type="double");const r={layerField:t,label:a||t.alias||t.name};r.codedValues=function(e,t){const{layer:i,modules:s}=t;if("feature"!==i.type)return;const n=i.typeIdField,a=i.types;let l;const r=i.fields.find((t=>t.name===e)),o=r.domain;return n&&a?(n===e?l=a.map((e=>({code:e.id,name:e.name}))):(l=[],a.forEach((t=>{var i,n;if(t.domains&&t.domains[e]&&"inherited"!==t.domains[e].type)(null===(n=null===(i=t.domains)||void 0===i?void 0:i[e])||void 0===n?void 0:n.codedValues)&&t.domains[e].codedValues.forEach((async e=>{let t=!1;l.forEach((i=>{i.code===e.code&&(t=!0,-1===`, ${i.name},`.indexOf(`, ${e.name},`)&&(i.name+=`, ${e.name}`))})),t||l.push(s.esriLang.clone(e))}));else{const e=o;(null==e?void 0:e.codedValues)&&e.codedValues.forEach((async e=>{let t=!1;l.forEach((i=>{i.code===e.code&&(t=!0,-1===`, ${i.name},`.indexOf(`, ${e.name},`)&&(i.name+=`, ${e.name}`))})),t||l.push(s.esriLang.clone(e))}))}}))),!(null==l?void 0:l.length)&&(null==o?void 0:o.codedValues)&&(l=s.esriLang.clone(o.codedValues))):(null==o?void 0:o.codedValues)&&(l=r.domain.codedValues),(null==l?void 0:l.length)?l:null}(s,e),function(e){switch(e.layerField.type){case"string":e.simpleFieldType=p.STRING;break;case"date":e.simpleFieldType=p.DATE;break;case"timestamp-offset":e.simpleFieldType=p.TIMESTAMP_OFFSET;break;case"date-only":e.simpleFieldType=p.DATE_ONLY;break;case"time-only":e.simpleFieldType=p.TIME_ONLY;break;case"oid":e.simpleFieldType=p.OID;break;case"guid":case"global-id":e.simpleFieldType=p.GUID;break;case"small-integer":case"big-integer":case"integer":case"single":case"double":case"long":e.simpleFieldType=p.NUMBER}}(r),r.simpleFieldType&&(n=r)})),n}(this.props)}async componentDidLoad(){var e;const{props:t,hideStatistics:i}=this,{layer:s,modules:n}=t;if(n.intl.setLocale(this.localIntl),"scene"===s.type){const[e]=await(0,a.l)(["esri/config"]);e.request.interceptors.push({urls:g(s)+"/"+s.layerId,before:function(e){e.requestOptions.authMode="no-prompt"}})}this.oneFeatureResponseStatus=m.IN_PROGRESS;try{const e=await async function(e){var t,i;const{view:s,layer:n}=e;if("imagery"===n.type||"imagery-tile"===n.type)throw new Error("could not get feature");if("feature"===n.type&&!n.url||"wfs"===n.type){const e=n.createQuery();e.start=0,e.num=5,e.outFields=["*"];const i=await n.queryFeatures(e);if(null===(t=i.features)||void 0===t?void 0:t.length)return i;throw new Error("could not get feature")}{if(!s)return y(e);const t=await s.whenLayerView(n);if(t.availableFields.length===n.fields.length||["stream","ogc-feature"].indexOf(n.type)>-1&&t.availableFields.length>0){const s=n.createQuery();s.start=0,s.num=5,s.outFields=["*"];const a=await t.queryFeatures(s);return(null===(i=a.features)||void 0===i?void 0:i.length)?a:y(e)}return y(e)}}(this.props);this.oneFeatureResponse=e,this.oneFeatureResponseStatus=m.SUCCESS}catch(e){this.oneFeatureResponseStatus=m.FAILED}if("stream"===s.type)return this.uniqueValuesStatus=m.FAILED,void(this.statisticsStatus=m.FAILED);if(i)this.uniqueValuesStatus=m.FAILED;else{this.uniqueValuesStatus=m.IN_PROGRESS;try{const t=await async function(e){const{layer:t,view:i,fieldName:s}=e;if("imagery"===t.type||"imagery-tile"===t.type)throw new Error("could not get unique values for ImageryLayer/ImageryTileLayer");"feature"!==t.type||t.url||(t.outFields=["*"]);const[n]=await(0,a.l)(["esri/smartMapping/statistics/uniqueValues"]);try{return await n({layer:t,view:i,field:s})}catch(e){throw new Error("could not get unique values")}}(this.props);this.uniqueValues=t,(null===(e=null==t?void 0:t.uniqueValueInfos)||void 0===e?void 0:e.length)?this.uniqueValuesStatus=m.SUCCESS:this.uniqueValuesStatus=m.FAILED}catch(e){this.uniqueValuesStatus=m.FAILED}}if(i)this.statisticsStatus=m.FAILED;else{this.statisticsStatus=m.IN_PROGRESS;try{const e=await async function(e){const{layer:t,view:i,fieldName:s,fieldInfo:n}=e;if("imagery"===t.type||"imagery-tile"===t.type)throw new Error("could not get statistics for ImageryLayer/ImageryTileLayer");if(!n||"oid"===n.layerField.type||"guid"===n.layerField.type||"global-id"===n.layerField.type){const t=await v(e);return Promise.resolve({totalCount:t,nullcount:0})}try{const[n]=await(0,a.l)(["esri/smartMapping/statistics/summaryStatistics"]),l=await n({layer:t,view:i,field:s});if(!f(l.count))throw new Error("could not get statistics");const r="sourceJSON"in t&&t.sourceJSON.maxRecordCount===l.count;if(f(l.nullcount)&&!r)return Object.assign(Object.assign({},l),{totalCount:l.count+l.nullcount});{const t=await v(e);return Object.assign(Object.assign({},l),{totalCount:t})}}catch(e){throw new Error("could not get statistics")}}(this.props);if(!f(e.totalCount)&&f(e.count)&&this.uniqueValuesStatus===m.SUCCESS){const t=this.uniqueValues.uniqueValueInfos;for(let i=0;i<t.length;i++){const s=t[i];if(null===s.value){e.totalCount=s.count+e.count;break}}f(e.totalCount)||(e.totalCount=e.count)}this.statistics=e,this.statisticsStatus=m.SUCCESS}catch(e){this.statisticsStatus=m.FAILED}}}render(){const{props:e}=this,{fieldInfo:t}=e;return t?(0,s.h)(s.H,null,(0,s.h)("div",{class:"container"},this.renderFieldType(),this.renderFieldAlias(),this.renderFieldDescription(),this.renderFieldValueType(),this.renderFieldSampleValue(),this.renderFieldFormat(),this.renderFieldStatistics())):null}renderFieldType(){const{strings:e,props:t}=this,{fieldInfo:i}=t,n=this._getFieldTypeLabel(i.layerField.type);return(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},e.fieldType),(0,s.h)("div",null,n))}renderFieldAlias(){const{strings:e,props:t}=this,{fieldInfo:i}=t;return(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},e.fieldAlias),(0,s.h)("div",null,i.label))}renderFieldDescription(){const{strings:e,props:t}=this,{layer:i}=t;if("feature"!==i.type)return null;const{fieldInfo:n}=t,a=n.layerField.description;return(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},e.fieldDescription),(0,s.h)("div",{class:{[u]:!a}},a||e.fieldDescriptionNotSet))}renderFieldValueType(){const{strings:e,props:t}=this,{layer:i}=t;if("feature"!==i.type)return null;const{fieldInfo:n}=t,a=this._getFieldValueTypeCamelCase(n);return(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},e.fieldValueType),(0,s.h)("div",{class:a?null:u},a?e.fieldValueTypes[a]:e.fieldValueTypeNotSet))}renderFieldSampleValue(){var e,t,i,n,a;const{oneFeatureResponse:l,oneFeatureResponseStatus:c,statisticsStatus:d,statistics:h,uniqueValuesStatus:g,uniqueValues:v,strings:y,props:S}=this,{layer:I,fieldName:F,fieldInfo:T}=S,{statistics:O}=y;let w;if(["imagery","imagery-tile"].indexOf(I.type)>-1)return;if("stream"!==I.type&&[p.STRING,p.OID,p.GUID].indexOf(this._getStatisticsType(T))>-1&&g!==m.FAILED)return null;c===m.SUCCESS?l.features.forEach((e=>{(void 0===w||null===w&&null!==e.attributes[F])&&(w=e.attributes[F])})):d===m.SUCCESS?w=h.min:g===m.SUCCESS&&(w=(null===(t=null===(e=v.uniqueValueInfos)||void 0===e?void 0:e[0])||void 0===t?void 0:t.value)||(null===(n=null===(i=v.uniqueValueInfos)||void 0===i?void 0:i[1])||void 0===n?void 0:n.value));const E=T.codedValues;return f(w)&&(w=E?(null===(a=E.find((e=>w===e.code)))||void 0===a?void 0:a.name)||w:this._getDisplayString(w)),(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},y.fieldSampleValue),(0,s.h)("div",{class:c===m.FAILED&&d===m.FAILED&&g===m.FAILED||!f(w)?u:null},c===m.SUCCESS||d===m.SUCCESS||g===m.SUCCESS?f(w)?`${w}`:O.allNulls:c===m.FAILED&&d===m.FAILED&&g===m.FAILED?y.fieldSampleNotAvailable:y.fieldSampleRetrieving))}renderFieldFormat(){var e,t;const{strings:i,props:n}=this,{fieldName:a,fieldInfo:l,layer:c}=n;if(-1===["single","double","long"].indexOf(l.layerField.type))return null;const d=c.popupTemplate;if(null==d?void 0:d.fieldInfos){const n=null===(e=d.fieldInfos)||void 0===e?void 0:e.filter((e=>e.fieldName===a));if(null==n?void 0:n.length){const e=n[0];if(f(null===(t=null==e?void 0:e.format)||void 0===t?void 0:t.places)){const t=e.format.places;return(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},i.fieldDecimalPlaces),(0,s.h)("div",null,i.fieldNumDecimalPlaces.replace("${number}",t.toString())))}}}return(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},i.fieldDecimalPlaces),(0,s.h)("div",{class:u},i.fieldDecimalPlacesNotAvailable))}renderFieldStatistics(){const{statisticsStatus:e,uniqueValuesStatus:t,hideStatistics:i,strings:n,props:a}=this,{layer:l,fieldInfo:c}=a;return i||["stream","imagery","imagery-tile"].indexOf(l.type)>-1||["long"].indexOf(c.layerField.type)>-1?(this.arcgisFieldInfoComplete.emit(),null):(0,s.h)("div",{class:r},(0,s.h)("div",{class:o},n.fieldStatistics),e&&e!==m.MISSING&&e!==m.IN_PROGRESS?e===m.FAILED&&t!==m.SUCCESS?this.renderNoStatistics():(0,s.h)("div",{key:"field-info-statistics-content",ref:()=>this.arcgisFieldInfoComplete.emit()},this.renderStatistics()):(0,s.h)("div",{key:"field-info-statistics-content",class:u},n.fieldStatisticsRetrieving))}renderNoStatistics(){const{strings:e}=this;return(0,s.h)("div",{key:"field-info-statistics-content",ref:()=>this.arcgisFieldInfoComplete.emit(),class:u},e.fieldStatisticsNotAvailable)}renderStatistics(){const{props:e}=this,{fieldInfo:t}=e;switch(this._getStatisticsType(t)){case p.NUMBER:return this.renderNumberStatistics();case p.STRING:case p.OID:case p.GUID:return this.renderStringStatistics();case p.DATE:case p.DATE_ONLY:case p.TIME_ONLY:case p.TIMESTAMP_OFFSET:return this.renderDateStatistics();default:return null}}renderNumberStatistics(){const{statistics:e,strings:t}=this;if(!e)return this.renderNoStatistics();const{statistics:i}=t;return(0,s.h)("div",null,(0,s.h)("div",{class:d},(0,s.h)("div",null,i.numberOfValues),(0,s.h)("div",{class:c},this._printNumValue(e.totalCount))),f(e.sum)?(0,s.h)("div",{class:d},(0,s.h)("div",null,i.sumOfValues),(0,s.h)("div",{class:c},this._printNumValue(e.sum))):null,f(e.min)?(0,s.h)("div",{class:d},(0,s.h)("div",null,i.minimum),(0,s.h)("div",{class:c},this._printNumValue(e.min))):null,f(e.max)?(0,s.h)("div",{class:d},(0,s.h)("div",null,i.maximum),(0,s.h)("div",{class:c},this._printNumValue(e.max))):null,f(e.avg)?(0,s.h)("div",{class:d},(0,s.h)("div",null,i.average),(0,s.h)("div",{class:c},this._printNumValue(e.avg))):null,f(e.stddev)?(0,s.h)("div",{class:d},(0,s.h)("div",null,i.standardDeviation),(0,s.h)("div",{class:c},this._printNumValue(e.stddev))):null,this.renderNullValues())}renderStringStatistics(){const{statistics:e,uniqueValuesStatus:t,strings:i}=this,{statistics:n}=i;return(0,s.h)("div",null,(0,s.h)("div",{class:d},(0,s.h)("div",null,n.numberOfValues),t!==m.SUCCESS?(0,s.h)("div",{class:u},"--"):(0,s.h)("div",{class:c},this._printNumValue(null==e?void 0:e.totalCount))),this.renderNullValues(),this.renderTopValues())}renderDateStatistics(){const{statistics:e,view:t,props:i,strings:n}=this,{fieldInfo:a}=i;if(!e)return this.renderNoStatistics();const{statistics:l}=n,r=e.max-e.min,o=Math.floor(r/31536e6);let u=Math.floor((r-31536e6*o)/2628e6),h=Math.ceil((r-2628e6*u)/864e5);h>=30&&(u+=1,h=0);let m=1===o?l.timeSpanOptions.year:o>1?l.timeSpanOptions.years.replace("${years}",o.toString()):"";m+=o>0&&(u>0||h>0)?", ":"",m+=1===u?l.timeSpanOptions.month:u>1?l.timeSpanOptions.months.replace("${months}",u.toString()):"",m+=u>0&&h>0?", ":"",m+=1===h?l.timeSpanOptions.day:h>1?l.timeSpanOptions.days.replace("${days}",h.toString()):"";const g=a.simpleFieldType!==p.TIMESTAMP_OFFSET||"unknown"!==t.timeZone,v=a.simpleFieldType===p.TIME_ONLY;return(0,s.h)("div",null,(0,s.h)("div",{class:d},(0,s.h)("div",null,l.numberOfValues),(0,s.h)("div",{class:c},this._printNumValue(null==e?void 0:e.totalCount))),g&&f(e.min)?(0,s.h)("div",{class:d},(0,s.h)("div",null,v?l.minimumTime:l.minimumDate),(0,s.h)("div",{class:c},`${this._getDisplayString(e.min)}`)):null,g&&f(e.max)?(0,s.h)("div",{class:d},(0,s.h)("div",null,v?l.maximumTime:l.maximumDate),(0,s.h)("div",{class:c},`${this._getDisplayString(e.max)}`)):null,g&&f(e.avg)?(0,s.h)("div",{class:d},(0,s.h)("div",null,v?l.averageTime:l.averageDate),(0,s.h)("div",{class:c},`${this._getDisplayString(e.avg)}`)):null,g&&!v&&f(e.min)&&f(e.max)&&r>0?(0,s.h)("div",{class:d},(0,s.h)("div",null,l.timespan),(0,s.h)("div",{class:c},m)):null,this.renderNullValues())}renderTopValues(){var e;const{uniqueValues:t,uniqueValuesStatus:i,strings:n,props:a}=this,{fieldInfo:l}=a,{statistics:r}=n;if(null===(e=null==t?void 0:t.uniqueValueInfos)||void 0===e?void 0:e.length){const e=t.uniqueValueInfos;e.sort(((e,t)=>e.count<t.count?1:e.count>t.count?-1:0));const i=l.codedValues,n=e.filter((e=>null!==e.value)).filter(((e,t)=>e&&t<10)).map((e=>{let t=e.value;return i?i.forEach((e=>{t===e.code&&(t=e.name)})):t=this._getDisplayString(t),(0,s.h)("div",{class:d},(0,s.h)("div",{class:c},`${t}`),(0,s.h)("div",{class:`${c} count`},this._printNumValue(e.count)))}));return n.length?(0,s.h)("div",null,(0,s.h)("div",{class:h},(0,s.h)("div",null,e.length>10?r.topTenValues:r.topValues),(0,s.h)("div",null,r.count)),n):null}return(0,s.h)("div",null,(0,s.h)("div",{class:h},(0,s.h)("div",null,r.topValues),(0,s.h)("div",null,r.count)),(0,s.h)("div",{class:d},(0,s.h)("div",{class:u},i===m.FAILED?n.fieldUniqueValuesNotAvailable:n.fieldSampleRetrieving)))}renderNullValues(){const{statistics:e,uniqueValues:t,strings:i}=this,{statistics:n}=i;let a=null==e?void 0:e.nullcount;if(!f(a)&&t){const e=t.uniqueValueInfos;for(let t=0;t<e.length;t++){const i=e[t];if(null===i.value){a=i.count;break}}}return(0,s.h)("div",{class:d},(0,s.h)("div",null,n.numberOfNulls),f(a)?(0,s.h)("div",{class:c},`${new Number(a).toLocaleString()}`):(0,s.h)("div",{class:u},"--"))}_getFieldTypeLabel(e){const{strings:t}=this,i=t.fieldTypes;switch(e){case"small-integer":return i.smallInteger;case"big-integer":return i.bigInteger;case"integer":return i.integer;case"single":return i.single;case"double":return i.double;case"long":return i.long;case"string":default:return i.string;case"date":return i.date;case"date-only":return i.dateOnly;case"time-only":return i.timeOnly;case"timestamp-offset":return i.timestampOffset;case"oid":return i.oid;case"guid":return i.guid;case"global-id":return i.globalId}}_getStatisticsType(e){switch(e.layerField.type){case"small-integer":case"big-integer":case"integer":case"single":case"double":if(e.codedValues)return p.STRING;switch(e.layerField.valueType){case"name-or-title":case"type-or-category":case"description":case"location-or-place-name":case"ordered-or-ranked":case"binary":return p.STRING;default:return p.NUMBER}case"string":return p.STRING;case"date":return p.DATE;case"timestamp-offset":return p.TIMESTAMP_OFFSET;case"date-only":return p.DATE_ONLY;case"time-only":return p.TIME_ONLY;default:return p.STRING}}_getFieldValueTypeCamelCase(e){switch(e.layerField.valueType){case"count-or-amount":return"countOrAmount";case"percentage-or-ratio":return"percentageOrRatio";case"unique-identifier":return"uniqueIdentifier";case"name-or-title":return"nameOrTitle";case"type-or-category":return"typeOrCategory";case"location-or-place-name":return"locationOrPlaceName";case"ordered-or-ranked":return"orderedOrRanked";case"date-and-time":return"dateAndTime";default:return e.layerField.valueType}}_getDisplayString(e){const{props:t}=this,{fieldInfo:i}=t;switch(i.simpleFieldType){case p.DATE:return this._getDateString(e);case p.TIMESTAMP_OFFSET:return this._getTimestampOffsetString(e);case p.DATE_ONLY:return this._getDateOnlyString(e);case p.TIME_ONLY:return this._getTimeOnlyString(e);case p.NUMBER:return this._getNumberString(e);case p.GUID:return this._getGuidString(e);default:return`${e}`}}_getDateString(e){const{modules:t,view:i}=this.props;return"unknown"===i.timeZone?t.intl.formatDate(e,Object.assign(Object.assign({},t.intl.convertDateFormatToIntlOptions("short-date-short-time")),{timeZone:"utc",timeZoneName:"shortOffset"})):t.intl.formatDate(e,Object.assign(Object.assign({},t.intl.convertDateFormatToIntlOptions("short-date-short-time")),{timeZone:i.timeZone}))}_getTimestampOffsetString(e){const{modules:t,view:i}=this.props;return"string"==typeof e?"unknown"===i.timeZone?t.intl.formatTimestamp(e,Object.assign(Object.assign({},t.intl.convertDateFormatToIntlOptions("short-date-short-time")),{timeZone:"utc",timeZoneName:"shortOffset"})):t.intl.formatTimestamp(e,Object.assign(Object.assign({},t.intl.convertDateFormatToIntlOptions("short-date-short-time")),{timeZone:i.timeZone})):this._getDateString(e)}_getDateOnlyString(e){const{props:t}=this,{modules:i}=t;return i.intl.formatDateOnly(e,i.intl.convertDateFormatToIntlOptions("short-date"))}_getTimeOnlyString(e){const{props:t}=this,{modules:i}=t;return"string"==typeof e?i.intl.formatTimeOnly(e,i.intl.convertDateFormatToIntlOptions("short-date-long-time")):i.intl.formatDate(e,Object.assign(Object.assign({},i.intl.convertDateFormatToIntlOptions("long-time")),{timeZone:"utc"}))}_getGuidString(e){return e.startsWith("{")?e:`{${e}}`}_getNumberString(e){return this.props.modules.intl.formatNumber(e)}_printNumValue(e){return f(e)?this._getNumberString(Math.round(100*e)/100):"--"}get hostElement(){return(0,s.d)(this)}};S.style=":host{height:100%}.container{padding:6px;background-color:white}.title{font-weight:bold;padding:5px 0}.missing{color:#a9a9a9}.data{color:#a9a9a9}.count{white-space:nowrap}.section{padding:6px 0}.statistics-row{border-top:1px solid #e0e0e0;padding:6px 0;display:flex;justify-content:space-between}.statistics-row-top-values{border-top:1px solid #e0e0e0;padding:20px 0 6px 0;display:flex;justify-content:space-between}"},62727:(e,t,i)=>{i.d(t,{a:()=>l,g:()=>u});var s=i(18869),n=i(81068),a=i(28384);function l(e){var t,i,a;const l=null!==(t=(0,s.c)(e,"[lang]"))&&void 0!==t?t:null===(a=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===a?void 0:a.documentElement,r=((null==l?void 0:l.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return n.l.has(r)?n.l.get(r):n.l.has(r.slice(0,2))?n.l.get(r.slice(0,2)):"en"}const r={};function o(e,t){const i=`${e}${t}`;return r[i]||(r[i]=function(e,t){return new Promise(((i,s)=>{fetch((0,a.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?i(e.json()):s()}),(()=>s()))}))}(e,t)),r[i]}async function u(e,t){const i=t||e.tagName.toLowerCase(),a=l(e),r=function(e){var t,i,a;const l=null!==(t=(0,s.c)(e,"[lang]"))&&void 0!==t?t:null===(a=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===a?void 0:a.documentElement,r=((null==l?void 0:l.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return n.l.has(r)?n.l.get(r):n.l.has(r.slice(0,2))?r:"en"}(e);let u;try{u=await o(i,a)}catch(e){console.warn(`no locale for ${i} (${a}) loading default locale en.`),u=await o(i,"en")}return[u,a,r]}}}]);