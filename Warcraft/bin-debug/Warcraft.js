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
var Warcraft = (function (_super) {
    __extends(Warcraft, _super);
    function Warcraft() {
        var _this = _super.call(this) || this;
        //当前题目
        _this.subNum = 1;
        _this.isMusic = true;
        _this.ms_bj = RES.getRes("ms_bj_mp3");
        _this.ms_subject = RES.getRes("ms_subject_mp3");
        _this.ms_fs = RES.getRes("ms_fs_mp3"); //发射
        _this.ms_bf = RES.getRes("ms_bf_mp3"); //报复
        _this.ms_bl = RES.getRes("ms_bl_mp3"); //玻璃
        _this.ms_bz = RES.getRes("ms_bz_mp3"); //爆炸
        _this.ms_cj = RES.getRes("ms_cj_mp3"); //惨叫
        _this.ms_doud = RES.getRes("ms_doud_mp3"); //抖动
        _this.ms_jn = RES.getRes("ms_jn_mp3"); //聚能
        _this.ms_sl = RES.getRes("ms_sl_mp3"); //胜利
        _this.ms_yd = RES.getRes("ms_yd_mp3"); //移动
        //答案
        _this.resultRrr = [
            [10, 10, 1, 19, 10, 10, 19],
            [20, 20, 1, 39, 20, 20, 39],
            [153, 11, 153, 11, 13, 10, 11, 143, 11, 143, 11, 13],
        ];
        _this.resultRrrError = [[], [], []];
        //动画
        _this.egretFactory = dragonBones.EgretFactory.factory;
        _this.warcraftNormal = { dragonbonesData: "stand_ske_json", textureData1: "stand_tex_json", texture1: "stand_tex_png", name: "Armature", count: -1 };
        _this.warcraftBaofu = { dragonbonesData: "hit_ske_json", textureData1: "hit_tex_json", texture1: "hit_tex_png", name: "baofu", count: 1 };
        _this.warcraftBomb = { dragonbonesData: "bomb_ske_json", textureData1: "bomb_tex_json", texture1: "bomb_tex_png", name: "bomb", count: 1 };
        _this.warcraftOver = { dragonbonesData: "over_ske_json", textureData1: "over_tex_json", texture1: "over_tex_png", name: "over", count: -1 };
        _this.skinName = "WarcraftSkin";
        _this.addEventListener(egret.Event.ENTER_FRAME, function () {
            dragonBones.WorldClock.clock.advanceTime(0.03);
        }, _this);
        return _this;
    }
    Warcraft.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Warcraft.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.clickFire.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fireFun, this);
        this.write.addEventListener(egret.TouchEvent.TOUCH_TAP, this.writeLiabel, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
        this.tipAsk.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.subTip.visible = true;
        }, this);
        this.subTip.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.subTip.visible = false;
        }, this);
        this.gameOverMask.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.gameOver.visible = false;
            _this.start();
        }, this);
        this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.gameOver.visible = false;
            _this.endStart.visible = false;
            _this.start();
        }, this);
        // this.start();
    };
    Warcraft.prototype.start = function () {
        this.subNum = 1;
        this.targetGame();
        this.music_bj = this.ms_bj.play(0, -1);
        this.playMusic("ms_subject");
    };
    //粒子特效
    Warcraft.prototype.overAnimation = function (texture, config, x, y) {
        if (x === void 0) { x = 900; }
        if (y === void 0) { y = 500; }
        var texture = RES.getRes(texture);
        var config = RES.getRes(config);
        var system = new particle.GravityParticleSystem(texture, config);
        this.addChild(system);
        system.x = x;
        system.y = y;
        // var tw = egret.Tween.get(system, { loop: true });
        // tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
        system.start(-1);
    };
    //mc 序列帧动画
    Warcraft.prototype.energyAnimation = function () {
        var data = RES.getRes("huiju_json");
        var txtr = RES.getRes("huiju_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData("huiju"));
        // this.particleArr[index] = mc;
        this.energyGroup.addChild(mc);
        mc.play(3);
        mc.x = 0;
        mc.y = 0;
        mc.addEventListener(egret.Event.COMPLETE, function () {
            var _this = this;
            this.energyGroup.removeChild(mc);
            setTimeout(function () { _this.fireAnimation(); }, 500);
        }, this);
    };
    Warcraft.prototype.fireAnimation = function () {
        this.playMusic("ms_fs");
        var data = RES.getRes("jiguang_mc_json");
        var txtr = RES.getRes("jiguang_mc_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData("jiguang_mc"));
        // this.particleArr[index] = mc;
        this.fashe.addChild(mc);
        this.doudong.play(0);
        mc.play(1);
        mc.x = 0;
        mc.y = 30;
        mc.addEventListener(egret.Event.COMPLETE, function () {
            this.fashe.removeChild(mc);
            if (this.subNum >= 3) {
                this.playMusic("ms_bz");
                this.pokeAnimation(this.warcraftBomb);
            }
            else {
                this.ms_doud.play(0, 1);
                this.playMusic("ms_cj");
                this.subNum++;
                this.targetGame();
            }
        }, this);
    };
    Warcraft.prototype.leihenAnimation = function () {
        var data = RES.getRes("liehen01_mc_json");
        var txtr = RES.getRes("liehen01_tex_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData("liehen"));
        // this.particleArr[index] = mc;
        this.addChild(mc);
        mc.play(1);
        mc.x = 1000;
        mc.y = 500;
        mc.addEventListener(egret.Event.COMPLETE, function () {
            console.log("动画播放完成1");
            this.removeChild(mc);
        }, this);
    };
    //龙骨动画
    Warcraft.prototype.pokeAnimation = function (dbObj) {
        var _this = this;
        if (this.armature) {
            this.warcraftGroup.removeChild(this.armature.getDisplay());
        }
        // console.log(dbObj)
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData1 = RES.getRes(dbObj.textureData1);
        var texture1 = RES.getRes(dbObj.texture1);
        // let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
        this.egretFactory.parseDragonBonesData(dragonbonesData);
        this.egretFactory.parseTextureAtlasData(textureData1, texture1);
        this.armature = this.egretFactory.buildArmature(dbObj.name);
        var armatureDisplay = this.armature.getDisplay();
        this.warcraftGroup.addChild(armatureDisplay);
        if (dbObj.name == "baofu") {
            var tw = egret.Tween.get(this.warcraftGroup, { loop: false });
            this.playMusic("ms_yd");
            tw.to({ x: 1052 }, 300)
                .wait(700)
                .call(function () {
                _this.leihenAnimation();
                _this.aida.play(0);
                _this.ms_bf.play(0, 1);
                _this.playMusic("ms_bl");
            })
                .wait(500)
                .to({ x: 1586 }, 1000).call(function () {
                _this.clickFire.enabled = true;
            });
        }
        armatureDisplay.x = 380;
        armatureDisplay.y = 350;
        this.armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 1;
        dragonBones.WorldClock.clock.add(this.armature); //添加时间钟
        //监听时间钟 只需执行一次 放到了构造中 -->
        //播放完成的回调
        this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
            console.log("动画播放完成");
            this.pokeAnimation(this.warcraftNormal);
            this.resultRrrError[this.subNum - 1] = [];
            if (dbObj.name == "bomb") {
                if (this.subNum >= 3) {
                    this.gameOverFun();
                }
                else {
                    this.subNum++;
                    this.targetGame();
                }
            }
        }, this);
    };
    //结束动画
    Warcraft.prototype.gongxiAnimation = function (dbObj) {
        if (this.armatureOver) {
            this.gameOver.removeChild(this.armatureOver.getDisplay());
        }
        this.gameOver.visible = true;
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData1 = RES.getRes(dbObj.textureData1);
        var texture1 = RES.getRes(dbObj.texture1);
        // let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
        this.egretFactory.parseDragonBonesData(dragonbonesData);
        this.egretFactory.parseTextureAtlasData(textureData1, texture1);
        this.armatureOver = this.egretFactory.buildArmature(dbObj.name);
        var armatureDisplay = this.armatureOver.getDisplay();
        this.gameOver.addChildAt(armatureDisplay, 0);
        this.armatureOver.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 1;
        armatureDisplay.x = 960;
        armatureDisplay.y = 540;
        dragonBones.WorldClock.clock.add(this.armatureOver); //添加时间钟
        //监听时间钟 只需执行一次 放到了构造中 -->
        //播放完成的回调
        this.armatureOver.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
        }, this);
    };
    //换题
    Warcraft.prototype.targetGame = function () {
        this.clickFire.enabled = true;
        this.pokeAnimation(this.warcraftNormal);
        this.subject.source = "subject" + this.subNum + "_png";
        this.subjectMax.source = "resultMax" + this.subNum + "_png";
        this.subjectMin.source = "resultMin" + this.subNum + "_png";
        //显示输入框
        for (var i = 1; i < 4; i++) {
            if (this.subNum == i) {
                this["write" + i].visible = true;
            }
            else {
                this["write" + i].visible = false;
            }
        }
        for (var i = 0; i < this["write" + this.subNum].$children.length; i++) {
            this["write" + this.subNum].$children[i].text = "";
        }
    };
    //开炮
    Warcraft.prototype.fireFun = function () {
        this.clickFire.enabled = false;
        var writeArr = this["write" + this.subNum].$children;
        // console.log("答案 :" + this["write" + this.subNum].$children)
        for (var i = 0; i < writeArr.length; i++) {
            if (writeArr[i].text != this.resultRrr[this.subNum - 1][i]) {
                this.resultRrrError[this.subNum - 1].push(writeArr[i]);
            }
        }
        console.log(this.resultRrrError);
        if (this.resultRrrError[this.subNum - 1].length == 0) {
            this.playMusic("ms_jn");
            this.energyAnimation();
        }
        else {
            this.pokeAnimation(this.warcraftBaofu);
            // this.energyAnimation();
        }
    };
    //Label答题事件
    Warcraft.prototype.writeLiabel = function (e) {
        if (e.target.type) {
            this.clickLabel = e.target;
            var x = e.target.x - 350;
            if (x < 0) {
                x = 50;
            }
            this.addChild(new Keyset(this, x, e.target.y + 520));
        }
    };
    //通关
    Warcraft.prototype.gameOverFun = function () {
        this.playMusic("ms_sl", -1);
        this.gongxiAnimation(this.warcraftOver);
    };
    //音乐
    Warcraft.prototype.musicFun = function () {
        if (this.isMusic) {
            this.music_bj.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.music_bj = this.ms_bj.play(0, -1);
            this.isMusic = true;
            this.music.source = "music_png";
        }
    };
    //重置
    Warcraft.prototype.reviseFun = function () {
        window.location.reload();
    };
    //移除并播放音乐
    Warcraft.prototype.playMusic = function (name, count) {
        if (count === void 0) { count = 1; }
        if (this.racTipMusic) {
            this.racTipMusic.stop();
        }
        this.racTipMusic = this[name].play(0, count);
    };
    return Warcraft;
}(eui.Component));
__reflect(Warcraft.prototype, "Warcraft", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Warcraft.js.map