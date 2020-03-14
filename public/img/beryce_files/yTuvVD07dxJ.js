if (self.CavalryLogger) { CavalryLogger.start_js(["nH0td"]); }

__d("DirectDebitCredentialStatus",[],(function(a,b,c,d,e,f){e.exports={INITED:73,PENDING:80,VERIFIED:86,CANCELED:67}}),null);
__d("MessengerPlatformInterfaceType",[],(function(a,b,c,d,e,f){e.exports={UNKNOWN_INTERFACE:0,MESSENGER_INTERFACE:1,FB_INTERFACE:2,FB_POST_INTERFACE:3,FB_MESSAGING_INTERFACE:4}}),null);
__d("AppUserRoleConstants.brands",[],(function(a,b,c,d,e,f){a=Object.freeze({ADMIN:"ADMIN",MANAGER:"MANAGER",EMPLOYEE:"EMPLOYEE",NO_PERMISSION:"NO_PERMISSION"});e.exports=a}),null);
__d("BusinessActorUtils.brands",["UnicodeCJK"],(function(a,b,c,d,e,f){"use strict";a={getInitials:function(a,c){a===void 0&&(a="");c===void 0&&(c="");a=a.trim().charAt(0);c=c.trim().charAt(0);a=a+c;return b("UnicodeCJK").hasIdeograph(a)?c:a.toUpperCase()}};e.exports=a}),null);
__d("ConstituentBadgeEventEmitter",["EventEmitter"],(function(a,b,c,d,e,f){e.exports=new(b("EventEmitter"))()}),null);
__d("UFIInstanceAction",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={changeOrderingMode:function(a,b){return{type:"story_change_order_mode",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,mode:b}},toggleComments:function(a){return{type:"story_toggle_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},changeCommentListVisibility:function(a,b){return{type:"story_change_visibility",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,visibility:b}},init:function(a,b){return{type:"instance_init",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,payload:b}},didRequestVODComments:function(a){return{type:"requested_vod_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},didReceiveVODComments:function(a){return{type:"received_vod_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},remove:function(a){return{type:"story_remove",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleAutoTranslateCommments:function(a){return{type:"toggle_auto_translate_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleCommercialBreak:function(a,b){return{type:"story_toggle_commercial_break",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,inCommercial:b}},translateAll:function(a){return{type:"translate_all",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},foundVideoPlayerController:function(a,b){return{ftentidentifier:a.ftentidentifier,instanceID:a.instanceid,videoPlayerController:b,type:"found_video_player_controller"}}};e.exports=a}),null);
__d("Facepile.react",["cx","fbt","ix","HovercardLink","Image.react","Link.react","List.react","React","intlSummarizeNumber","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j={small:24,medium:32,large:50};c=b("React").createClass({displayName:"Facepile",defaultProps:{moreColor:"blue",moreCount:0,showHovercard:!1,tooltipPosition:"above",showToolTip:!0,spacing:"none"},propTypes:{className:a.string,moreColor:a.oneOf(["blue","gray"]),moreCount:a.number,moreDialogLink:a.string,morePageLink:a.string,numFaces:a.number,onFaceClick:a.func,onComponentDidMount:a.func,profiles:a.arrayOf(a.shape({URL:a.any,name:a.node.isRequired,uniqueID:a.any.isRequired,profilePicURI:a.any.isRequired})).isRequired,showHovercard:a.bool,size:a.oneOf([28,"small","medium","large"]).isRequired,spacing:a.oneOf(["none","small","medium","large"]),showToolTip:a.bool,tooltipPosition:a.oneOf(["above","below","left","right"])},_onFaceClick:function(a,b){this.props.onFaceClick&&this.props.onFaceClick(a,b)},componentDidMount:function(){this.props.onComponentDidMount&&this.props.onComponentDidMount()},getPicSize:function(){return j[this.props.size]||this.props.size},renderFace:function(a,c){var d=this.getPicSize(),e=b("HovercardLink").constructEndpoint({id:a.uniqueID}).toString();return b("React").jsx("li",{className:"_43q7",onClick:this._onFaceClick.bind(this,a,c),children:b("React").jsx(b("Link.react"),{"aria-label":a.name,className:"_2rt_ link","data-hover":this.props.showHovercard?null:"tooltip","data-hovercard":this.props.showHovercard?e:null,"data-ignoreclass":"_2rt_","data-tooltip-alignh":"left","data-tooltip-content":a.name,"data-tooltip-position":this.props.tooltipPosition,href:a.URL,children:b("React").jsx(b("Image.react"),{src:a.profilePicURI,width:d,height:d,className:"img"})})},a.uniqueID)},renderMore:function(){if(!this.props.moreCount)return null;var a=this.props.numFaces!=null&&this.props.numFaces<=this.props.profiles.length?this.props.moreCount+1:this.props.moreCount,c=b("intlSummarizeNumber")(a,0),d=c.length,e;a===0||this.props.size==="small"&&d>2||this.props.size===28&&d>2||this.props.size==="medium"&&d>3||this.props.size==="large"&&d>6?e=b("React").jsx(b("Image.react"),{src:i("97502")}):e="+"+c;var f;(this.props.showToolTip===void 0||this.props.showToolTip===!0)&&(a===1?f=h._("1 other person"):f=h._("{num} other people",[h._param("num",a)]));c=b("joinClasses")("_43q8 _43q7"+(d<2?" _43qa":"")+(d===2?" _43qb":"")+(d===3?" _43qd":"")+(d>3?" _43qe":"")+(this.props.moreColor==="blue"?" _49c8":"")+(this.props.moreColor==="gray"?" _49cb":""));return b("React").jsx("li",{className:c,children:b("React").jsx("a",{"data-hover":f?"tooltip":null,"data-tooltip-position":f?"right":null,"data-tooltip-content":f,ajaxify:this.props.moreDialogLink||this.props.morePageLink,href:this.props.morePageLink,role:"button",rel:this.props.moreDialogLink?"dialog":null,children:e})})},render:function(){var a=this.props.spacing||this.defaultProps.spacing;a=b("joinClasses")(this.props.className,"_43qm"+(this.props.size==28?" _3cxu":"")+(this.props.size=="small"?" _43q9":"")+(this.props.size=="medium"?" _43qc":"")+(this.props.size=="large"?" _43qf":"")+(a!=this.defaultProps.spacing?" _4nab":""));var c=this.props.numFaces==void 0?this.props.profiles:this.props.profiles.slice(0,this.props.moreCount?this.props.numFaces-1:this.props.numFaces);return b("React").jsx("div",{className:a,style:this.props.style,children:b("React").jsxs(b("List.react"),{className:"_4cg3",direction:"horizontal",spacing:this.props.spacing||"none",border:"none",children:[c.map(this.renderFace),this.renderMore()]})})}});e.exports=c}),null);
__d("UFIBusinessActorIcon.react",["cx","AppUserRoleConstants.brands","BusinessActorUtils.brands","React","getObjectValues","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("BusinessActorUtils.brands").getInitials(this.props.firstName,this.props.lastName),c=this.props.businessRole===b("AppUserRoleConstants.brands").ADMIN;return b("React").jsx("div",{className:b("joinClasses")(this.props.classNames,"_1rpl"),children:b("React").jsx("div",{align:"center",className:b("joinClasses")(this.props.textClassNames,c?"_1rpm":null),children:a})})};return c}(b("React").Component);c.propTypes={firstName:a.string.isRequired,lastName:a.string.isRequired,classNames:a.string,textClassNames:a.string,businessRole:a.oneOf(b("getObjectValues")(b("AppUserRoleConstants.brands")))};e.exports=c}),null);
__d("UFIActorIconContainer.react",["cx","ClickableArea.react","Image.react","JSResource","React","ShortProfiles","UFIBusinessActorIcon.react","XUISpinner.react","joinClasses","lazyLoadComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("lazyLoadComponent")(b("JSResource")("UFIActorSelector.react").__setRef("UFIActorIconContainer.react")),i=b("React").jsx(b("XUISpinner.react"),{size:"large"});a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={actor:null,showActorSelectorDialog:!1},c.$2=function(){c.setState(function(a){return{showActorSelectorDialog:!a.showActorSelectorDialog}})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1(this.props.actorID)};d.componentDidUpdate=function(a){this.props.actorID!==a.actorID&&this.$1(this.props.actorID)};d.$1=function(a){var c=this;b("ShortProfiles").get(a,function(a){return c.setState({actor:a})})};d.render=function(){__p&&__p();var a=this.state.actor;if(!a)return this.props.tinyIcon?b("React").jsx(b("XUISpinner.react"),{size:"small"}):i;var c;this.props.tinyIcon?c=b("joinClasses")("img UFIActorImage _3tm9",this.props.className):this.props.smallIcon?c=b("joinClasses")("img UFIActorImage _3qxe",this.props.className):c=b("joinClasses")("img UFIActorImage _54ru",this.props.className);var d=this.props.actorSelectorConfig!=null&&this.props.isLivingRoom&&this.props.overlayActorSelectorOnUFIPhoto===!0;d&&(c=b("joinClasses")("UFIActorImageWithSelector",c));d=a.isBusinessPersona?b("React").jsx(b("UFIBusinessActorIcon.react"),{classNames:c,firstName:a.firstName,lastName:a.lastName,textClassNames:"UFIBusinessActorIconText"}):b("React").jsx(b("Image.react"),{alt:a.name,className:c,src:a.thumbSrc});if(this.props.actorSelectorConfig!=null&&this.props.isLivingRoom&&this.props.overlayActorSelectorOnUFIPhoto===!0){return(c=b("React")).jsxs("div",{className:"UFIActorImageContainer",children:[c.jsx(b("ClickableArea.react"),{onClick:this.$2,children:c.jsx("div",{className:"UFIActorSelectorOverlay"})}),c.jsx(c.Suspense,{fallback:c.jsx("div",{}),children:c.jsx(h,babelHelpers["extends"]({},this.props.actorSelectorConfig.props,{dialogShown:this.state.showActorSelectorDialog,useUFIPhotoOverlay:!0,onActorChange:this.props.onActorChange}))}),d]})}return d};return c}(b("React").Component);e.exports=a}),null);
__d("HovercardLinkInterpolator",["cx","fbt","Badge.react","CommentMentionsGatingConfig","HovercardLink","Link.react","React","UFIActorIconContainer.react","URI","isFacebookURI","isRTL"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;function a(a,c,d,e,f,g){__p&&__p();g===void 0&&(g=null);c=c.entity;d=d||(c.external?"_blank":null);var j=(c.external?"":"profileLink")+(c.weakreference?" weakReference":""),k=c.hashtag?a.substring(1):a;k=b("isRTL")(k)?"rtl":"ltr";var l=new(i||(i=b("URI")))(c.url);b("isFacebookURI")(l)&&l.addQueryData({hc_location:f});var m=c.shimhash?c.shimhash:null,n=!c.external&&!c.hashtag&&!c.photo&&!c.note&&!c.statusupdate&&!c.video;n=n?{"data-hovercard":b("HovercardLink").constructEndpointWithGroupLocationAndExtraParams(c,e,c.hovercardlocation?c.hovercardlocation:f,null,g).toString()}:{};if(c.hashtag)e=b("React").jsxs("a",babelHelpers["extends"]({},n,{className:"_58cn",dir:k,href:l.toString(),target:d,children:[b("React").jsx("span",{"aria-label":h._("hashtag"),className:"_58cl",children:a.substring(0,1)}),b("React").jsx("span",{className:"_58cm",children:a.substring(1)})]}));else if(c.type==="user"&&b("CommentMentionsGatingConfig").enabled_rich_comment_mentions){e=(f=b("React")).jsx("div",{className:"_35mm",children:f.jsx(b("Link.react"),babelHelpers["extends"]({},n,{className:j,dir:k,href:{url:l.toString(),shimhash:m},target:d,children:f.jsxs("span",{className:"_35mo",children:[f.jsx("span",{className:"_35mp",children:f.jsx(b("UFIActorIconContainer.react"),{actorID:c.id.toString(),tinyIcon:!0})}),f.jsx("span",{className:"_35mq",children:a})]})}))})}else{g=[];c.weakreference&&g.push(b("React").jsx("i",{className:"UFIWeakReferenceIcon"},"weakreference"));g.push(a);c.workForeignEntity&&g.push(b("React").jsx(b("Badge.react"),{type:"work_non_coworker"},"noncoworker"));c.dialogurl?e=b("React").jsx(b("Link.react"),babelHelpers["extends"]({},n,{className:j,dir:k,ajaxify:c.dialogurl,rel:"dialog",href:{url:l.toString(),shimhash:m},target:d,children:g})):e=b("React").jsx(b("Link.react"),babelHelpers["extends"]({},n,{className:j,dir:k,href:{url:l.toString(),shimhash:m},target:d,children:g}))}return e}e.exports=a}),null);
__d("MessengerSMBExperimentDebugTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerSMBExperimentDebugLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerSMBExperimentDebugLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerSMBExperimentDebugLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExceptionMessage=function(a){this.$1.exception_message=a;return this};c.setExceptionObject=function(a){this.$1.exception_object=a;return this};c.setExceptionStacktrace=function(a){this.$1.exception_stacktrace=a;return this};c.setExceptionType=function(a){this.$1.exception_type=a;return this};c.setExperiment=function(a){this.$1.experiment=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setPostID=function(a){this.$1.post_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,exception_message:!0,exception_object:!0,exception_stacktrace:!0,exception_type:!0,experiment:!0,page_id:!0,post_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ClipboardPhotoUploader",["ArbiterMixin","AsyncRequest","mixin"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c){var d;d=a.call(this)||this;d.uploadURIString=b;d.data=c;return d}var d=c.prototype;d.handlePaste=function(a){__p&&__p();a=c.getImages(a);for(var d=0;d<a.length;++d){var e=new FormData();e.append("pasted_file",a[d]);var f=new(b("AsyncRequest"))();f.setURI(this.uploadURIString).setData(this.data).setRawData(e).setHandler(function(a){this.inform("upload_success",a)}.bind(this)).setErrorHandler(function(a){this.inform("upload_error",a)}.bind(this)).setAbortHandler(function(a){this.inform("upload_error",a)}.bind(this));this.inform("upload_start");f.send();break}};c.getImages=function(a){__p&&__p();if(!a.clipboardData)return[];a=a.clipboardData.items;if(!a)return[];var b,c=[];for(var d=0;d<a.length;++d){b=a[d];if(b.kind==="string")return[];b.kind==="file"&&b.type.indexOf("image/")!==-1&&c.push(b.getAsFile());b.kind==="blob"&&c.push(b.blob)}return c};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("LivingRoomProfileTileBadge.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.isCommentating||a.isSpeaking,d=a.isSpeaking?b("React").jsx("div",{className:"_6mm6",children:b("React").jsx("span",{className:"_6mlm"})}):null,e=a.asset===null,f=e||a.size==="small"?null:b("React").jsx(b("Image.react"),{className:(a.size==="regular"?"_6y-q":"")+(a.size==="large"?" _6y-r":"")+(a.size==="extra large"?" _7a6j":""),src:a.asset}),g="_6z5p"+(c?" _6y-l":"")+(c?"":" _6y-m")+(a.size==="small"?" _6y-n":"")+(a.size==="regular"?" _6y-o":"")+(a.size==="large"?" _6y-p":"")+(a.size==="extra large"?" _7a6k":"");g=b("React").jsx("div",{className:g,children:f});return b("React").jsxs(b("React").Fragment,{children:[a.size!=="small"?b("React").jsx("div",{className:"_6y-s"+(c?" _6y-t":"")+(c?"":" _6y-u")+(a.useBackgroundColor?" _7a6y":"")}):null,e?null:g,d]})}e.exports=a}),null);
__d("XConstituentBadgeV2OptInDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/constituent_badge/v2_opt_in_dialog/",{ft_id:{type:"String"},should_refresh:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);