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
        _this.file = { dom: "panda", dragonbonesData: "xiongmao_ske_json", textureData1: "xiongmao_tex_json", texture1: "xiongmao_tex_png", name: "pandaPlay", count: 1 };
        _this.huoAnimate = { dom: "bomb", dragonbonesData: "dianhuo_ske_json", textureData1: "dianhuo_tex_json", texture1: "dianhuo_tex_png", name: "dianhuo", count: 3 };
        _this.bombAinamate = { dom: "bombGroup", dragonbonesData: "baozha01_ske_json", textureData1: "baozha01_tex_json", texture1: "baozha01_tex_png", name: "bomp", count: 1 };
        _this.stream = { dom: "panda", dragonbonesData: "liulei_ske_json", textureData1: "liulei_tex_json", texture1: "liulei_tex_png", name: "liulei", count: -1 };
        _this.over = { dom: "overs", dragonbonesData: "yanhua01_ske_json", textureData1: "yanhua01_tex_json", texture1: "yanhua01_tex_png", name: "yanhua", count: -1 };
        _this.sunNum = 1;
        _this.clickCount = 1;
        _this.clickImageArr = [];
        _this.clickImagePosArr = [];
        _this.resultArr = [
            ["A33"],
            ["A53", "C51"],
            ["A73", "C42", "C22"],
            ["C63", "C42", "C22"]
        ];
        _this.isResult = [];
        _this.imgArr = ["luobo_png", "nangua_png", "wosun_png", "xigua_png", "yumi_png"];
        _this.isMusic = true;
        _this.panda_bj = RES.getRes("panda_bj_mp3");
        _this.panda_click = RES.getRes("panda_click_mp3");
        _this.panda_chi = RES.getRes("panda_chi_mp3");
        _this.panda_error = RES.getRes("panda_error_mp3");
        _this.panda_go = RES.getRes("panda_go_mp3");
        _this.panda_sub1 = RES.getRes("panda_sub1_mp3");
        _this.panda_sub2 = RES.getRes("panda_sub2_mp3");
        _this.panda_sub3 = RES.getRes("panda_sub3_mp3");
        _this.panda_sub4 = RES.getRes("panda_sub4_mp3");
        _this.panda_bz = RES.getRes("panda_bz_mp3");
        _this.skinName = "IndexSkin";
        return _this;
    }
    Index.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        this.skinName = "IndexSkin";
    };
    Index.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
        this.gameOver.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
        this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.subjectFun, this);
        this.hint.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.hint.visible = false; }, this);
        this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickResult, this);
        this.assemble.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickResult, this);
        this.shiwu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickShiwuFun, this);
        this.keep.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initialise, this);
        this.keepOn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initialise, this);
        this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
        this.result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resultFun, this);
        this.resultMask.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.resultMask.visible = false; }, this);
        // 开始按钮 等游戏实现后 解开注释使用
        this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.endStart.visible = false;
            _this.start();
        }, this);
        // this.start()
    };
    // 开始游戏
    Index.prototype.start = function () {
        this.sunNum = 1;
        this.gameOver.visible = false;
        this.music_bj = this.panda_bj.play(0, -1);
        this.cursorFun();
        this.initialise();
    };
    //初始化
    Index.prototype.initialise = function () {
        var _this = this;
        console.log(this.sunNum);
        this.playMusic("panda_sub" + this.sunNum);
        this.isResult = [];
        this.keepMask.visible = false;
        this.keep.visible = false;
        this.rank.touchChildren = true;
        this.assemble.touchChildren = true;
        this.shiwu.touchChildren = true;
        this.subject.source = "timu" + this.sunNum + "_png";
        this.digit.source = "xiamian" + this.sunNum + "_png";
        this.resultImg.source = "daan" + this.sunNum + "_png";
        this.pandas.source = "pandaImg_png";
        this.pandas.visible = true;
        this.resultImg.visible = false;
        this.revise.visible = false;
        for (var i = 0; i < this.rank.$children.length; i++) {
            if ((this.sunNum - 1) == i) {
                this.rank.$children[i].visible = true;
                this.assemble.$children[i].visible = true;
                this.dataGroup.$children[i].visible = true;
            }
            else {
                this.rank.$children[i].visible = false;
                this.assemble.$children[i].visible = false;
                this.dataGroup.$children[i].visible = false;
            }
            this.panzi.$children[i].visible = false;
            this.shiwu.$children[i].visible = false;
        }
        this.clickImageArr.map(function (item, index) {
            item.x = _this.clickImagePosArr[index].x;
            item.y = _this.clickImagePosArr[index].y;
            item.visible = true;
        });
    };
    //点击题目
    Index.prototype.subjectFun = function () {
        this.playMusic("panda_click");
        this.hint.visible = true;
        this.tipSub.source = "fangda" + this.sunNum + "_png";
    };
    //点击答案
    Index.prototype.resultFun = function () {
        this.playMusic("panda_click");
        this.resultMask.visible = true;
        this.tipResult.source = "xiti" + this.sunNum + "_png";
    };
    //选择答案
    Index.prototype.clickResult = function (e) {
        var _this = this;
        if (e.target.name != "group") {
            this.playMusic("panda_click");
            //禁止点击
            this.rank.touchChildren = false;
            this.assemble.touchChildren = false;
            //还原位置使用
            var len = this.rank.$children[this.sunNum - 1].$children.length;
            this.clickImageArr.push(e.target);
            this.clickImagePosArr.push({ x: e.target.x, y: e.target.y });
            // 添加答案
            this.isResult.push(e.target.source.split("_")[0]);
            // console.log(this.dataGroup);
            var img = this.dataGroup.$children[this.sunNum - 1].$children[this.clickCount - 1];
            var x = this.dataGroup.x + img.x - e.target.parent.x - e.target.parent.parent.x + (img.width - e.target.width) / 2;
            var y = this.dataGroup.y + img.y - e.target.parent.y - e.target.parent.parent.y + (img.height - e.target.height) / 2;
            egret.Tween.get(e.target).to({ x: x, y: y }, 500).wait(100).call(function () {
                if (_this.sunNum == 1) {
                    _this.mc.x = 1050;
                    _this.mc.y = 930;
                }
                if (_this.clickCount >= len) {
                    _this.clickCount = 1;
                    _this.isSuccessFun();
                }
                else {
                    _this.clickCount++;
                    _this.rank.touchChildren = true;
                    _this.assemble.touchChildren = true;
                    _this.revise.visible = true;
                }
            }, this);
        }
    };
    //喂食物
    Index.prototype.clickShiwuFun = function (e) {
        var _this = this;
        if (e.target.name != "group") {
            if (this.sunNum == 1) {
                this.removeChild(this.mc);
            }
            this.playMusic("panda_click");
            var event = e.target;
            this.shiwu.touchChildren = false;
            this.clickImageArr.push(e.target);
            this.clickImagePosArr.push({ x: e.target.x, y: e.target.y });
            var x = 960 - (e.target.parent.x + e.target.parent.parent.x) - e.target.width / 2;
            var y = 700 - (e.target.parent.y + e.target.parent.parent.y) - e.target.height / 2;
            this.animationFun(this.file);
            this.playMusic("panda_chi");
            egret.Tween.get(e.target).to({ x: x, y: y }, 300).wait(100).call(function () {
                _this.pandas.visible = false;
                event.visible = false;
            }, this);
        }
    };
    //判断对错
    Index.prototype.isSuccessFun = function () {
        console.log(this.isResult.sort());
        console.log(this.resultArr[this.sunNum - 1].sort());
        var isSuccess = false;
        this.revise.visible = false;
        for (var j = 0; j < this.isResult.length; j++) {
            var isBool = this.isResult.sort()[j] == this.resultArr[this.sunNum - 1].sort()[j];
            if (!isBool) {
                isSuccess = isBool;
                break;
            }
            else {
                isSuccess = isBool;
            }
        }
        console.log(isSuccess);
        isBool ? this.successFun() : this.errorFun();
    };
    Index.prototype.successFun = function () {
        // alert("回答正确");
        this.shiwu.touchEnabled = true;
        this.resultImg.visible = true;
        for (var i = 0; i < this.panzi.$children.length; i++) {
            if ((this.sunNum - 1) == i) {
                this.panzi.$children[i].visible = true;
                this.shiwu.$children[i].visible = true;
            }
            else {
                this.panzi.$children[i].visible = false;
                this.shiwu.$children[i].visible = false;
            }
        }
    };
    Index.prototype.errorFun = function () {
        // alert("回答错误");
        // this.bombTween.play(0)
        var _this = this;
        egret.Tween.get(this.bomb).to({ y: 740 }, 500).call(function () {
            _this.animationFun(_this.huoAnimate);
        });
    };
    //手指
    Index.prototype.cursorFun = function (x, y) {
        if (x === void 0) { x = 200; }
        if (y === void 0) { y = 400; }
        if (this.mc)
            if (this.mc.parent) {
                this.removeChild(this.mc);
            }
        var data = RES.getRes("shouzhi_json");
        var txtr = RES.getRes("shouzhi_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("shouzhi"));
        this.addChild(this.mc);
        this.mc.play(-1);
        this.mc.x = x;
        this.mc.y = y;
    };
    // 动画
    Index.prototype.animationFun = function (dbObj) {
        var _this = this;
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData = RES.getRes(dbObj.textureData1);
        var texture = RES.getRes(dbObj.texture1);
        // 
        var egretFactoryA = new dragonBones.EgretFactory();
        egretFactoryA.parseDragonBonesData(dragonbonesData);
        egretFactoryA.parseTextureAtlasData(textureData, texture);
        var armature = egretFactoryA.buildArmatureDisplay(dbObj.name);
        dbObj.dom ? this[dbObj.dom].addChild(armature) : this.addChild(armature);
        // armature.x = ;
        if (dbObj.name == "pandaPlay") {
            armature.y = 30;
            armature.scaleX = 2;
            armature.scaleY = 2;
        }
        else if (dbObj.name == "dianhuo") {
            armature.x = 190;
            armature.y = 10;
            armature.scaleX = 2;
            armature.scaleY = 2;
        }
        else if (dbObj.name == "bomp") {
            armature.scaleX = 2;
            armature.scaleY = 2;
            this.playMusic("panda_bz");
            setTimeout(function () {
                _this.pandas.source = "pandaImgError_png";
            }, 500);
        }
        else if (dbObj.name == "liulei") {
            armature.y = -100;
            armature.scaleX = 2;
            armature.scaleY = 2;
        }
        else if (dbObj.name == "yanhua") {
            armature.scaleX = 2.5;
            armature.scaleY = 2.5;
        }
        armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count);
        armature.addEventListener(dragonBones.EventObject.COMPLETE, function () {
            dbObj.dom ? _this[dbObj.dom].removeChild(armature) : _this.removeChild(armature);
            if (dbObj.name == "pandaPlay") {
                _this.pandas.visible = true;
                _this.shiwu.touchChildren = true;
                if (_this.clickCount >= _this["shiwu" + _this.sunNum].$children.length) {
                    _this.clickCount = 1;
                    if (_this.sunNum >= 4) {
                        _this.pandas.visible = false;
                        _this.gameOver.visible = true;
                        _this.animationFun(_this.stream);
                        _this.animationFun(_this.over);
                    }
                    else {
                        _this.sunNum++;
                        _this.keepMask.visible = true;
                        _this.playMusic("panda_go");
                    }
                }
                else {
                    _this.clickCount++;
                }
            }
            else if (dbObj.name == "dianhuo") {
                _this.animationFun(_this.bombAinamate);
                _this.bomb.y = 1085;
            }
            else if (dbObj.name == "bomp") {
                _this.keep.visible = true;
                _this.playMusic("panda_error");
            }
        }, this);
        return armature;
    };
    //撤销
    Index.prototype.reviseFun = function () {
        var _this = this;
        if (this.clickCount > 1) {
            this.playMusic("panda_click");
            var index = this.clickImageArr.length - 1;
            var x = this.clickImagePosArr[index].x;
            var y = this.clickImagePosArr[index].y;
            egret.Tween.get(this.clickImageArr[index]).to({ x: x, y: y }, 300).call(function () {
                _this.clickImageArr.splice(index, 1);
                _this.clickImagePosArr.splice(index, 1);
                _this.clickCount--;
                if (_this.clickCount <= 1) {
                    _this.revise.visible = false;
                }
            });
        }
    };
    //开始 暂停 背景音乐
    Index.prototype.musicFun = function () {
        if (this.isMusic) {
            this.music_bj.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.music_bj = this.panda_bj.play(0, -1);
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
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index", ["eui.UIComponent", "egret.DisplayObject"]);
