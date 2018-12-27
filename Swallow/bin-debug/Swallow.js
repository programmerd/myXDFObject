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
var Swallow = (function (_super) {
    __extends(Swallow, _super);
    function Swallow() {
        var _this = _super.call(this) || this;
        _this.subNum = 1;
        _this.isCursor = true; //是否第一次
        _this.touchStatus = false; //当前触摸状态，按下时，值为true
        _this.distance = new egret.Point();
        _this.shape = new egret.Shape();
        _this.isFirstLineTo = true;
        _this.isClose = [];
        _this.trigonPosition = [];
        _this.submitArr = [
            [18],
            [20],
            [2, 3]
        ];
        _this.resultsArr = [
            ["ABE", "ACE", "BD", "CD"],
            ["BCE", "ABE", "CD", "AD"],
            ["ABO", "BCO", "AF", "CF", "ACO", "BCO", "AE", "BE", "ABO", "ACO", "BD", "CD"],
        ];
        _this.resultArr = [];
        _this.egretFactory = dragonBones.EgretFactory.factory;
        _this.warcraftNormal = { dragonbonesData: "swallow1_ske_json", textureData1: "swallow1_tex_json", texture1: "swallow1_tex_png", name: "swallow1", count: -1 };
        _this.file = { dragonbonesData: "fuhuo_ske_json", textureData1: "fuhuo_tex_json", texture1: "fuhuo_tex_png", name: "fuhuo", count: 1 };
        _this.paopaosuilie = { dom: "clickSubject", dragonbonesData: "paopaosuilie_ske_json", textureData1: "paopaosuilie_tex_json", texture1: "paopaosuilie_tex_png", name: "paopaosuilie", count: 1 };
        _this.isMusic = true;
        _this.fy_bj = RES.getRes("fy_bj_mp3"); //背景
        _this.fy_tip1 = RES.getRes("fy_tip1_mp3"); //提示1
        _this.fy_tip2 = RES.getRes("fy_tip2_mp3"); //提示2
        _this.fy_revise = RES.getRes("fy_revise_mp3"); //结束提示
        _this.fy_zq = RES.getRes("fy_zq_mp3"); //正确
        _this.fy_error = RES.getRes("fy_error_mp3"); //错误
        _this.fy_clickTip = RES.getRes("fy_clickTip_mp3"); //点击
        _this.fy_fh = RES.getRes("fy_fh_mp3"); //复活
        _this.fy_gshj = RES.getRes("fy_gshj_mp3"); //光束汇聚
        _this.fy_jiao = RES.getRes("fy_jiao_mp3"); //叫
        _this.fy_jzdk = RES.getRes("fy_jzdk_mp3"); //卷轴打开
        _this.fy_qpbz = RES.getRes("fy_qpbz_mp3"); //气泡爆炸
        _this.fy_tuoru = RES.getRes("fy_tuoru_mp3"); //拖入
        _this.skinName = "SwallowSkin";
        _this.addEventListener(egret.Event.ENTER_FRAME, function () {
            dragonBones.WorldClock.clock.advanceTime(0.03);
        }, _this);
        return _this;
    }
    Swallow.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Swallow.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.clickBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtnFun, this);
        this.clickSubject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSubjectFun, this);
        this.shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.shape.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.affirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.affirmFun, this);
        this.switch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchFun, this);
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backFun, this);
        this.clickSubLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSubLabelFun, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
        this.overRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
        this.labelGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showTipFun, this);
        this.showTipGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showTipGroup.visible = false; }, this);
        this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.endStart.visible = false;
            _this.start();
        }, this);
        // this.start()
    };
    Swallow.prototype.start = function () {
        var _this = this;
        this.showSubject.visible = false;
        this.flie.visible = false;
        this.overRect.visible = false;
        this.tipLabel.visible = true;
        this.tipLabelOpen.visible = false;
        this.fy_tip1.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, function () {
            _this.music_bj = _this.fy_bj.play(0, -1);
            _this.music_bj.volume = 0.3;
            _this.playMusic("fy_jzdk");
            // this.Reel.play(0);
            // setTimeout(() => {
            // 	this.cursorFun()
            // }, 1000)
        }, this);
        this.Reel.play(0);
        setTimeout(function () {
            _this.cursorFun();
        }, 1000);
    };
    // 点击题目
    Swallow.prototype.clickSubjectFun = function (e) {
        if (e.target.name != "group" && e.target.source.split("_").reverse()[1] == "click") {
            this.mc.x = 880;
            this.mc.y = 365;
            this.tipLabel.visible = false;
            this.tipLabelOpen.visible = true;
            this.fy_clickTip.play(0, 1);
            this.playMusic("fy_tip2");
            this.affirm.enabled = false;
            this.switch.enabled = false;
            // this.switch.visible = true;
            this.subNum = e.target.name;
            this.showSubject.visible = true;
            this.clickBtn.visible = true;
            this.moveGroup.visible = true;
            this.clickSubLabel.visible = false;
            this.subject.source = "subject" + e.target.name + "_png";
            this.title.source = "title" + e.target.name + "_png";
            this.input.source = "input" + e.target.name + "_png";
            this.imgBorder.source = "border" + e.target.name + "_png";
            for (var i = 0; i < this.resultsArr[this.subNum - 1].length; i++) {
                this.resultArr[i] = this.resultsArr[this.subNum - 1][i];
            }
            this.isClose = [];
            this.trigonPosition = [];
            this.isFirstLineTo = true;
            for (var i = 1; i < 4; i++) {
                if (i == this.subNum) {
                    this["moveGroup" + i].visible = true;
                    this["clickBtn" + i].visible = true;
                }
                else {
                    this["moveGroup" + i].visible = false;
                    this["clickBtn" + i].visible = false;
                }
                this["subLabel" + i].visible = false;
                this["clickSubLabel" + i].visible = false;
            }
        }
    };
    //连接
    Swallow.prototype.clickBtnFun = function (e) {
        if (e.target.name != "group" && this.trigonPosition.indexOf(e.target.name) == -1) {
            this.playMusic("fy_clickTip");
            // console.log(e.target.name);
            // console.log(e.target)
            var x = this.clickBtn.x + e.target.parent.x + e.target.x + (e.target.width / 2);
            var y = this.clickBtn.y + e.target.parent.y + e.target.y + (e.target.height / 2);
            this.isClose.push({ x: x, y: y });
            if (this.isFirstLineTo) {
                this.trigonPosition = [];
                this.shape.graphics.clear();
                this.shape.graphics.lineStyle(15, 0x663500);
                this.shape.graphics.moveTo(x, y);
                this.shape.graphics.lineTo(x, y);
                this.isFirstLineTo = false;
                this.mc.x = 720;
                this.mc.y = 660;
            }
            else {
                this.shape.graphics.lineTo(x, y);
                if (this.isClose.length >= 2) {
                    this.mc.x = 910;
                    this.mc.y = 600;
                    this.shape.touchEnabled = true;
                }
                if (this.isClose.length >= 3) {
                    // this.mc.x = 800;
                    // this.mc.y = 500;
                    if (this.mc)
                        if (this.mc.parent) {
                            this.removeChild(this.mc);
                        }
                    this.shape.graphics.clear();
                    this.shape.graphics.lineStyle(15, 0x663500);
                    this.shape.graphics.beginFill(0xF1C411);
                    this.shape.graphics.moveTo(this.isClose[0].x, this.isClose[0].y);
                    this.shape.graphics.lineTo(this.isClose[0].x, this.isClose[0].y);
                    this.shape.graphics.lineTo(this.isClose[1].x, this.isClose[1].y);
                    this.shape.graphics.lineTo(this.isClose[2].x, this.isClose[2].y);
                    this.shape.graphics.lineTo(this.isClose[0].x, this.isClose[0].y);
                    this.shape.graphics.endFill();
                    this.isClose = [];
                    this.isFirstLineTo = true;
                }
            }
            this.trigonPosition.push(e.target.name);
            this.addChildAt(this.shape, 100);
            if (this.isCursor && this.isClose.length == 0) {
                this.cursorFun2();
                this.isCursor = false;
            }
        }
    };
    //按下
    Swallow.prototype.mouseDown = function (e) {
        this.trigonPosition.sort();
        this.touchStatus = true;
        this.distance.x = e.stageX - this.shape.x;
        this.distance.y = e.stageY - this.shape.y;
        if (this.mc)
            if (this.mc.parent) {
                this.removeChild(this.mc);
            }
    };
    //抬起
    Swallow.prototype.mouseUp = function (e) {
        var _this = this;
        // this.isFirstLineTo = false;
        // console.log("抬起")
        // console.log(this.resultArr)
        var isHit = this["moveGroup" + this.subNum].hitTestPoint(e.stageX, e.stageY);
        var index = this.resultArr.indexOf(this.trigonPosition.join(""));
        // console.log(index)
        // console.log(isHit)
        // console.log(this.trigonPosition.join(""));
        if (isHit && index != -1) {
            this.playMusic("fy_zq");
            console.log("答案正确");
            var x = this.moveGroup.x + this["moveGroup" + this.subNum].x + this["moveGroup" + this.subNum].$children[index].x;
            var y = this.moveGroup.y + this["moveGroup" + this.subNum].y + this["moveGroup" + this.subNum].$children[index].y;
            this.imgTransition.visible = true;
            this.imgTransition.source = "img_" + this.subNum + "_" + this.trigonPosition.join("") + "_png";
            this.imgTransition.width = this["moveGroup" + this.subNum].$children[index].width;
            this.imgTransition.height = this["moveGroup" + this.subNum].$children[index].height;
            this.imgTransition.x = e.stageX;
            this.imgTransition.y = e.stageY;
            egret.Tween.get(this.imgTransition, {
                loop: false,
            })
                .to({ x: x, y: y }, 500) //设置2000毫秒内 rotation 属性变为360
                .call(function () {
                _this["moveGroup" + _this.subNum].$children[index].source = "img_" + _this.subNum + "_" + _this.trigonPosition.join("") + "_png";
                _this.resultArr[index] = "TRUE";
                _this.trigonPosition = [];
                _this.imgTransition.visible = false;
                _this.isAchieve(); //判断是否填完
            });
        }
        else {
            this.playMusic("fy_error");
            console.log("答案错误");
            this.trigonPosition = [];
        }
        // 画线初始化
        this.shape.x = 0;
        this.shape.y = 0;
        this.shape.graphics.clear();
        this.isClose = [];
        this.isFirstLineTo = true;
        this.imgBorder.visible = false;
        this.touchStatus = false;
    };
    //鼠标移动
    Swallow.prototype.mouseMove = function (e) {
        if (this.touchStatus) {
            this.shape.x = e.stageX - this.distance.x;
            this.shape.y = e.stageY - this.distance.y;
            var isHit = this["moveGroup" + this.subNum].hitTestPoint(e.stageX, e.stageY);
            isHit ? this.imgBorder.visible = true : this.imgBorder.visible = false;
            isHit ? this.playMusic("fy_tuoru") : "";
        }
    };
    Swallow.prototype.filtersFun = function () {
        var distance = 0; /// 阴影的偏移距离，以像素为单位
        var angle = 45; /// 阴影的角度，0 到 360 度
        var color = 0xffff00; /// 阴影的颜色，不包含透明度
        var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定
        var blurX = 16; /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY = 16; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength = 3; /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality = 1 /* LOW */; /// 应用滤镜的次数，暂无实现
        var inner = false; /// 指定发光是否为内侧发光
        var knockout = false; /// 指定对象是否具有挖空效果
        var dropShadowFilter = new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY, strength, quality, inner, knockout);
        this.clickBtn.filters = [dropShadowFilter];
    };
    //判断是否填完
    Swallow.prototype.isAchieve = function () {
        var item = true;
        for (var i = 0; i < this.resultArr.length; i++) {
            if (this.resultArr[i] != "TRUE") {
                item = false;
                break;
            }
        }
        item ? this.switch.enabled = true : this.switch.enabled = false;
    };
    //输入答案
    Swallow.prototype.clickSubLabelFun = function (e) {
        if (e.target.name != "group") {
            this.playMusic("fy_tuoru");
            this.affirm.enabled = true;
            this.clickLabel = e.target;
            this.addChild(new Keyset(this, this.clickSubLabel.x, this.clickSubLabel.y - 300));
        }
    };
    //确认
    Swallow.prototype.affirmFun = function () {
        var _this = this;
        var subLabel = this["clickSubLabel" + this.subNum].$children;
        var result = true;
        for (var i = 0; i < subLabel.length; i++) {
            if (subLabel[i].text != this.submitArr[this.subNum - 1][i]) {
                subLabel[i].text = "输入";
                result = false;
                break;
            }
        }
        if (result) {
            this.playMusic("fy_clickTip");
            this.tipLabel.visible = true;
            this.tipLabelOpen.visible = false;
            this.clickSubLabel.visible = false;
            this["subLabel" + this.subNum].visible = false;
            this.showSubject.visible = false;
            var imgs = this.clickSubject.$children;
            setTimeout(function () {
                var lei = _this.animationFun(_this.paopaosuilie);
                lei.x = imgs[_this.subNum - 1].x + imgs[_this.subNum - 1].width / 2;
                lei.y = imgs[_this.subNum - 1].y + imgs[_this.subNum - 1].height / 2;
            }, 500);
            // if (this.subNum >= 3) {
            // 	var imgs: any = this.clickSubject.$children[this.subNum - 1]
            // 	imgs.source = "sub_" + this.subNum + "_up_png";
            // 	this.flie.visible = true;
            // 	setTimeout(() => {
            // 		this.pokeAnimation(this.file)
            // 		this.playMusic("fy_gshj");
            // 		this.fy_fh.play(0, 1)
            // 	}, 1000)
            // } else {
            // 	var imgs: any = this.clickSubject.$children;
            // 	imgs[this.subNum - 1].source = "sub_" + this.subNum + "_up_png";
            // 	imgs[this.subNum].source = "sub_" + this.subNum + "_click_png";
            // }
        }
        else {
            this.playMusic("fy_error");
        }
    };
    //切换
    Swallow.prototype.switchFun = function () {
        this.playMusic("fy_clickTip");
        this.moveGroup.visible = false;
        this.clickBtn.visible = false;
        this.clickSubLabel.visible = true;
        this["moveGroup" + this.subNum].visible = false;
        this["clickBtn" + this.subNum].visible = false;
        this["subLabel" + this.subNum].visible = true;
        this["clickSubLabel" + this.subNum].visible = true;
        this["clickSubLabel" + this.subNum].$children.map(function (item) {
            item.text = "输入";
        });
        this.switch.enabled = false;
    };
    //返回
    Swallow.prototype.backFun = function () {
        this.playMusic("fy_clickTip");
        this.tipLabel.visible = true;
        this.tipLabelOpen.visible = false;
        this.shape.graphics.clear();
        this["subLabel" + this.subNum].visible = false;
        this.moveGroup.visible = false;
        this.clickBtn.visible = false;
        this.clickSubLabel.visible = false;
        this.showSubject.visible = false;
        if (this.subNum >= 3) {
            this["moveGroup" + this.subNum].$children.map(function (item) {
                if (item.source != "BD_png" || item.source != "DC_png")
                    item.source = "yanweimoxing_10_png";
            });
        }
        else {
            this["moveGroup" + this.subNum].$children.map(function (item) {
                item.source = "yanweimoxing_09_png";
            });
        }
        if (this.mc)
            if (this.mc.parent) {
                this.removeChild(this.mc);
            }
    };
    //手指
    Swallow.prototype.cursorFun = function () {
        if (this.mc)
            if (this.mc.parent) {
                this.removeChild(this.mc);
            }
        var data = RES.getRes("shouzhi_json");
        var txtr = RES.getRes("shouzhi_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("shouzhi"));
        this.addChildAt(this.mc, 900);
        this.mc.play(-1);
        this.mc.x = 1200;
        this.mc.y = 510;
    };
    Swallow.prototype.cursorFun2 = function () {
        if (this.mc)
            if (this.mc.parent) {
                this.removeChild(this.mc);
            }
        var data = RES.getRes("shouzhi2_json");
        var txtr = RES.getRes("shouzhi2_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("shouzhi2"));
        this.addChildAt(this.mc, 900);
        this.mc.play(-1);
        this.mc.x = 850;
        this.mc.y = 700;
    };
    //动画
    Swallow.prototype.fireAnimation = function () {
        var data = RES.getRes("fuhuo01_mc_json");
        var txtr = RES.getRes("fuhuo01_tex_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData("fuhuo01"));
        this.addChild(mc);
        mc.play(-1);
        mc.x = 500;
        mc.y = 500;
        mc.addEventListener(egret.Event.COMPLETE, function () {
            console.log("播放完成");
        }, this);
    };
    //题目显示
    Swallow.prototype.showTipFun = function () {
        this.showTipGroup.visible = true;
        this.showSubjectTip.source = this.tipLabel.visible ? "yanweimoxing_70_png" : "yanweimoxing_71_png";
    };
    //龙骨动画
    Swallow.prototype.pokeAnimation = function (dbObj) {
        var _this = this;
        // if (this.armature) {
        // 	this.warcraftGroup.removeChild(this.armature.getDisplay())
        // }
        // console.log(dbObj)
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData1 = RES.getRes(dbObj.textureData1);
        var texture1 = RES.getRes(dbObj.texture1);
        this.egretFactory.parseDragonBonesData(dragonbonesData);
        this.egretFactory.parseTextureAtlasData(textureData1, texture1);
        this.armature = this.egretFactory.buildArmature(dbObj.name);
        var armatureDisplay = this.armature.getDisplay();
        this.flie.addChild(armatureDisplay);
        if (dbObj.name == "swallow1") {
            armatureDisplay.x = -90;
            armatureDisplay.y = -220;
        }
        this.armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 0.8;
        dragonBones.WorldClock.clock.add(this.armature); //添加时间钟
        //监听时间钟 只需执行一次 放到了构造中 -->
        //播放完成的回调
        if (dbObj.name == "fuhuo") {
            setTimeout(function () {
                _this.swallow.source = "yanweimoxing_34_png";
                _this.closeSub.play(0);
            }, 1000);
        }
        this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
            var _this = this;
            // this.armature.animation.gotoAndStopByFrame(dbObj.name, 1)
            console.log("动画播放完成");
            this.overRect.visible = true;
            this.flie.removeChild(this.armature.getDisplay());
            this.closeSwallow.play(0);
            this.fy_revise.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, function () {
                _this.playMusic("fy_jiao");
            }, this);
            this.pokeAnimation(this.warcraftNormal);
        }, this);
    };
    // 特效
    Swallow.prototype.animationFun = function (dbObj) {
        var _this = this;
        //进来先移除动画在播放  避免动画叠加
        if (this[dbObj.take]) {
            if (this[dbObj.take].parent) {
                dbObj.dom ? this[dbObj.dom].removeChild(this[dbObj.take]) : this.removeChild(this[dbObj.take]);
            }
        }
        //添加文件
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData = RES.getRes(dbObj.textureData1);
        var texture = RES.getRes(dbObj.texture1);
        // 创建动画工厂
        var egretFactoryA = new dragonBones.EgretFactory();
        egretFactoryA.parseDragonBonesData(dragonbonesData);
        egretFactoryA.parseTextureAtlasData(textureData, texture);
        //创建动画
        var armature = egretFactoryA.buildArmatureDisplay(dbObj.name);
        //添加到舞台
        dbObj.dom ? this[dbObj.dom].addChild(armature) : this.addChild(armature);
        //播放动画
        armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 1;
        armature.scaleX = 1.2;
        armature.scaleY = 1.2;
        //监听帧
        armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, function (e) {
            // console.log(e.frameLabel)
        }, this);
        //动画播放完成
        armature.addEventListener(dragonBones.EventObject.COMPLETE, function () {
            if (armature.parent) {
                dbObj.dom ? _this[dbObj.dom].removeChild(armature) : _this.removeChild(armature);
            }
            if (_this.subNum >= 3) {
                var imgs = _this.clickSubject.$children[_this.subNum - 1];
                imgs.source = "sub_" + _this.subNum + "_up_png";
                _this.flie.visible = true;
                setTimeout(function () {
                    _this.pokeAnimation(_this.file);
                    _this.playMusic("fy_gshj");
                    _this.fy_fh.play(0, 1);
                }, 1000);
            }
            else {
                var imgs = _this.clickSubject.$children;
                imgs[_this.subNum - 1].source = "sub_" + _this.subNum + "_up_png";
                imgs[_this.subNum].source = "sub_" + _this.subNum + "_click_png";
            }
        }, this);
        return armature;
    };
    Swallow.prototype.musicFun = function () {
        if (this.isMusic) {
            this.music_bj.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.music_bj = this.fy_bj.play(0, -1);
            this.music_bj.volume = 0.3;
            this.isMusic = true;
            this.music.source = "music_png";
        }
    };
    //重置
    Swallow.prototype.reviseFun = function () {
        window.location.reload();
        // var imgs: any = this.clickSubject.$children;
        // var lei = this.animationFun(this.paopaosuilie)
        // lei.x = imgs[this.subNum - 1].x + imgs[this.subNum - 1].width / 2;
        // lei.y = imgs[this.subNum - 1].y + imgs[this.subNum - 1].height / 2;
    };
    //移除并播放音乐
    Swallow.prototype.playMusic = function (name, count) {
        if (count === void 0) { count = 1; }
        if (this.racTipMusic) {
            this.racTipMusic.stop();
        }
        this.racTipMusic = this[name].play(0, count);
    };
    return Swallow;
}(eui.Component));
__reflect(Swallow.prototype, "Swallow", ["eui.UIComponent", "egret.DisplayObject"]);
