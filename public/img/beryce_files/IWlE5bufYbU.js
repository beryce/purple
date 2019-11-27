if (self.CavalryLogger) { CavalryLogger.start_js(["S2rJS"]); }

__d("TimelineProfilePictureLoggerEnums",[],(function(a,b,c,d,e,f){e.exports={actions:{ADD_FRAME:"add_frame",EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{CANCEL:"cancel",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",DRAG_AND_DROP:"drag_and_drop",FAIL:"fail",INIT:"init",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",SKIP_CROP:"skip_crop",SUCCESS:"success",UPLOAD_CANCEL:"upload_cancel",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}}}),null);
__d("FileUploadTarget",["AsyncUploadRequest","DragDropFileUpload","DragDropTarget","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=function(d){this.$1=new(b("AsyncUploadRequest"))(c).setFiles({file:d}).setRelativeTo(a).setStatusElement(a).setAllowCrossOrigin(this.$2),this.$1.subscribe("complete",function(a,b){this.onCompleteCallback(b),this.$1=null}.bind(this)),this.$1.send()}.bind(this);this.dragDropTarget=new(b("DragDropTarget"))(a).setOnFilesDropCallback(function(a){a.length&&this.asyncProcess(a,function(a){a.length&&d(a)})}.bind(this));this.asyncProcess=function(a,b){b(a)};this.preprocess=function(a){return a};this.onCompleteCallback=b("emptyFunction")}var c=a.prototype;c.setAllowCrossOrigin=function(a){this.$2=a;return this};c.setPreprocessor=function(a){this.preprocess=a;return this};c.setAsyncProcessor=function(a){this.asyncProcess=a;return this};c.onComplete=function(a){this.onCompleteCallback=a;return this};c.abort=function(){this.$1&&this.$1.abort()};c.activate=function(){if(!b("DragDropFileUpload").isSupported())return this;this.dragDropTarget.setFileFilter(this.preprocess).enable();return this};return a}();e.exports=a}),null);
__d("SinglePictureUploadTarget",["fbt","Bootloader","Dialog","ErrorDialog","FileUploadTarget","emptyFunction","htmlSpecialChars"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){this.fileUploadTarget=new(b("FileUploadTarget"))(a,c),this.preprocessCallback=b("emptyFunction"),this.asyncPreprocessCallback=function(a,b){b(a)},this.oncompleteCallback=b("emptyFunction"),this.afterSuccessCallback=b("emptyFunction")}var c=a.prototype;c.setAllowCrossOrigin=function(a){this.fileUploadTarget.setAllowCrossOrigin(a);return this};c.setPreprocessCallback=function(a){this.preprocessCallback=a;return this};c.setAsyncPreprocessCallback=function(a){this.asyncPreprocessCallback=a;return this};c.setOncompleteCallback=function(a){this.oncompleteCallback=a;return this};c.setAfterSuccessCallback=function(a){this.afterSuccessCallback=a;return this};c.activate=function(){__p&&__p();var a=function(a){return b("htmlSpecialChars")(a.name)},c=function(c){c.length>1&&(b("ErrorDialog").show(g._("Upload Error"),g._("You can only select 1 photo to upload to this album. Only the first photo you selected will be uploaded.")),c=[c[0]]);var d=c[0];if(!d.type.match(/^image\//)){b("ErrorDialog").show(g._("Upload Error"),g._("We could not understand the contents of {filename}. Make sure it is a jpg, gif, or png formatted image.",[g._param("filename",a(d))]));return[]}this.preprocessCallback(c);return c}.bind(this),d=function(c,d){__p&&__p();var e=1024*1024*16,f=1024*1024*1,h=function(f){f.size>e?(b("ErrorDialog").show(g._("Upload Error"),g._("{filename} is too large. Please resize your photo to under 8000x8000 pixels and try again.",[g._param("filename",a(c[0]))])),d([])):this.asyncPreprocessCallback([f],d)}.bind(this),i=c[0];i.size<f?h(i):b("Bootloader").loadModules(["ImageExif","ImageResizer"],function(a,b){__p&&__p();if(!b.isSupported()){h(i);return}var c=new b(i,null,null);c.subscribe("resized",function(a,b){b.size>i.size?h(i):h(b)}.bind(this));c.subscribe("error",function(){h(i)}.bind(this));a.readFromFile(i,function(a){a&&c.setOrientation(a.Orientation),c.resize()})},"SinglePictureUploadTarget")}.bind(this),e=function(a){__p&&__p();a=a[0];if(!a.getResponse())return;this.oncompleteCallback(a);var c=a.getResponse().getPayload();if(a.isSuccess())this.afterSuccessCallback(c);else if(c&&c.__dialog){a=new(b("Dialog"))();a.$1(c.__dialog);a.setButtons(b("Dialog").OK).show()}else b("ErrorDialog").show(c.error.title,c.error.body)}.bind(this);return this.fileUploadTarget.onComplete(e).setPreprocessor(c).setAsyncProcessor(d).activate()};return a}();e.exports=a}),null);
__d("ProfileIntroCardEditMediaFunnelLogger",["Event","FunnelLogger"],(function(a,b,c,d,e,f){__p&&__p();var g="WWW_PROFILE_INTRO_CARD_EDIT_MEDIA_FUNNEL";function a(a){b("Event").listen(a,"click",function(){b("FunnelLogger").endFunnel(g)})}function c(a){b("Event").listen(a,"click",function(){b("FunnelLogger").appendAction(g,"save"),b("FunnelLogger").endFunnel(g)})}function d(a){b("Event").listen(a,"click",function(){b("FunnelLogger").startFunnel(g),b("FunnelLogger").appendAction(g,"intro_card_edit")})}function f(){b("FunnelLogger").addFunnelTag(g,"in_new_editor")}function h(a){b("Event").listen(a,"click",function(){b("FunnelLogger").startFunnel(g),b("FunnelLogger").appendAction(g,"single_edit")})}function i(){b("FunnelLogger").appendAction(g,"see_dialog")}function j(){b("FunnelLogger").appendAction(g,"open_picker")}function k(a){b("Event").listen(a,"click",function(){b("FunnelLogger").appendAction(g,"add_media")})}function l(){b("FunnelLogger").appendAction(g,"add_media")}function m(){b("FunnelLogger").appendAction(g,"remove_media")}function n(){b("FunnelLogger").appendAction(g,"search")}function o(){b("FunnelLogger").appendAction(g,"see_more")}function p(){b("FunnelLogger").appendAction(g,"section_names_loaded")}function q(){b("FunnelLogger").appendAction(g,"section_loaded")}function r(){b("FunnelLogger").appendAction(g,"empty_section_loaded")}function s(){b("FunnelLogger").appendAction(g,"all_sections_loaded")}function t(){b("FunnelLogger").appendAction(g,"upload_start")}function u(){b("FunnelLogger").appendAction(g,"upload_succes")}e.exports={logCancel:a,logSave:c,logSeeDialog:i,logSingleEdit:h,logIntroCardEdit:d,logOpenPicker:j,logAddMedia:k,directlyLogAddMedia:l,directlyLogRemoveMedia:m,logSearch:n,logSeeMore:o,logSectionNamesLoaded:p,logSeeMoreSectionLoaded:q,logAllSectionsInitialLoad:s,logEmptySectionLoaded:r,logUploadStart:t,logUploadSuccess:u,addNewEditorTag:f}}),null);
__d("ProfilePhotoActionLogger",["Banzai"],(function(a,b,c,d,e,f){a={EVENT_SELECT_METHOD:"select_method",EVENT_CAMERA_PERMISSION_PROVIDED:"permission_provided",EVENT_CAMERA_PERMISSION_DENIED:"permission_denied",EVENT_CAMERA_NO_WEBCAM:"permission_denied",EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:"unknown_mediastream_error",EVENT_CAMERA_TAKE_PHOTO:"take_photo",EVENT_CAMERA_RETAKE_PHOTO:"retake_photo",EVENT_CAMERA_UPLOAD_ATTEMPT:"upload_attempt",EVENT_CAMERA_UPLOAD_ERROR:"upload_error",EVENT_CAMERA_UPLOAD_SUCCESS:"upload_success",SOURCE_SUGGESTIONS:"suggestions",SOURCE_TIMELINE:"timeline",SOURCE_NUX:"nux",METHOD_EXISTING:"existing",METHOD_UPLOAD:"upload",METHOD_CAMERA:"camera",log:function(a,c,d){b("Banzai").post("profile_photo_action",{event:a,source:c,method:d})}};e.exports=a}),null);
__d("ProfilePicAccessibility",["csx","cx","CSS","FocusEvent","Parent","Run","ifRequired"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=null,j=[],k=[],l=!1;function m(a){i&&b("CSS").conditionClass(i,"_5-3g",a||l)}function n(a){l=a,m(a)}function o(){i=null,j.map(function(a){return a.unsubscribe()}),j=[],k.map(function(a){return a.remove()}),k=[]}a={init:function(a,c){__p&&__p();if(a.length===0)return;var d=b("Parent").bySelector(a[0],"._5ycb");i=d instanceof HTMLElement?d:null;k=a.map(function(a){return b("FocusEvent").listen(a,m)});c&&(j=[c.subscribe("show",n.bind(null,!0)),c.subscribe("hide",n.bind(null,!1))]);b("ifRequired")("XUISubNavigationLoader",function(a){return a.onLeave(o)},function(){return b("Run").onLeave(o)})}};e.exports=a}),null);
__d("TimelineProfilePicConfig",["fbt"],(function(a,b,c,d,e,f,g){a={loading:"timeline/profile_pic/loading",success:"timeline/profile_pic/success",leavingMessage:g._("Your profile picture is still uploading, are you sure you want to leave?")};e.exports=a}),null);
__d("ProfilePictureFlowLogging",["Arbiter","Banzai","Event","Parent","ProfilePhotoActionLogger","Run","TimelineProfilePicConfig","TimelineProfilePictureLoggerEnums","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g=b("TimelineProfilePicConfig").loading,h=b("TimelineProfilePicConfig").success,i="data-action-type",j,k,l,m;function n(){m&&m.unsubscribe(),m=null}var o={action:b("TimelineProfilePictureLoggerEnums").actions,flow:b("TimelineProfilePictureLoggerEnums").flows,step:b("TimelineProfilePictureLoggerEnums").steps,log:function(a){var c=a||o.step.INIT;b("Banzai").post("profile_pic_action",{action_type:j,flow_type:k,step_type:c});j===o.action.UPLOAD&&c===o.step.INIT&&b("ProfilePhotoActionLogger").log(b("ProfilePhotoActionLogger").EVENT_SELECT_METHOD,l,b("ProfilePhotoActionLogger").METHOD_UPLOAD);k=null;(a==="success"||a==="fail")&&(j=null);return o},setAction:function(a){j=a;return o},setFlowType:function(a){k=a;return o},setSource:function(a){l=a;return o},init:function(a,c){c&&(l=c),m||(m=b("Arbiter").subscribe([g,h],function(a){o.log(a===g?b("TimelineProfilePictureLoggerEnums").steps.LOADING:b("TimelineProfilePictureLoggerEnums").steps.SUCCESS)}),b("Run").onLeave(n)),b("tidyEvent")(b("Event").listen(a,"click",function(a){a=b("Parent").byAttribute(a.getTarget(),i);if(!a)return;o.setAction(a.getAttribute(i)).log()}))},initMenuItems:function(a,b,c){o.init(a.getRoot(),c)}};e.exports=o}),null);
__d("XWorkNewsfeedNuxNextStepController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/newsfeed_nux/next_step/",{})}),null);
__d("ProfilePicCropViewerInit",["Bootloader","CurrentCommunity","ProfilePictureFlowLogging","React","ServerRedirect","XWorkNewsfeedNuxNextStepController"],(function(a,b,c,d,e,f){__p&&__p();var g="profile-picture-crop",h="loading",i=b("ProfilePictureFlowLogging").flow,j,k;function l(){k&&k.close()}function m(a,c,d){__p&&__p();d=d||{};b("Bootloader").loadModules(["SpotlightViewerInit","ZoomProfilePicCropViewer.react","PhotoStore","AsyncRequest","AsyncResponse","XProfilePicCropViewerAsyncController"],function(e,f,i,m,n,o){__p&&__p();l();var p=d.stickerID;j=g+":"+a+":"+c;p&&(j+=":"+p);var q=d.successCallback,r=b("CurrentCommunity").getID()!=="0";!q&&(d.source==="atwork_nux"||d.source==="timeline"||d.source==="atwork_profile_nux")&&r&&(q=function(a){a=b("XWorkNewsfeedNuxNextStepController").getURIBuilder().getURI();new m().setURI(a).setData({current_step_id:1,skipped:!1}).setHandler(function(){b("ServerRedirect").reloadPage()}).send()});if(!d.skipCropping){k=e.render(b("React").jsx(f,{cancelCallback:d.cancelCallback,cropMode:d.cropMode,errorCallback:d.errorCallback,method:d.method,open:!0,photoID:a,profileID:c,setid:j,source:d.source,successCallback:q,uploadRequest:d.uploadRequest,warnOnCancel:d.warnOnCancel}),function(){k=null});if(i.hasBeenCreated(j)||a===h)return;r=o.getURIBuilder().setString("photo_id",a).setInt("profile_id",c).setString("set_id",j).setBool("will_load_more_photos",!0);p&&r.setInt("sticker_id",p);r=r.getURI();var s=j;new m(r).setErrorHandler(function(a){s===j&&l(),n.defaultErrorHandler(a)}).send()}},"ProfilePicCropViewerInit");return!0}a={close:l,getFlowType:function(){return i.ZOOMCROP},useCropViewer:function(){return!0},loading:function(a,b){m(h,a,b)},loadID:m};e.exports=a}),null);
__d("XProfilePicUploadAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/picture/upload/",{profile_id:{type:"Int",required:!0},photo_source:{type:"Enum",defaultValue:9,enumType:0}})}),null);
__d("ProfileTempPhotoUploader",["CSS","EventEmitter","FileInputUploader","JpegResizer","Parent","PhotosMimeType","XProfilePicUploadAsyncController","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e){var f;f=a.call(this)||this;f.$ProfileTempPhotoUploader1=c;f.$ProfileTempPhotoUploader6=b("XProfilePicUploadAsyncController").getURIBuilder().setInt("profile_id",d).setEnum("photo_source",e).getURI();b("JpegResizer").isSupported()&&(f.$ProfileTempPhotoUploader4=new(b("JpegResizer"))(1));f.$ProfileTempPhotoUploader2=b("tidyEvent")(f.$ProfileTempPhotoUploader1.subscribe("change",function(){return f.attemptUpload()}));return f}var d=c.prototype;d.removeListener=function(){this.$ProfileTempPhotoUploader2&&(this.$ProfileTempPhotoUploader2.unsubscribe(),this.$ProfileTempPhotoUploader2=null)};d.attemptUpload=function(){__p&&__p();var a=this;this.$ProfileTempPhotoUploader3&&this.$ProfileTempPhotoUploader3.abort();if(!this.$ProfileTempPhotoUploader1.getValue()){this.reset();return}var c=this.$ProfileTempPhotoUploader1.getInput();c.name||(c.name="photo");this.$ProfileTempPhotoUploader5=b("Parent").byClass(c,"stat_elem");this.$ProfileTempPhotoUploader5&&b("CSS").addClass(this.$ProfileTempPhotoUploader5,"async_saving");c=this.$ProfileTempPhotoUploader3=new(b("FileInputUploader"))(c).setURI(this.$ProfileTempPhotoUploader6).setAllowCrossOrigin(!0);this.emit("uploadStart",c);b("tidyEvent")([c.subscribe("success",function(b,c){a.reset(),a.emit("uploadSucess",c.response.getPayload())}),c.subscribe("failure",function(){a.reset(),a.emit("uploadFailure")})]);this.$ProfileTempPhotoUploader4&&c.setUploadInParallel(!0).setPreprocessHandler(this.$ProfileTempPhotoUploader7.bind(this));c.send()};d.reset=function(){this.$ProfileTempPhotoUploader5&&b("CSS").removeClass(this.$ProfileTempPhotoUploader5,"async_saving"),this.$ProfileTempPhotoUploader3=null,this.$ProfileTempPhotoUploader1.clear()};d.$ProfileTempPhotoUploader7=function(a,c){__p&&__p();var d=this,e=a.getFile();if(!e||!b("PhotosMimeType").isJpeg(e.type)){this.emit("resizeSkipped");c(a);return}this.$ProfileTempPhotoUploader4&&this.$ProfileTempPhotoUploader4.resizeBlob(e,function(b,e,f,g,h,i,j){if(b){d.emit("resizeFailure");c(a);return}f?d.emit("resizeSkipped"):(a.setFile(e),d.emit("resizeSuccess"));c(a)})};return c}(b("EventEmitter"));e.exports=a}),null);
__d("ProfilePicUploadToCrop",["ProfilePicCropViewerInit","ProfilePictureFlowLogging","ProfileTempPhotoUploader"],(function(a,b,c,d,e,f){__p&&__p();function g(){return b("ProfilePicCropViewerInit").getFlowType()}a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h){__p&&__p();var i=this;g===void 0;this.$1=f;this.$2=e;this.$3=new(b("ProfileTempPhotoUploader"))(c,f,9);this.$3.addListener("uploadStart",function(a){return i.uploadStart(a)});this.$3.addListener("uploadSucess",function(a){return i.uploadSucess(a)});this.$3.addListener("uploadFailure",function(){return i.uploadFailure()});this.$3.addListener("resizeSkipped",function(){return i.resizeSkipped()});this.$3.addListener("resizeStart",function(){return i.resizeStart()});this.$3.addListener("resizeSuccess",function(){return i.resizeSuccess()});this.$3.addListener("resizeFailure",function(){return i.resizeFailure()});this.$4=h}var c=a.prototype;c.attemptUpload=function(){this.$3.removeListener(),this.$3.attemptUpload()};c.resizeStart=function(){b("ProfilePictureFlowLogging").setFlowType(g()).log(b("ProfilePictureFlowLogging").step.RESIZE_BEGIN)};c.resizeSkipped=function(){b("ProfilePictureFlowLogging").setFlowType(g()).log(b("ProfilePictureFlowLogging").step.RESIZE_SKIPPED)};c.resizeSuccess=function(){b("ProfilePictureFlowLogging").setFlowType(g()).log(b("ProfilePictureFlowLogging").step.RESIZE_SUCCESS)};c.resizeFailure=function(){b("ProfilePictureFlowLogging").setFlowType(g()).log(b("ProfilePictureFlowLogging").step.RESIZE_FAIL)};c.uploadStart=function(a){b("ProfilePictureFlowLogging").setAction(b("ProfilePictureFlowLogging").action.UPLOAD).setFlowType(g()).log(b("ProfilePictureFlowLogging").step.UPLOAD_SELECT),b("ProfilePicCropViewerInit").loading(this.$1,{uploadRequest:a})};c.uploadSucess=function(b){a.loadCropper(b,this.$1,this.$2,this.$4)};c.uploadFailure=function(){b("ProfilePicCropViewerInit").close(),b("ProfilePictureFlowLogging").setFlowType(g()).log(b("ProfilePictureFlowLogging").step.FAIL)};a.loadCropper=function(a,c,d,e){b("ProfilePictureFlowLogging").setFlowType(g()).log(b("ProfilePictureFlowLogging").step.UPLOAD_SUCCESS),b("ProfilePicCropViewerInit").loadID(a.fbid,c,{method:"upload",source:d,warnOnCancel:!0,successCallback:e})};return a}();e.exports=a}),null);
__d("ProfilePicDragAndDropUpload",["ProfilePicCropViewerInit","ProfilePictureFlowLogging","ProfilePicUploadToCrop","SinglePictureUploadTarget"],(function(a,b,c,d,e,f){a={init:function(a,c,d){var e=new(b("SinglePictureUploadTarget"))(a,c).setAllowCrossOrigin(!0).setPreprocessCallback(function(){b("ProfilePictureFlowLogging").setFlowType(b("ProfilePicCropViewerInit").getFlowType()).log(b("ProfilePictureFlowLogging").step.DRAG_AND_DROP),b("ProfilePicCropViewerInit").loading(d,{uploadRequest:e})}).setAfterSuccessCallback(function(a){b("ProfilePicUploadToCrop").loadCropper(a,d,"timeline")}).activate()}};e.exports=a}),null);
__d("ProfileNavigationItemDropdown",["Event","goURI","setImmediate","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this,d=a.menuElement,e=a.menuInstance,f=a.href;this.$1=[];this.$2=[];b("tidyEvent")(b("Event").listen(d,"click",function(a){c.$1.forEach(function(a){a.call(c)}),b("setImmediate")(function(){a.ctrlKey||a.metaKey?window.open(f,"_blank"):b("goURI")(f)})}));e.subscribe("itemclick",function(a,b){c.$2.forEach(function(a){a.call(c,b.item)})})}var c=a.prototype;c.onTriggerClick=function(a){this.$1.push(a)};c.onMenuItemClick=function(a){this.$2.push(a)};return a}();e.exports=a}),null);
__d("legacy:TimelineCover",["TimelineCover"],(function(a,b,c,d,e,f){a.TimelineCover=b("TimelineCover")}),3);
__d("TimelineCoverDragdropEdit",["SinglePictureUploadTarget","TimelineCover"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){var a=b("TimelineCover").getInstance();a!==null&&a.hideLoadingIndicator()},h=function(a){var c=b("TimelineCover").getInstance(),d=a.id;a=a.photo_node;c!==null&&c.updateCoverImage(d,a)},i=function(a){a=b("TimelineCover").getInstance();a!==null&&a.showLoadingIndicator()};a=function(a,c){new(b("SinglePictureUploadTarget"))(a,c).setAllowCrossOrigin(!0).setPreprocessCallback(i).setOncompleteCallback(g).setAfterSuccessCallback(h).activate()};f.initialize_timeline_cover_drop_target=a}),null);
__d("TimelineCoverPhotoChangePrivacyDialog",["Arbiter","Event"],(function(a,b,c,d,e,f){a={init:function(a,b,c){this._dialog=a,this._tooltipLink=c,this._closeButton=b,this._showDialog=!1,this._tooltip=null},registerDialogShow:function(){this._showDialog=!0,b("Arbiter").subscribe("CoverPhotoEdit",function(a,b){if(!this._showDialog)return;b.state==="open"?(this._dialog&&this._dialog.show(),this._tooltipLink&&(this._tooltip=this._tooltipLink.getAttribute("data-hover"),this._tooltipLink.setAttribute("data-hover",null))):b.state==="closed"&&this.hideDialog()}.bind(this)),b("Event").listen(this._closeButton,"click",this.hideDialog.bind(this))},hideDialog:function(){this._dialog&&this._dialog.hide(),this._tooltipLink&&this._tooltipLink.setAttribute("data-hover",this._tooltip),this._showDialog=!1}};e.exports=a}),null);
__d("ProfileWizardUIEvents",[],(function(a,b,c,d,e,f){a=Object.freeze({CUSTOM_HIDE_HANDLE:"ProfileWizardUIEvents/customHideHandle",CUSTOM_SHOW_HANDLE:"ProfileWizardUIEvents/customShowHandle",HIDE_POPUP:"ProfileWizardUIEvents/hidePopup",PROFILE_PIC_UPLOADED:"ProfileWizardUIEvents/profilePicUploaded",SHOW_POPUP:"ProfileWizardUIEvents/showPopup",STEP_COMPLETE:"ProfileWizardUIEvents/stepComplete",STEP_EDITED:"ProfileWizardUIEvents/stepEdited"});e.exports=a}),null);
__d("XProfileWizardImpressionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/wizard_impression/{surface}/",{error_code:{type:"Int"},step:{type:"Int",required:!0},surface:{type:"Enum",required:!0,enumType:1}})}),null);
__d("ProfileWizardUIManager",["invariant","Arbiter","AsyncRequest","ProfileWizardUIEvents","XProfileWizardImpressionController","destroyOnUnload"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(c,d){d===void 0&&(d=null);this.$1=c;this.$2=d||this.$1[0];var e=b("Arbiter").subscribe(b("ProfileWizardUIEvents").STEP_COMPLETE,this.stepComplete.bind(this));d!=null&&a.informShowPopupForStep(d);b("destroyOnUnload")(function(){return e.unsubscribe()})}var c=a.prototype;c.stepComplete=function(b,c){b=this.getNextStepIndex(c.stepNumber);b&&(a.informShowPopupForStep(b),this.$2=b)};c.getCurrentStepIndex=function(){return this.$2};c.getNextStepIndex=function(a){a=this.$1.indexOf(a);a!==-1||g(0,1894);return a<this.$1.length-1?this.$1[a+1]:null};c.hasNextStep=function(){return!!this.getNextStepIndex(this.getCurrentStepIndex())};a.informShowPopupForStep=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").SHOW_POPUP+a,{stepNumber:a},"persistent")};a.informHidePopupForStep=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").HIDE_POPUP+a,{stepNumber:a},"persistent")};a.informStepComplete=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").STEP_COMPLETE,{stepNumber:a})};a.informCustomShowHandler=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").CUSTOM_SHOW_HANDLE+a,{stepNumber:a},"persistent")};a.informCustomHideHandler=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").CUSTOM_HIDE_HANDLE+a,{stepNumber:a},"persistent")};a.subscribeShowPopupForStep=function(c,d,e){return a.$3(b("ProfileWizardUIEvents").SHOW_POPUP,c,e)};a.subscribeHidePopupForStep=function(c,d,e){return a.$3(b("ProfileWizardUIEvents").HIDE_POPUP,c,e)};a.subscribeCustomShowHandler=function(c,d){return a.$3(b("ProfileWizardUIEvents").CUSTOM_SHOW_HANDLE,c,d)};a.subscribeCustomHideHandler=function(c,d){return a.$3(b("ProfileWizardUIEvents").CUSTOM_HIDE_HANDLE,c,d)};a.$3=function(a,c,d){var e=b("Arbiter").subscribe(a+c,d);b("destroyOnUnload")(function(){return e.unsubscribe()});return e};a.markStepImpression=function(a,c){a=b("XProfileWizardImpressionController").getURIBuilder().setInt("step",a).setEnum("surface",c).getURI();new(b("AsyncRequest"))().setURI(a).send()};a.init=function(b,c){c===void 0&&(c=null);return new a(b,c)};return a}();e.exports=a}),null);
__d("XTimelineCoverPhotoGalleryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/timeline/cover/gallery/",{})}),null);
__d("TimelineCoverPhotoNUX",["cx","AsyncRequest","CSS","ProfileWizardUIManager","XTimelineCoverPhotoGalleryController","$","destroyOnUnload"],(function(a,b,c,d,e,f,g){__p&&__p();var h="fbProfileCover",i="_3y4k";a=function(){"use strict";__p&&__p();a.init=function(b,c,d,e){new a(b,c,d,e)};function a(a,c,d,e){__p&&__p();var f=this;this.$6=!1;this.$2=c;this.$1=b("$")(h);this.$4=a.getPopover();this.$3=e;b("ProfileWizardUIManager").subscribeCustomShowHandler(d,function(){return f.$7()});b("ProfileWizardUIManager").subscribeCustomHideHandler(d,function(){return f.$8()});this.$5=this.$4.subscribeOnce("show",function(){if(f.$3||f.$6)return;f.$4.hideLayer();f.$7()});var g=this.$2.subscribe("cancel",function(){b("CSS").removeClass(f.$1,i)}),j=this.$2.subscribe("confirm",function(){f.$4.showLayer(),f.$8()});b("destroyOnUnload")(function(){f.$2.unsubscribe(g),f.$2.unsubscribe(j),f.$4.unsubscribe(f.$5)})}var c=a.prototype;c.$8=function(){this.$2.hide(),b("CSS").removeClass(this.$1,i)};c.$7=function(){if(this.$6)return;this.$2.show();this.$3||(b("CSS").addClass(this.$1,i),new(b("AsyncRequest"))().setURI(b("XTimelineCoverPhotoGalleryController").getURIBuilder().getURI()).send());this.$6=!0};return a}();e.exports=a}),null);
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","HTML","Run","TimelineProfilePicConfig","$","ge"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();a.init=function(b,c){a.destroyInstance(),g=new a(b||"fbProfileCover",c||".profilePicThumb")};function a(a,c){this.$1=b("$")(a),this.$2=c,this.$3=[b("Arbiter").subscribe(b("TimelineProfilePicConfig").loading,this.startLoading.bind(this)),b("Arbiter").subscribe(b("TimelineProfilePicConfig").success,this.onUploadSuccess.bind(this))],b("Run").onBeforeUnload(this.onBeforeUnload.bind(this)),b("Run").onLeave(this.destroy.bind(this))}var c=a.prototype;c.$4=function(a){this.$5=a,b("CSS").conditionClass(this.$1,"profilePicLoading",a)};c.destroy=function(){this.$3.forEach(function(a){a.unsubscribe()}),this.$3=[],g=null};c.startLoading=function(a,b){this.$4(!!b.isLoading)};c.onUploadSuccess=function(a,c){__p&&__p();this.$4(!1);if(!c.newPic)return;a=b("Dialog").getCurrent();a&&a.hide();a=c.newPic;b("DOM").replace(b("DOM").find(this.$1,this.$2),typeof a==="string"?b("HTML")(a):a);if(c.profileId&&c.headerPicURL){a=b("ge")("profile_pic_header_"+c.profileId);a&&(a.src=c.headerPicURL)}a=b("ge")("fbProfilePicSelector");a&&b("CSS").removeClass(a,"fbTimelineNullProfilePicSelector")};c.onBeforeUnload=function(){if(g===this&&this.$5)return b("TimelineProfilePicConfig").leavingMessage};a.destroyInstance=function(){g&&g.destroy()};return a}();e.exports=a}),null);
__d("XProfileRefresherDialogImpressionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/refresher/dialog_impression/",{})}),null);
__d("ProfileActionsUpdateInfoButton",["AsyncRequest","CSS","Event","XProfileRefresherDialogImpressionController","destroyOnUnload"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d){var e=this;this.$1=b("Event").listen(a,"click",function(){c.hide(),b("CSS").hide(d),e.$2()});c.subscribe("cancel",function(){return e.$2()});b("destroyOnUnload")(function(){return e.$3()})}var c=a.prototype;c.$3=function(){this.$1&&this.$1.remove()};c.$2=function(){new(b("AsyncRequest"))().setURI(b("XProfileRefresherDialogImpressionController").getURIBuilder().getURI()).send()};return a}();e.exports=a}),null);
__d("ProfileWizardStepFlyout",["DOMScroll","Event","ProfileWizardUIManager","destroyOnUnload"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c,d){"use strict";__p&&__p();b("ProfileWizardUIManager").subscribeShowPopupForStep(c,d,function(){b("DOMScroll").scrollTo(a.getCausalElement(),500,!1,0,20,function(){b("ProfileWizardUIManager").informCustomShowHandler(c),a.show()})});b("ProfileWizardUIManager").subscribeHidePopupForStep(c,d,function(){b("ProfileWizardUIManager").informCustomHideHandler(c),a.hide()});var e=b("Event").listen(a.getCausalElement(),"click",function(){return b("ProfileWizardUIManager").informHidePopupForStep(c)}),f=[a.subscribe("cancel",function(){b("ProfileWizardUIManager").informStepComplete(c),b("ProfileWizardUIManager").markStepImpression(c,d)}),a.subscribe("confirm",function(){a.hide(),b("ProfileWizardUIManager").markStepImpression(c,d)})];b("destroyOnUnload")(function(){while(f.length)a.unsubscribe(f.pop());e.remove()})};e.exports=a}),null);
__d("InfoReviewInstanceManager",["csx","DOM","Event","ReactDOM"],(function(a,b,c,d,e,f,g){__p&&__p();var h="._5sf3",i=[],j=[];a={addInstanceRoot:function(a,c){j.push(b("Event").listen(c,"click",function(a){a=b("DOM").scry(c,h)[0];a&&b("DOM").remove(a)})),i.push(a)},cleanupInstances:function(){var a=[];while(i.length){var c=i.pop();document.contains(c)?a.push(c):b("ReactDOM").unmountComponentAtNode(c)}while(j.length)j.pop().remove();i=a}};e.exports=a}),null);
__d("InfoReviewCloseButton",["DOM","Event","InfoReviewInstanceManager","Parent","$","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g="fbTimelineUnit";a=function(){"use strict";__p&&__p();function a(a,c){this.$1=a,this.$2=c,this.$3=b("Event").listen(this.$1,"click",this.$4.bind(this)),b("tidyEvent")(this.$3)}var c=a.prototype;c.$4=function(){var a=b("$")(this.$2);a.parentElement.children.length===1&&(a=b("Parent").byClass(a,g));b("DOM").remove(a)&&this.$5();b("InfoReviewInstanceManager").cleanupInstances()};c.$5=function(){this.$1=null,this.$2=null,this.$3&&this.$3.remove(),this.$3=null};return a}();e.exports=a}),null);
__d("InfoReviewInputSelectNoValidAnswer",["cx","Arbiter","CSS"],(function(a,b,c,d,e,f,g){a={addPrivacySelector:function(a){b("Arbiter").subscribe("no-valid-answer-select",function(c,d){b("CSS").conditionClass(a,"_4t5z",d.selected)})}};e.exports=a}),null);
__d("InfoReviewQuestionForm",["Arbiter","DOMQuery","Event","InfoReviewInstanceManager","getActiveElement"],(function(a,b,c,d,e,f){__p&&__p();var g=[];a=function(){"use strict";__p&&__p();function a(a,c,d,e){this.$4=null,this.$1=c,this.$2=e,this.$3=d,this.$4=b("Event").listen(c,"submit",this.$5.bind(this),b("Event").Priority.URGENT),g.push(this),b("InfoReviewInstanceManager").addInstanceRoot(a,c)}var c=a.prototype;c.cleanup=function(){this.$4&&this.$4.remove(),this.$4=null};a.cleanupInstances=function(){while(g.length)g.pop().cleanup();b("InfoReviewInstanceManager").cleanupInstances()};a.triggerErrorEvent=function(a){b("Arbiter").inform("InfoReviewQuestionForm/error",a)};c.$5=function(a){a=b("getActiveElement")();return b("DOMQuery").contains(this.$1,a)&&a.getAttribute("value")===this.$3?b("Arbiter").inform("InfoReviewQuestionForm/beforeSubmit",{formToken:this.$2}):!0};return a}();e.exports=a}),null);
__d("InfoReviewRequestForm",["csx","DOM","Event","tidyEvent"],(function(a,b,c,d,e,f,g){a={initNUX:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){var a=b("DOM").scry(c,"._58al")[0];a&&a.focus()}))}};e.exports=a}),null);