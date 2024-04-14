define(["exports","./index-86304dcd","./index2-600fb1b2","./helpmap-dbc7a68f","./get-4ace6219"],(function(e,i,t,o,r){"use strict";const a={Standard:"standard",GeoAnalytics:"geoanalytics",Raster:"raster",Pipelines:"pipelines",Session:"session"},s={version:"1.0",map:{AggregatePoints:{toolDescription:"120004197",binSize:"120004267",groupByField:"120004270",keepBoundariesWithNoPoints:"120004268",summaryFields:"120004269"},AggregatePoints_bd:{toolDescription:"120001587"},AnalysisEnvironments:{outSR:"120004282",extent:"120004283",snapRaster:"120004284",cellSize:"120004285",mask:"120004286",resamplingMethod:"120004287"},BuildMultiVariableGrid_bd:{toolDescription:"120001589"},CalculateDensity:{toolDescription:"120004211",inputLayer:"120004288",field:"120004289",boundingPolygonLayer:"120004290",radius:"120004291",radiusUnits:"120004292",classificationType:"120004293",numClasses:"120004294",areaUnits:"120004295",outputName:"120004296"},CalculateField_bd:{toolDescription:"120001591"},ChooseBestFacilities:{toolDescription:"120004205",Allocate:"120004258",MinimizeImpedance:"120004259",MaximizeCoverage:"120004260",MaximizeCapacitatedCoverage:"120004261",PercentCoverage:"120004262",alloc_demandLocationsLayer:"120004297",minTrv_demandLocationsLayer:"120004298",maxCov_demandLocationsLayer:"120004299",maxCapCov_demandLocationsLayer:"120004300",pctCov_demandLocationsLayer:"120004301",alloc_requiredFacilitiesLayer:"120004302",minTrv_requiredFacilitiesLayer:"120004303",maxCov_requiredFacilitiesLayer:"120004304",maxCapCov_requiredFacilitiesLayer:"120004305",pctCov_requiredFacilitiesLayer:"120004306",minTrv_candidateFacilitiesLayer:"120004307",maxCov_candidateFacilitiesLayer:"120004308",maxCapCov_candidateFacilitiesLayer:"120004309",pctCov_candidateFacilitiesLayer:"120004310",goal:"120004311"},ConnectOriginsToDestinations:{toolDescription:"120004220",originsLayer:"120004312",destinationsLayer:"120004313",originsLayerRouteIDField:"120004314",destinationsLayerRouteIDField:"120004315",pointBarrierLayer:"120004316",lineBarrierLayer:"120004317",polygonBarrierLayer:"120004318",measurementType:"120004319",timeOfDay:"120004320",routeShape:"120004321",includeRouteLayers:"120004322"},CreateBuffers:{toolDescription:"120004216",distanceType:"120004323",dissolveType:"120004324",sideType:"120004325"},CreateBuffers_bd:{toolDescription:"120001594"},CreateDriveTimeAreas:{toolDescription:"120004217",pointBarrierLayer:"120004326",lineBarrierLayer:"120004327",polygonBarrierLayer:"120004328",travelMode:"120004329",travelDirection:"120004330",timeOfDay:"120004331",overlapPolicy:"120004332"},CopyToDataStore_bd:{toolDescription:"12000193"},CreateViewshed:{toolDescription:"120004202",inputLayer:"120004334",observerHeight:"120004335",observerHeightUnits:"120004336",targetHeight:"120004337",targetHeightUnits:"120004338",maximumDistance:"120004339",maxDistanceUnits:"120004340",outputName:"120004341"},CreateWatersheds:{toolDescription:"120004203",inputLayer:"120004342",searchDistance:"120004343",searchUnits:"120004344",outputName:"120004345"},DissolveBoundaries:{toolDescription:"120004221",multiPartFeatures:"120004346",summaryFields:"120004347"},DissolveBoundaries_bd:{toolDescription:"120001598"},DetectIncidents_bd:{toolDescription:"120001596"},DescribeDataset_bd:{toolDescription:"120001595"},EnrichLayer:{toolDescription:"120004210",bufferType:"120004348"},EnrichFromMultiVariableGrid_bd:{toolDescription:"120001599"},ExtractData:{toolDescription:"120004222",extent:"120004349",dataFormat:"120004350"},FindCentroids:{toolDescription:"120004207",pointLocation:"120004351"},FindDwellLocations_bd:{toolDescription:"120001777"},FindExistingLocations:{toolDescription:"120004206",queryBuilder:"120004352",clipFeatures:"120004353"},FindHotSpots:{toolDescription:"120004212"},FindHotSpots_bd:{toolDescription:"120001600"},FindNearest:{toolDescription:"120004219",analysisLayer:"120004354",pointBarrierLayer:"120004355",lineBarrierLayer:"120004356",polygonBarrierLayer:"120004357",measurementType:"120004358",timeOfDay:"120004359",includeRouteLayers:"120004360"},FindOutliers:{toolDescription:"120004213",permutations:"120004365"},FindPointClusters:{toolDescription:"120004214"},FindPointClusters_bd:{toolDescription:"120001601",method:"120004361",minFeaturesCluster:"120004362",searchDistance:"120004363",sensitivity:"120004364"},FindSimilarLocations:{toolDescription:"120004208"},FindSimilarLocations_bd:{toolDescription:"120001602",criteriaFields:"120004366"},GeocodeLocationsfromTable:{toolDescription:"120004204"},GeocodeLocationsfromTable_bd:{toolDescription:"120001605"},GenerateTessellations:{toolDescription:"120004223",sizeType:"120004367",binResolution:"120004368"},InterpolatePoints:{toolDescription:"120004215",inputLayer:"120004369",field:"120004370",boundingPolygonLayer:"120004371",interpolateOption:"120004372",classificationType:"120004373",numClasses:"120004374",classBreaks:"120004375",outputName:"120004376",outputPredictionError:"120004377",predictAtPointLayer:"120004378"},JoinFeatures:{toolDescription:"120004198",spatialRelationship:"120004379",attributeRelationship:"120004380",joinType:"120004381",recordsToMatch:"120004382"},JoinFeatures_bd:{toolDescription:"120001606"},MergeLayers:{toolDescription:"120004224",mergingAttributes:"120004383"},MergeLayers_bd:{toolDescription:"120001607"},ClipLayer_bd:{toolDescription:"120001592"},GeneralizedLinearRegression_bd:{toolDescription:"120001604"},OverlayLayers:{toolDescription:"120004225",overlayType:"120004384",outputType:"120004385"},OverlayLayers_bd:{toolDescription:"120001608"},PlanRoutes:{toolDescription:"120004218",startLayer:"120004386",returnToStart:"120004387",endLayer:"120004388",startLayerRouteIDField:"120004389",endLayerRouteIDField:"120004390",pointBarrierLayer:"120004391",lineBarrierLayer:"120004392",polygonBarrierLayer:"120004393",travelMode:"120004394",routeStartTime:"120004395",routeCount:"120004396",maxStopsPerRoute:"120004397",stopServiceTime:"120004398",maxRouteTime:"120004399",includeRouteLayers:"120004400"},ReconstructTracks_bd:{toolDescription:"120001609"},SummarizeAttributes_bd:{toolDescription:"120001610"},SummarizeCenterAndDispersion:{toolDescription:"120004199",summarizeType:"120004401"},SummarizeNearby:{toolDescription:"120004200",returnBoundaries:"120004402",nearType:"120004403",summaryFields:"120004404",groupByField:"120004405"},SummarizeWithin:{toolDescription:"120004201",binSize:"120004406",summaryFields:"120004407",groupByField:"120004408"},SummarizeWithin_bd:{toolDescription:"120001611"},TraceDownstream:{toolDescription:"120004209",inputLayer:"120004409",splitDistance:"120004410",splitUnits:"120004411",maxDistance:"120004412",maxDistanceUnits:"120004413",boundingPolygonLayer:"120004414",outputName:"120004415"},AppendData_bd:{toolDescription:"120001588"},ForestBasedClassificationAndRegression_bd:{toolDescription:"120001603"},GeographicallyWeightedRegression_bd:{toolDescription:"120001799"},CalculateMotionStatistics_bd:{toolDescription:"120002630"},TraceProximityEvents_bd:{toolDescription:"120002646"},SummarizeRasterWithin_ra:{toolDescription:"120004228"},ZonalStatisticsAsTable_ra:{toolDescription:"120004229"},CalculateDensity_ra:{toolDescription:"120004246"},InterpolatePoints_ra:{toolDescription:"120004230"},DistanceAccumulation_ra:{toolDescription:"120004231"},DistanceAllocation_ra:{toolDescription:"120004232"},OptimalPathAsLine_ra:{toolDescription:"120004233"},OptimalPathAsRaster_ra:{toolDescription:"120004234"},OptimalRegionConnections_ra:{toolDescription:"120004235"},CreateViewshed_ra:{toolDescription:"120004243"},Watershed_ra:{toolDescription:"120004245"},ConvertFeatureToRaster_ra:{toolDescription:"120004236"},ConvertRasterToFeature_ra:{toolDescription:"120004237"},Sample_ra:{toolDescription:"120004249",acquisitionDefinition:"120004420",resamplingType:"120004421",statisticsType:"120004422"},DeriveContinuousFlow_ra:{toolDescription:"120004238"},Fill_ra:{toolDescription:"120004239"},FlowAccumulation_ra:{toolDescription:"120004240"},FlowDirection_ra:{toolDescription:"120004241"},FlowDistance_ra:{toolDescription:"120004242"},SurfaceParameters_ra:{toolDescription:"120004244"},LocateRegions_ra:{toolDescription:"120004689",inputRaster:"120004671",inExistingRegions:"120004682",totalArea:"120004672",areaUnits:"120004673",numberOfRegions:"120004674",shapeTradeoff:"120004677",evaluationMethod:"120004678",regionShape:"120004675",regionOrientation:"120004676",minimumDistance:"120004679",maximumDistance:"120004680",distanceUnits:"120004681",numberOfNeighbors:"120004683",noIslands:"120004684",regionSeeds:"120004685",regionResolution:"120004686",selectionMethod:"120004687",outputName:"120004688"},Nibble_ra:{toolDescription:"120004691",inputRaster:"120004693",inputMaskRaster:"120004694",inputZoneRaster:"120004695",nibbleValues:"120004696",nibbleNodata:"120004697",outputName:"120004698"},ClassifyObjectsUsingDeepLearning_ra:{toolDescription:"120004250",inputRaster:"120004423",processAllRasterItems:"120004424"},ClassifyPixelsUsingDeepLearning_ra:{toolDescription:"120004251",processAllRasterItems:"120004425"},DetectObjectsUsingDeepLearning_ra:{toolDescription:"120004252",inputRaster:"120004426",processAllRasterItems:"120004427"},AggregateMultidimensionalRaster_ra:{toolDescription:"120004253",aggregationMethod:"120004428",aggregationDefinition:"120004429",intervalKeyword:"120004430"},FindArgumentStatistics_ra:{toolDescription:"120004254",statisticsType:"120004431",intervalKeyword:"120004432"},GenerateMultidimensionalAnomaly_ra:{toolDescription:"120004255",method:"120004433",calculationInterval:"120004434"},GenerateTrendRaster_ra:{toolDescription:"120004256",trendLineType:"120004435",cycleLength:"120004436",frequency:"120004437",RMSE:"120004438",R2:"120004439",slopePValue:"120004440"},PredictUsingTrendRaster_ra:{toolDescription:"120004257",dimensionDefinition:"120004441",intervalUnit:"120004442"},OtherHelpLinks:{toolComparison:"120004276",supportedData:"120004277",rasterFunctionComparison:"120004278",environmentSettings:"120004280",AnalysisHistory:{historyDescription:{docLink:"120004281"},historyDetailDescription:{docLink:"120004281"}},errorMessages:{specialCharactersInServiceNameError:"120004279"}}}},n="OnlineOnly",l=i.proxyCustomElement(class extends i.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisHelpPopoverClose=i.createEvent(this,"analysisHelpPopoverClose",7),this.analysisHelpPopoverSelectionChange=i.createEvent(this,"analysisHelpPopoverSelectionChange",7),this.environmentModifierClass=n,this.referenceElement=void 0,this.helpUrl=void 0,this.helpId=void 0,this.heading=void 0,this.isHelpFileExternalAsset=!1,this.portal=void 0,this.portalHelpMap=void 0,this.placement="auto",this.open=void 0,this.helpFileName=void 0,this.externalHelpMap=void 0,this.helpSrcdoc=void 0,this.learnMoreBaseUrl=void 0,this.learnMoreUrl=void 0,this.analysisEngine=a.Standard,this.offsetDistance=20,this.offsetSkidding=0,this.triggerDisabled=!1}async portalChange(e){void 0!==e&&e.isPortal&&void 0===this.portalHelpMap&&(this.portalHelpMap=await t.getPortalHelpMap(e)),this.environmentModifierClass=!0===(null==e?void 0:e.isPortal)?"PortalOnly":n}async componentWillLoad(){({strings:this.strings,dir:this.dir,locale:this.locale}=await t.fetchComponentLocaleStrings(this.hostElement,i.getAssetPath("."))),void 0!==this.portal&&await this.portalChange(this.portal)}componentDidLoad(){try{setTimeout((()=>requestAnimationFrame((()=>{var e;return null===(e=this.popoverElement)||void 0===e?void 0:e.setFocus()}))),1),setTimeout((()=>{var e,i;null===(i=null===(e=this.popoverElement)||void 0===e?void 0:e.reposition)||void 0===i||i.call(e)}),t.UIDefaults.PopoverTimer)}catch(e){}}async reposition(){var e,i;await(null===(i=null===(e=this.popoverElement)||void 0===e?void 0:e.reposition)||void 0===i?void 0:i.call(e))}getContentStyleClass(e){let i="help-iframe-s";return(-1!==e.indexOf("Category")||-1!==e.indexOf("Tool")||-1!==e.indexOf("toolDescription"))&&(i="help-iframe-m"),i}getLocalizedLearnMoreUrl(){let e;if(void 0!==this.learnMoreBaseUrl){e="/"!==this.learnMoreBaseUrl.charAt(this.learnMoreBaseUrl.length-1)?this.learnMoreBaseUrl+"/":this.learnMoreBaseUrl;const i=this.locale.toLocaleLowerCase();!0===t.SupportedOnlineHelpLocales.includes(i)&&(e=e.replace(/(\/|^)(en)(\/|$)/,`$1${i}$3`))}return e}getLearnMoreUrlForWebAnalysis(){var e,i,a,n;let l;if(void 0!==this.learnMoreBaseUrl){const p=!0===(null===(e=this.portal)||void 0===e?void 0:e.isPortal)?s.map:o.helpMap.map,c=r.get(p,`${this.helpFileName}${t.formatAnalysisEngineSuffix(this.analysisEngine)}.${this.helpId}`);if(void 0!==c&&void 0!==this.learnMoreBaseUrl){const e=this.getLocalizedLearnMoreUrl();if(!0===(null===(i=this.portal)||void 0===i?void 0:i.isPortal)&&void 0!==(null===(a=this.portalHelpMap)||void 0===a?void 0:a.m)){l=`${e}${this.portalHelpMap.m[c]}`;const{restUrl:i}=this.portal;l=t.fixUrlForDemoApp(l,i)}else void 0!==this.portal&&!1!==(null===(n=this.portal)||void 0===n?void 0:n.isPortal)||(l=`${e}analyze/${c}`)}}return l}getLearnMoreForCustomHelpMap(){let e;if(void 0!==this.externalHelpMap&&void 0!==this.helpId&&void 0!==this.helpFileName&&(e=r.get(this.externalHelpMap.map,`${this.helpFileName}.${this.helpId}`),void 0!==e&&void 0!==this.learnMoreBaseUrl)){const i="/"!==this.learnMoreBaseUrl.charAt(this.learnMoreBaseUrl.length-1)?this.learnMoreBaseUrl+"/":this.learnMoreBaseUrl;e=`${!0===this.isHelpFileExternalAsset?i:this.getLocalizedLearnMoreUrl()}${e}`}return e}getLearnMoreUrl(){let e;return void 0!==this.learnMoreBaseUrl?e=void 0!==this.externalHelpMap?this.getLearnMoreForCustomHelpMap():this.getLearnMoreUrlForWebAnalysis():void 0!==this.learnMoreUrl&&(e=this.learnMoreUrl),e}renderIframeUsingSrcDoc(){var e;return i.h("iframe",{class:this.getContentStyleClass(this.helpId),id:this.helpId,title:null!==(e=this.heading)&&void 0!==e?e:this.helpId,srcdoc:this.helpSrcdoc})}renderIframeUsingHelpUrl(){var e;const t=`${!1===this.isHelpFileExternalAsset?i.getAssetPath(this.helpUrl):this.helpUrl}#${this.helpId}-${this.environmentModifierClass}`;return i.h("iframe",{class:this.getContentStyleClass(this.helpId),id:this.helpId,title:null!==(e=this.heading)&&void 0!==e?e:this.helpId,src:t})}render(){var e,t,o,r;const a=void 0!==this.helpSrcdoc?this.renderIframeUsingSrcDoc():this.renderIframeUsingHelpUrl(),s=this.getLearnMoreUrl();return i.h(i.Host,{class:"analysis-popover js-app-flyout",dir:this.dir},i.h("calcite-popover",{overlayPositioning:"fixed",autoClose:!0,ref:e=>this.popoverElement=e,referenceElement:null!==(e=this.referenceElement)&&void 0!==e?e:"analysis-tool",placement:this.placement,open:this.open,closable:!0,heading:null!==(t=this.heading)&&void 0!==t?t:this.helpId,headingLevel:4,triggerDisabled:this.triggerDisabled,focusTrapDisabled:!0,label:null!==(r=null!==(o=this.heading)&&void 0!==o?o:this.helpId)&&void 0!==r?r:"",offsetDistance:this.offsetDistance,offsetSkidding:this.offsetSkidding,onCalcitePopoverClose:()=>this.analysisHelpPopoverClose.emit()},a,void 0!==s&&i.h("calcite-link",{rel:"help",target:"_blank",href:s,class:"learn-more"},this.strings.learnMoreLabel)))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{portal:["portalChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;background-color:var(--calcite-ui-foreground-1)}.help-iframe-s{padding:var(--analysis-quarter-spacing);height:var(--help-popover-content-height-s, 120);border:0px}.help-iframe-m{padding:var(--analysis-quarter-spacing);height:var(--help-popover-content-height-m, 140);border:0px}.learn-more{margin:var(--analysis-full-spacing)}"}},[1,"analysis-help-popover",{referenceElement:[16],helpUrl:[513,"help-url"],helpId:[513,"help-id"],heading:[513],isHelpFileExternalAsset:[516,"is-help-file-external-asset"],portal:[16],portalHelpMap:[16],placement:[513],open:[1540],helpFileName:[513,"help-file-name"],externalHelpMap:[16],helpSrcdoc:[513,"help-srcdoc"],learnMoreBaseUrl:[513,"learn-more-base-url"],learnMoreUrl:[513,"learn-more-url"],analysisEngine:[513,"analysis-engine"],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],triggerDisabled:[516,"trigger-disabled"],reposition:[64]}]);function p(){"undefined"!=typeof customElements&&["analysis-help-popover"].forEach((e=>{"analysis-help-popover"===e&&(customElements.get(e)||customElements.define(e,l))}))}p(),e.AnalysisEngine=a,e.AnalysisHelpPopover=l,e.defineCustomElement=p}));