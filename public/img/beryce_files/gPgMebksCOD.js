if (self.CavalryLogger) { CavalryLogger.start_js(["YimqT"]); }

__d("OnLiveRHCItemClick",["CurrentUser","WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){a=b("CurrentUser").getID();new(b("WebFunnelLogger"))("LiveBroadcastRHCFunnelDefinition").setAction("live_video_carousel_thumbnail_clicked").setSessionKey(a).log()}}),null);
__d("LiveRHCAutoplayController",["Arbiter","LiveRHCUtils","Run","SubscriptionsHandler","VideoAutoplayControllerX","VideoAutoplayPlayerBase","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=42,h=.5;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(d,e,f){__p&&__p();var g;g=a.call(this)||this;g.$LiveRHCAutoplayController1=new Set();g.$LiveRHCAutoplayController3=d;g.$LiveRHCAutoplayController10=e;g.$LiveRHCAutoplayController8=f;g.$LiveRHCAutoplayController8||g.$LiveRHCAutoplayController1.add("server_blocked");g.$LiveRHCAutoplayController7=new(b("SubscriptionsHandler"))();g.$LiveRHCAutoplayController2=g.isAutoplayable();g.$LiveRHCAutoplayController10.registerOption("LivePlayer","isAutoplaying",function(){return g.$LiveRHCAutoplayController2},function(a){g.$LiveRHCAutoplayController2=a});g.$LiveRHCAutoplayController10.registerOption("LivePlayer","isVisibleForAutoplay",function(){return g.isVisible()});g.$LiveRHCAutoplayController11();b("Run").onLeave(function(){g.$LiveRHCAutoplayController7.release(),g.$LiveRHCAutoplayController4.unsubscribe(),g.$LiveRHCAutoplayController5.unsubscribe(),g.$LiveRHCAutoplayController6.unsubscribe()});g.$LiveRHCAutoplayController10.setLogEntryPropertyGetters({autoplay_eligible:function(){return g.isAutoplayable()},autoplay_failure_reasons:function(){return JSON.stringify(Array.from(g.$LiveRHCAutoplayController1))}});window.addEventListener("blur",function(){g.$LiveRHCAutoplayController12("lost_focus")});window.addEventListener("focus",function(){g.$LiveRHCAutoplayController13("lost_focus")});g.$LiveRHCAutoplayController9=b("VideoAutoplayControllerX").registerVideoUnit(babelHelpers.assertThisInitialized(g));g.$LiveRHCAutoplayController4=b("Arbiter").subscribe(c.ARBITER_COLLAPSED_EVENT_NAME,function(a,b){b.collapsed?(g.$LiveRHCAutoplayController12("collapsed"),g.pause("video_visibility_initiated")):(g.$LiveRHCAutoplayController13("collapsed"),g.isAutoplayable()&&g.playWithoutUnmute("video_visibility_initiated"))});g.$LiveRHCAutoplayController5=b("Arbiter").subscribe(b("LiveRHCUtils"),function(){g.$LiveRHCAutoplayController12("collapsed"),g.pause("video_visibility_initiated")});g.$LiveRHCAutoplayController6=b("Arbiter").subscribe("TahoeController/exitTahoe",function(){g.$LiveRHCAutoplayController13("manually_paused")});return g}var d=c.prototype;d.$LiveRHCAutoplayController14=function(){return this.$LiveRHCAutoplayController10.isState("destroyed")};d.getDistanceToViewport=function(){if(this.$LiveRHCAutoplayController14())return-Infinity;if(this.$LiveRHCAutoplayController10.isFullscreen())return 0;var a=b("getViewportDimensions")().height,c=this.getDOMPosition();if(c.height===0)return-Infinity;c=c.y+(1-h)*c.height;return c-a/2};d.isVisible=function(){if(this.$LiveRHCAutoplayController14())return!1;var a=b("getViewportDimensions")().height,c=b("getViewportDimensions")().width,d=this.getDOMPosition();if(d.height===0)return!1;var e=d.y-g+(1-h)*d.height,f=d.y+h*d.height,i=d.x+(1-h)*d.width;d=d.x+h*d.width;return e<0||f>=a||i<0||d>=c?!1:!0};d.getDOMPosition=function(){return this.$LiveRHCAutoplayController10.getDOMPosition()};d.getVideoPlayerController=function(){return this.$LiveRHCAutoplayController10};d.logDisplayed=function(){this.$LiveRHCAutoplayController10.logEvent("displayed")};d.playWithoutUnmute=function(a){this.$LiveRHCAutoplayController10.play(a)};d.pause=function(a){this.$LiveRHCAutoplayController10.pause(a)};d.preload=function(){this.$LiveRHCAutoplayController10.preload&&this.$LiveRHCAutoplayController10.preload()};d.isLooping=function(){return!1};d.isState=function(a){return this.$LiveRHCAutoplayController10.isState(a)};d.pauseIfInvisible=function(){this.isVisible()||this.pause("video_visibility_initiated")};d.isAutoplayable=function(){return this.$LiveRHCAutoplayController8&&!this.$LiveRHCAutoplayController1.size&&this.isVisible()};d.unregister=function(){this.$LiveRHCAutoplayController9&&this.$LiveRHCAutoplayController9()};d.isMuted=function(){return this.$LiveRHCAutoplayController10.isMuted()};d.isPlaying=function(){return this.$LiveRHCAutoplayController10.isState("playing")};d.shouldPauseWhenScrolledOffscreen=function(){return!0};d.setDimensions=function(a,b){this.$LiveRHCAutoplayController10.setDimensions(a,b)};d.$LiveRHCAutoplayController11=function(){__p&&__p();var a=this,b=[["beginPlayback",function(){return a.$LiveRHCAutoplayController15()}],["TahoeController/exitTahoe",function(){return a.$LiveRHCAutoplayController15()}],["finishPlayback",function(){return a.$LiveRHCAutoplayController16()}],["turnOffAutoplay",function(b){var c=null;b&&(c=b.reason);a.$LiveRHCAutoplayController17(c)}],["resumeAutoplay",function(b){var c=null;b&&(c=b.reason);a.$LiveRHCAutoplayController15(c)}]];this.$LiveRHCAutoplayController7.addSubscriptions.apply(this.$LiveRHCAutoplayController7,b.map(function(b){var c=b[0];b=b[1];return a.$LiveRHCAutoplayController10.addListener(c,b)}))};d.$LiveRHCAutoplayController13=function(a){this.$LiveRHCAutoplayController1["delete"](a),this.$LiveRHCAutoplayController2=this.isAutoplayable()};d.$LiveRHCAutoplayController12=function(a){this.$LiveRHCAutoplayController1.add(a),this.$LiveRHCAutoplayController2=!1};d.$LiveRHCAutoplayController16=function(){this.$LiveRHCAutoplayController12("has_seen_finished")};d.$LiveRHCAutoplayController17=function(a){if(a==="unmuted")return;this.$LiveRHCAutoplayController12((a=a)!=null?a:"manually_paused")};d.$LiveRHCAutoplayController15=function(a){this.$LiveRHCAutoplayController13((a=a)!=null?a:"manually_paused")};d.isRegistered=function(){return this.$LiveRHCAutoplayController9==null};return c}(b("VideoAutoplayPlayerBase"));a.ARBITER_COLLAPSED_EVENT_NAME="LiveRHC/collapsed";e.exports=a}),null);
__d("LiveRHCContent",["Arbiter","LiveRHCAutoplayController"],(function(a,b,c,d,e,f){"use strict";a=function(a){this.$1=b("Arbiter").subscribe(b("LiveRHCAutoplayController").ARBITER_COLLAPSED_EVENT_NAME,function(b,c){a.carousel.forceLayoutUpdate()})};e.exports=a}),null);
__d("LiveRHCUtils",[],(function(a,b,c,d,e,f){"use strict";a="live_rhc_collapse";e.exports=a}),null);
__d("XLiveVideoRHCUpdatePreferencesController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/rhc/update_preferences/",{collapsed:{type:"Bool",defaultValue:!1}})}),null);
__d("LiveRHCOptionsMenu",["Arbiter","AsyncRequest","CSS","LiveRHCAutoplayController","LiveRHCUtils","XLiveVideoRHCUpdatePreferencesController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c,d,e){b("CSS").hide(a);b("CSS").hide(d);b("CSS").show(c);b("Arbiter").inform(b("LiveRHCAutoplayController").ARBITER_COLLAPSED_EVENT_NAME,{collapsed:!0});if(e){a=b("XLiveVideoRHCUpdatePreferencesController").getURIBuilder().setBool("collapsed",!0).getURI();new(b("AsyncRequest"))(a).send()}}a={init:function(a){__p&&__p();b("Arbiter").subscribe(b("LiveRHCUtils"),function(){return g(a.expanded_options_menu_container,a.collapsed_options_menu_container,a.wrapper,!1)}),a.menu.subscribe("itemclick",function(c,d){__p&&__p();switch(d.item.getValue()){case"collapse":g(a.expanded_options_menu_container,a.collapsed_options_menu_container,a.wrapper,!0);break;case"expand":b("CSS").hide(a.collapsed_options_menu_container);b("CSS").show(a.wrapper);b("CSS").show(a.expanded_options_menu_container);b("Arbiter").inform(b("LiveRHCAutoplayController").ARBITER_COLLAPSED_EVENT_NAME,{collapsed:!1});c=b("XLiveVideoRHCUpdatePreferencesController").getURIBuilder().setBool("collapsed",!1).getURI();new(b("AsyncRequest"))(c).send();break}})}};e.exports=a}),null);
__d("LiveVideoEndScreenTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LiveVideoEndScreenLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LiveVideoEndScreenLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LiveVideoEndScreenLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,time:!0,vc:!0,video_id:!0,weight:!0};e.exports=a}),null);
__d("AsyncFormRequestUtils",["Arbiter"],(function(a,b,c,d,e,f){a={subscribe:function(a,c,d){b("Arbiter").subscribe("AsyncRequest/"+c,function(b,c){b=c.request.relativeTo;b&&b===a&&d(c)})}};e.exports=a}),null);
__d("XLiveViewerAsyncDismissNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/viewer/nux/dismiss/",{video_id:{type:"String"},source:{type:"String"}})}),null);
__d("XLiveWatchingAsyncNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/watching/",{video_id:{type:"String"},source:{type:"String"},unmuted:{type:"Bool",defaultValue:!0}})}),null);
__d("LiveVideoIndicatorOverlay",["csx","cx","invariant","AsyncRequest","CSS","DOM","Event","Run","SubscriptionsHandler","XLiveViewerAsyncDismissNuxController","XLiveWatchingAsyncNuxController"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=!1;a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,k){__p&&__p();var l=this;this.$3=a;this.$1=c;this.$4=e;this.$5=a.getVideoID();this.$6=f;this.$7=!1;this.$2=new(b("SubscriptionsHandler"))();this.$2.addSubscriptions(a.addListener("streamInterrupted",this.$8.bind(this)),a.addListener("streamResumed",this.$9.bind(this)),a.addListener("finishPlayback",this.$10.bind(this)),a.addListener("beginPlayback",this.$11.bind(this)),a.addListener("VideoChannelController/enterChannel",this.$12.bind(this)),a.addListener("VideoChannelController/exitChannel",this.$13.bind(this)),a.addListener("TahoeController/enterTahoe",this.$14.bind(this)),a.addListener("TahoeController/exitTahoe",this.$15.bind(this)));if(this.$4!=null){this.$4!=null||i(0,3775);d=b("DOM").scry(this.$4.getContentRoot(),"._36gl")[0];if(!d)return;var m=b("Event").listen(d,"click",function(){m&&(m.remove(),m=null),new(b("AsyncRequest"))().setAllowCrossPageTransition().setURI(b("XLiveViewerAsyncDismissNuxController").getURIBuilder().getURI()).setData({video_id:l.$5,source:l.$3.getSource()}).setHandler(function(){j=!0}).send()})}g==="tahoe"&&this.$14();b("Run").onLeave(function(){return l.$2.release()})}var c=a.prototype;c.$16=function(){var a=this.$3.getSource();return a=="channel"||a=="snowlift"||a=="permalink"?!0:!1};c.$11=function(){var b=this;(this.$6||this.$16())&&setTimeout(function(){return b.$17()},a.DELAY_TO_SHOW_WATCHING_NUX*1e3);this.$18()};c.$14=function(){this.$7=!0;this.$6=!0;this.$19();var a=this.$4;a&&(a.setOffsetX(65),a.setOffsetY(80))};c.$15=function(){this.$7=!1,this.$6=!1,this.$20(),this.$18()};c.$12=function(){this.$6=!0};c.$13=function(){this.$6=!1,this.$20()};c.$17=function(){this.$4&&!j&&this.$4.show(),new(b("AsyncRequest"))().setAllowCrossPageTransition().setURI(b("XLiveWatchingAsyncNuxController").getURIBuilder().getURI()).setData({video_id:this.$5,source:this.$3.getSource(),unmuted:!this.$3.isMuted()}).send()};c.$8=function(){this.$19()};c.$9=function(){this.$18()};c.$19=function(){b("CSS").removeClass(this.$1,"_3rno")};c.$18=function(){if(this.$3.isState("finished")||this.$7)return;b("CSS").addClass(this.$1,"_3rno")};c.$10=function(){this.$19(),this.$20()};c.$20=function(){this.$4&&this.$4.isShown()&&this.$4.hide()};return a}();a.DELAY_TO_SHOW_WATCHING_NUX=8;e.exports=a}),null);
__d("VideoRightButtonBase",["csx","cx","AsyncFormRequestUtils","CSS","DOM","Event","FormSubmit","LayerRefocusOnHide","Run","SubscriptionsHandler","throttle"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,i){__p&&__p();var j=this;this.$1=[];this.$2=c;this.$3=g;this.$4=f;this.$5=a;this.$6=h.hiddenAfterFinish;this.$7=h.hiddenWhilePaused;this.$8=h.allowHide;this.$9=new(b("SubscriptionsHandler"))();this.$10=!1;this.$11=!1;this.$12=!1;this.$13=i;this.$14=!1;if(this.$13){this.$13.disableBehavior(b("LayerRefocusOnHide"));d=b("DOM").scry(this.$13.getContentRoot(),"._36gl")[0];d&&b("Event").listen(d,"click",function(){j.$14=!1,j.$13=null,j.nuxViewClicked()});this.$13.subscribe("hide",function(){j.$14&&j.nuxViewHidden(),j.$14=!1,j.$13=null})}}var c=a.prototype;c.setupAllHandlers=function(){__p&&__p();var a=this,c;this.$9=new(b("SubscriptionsHandler"))();var d=this.$5.getRootNode();b("Run").onLeave(function(){a.$9.release()});this.$9.addSubscriptions((c=b("Event")).listen(d,"mousemove",b("throttle")(function(){return a.$15()},200)),c.listen(d,"mouseenter",function(){if(a.$6&&a.$11||a.$7&&a.$12)return;a.$16=!0;a.$15();a.$13&&(a.$13.show(),a.$14=!0)}),c.listen(d,"mouseleave",function(){a.$17(),a.$16=!1}),this.$5.addListener("beginPlayback",function(){a.$11=!1,a.$12=!1}),this.$5.addListener("finishPlayback",function(){a.$17(),a.$11=!0}),this.$5.addListener("pausePlayback",function(){a.$17(),a.$12=!0}));c.listen(this.$2,"click",function(){a.$18&&clearTimeout(a.$18),a.$1.length===0&&(a.$3.setAttribute("value",a.nextActionOnToggle(a.$10)),b("FormSubmit").send(a.$4)),a.$10?(a.toggleSwitchOffAnimation(a.$2),a.$1.push(!1),a.$10=!1):(a.toggleSwitchOnAnimation(a.$2),a.$1.push(!0),a.$10=!0)});d=function(c){c=a.$3.getAttribute("value")===a.nextActionOnToggle(!0);if(a.$1.length>1){var d=a.$1[a.$1.length-1];d=d;(c&&!d||!c&&d)&&(a.$3.setAttribute("value",a.nextActionOnToggle(d)),b("FormSubmit").send(a.$4))}a.$1=[]};b("AsyncFormRequestUtils").subscribe(this.$4,"response",d)};c.$17=function(){!this.$14&&this.$8&&b("CSS").addClass(this.$2,"_55c1")};c.$15=function(){var a=this;this.$16&&(b("CSS").removeClass(this.$2,"_55c1"),clearTimeout(this.$19),this.$19=setTimeout(function(){return a.$17()},3e3))};c.toggleSwitchOnAnimation=function(){throw new Error("This should be overwritten by children")};c.toggleSwitchOffAnimation=function(){throw new Error("This should be overwritten by children")};c.nextActionOnToggle=function(a){throw new Error("This should be overwritten by children")};c.nuxViewClicked=function(){throw new Error("This should be overwritten by children")};c.nuxViewHidden=function(){throw new Error("This should be overwritten by children")};return a}();e.exports=a}),null);
__d("XLiveSubscribeAsyncNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/subscribe/nux/",{action:{type:"String"},video_id:{type:"String"}})}),null);
__d("VideoLiveFollowButton",["cx","fbt","AsyncRequest","CSS","DOM","VideoRightButtonBase","XLiveSubscribeAsyncNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c,d,e,f,g,h,i,j,k){__p&&__p();g=a.call(this,b,c,d,f,g,h,i,k)||this;g.$VideoLiveFollowButton1=d;g.$VideoLiveFollowButton2=f;g.$VideoLiveFollowButton3=e;g.$VideoLiveFollowButton4=h.getAttribute("value")==="unsubscribe";g.$VideoLiveFollowButton4?g.setSwitchOnState(c):g.setSwitchOffState(c);g.$VideoLiveFollowButton5=b.getVideoID();g.setupAllHandlers();g.$VideoLiveFollowButton6=j;return g}var d=c.prototype;d.nuxViewClicked=function(){this.sendNuxSeenRequest("dismiss")};d.sendNuxSeenRequest=function(a){new(b("AsyncRequest"))().setURI(b("XLiveSubscribeAsyncNuxController").getURIBuilder().getURI()).setData({action:a,video_id:this.$VideoLiveFollowButton5}).send()};d.nuxViewHidden=function(){this.sendNuxSeenRequest("hide")};d.setSwitchOffState=function(a){var c=h._("Live Notifications");b("CSS").removeClass(a,"_-kc");b("CSS").show(this.$VideoLiveFollowButton3);b("CSS").removeClass(this.$VideoLiveFollowButton1,"_knu");b("DOM").setContent(this.$VideoLiveFollowButton2,c)};d.setSwitchOnState=function(a){var c=h._("Live Notifications");b("CSS").addClass(a,"_-kc");b("CSS").hide(this.$VideoLiveFollowButton3);b("CSS").addClass(this.$VideoLiveFollowButton1,"_knu");b("DOM").setContent(this.$VideoLiveFollowButton2,c)};d.nextActionOnToggle=function(a){if(a)return"unsubscribe";else return"subscribe"};d.toggleSwitchOnAnimation=function(a){this.setSwitchOnState(a)};d.toggleSwitchOffAnimation=function(a){this.setSwitchOffState(a)};return c}(b("VideoRightButtonBase"));e.exports=a}),null);
__d("LiveVideoEndScreenCTAs.react",["cx","ProfileTile.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=130;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){var a;return(a=b("React")).jsxs("div",{className:"_2219",children:[a.jsx("div",{className:"_221a",children:a.jsx(b("ProfileTile.react"),{id:this.props.ownerID,imageProps:{className:"_2240"},size:h})}),a.jsx("div",{className:"_2241",children:this.props.ownerName})]})};d.render=function(){return!this.props.shouldShow?null:this.$1()};return c}(b("React").Component);e.exports=a}),null);
__d("LiveVideoEndScreenConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTIONS:{SET_THUMBNAILS:"SET_THUMBNAILS"}};e.exports=a}),null);
__d("LiveVideoEndScreenDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("XLiveVideoTopBroadcastThumbnailController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video_broadcast/top_broadcast_thumbnails/",{video_id:{type:"FBID"},thumbnail_count:{type:"Int",defaultValue:2}})}),null);
__d("LiveVideoEndScreenThumbnails.react",["AsyncRequest","DOMContainer.react","React","XLiveVideoTopBroadcastThumbnailController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){c=a.call(this,c)||this;var d=b("XLiveVideoTopBroadcastThumbnailController").getURIBuilder().setFBID("video_id",c.props.videoController.getVideoID()).setInt("thumbnail_count",3).getURI();new(b("AsyncRequest"))(d).send();return c}var d=c.prototype;d.$1=function(){__p&&__p();if(!this.props.thumbnails)return null;var a=[];for(var c=this.props.thumbnails,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;a.push(b("React").jsx(b("DOMContainer.react"),{children:f},f.href))}return a};d.render=function(){return this.props.videoController.getIsInChannel()||this.props.videoController.getSource()==="watch_scroll"?null:b("React").jsx("div",{children:this.$1()})};return c}(b("React").Component);e.exports=a}),null);
__d("LiveVideoEndScreenUIStore",["FluxMapStore","LiveVideoEndScreenConstants","LiveVideoEndScreenDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("LiveVideoEndScreenConstants").ACTIONS;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return b("immutable").Map({thumbnails:null})};d.reduce=function(a,b){switch(b.type){case g.SET_THUMBNAILS:a=a.set("thumbnails",b.value);break;default:break}return a};return c}(b("FluxMapStore"));a.__moduleID=e.id;e.exports=new a(b("LiveVideoEndScreenDispatcher"))}),null);
__d("LiveVideoEndScreenThumbnailsContainer.react",["FluxContainer","LiveVideoEndScreenDispatcher","LiveVideoEndScreenThumbnails.react","LiveVideoEndScreenUIStore","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);c.getStores=function(){return[b("LiveVideoEndScreenUIStore")]};c.calculateState=function(){var a=b("LiveVideoEndScreenUIStore").getState().toObject();a=a.thumbnails;return{thumbnails:a}};function c(c){c=a.call(this,c)||this;b("LiveVideoEndScreenDispatcher").explicitlyRegisterStores([b("LiveVideoEndScreenUIStore")]);return c}var d=c.prototype;d.render=function(){return b("React").jsx(b("LiveVideoEndScreenThumbnails.react"),{thumbnails:this.state.thumbnails,videoController:this.props.videoController})};return c}(b("React").Component);e.exports=b("FluxContainer").create(a)}),null);
__d("VideoLiveEndscreen",["cx","CSS","LiveMapEntryPointsLoggerController","LiveVideoEndScreenCTAs.react","LiveVideoEndScreenThumbnailsContainer.react","LiveVideoEndScreenTypedLogger","React","ReactDOM","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,i,j,k){this.$4=!1,this.$3=a,this.$1=c,this.$4=d,this.$5=e,this.$6=f,this.$7=g,this.$8=h,this.$9=i,this.$10=j,this.$11=k,this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(a.addListener("beginPlayback",this.$12.bind(this)),a.addListener("finishPlayback",this.$13.bind(this)),a.addListener("playRequested",this.$14.bind(this)),a.addListener("VideoChannelController/exitChannel",this.$15.bind(this)),a.addListener("enterWatchAndScroll",this.$16.bind(this)),a.addListener("exitWatchAndScroll",this.$17.bind(this)),a.addListener("blockVideo",this.$18.bind(this))),a.registerOption("VideoLiveEndscreen","enabled",function(){return!0})}var c=a.prototype;c.$12=function(){b("CSS").hide(this.$1)};c.$13=function(){this.$4&&b("LiveMapEntryPointsLoggerController").logEndscreenImpression(),new(b("LiveVideoEndScreenTypedLogger"))().setEvent("screen_shown").setVideoID(this.$3.getVideoID()).log(),b("CSS").show(this.$1),this.$5&&b("ReactDOM").render(b("React").jsx(b("LiveVideoEndScreenThumbnailsContainer.react"),{videoController:this.$3}),this.$5),this.$8&&b("ReactDOM").render(b("React").jsx(b("LiveVideoEndScreenCTAs.react"),{ownerID:this.$6,ownerName:this.$7,shouldShow:this.$3.getIsInChannel()}),this.$8)};c.$14=function(){b("CSS").hide(this.$1)};c.$16=function(){this.$9&&b("CSS").addClass(this.$9,"_6qhs")};c.$17=function(){this.$9&&b("CSS").removeClass(this.$9,"_6qhs")};c.$15=function(){this.$8&&b("ReactDOM").unmountComponentAtNode(this.$8)};c.$18=function(){b("CSS").show(this.$1),this.$11&&b("CSS").show(this.$11),this.$10&&b("CSS").hide(this.$10)};return a}();e.exports=a}),null);
__d("VideoLiveInterruptedScreen",["CSS","SubscriptionsHandler","VideoPlayerHTML5Experiments","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("VideoPlayerHTML5Experiments").displayInterruptedScreenDelay;a=function(){__p&&__p();function a(a,c){this.$4=null,this.$3=a,this.$1=c,this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(a.addListener("streamInterrupted",this.$5.bind(this)),a.addListener("streamResumed",this.$6.bind(this)))}var c=a.prototype;c.$5=function(){var a=this;g?(b("clearTimeout")(this.$4),this.$4=b("setTimeout")(function(){b("CSS").show(a.$1)},g)):b("CSS").show(this.$1)};c.$6=function(){g&&b("clearTimeout")(this.$4),b("CSS").hide(this.$1)};return a}();e.exports=a}),null);