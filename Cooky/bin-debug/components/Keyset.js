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
var Keyset = (function (_super) {
    __extends(Keyset, _super);
    function Keyset(cooky, x, y) {
        var _this = _super.call(this) || this;
        _this.skinName = "KeysetSkin";
        _this.cooky = cooky;
        _this.x = 0;
        _this.y = 0;
        console.log;
        _this.keySet.x = x;
        _this.keySet.y = y;
        return _this;
    }
    Keyset.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Keyset.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        for (var i = 0; i < 10; i++) {
            this["key" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickKeyFun, this);
        }
        this.keyRevise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
        this.keyOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
    };
    Keyset.prototype.clickKeyFun = function (e) {
        var name = e.target.source.split("_")[0];
        console.log(this.cooky);
        if (this.cooky.clickLabel.text.length < 4) {
            this.cooky.clickLabel.text += name.split("key")[1];
        }
    };
    Keyset.prototype.reviseFun = function (e) {
        this.cooky.clickLabel.text = "";
    };
    Keyset.prototype.submitFun = function (e) {
        this.cooky.jianpan.play(0, 1);
        this.cooky.uradBorder.visible = false;
        this.cooky.ormosiaBorder.visible = false;
        this.cooky.removeChild(this);
    };
    return Keyset;
}(eui.Component));
__reflect(Keyset.prototype, "Keyset", ["eui.UIComponent", "egret.DisplayObject"]);
