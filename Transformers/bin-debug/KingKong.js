var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var KingKong = (function (_super) {
    __extends(KingKong, _super);
    function KingKong() {
        var _this = _super.call(this) || this;
        _this.switchX = 151;
        _this.switchY = 248; // 211  279
        _this.switchSpaceY = 8;
        //滑动存放 对象 及 数值
        _this.switchArr = [];
        _this.switchResult = [0, 0, 0, 0, 0, 0, 0];
        //随机数
        _this.randomX = 878;
        _this.randomY = 660;
        _this.randomWidth = 37;
        _this.randomPosition = [{ x: 862, y: 634, rx: 875, ry: 660 }, { x: 848, y: 585, rx: 861, ry: 611 }, { x: 848, y: 585, rx: 861, ry: 611 }, { x: 863, y: 364, rx: 876, ry: 390 }, { x: 850, y: 680, rx: 863, ry: 706 }];
        //随机数存放 对象 及 数值
        _this.randomArr = [];
        _this.randomResult = [1, 2, 3, 4, 5, 6, 7];
        //飞机切换
        _this.planeArr = [];
        _this.planeCount = 1;
        _this.lineTexiao = [];
        _this.cursorTop = true;
        //音乐
        _this.isMusic = true;
        _this.bx_bj = RES.getRes("bx_bj_mp3"); //背景
        _this.bx_beam_success = RES.getRes("bx_beam_success_mp3"); //发射成功
        _this.bx_beam_error = RES.getRes("bx_beam_error_mp3"); //发射成功
        _this.bx_capacity = RES.getRes("bx_capacity_mp3"); //充能
        _this.bx_capacity_gudong = RES.getRes("bx_capacity_gudong_mp3"); //充能数字
        _this.bx_transition = RES.getRes("bx_transition_mp3"); //选择数字时
        _this.bx_subject01 = RES.getRes("bx_subject01_mp3"); //启动5架飞机
        _this.bx_subject02 = RES.getRes("bx_subject02_mp3"); //介绍
        _this.bx_next = RES.getRes("bx_next_mp3"); //下一关
        _this.skinName = "KingKongSkin";
        return _this;
    }
    KingKong.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    KingKong.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.overTX.touchChildren = false;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this); //开始
        this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this); //重置
        this.overTX.addEventListener(egret.TouchEvent.TOUCH_TAP, this.overTXFun, this); //特效
    };
    KingKong.prototype.start = function (state) {
        var _this = this;
        this.overImage.visible = false;
        this.GAMEOVER.visible = false;
        this.huan.visible = false;
        this.huan0.visible = false;
        this.overTX.visible = false;
        this.planeCount = 1;
        this.PlaneV.source = "V" + this.planeCount + "_png";
        this.startGroup.visible = false;
        //重置时作用
        this.bottomCount.visible = state == "revise" ? true : false; // 随机数板子
        this.subject02.visible = false;
        this.subject01.visible = true;
        this.revise.enabled = false;
        this.randomPositions();
        this.next.visible = true;
        this.bx_bj_play = this.bx_bj.play(0, -1);
        this.bx_subject01.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, function () {
            _this.subject01.visible = false;
            _this.subject02.visible = true;
            _this.PlaneV.visible = true;
            _this.bx_subject02.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, function () {
                _this.capacity.enabled = true;
                _this.revise.enabled = true;
                _this.effetcFun("dot_png", "dot_json", 1340, 680, true);
                _this.effetcFun("line_png", "line_json", 950, 750, true);
                _this.cursor = _this.cursorFun("shou_json", "shou_png", "shou");
            }, _this);
        }, this);
        //事件监听
        this.capacity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.randomNumner, this); //充能
        this.beam.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beamFun, this); //发射
        this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextFun, this); //下一关
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this); //音乐
        //方法调用
        this.beamButton(false); //发射按钮状态
        this.nextButton(false); //下一关按钮状态
        this.scrollFun(); //左侧滑块// this.randomFun(); //随机数
        // this.Plane("start")
        // this.endHuan.play(0)	//循环动画
        // this.result.play(0)	//结束提示动画
    };
    //充能
    KingKong.prototype.randomNumner = function (e) {
        var _this = this;
        this.bx_capacity.play(0, 1);
        // this.bx_capacity.addEventListener(egret.Event.COMPLETE, () => {
        this.bx_capacity_gudong.play(0, 3);
        // }, this)
        this.bottomCount.visible = true;
        console.log("000->", this.randomArr);
        this.randomArr.map(function (item) {
            _this.removeChild(item);
        });
        for (var i = 0; i < 7; i++) {
            var random = Math.floor(Math.random() * 10);
            this.randomResult[i] = random;
            this.randomArr[i] = new RandomClass(this, random);
            this.randomArr[i].x = this.randomX + this.randomWidth * i;
            this.randomArr[i].y = this.randomY;
            this.addChild(this.randomArr[i]);
        }
        if (this.cursorTop) {
            this.removeChild(this.cursor);
            setTimeout(function () {
                _this.cursor = _this.cursorFun("shou2_json", "shou2_png", "shou2", 255, 300);
            }, 3000);
        }
        else {
            this.cursor = undefined;
        }
        this.nextButton(false);
    };
    // 特效火焰
    KingKong.prototype.effetcFun = function (texture, config, x, y, posi) {
        if (x === void 0) { x = 450; }
        if (y === void 0) { y = 0; }
        if (posi === void 0) { posi = false; }
        var texture = RES.getRes(texture);
        var config = RES.getRes(config);
        var system = new particle.GravityParticleSystem(texture, config);
        this.lineTexiao.push(system);
        posi ? this.addChildAt(system, 5) : this.overTX.addChild(system);
        system.x = x;
        system.y = y;
        // var tw = egret.Tween.get(system, { loop: true });
        // tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
        system.start();
    };
    //左侧滑块
    KingKong.prototype.scrollFun = function () {
        var _this = this;
        this.switchArr.map(function (item) {
            _this.removeChild(item);
        });
        for (var i = 0; i < 7; i++) {
            this.switchArr[i] = new Transformers(this, i);
            // console.log(this.switchY + this.switchSpaceY * i + this.switchArr[i].height * i)
            this.switchArr[i].x = this.switchX;
            this.switchArr[i].y = this.switchY + this.switchSpaceY * i + this.switchArr[i].height * i;
            this.addChild(this.switchArr[i]);
        }
    };
    //发射按钮状态
    KingKong.prototype.beamButton = function (type) {
        this.beam.enabled = type;
    };
    //发射
    KingKong.prototype.beamFun = function (e) {
        var _this = this;
        this.scrollFun();
        console.log("---->", this.switchResult);
        console.log("---->", this.randomResult);
        console.log(this.switchResult.join('') == this.randomResult.join(''));
        if (this.switchResult.join('') == this.randomResult.join('')) {
            this.randomArr.map(function (item) {
                setTimeout(function () {
                    _this.removeChild(item);
                    _this.bottomCount.visible = false;
                }, 1000);
            });
            this.randomArr = [];
            this.bx_beam_success.play(0, 1);
            this.Plane("end");
        }
        else {
            this.bx_beam_error.play(0, 1);
            this.yanwuFun(); //烟雾动画
        }
        this.switchResult = [0, 0, 0, 0, 0, 0, 0];
    };
    //烟雾动画
    KingKong.prototype.yanwuFun = function () {
        var _this = this;
        console.log(11);
        var data = RES.getRes("yanwu_json");
        var txtr = RES.getRes("yanwu_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData("yanwu"));
        // console.log(mc.width = 577, mc.height = 323)
        setTimeout(function () {
            _this.yanwu.addChild(mc);
            mc.play(1);
        }, 300);
        mc.addEventListener(egret.Event.COMPLETE, function () {
            console.log(mc);
            this.yanwu.removeChild(mc);
        }, this);
    };
    //手指
    KingKong.prototype.cursorFun = function (data, txtr, name, x, y) {
        if (x === void 0) { x = 1856; }
        if (y === void 0) { y = 1000; }
        var data = RES.getRes(data);
        var txtr = RES.getRes(txtr);
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData(name));
        mc.x = x;
        mc.y = y;
        this.addChild(mc);
        mc.play(-1);
        // mc.addEventListener(egret.Event.COMPLETE, function () {
        // 	console.log(mc)
        // 	// this.removeChild(mc)
        // }, this);
        return mc;
    };
    //下一关按钮状态
    KingKong.prototype.nextButton = function (type) {
        this.next.enabled = type;
    };
    //下一关
    KingKong.prototype.nextFun = function () {
        this.bx_next.play(0, 1);
        // this.startPlane("v1_png", "v1_json", "v1");
        this.planeCount += 1;
        if (this.planeCount == 5) {
            this.next.visible = false;
        }
        this.Plane("start");
        this.beamButton(false); //发射按钮状态
        this.nextButton(false); //下一关按钮状态
    };
    //飞机初始化
    KingKong.prototype.startPlane = function (res, json, name) {
        var _this = this;
        this.planeArr.map(function (item) {
            _this.removeChild(item);
        });
        var data = RES.getRes(json);
        var txtr = RES.getRes(res);
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData(name));
        this.planeArr[0] = mc;
        // console.log(mc.x = -27, mc.y)
        this.addChildAt(mc, 1);
        setTimeout(function () {
            mc.play(0);
        }, 500);
        // mc.play(0);
        // mc.addEventListener(egret.Event.COMPLETE, function (){
        // 	console.log("ddd")
        //    this.removeChild(mc)
        // }, this)
    };
    //飞机结束动画
    KingKong.prototype.Plane = function (type) {
        // var dragonbonesData = RES.getRes("NewProject_3_ske_json");
        // var textureData1 = RES.getRes("NewProject_3_tex_json");
        // var texture1 = RES.getRes("NewProject_3_tex_png");
        // let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
        // egretFactory.parseDragonBonesData(dragonbonesData);
        // egretFactory.parseTextureAtlasData(textureData1, texture1);
        // var armature: dragonBones.Armature = egretFactory.buildArmature("Sprite");
        // var armatureDisplay = armature.getDisplay();
        // // this.addChild(armatureDisplay);
        // armatureDisplay.x = 500;
        // armatureDisplay.y = 400;
        // armature.animation.gotoAndPlay("Sprite",1,-1);
        // dragonBones.WorldClock.clock.add(armature);
        // this.addEventListener(egret.Event.ENTER_FRAME, function (): void {
        // 		dragonBones.WorldClock.clock.advanceTime(0.03);
        // 	}, this);
        var status = type + "V" + this.planeCount + '.mp4';
        // console.log("结束",status)
        this.planeVideo = new egret.Video();
        this.planeVideo.x = 0;
        this.planeVideo.y = 0;
        this.planeVideo.width = 1920;
        this.planeVideo.height = 1080;
        this.planeVideo.fullscreen = false;
        // this.planeVideo.poster=("../resource/assets/particle/end_v3.mp4");
        this.planeVideo.load("resource/assets/particle/" + status);
        this.planeVideo.once(egret.Event.COMPLETE, this.onLoad, this);
        this.addChild(this.planeVideo);
    };
    //视频加载
    KingKong.prototype.onLoad = function (e) {
        var _this = this;
        var isEnd = e.target.src.split("/").reverse()[0].split("V")[0] == "end";
        // console.log("加载成功", e.target.src.split("/").reverse()[0].split("V")[0])
        if (isEnd) {
            setTimeout(function () {
                _this.planeVideo.play(0);
            }, 500);
            this.planeVideo.addEventListener(egret.Event.ENDED, this.videoEnd, this);
        }
        else {
            this.planeVideo.play(0);
            console.log("这是开始动画-----》");
            this.planeVideo.addEventListener(egret.Event.ENDED, this.videoStart, this);
        }
    };
    KingKong.prototype.videoStart = function () {
        console.log("播放完成");
        this.PlaneV.source = "V" + this.planeCount + "_png";
        this.randomPositions();
        this.removeChild(this.planeVideo);
        this.beamButton(false); //发射按钮状态
    };
    //视频结束回调
    KingKong.prototype.videoEnd = function () {
        var _this = this;
        console.log("播放完成");
        this.removeChild(this.planeVideo);
        this.beamButton(false); //发射按钮状态
        this.nextButton(true); //下一关按钮状态
        // this.startPlane("startPlane3_png", "startPlane_json", "v3");
        // this.Plane("start")
        if (this.planeCount >= 5) {
            this.switchArr.map(function (item) {
                _this.removeChild(item);
            });
            this.overImage.visible = true;
            this.overTX.visible = true;
            this.gameOverFun();
        }
    };
    //合体视频
    KingKong.prototype.gameOverFun = function () {
        var _this = this;
        this.gameVideo = new egret.Video();
        this.gameVideo.x = 0;
        this.gameVideo.y = 0;
        this.gameVideo.width = 1920;
        this.gameVideo.height = 1080;
        this.gameVideo.fullscreen = false;
        // this.planeVideo.poster=("../resource/assets/particle/end_v3.mp4");
        this.gameVideo.load("resource/assets/particle/over.mp4");
        this.gameVideo.once(egret.Event.COMPLETE, function () {
            _this.gameVideo.play(0);
            _this.gameVideo.addEventListener(egret.Event.ENDED, function () {
                _this.removeChild(_this.gameVideo);
                _this.GAMEOVER.visible = true;
                _this.effetcFun("dot_top_png", "dot_top_json");
                _this.effetcFun("face_top_png", "face_top_json");
                _this.effetcFun("line_top_png", "line_top_json");
                _this.huan.visible = true;
                _this.huan0.visible = true;
                _this.endHuan.play(0); //循环动画
            }, _this);
        }, this);
        this.addChild(this.gameVideo);
    };
    //音乐
    KingKong.prototype.musicFun = function () {
        if (this.isMusic) {
            this.bx_bj_play.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.bx_bj_play = this.bx_bj.play(0, -1);
            this.isMusic = true;
            this.music.source = "music_png";
        }
    };
    //位置
    KingKong.prototype.randomPositions = function () {
        this.randomX = this.randomPosition[this.planeCount - 1].rx;
        this.randomY = this.randomPosition[this.planeCount - 1].ry;
        this.bottomCount.x = this.randomPosition[this.planeCount - 1].x;
        this.bottomCount.y = this.randomPosition[this.planeCount - 1].y;
    };
    //重置
    KingKong.prototype.reviseFun = function () {
        this.start("revise");
    };
    KingKong.prototype.overTXFun = function (e) {
        console.log(e.target);
        window.location.reload();
    };
    return KingKong;
}(eui.Component));
__reflect(KingKong.prototype, "KingKong", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=KingKong.js.map