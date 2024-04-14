/*! For license information please see ba719ab3608bb12de1b4f9b6d8756b94.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[80387],{80387:(e,t,r)=>{r.r(t),r.d(t,{arcgis_dependency_check:()=>h,arcgis_item_share_group:()=>m,arcgis_item_share_group_card:()=>g});var i=r(28384),a=r(41171),s=r(62381),n=r(62727),o=r(44371),l=r(26800),c=r(83397),d=r(96729),u=r(26426);r(66716),r(76134),r(27010),r(18869),r(81068),r(86739),r(65508),r(58892),r(54871),r(31546);const h=class{constructor(e){(0,i.r)(this,e),this.workflowCancel=(0,i.c)(this,"workflowCancel",7),this.workflowComplete=(0,i.c)(this,"workflowComplete",7),this.analyzeSharingDetail=async()=>{let e,{preProcessedSharingDetail:t,items:r,portal:i,i18n:s}=this;if(this.loadingText="loadingInfo",!this.preProcessedSharingDetail){const s=await Promise.all(r.map((({item:e,overrideLayers:t})=>(0,o.a)(e,i,t,{clearDataCacheOnDone:!1}))));o.e.forEach((e=>(0,a.c)(e))),t=s.reduce(((t,{error:r,result:i})=>(e=null==r?void 0:r.code,i&&Object.keys(i).forEach((e=>{t[e]=[...t[e],...i[e]]})),t)),{needEditableLayers:[],needPubliclyEditableLayers:[],needDataCollectionLayers:[],needsShareLevelUpdateLayers:[],premiumLayers:[],notEditableLayers:[]})}return this.sharingDetail=t,this.sharingDetail&&"dataNotAvailable"!==e?this.filterAndGetSharingDetails():(this.errorMessage=s.unableToGetItem,[])},this.filterAndGetSharingDetails=()=>{const{sharingDetail:e}=this;if(Object.keys(e).every((t=>{var r;return!(null===(r=e[t])||void 0===r?void 0:r.length)})))return;const{needEditableLayers:t,needsShareLevelUpdateLayers:r}=e;this.needsShareLevelUpdateLayers=r,this.needEditableLayers=t,this.shareableItemCount=[...r,...t].length;const i=Object.keys(e).reduce(((t,r)=>{var i;return null===(i=e[r])||void 0===i||i.forEach((e=>{t.push({item:e.sourceItem,state:r})})),t}),[]);return this.displayItems=i,i},this.closeDialog=()=>{this.workflowCancel.emit()},this.updateSharing=async()=>{const{needsShareLevelUpdateLayers:e,needEditableLayers:t,portal:r,items:i}=this;this.isLoading=!0,this.loadingText="updatingSharing";const a=[...e,...t],s=a.map((({sourceItem:e})=>e)),n=a.some((({detail:e})=>e.needsShareLevelUpdate)),l=n?i[0].item.access:null,c=a.some((({detail:e})=>e.needsGroupUpdate))&&"public"!==l;n||c?await(0,o.s)(s,i.map((({item:e})=>e)),l,r,c):console.warn("Unexpected state: no need to update share level or group"),this.isLoading=!1,this.workflowComplete.emit({updatedSourceItems:s,oldSharingDetail:this.sharingDetail})},this.getStatusInfoForLayerState=e=>{switch(e){case"needEditableLayers":return{i18nKey:"sharingPDCEnabled",kind:"info"};case"needPubliclyEditableLayers":case"needDataCollectionLayers":return{i18nKey:"pdc",kind:"danger",link:"https://doc.arcgis.com/en/arcgis-online/manage-data/manage-editing-hfl.htm#ESRI_SECTION2_82D598D7970A4A97923EED07CEB4A6A2"};case"premiumLayers":return{i18nKey:"premium",kind:"info",link:"https://doc.arcgis.com/en/arcgis-online/reference/faq.htm#SHARE_SUBSCR_LYR"};case"notEditableLayers":return{i18nKey:"noPermission",kind:"danger"};default:return null}},this.renderPreviewItemNotice=()=>{const{previewItemState:e,getStatusInfoForLayerState:t,i18n:r}=this,a=e?t(e):null;if(!a)return null;const{i18nKey:s,kind:n,link:o}=a,l=r.needShare;return(0,i.h)("calcite-notice",{open:!0,closable:!1,scale:"m",kind:n,slot:"preview-summary-top",class:"preview-notice"},(0,i.h)("div",{slot:"message"},l[s].panel),o&&"noPermission"!==s&&"sharingPDCEnabled"!==s&&(0,i.h)("calcite-link",{slot:"link",href:o,target:"_blank",rel:"noopener"},l[s].learnMore))},this.user=void 0,this.portal=void 0,this.config=void 0,this.api=void 0,this.isActive=!0,this.items=void 0,this.preProcessedSharingDetail=void 0,this.isLoading=void 0,this.sharingDetail=void 0,this.sections=[],this.needsShareLevelUpdateLayers=[],this.needEditableLayers=[],this.displayItems=[],this.previewItemState=null,this.loadingText="loadingInfo",this.errorMessage=null,this.shareableItemCount=0}async componentWillLoad(){this.items=this.items.map((e=>{var t;return Object.assign(Object.assign({},e),{item:null!==(t=e.item.sourceJSON)&&void 0!==t?t:e.item})}));const{el:e}=this,t=await(0,n.g)(e);this.i18n=t[0]}handleNewPreProcessedSharingDetail(){var e;null===(e=this.itemBrowserRef)||void 0===e||e.refresh()}componentDidLoad(){}render(){const{updateSharing:e,isActive:t,api:r,closeDialog:a,i18n:n,isLoading:o,loadingText:l,shareableItemCount:c,errorMessage:d,portal:u,user:h,config:p,analyzeSharingDetail:m,getStatusInfoForLayerState:g,displayItems:v,renderPreviewItemNotice:w}=this,y=c>0,f=!!d,b=n.needShare;return(0,i.h)("calcite-modal",{onCalciteModalClose:a,open:t,outsideCloseDisabled:!0,escapeDisabled:!0},(0,i.h)("div",{slot:"header",class:"header"},n.updateSharing),(0,i.h)("div",{slot:"content",class:"stage"},(0,i.h)("calcite-alert",{icon:!0,open:f,label:d,kind:"danger",onCalciteAlertClose:()=>this.errorMessage=null},(0,i.h)("div",{slot:"message"},d)),(0,i.h)("arcgis-new-item-loader",{active:o,text:n[l]}),(0,i.h)("arcgis-item-browser",{fetch:async()=>{var e;const t=null!==(e=await m())&&void 0!==e?e:[];return{total:t.length,nextStart:0,num:t.length,start:0,results:t.map((({item:e})=>e))}},onArcgisItemBrowserPreview:({detail:e})=>{var t,r;e||(this.previewItemState=null),this.previewItemState=null!==(r=null===(t=v.find((({item:t})=>t.id===e.id)))||void 0===t?void 0:t.state)&&void 0!==r?r:null},hideContentTop:!0,contentPaddedBottom:!0,hidePreviewFooters:!0,portal:u,user:h,config:p,selection:"none",api:r,num:99999,ref:e=>this.itemBrowserRef=e},(0,i.h)("arcgis-item-browser-content",{class:"compact-grid-content",slot:"content"},(0,i.h)("div",{class:"top-bar"},(0,i.h)("div",{class:"top-notice",innerHTML:n[u.isPortal?"noticeEnterprise":"notice"]}),(0,i.h)("div",null,n.canBeShared.replace("${count}",c.toString()).replace("${total}",v.length.toString()))),v.map((({item:e,state:t})=>{const r=g(t),a="info"===(null==r?void 0:r.kind);return(0,i.h)("arcgis-item-browser-card",{key:e.id,item:e,portal:u,user:h,baseUrl:p.baseUrl,preview:"top",showOwner:!0,showDateUpdated:!0,showItemType:!0,showSummary:!0,showBadges:!0},r&&(0,i.h)("div",{slot:"content-top",class:{"status-banner":!0,"status-banner--info":a}},(0,i.h)("calcite-icon",{icon:a?"information":"exclamationMarkTriangle",scale:"s"}),(0,i.h)("span",null,b[r.i18nKey].notice)),(0,i.h)("div",{slot:"actions-end",class:"open-item"},(0,i.h)("calcite-button",{scale:"s",appearance:"transparent",kind:"neutral",onClick:()=>window.open((0,s.m)(e.id,p.baseUrl),"_blank","noopener")},n.goToItem)))}))),w())),(0,i.h)("calcite-button",{slot:"primary",appearance:y?"outline":"solid",kind:"brand","data-id":"cancelButton",onClick:()=>this.isActive=!1,width:"full"},n[y?"cancel":"ok"]),y&&(0,i.h)("calcite-button",{slot:"secondary",appearance:"solid",kind:"brand","data-id":"nextButton",onClick:e,width:"full",disabled:o},n.update))}get el(){return(0,i.d)(this)}static get watchers(){return{preProcessedSharingDetail:["handleNewPreProcessedSharingDetail"]}}};h.style=".stage{height:100%;overflow:hidden;transform:translate(0, 0)}@media screen and (min-width: 1080px){.stage{height:min(700px, 60vh)}}calcite-modal{--calcite-modal-content-padding:0;--calcite-modal-width:1080px}.top-bar{font-weight:500;padding-top:1.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;font-size:0.875rem}@media screen and (min-width: 1080px){.top-bar{padding-left:0;padding-right:0}}.top-notice{padding-bottom:0.75rem;margin-bottom:0.75rem;border-bottom:1px solid var(--calcite-ui-border-1)}.open-item{-webkit-margin-start:0.25rem;margin-inline-start:0.25rem;-webkit-border-start:1px solid var(--calcite-ui-border-1);border-inline-start:1px solid var(--calcite-ui-border-1);-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}.status-banner{display:flex;align-items:center;padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.75rem;border-bottom:1px solid var(--calcite-ui-border-2)}.status-banner>calcite-icon{color:var(--calcite-ui-danger);-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}.status-banner>span{margin-top:2px}.status-banner--info>calcite-icon{color:var(--calcite-ui-info)}.compact-grid-content{--arcgis-item-browser-content-spacing:0.5rem}.preview-notice{margin-bottom:1rem}";const p=(e,t)=>(0,c.r)(`${(0,a.k)(e)}/community/groups`,e,{body:t,usePost:!0}),m=class{constructor(e){(0,i.r)(this,e),this.editGroupClick=(0,i.c)(this,"editGroupClick",7),this.dirtyChange=(0,i.c)(this,"dirtyChange",7),this.analyzeUserGroupComplete=(0,i.c)(this,"analyzeUserGroupComplete",7),this.removeClick=(0,i.c)(this,"removeClick",7),this.revertClick=(0,i.c)(this,"revertClick",7),this.hasGroups=!1,this.user=void 0,this.portal=void 0,this.config=void 0,this.items=void 0,this.shareMode=void 0,this.isLoading=void 0,this.i18n=void 0,this.selectedGroupData=[],this.initialSelectedGroups=[],this.canShareItemToGroup=!1,this.isDirty=!1,this.isSharingMixed=!1}handleSelectedGroupsChange(e){const{user:t,initialSelectedGroups:r,items:i}=this;this.canShareItemToGroup=(0,l.k)(e,t),this.isDirty=(0,l.i)(e,r),this.isSharingMixed=(0,l.l)(i,e),this.dirtyChange.emit(this.isDirty)}async componentDidLoad(){const{user:e,portal:t,items:r,shareMode:i}=this;this.isLoading=!0;const{result:n}=await(async({items:e,portal:t,shareMode:r,user:i})=>{try{const a=await(async({user:e,items:t,portal:r})=>{var i;if((0,s.F)(t,e)&&(0,s.E)({items:t,user:e,portal:r})&&(0,s.G)(e)){const e=t[0];return null!==(i=e.itemOwner)&&void 0!==i?i:await(0,d.f)(e.owner,r)}return e})({user:i,items:e,portal:t}),n=i.username===a.username?[i]:[i,a],o=await(async({user:e,portal:t,shareMode:r,itemOwner:i})=>{const a=await Promise.all([(0,d.f)(e.username,t),"admin"===r&&i.username!==e.username?(0,d.f)(i.username,t):null]);return Object.assign({[e.username]:a[0].groups},!!a[1]&&{[i.username]:a[1].groups})})({portal:t,user:i,shareMode:r,itemOwner:a}),c=(await Promise.all(n.map((a=>(async({user:e,portalUser:t,portal:r,shareMode:i,userGroupLookup:a,items:s})=>{var n;const o={q:(0,l.a)({shareMode:i,currentUsername:t.username,user:e,userGroupLookup:a,isPrivate:"private"===(null===(n=s[0])||void 0===n?void 0:n.access)}),num:100,searchUserAccess:"groupMember",searchUserName:e.username};try{const e=await p(r,o);if(-1===e.nextStart)return{result:e.results};const t=Math.ceil(e.total/100)-1,i=[];for(let e=0;e<t;e++)i.push(new Promise((async t=>{const i=100*(e+1)+1;t((await p(r,Object.assign(Object.assign({},o),{start:i}))).results)})));const a=(await Promise.all(i)).flat();return{result:[...e.results,...a]}}catch(e){return console.error(e),{error:{code:"unhandledError"}}}})({user:a,portalUser:i,portal:t,shareMode:r,userGroupLookup:o,items:e}))))).flatMap((e=>e.result)),u=c.map((({id:e})=>e));return{result:{uniqueGroups:c.filter(((e,t)=>u.indexOf(e.id)===t)),userGroupLookup:o,allUsers:n,searchUsername:i.username===a.username?i.username:a.username}}}catch(e){return console.error(e),{error:{code:"unhandledError"}}}})({user:e,portal:t,items:r,shareMode:i}),{uniqueGroups:o,userGroupLookup:c,searchUsername:h,allUsers:m}=n,{result:g}=await(async(e,t,r)=>{try{const i=await Promise.all((0,u.g)(t,100).map((async t=>(0,a.r)(`${(0,a.g)(r)}/content/itemsgroups`,{items:e.join(","),groups:t.join(",")})))),s={};return i.forEach((e=>{Object.keys(e).forEach((t=>{const r=e[t];s[t]?s[t].items=[...s[t].items,...r.items]:s[t]=r}))})),{result:s}}catch(e){return console.error(e),{error:{code:"unhandledError"}}}})(r.map((e=>e.id)),o.map((e=>e.id)),t),v=o.filter((({id:e})=>!!g[e])).map((e=>({group:e,selectedByItemIds:r.filter((({id:t})=>!!g[e.id].items.find((e=>e.itemId===t)))).map((e=>e.id))})));this.hasGroups=o.length>0,this.canShareItemToGroup=(0,l.k)(v,e),this.initialSelectedGroups=v,this.isLoading=!1,this.analyzeUserGroupComplete.emit({allUsers:m,initialSelectedGroups:v,userGroupLookup:c,searchUsername:h})}render(){const{i18n:e,isLoading:t,canShareItemToGroup:r,removeClick:a,revertClick:s,selectedGroupData:n,hasGroups:o,isDirty:l,isSharingMixed:c}=this;return(0,i.h)(i.H,null,(0,i.h)("arcgis-new-item-description",{header:e.title,headerSideContent:l?(0,i.h)("calcite-button",{appearance:"transparent",iconStart:"reset",disabled:t,onClick:()=>s.emit()},e.revert):n.length>0&&(0,i.h)("calcite-button",{appearance:"transparent",iconStart:"x",disabled:t,onClick:()=>a.emit()},e.remove)}),(0,i.h)("div",{class:"content"},(0,i.h)("div",{class:"group-container"},n.length>0?(0,i.h)("arcgis-group-thumbnail-stack",{groups:n.map((({group:e})=>e))}):(0,i.h)("p",{class:"information-text"},e[o?"noneYet":"noGroup"])),o&&r&&(0,i.h)("calcite-button",{iconStart:"group",appearance:"outline-fill",disabled:t,onClick:()=>this.editGroupClick.emit()},e.edit)),!t&&c&&(0,i.h)("p",{class:"information-text text-padding"},e.mixedGroupSharing))}get el(){return(0,i.d)(this)}static get watchers(){return{selectedGroupData:["handleSelectedGroupsChange"]}}};m.style=".content{display:flex;justify-content:space-between;align-items:center;margin-top:1rem}.information-text{font-size:0.875rem;margin-top:0;margin-bottom:0}.text-padding{margin-top:0.5rem}";const g=class{constructor(e){(0,i.r)(this,e),this.revertClick=(0,i.c)(this,"revertClick",7),this.user=void 0,this.portal=void 0,this.group=void 0,this.groupCount=void 0,this.initialSelectedGroupDataLookup=void 0,this.selectedGroupDataLookup=void 0,this.totalItemCount=void 0,this.i18n=void 0}render(){const{group:e,groupCount:t,totalItemCount:r,initialSelectedGroupDataLookup:a,selectedGroupDataLookup:s,revertClick:n,portal:o,user:l,i18n:c}=this,d=r.toString(),u=e.id,h=t[e.id];let p="none";switch(!0){case h<r:p="indeterminate";break;case h===r:p="all"}const m=a[u],g=(!!m||"none"!==p)&&m!==p;return(0,i.h)("arcgis-group-card",{group:e,portal:o,user:l,name:e.title,selected:!!s[u],indeterminate:"indeterminate"===p,selection:"multiple",preview:"action",view:"compact",showOwner:!0,showDateUpdated:!0,showSummary:!0,key:u},(0,i.h)("span",{slot:"content-end"},h&&h>0&&(0,i.h)("span",{class:"group-item-counter"},c[g?"willShareCountHint":"sharedCountHint"].replace("${numItem}",h.toLocaleString()).replace("${totalItem}",d)),g&&(0,i.h)("calcite-button",{class:"revert-single-group-cta",appearance:"transparent",onClick:e=>{e.stopPropagation(),n.emit()}},c.revert)))}get el(){return(0,i.d)(this)}};g.style=":host{display:contents}"},96729:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>l,c:()=>h,d:()=>d,e:()=>u,f:()=>s,g:()=>c});var i=r(41171),a=r(76134);async function s(e,t){return(0,i.r)(`${(0,i.g)(t)}/community/users/${e}`)}async function n(){return(0,i.r)(`${(0,i.g)()}/community/self`)}async function o(){var e;const t=null===a.c||void 0===a.c?void 0:a.c.user;if(!t)return[];const r=await(0,i.f)((()=>n()),"communitySelf",t.username);return null!==(e=null==r?void 0:r.groups)&&void 0!==e?e:[]}async function l(){const e=null===a.c||void 0===a.c?void 0:a.c.user;return e?(await(0,i.f)((()=>n()),"communitySelf",e.username)).favGroupId:null}async function c(e){var t;const r=null!==(t=null!=e?e:a.c.user)&&void 0!==t?t:a.c.portal.user,{folders:s}=await async function(e){var t,r;const s=null!==(t=null!=e?e:a.c.user)&&void 0!==t?t:a.c.portal.user,n=a.c.portal;null!==(r=s.userContentUrl)&&void 0!==r||(s.userContentUrl=(null==n?void 0:n.restUrl)+"/content/users/"+e.username);const o=await(0,i.r)(s.userContentUrl,{num:1});return Promise.resolve(o)}(r),{username:n}=r;return[{username:n,id:n,title:n,created:"now"},...s]}async function d(e,t){var r;const i=null!==(r=null!=t?t:a.c.user)&&void 0!==r?r:a.c.portal.user;return(await c(i)).find((t=>t.id===e))}function u(e){return{username:e,id:e,title:e,created:"now"}}async function h(e,t){var r;const s=`${(null!==(r=null!=t?t:a.c.user)&&void 0!==r?r:a.c.portal.user).userContentUrl}/createFolder`;return await(0,i.r)(s,{title:e},{},"post")}}}]);