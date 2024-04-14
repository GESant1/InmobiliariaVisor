/*! For license information please see 735.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[735,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},1676:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteAccordion:()=>a,defineCustomElement:()=>s});var c=i(7210),n=i(5545);const o=(0,c.GH)(class extends c.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionChange=(0,c.yM)(this,"calciteInternalAccordionChange",6),this.mutationObserver=(0,n.c)("mutation",(()=>this.updateAccordionItems())),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0}),this.updateAccordionItems()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const e="transparent"===this.appearance;return(0,c.h)("div",{class:{"accordion--transparent":e,accordion:!e}},(0,c.h)("slot",null))}updateActiveItemOnChange(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem}),e.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach((e=>{e.iconPosition=this.iconPosition,e.iconType=this.iconType,e.scale=this.scale})),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return this}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}static get style(){return":host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalAccordionItemSelect","updateActiveItemOnChange"]]]);function r(){"undefined"!=typeof customElements&&["calcite-accordion"].forEach((e=>{"calcite-accordion"===e&&(customElements.get(e)||customElements.define(e,o))}))}r();const a=o,s=r},5545:(e,t,i)=>{"use strict";i.d(t,{c:()=>n});var c=i(7210);function n(e,t,i){if(!c.Z5.isBrowser)return;const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}}}]);