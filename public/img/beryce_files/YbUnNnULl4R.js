if (self.CavalryLogger) { CavalryLogger.start_js(["A0uIY"]); }

__d("AdsFBIconDownsized.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["className"]);return b("React").jsx("span",{className:b("joinClasses")(c,"_kcu"),children:b("React").jsx(b("Image.react"),babelHelpers["extends"]({className:"_kcw"},a))})};return c}(b("React").Component);a.defaultProps={alt:""};e.exports=a}),null);
__d("CometInteractionSourceContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(10);e.exports=a}),null);
__d("CometVPVDUserActivityMonitor",["UFI2UserActivityMonitor"],(function(a,b,c,d,e,f){"use strict";a={isUserActive:function(){return b("UFI2UserActivityMonitor").getActivityState()==="ACTIVE"},subscribe:function(a){var c=b("UFI2UserActivityMonitor").subscribe(function(b){b=b==="ACTIVE";a&&a(b)});return function(){c&&c.remove()}}};e.exports=a}),null);
__d("useVPVDImpression",["requireCond","CometVPVDUserActivityMonitor","React","isIntersectionObserverEntryVPVDVisible","useVisibilityObserver","cr:921407"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=250,i=200;a=function(a){__p&&__p();var c=a.isLite,d=a.minVisiblePx;d=d===void 0?i:d;var e=a.minVisibleTimeMs,f=e===void 0?h:e,j=a.onVPVDEnd;e=a.onVPVDStart;a=b("cr:921407")();var k=a[0];a=a[1];var l=g(function(a){if(a.visibleDuration<f)return;j(a)},[f,j]),m=c===!0?1:d;d=g(function(a){return b("isIntersectionObserverEntryVPVDVisible")(a,m)},[m]);c=c===!0?null:{thresholdOverride:"EXPENSIVE"};d=babelHelpers["extends"]({activityMonitorOverride:b("CometVPVDUserActivityMonitor"),hiddenWhenCSSStyleHidden:!0,hiddenWhenZeroArea:!0,isEntryInViewport:d},c);c=b("useVisibilityObserver")({onHidden:l,onVisibilityDurationUpdated:a,onVisible:e,options:d});return[c,k]};e.exports=a}),null);
__d("useNoopDebuggingInfoComponent",[],(function(a,b,c,d,e,f){"use strict";var g=function(){};a=function(){return[null,g]};e.exports=a}),null);
__d("FDSCloseButton.react",["fbt","React","SUICloseButton.react","SUICloseButtonUniform.fds","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("makeSUIFDSPrivateTheme")("FDSCloseButton",{SUICloseButton:b("SUICloseButtonUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;return b("React").jsx(b("SUICloseButton.react"),{"data-hover":a.tooltipContent!==null&&a.tooltipContent!==void 0?"tooltip":null,"data-testid":a["data-testid"],"data-tooltip-alignH":a.tooltipAlignH,"data-tooltip-content":a.tooltipContent,"data-tooltip-position":a.tooltipPosition,disabled:a.isDisabled,id:a.id,label:a.label,layerCancel:a.layerCancel,margin:a.margin,onClick:a.onClick,onFocus:a.onFocus,onMouseDown:a.onMouseDown,onMouseUp:a.onMouseUp,shade:a.shade,size:a.size,theme:h})};return c}(b("React").PureComponent);a.defaultProps={isDisabled:!1,label:g._("Close"),shade:"dark",size:"small"};e.exports=b("makeFDSStandardComponent")("FDSCloseButton",a)}),null);
__d("FDSPrivateInputIconSelectors",["ix","asset"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={error:g("489535"),warning:g("480790"),validated:g("506111")},i={error:g("871824"),warning:g("480790"),validated:g("815791")};function a(a){switch(a){case"error":return i.error;case"warning":return i.warning;case"validated":return i.validated;default:return null}}function b(a){switch(a){case"error":return h.error;case"warning":return h.warning;case"validated":return h.validated;default:return null}}e.exports={classicSelector:b,geoSelector:a}}),null);
__d("SUIThreeStateCheckboxEnum",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({CHECKED:null,PARTIAL:null,UNCHECKED:null});e.exports=a}),null);
__d("FDSThreeStateCheckboxEnum",["SUIThreeStateCheckboxEnum"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SUIThreeStateCheckboxEnum")}),null);
__d("FDSFormUtils",["FDSPrivateInputIconSelectors","FDSThreeStateCheckboxEnum"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FDSPrivateInputIconSelectors").classicSelector,h=b("FDSPrivateInputIconSelectors").geoSelector;function a(a,b,c){if(b)return b;b=c===!0?h:g;return b(a)}function c(a){switch(a){case b("FDSThreeStateCheckboxEnum").CHECKED:return!0;case b("FDSThreeStateCheckboxEnum").PARTIAL:return"indeterminate";default:return!1}}e.exports={getIconSrc:a,mapCheckboxState:c}}),null);
__d("FDSMultiElementLayoutContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({getLayout:function(){}});e.exports=a}),null);
__d("FDSPrivateDisabledContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(void 0)}),null);
__d("FDSPrivateInputSelectors",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=a.size==="large"?a.atoms.inputPrimitive.size.large:a.atoms.inputPrimitive.size.medium;return babelHelpers["extends"]({height:b},g(a))}function b(a){return g(a)}function g(a){__p&&__p();var b=a.isFocused,c=a.isDisabled,d=a.hasError,e=a.hasWarning,f=a.isValid,g=a.isEdited;a=a.atoms;var h=a.inputs["default"].boxShadow,i=a.inputs["default"].border,j=a.colors.layers.background,k=a.colors.text.primary;b&&(h=a.inputs.focused.boxShadow,i=a.inputs.focused.border);d&&(h=b?a.inputs.focused.error.boxShadow:void 0,i=a.inputs.error.border);e&&(h=b?a.inputs.focused.warning.boxShadow:void 0,i=a.inputs.warning.border);f===!0&&(h=b?a.inputs.focused.valid.boxShadow:void 0,i=a.inputs.valid.border);c&&(i=a.inputs.disabled.border,j=a.inputs.disabled.backgroundColor,k=a.colors.text.secondary);g&&(j=a.inputs.edited.backgroundColor);return{backgroundColor:j,border:i,borderRadius:a.inputs.borderRadius,boxShadow:h,color:k,fontFamily:a.type.fontFamily}}e.exports={getInputStyle:a,getTextAreaStyle:b}}),null);
__d("FDSPrivateSizeContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(null)}),null);
__d("FDSBaseTextInput.react",["cx","AbstractTextInput.react","FDSCloseButton.react","FDSFormUtils","FDSMultiElementLayoutContext","FDSPrivateDisabledContext","FDSPrivateInputSelectors","FDSPrivateSizeContext","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","Image.react","React","emptyFunction","isStringNullOrEmpty","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FDSPrivateInputSelectors").getInputStyle;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isFocused:!1},d.$1=b("React").createRef(),d.$2=function(a){a=a.target.value;d.props.onChange(a)},d.$3=function(a){if(d.props.onEnter){var b=a.target.value;d.props.onEnter(b,a)}},d.$4=function(a){d.setState({isFocused:!1}),d.props.onBlur&&d.props.onBlur(a)},d.$5=function(a){d.setState({isFocused:!0}),d.props.onFocus&&d.props.onFocus(a)},d.$6=function(){d.props.onClear&&d.props.onClear(),d.focus()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$7=function(a,c){return!b("isStringNullOrEmpty")(a)&&c!=null?b("React").jsx(b("FDSCloseButton.react"),{onClick:this.$6,size:"large"}):null};d.$8=function(a,c,d){if(c)return c;c=b("FDSFormUtils").getIconSrc(a,null,d);return c!=null?b("React").jsx(b("Image.react"),{src:c}):null};d.focus=function(){this.$1.current&&this.$1.current.focusInput()};d.blur=function(){this.$1.current&&this.$1.current.blurInput()};d.select=function(){this.$1.current&&this.$1.current.selectInput()};d.render=function(){__p&&__p();var a=this,c=this.props,d=c.autoComplete,e=c.busyIndicator,f=c.describedBy,g=c.errorMessageId,i=c.hasError,j=c.hasWarning,k=c.htmlForTargetId,l=c.icon,m=c.isEdited,n=c.isValid,o=c.labelledBy,p=c.maxLength,q=c.name,r=c.onClear,s=c.onKeyDown,t=c.onKeyUp,u=c.onPaste,v=c.placeholder,w=c.rightContent,x=c.type,y=c.value,z;i?z="error":j?z="warning":n===!0&&(z="validated");var A=this.state.isFocused||this.props.isHighlighted===!0;return b("React").jsx(b("FDSMultiElementLayoutContext").Consumer,{children:function(c){var B=c.getLayout;return b("React").jsx(b("FDSPrivateSizeContext").Consumer,{children:function(c){return b("React").jsx(b("FDSPrivateDisabledContext").Consumer,{children:function(C){return b("React").jsx(b("FDSPrivateThemeContext.react").Consumer,{children:function(D){var E=C!=null?C:a.props.isDisabled,F=c!=null?c:a.props.size,G=b("FDSPrivateThemeUtils").isGeo(D),H=B!=null?B(A):void 0;F=h({isFocused:A,isDisabled:E,size:F,hasError:i,hasWarning:j,isValid:n,isEdited:m,atoms:D});return b("React").jsxs("span",{className:"_2gn0"+(G?" _8o2t":""),style:babelHelpers["extends"]({},F,H,{"--background-color":F.backgroundColor}),children:[b("React").jsx(b("AbstractTextInput.react"),{"aria-busy":e!=null?!0:void 0,"aria-describedby":f,"aria-errormessage":g,"aria-invalid":g?"true":"false","aria-labelledby":o,autoComplete:d==="off"?"disable_autocomplete":d,className:"_2gnb"+(!E&&r?" _7_n4":""),"data-testid":a.props["data-testid"],disabled:E,id:k,maxLength:p,name:q,onBlur:a.$4,onChange:a.$2,onClick:a.props.onClick,onEnter:a.$3,onFocus:a.$5,onKeyDown:s,onKeyUp:t,onPaste:u,placeholder:v,ref:a.$1,type:x,useLabel:!1,value:y}),w,e,!E&&a.$7(y,r),a.$8(z,l,G)]})}})}})}})}})};return c}(b("React").PureComponent);a.defaultProps={hasError:!1,hasWarning:!1,isDisabled:!1,isEdited:!1,isValid:null,onChange:b("emptyFunction"),size:"large",type:"text"};e.exports=b("makeFDSStandardComponent")("FDSBaseTextInput",a)}),null);
__d("SUISimplePopover.react",["cx","AlignmentEnum","KeyboardFocus.react","PositionEnum","React","SUIComponent","SUIPopover.react","SUITheme","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=["block","inline"];d={display:"inline",showIcon:!0,showIconHoverState:!0};f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isShown:!1},c.$SUISimplePopover2=function(a){c.$SUISimplePopover1=a},c.$SUISimplePopover3=function(){return c.$SUISimplePopover1},c.$SUISimplePopover4=function(a){c.setState({isShown:a},c.$SUISimplePopover5)},c.$SUISimplePopover5=function(){c.props.onToggle&&c.props.onToggle(c.state.isShown)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c["data-testid"],e=c["data-testid-popover"],f=c.children,g=c.display,h=c.showIcon,i=c.showIconHoverState,j=babelHelpers.objectWithoutPropertiesLoose(c,["data-testid","data-testid-popover","children","display","showIcon","showIconHoverState"]);c=b("SUITheme").get(this).SUIPopover;var k=h?b("React").cloneElement(c.icon,{"data-testid":"SUISimplePopover/icon",className:"_h6r _3-8r",hover:i&&this.state.isShown}):null,l=b("uniqueID")();return b("React").jsx(b("KeyboardFocus.react"),{children:function(c){var h=c.isKeyboardFocused,i=c.onBlur;c=c.onFocus;return b("React").jsxs(b("React").Fragment,{children:[b("React").jsxs("div",{"aria-describedby":l,"aria-haspopup":!0,className:"_4rhp"+(g==="block"?" _4rhq":""),"data-testid":d,onBlur:i,onFocus:c,ref:a.$SUISimplePopover2,role:"tooltip",tabIndex:0,children:[f,k]}),b("React").jsx(b("SUIPopover.react"),babelHelpers["extends"]({"data-testid":e},j,{hoverContextRef:a.$SUISimplePopover3,id:l,isShown:h,onToggle:a.$SUISimplePopover4}))]})}})};return c}(b("SUIComponent"));f.propTypes={alignment:b("AlignmentEnum").propType,children:a.node,content:a.node.isRequired,contentWidthUseSparingly:a.number,delay:a.number,display:a.oneOf(c),footer:a.node,helpLink:a.node,linger:a.number,offsetX:a.number,offsetY:a.number,position:b("PositionEnum").propType,theme:a.instanceOf(b("SUITheme")),title:a.node,showIcon:a.bool,showIconHoverState:a.bool};f.defaultProps=d;e.exports=f}),null);
__d("FDSSimplePopover.react",["FDSPrivateThemeContext.react","React","SUISimplePopover.react","getSUIPopoverUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PureComponent;var g=b("makeSUIThemeGetter")({SUIPopover:b("getSUIPopoverUniform.fds")});c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g(this.context);return b("React").jsx(b("SUISimplePopover.react"),{alignment:this.props.alignment,children:this.props.children,content:this.props.content,contentWidthUseSparingly:this.props.contentWidthUseSparingly,delay:this.props.delay,display:this.props.display,footer:this.props.footer,helpLink:this.props.helpLink,linger:this.props.linger,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onToggle:this.props.onToggle,position:this.props.position,preserveThemeFromContext:!0,showIcon:this.props.showIcon,theme:a,title:this.props.title})};return c}(a);c.defaultProps=b("SUISimplePopover.react").defaultProps;c.contextType=b("FDSPrivateThemeContext.react");e.exports=b("makeFDSStandardComponent")("FDSSimplePopover",c)}),null);
__d("FDSPrivateFormLabel.react",["cx","fbt","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","FDSSimplePopover.react","FDSText.react","FlexLayout.react","React","cxMargin","makeFDSStandardComponent","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("React").useContext,j="\u2219";function a(a){__p&&__p();var c=a.hasRequirementLabel;c=c===void 0?!1:c;var d=a.isRequired;d=d===void 0?!1:d;var e=a.isTooltipVisible;e=e===void 0?!0:e;var f=a.labelIsHidden;f=f===void 0?!1:f;var g=a.description,h=a.descriptionId,j=a.inputId,m=a.popover,n=a.title;a=a.tooltipText;var o=i(b("FDSPrivateThemeContext.react"));o=b("FDSPrivateThemeUtils").isGeo(o);var p=o&&g!=null;c=b("React").jsx(k,{hasRequirementLabel:c,inputId:j,isGeo:o,isRequired:d,labelIsHidden:f,title:n});return f&&!p?c:b("React").jsxs("div",{className:n!=null&&!f||p?"_3-94":"",children:[b("React").jsxs(b("FlexLayout.react"),{align:"center",children:[c,b("React").jsx(l,{isTooltipVisible:e,popover:m,tooltipText:a})]}),p?b("React").jsx(b("FDSText.react"),{color:"secondary",display:"block",id:h,size:"small",weight:"normal",children:g}):null]})}function k(a){var c=a.hasRequirementLabel,d=a.isGeo,e=a.isRequired,f=a.title;e=e?h._("Required"):h._("Optional");return b("React").jsxs("span",{className:a.labelIsHidden?"accessible_elem":"",children:[b("React").jsx("label",{htmlFor:a.inputId,children:b("React").jsx(b("FDSText.react"),{color:d?"header":"primary",size:d?"header4":"body2",weight:d?"bold":"normal",children:f})}),c?b("React").jsx("span",{className:"fx4hsqtn",children:b("React").jsxs(b("FDSText.react"),{color:d?"secondary":"placeholder",margin:"_3-99",size:d?"body":"body2",weight:d?"bold":"normal",children:[j," ",e]})}):null]})}function l(a){var c=a.isTooltipVisible,d=a.popover;a=a.tooltipText;var e=null;a!=null&&(e=b("React").jsx(b("FDSSimplePopover.react"),{content:a,position:"above"}));d!=null&&(e=d);return e!=null?b("React").jsx("div",{className:"_8ahp"+(c===!1?" _8ail":""),children:e}):null}e.exports=b("makeFDSStandardComponent")("FDSPrivateFormLabel",a)}),null);
__d("useUniqueID",["React","uniqueID"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useRef;function a(){var a=g(null);a.current===null&&(a.current=b("uniqueID")());return a.current}e.exports=a}),null);
__d("FDSFormInputLayout.react",["cx","FDSPrivateDisabledMessageWrapper.react","FDSPrivateFormLabel.react","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","FDSText.react","FlexLayout.react","React","cxMargin","joinClasses","useBoolean","useKeyboardFocus","useUniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useContext;function a(a){__p&&__p();var c,d=a.children,e=a.disabledMessage,f=a.label,g=a.labelIsHidden;g=g===void 0?!1:g;var k=a.infoTooltipText,l=a.isDisabled,m=a.isOptional,n=a.margin;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","disabledMessage","label","labelIsHidden","infoTooltipText","isDisabled","isOptional","margin"]);var o=h(b("FDSPrivateThemeContext.react"));o=b("FDSPrivateThemeUtils").isGeo(o);var p=b("useBoolean")(!1),q=p.value,r=p.setTrue;p=p.setFalse;var s=b("useKeyboardFocus")({onBlur:p,onFocus:r}),t=s.isKeyboardFocused,u=s.onBlur;s=s.onFocus;q=q||t;t=b("useUniqueID")();c=(c=a.inputId)!=null?c:t;t=b("useUniqueID")();var v=b("useUniqueID")(),w={inputId:c,describedBy:a.description!=null?t:void 0,errorMessageId:a.errorMessage!=null?v:void 0};c=b("React").jsx(b("FDSPrivateFormLabel.react"),{description:a.description,descriptionId:t,hasRequirementLabel:m===!0,inputId:c,isRequired:m===!1,isTooltipVisible:q,labelIsHidden:g,popover:a.popover,title:f,tooltipText:k});return b("React").jsxs("div",{className:b("joinClasses")(n,"_86ij"),onBlur:u,onFocus:s,onMouseEnter:r,onMouseLeave:p,children:[g?c:b("React").jsxs(b("FlexLayout.react"),{align:"center",className:"_21op",justify:"all",children:[b("React").jsx(b("FlexLayout.react"),{align:"center",children:c}),a.labelSupplementaryContent]}),b("React").jsx(b("FDSPrivateDisabledMessageWrapper.react"),{disabledMessage:e,fdsPrivate_loggerSuffix:"InFDSFormInputLayout",isDisabled:l,children:b("React").jsx(b("FlexLayout.react"),{className:"_86ik",direction:"vertical",children:d(w)})}),b("React").jsx(j,{errorMessage:a.errorMessage,errorMessageId:v,warningMessage:a.warningMessage}),o?null:b("React").jsx(i,{id:t,text:a.description})]})}function i(a){return a.text!=null&&a.text!==""?b("React").jsx(b("FDSText.react"),{color:"secondary",id:a.id,margin:"_3-8w",size:"body3",children:a.text}):null}function j(a){__p&&__p();var c=h(b("FDSPrivateThemeContext.react"));if(b("FDSPrivateThemeUtils").isGeo(c))return b("React").jsx(k,{errorMessageId:a.errorMessageId,isWarning:a.warningMessage!=null,message:a.errorMessage!=null?a.errorMessage:a.warningMessage});c=a.errorMessage!=null&&a.errorMessage!=="";var d=a.warningMessage!=null&&a.warningMessage!=="";if(c)return b("React").jsx(b("FDSText.react"),{color:"negative",id:a.errorMessageId,margin:"_3-8w",size:"body3",children:a.errorMessage});else if(d)return b("React").jsx("span",{className:"_7vrh",children:a.warningMessage});return null}function k(a){var c=h(b("FDSPrivateThemeContext.react"));if(a.message==null||a.message==="")return null;var d=c.inputs.borderRadius*2;c=c.inputs.borderRadius;var e=a.isWarning?"rgba(225, 186, 0, 0.1)":"rgba(242, 128, 70, 0.1)";d={backgroundColor:e,borderBottomLeftRadius:c,borderBottomRightRadius:c,padding:d};e={borderBottomLeftRadius:c,borderBottomRightRadius:c,boxShadow:"0 0 0 "+c+"px "+e,clip:"rect(0px, auto, "+c+"px, auto)",height:c,left:0,position:"absolute",top:-c,width:"100%"};return b("React").jsxs("div",{className:"_7vri",style:d,children:[b("React").jsx("span",{style:e}),b("React").jsx(b("FDSText.react"),{id:a.errorMessageId,size:"meta1",children:a.message})]})}e.exports=a}),null);
__d("FDSPrivateFormCounter.react",["FDSText.react","React"],(function(a,b,c,d,e,f){"use strict";a=function(a){a=a.limit-a.count;return b("React").jsx(b("FDSText.react"),{color:a>0?"positive":"negative",children:a})};e.exports=a}),null);
__d("FDSTextInput.react",["FDSBaseTextInput.react","FDSFormInputLayout.react","FDSPrivateFormCounter.react","React","emptyFunction","makeFDSStandardComponent","uniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d,e;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(d=e=a.call.apply(a,[this].concat(g))||this,e.state={innerValue:(c=e.props.value)!=null?c:"",value:e.props.value},e.$1=b("React").createRef(),e.$2=b("uniqueID")(),e.$3=function(a){e.setState({innerValue:a}),e.props.onChange(a)},e.$4=function(){e.setState({innerValue:""}),e.props.onClear&&e.props.onClear()},d)||babelHelpers.assertThisInitialized(e)}c.getDerivedStateFromProps=function(a,b){if(b.value!==a.value){return{innerValue:(b=a.value)!=null?b:"",value:a.value}}return null};var d=c.prototype;d.focus=function(){this.$1.current&&this.$1.current.focus()};d.blur=function(){this.$1.current&&this.$1.current.blur()};d.select=function(){this.$1.current&&this.$1.current.select()};d.render=function(){var a=this,c=this.props,d=c.autoComplete,e=c.busyIndicator,f=c.description,g=c.disabledMessage,h=c.errorMessage,i=c.icon,j=c.isDisabled,k=c.isEdited,l=c.isHighlighted,m=c.isOptional,n=c.isValid,o=c.label,p=c.labelIsHidden,q=c.maxLength,r=c.name,s=c.onBlur,t=c.onClear,u=c.onClick,v=c.onEnter,w=c.onFocus,x=c.onKeyDown,y=c.onKeyUp,z=c.onPaste,A=c.placeholder,B=c.rightContent,C=c.size,D=c.tooltipText,E=c.type,F=c.warningMessage,G=(c=this.props.value)!=null?c:this.state.innerValue;c=q!=null?b("React").jsx(b("FDSPrivateFormCounter.react"),{count:G.length,limit:q}):null;return b("React").jsx(b("FDSFormInputLayout.react"),{description:f,disabledMessage:g,errorMessage:h,infoTooltipText:D,inputId:this.$2,isDisabled:j,isOptional:m,label:o,labelIsHidden:p,labelSupplementaryContent:c,warningMessage:F,children:function(c){var f=c.describedBy;c=c.errorMessageId;return b("React").jsx(b("FDSBaseTextInput.react"),{autoComplete:d,busyIndicator:e,"data-testid":a.props["data-testid"],describedBy:f,errorMessageId:c,hasError:!!h,hasWarning:!!F,htmlForTargetId:a.$2,icon:i,isDisabled:j,isEdited:k,isHighlighted:l,isValid:n,maxLength:q,name:r,onBlur:s,onChange:a.$3,onClear:t&&a.$4,onClick:u,onEnter:v,onFocus:w,onKeyDown:x,onKeyUp:y,onPaste:z,placeholder:A,ref:a.$1,rightContent:B,size:C,type:E,value:G})}})};return c}(b("React").PureComponent);a.defaultProps={isDisabled:!1,isEdited:!1,isValid:null,labelIsHidden:!1,onChange:b("emptyFunction"),size:"large",type:"text"};e.exports=b("makeFDSStandardComponent")("FDSTextInput",a)}),null);
__d("FDSButtonSpinner.react",["FDSSpinner.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("FDSSpinner.react"),{shade:this.props.shade,size:"small"})};return c}(b("React").PureComponent);a.defaultProps={shade:"dark"};e.exports=a}),null);
__d("Alignment",["invariant","DOMVector","Style","containsNode"],(function(a,b,c,d,e,f,g){__p&&__p();var h=function(){"use strict";__p&&__p();function a(a,b,c){this.$1=b,this.$2=c,this.$3=a}var c=a.prototype;c.getElement=function(){return this.$3};c.getX=function(){return this.$1};c.getY=function(){return this.$2};c.isCorner=function(){return(this.$1===a.LEFT||this.$1===a.RIGHT)&&(this.$2===a.TOP||this.$2===a.BOTTOM)};c.getPosition=function(a){return b("DOMVector").getElementPosition(this.$3,a).add(this.getX()*this.$3.offsetWidth,this.getY()*this.$3.offsetHeight)};return a}();Object.assign(h,{LEFT:0,CENTER:.5,RIGHT:1,TOP:0,MIDDLE:.5,BOTTOM:1});a=function(){"use strict";__p&&__p();function a(a,c,d){this.$1=a,this.$2=c,this.$3=d,b("containsNode")(a.getElement(),c.getElement())||g(0,5861),a.isCorner()||g(0,5862)}var c=a.prototype;c.align=function(){var b=this;a.$4(this.$1,function(){return a.measure(b.$2,b.$3)})};a.$4=function(a,c){var d=a.getElement();b("Style").apply(d,{left:a.getX()===h.LEFT?"0":"",right:a.getX()===h.RIGHT?"0":"",top:a.getY()===h.TOP?"0":"",bottom:a.getY()===h.BOTTOM?"0":""});c=c();a.getX()===h.LEFT?b("Style").set(d,"left",c.x+"px"):a.getX()===h.RIGHT&&b("Style").set(d,"right",-c.x+"px");a.getY()===h.TOP?b("Style").set(d,"top",c.y+"px"):a.getY()===h.BOTTOM&&b("Style").set(d,"bottom",-c.y+"px")};a.position=function(c,d){a.$4(c,function(){var a=b("DOMVector").getElementPosition(c.getElement());return d.convertTo("document").sub(a)})};a.measure=function(a,b){a=a.getPosition("document");b=b.getPosition("document");return b.sub(a)};return a}();a.Anchor=h;e.exports=a}),null);
__d("XCMSBlockDeliveryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cms/render_block/",{})}),null);