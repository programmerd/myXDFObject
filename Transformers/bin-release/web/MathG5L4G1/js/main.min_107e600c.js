var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function s(t){try{l(n.next(t))}catch(e){o(e)}}function a(t){try{l(n["throw"](t))}catch(e){o(e)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(s,a)}l((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,o&&(s=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(o,i[1])).done)return s;switch(o=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,o=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){l.label=i[1];break}if(6===i[0]&&l.label<s[1]){l.label=s[1],s=i;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(i);break}s[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(t,l)}catch(n){i=[6,n],o=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,o,s,a,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var KingKong=function(t){function e(){var e=t.call(this)||this;return e.switchX=151,e.switchY=248,e.switchSpaceY=8,e.switchArr=[],e.switchResult=[0,0,0,0,0,0,0],e.randomX=878,e.randomY=660,e.randomWidth=37,e.randomPosition=[{x:862,y:634,rx:875,ry:660},{x:848,y:585,rx:861,ry:611},{x:848,y:585,rx:861,ry:611},{x:863,y:364,rx:876,ry:390},{x:850,y:680,rx:863,ry:706}],e.randomArr=[],e.randomResult=[1,2,3,4,5,6,7],e.planeArr=[],e.planeCount=1,e.lineTexiao=[],e.cursorTop=!0,e.isMusic=!0,e.bx_bj=RES.getRes("bx_bj_mp3"),e.bx_beam_success=RES.getRes("bx_beam_success_mp3"),e.bx_beam_error=RES.getRes("bx_beam_error_mp3"),e.bx_capacity=RES.getRes("bx_capacity_mp3"),e.bx_capacity_gudong=RES.getRes("bx_capacity_gudong_mp3"),e.bx_transition=RES.getRes("bx_transition_mp3"),e.bx_subject01=RES.getRes("bx_subject01_mp3"),e.bx_subject02=RES.getRes("bx_subject02_mp3"),e.bx_next=RES.getRes("bx_next_mp3"),e.skinName="KingKongSkin",e}return __extends(e,t),e.prototype.partAdded=function(e,i){t.prototype.partAdded.call(this,e,i)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.overTX.touchChildren=!1,this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.start,this),this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reviseFun,this),this.overTX.addEventListener(egret.TouchEvent.TOUCH_TAP,this.overTXFun,this)},e.prototype.start=function(t){var e=this;this.overImage.visible=!1,this.GAMEOVER.visible=!1,this.huan.visible=!1,this.huan0.visible=!1,this.overTX.visible=!1,this.planeCount=1,this.PlaneV.source="V"+this.planeCount+"_png",this.startGroup.visible=!1,this.bottomCount.visible="revise"==t?!0:!1,this.subject02.visible=!1,this.subject01.visible=!0,this.revise.enabled=!1,this.randomPositions(),this.next.visible=!0,this.bx_bj_play=this.bx_bj.play(0,-1),this.bx_subject01.play(0,1).addEventListener(egret.Event.SOUND_COMPLETE,function(){e.subject01.visible=!1,e.subject02.visible=!0,e.PlaneV.visible=!0,e.bx_subject02.play(0,1).addEventListener(egret.Event.SOUND_COMPLETE,function(){e.capacity.enabled=!0,e.revise.enabled=!0,e.effetcFun("dot_png","dot_json",1340,680,!0),e.effetcFun("line_png","line_json",950,750,!0),e.cursor=e.cursorFun("shou_json","shou_png","shou")},e)},this),this.capacity.addEventListener(egret.TouchEvent.TOUCH_TAP,this.randomNumner,this),this.beam.addEventListener(egret.TouchEvent.TOUCH_TAP,this.beamFun,this),this.next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextFun,this),this.music.addEventListener(egret.TouchEvent.TOUCH_TAP,this.musicFun,this),this.beamButton(!1),this.nextButton(!1),this.scrollFun()},e.prototype.randomNumner=function(t){var e=this;this.bx_capacity.play(0,1),this.bx_capacity_gudong.play(0,3),this.bottomCount.visible=!0,console.log("000->",this.randomArr),this.randomArr.map(function(t){e.removeChild(t)});for(var i=0;7>i;i++){var n=Math.floor(10*Math.random());this.randomResult[i]=n,this.randomArr[i]=new RandomClass(this,n),this.randomArr[i].x=this.randomX+this.randomWidth*i,this.randomArr[i].y=this.randomY,this.addChild(this.randomArr[i])}this.cursorTop?(this.removeChild(this.cursor),setTimeout(function(){e.cursor=e.cursorFun("shou2_json","shou2_png","shou2",255,300)},3e3)):this.cursor=void 0,this.nextButton(!1)},e.prototype.effetcFun=function(t,e,i,n,r){void 0===i&&(i=450),void 0===n&&(n=0),void 0===r&&(r=!1);var t=RES.getRes(t),e=RES.getRes(e),o=new particle.GravityParticleSystem(t,e);this.lineTexiao.push(o),r?this.addChildAt(o,5):this.overTX.addChild(o),o.x=i,o.y=n,o.start()},e.prototype.scrollFun=function(){var t=this;this.switchArr.map(function(e){t.removeChild(e)});for(var e=0;7>e;e++)this.switchArr[e]=new Transformers(this,e),this.switchArr[e].x=this.switchX,this.switchArr[e].y=this.switchY+this.switchSpaceY*e+this.switchArr[e].height*e,this.addChild(this.switchArr[e])},e.prototype.beamButton=function(t){this.beam.enabled=t},e.prototype.beamFun=function(t){var e=this;this.scrollFun(),console.log("---->",this.switchResult),console.log("---->",this.randomResult),console.log(this.switchResult.join("")==this.randomResult.join("")),this.switchResult.join("")==this.randomResult.join("")?(this.randomArr.map(function(t){setTimeout(function(){e.removeChild(t),e.bottomCount.visible=!1},1e3)}),this.randomArr=[],this.bx_beam_success.play(0,1),this.Plane("end")):(this.bx_beam_error.play(0,1),this.yanwuFun()),this.switchResult=[0,0,0,0,0,0,0]},e.prototype.yanwuFun=function(){var t=this;console.log(11);var e=RES.getRes("yanwu_json"),i=RES.getRes("yanwu_png"),n=new egret.MovieClipDataFactory(e,i),r=new egret.MovieClip(n.generateMovieClipData("yanwu"));setTimeout(function(){t.yanwu.addChild(r),r.play(1)},300),r.addEventListener(egret.Event.COMPLETE,function(){console.log(r),this.yanwu.removeChild(r)},this)},e.prototype.cursorFun=function(t,e,i,n,r){void 0===n&&(n=1856),void 0===r&&(r=1e3);var t=RES.getRes(t),e=RES.getRes(e),o=new egret.MovieClipDataFactory(t,e),s=new egret.MovieClip(o.generateMovieClipData(i));return s.x=n,s.y=r,this.addChild(s),s.play(-1),s},e.prototype.nextButton=function(t){this.next.enabled=t},e.prototype.nextFun=function(){this.bx_next.play(0,1),this.planeCount+=1,5==this.planeCount&&(this.next.visible=!1),this.Plane("start"),this.beamButton(!1),this.nextButton(!1)},e.prototype.startPlane=function(t,e,i){var n=this;this.planeArr.map(function(t){n.removeChild(t)});var r=RES.getRes(e),o=RES.getRes(t),s=new egret.MovieClipDataFactory(r,o),a=new egret.MovieClip(s.generateMovieClipData(i));this.planeArr[0]=a,this.addChildAt(a,1),setTimeout(function(){a.play(0)},500)},e.prototype.Plane=function(t){var e=t+"V"+this.planeCount+".mp4";this.planeVideo=new egret.Video,this.planeVideo.x=0,this.planeVideo.y=0,this.planeVideo.width=1920,this.planeVideo.height=1080,this.planeVideo.fullscreen=!1,this.planeVideo.load("resource/assets/particle/"+e),this.planeVideo.once(egret.Event.COMPLETE,this.onLoad,this),this.addChild(this.planeVideo)},e.prototype.onLoad=function(t){var e=this,i="end"==t.target.src.split("/").reverse()[0].split("V")[0];i?(setTimeout(function(){e.planeVideo.play(0)},500),this.planeVideo.addEventListener(egret.Event.ENDED,this.videoEnd,this)):(this.planeVideo.play(0),console.log("这是开始动画-----》"),this.planeVideo.addEventListener(egret.Event.ENDED,this.videoStart,this))},e.prototype.videoStart=function(){console.log("播放完成"),this.PlaneV.source="V"+this.planeCount+"_png",this.randomPositions(),this.removeChild(this.planeVideo),this.beamButton(!1)},e.prototype.videoEnd=function(){var t=this;console.log("播放完成"),this.removeChild(this.planeVideo),this.beamButton(!1),this.nextButton(!0),this.planeCount>=5&&(this.switchArr.map(function(e){t.removeChild(e)}),this.overImage.visible=!0,this.overTX.visible=!0,this.gameOverFun())},e.prototype.gameOverFun=function(){var t=this;this.gameVideo=new egret.Video,this.gameVideo.x=0,this.gameVideo.y=0,this.gameVideo.width=1920,this.gameVideo.height=1080,this.gameVideo.fullscreen=!1,this.gameVideo.load("resource/assets/particle/over.mp4"),this.gameVideo.once(egret.Event.COMPLETE,function(){t.gameVideo.play(0),t.gameVideo.addEventListener(egret.Event.ENDED,function(){t.removeChild(t.gameVideo),t.GAMEOVER.visible=!0,t.effetcFun("dot_top_png","dot_top_json"),t.effetcFun("face_top_png","face_top_json"),t.effetcFun("line_top_png","line_top_json"),t.huan.visible=!0,t.huan0.visible=!0,t.endHuan.play(0)},t)},this),this.addChild(this.gameVideo)},e.prototype.musicFun=function(){this.isMusic?(this.bx_bj_play.stop(),this.isMusic=!1,this.music.source="music_close_png"):(this.bx_bj_play=this.bx_bj.play(0,-1),this.isMusic=!0,this.music.source="music_png")},e.prototype.randomPositions=function(){this.randomX=this.randomPosition[this.planeCount-1].rx,this.randomY=this.randomPosition[this.planeCount-1].ry,this.bottomCount.x=this.randomPosition[this.planeCount-1].x,this.bottomCount.y=this.randomPosition[this.planeCount-1].y},e.prototype.reviseFun=function(){this.start("revise")},e.prototype.overTXFun=function(t){console.log(t.target),window.location.reload()},e}(eui.Component);__reflect(KingKong.prototype,"KingKong",["eui.UIComponent","egret.DisplayObject"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),this.startAnimation(t),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=new KingKong;this.addChild(t)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.startAnimation=function(t){var e=this,i=new egret.HtmlTextParser,n=t.map(function(t){return i.parse(t)}),r=this.textfield,o=-1,s=function(){o++,o>=n.length&&(o=0);var t=n[o];r.textFlow=t;var i=egret.Tween.get(r);i.to({alpha:1},200),i.wait(2e3),i.to({alpha:0},200),i.call(s,e)};s()},e.prototype.onButtonClick=function(t){var e=new eui.Panel;e.title="Title",e.horizontalCenter=0,e.verticalCenter=0,this.addChild(e)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),i.call(n))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(n,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(n,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var a=t.split("/");a.pop();var l=a.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(n,generateJSON.paths[t])},this):RES.getResByUrl(l,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){e.call(n,generateJSON.paths[t])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(n,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var RandomClass=function(t){function e(e,i){var n=t.call(this)||this;return n.randomList=new eui.List,n.list=[],n.time=0,n.interval=null,n.randomCount=0,n.intervalFun=function(){n.randomScroll.viewport.scrollV+=3,console.log(n.time),n.time>=11&&n.randomScroll.viewport.scrollV>=n.randomCount?(n.randomScroll.viewport.scrollV=n.randomCount,clearInterval(n.interval),n.KingKong.beamButton(!0)):n.randomScroll.viewport.scrollV>=n.randomList.height-40&&(n.randomScroll.viewport.scrollV=0,n.time+=5,clearInterval(n.interval),n.interval=setInterval(n.intervalFun,n.time))},n.skinName="RandomClassSkin",n.randomCount=40*i,n.KingKong=e,n}return __extends(e,t),e.prototype.partAdded=function(e,i){t.prototype.partAdded.call(this,e,i)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.start()},e.prototype.start=function(){var t='\n			<?xml version="1.0" encoding="utf-8"?>\n<e:Skin class="RandomLabel" width="33" height="40" xmlns:e="http://ns.egret.com/eui">\n	<e:Label text="{data}" x="0" y="0" width="33" height="40" fontFamily="fz" bold="true" verticalAlign="middle" textAlign="center" size="40" textColor="0x52f9fe"/>\n</e:Skin>\n		';this.randomScroll.verticalScrollBar.autoVisibility=!1,this.randomScroll.verticalScrollBar.visible=!1,this.list=[0,1,2,3,4,5,6,7,8,9,0],this.randomList.dataProvider=new eui.ArrayCollection(this.list),this.randomGroup.addChild(this.randomList),this.randomList.itemRendererSkinName=t,this.randomAnimate()},e.prototype.randomAnimate=function(){clearInterval(this.interval),this.interval=setInterval(this.intervalFun,this.time)},e}(eui.Component);__reflect(RandomClass.prototype,"RandomClass",["eui.UIComponent","egret.DisplayObject"]);var Transformers=function(t){function e(e,i){var n=t.call(this)||this;return n.mylist=new eui.List,n.myGroup=new eui.DataGroup,n.skinName="TransformersSkin",n.KingKong=e,n.count=i,n}return __extends(e,t),e.prototype.partAdded=function(e,i){t.prototype.partAdded.call(this,e,i)},e.prototype.childrenCreated=function(){this.myScroller.addEventListener(eui.UIEvent.CHANGE_START,this.scrollerWidth2,this),this.myScroller.addEventListener(eui.UIEvent.CHANGE_END,this.scrollerWidth,this),this.myScroller.verticalScrollBar.autoVisibility=!1,this.myScroller.verticalScrollBar.visible=!1;var e='\n		<?xml version="1.0" encoding="utf-8"?>\n			<e:Skin class="MyList" width="60" height="60" xmlns:e="http://ns.egret.com/eui">\n			<e:Label text="{data}" x="0" y="0"  anchorOffsetX="0" width="60" anchorOffsetY="0" height="60" verticalAlign="middle" textAlign="center" size="45" bold="true" textColor="0xB8FEFC" fontFamily="fz"/>\n		</e:Skin>';this.List=["0","1","2","3","4","5","6","7","8","9"],t.prototype.childrenCreated.call(this),this.mylist.dataProvider=new eui.ArrayCollection(this.List),this.listGroup.addChild(this.mylist),this.mylist.itemRendererSkinName=e},e.prototype.scrollerWidth2=function(){this.KingKong.bx_transition.play(0,1),this.KingKong.cursorTop&&(this.KingKong.removeChild(this.KingKong.cursor),this.KingKong.cursorTop=!1)},e.prototype.scrollerWidth=function(t){var e=this.listGroup.height,i=Math.round(this.myScroller.viewport.scrollV/this.listGroup.height);return this.KingKong.switchResult[this.count]=i,this.myScroller.viewport.scrollV=i*e,i},e}(eui.Component);__reflect(Transformers.prototype,"Transformers",["eui.UIComponent","egret.DisplayObject"]);var LabelRenderer=function(t){function e(){var e=t.call(this)||this;return e.touchChildren=!0,e.labelDisplay=new eui.Label,e.addChild(e.labelDisplay),e}return __extends(e,t),e.prototype.dataChanged=function(){this.labelDisplay.height=60,this.labelDisplay.text=this.data},e}(eui.ItemRenderer);__reflect(LabelRenderer.prototype,"LabelRenderer");