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
var Racing = (function (_super) {
    __extends(Racing, _super);
    function Racing() {
        var _this = _super.call(this) || this;
        //选择 设
        _this.setInputArr = [
            ["国内品牌", "国外品牌"],
            ["学生", "故事书"],
            ["现在小东", "4年前小东"],
        ];
        //正确答案
        _this.resultArr = [
            ["5x+2", "x", "5x+2", "200", "33", "167", "33"],
            ["5x", "11", "8x", "4", "5", "5", "36"],
            ["3x-x", "10", "5", "9"]
        ];
        //存放第n题第n排对错
        _this.submitArr = [[], [], []];
        //存放粒子特效
        _this.particleArr = [];
        _this.overAnimationArr = [];
        _this.egretFactory = dragonBones.EgretFactory.factory;
        //音乐
        _this.rac_bj = RES.getRes("rac_bj_mp3"); //背景
        _this.rac_ok = RES.getRes("rac_ok_mp3"); //ok
        _this.rac_go = RES.getRes("rac_go_mp3"); //出发
        _this.rac_start_fire = RES.getRes("rac_start_fire_mp3"); //启动不出发
        _this.rac_go_stop = RES.getRes("rac_go_stop_mp3"); //终点刹车
        _this.rac_fete = RES.getRes("rac_fete_mp3"); //终点欢乐
        _this.rac_error = RES.getRes("rac_error_mp3"); //终点欢乐
        _this.rac_sub_1 = RES.getRes("rac_sub_1_mp3"); //读题1
        _this.rac_sub_2 = RES.getRes("rac_sub_2_mp3"); //读题2
        _this.rac_sub_3 = RES.getRes("rac_sub_3_mp3"); //读题3
        _this.isMusic = true;
        _this.skinName = "RacingSkin";
        _this.addEventListener(egret.Event.ENTER_FRAME, function () {
            dragonBones.WorldClock.clock.advanceTime(0.03);
        }, _this);
        return _this;
    }
    Racing.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Racing.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.tipGroup.touchChildren = false;
        this.openStart.visible = true;
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this); //GO
        this.previous.addEventListener(egret.TouchEvent.TOUCH_TAP, this.previousFun, this);
        this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextFun, this);
        this.options.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setOptionFun, this);
        this.racLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.labelFun, this);
        this.closeMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.recommence, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.result.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.tipGroup.visible = true; }, this);
        this.tipGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.tipGroup.visible = false; }, this);
        this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
        this.startpic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this);
        this.startpic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this);
        // this.start()
    };
    Racing.prototype.start = function () {
        this.subjectNum = 1; //第一题
        this.tipGroup.visible = false;
        this.openStart.visible = false;
        this.switchSub(); //切换资源
        this.music_bj = this.rac_bj.play(0, -1);
    };
    //上一关
    Racing.prototype.previousFun = function () {
        this.next.visible = true;
        this.subjectNum--;
        this.switchSub();
        if (this.subjectNum <= 1) {
            this.previous.visible = false;
        }
    };
    //下一关
    Racing.prototype.nextFun = function () {
        this.previous.visible = true;
        this.subjectNum++;
        this.switchSub();
        if (this.subjectNum >= 3) {
            this.next.visible = false;
        }
    };
    // 切换资源
    Racing.prototype.switchSub = function () {
        this.subject.source = "subject" + this.subjectNum + "_png";
        this.col1.source = "col_" + this.subjectNum + "_1_png";
        this.col2.source = "col_" + this.subjectNum + "_2_png";
        this.col3.source = "col_" + this.subjectNum + "_3_png";
        this.col4.source = "col_" + this.subjectNum + "_4_png";
        this.option1.source = "option_" + this.subjectNum + "_1_png";
        this.option2.source = "option_" + this.subjectNum + "_2_png";
        this.resultTip.source = "tip" + this.subjectNum + "_png";
        for (var i = 1; i < 4; i++) {
            if (this.subjectNum == i) {
                this["racLabel" + i].visible = true;
            }
            else {
                this["racLabel" + i].visible = false;
            }
        }
        this.reviseLabelText();
    };
    //重置label的值
    Racing.prototype.reviseLabelText = function () {
        for (var i = 0; i < this["racLabel" + this.subjectNum].$children.length; i++) {
            this["racLabel" + this.subjectNum].$children[i].text = "输入";
        }
        this.setInput.text = "点击下面按钮";
        this.playMusic("rac_sub_" + this.subjectNum);
        this.removeParticle();
    };
    //设
    Racing.prototype.setOptionFun = function (e) {
        // console.log(e.target.source.split("_").reverse()[1])
        if (e.target.name != "group") {
            var j = e.target.source.split("_").reverse()[1];
            this.setInput.text = this.setInputArr[this.subjectNum - 1][j - 1];
        }
    };
    //label点击事件
    Racing.prototype.labelFun = function (e) {
        if (e.target.type) {
            this.clickLabel = e.target;
            var x = this.racLabel.x + e.target.x;
            var y = this.racLabel.y + e.target.y;
            this.addChild(new keySet(this, x - 230, y - 200));
        }
    };
    //粒子特效
    Racing.prototype.fireAnimation = function (texture, config, index) {
        if (this.particleArr[index]) {
            this["rac" + (index + 1)].removeChild(this.particleArr[index]);
        }
        var texture = RES.getRes(texture);
        var config = RES.getRes(config);
        var system = new particle.GravityParticleSystem(texture, config);
        this.particleArr[index] = system;
        this["rac" + (index + 1)].addChildAt(system, 0);
        system.x = 30;
        system.y = 40;
        // var tw = egret.Tween.get(system, { loop: true });
        // tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
        system.start(-1);
    };
    //结束粒子特效
    Racing.prototype.overAnimation = function (texture, config, x, y) {
        if (x === void 0) { x = 900; }
        if (y === void 0) { y = 500; }
        var texture = RES.getRes(texture);
        var config = RES.getRes(config);
        var system = new particle.GravityParticleSystem(texture, config);
        this.overAnimationArr.push(system);
        this.addChild(system);
        system.x = x;
        system.y = y;
        // var tw = egret.Tween.get(system, { loop: true });
        // tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
        system.start(-1);
    };
    //mc 序列帧动画
    Racing.prototype.mistAnimation = function (index) {
        var data = RES.getRes("heiyan01_json");
        var txtr = RES.getRes("heiyan01_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData("heiyan"));
        // this.particleArr[index] = mc;
        this["rac" + (index + 1)].addChildAt(mc, 0);
        mc.play(4);
        mc.x = -50;
        mc.y = -15;
        mc.addEventListener(egret.Event.COMPLETE, function () {
            this["rac" + (index + 1)].removeChild(mc);
        }, this);
    };
    //龙骨动画
    Racing.prototype.pokeAnimation = function (dbObj) {
        if (this.armature) {
            this.gameover.removeChild(this.armature.getDisplay());
        }
        console.log(dbObj);
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData1 = RES.getRes(dbObj.textureData1);
        var texture1 = RES.getRes(dbObj.texture1);
        // let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
        this.egretFactory.parseDragonBonesData(dragonbonesData);
        this.egretFactory.parseTextureAtlasData(textureData1, texture1);
        this.armature = this.egretFactory.buildArmature(dbObj.name);
        var armatureDisplay = this.armature.getDisplay();
        this.gameover.addChild(armatureDisplay);
        armatureDisplay.x = 1000;
        armatureDisplay.y = 500;
        this.armature.animation.gotoAndPlayByFrame(dbObj.name, 1, 1).timeScale = 1;
        dragonBones.WorldClock.clock.add(this.armature); //添加时间钟
        //监听时间钟 只需执行一次 放到了构造中 -->
        //播放完成的回调
        this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
            // console.log("-->", e.target.animation.animationDataList)
            // this.armature.animation.gotoAndStopByProgress(dbObj.name, 1);
            // this.armature.animation.gotoAndStop(dbObj.name, 0);
            // this.gameover.removeChild(armatureDisplay)
            this.overAnimation("xingguang01_png", "xingguang01_json", 1000, 400);
            this.overAnimation("xingguang01_png", "xingguang01_json", 800, 650);
            this.overAnimation("xingguang02_png", "xingguang02_json");
            this.playMusic("rac_fete", -1);
            this.musicFun();
        }, this);
    };
    //GO
    Racing.prototype.submitFun = function () {
        this.playMusic("rac_ok");
        switch (this.subjectNum) {
            case 1:
                this.result1();
                break;
            case 2:
                this.result2();
                break;
            case 3:
                this.result3();
                break;
        }
        this.commitFun();
    };
    Racing.prototype.result1 = function () {
        var label = this["racLabel" + this.subjectNum].$children;
        var result = this.resultArr[this.subjectNum - 1];
        var label2 = label[1].text == result[1] && label[2].text == result[2];
        var label3 = label[1].text == result[2] && label[2].text == result[1];
        //一排
        if (this.setInput.text == "国外品牌" && label[0].text == result[0]) {
            this.submitArr[this.subjectNum - 1][0] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][0] = false;
        }
        //二排
        if ((label2 || label3) && label[3].text == result[3]) {
            this.submitArr[this.subjectNum - 1][1] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][1] = false;
        }
        //三排
        if (label[4].text == result[4]) {
            this.submitArr[this.subjectNum - 1][2] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][2] = false;
        }
        //四排
        if (label[5].text == result[5] && label[6].text == result[6]) {
            this.submitArr[this.subjectNum - 1][3] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][3] = false;
        }
    };
    Racing.prototype.result2 = function () {
        var label = this["racLabel" + this.subjectNum].$children;
        var result = this.resultArr[this.subjectNum - 1];
        var label21 = label[0].text == result[0] && label[1].text == result[1];
        var label22 = label[0].text == result[1] && label[1].text == result[0];
        //一排
        if (this.setInput.text == "学生") {
            this.submitArr[this.subjectNum - 1][0] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][0] = false;
        }
        //二排
        if ((label21 || label22) && label[2].text == result[2] && label[3].text == result[3]) {
            this.submitArr[this.subjectNum - 1][1] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][1] = false;
        }
        //三排
        if (label[4].text == result[4]) {
            this.submitArr[this.subjectNum - 1][2] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][2] = false;
        }
        //四排
        if (label[5].text == result[5] && label[6].text == result[6]) {
            this.submitArr[this.subjectNum - 1][3] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][3] = false;
        }
    };
    Racing.prototype.result3 = function () {
        var label = this["racLabel" + this.subjectNum].$children;
        var result = this.resultArr[this.subjectNum - 1];
        var label21 = (label[0].text == result[0] || label[0].text == "2x") && label[1].text == result[1];
        var label22 = label[0].text == result[1] && (label[1].text == result[0] || label[1].text == "2x");
        //一排
        if (this.setInput.text == "4年前小东") {
            this.submitArr[this.subjectNum - 1][0] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][0] = false;
        }
        //二排
        if (label21 || label22) {
            this.submitArr[this.subjectNum - 1][1] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][1] = false;
        }
        //三排
        if (label[2].text == result[2]) {
            this.submitArr[this.subjectNum - 1][2] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][2] = false;
        }
        //四排
        if (label[3].text == result[3]) {
            this.submitArr[this.subjectNum - 1][3] = true;
        }
        else {
            this.submitArr[this.subjectNum - 1][3] = false;
        }
    };
    //最终提交
    Racing.prototype.commitFun = function () {
        var _this = this;
        console.log(this.particleArr);
        if (this.submitArr[this.subjectNum - 1].indexOf(false) == -1) {
            this.submitArr[this.subjectNum - 1].map(function (item, index) {
                _this.fireAnimation("saicheweibu01_png", "saicheweibu01_json", index);
            });
            this.racGo.play(0);
            this.playMusic("rac_go");
            setTimeout(function () {
                _this.gameoverFun();
            }, 3100);
        }
        else {
            this.removeParticle();
            this.submitArr[this.subjectNum - 1].map(function (item, index) {
                setTimeout(function () { _this.playMusic("rac_error"); }, 300);
                if (item) {
                    _this.fireAnimation("fire_png", "fire_json", index);
                }
                else {
                    _this.mistAnimation(index);
                }
            });
        }
    };
    //位置重置 移除动画
    Racing.prototype.removeParticle = function () {
        var _this = this;
        this.rac_position.x = 33; //赛车归位
        //移除不用的动画 释放内存
        this.particleArr.map(function (item, index) {
            if (item) {
                _this["rac" + (index + 1)].removeChild(item);
                _this.particleArr[index] = undefined;
            }
        });
    };
    //GAMEOVER
    Racing.prototype.gameoverFun = function () {
        var _this = this;
        this.gameover.visible = true;
        this.opacity.play(0);
        this.playMusic("rac_go_stop");
        setTimeout(function () {
            var dbObj = { dragonbonesData: "rac_ske_json", textureData1: "rac_tex_json", texture1: "rac_tex_png", name: "MovieClip" };
            _this.pokeAnimation(dbObj);
        }, 1500);
    };
    //重新开始
    Racing.prototype.recommence = function () {
        var _this = this;
        if (this.overAnimationArr.length != 0) {
            this.gameover.visible = false;
            this.showFong.alpha = 1;
            this.overAnimationArr.map(function (item, index) {
                _this.removeChild(item);
            });
            this.overAnimationArr = [];
            if (this.armature) {
                this.gameover.removeChild(this.armature.getDisplay());
                this.armature = undefined;
            }
            this.reviseLabelText();
            this.musicFun();
        }
    };
    //音乐
    Racing.prototype.musicFun = function () {
        if (this.isMusic) {
            this.music_bj.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.music_bj = this.rac_bj.play(0, -1);
            this.isMusic = true;
            this.music.source = "music_png";
        }
    };
    //重置
    Racing.prototype.reviseFun = function () {
        window.location.reload();
    };
    //移除并播放音乐
    Racing.prototype.playMusic = function (name, count) {
        if (count === void 0) { count = 1; }
        if (this.racTipMusic) {
            this.racTipMusic.stop();
        }
        this.racTipMusic = this[name].play(0, count);
    };
    return Racing;
}(eui.Component));
__reflect(Racing.prototype, "Racing", ["eui.UIComponent", "egret.DisplayObject"]);
