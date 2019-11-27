if (self.CavalryLogger) { CavalryLogger.start_js(["O3+gq"]); }

__d("FBStoriesPrivacyRelaySelectorLoadingContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"first",value:5e3}],b={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},c=[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"UnifiedStoriesParticipant",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},b,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"profile_picture",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[{kind:"ScalarField",alias:null,name:"is_viewer_friend",args:null,storageKey:null}]}]}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"FBStoriesPrivacyRelaySelectorLoadingContainerQuery",type:"Query",metadata:null,argumentDefinitions:[],selections:[{kind:"FragmentSpread",name:"FBStoriesPrivacyRelaySelector_settings",args:null}]},operation:{kind:"Operation",name:"FBStoriesPrivacyRelaySelectorLoadingContainerQuery",argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_setting",storageKey:null,args:null,concreteType:"UnifiedStoriesSetting",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"audience_mode",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"blocked_participants",storageKey:"blocked_participants(first:5000)",args:a,concreteType:"UnifiedStoriesBlockedParticipantsConnection",plural:!1,selections:c},{kind:"LinkedField",alias:null,name:"custom_participants",storageKey:"custom_participants(first:5000)",args:a,concreteType:"UnifiedStoriesCustomParticipantsConnection",plural:!1,selections:c},b]},{kind:"LinkedField",alias:null,name:"stories_data",storageKey:null,args:null,concreteType:"StoriesData",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"audience_mode_list",storageKey:null,args:null,concreteType:"UnifiedStoriesAudienceModeFormatData",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"unified_stories_audience_mode",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"header",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null}]},b]}]}]},params:{operationKind:"query",name:"FBStoriesPrivacyRelaySelectorLoadingContainerQuery",id:"1018822591575149",text:null,metadata:{}}}}();e.exports=a}),null);
__d("FBStoriesPrivacyRelaySelector_settings.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"first",value:5e3}],b=[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"UnifiedStoriesParticipant",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"profile_picture",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[{kind:"ScalarField",alias:null,name:"is_viewer_friend",args:null,storageKey:null}]}]}]}];return{kind:"Fragment",name:"FBStoriesPrivacyRelaySelector_settings",type:"Query",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_setting",storageKey:null,args:null,concreteType:"UnifiedStoriesSetting",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"audience_mode",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"blocked_participants",storageKey:"blocked_participants(first:5000)",args:a,concreteType:"UnifiedStoriesBlockedParticipantsConnection",plural:!1,selections:b},{kind:"LinkedField",alias:null,name:"custom_participants",storageKey:"custom_participants(first:5000)",args:a,concreteType:"UnifiedStoriesCustomParticipantsConnection",plural:!1,selections:b}]},{kind:"LinkedField",alias:null,name:"stories_data",storageKey:null,args:null,concreteType:"StoriesData",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"audience_mode_list",storageKey:null,args:null,concreteType:"UnifiedStoriesAudienceModeFormatData",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"unified_stories_audience_mode",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"header",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null}]}]}]}]}}();e.exports=a}),null);
__d("storiesPrivacyRelaySubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"UnifiedStoriesPrivacyChangeSubscribeData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"audience_mode",args:null,storageKey:null},d=[{kind:"Literal",name:"first",value:5e3}],e={kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},h={kind:"LinkedField",alias:null,name:"profile_picture",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},i={kind:"InlineFragment",type:"User",selections:[{kind:"ScalarField",alias:null,name:"is_viewer_friend",args:null,storageKey:null}]},j=[e,{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"UnifiedStoriesParticipant",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[f,g,h,i]}]}],k={kind:"LinkedField",alias:null,name:"audience_mode_list",storageKey:null,args:null,concreteType:"UnifiedStoriesAudienceModeFormatData",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"unified_stories_audience_mode",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"header",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null}]};e=[e,{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"UnifiedStoriesParticipant",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},f,g,h,i]}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"storiesPrivacyRelaySubscription",type:"Subscription",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_privacy_change_subscribe",storageKey:null,args:b,concreteType:"UnifiedStoriesPrivacyChangeSubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_setting",storageKey:null,args:null,concreteType:"UnifiedStoriesSetting",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"blocked_participants",storageKey:"blocked_participants(first:5000)",args:d,concreteType:"UnifiedStoriesBlockedParticipantsConnection",plural:!1,selections:j},{kind:"LinkedField",alias:null,name:"custom_participants",storageKey:"custom_participants(first:5000)",args:d,concreteType:"UnifiedStoriesCustomParticipantsConnection",plural:!1,selections:j}]},{kind:"LinkedField",alias:null,name:"stories_data",storageKey:null,args:null,concreteType:"StoriesData",plural:!1,selections:[k]}]}]}]},operation:{kind:"Operation",name:"storiesPrivacyRelaySubscription",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_privacy_change_subscribe",storageKey:null,args:b,concreteType:"UnifiedStoriesPrivacyChangeSubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_setting",storageKey:null,args:null,concreteType:"UnifiedStoriesSetting",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"blocked_participants",storageKey:"blocked_participants(first:5000)",args:d,concreteType:"UnifiedStoriesBlockedParticipantsConnection",plural:!1,selections:e},{kind:"LinkedField",alias:null,name:"custom_participants",storageKey:"custom_participants(first:5000)",args:d,concreteType:"UnifiedStoriesCustomParticipantsConnection",plural:!1,selections:e},f]},{kind:"LinkedField",alias:null,name:"stories_data",storageKey:null,args:null,concreteType:"StoriesData",plural:!1,selections:[k,f]}]}]}]},params:{operationKind:"subscription",name:"storiesPrivacyRelaySubscription",id:"1996302990496863",text:null,metadata:{subscriptionName:"unified_stories_privacy_change_subscribe"}}}}();e.exports=a}),null);
__d("storiesPrivacyRelayUpdateMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"UnifiedStoriesAudienceModeUpdateData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"audience_mode",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"storiesPrivacyRelayUpdateMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_audience_mode_update",storageKey:null,args:b,concreteType:"UnifiedStoriesAudienceModeUpdateResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_setting",storageKey:null,args:null,concreteType:"UnifiedStoriesSetting",plural:!1,selections:[c]}]}]},operation:{kind:"Operation",name:"storiesPrivacyRelayUpdateMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_audience_mode_update",storageKey:null,args:b,concreteType:"UnifiedStoriesAudienceModeUpdateResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"unified_stories_setting",storageKey:null,args:null,concreteType:"UnifiedStoriesSetting",plural:!1,selections:[c,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]}]},params:{operationKind:"mutation",name:"storiesPrivacyRelayUpdateMutation",id:"2071667672881435",text:null,metadata:{}}}}();e.exports=a}),null);
__d("FBStoriesProductionTypes",["immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={CAMERA_ERROR:"CAMERA_ERROR",FILE_SIZE_EXCEED:"FILE_SIZE_EXCEED",LEAVING:"LEAVING"};c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record({hasImage:void 0,hasMediaStream:void 0,isCameraMediaOpen:void 0,imageSource:void 0,mediaNode:void 0,mediaStream:void 0,privacySettingsCustomParticipants:void 0,privacySettingsMode:void 0,videoSource:void 0}));d={CAMERA_1:"CAMERA_1",CAMERA_2:"CAMERA_2",NULL_STATE:"NULL_STATE",UPLOAD_1:"UPLOAD_1"};f={UNSET:"UNSET",PUBLIC:"PUBLIC",FRIENDS_AND_CONNECTIONS:"FRIENDS_AND_CONNECTIONS",FRIENDS:"FRIENDS",CUSTOM:"CUSTOM"};e.exports={FBStoriesCameraPopupDialogTypes:a,FBStoriesCameraState:c,FBStoriesProductionFlowStageTypes:d,UnifiedStoriesAudienceModeTypes:f}}),null);
__d("PopoverMenuShowOnEnable",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(a){this._popoverMenu=a}var b=a.prototype;b.enable=function(){this._popoverMenu.getPopover().showLayer()};b.disable=function(){};return a}();e.exports=a}),null);
__d("XWEMPrivateSharingDisableDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/private_sharing/disable_dialog/",{setting_type:{type:"Enum",required:!0,enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("FBStoriesPrivacySelectorMenu.react",["cx","fbt","ContextualLayerAutoFlip","FBStoriesPrivacyConfig","FBStoriesProductionTypes","Image.react","PopoverMenu.react","PopoverMenuShowOnEnable","React","ReactXUIMenu","Tooltip.react","XUIPopoverButton.react","XUISpinner.react","XUIMenuStaticItem.react","XWEMPrivateSharingDisableDialogController","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("FBStoriesProductionTypes").UnifiedStoriesAudienceModeTypes,j=b("ReactXUIMenu").SelectableMenu,k=b("ReactXUIMenu").SelectableItem,l=b("ReactXUIMenu").Item,m={SHOW_ICON:"SHOW_ICON",SHOW_SPINNER:"SHOW_SPINNER"};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={animationState:m.SHOW_ICON},d.$4=function(a){__p&&__p();var c,e=a.unified_stories_audience_mode,f;switch(e){case i.CUSTOM:f=d.$7();break;default:f=a.description;break}var g=b("FBStoriesPrivacyConfig").audienceModeIcons[e];g=(c=b("React")).jsxs("div",{className:"_2gk2",children:[c.jsxs("div",{className:"_2gk3",children:[c.jsx("div",{className:"_2gk4",children:c.jsx(b("Image.react"),{src:g})}),c.jsx("div",{className:"_2gk5",children:a.header})]}),c.jsx("div",{className:"_2gk6",children:f})]});a=null;if(d.props.privateSharingOn)switch(e){case i.PUBLIC:a="see_future_posts";break;case i.FRIENDS_AND_CONNECTIONS:a="composer_friends_and_connections";break;default:break}if(a!==null){c=b("XWEMPrivateSharingDisableDialogController").getURIBuilder().setEnum("setting_type",a).getURI();return b("React").jsx(l,{className:"_2gk1 _5arm",hoverdisabled:!0,href:c,rel:"dialog",children:g},e)}return b("React").jsx(k,{className:"_2gk1",disabled:d.props.isSaving,selected:e===d.props.selectedAudienceMode,value:e,children:g},e)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidUpdate=function(a,b){this.props.isSaving!==a.isSaving&&this.setState({animationState:this.props.isSaving?m.SHOW_SPINNER:m.SHOW_ICON})};d.render=function(){var a=this,c=this.props.eligibleAudienceModesList.find(function(b){return b.unified_stories_audience_mode===a.props.selectedAudienceMode}),d=b("FBStoriesPrivacyConfig").audienceModeIcons[this.props.selectedAudienceMode];d=this.state.animationState===m.SHOW_ICON?b("React").jsx(b("Image.react"),{src:d}):b("React").jsx(b("XUISpinner.react"),{});c=(c=c)!=null?c.header:c;var e=this.props.openOnLoad?[b("PopoverMenuShowOnEnable")]:[];return b("React").jsx(b("PopoverMenu.react"),{behaviors:e,disabled:this.props.isSaving,layerBehaviors:[b("ContextualLayerAutoFlip")],position:this.props.menuPosition,alignh:this.props.menuAlignh,menu:this.$1(),children:b("React").jsx(b("Tooltip.react"),{tooltip:c,position:"above",children:b("React").jsx(b("XUIPopoverButton.react"),{className:"_2gk7",disabled:this.props.isSaving,image:d,label:c,onClick:this.$2,onKeyPress:this.$2})})})};d.$2=function(a){a.stopPropagation()};d.$1=function(){var a=[this.$3()],c=this.props.eligibleAudienceModesList;this.props.selectedAudienceMode!==i.CUSTOM&&this.props.customParticipants.length===0&&(c=this.props.eligibleAudienceModesList.filter(function(a){return a.unified_stories_audience_mode!==i.CUSTOM}));a.push(c.map(this.$4));this.props.selectedAudienceMode!==i.PUBLIC&&this.props.selectedAudienceMode!==i.CUSTOM&&this.props.blockedParticipants.length>0&&a.push(this.$5());c=c.find(function(a){return a.unified_stories_audience_mode===i.FRIENDS_AND_CONNECTIONS})!==void 0;!b("gkx")("1202022")&&c&&a.push(this.$6());return b("React").jsx(j,{onChange:this.props.onAudienceModeChanged,children:a})};d.$3=function(){return b("React").jsxs(b("XUIMenuStaticItem.react"),{className:"_2gk8",children:[b("React").jsx("div",{className:"_2gk9",children:h._("Who can see your story?")}),b("React").jsx("div",{className:"_2gkb",children:h._("Your story will be visible for 24 hours on Facebook and Messenger.")})]},"header")};d.$6=function(){return b("React").jsx(b("XUIMenuStaticItem.react"),{className:"_2gk8",children:b("React").jsx("div",{className:"_2gkb",children:h._("Learn more about {=Messenger connections}",[h._param("=Messenger connections",b("React").jsx("a",{href:"https://www.facebook.com/help/messenger-app/122070095126335",target:"_blank",children:h._("Messenger connections")}))])})},"footer")};d.$5=function(){var a;return(a=b("React")).jsx(l,{className:"_6vc_",children:a.jsxs("div",{className:"_2gk2",children:[a.jsxs("div",{className:"_2gk3",children:[a.jsx("div",{className:"_2gk4",children:a.jsx(b("Image.react"),{src:b("FBStoriesPrivacyConfig").blockedIcon})}),a.jsx("div",{className:"_2gk5",children:h._("Story Hidden From")})]}),a.jsx("div",{className:"_2gk6",children:this.$8()})]})},"blocked")};d.$7=function(){var a=this.props.customParticipants.length,b=this.props.customParticipants.map(function(a){return(a=a)!=null?(a=a.actor)!=null?a.name:a:a});switch(a){case 0:return h._("No One");case 1:return h._("{name_of_friend_connection}",[h._param("name_of_friend_connection",b[0])]);case 2:return h._("{name_of_first_friend_connection} and {name_of_second_friend_connection}",[h._param("name_of_first_friend_connection",b[0]),h._param("name_of_second_friend_connection",b[1])]);case 3:return h._("{names_of_first_two_friends_connections} and {name_of_third_friend_connection}",[h._param("names_of_first_two_friends_connections",b.slice(0,2).join(", ")),h._param("name_of_third_friend_connection",b[2])]);default:return h._({"*":"{names_of_first_three_friends_connections} and {number} others","_1":"{names_of_first_three_friends_connections} and 1 other"},[h._param("names_of_first_three_friends_connections",b.slice(0,3).join(", ")),h._plural(a-3,"number")])}};d.$8=function(){var a=this.props.blockedParticipants.length,b=this.props.blockedParticipants.map(function(a){return(a=a)!=null?(a=a.actor)!=null?a.name:a:a});switch(a){case 0:return null;case 1:return h._("{name_of_friend_connection}",[h._param("name_of_friend_connection",b[0])]);case 2:return h._("{name_of_first_friend_connection} and {name_of_second_friend_connection}",[h._param("name_of_first_friend_connection",b[0]),h._param("name_of_second_friend_connection",b[1])]);case 3:return h._("{names_of_first_two_friends_connections} and {name_of_third_friend_connection}",[h._param("names_of_first_two_friends_connections",b.slice(0,2).join(", ")),h._param("name_of_third_friend_connection",b[2])]);default:return h._({"*":"{names_of_first_three_friends_connections} and {number} others","_1":"{names_of_first_three_friends_connections} and 1 other"},[h._param("names_of_first_three_friends_connections",b.slice(0,3).join(", ")),h._plural(a-3,"number")])}};return c}(b("React").Component);e.exports=a}),null);
__d("FBStoriesPrivacySelector.react",["fbt","FBConfirmDialog.react","FBStoriesPrivacySelectorMenu.react","React","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={showConfirmationDialog:!1,showErrorDialog:!1},c.$4=function(a){!a&&c.state.showConfirmationDialog&&c.$5()},c.$5=function(){c.$7(),c.props.onCancelAudienceModeChange()},c.$6=function(){c.props.onConfirmAudienceModeChange(function(){c.setState({showErrorDialog:!0})}),c.$7()},c.$1=function(a,b){c.props.onAudienceModeChanged(b.value),c.setState({showConfirmationDialog:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return b("React").jsxs("div",{children:[b("React").jsx(b("FBStoriesPrivacySelectorMenu.react"),{blockedParticipants:this.props.blockedParticipants,customParticipants:this.props.customParticipants,eligibleAudienceModesList:this.props.eligibleAudienceModesList,isSaving:this.props.isSaving,openOnLoad:this.props.openOnLoad,onAudienceModeChanged:this.$1,selectedAudienceMode:this.props.selectedAudienceMode,privateSharingOn:this.props.privateSharingOn,menuPosition:this.props.menuPosition,menuAlignh:this.props.menuAlignh}),this.$2(),this.$3()]})};d.$2=function(){return b("React").jsx(b("FBConfirmDialog.react"),{title:g._("Change Story Privacy"),shown:this.state.showConfirmationDialog,onToggle:this.$4,onCancel:this.$5,onConfirm:this.$6,content:g._("Changes you make will apply to any photos and videos currently in your story in addition to those you add from now on."),confirmButtonText:g._("Change")})};d.$3=function(){var a=this,c;return(c=b("React")).jsxs(b("XUIDialog.react"),{isStrictlyControlled:!0,shown:this.state.showErrorDialog,width:445,onHide:function(){a.setState({showErrorDialog:!1})},children:[c.jsx(b("XUIDialogTitle.react"),{children:g._("Couldn't Change Story Privacy")}),c.jsx(b("XUIDialogBody.react"),{children:c.jsx("div",{children:g._("The changes you made to your story privacy weren't saved. Please try again.")})}),c.jsx(b("XUIDialogFooter.react"),{children:c.jsx(b("XUIDialogButton.react"),{use:"confirm",action:"cancel",label:g._("Close")})})]})};d.$7=function(){this.setState({showConfirmationDialog:!1})};return c}(b("React").Component);e.exports=a}),null);
__d("FBStoriesPrivacySelectorLoadingPlaceholder.react",["fbt","React","XUIButton.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return b("React").jsx("div",{children:b("React").jsx(b("XUIButton.react"),{size:"medium",haschevron:!1,label:g._("Loading..."),image:b("React").jsx(b("XUISpinner.react"),{}),onClick:function(a){a.stopPropagation()}})})};e.exports=a}),null);
__d("storiesPrivacyRelaySubscription",["CurrentUser","RelayFBEnvironment","RelayModern","storiesPrivacyRelaySubscription.graphql"],(function(a,b,c,d,e,f){"use strict";b("RelayModern").graphql;var g=b("RelayModern").requestSubscription,h=function(){return b("storiesPrivacyRelaySubscription.graphql")};function a(){var a={input:{owner_id:b("CurrentUser").getID()}};return g(b("RelayFBEnvironment"),{subscription:h,variables:a})}e.exports={subscribe:a}}),null);
__d("storiesPrivacyRelayUpdateMutation",["CurrentUser","RelayFBEnvironment","RelayModern","storiesPrivacyRelayUpdateMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g=b("RelayModern").commitMutation;b("RelayModern").graphql;var h=function(){return b("storiesPrivacyRelayUpdateMutation.graphql")};a=function(a,c,d){g(b("RelayFBEnvironment"),{mutation:h,onCompleted:c,onError:d,optimisticResponse:{unified_stories_audience_mode_update:{unified_stories_setting:{audience_mode:a}}},variables:{input:{actor_id:b("CurrentUser").getID(),audience_mode:a}}})};e.exports=a}),null);
__d("FBStoriesPrivacyRelaySelector.react",["FBStoriesPrivacyHelper","FBStoriesPrivacySelector.react","FBStoriesPrivacySelectorLoadingPlaceholder.react","React","RelayModern","storiesPrivacyRelaySubscription","storiesPrivacyRelayUpdateMutation","FBStoriesPrivacyRelaySelector_settings.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.state={isSaving:!1,previousSelectedAudienceMode:null,selectedAudienceMode:b("FBStoriesPrivacyHelper").getSelectedAudienceMode(d.props.settings.viewer)},d.$2=function(){if(d.state.previousSelectedAudienceMode==null)return;d.setState(function(a,b){return{selectedAudienceMode:a.previousSelectedAudienceMode}})},d.$3=function(a){var c=d.state.selectedAudienceMode;if(c==null)return;d.setState({isSaving:!0});b("storiesPrivacyRelayUpdateMutation")(c,function(){d.setState({isSaving:!1})},function(){a(),d.$2(),d.setState({isSaving:!1})})},d.$4=function(a){d.setState(function(b,c){return{previousSelectedAudienceMode:b.selectedAudienceMode,selectedAudienceMode:a}})},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,c){a=b("FBStoriesPrivacyHelper").getSelectedAudienceMode(a.settings.viewer);return a!==c.selectedAudienceMode&&c.previousSelectedAudienceMode!==a?babelHelpers["extends"]({},c,{selectedAudienceMode:a}):c};var d=c.prototype;d.componentDidMount=function(){this.$1=b("storiesPrivacyRelaySubscription").subscribe()};d.componentWillUnmount=function(){this.$1&&this.$1.dispose()};d.render=function(){var a=this.state.selectedAudienceMode;if(a==null)return b("React").jsx(b("FBStoriesPrivacySelectorLoadingPlaceholder.react"),{});var c=this.props.settings.viewer,d=b("FBStoriesPrivacyHelper").getBlockedParticipants(c),e=b("FBStoriesPrivacyHelper").getCustomParticipants(c);c=b("FBStoriesPrivacyHelper").getEligibleAudienceModesList(c);return b("React").jsx(b("FBStoriesPrivacySelector.react"),{blockedParticipants:d,customParticipants:e,eligibleAudienceModesList:c,isSaving:this.state.isSaving,onAudienceModeChanged:this.$4,onCancelAudienceModeChange:this.$2,onConfirmAudienceModeChange:this.$3,openOnLoad:!!this.props.openOnLoad,selectedAudienceMode:a,privateSharingOn:this.props.privateSharingOn,menuPosition:this.props.menuPosition,menuAlignh:this.props.menuAlignh})};return c}(b("React").PureComponent);e.exports=a(c,{settings:function(){return b("FBStoriesPrivacyRelaySelector_settings.graphql")}})}),null);
__d("FBStoriesPrivacyRelaySelectorLoadingContainer.react",["FBStoriesPrivacyRelaySelector.react","FBStoriesPrivacySelectorLoadingPlaceholder.react","React","RelayFBEnvironment","RelayModern","WebFunnelLogger","FBStoriesPrivacyRelaySelectorLoadingContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var h=function(){return b("FBStoriesPrivacyRelaySelectorLoadingContainerQuery.graphql")};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){var c=a.error;a=a.props;if(a){new(b("WebFunnelLogger"))("FBStoriesWebPrivacySelectorFunnelDefinition").setAction("Successfully loaded data").setSessionKey(d.props.sessionKey).setSecondaryOrder("2").markEnd().log();return b("React").jsx(b("FBStoriesPrivacyRelaySelector.react"),{settings:a,privateSharingOn:d.props.privateSharingOn})}else{c&&new(b("WebFunnelLogger"))("FBStoriesWebPrivacySelectorFunnelDefinition").setAction("Failed to load data").setSessionKey(d.props.sessionKey).setSecondaryOrder("2").markEnd().log();return b("React").jsx(b("FBStoriesPrivacySelectorLoadingPlaceholder.react"),{})}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){new(b("WebFunnelLogger"))("FBStoriesWebPrivacySelectorFunnelDefinition").setAction("Mounted loading container").setSecondaryOrder("1").setSessionKey(this.props.sessionKey).log()};d.render=function(){return b("React").jsx(g,{environment:b("RelayFBEnvironment"),query:h,render:this.$1,variables:{}})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorStoriesSection.react",["cx","FBStoriesPrivacyRelaySelectorLoadingContainer.react","ProfileTile.react","React","ReactComposerContextTypes","SharingSpacesStrings","Tooltip.react","WebFunnelLogger","XUIText.react","isKeyActivation","uniqueID","uuid"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=!1,d.$2=b("uuid")(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){this.$1||(new(b("WebFunnelLogger"))("FBStoriesWebPrivacySelectorFunnelDefinition").markStart().setSessionKey(this.$2).setSecondaryOrder("0").setAction("Loading privacy selector").log(),this.$1=!0);return b("React").jsx("li",{"aria-disabled":this.props.isDisabled,className:"_1pek _6_lt",children:this.props.isDisabled?b("React").jsx(b("Tooltip.react"),{className:"_7jyc",display:"block",tooltip:b("SharingSpacesStrings").STORIES_DISABLED_TOOLTIP,children:this.$3()}):this.$3()})};d.$3=function(){var a=this,c=window.devicePixelRatio||1,d=b("uniqueID")();return b("React").jsxs("section",{className:"_vli"+(this.props.isDisabled?" _3560":""),children:[b("React").jsx("div",{"aria-labelledby":this.props.headerLabelID+" "+d,"aria-disabled":this.props.isDisabled,className:"_740n",tabIndex:0,role:"checkbox","aria-checked":this.props.storiesSelected,onKeyDown:function(c){!a.props.isDisabled&&b("isKeyActivation")(c)&&(a.props.onStoriesClicked(),c.preventDefault())},onClick:this.props.isDisabled?function(){}:this.props.onStoriesClicked,children:b("React").jsx("ol",{className:"_159h",children:b("React").jsx("li",{className:"_1sex"+(this.props.storiesSelected&&!this.props.isDisabled?" _1sfg":""),"data-destination":"STORIES",children:b("React").jsxs("div",{className:"_1sez",children:[b("React").jsx("div",{className:"_1se-",children:b("React").jsx("div",{className:"_1se_"})}),b("React").jsx("div",{className:"_67io",children:b("React").jsx(b("ProfileTile.react"),{id:this.context.actorID,imageProps:{className:"_3-w4"},size:38*c*1.5})}),b("React").jsx("div",{className:"_3-we",children:b("React").jsx(b("XUIText.react"),{id:d,className:"_3qpq _3qps",size:"header3",children:b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_STORIES})})]},"storiesListItem")},"storiesList")})}),b("React").jsx("div",{"aria-disabled":this.props.isDisabled,className:"_2loc",children:b("React").jsx(b("FBStoriesPrivacyRelaySelectorLoadingContainer.react"),{editable:!0,privateSharingOn:this.props.privateSharingOn,sessionKey:this.$2})})]})};return c}(b("React").Component);a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorStoriesContainer.react",["FluxContainer","React","ReactComposerAudienceActions","ReactComposerAudienceStore","ReactComposerMediaUploadStore","ReactComposerScrapedAttachmentStore","ReactComposerSharingSpacesSelectorStoriesSection.react","ReactComposerStatusStore","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerStatusStore"),b("ReactComposerMediaUploadStore"),b("ReactComposerScrapedAttachmentStore"),b("ReactComposerAudienceStore")]};c.calculateState=function(a,c){a=b("ReactComposerTaggerStore").isDisabled(c.composerID,b("ReactComposerTaggerType").STORIES);var d=b("ReactComposerAudienceStore").getStoriesSelected(c.composerID);a&&d?(b("ReactComposerAudienceActions").setStoriesSelectedSavedState(c.composerID,!0),b("ReactComposerAudienceActions").setStoriesSelected(c.composerID,!1)):!a&&b("ReactComposerAudienceStore").getStoriesSelectedSavedState(c.composerID)&&!d&&(b("ReactComposerAudienceActions").setStoriesSelected(c.composerID,!0),b("ReactComposerAudienceActions").setStoriesSelectedSavedState(c.composerID,null));return{isDisabled:a}};var d=c.prototype;d.render=function(){return b("React").jsx(b("ReactComposerSharingSpacesSelectorStoriesSection.react"),{onStoriesClicked:this.props.onStoriesClicked,storiesSelected:this.props.storiesSelected,viewerIsTarget:this.props.viewerIsTarget,composerID:this.props.composerID,isDisabled:this.state.isDisabled,privateSharingOn:this.props.privateSharingOn,headerLabelID:this.props.headerLabelID})};return c}(b("React").PureComponent);e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("ReactComposerSharingSpacesSelectorTimelineSection.react",["cx","React","ReactComposerAudienceSelectorContainer.react","SharingSpacesStrings","XUIText.react","isKeyActivation","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c,d=b("uniqueID")();return(c=b("React")).jsxs("li",{className:"_1pek _6_lt",children:[c.jsx("div",{className:"_740n",tabIndex:0,role:"checkbox","aria-labelledby":a.headerLabelID+" "+d,"aria-checked":a.timelineSelected,onKeyDown:function(c){b("isKeyActivation")(c)&&(a.onTimelineClicked(),c.preventDefault())},onClick:a.onTimelineClicked,children:c.jsx("ol",{className:"_159h",children:c.jsx("li",{className:"_1sex"+(a.timelineSelected?" _1sfg":""),"data-destination":"TIMELINE",children:b("React").jsxs("div",{className:"_1sez",children:[b("React").jsx("div",{className:"_1se-",children:b("React").jsx("div",{className:"_1se_"})}),b("React").jsx("div",{className:"_3-w4 _3-w6"}),b("React").jsx("div",{className:"_3-we",onKeyPress:function(a){return a.stopPropagation()},children:b("React").jsx(b("XUIText.react"),{id:d,className:"_3qpq _3qps",size:"header3",children:a.destinationName||b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_TIMELINE})})]},"timelineListItem")},"timelineList")})}),b("React").jsx(b("ReactComposerAudienceSelectorContainer.react"),{audienceXHP:a.audienceXHP,className:"_3-wg",ignoreCollectionAudience:!0,viewerIsTarget:a.viewerIsTarget})]})}e.exports=a}),null);
__d("ReactComposerSharingSpacesSelector.react",["cx","fbt","ComposerDestinationsLoggingUtils","React","ReactComposerAudienceActions","ReactComposerContextTypes","ReactComposerSharingSpacesSelectorStoriesContainer.react","ReactComposerSharingSpacesSelectorTimelineSection.react","SharingSpacesStrings","XUIText.react","uniqueID"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.NUM_INITIAL_SHOWN=10;d.LIST_PAGE_SIZE=10;d.labelID=b("uniqueID")();d.$2=function(){b("ReactComposerAudienceActions").toggleTimelineSelected(d.context.composerID),b("ReactComposerAudienceActions").setCollectionID(d.context.composerID,"COMPOSER_SELECT_TIMELINE_CHOOSE",null,null),b("ComposerDestinationsLoggingUtils").logComposerDestinationsNewsFeedToggled(d.context.composerID)};d.$3=function(){b("ReactComposerAudienceActions").toggleStoriesSelected(d.context.composerID),b("ReactComposerAudienceActions").setCollectionID(d.context.composerID,"COMPOSER_SELECT_TIMELINE_CHOOSE",null,null),b("ComposerDestinationsLoggingUtils").logComposerDestinationsMyStoryToggled(d.context.composerID)};d.$1=new Map();return d}var d=c.prototype;d.$4=function(){return b("React").jsx(b("ReactComposerSharingSpacesSelectorTimelineSection.react"),{headerLabelID:this.labelID,audienceXHP:this.props.config.audienceXHP,destinationName:b("ReactComposerSharingSpacesSelectorStoriesContainer.react")?b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_NEWS_FEED:b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_TIMELINE,onTimelineClicked:this.$2,timelineSelected:this.props.timelineSelected,viewerIsTarget:this.props.config.targetData.viewerIsTarget},"timelineSection")};d.$5=function(){return b("ReactComposerSharingSpacesSelectorStoriesContainer.react")?b("React").jsx(b("ReactComposerSharingSpacesSelectorStoriesContainer.react"),{headerLabelID:this.labelID,onStoriesClicked:this.$3,storiesSelected:this.props.storiesSelected,viewerIsTarget:this.props.config.targetData.viewerIsTarget,composerID:this.context.composerID,privateSharingOn:this.props.config.actorConfig&&this.props.config.actorConfig.privateSharingOn},"storiesSection"):null};d.render=function(){var a=[];this.props.defaultSelection==="STORIES"?a=[this.$5(),this.$4()]:a=[this.$4(),this.$5()];return b("React").jsxs("div",{className:"uiContextualLayerParent","data-testid":"destination-picker",children:[this.context.gks&&this.context.gks.isDestinationPickerTitleVisible?b("React").jsx(b("XUIText.react"),{id:this.labelID,className:"_6vpa",children:h._("Share To")}):null,b("React").jsxs("div",{className:"_26c-",children:[b("React").jsx("ol",{className:"_26bz",children:a}),this.props.footer]})]})};return c}(b("React").Component);a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("ReactComposerFooterWithDestinationPicker.react",["cx","React","ReactComposerContextTypes","ReactComposerPostButtonContainer.react","ReactComposerSharingSpacesSelector.react","XUICardSection.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){var a=this.props.postButtonModule||b("ReactComposerPostButtonContainer.react");a=b("React").jsx(a,{className:"_4r1q",config:this.props.config,forceDisabled:!this.props.storiesSelected&&!this.props.timelineSelected&&this.props.selectedMessengerRecipientEntries.isEmpty(),label:this.props.postButtonLabel});return b("React").jsx("div",{className:"_45wg _69yt",children:a})};d.render=function(){return!this.props.isComposerFocused?null:b("React").jsxs(b("XUICardSection.react"),{className:"_2dck _1pek","data-testid":"react-composer-footer-with-destination-picker",children:[b("React").jsx(b("ReactComposerSharingSpacesSelector.react"),{collections:null,config:this.props.config,defaultSelection:this.context.gks.defaultDestination,selectedCollectionID:null,storiesSelected:this.props.storiesSelected,timelineSelected:this.props.timelineSelected,selectedMessengerRecipientEntries:this.props.selectedMessengerRecipientEntries}),this.$1()]})};return c}(b("React").Component);a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);