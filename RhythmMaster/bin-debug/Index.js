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
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super.call(this) || this;
        _this.subNum = new Value(0); //定义可监听的数字
        _this.isPlayMusic = false;
        _this.isPlayAnimate = [];
        _this.resultArr = [
            [
                0, 2, 4, 9, 13
            ],
            [
                2, 4, 5, 9, 13
            ]
        ];
        _this.preinstallArr = [
            [
                4, 5, "x", 2, 9, 4, 0, 5, 9, 0, 1, 3, 0, 5
            ],
            [
                1, 9, "x", 5, 3, 0, 5, 7, 9, 5, 1, 0, 0, 7
            ]
        ];
        _this.isResultArr = [];
        //动画
        _this.jiezou1 = {
            // take: "tickling",			//接收返回值使用 可传可不传
            dom: "animateGroup",
            dragonbonesData: "jiezou1_ske_json",
            textureData1: "jiezou1_tex_json",
            texture1: "jiezou1_tex_png",
            name: "jiezou1",
            count: 1 //必传
        };
        _this.jiezou2 = {
            // take: "tickling",			//接收返回值使用 可传可不传
            dom: "animateGroup",
            dragonbonesData: "jiezou2_ske_json",
            textureData1: "jiezou2_tex_json",
            texture1: "jiezou2_tex_png",
            name: "jiezou2",
            count: 1 //必传
        };
        _this.jiezou3 = {
            // take: "tickling",			//接收返回值使用 可传可不传
            dom: "animateGroup",
            dragonbonesData: "jiezou3_ske_json",
            textureData1: "jiezou3_tex_json",
            texture1: "jiezou3_tex_png",
            name: "jiezou3",
            count: 1 //必传
        };
        _this.jiezou4 = {
            // take: "tickling",			//接收返回值使用 可传可不传
            dom: "animateGroup",
            dragonbonesData: "jiezou4_ske_json",
            textureData1: "jiezou4_tex_json",
            texture1: "jiezou4_tex_png",
            name: "jiezou4",
            count: 1 //必传
        };
        _this.changpian = {
            // take: "tickling",			//接收返回值使用 可传可不传
            dom: "changpianGroup",
            dragonbonesData: "changpian_ske_json",
            textureData1: "changpian_tex_json",
            texture1: "changpian_tex_png",
            name: "changpian",
            count: -1 //必传
        };
        _this.isMusic = true;
        _this.tq_bj = RES.getRes("tq_bj_mp3");
        _this.success = RES.getRes("success_mp3");
        _this.error = RES.getRes("error_mp3");
        _this.bj = RES.getRes("bj_mp3");
        _this.music1 = RES.getRes("music1_mp3");
        _this.music2 = RES.getRes("music2_mp3");
        _this.tip = RES.getRes("tip_mp3");
        _this.skinName = "IndexSkin";
        return _this;
    }
    Index.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Index.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
        this.subNum.addEventListener(Data.DATA, this.changNumber, this); //当数字发生改变时调用
        this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showSubject.visible = true; }, this);
        this.showSubject.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showSubject.visible = false; }, this);
        this.labelGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enteringLabel, this);
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.referFun, this);
        this.gameOver.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.isMusic = true; _this.musicFun(); _this.start(); }, this);
        // 开始按钮 等游戏实现后 解开注释使用
        this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.endStart.visible = false;
            _this.start();
        }, this);
        // this.start()
    };
    // 开始游戏
    Index.prototype.start = function () {
        this.subNum.value = 1;
        this.animationFun(this.changpian);
        this.music_bj = this.bj.play(0, -1);
        this.playMusic('tip');
        this.gameOver.visible = false;
    };
    //点击输入正确答案按钮
    Index.prototype.enteringLabel = function (e) {
        if (e.target.name != "group") {
            this.clickLabel = e.target;
            this.index = this.labelGroup.$children.indexOf(e.target);
            var x = e.target.x + e.target.parent.x - 500;
            var y = e.target.y + e.target.parent.y - 200;
            this.addChild(new Keyset(this, 400, 140));
        }
    };
    //判断对错
    Index.prototype.judgeResult = function () {
        var preinstall = this.preinstallArr[this.subNum.value - 1];
        this.isResultArr[this.index] = this.resultNum;
        this.isSuccessFun();
        if (this.resultNum == preinstall[this.index]) {
            console.log("回答正确");
            this.Highlight(this.keyingGroup.$children[this.index], true);
            this.playMusic("success");
        }
        else {
            console.log("回答错误");
            this.Highlight(this.keyingGroup.$children[this.index], false);
            this.playMusic("error");
        }
    };
    //监听数字函数
    Index.prototype.changNumber = function () {
        this.labelGroup.visible = true;
        this.keyingGroup.visible = true;
        this.showNumGroup.visible = true;
        var labelChild = this.labelGroup.$children;
        var keyingChild = this.keyingGroup.$children;
        var showNumChild = this.showNumGroup.$children;
        this.isResultArr = [];
        for (var i = 0; i < this.labelGroup.$children.length; i++) {
            var index = this.resultArr[this.subNum.value - 1].indexOf(i); //在答案中查找对应下标
            var imgUrl = keyingChild[i].source.split("_"); //区分可点与不可点按键图片
            if (index != -1) {
                var preinstall = this.preinstallArr[this.subNum.value - 1]; //预设字母数字值的数组
                labelChild[i].visible = false; //隐藏预设label 
                keyingChild[i].source = imgUrl[0] + "_d_" + imgUrl[imgUrl.length - 2] + "_" + imgUrl[imgUrl.length - 1]; //设置不可点图片样式
                showNumChild[i].source = preinstall[i] + "_png";
                this.isResultArr[i] = preinstall[i];
            }
            else {
                labelChild[i].visible = true;
                keyingChild[i].source = imgUrl[0] + "_" + imgUrl[imgUrl.length - 2] + "_" + imgUrl[imgUrl.length - 1]; //设置可点图片样式
                showNumChild[i].source = "";
            }
            keyingChild[i].visible = true;
            showNumChild[i].visible = true;
            keyingChild[i].filters = null; //清除高亮显示
        }
        if (this.subNum.value >= 2) {
            labelChild[5].visible = false;
            keyingChild[5].visible = false;
            showNumChild[5].visible = false;
        }
        this.isSuccessFun();
    };
    //判断是否全部答对
    Index.prototype.isSuccessFun = function () {
        var preinstall = this.preinstallArr[this.subNum.value - 1];
        console.log(this.isResultArr);
        if (this.isResultArr.join("") == preinstall.join("")) {
            console.log("正确");
            this.submit.enabled = true;
        }
        else {
            console.log("有误");
            this.submit.enabled = false;
        }
        // for (let i = 0; i < preinstall.length; i++) {
        // 		var child: any = this.showNumGroup.getChildAt(i);
        // 		// console.log(preinstall[i]==child.source.split("_")[0])
        // 		console.log(child.source.split("_")[0])
        // 	}
    };
    //确认 提交按钮
    Index.prototype.referFun = function () {
        var _this = this;
        this.isMusic = true;
        this.musicFun();
        this.labelGroup.visible = false;
        this.keyingGroup.visible = false;
        this.showNumGroup.visible = false;
        this.submit.enabled = false;
        this.isPlayAnimate = [];
        this.animationFun(this.jiezou1);
        this.animationFun(this.jiezou2);
        this.animationFun(this.jiezou3);
        this.animationFun(this.jiezou4);
        this.playMusic("music" + this.subNum.value).addEventListener(egret.Event.SOUND_COMPLETE, function () {
            _this.isPlayMusic = true;
        }, this);
        console.log("确认");
    };
    //开始 暂停 背景音乐
    Index.prototype.musicFun = function () {
        if (this.isMusic) {
            this.music_bj.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.music_bj = this.bj.play(0, -1);
            this.isMusic = true;
            this.music.source = "music_png";
        }
    };
    //重置
    Index.prototype.resetFun = function () {
        window.location.reload();
    };
    //调用移除上一个音乐 并播放本次音乐
    Index.prototype.playMusic = function (name, count) {
        if (count === void 0) { count = 1; }
        if (this.racTipMusic) {
            this.racTipMusic.stop();
        }
        this.racTipMusic = this[name].play(0, count);
        return this.racTipMusic;
    };
    // 动画  
    Index.prototype.animationFun = function (dbObj) {
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
        armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = Math.random() + 1;
        //监听帧
        armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, function (e) {
            // console.log(e.frameLabel)
        }, this);
        //动画播放完成
        armature.addEventListener(dragonBones.EventObject.COMPLETE, function () {
            if (armature.parent) {
                dbObj.dom ? _this[dbObj.dom].removeChild(armature) : _this.removeChild(armature);
            }
            if (_this.isPlayMusic) {
                _this.isPlayAnimate.push(dbObj.name);
                if (_this.isPlayAnimate.length >= 4 && _this.subNum.value <= 1) {
                    _this.subNum.value++;
                    _this.isPlayMusic = false;
                    _this.musicFun();
                }
                else if (_this.isPlayAnimate.length >= 4 && _this.subNum.value >= 2) {
                    console.log("恭喜通关");
                    _this.isPlayMusic = false;
                    _this.musicFun();
                    _this.gameOver.visible = true;
                    _this.successTween.play(0);
                }
            }
            else {
                if (dbObj.name == "jiezou1") {
                    _this.animationFun(_this.jiezou1);
                }
                else if (dbObj.name == "jiezou2") {
                    _this.animationFun(_this.jiezou2);
                }
                else if (dbObj.name == "jiezou3") {
                    _this.animationFun(_this.jiezou3);
                }
                else if (dbObj.name == "jiezou4") {
                    _this.animationFun(_this.jiezou4);
                }
            }
        }, this);
        return armature;
    };
    //高亮显示
    Index.prototype.Highlight = function (target, isSuccess) {
        var distance = 6; /// 阴影的偏移距离，以像素为单位
        var angle = 45; /// 阴影的角度，0 到 360 度
        var color = 0x56fdff; /// 阴影的颜色，不包含透明度
        var alpha = 0.7; /// 光晕的颜色透明度，是对 color 参数的透明度设定
        var blurX = 30; /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY = 30; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength = 3; /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality = 1 /* LOW */; /// 应用滤镜的次数，暂无实现
        var inner = false; /// 指定发光是否为内侧发光
        var knockout = false; /// 指定对象是否具有挖空效果
        var dropShadowFilter = new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY, strength, quality, inner, knockout);
        if (isSuccess) {
            target.filters = [dropShadowFilter];
        }
        else {
            target.filters = null;
        }
    };
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index", ["eui.UIComponent", "egret.DisplayObject"]);
