if (self.CavalryLogger) { CavalryLogger.start_js(["aqxVA"]); }

__d("VideoPlayerFormatsMap",[],(function(a,b,c,d,e,f){e.exports={live_map:"inline",live_map_sidebar:"inline",live_map_listview:"inline",live_map_tooltip:"inline",live_map_tooltip_from_listview:"inline",live_map_tooltip_from_map:"inline",video_home_inline:"inline",inline:"inline",chained:"inline",page_live_video_module:"inline",chained_suggestion:"inline",embedded_video:"inline",embedded_video_preview:"inline",embedded_video_from_ufi:"inline",ufi_comment_attachment:"inline",media_collage:"inline",channel:"channel",watch:"watch",permalink:"permalink",snowlift:"snowlift",tv:"tv",watch_scroll:"watch_scroll",continue_watching_recommendation:"inline",tahoe:"tahoe",search_live_video_module:"inline",videohub_live:"inline",camera_post:"fb_stories",pages_cover:"inline",video_page_spotlight_unit:"inline",pages_cover_hover:"inline",pages_messaging_video:"inline",profile_overview:"inline",profile_cover:"inline",memory_leak_test:"inline",games_video_home_streamer_hub:"inline",games_video_live_recommendation:"inline",games_video_search_unit:"inline",games_video_streamer_unit:"inline",trivia_game_admin_dashboard:"misc",games_streamer_dashboard:"inline",games_video_clips_home:"inline",games_video_clips_home_immersive_player:"inline",ads_preview:"inline",discover:"inline",business_feed:"inline",sotto_consideration_page:"inline",series_card:"inline",video_list:"inline",work_captions_review:"inline",live_pyml:"inline",ads:null,animated_image_share:null,asset:null,aymt:null,ballot:null,biz_art:null,broadcast_request_attachment:null,candidate_videos:null,channel_tab_latest_videos_card:null,channel_tab_live_video_card:null,channel_tab_all_videos_card:null,channel_tab_playlists_card:null,corporate_card_application:null,dim_sum:null,embedded:null,embedded_page_plugin:null,entry_point:null,gameroom_live_video_hero_banner:null,gameroom_live_video_tab:null,gameroom_live_video_thumbnail:null,games_verse_destination:null,games_video_clips_home_top_clips:null,games_video_clips_home_my_clips:null,games_video_community_feed:null,games_video_home:null,games_video_home_hero:null,games_video_single_game:null,games_video_top_weekly_clips_streamer_page:null,games_video_highlighted_clips_streamer_page:null,games_video_social_plugin:null,games_video_hub:null,games_video_hub_redirect_notification:null,games_video_hub_redirect_unknown:null,group_live_video_module:null,html5:null,insights:null,intern_crm_call_recording:null,intern_curation:null,intern_example:null,issues_module:null,live_beeper:null,live_control_panel:null,live_linear:null,live_map_tooltip_from_webgl:null,live_rhc:null,live_video_broadcast:null,live_video_preview:null,live_msite:null,living_room:null,living_room_commentating:null,living_room_recap_fullscreen:null,living_room_recap_inline:null,lookback:null,messaging:null,misc:null,mobile:null,movies_recommended_movies_qp:null,not_specified_please_fix:null,offers_detail:null,page_roles:null,pages_finch_main_video:null,pages_finch_thumbnail_video:null,pages_finch_trailer:null,pages_video_set:null,pages_timeline_pages_cover:null,pages_home_hero:null,video_page_video_list:null,people_portal:null,profile_video:null,profile_video_hovercard:null,profile_video_thumb:null,report_flow:null,review:null,serp_videos_tab:null,slideshow:null,srt_review:null,topic_channel_living_room:null,topic_gaming:null,trailer_og_attachment:null,trailer_timeline_collections:null,trailer_timeline_unit:null,user_video_tab:null,video_copyright_preview:null,video_home_catalog:null,topic_sports:null,explore:null,video_home_channel:null,video_home_live_tab:null,watchlist:null,video_inline_chaining:null,videohub_featured:null,videohub_playlist:null,live_autoplay_watch_and_scroll:null,video_page_unspecified:null,spotlight_live:null,spotlight_featured:null,spotlight_popular:null,spotlight_unknown:null,videos_card:null,videos_tab:null,playlists_tab:null,playlists_card:null,playlist_page:null,redirected_watch_serp:null,shows_catalog:null,sotto_catalog:null,results:null,watch_history:null,music_videos_playlists_card:null,media_match_service:null}}),null);
__d("VideoQualityClassInternal",[],(function(a,b,c,d,e,f){e.exports={orderedValues:["sd","hd","uhd"]}}),null);
__d("dispatchEvent",[],(function(a,b,c,d,e,f){function b(b,c){var d;typeof a.Event==="function"?d=new a.Event(c):(d=a.document.createEvent("Event"),d.initEvent(c,!0,!0));b.dispatchEvent(d)}e.exports=b}),null);
__d("TimeRanges",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=[],this.$1=a}var b=a.prototype;b.start=function(a){this.$1[a]||g(0,2205);return this.$1[a].startTime};b.end=function(a){this.$1[a]||g(0,2205);return this.$1[a].endTime};b.length=function(){return this.$1.length};return a}();e.exports=a}),null);
__d("XVideoDataAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/video_data_async/",{video_id:{type:"String",required:!0},width:{type:"Int"},height:{type:"Int"},scrubbing_preference:{type:"Int"},source:{type:"String"},preferred_projection:{type:"Enum",enumType:1},supports_html5_video:{type:"Bool",defaultValue:!0},is_ad:{type:"Bool",defaultValue:!1},force_flash:{type:"Bool",defaultValue:!1},is_omnistab_preview_select_revert:{type:"Bool",defaultValue:!1},allow_dash_prefetch:{type:"Bool",defaultValue:!1},force_hd:{type:"Bool",defaultValue:!1},host_number:{type:"Int"},include_extra_drm_info:{type:"Bool",defaultValue:!0}})}),null);
__d("VideoDataAsyncControllerUri",["XVideoDataAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){}var c=a.prototype;c.getURI=function(a,c,d,e,f,g,h,i){a=b("XVideoDataAsyncController").getURIBuilder().setString("video_id",a.toString()).setBool("supports_html5_video",c);d!==void 0&&(a=a.setBool("force_flash",d));e!==void 0&&(a=a.setBool("allow_dash_prefetch",e));f!==void 0&&(a=a.setBool("force_hd",f));g!==void 0&&(a=a.setInt("host_number",g));h!==void 0&&(a=a.setBool("include_extra_drm_info",h));i!==void 0&&(a=a.setString("source",i));return a.getURI()};return a}();e.exports=a}),null);
__d("VideoData",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a||{aspect_ratio:0,original_height:0,original_width:0,video_id:""}}var b=a.prototype;b.hasHD=function(){return!!this.$1.hd_src};b.getP2PSettings=function(){return this.$1.p2p_settings};b.getEncodingTag=function(){return this.$1.encoding_tag};b.getContentCategory=function(){return this.$1.content_category};b.getVideoID=function(){return this.$1.video_id};b.getVideoURL=function(){return this.$1.video_url};b.getAspectRatio=function(){return this.$1.aspect_ratio};b.getRotation=function(){return this.$1.rotation||0};b.hasSubtitles=function(){return!!this.$1.subtitles_src};b.hasDashManifest=function(){return!!this.$1.dash_manifest};b.getDashManifest=function(){return this.$1.dash_manifest};b.getDashPrefetchedRepresentationIDs=function(){return this.$1.dash_prefetched_representation_ids};b.getSubtitlesSrc=function(){this.$1.subtitles_src||g(0,1109);return this.$1.subtitles_src};b.getPlayableSrcSD=function(){return this.$1.sd_src_no_ratelimit?this.$1.sd_src_no_ratelimit:this.getPlayableSrcRateLimitedSD()};b.getPlayableSrcHD=function(){return this.$1.hd_src_no_ratelimit?this.$1.hd_src_no_ratelimit:this.getPlayableSrcRateLimitedHD()};b.getPlayableSrcRateLimitedSD=function(){return this.$1.sd_src};b.getPlayableSrcRateLimitedHD=function(){return this.$1.hd_src};b.getLiveManifestUrl=function(){this.isLiveStream()||g(0,1110);return this.getPlayableSrcRateLimitedSD()};b.hasRateLimit=function(){return!!this.$1.sd_src_no_ratelimit};b.getStreamType=function(){this.$1.stream_type||g(0,1111);return this.$1.stream_type};b.isBroadcast=function(){return!!this.$1.is_broadcast};b.isServableViaFbms=function(){return!!this.$1.is_servable_via_fbms};b.isLiveStream=function(){return!!this.$1.is_live_stream};b.isHls=function(){return!!this.$1.is_hls};b.isGaming=function(){return this.$1.content_category==="gaming"};b.isLowLatency=function(){return!!this.$1.is_low_latency};b.getDesiredLatencyMs=function(){return this.$1.desired_latency_ms};b.getLatencyToleranceMs=function(){return this.$1.latency_tolerance_ms};b.isPredictiveDash=function(){return!!this.$1.is_predictive_dash};b.isFacecastAudio=function(){return!!this.$1.is_facecast_audio};b.liveRoutingToken=function(){return this.$1.live_routing_token};b.getHDTag=function(){return this.$1.hd_tag};b.getSDTag=function(){return this.$1.sd_tag};b.getProjection=function(){return this.$1.projection};b.getPlayerVersionOverwrite=function(){return this.$1.player_version_overwrite};b.getFalloverData=function(){var b=this.$1.fallover_data;return b?b.map(function(b){return new a(b)}):[]};b.getSphericalConfig=function(){return this.$1.spherical_config};b.isSpherical=function(){return!!this.$1.is_spherical};b.getOriginalHeight=function(){return this.$1.original_height};b.getOriginalWidth=function(){return this.$1.original_width};b.getOverrideConfig=function(){return this.$1.override_config};b.getRawData=function(){return this.$1};b.getPrefetchCache=function(){return this.$1.prefetch_cache};b.getWidevineCert=function(){return this.$1.widevine_cert};b.getFairplayCert=function(){return this.$1.fairplay_cert};b.getDRMHelper=function(){var a;return(a=this.$1)==null?void 0:(a=a.extra_drm_info)==null?void 0:a.drm_helper};b.getGraphApiVideoLicenseUri=function(){var a;return(a=this.$1)==null?void 0:(a=a.extra_drm_info)==null?void 0:a.graph_api_video_license_uri};b.getVideoLicenseUriMap=function(){var a;return(a=this.$1)==null?void 0:(a=a.extra_drm_info)==null?void 0:a.video_license_uri_map};b.isLiveTraceEnabledOnPlayer=function(){return!!this.$1.is_live_trace_enabled_on_player};b.getManifestServiceParam=function(){var a;return(a=this.$1)==null?void 0:a.ms_param};return a}();e.exports=a}),null);
__d("VideoMimeTypes",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){return a+'; codecs="'+b+", "+c+'"'}f="mp4a.40.2";function b(a){return"avc1.42E0"+a.toString(16).toUpperCase()}function c(a){return"avc1.4D40"+a.toString(16).toUpperCase()}function d(a){return"avc1.6400"+a.toString(16).toUpperCase()}var g="video/mp4";b={h264baseline:a(g,b(30),f),h264main30avc:a(g,c(30),f),h264main31avc:a(g,c(31),f),h264high50avc:a(g,d(50),f),h264high51avc:a(g,d(51),f)};e.exports=b}),null);
__d("canVideoPlayType",["DOM"],(function(a,b,c,d,e,f){var g=null;function a(a){g=g||b("DOM").create("video");return!("canPlayType"in g)?"":g.canPlayType(a)}e.exports=a}),null);
__d("supportsHTML5Video",["DOM","memoize"],(function(a,b,c,d,e,f){e.exports=b("memoize")(function(){return!!b("DOM").create("video").canPlayType})}),null);
__d("isHTML5VideoImplementationUnavailable",["VideoMimeTypes","canVideoPlayType","supportsHTML5Video"],(function(a,b,c,d,e,f){a=function(a){if(a){a=b("canVideoPlayType")(b("VideoMimeTypes").h264main30avc);return a!=="probably"}return!b("supportsHTML5Video")()};e.exports=a}),null);
__d("VideoPlayerMetaData",["regeneratorRuntime","Promise","AsyncRequest","TimeSlice","VideoData","VideoDataAsyncControllerUri","clearTimeout","isHTML5VideoImplementationUnavailable","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h=12e4;a=function(){__p&&__p();function a(a){this.videoID=a}var c=a.prototype;c.getVideoID=function(){return this.videoID};c.genVideoData=function(a,c){__p&&__p();var d=this,e;return b("regeneratorRuntime").async(function(f){__p&&__p();while(1)switch(f.prev=f.next){case 0:a===void 0&&(a={});f.prev=1;e=this.$1;(!e||a.forceRefetch)&&(this.$2&&(b("clearTimeout")(this.$2),this.$2=null),e=this.$1=this.$3(a),this.$2=b("setTimeout")(b("TimeSlice").guard(function(){d.$1=null,c()},"VideoPlayerMetaData cacheTimeout",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),a.cacheTimeout||h));f.next=6;return b("regeneratorRuntime").awrap(e);case 6:return f.abrupt("return",f.sent);case 9:f.prev=9;f.t0=f["catch"](1);throw f.t0;case 12:case"end":return f.stop()}},null,this,[[1,9]])};c.$3=function(a){a.uriBuilder===void 0&&(a.uriBuilder=new(b("VideoDataAsyncControllerUri"))());var c=a.forceFlash,d=a.allowDashPrefetch,e=a.forceHD,f=a.hostNumber,g=a.includeExtraDRMInfo,h=a.source;a=a.uriBuilder;var i=a.getURI(this.videoID,!b("isHTML5VideoImplementationUnavailable")(!0),c,d,e,f,g,h);return new(b("Promise"))(function(a,c){new(b("AsyncRequest"))(i).setMethod("GET").setURI(i).setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(d){d=d.payload;!d.error?a(new(b("VideoData"))(d)):c(d.error)}).setErrorHandler(function(a){c(a.getErrorDescription())}).send()})};a.get=function(b){g[b]||(g[b]=new a(b));return g[b]};a.genVideoData=function(c,d,e){return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:d===void 0&&(d={});e===void 0&&(e=function(){});f.next=4;return b("regeneratorRuntime").awrap(a.get(c).genVideoData(d,e));case 4:return f.abrupt("return",f.sent);case 5:case"end":return f.stop()}},null,this)};return a}();e.exports=a}),null);
__d("VideoQualityClasses",["VideoQualityClassInternal"],(function(a,b,c,d,e,f){e.exports=b("VideoQualityClassInternal").orderedValues}),null);
__d("VideoPlayerApiEvents",[],(function(a,b,c,d,e,f){a=["buffered","buffering","bufferingProgress","beginPlayback","updateStatus","logEvent","pausePlayback","playbackNotAllowed","clickVideo","clickForTracking","finishPlayback","unmuteVideo","muteVideo","changeVolume","turnOffAutoplay","updateBuffer","updateMetadata","qualityChange","updateViewportBegin","updateViewportMove","updateViewportEnd","dimensionsChange","viewportChange","wheelScroll","error","loadedSubtitles","toggleSubtitles","captionsAvailabilityChanged","toggleFullscreen","seekEnd","seekRangeChanged","streamInterrupted","streamResumed","networkInterrupted","networkResumed","debug/dashPlayerEvent","abortedLoading","restoringAfterAbort","restoredAfterAbort","sphericalOrientationChange","videoNodeStaled","replicaSwitch"];e.exports=a}),null);
__d("VideoPlayerWindowUtils",[],(function(a,b,c,d,e,f){a={WebKitMediaKeys:window.WebKitMediaKeys};e.exports=a}),null);
__d("getErrorMessageFromMediaErrorCode",[],(function(a,b,c,d,e,f){"use strict";function a(a){switch(a){case 1:return"The fetching process for the media resource was aborted by the user agent at the users request.";case 2:return"A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";case 3:return"An error of some description occurred while decoding the media resource, after the resource was established to be usable.";case 4:return"The media resource indicated by the src attribute was not suitable."}return null}e.exports=a}),null);
__d("getErrorNameFromMediaErrorCode",[],(function(a,b,c,d,e,f){"use strict";function a(a){switch(a){case 1:return"MEDIA_ERR_ABORTED";case 2:return"MEDIA_ERR_NETWORK";case 3:return"MEDIA_ERR_DECODE";case 4:return"MEDIA_ERR_SRC_NOT_SUPPORTED";default:return"MEDIA_ERR_UNKNOWN_"+((a=a)!=null?a:"UNDEFINED")}}e.exports=a}),null);
__d("CVCv3DisabledPlayerOrigins",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BEEPER:"beeper",FB_STORIES:"fb_stories"})}),null);
__d("CVCv3DisabledPlayerSubOrigins",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LIVE_BEEPER:"live_beeper"})}),null);
__d("CVCv3SubscriptionHelper",["DateConsts","guid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DateConsts").MS_PER_SEC;a=function(){__p&&__p();function a(a,c,d){this.$1=a;this.$2=b("guid")();this.$3=((a=c)!=null?a:"null")+"::"+((c=d)!=null?c:"null");this.$4=null}var c=a.prototype;c.isValidSubscription=function(){return!!this.$1};c.makeCVCv3StateUpdate=function(a,b,c,d){var e=null;a!=null&&!Number.isNaN(a)&&b!=null&&!Number.isNaN(b)&&(e={m:d,pf:Math.floor((b-a)*g),s:c,sa:Math.floor(a*g)});d={pps:this.$4,ps:e,si:this.$2,so:this.$3,vi:this.$1};this.$4=e;return d};c.makeUnifiedVideoCVCUpdate=function(a,b,c,d,e){a=this.makeCVCv3StateUpdate(a,b,c,d);return Object.assign({},a,e)};c.clearAnyPreviousContext=function(){this.$4=null};return a}();e.exports=a}),null);
__d("XVideoCVCController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/cvc/",{raw:{type:"Bool",defaultValue:!1}})}),null);
__d("XVideoUnifiedCVCController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/unified_cvc/",{})}),null);
__d("CVCv3VideoControllerHelper",["AsyncRequest","CVCv3DisabledPlayerOrigins","CVCv3DisabledPlayerSubOrigins","CVCv3SubscriptionHelper","DateConsts","Run","SubscriptionsHandler","XVideoCVCController","XVideoUnifiedCVCController","clearTimeout","gkx","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DateConsts").MS_PER_SEC,h=10,i=Object.values(b("CVCv3DisabledPlayerOrigins")),j=Object.values(b("CVCv3DisabledPlayerSubOrigins"));a=function(){__p&&__p();function a(a,c){__p&&__p();var d=this;this.$24=function(){d.$11=null,d.$23(),d.$21(0)};this.$14=c;this.$2=new(b("CVCv3SubscriptionHelper"))(a.getVideoID(),a.getPlayerOrigin(),a.getPlayerSuborigin());this.$1=a;this.$3=null;this.$4=!1;this.$5=!1;this.$7=null;this.$8=null;this.$12=!this.$2.isValidSubscription();this.$6=new(b("SubscriptionsHandler"))();this.$6.addSubscriptions(a.addListener("beginPlayback",this.$15.bind(this)),a.addListener("pausePlayback",this.$16.bind(this)),a.addListener("finishPlayback",this.$17.bind(this)),a.addListener("updateStatus",this.$18.bind(this)));this.$14||a.registerOption("UnifiedCVC","cvcData",function(){return d.$13});b("Run").onLeave(function(){return d.leave()})}var c=a.prototype;c.leave=function(){this.$6.release(),!this.$14&&this.$1.hasOption("UnifiedCVC","cvcData")&&this.$1.unregisterOption("UnifiedCVC","cvcData")};c.$15=function(){if(!this.$1.isState("playing"))return;this.$3=null;this.$4=!1};c.$16=function(){this.$3=null,this.$4=!1};c.$17=function(){this.$3=null,this.$4=!1};c.$18=function(a){this.$1.isState("playing")&&(this.$3==null&&(this.$3=a.position),this.$5&&!this.$4&&this.$3+3<a.position&&(this.$1.logEvent("played_for_three_seconds"),this.$4=!0))};c.generateStateUpdateRequest=function(){var a=this.$2.makeCVCv3StateUpdate(this.$3,this.$1.getCurrentTimePosition(),this.$1.getVideoState(),this.$1.isMuted());a={d:JSON.stringify(a)};return new(b("AsyncRequest"))().setMethod("POST").setURI(b("XVideoCVCController").getURIBuilder().getURI()).setReadOnly(!0).setData(a)};c.setLinearChannelID=function(a){this.$7=a};c.setLivingRoomSessionID=function(a){this.$8=a};c.setHandlePlayedFor3SecondsEvent=function(a){this.$5=a};c.startUnifiedCVC=function(){if(this.$19()||this.$20())return;var a=!1;this.$8!=null&&(a=b("gkx")("1113562"));a||(a=this.$1.isLiveVideo()?b("gkx")("1104104"):b("gkx")("1104105"));if(!a)return;this.$21(0)};c.stopUnifiedCVC=function(){this.$22()};c.$19=function(){return i.includes(this.$1.getPlayerOrigin())};c.$20=function(){return j.includes(this.$1.getPlayerSuborigin())};c.$22=function(){b("clearTimeout")(this.$10),b("clearTimeout")(this.$9),this.$10=null,this.$9=null,this.$2.clearAnyPreviousContext(),this.$11!=null&&(this.$11.abandon(),this.$11=null)};c.$23=function(){b("clearTimeout")(this.$9),this.$9=null};c.$21=function(a){__p&&__p();var c=this;if(this.$10!=null||this.$11!=null||this.$12)return;this.$10=b("setTimeout")(function(){c.$10=null;var a=c.$25();a.setHandler(function(a){c.$26(a)});c.$11=a;a.send();c.$9=b("setTimeout")(c.$24,h*g)},a)};c.$26=function(a){__p&&__p();if(a.getRequest()!==this.$11)return;this.$11=null;a=a.payload;if(a!=null){this.$23();this.$13=a.d;a.d!=null&&this.$1.emit("unifiedCVC/update",a.d);if(a.a!=null){var b=a.a.t;switch(b){case"p":b=a.a.pi;b==null&&(b=h);this.$21(b*g);break;case"s":this.$12=!0;break}}}};c.$25=function(){var a={};this.$7!=null&&(a.lc=this.$7);this.$8!=null&&(a.lr=this.$8);this.$1.isLiveVideo()&&(a.ls=!0,a.pc=!0);var c=0,d=0;this.$3!=null&&(c=this.$3,d=this.$1.getCurrentTimePosition());c=this.$2.makeUnifiedVideoCVCUpdate(c,d,this.$1.getVideoState(),this.$1.isMuted(),a);d={d:JSON.stringify(c)};return new(b("AsyncRequest"))().setMethod("POST").setURI(b("XVideoUnifiedCVCController").getURIBuilder().getURI()).setReadOnly(!0).setData(d)};return a}();e.exports=a}),null);
__d("VideoPlaybackQuality",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().droppedVideoFrames;a=a.webkitDroppedFrameCount;return typeof a==="number"?a:0}function b(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().totalVideoFrames;a=a.webkitDecodedFrameCount;return typeof a==="number"?a:0}e.exports={getDroppedFrames:a,getTotalFrames:b}}),null);
__d("VideoPlayerConnectionQuality",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={POOR:"POOR",MODERATE:"MODERATE",GOOD:"GOOD",EXCELLENT:"EXCELLENT"},h=[{bandwidth:5e5,connectionQuality:g.POOR},{bandwidth:2e6,connectionQuality:g.MODERATE},{bandwidth:1e7,connectionQuality:g.GOOD}],i=100,j=null,k=null;a={evaluate:function(a){__p&&__p();if(j!==null&&k!==null&&j>=Date.now()-i)return k;a=a();var b=null;for(var c=0;c<h.length;c++)if(a<h[c].bandwidth){b=h[c].connectionQuality;break}b===null&&(b=g.EXCELLENT);j=Date.now();k=b;return b}};e.exports=a}),null);
__d("VideoPlayerQualitiesArray",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a}function g(a){a=a.length>0?a[a.length-1]:void 0;return a}function h(a){a=a.length>0?a[0]:void 0;return a}function b(a){return a.length>1}function i(a,b){a=g(a);return a!=null&&b!=null&&b===a}function c(a,b){var c=h(a),d=g(a);if(i(a,b)){if(c!=null)return c}else if(d!=null)return d;return void 0}e.exports={ensureVideoPlayerQualitiesArray:a,getHighestVideoQuality:g,getLowestVideoQuality:h,getPreferredVideoQualityForToggleHD:c,hasHDVideoQuality:b,isHDSelectedVideoQuality:i}}),null);
__d("VideoPlayerUIComponentDrawer",["EventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.$VideoPlayerUIComponentDrawer1=b;d.$VideoPlayerUIComponentDrawer2=c;d.$VideoPlayerUIComponentDrawer4=!1;return d}var c=b.prototype;c.reserve=function(){if(this.$VideoPlayerUIComponentDrawer4)return;this.$VideoPlayerUIComponentDrawer4=!0;this.emit("reserve")};c.release=function(){if(!this.$VideoPlayerUIComponentDrawer4)return;this.$VideoPlayerUIComponentDrawer4=!1;this.emit("release")};c.getPriority=function(){return this.$VideoPlayerUIComponentDrawer1};c.getHeight=function(){return this.$VideoPlayerUIComponentDrawer2};c.setHeight=function(a){this.$VideoPlayerUIComponentDrawer2=a,this.emit("heightChange")};c.emit=function(b){var c;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];b==="reposition"&&(this.$VideoPlayerUIComponentDrawer3=e[0]);(c=a.prototype.emit).call.apply(c,[this,b].concat(e))};c.reposition=function(){this.emit("reposition",this.$VideoPlayerUIComponentDrawer3)};c.isReserved=function(){return this.$VideoPlayerUIComponentDrawer4};return b}(b("EventEmitter"));a.priorities={EmbeddedControls:0,AdBreakStartingIndicator:1,ClickForMore:2,PollCard:5,GameshowCard:6,Subtitles:3,SphericalMouseAnimation:4};e.exports=a}),null);
__d("logVideosClickTracking",["clickRefAction"],(function(a,b,c,d,e,f){function a(a){b("clickRefAction")("click",a,null,"FORCE")}e.exports=a}),null);
__d("getBufferedAheadOf",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){var b=1/60,c=a.currentTime;a=a.buffered;for(var d=0;d<a.length;d++){var e=a.start(d)-b,f=a.end(d)+b;if(c>=e&&c<=f)return Math.max(a.end(d)-c,0)}return 0}e.exports=a}),null);
__d("VideoCaptionsBackgroundOpacity",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({OPAQUE:100,DARK:75,DEFAULT:45,LIGHT:25,TRANSPARENT:-1})}),null);
__d("VideoCaptionsTextSize",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BIGGEST:200,BIGGER:175,BIG:150,MEDIUM:125,DEFAULT:100,SMALL:75,SMALLEST:50})}),null);
__d("VideoPlayerHTML5CaptionsDisplayStyle",["cx","CSS","VideoCaptionsBackgroundOpacity","VideoCaptionsTextSize","isTruthy"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={Black:"20, 22, 26",Blue:"0, 0, 255",Green:"0, 255, 0",Cyan:"0, 255, 255",Red:"255, 0, 0",Magenta:"255, 0, 255",White:"255, 255, 255",Yellow:"255, 255, 0"},i={DEFAULT_BACKGROUND_COLOR:"Black",DEFAULT_BACKGROUND_OPACITY:b("VideoCaptionsBackgroundOpacity").DEFAULT,DEFAULT_TEXT_COLOR:"White",DEFAULT_TEXT_SIZE:b("VideoCaptionsTextSize").DEFAULT};a=function(){__p&&__p();function a(a,b,c,d,e,f,g){this.$5="center",this.$1=c,this.$2=d,this.setBackgroundColor(a),this.setBackgroundOpacity(b),this.setTextColor(e),this.setTextSize(f),this.setTextAlignment(g),this.updateStyle()}var c=a.prototype;c.setBackgroundColor=function(a){a!=null&&Object.prototype.hasOwnProperty.call(h,a)?this.$3=a:this.$3=i.DEFAULT_BACKGROUND_COLOR};c.setBackgroundOpacity=function(a){b("isTruthy")(a)&&a>=b("VideoCaptionsBackgroundOpacity").TRANSPARENT&&a<=b("VideoCaptionsBackgroundOpacity").OPAQUE?this.$4=a:this.$4=i.DEFAULT_BACKGROUND_OPACITY};c.setTextColor=function(a){a!=null&&Object.prototype.hasOwnProperty.call(h,a)?this.$6=a:this.$6=i.DEFAULT_TEXT_COLOR};c.setTextSize=function(a){a!=null&&a>=b("VideoCaptionsTextSize").SMALLEST&&a<=b("VideoCaptionsTextSize").BIGGEST?this.$7=a:this.$7=i.DEFAULT_TEXT_SIZE};c.setTextAlignment=function(a){this.$5=(a=a)!=null?a:"center"};c.updateStyle=function(){__p&&__p();var a,c=this.$4;this.$4===b("VideoCaptionsBackgroundOpacity").TRANSPARENT&&(c=0);c=(a=c)!=null?a:i.DEFAULT_BACKGROUND_OPACITY;a=(a=this.$3)!=null?a:i.DEFAULT_BACKGROUND_COLOR;c=c/100;c="rgba("+h[a]+", "+c+")";this.$1.style.backgroundColor=c;this.$1.style.color=(c=this.$6)!=null?c:i.DEFAULT_TEXT_COLOR;c="0 0 10px rgb("+h[a]+"), 0 0 5px rgba("+h[a]+", .8)";this.$1.style.textShadow=c;b("CSS").conditionClass(this.$2,"_5z64",this.$7==b("VideoCaptionsTextSize").SMALLEST);b("CSS").conditionClass(this.$2,"_5z65",this.$7==b("VideoCaptionsTextSize").SMALL);b("CSS").conditionClass(this.$2,"_5z66",this.$7==b("VideoCaptionsTextSize").MEDIUM);b("CSS").conditionClass(this.$2,"_5z67",this.$7==b("VideoCaptionsTextSize").BIG);b("CSS").conditionClass(this.$2,"_5z68",this.$7==b("VideoCaptionsTextSize").BIGGER);b("CSS").conditionClass(this.$2,"_5z69",this.$7==b("VideoCaptionsTextSize").BIGGEST);b("CSS").conditionClass(this.$2,"_6mk2",this.$5==="left");b("CSS").conditionClass(this.$1,"_6mk2",this.$5==="left")};return a}();e.exports=a}),null);
__d("VideoPlayerShakaBandwidthEstimator",["CacheStorage","Run","VideoPlayerShakaGlobalConfig","requireWeak"],(function(a,b,c,d,e,f){__p&&__p();var g;b("requireWeak")("Shaka",function(a){g=a.util.EWMACacheBandwidthEstimator});var h=null,i=!1;a=function(){"use strict";__p&&__p();function a(){var a=this,c=new(b("CacheStorage"))("localstorage","_video_"),d=c.get("bandwidthEstimate");this.$1={isMockObject:!0,getBandwidth:function(a){return d},getFastMovingBandwidth:function(){return d}};g&&(this.$1=new g(b("VideoPlayerShakaGlobalConfig").getNumber("cache_delay",30),b("VideoPlayerShakaGlobalConfig").getNumber("cache_bandwidth",2e6),function(){b("VideoPlayerShakaGlobalConfig").getBool("shaka_update_bandwidth_cache_on_sample",!1)&&c.set("bandwidthEstimate",a.$1.getBandwidth())},d),this.$1.isMockObject=!1);b("Run").onUnload(function(){c.set("bandwidthEstimate",a.$1.getBandwidth())})}var c=a.prototype;c.getEstimator=function(){return this.$1};a.getInstance=function(){(h===null||h.getEstimator().isMockObject&&g)&&(h=new a());return h};a.getEstimator=function(){return a.getInstance().getEstimator()};a.getBandwidth=function(b){var c=a.getEstimator();return c.getBandwidth(b)};a.getBandwidthByVideoType=function(b){return a.getBandwidth(a.getBandwidthModel(b))};a.getBandwidthModel=function(a){return a?"aggressive":"conservative"};a.isAutoplayBandwidthRestrained=function(c){var d=a.getEstimator(),e;b("VideoPlayerShakaGlobalConfig").getBool("block_autoplay_use_fast_moving_average",!0)&&i?e=d.getFastMovingBandwidth():e=d.getBandwidth();d=c?b("VideoPlayerShakaGlobalConfig").getNumber("live_block_autoplay_bandwidth_threshold",25e4):b("VideoPlayerShakaGlobalConfig").getNumber("block_autoplay_bandwidth_threshold",123034);e===null||e>=d?i=!1:i=!0;return i};return a}();e.exports=a}),null);
__d("VideoPlayerLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUTOPLAY_PREFERENCE_CHANGED:"autoplay_preference_changed",END_STALL_TIME:"end_stall_time",AUTOPLAY_PREFERENCE_STATUS:"autoplay_preference_status",ERROR_ALERT_SHOWN:"video_error_alert_shown",COMMERCIAL_BREAK_OFFSCREEN:"commercial_break_offscreen",COMMERCIAL_BREAK_ONSCREEN:"commercial_break_onscreen",NOT_AUTOPLAYING:"not_autoplaying",VIDEO_CHANNEL_NO_RELATED_VIDEO:"video_channel_no_related_video",VIDEO_ORIENTATION_CHANGED:"video_orientation_changed",AD_BREAK_STARTING_INDICATOR:"ad_break_starting_indicator",AD_BREAK_NON_INTERRUPTIVE_AD_START:"ad_break_non_interruptive_ad_start",AD_BREAK_NON_INTERRUPTIVE_AD_CLICK:"ad_break_non_interruptive_ad_click",AD_BREAK_PRE_ROLL_AD_START:"ad_break_pre_roll_ad_start",AD_BREAK_TAP_ON_TRAILER:"ad_break_tap_on_trailer",AD_BREAK_TAP_START_FROM_TRAILER:"ad_break_tap_start_from_trailer",ASSETS_LOADED:"assets_loaded",BUFFERED:"buffered",CANCELLED_REQUESTED_PLAYING:"cancelled_requested_playing",CAPTION_CHANGE:"caption_change",CAROUSEL_CHANGE:"carousel_change",CHROMECAST_AVAILABILITY_CHECKED:"chromecast_availability_checked",CHROMECAST_CAST_CLICKED:"chromecast_button_clicked",CHROMECAST_CAST_CONNECTED:"chromecast_connected",CHROMECAST_CAST_DISABLED:"chromecast_button_disabled",CHROMECAST_CAST_DISCONNECTED:"chromecast_disconnected",CHROMECAST_CAST_RECONNECTED:"chromecast_reconnected",CHROMECAST_CAST_VISIBLE:"chromecast_button_visible",CHROMECAST_NOT_SUPPORTED:"chromecast_not_supported",CLICK:"click",DISPLAYED:"displayed",REDISPLAYED:"redisplayed",ENTERED_FALLBACK:"entered_fallback",ENTERED_FS:"entered_fs",ENTERED_HD:"entered_hd",ERROR:"error",EXITED_FS:"exited_fs",EXITED_HD:"exited_hd",FINISHED_LOADING:"finished_loading",FINISHED_PLAYING:"finished_playing",HEADSET_CONNECTED:"headset_connected",HEADSET_DISCONNECTED:"headset_disconnected",HEART_BEAT:"heart_beat",HOST_ERROR:"host_error",HTTP_STATUS_UPDATE:"http_status_update",IMPRESSION:"impression",INVALID_URL:"invalid_url",MUTED:"muted",NO_SURFACE_UPDATE:"no_surface_update",PAUSED:"paused",PLAY_REQUESTED:"play_requested",PLAY_REQUESTED_OOB:"play_requested_oob",PLAYER_ALLOCATED:"player_allocated",PLAYER_FORMAT_CHANGED:"player_format_changed",PLAYER_LOADED:"player_loaded",PLAYING_LIVE_STARTED:"playing_live_started",PLAYING_LIVE_STOPPED:"playing_live_stopped",POP_FAILOVER:"pop_failover",PROGRESS:"progress",QUALITY_CHANGE:"quality_change",R2D2_SUMMARY:"r2d2_summary",R2D2_EVENT_VALIDATION:"r2d2_event_validation",READY_TO_PLAY:"ready_to_play",REPLAYED:"replayed",REPRESENTATION_ENDED:"representation_ended",REPRESENTATION_FIRST_ENDED:"representation_first_ended",REQUESTED:"requested",REQUESTED_PLAYING:"requested_playing",SCRUBBED:"scrubbed",SEEKED:"seeked",SPLASH_DISPLAYED:"splash_displayed",STALE:"stale",STARTED_PLAYING:"started_playing",STARTED_RECEIVING_BYTES:"started_receiving_bytes",STOPPED_PLAYING:"stopped_playing",STREAM_RESET:"stream_reset",SURFACE_UPDATED:"surface_updated",SWITCHED_IMPLEMENTATION:"switched_implementation",UNMUTED:"unmuted",UNPAUSED:"unpaused",USER_SELECTED_QUALITY:"user_selected_quality",VIDEO_CHAINING_IMPRESSION:"video_chaining_impression",VIDEO_CHAINING_TAP:"video_chaining_tap",VIDEO_CLICKED_WITHIN_PLAYER:"video_clicked_within_player",VIDEO_PLAYER_SERVICE_DISCONNECTED:"video_player_service_disconnected",VIDEO_PLAYER_SERVICE_RECONNECTED:"video_player_service_reconnected",VIDEO_PLAYER_SERVICE_UNAVAILABLE:"video_player_service_unavailable",VIDEO_PLAYING:"video_playing",VIDEO_SKIP_AD:"video_skip_ad",VOLUME_CHANGED:"volume_changed",VOLUME_DECREASE:"volume_decrease",VOLUME_INCREASE:"volume_increase",WATCH_AND_SCROLL_CHANNEL_ENTERED:"watch_and_scroll_channel_entered",WATCH_AND_SCROLL_EXITED:"watch_and_scroll_exited",WATCH_AND_SCROLL_ICON_HIGHLIGHTED:"watch_and_scroll_icon_highlighted",WATCH_AND_SCROLL_ICON_UNHIGHLIGHTED:"watch_and_scroll_icon_unhighlighted",WATCH_AND_SCROLL_PAUSED:"watch_and_scroll_paused",LIVE_SEGMENT_LOAD_ERROR:"live_segment_load_error",MANIFEST_DATA_TYPE_ERROR:"manifest_data_type_error",MANIFEST_LOAD_ERROR:"manifest_load_error",PLAYER_WARNING:"player_warning",PLAYHEAD_FELL_BEHIND_ERROR:"playhead_fell_behind_error",STREAM_SEGMENT_LOAD_ERROR:"stream_segment_load_error",UNEXPECTED_SEGMENT_ERROR:"unexpected_segment_error",NETWORK_TIMEOUT:"network_timeout",VIDEO_LOGGING_SESSION_TIMEOUT:"video_logging_session_timeout",VIDEO_LOGGING_SESSION_WAKEUP:"video_logging_session_wakeup",RETRY_ON_ERROR:"retry_on_error",REPLICA_SWITCH:"replica_switch",REPLICA_SWITCH_SUCCESS:"replica_switch_success",REPLICA_SWITCH_FAILED:"replica_switch_failed",COMPLETION:"completion",VIEW:"view",PLAYED_FOR_THREE_SECONDS:"played_for_three_seconds",GUIDE_ENTERED:"guide_entered",GUIDE_EXITED:"guide_exited",HEADING_RESET:"heading_reset",SPHERICAL_FALLBACK_ENTERED:"spherical_fallback_entered",SPHERICAL_VIDEO_FALLBACK_CTA_CLICKED:"spherical_video_fallback_cta_clicked",VIEWPORT_ROTATED:"viewport_rotated",VIEWPORT_ZOOMED:"viewport_zoomed",BANZAI_OAUTH_GK_ERROR:"banzai_oauth_gk_error",BANZAI_OAUTH_PARSE_ERROR:"banzai_oauth_parse_error",BANZAI_OAUTH_SESSION_ERROR:"banzai_oauth_session_error",VIEWABILITY_CHANGED:"viewability_changed",PLAYER_SEEK:"player_seek",VIDEO_CDN_URL_EXPIRED:"video_cdn_url_expired",VIDEO_CDN_URL_REFRESHED:"video_cdn_url_refreshed",VIDEO_CDN_URL_REFRESH_ERROR:"video_cdn_url_refresh_error",LIVE_P2P_PLAYBACK_RELOADING:"live_p2p_playback_reloading",LIVE_P2P_PLAYBACK_PLUGIN_LOADED:"live_p2p_playback_plugin_loaded",LIVE_P2P_PLAYBACK_PLUGIN_FAILED:"live_p2p_playback_plugin_failed",RAID:"raid"})}),null);
__d("oz-player/shims/OzMaybeNativePromise",["Promise","MOzExperiments","MaybeNativePromise"],(function(a,b,c,d,e,f){"use strict";b("Promise").resolve(),e.exports=b("MOzExperiments").use_native_promise?b("MaybeNativePromise"):b("Promise")}),null);
__d("oz-player/utils/OzError",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this,b.description)||this;c.$OzError1=b;c.name=b.type;return c}var c=b.prototype;c.getExtra=function(){return this.$OzError1.extra||{}};c.getType=function(){return this.$OzError1.type};c.getDescription=function(){return this.$OzError1.description};return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("VideoPlayerLoggerErrorStates",[],(function(a,b,c,d,e,f){e.exports={PLAYBACK_FAILURE:"playback_failure",PLAYER_FAILURE:"player_failure"}}),null);
__d("VideoPlayerLoggerErrors",[],(function(a,b,c,d,e,f){e.exports={ENTERED_FALLBACK:"entered_fallback",ERROR_CALLING_FLASH:"error_calling_flash"}}),null);
__d("VideoPlayerLoggerFallbackReasons",[],(function(a,b,c,d,e,f){e.exports={TIMEOUT:"timeout",FLASH_ERROR:"flash_error",FLASH_UNAVAILABLE:"flash_unavailable"}}),null);
__d("VideoPlayerLoggerPlayerStates",[],(function(a,b,c,d,e,f){e.exports={STARTED:"started",UNPAUSED:"unpaused"}}),null);
__d("dangerouslyOverrideMediaElementEndedProperty",[],(function(a,b,c,d,e,f){function a(a){a===void 0&&(a={});a.dangerouslyOverrideMediaElementEndedProperty=!0;return a}a.isEnded=function(a){return!!(a&&a.detail&&a.detail.dangerouslyOverrideMediaElementEndedProperty)};e.exports=a}),null);
__d("getVideoBrowserTabId",["guid"],(function(a,b,c,d,e,f){var g=b("guid")().slice(-8);function a(){return g}e.exports=a}),null);