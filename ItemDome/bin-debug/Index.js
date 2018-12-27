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
        _this.subNum = new Value(1); //定义可监听的数字
        //动画
        _this.cursor = {
            take: "tickling",
            dom: "keySetGroupAnimate",
            dragonbonesData: "anjianfankui_ske_json",
            textureData1: "anjianfankui_tex_json",
            texture1: "anjianfankui_tex_png",
            name: "fankui",
            count: 1 //必传
        };
        _this.isMusic = true;
        _this.tq_bj = RES.getRes("tq_bj_mp3");
        _this.skinName = "IndexSkin";
        return _this;
    }
    Index.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Index.prototype.childrenCreated = function () {
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
        this.subNum.addEventListener(Data.DATA, this.changNumber, this); //当数字发生改变时调用
        _super.prototype.childrenCreated.call(this);
        // 开始按钮 等游戏实现后 解开注释使用
        // this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        // 	this.endStart.visible = false;
        // 	this.start();
        // }, this);
        this.start();
    };
    // 开始游戏
    Index.prototype.start = function () {
        //	键盘 计算器x y 坐标可传可不传 默认0,0点
        // 调用小键盘
        // this.addChild(new Keyset(this,0,0))
        // 计算器
        // this.addChild(new cacl(this,100,100));
    };
    //监听数字函数
    Index.prototype.changNumber = function (e) {
        console.log(e.target.value);
        console.log(this.subNum.value);
    };
    //开始 暂停 背景音乐
    Index.prototype.musicFun = function () {
        if (this.isMusic) {
            this.music_bj.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.music_bj = this.tq_bj.play(0, -1);
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
        armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count);
        //监听帧
        armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, function (e) {
            // console.log(e.frameLabel)
        }, this);
        //动画播放完成
        armature.addEventListener(dragonBones.EventObject.COMPLETE, function () {
            if (armature.parent) {
                dbObj.dom ? _this[dbObj.dom].removeChild(armature) : _this.removeChild(armature);
            }
        }, this);
        return armature;
    };
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index", ["eui.UIComponent", "egret.DisplayObject"]);
