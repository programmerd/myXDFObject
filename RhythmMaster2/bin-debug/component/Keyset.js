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
    function Keyset(cacl, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = _super.call(this) || this;
        _this.skinName = "KeysetSkin";
        _this.cacl = cacl;
        _this.x = 0;
        _this.y = 0;
        // console.log(x, y)
        _this.keySetGroup.x = x;
        _this.keySetGroup.y = y;
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
        this.cacl.clickLabel.text = "";
        this.keyRevise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
        this.keyOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
        this.RectBj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
        this.index = this.cacl.labelGroup.$children.indexOf(this.cacl.clickLabel);
    };
    Keyset.prototype.clickKeyFun = function (e) {
        var name = e.target.source.split("_")[0];
        // console.log(this.cacl.clickLabel.text)
        if (this.cacl.clickLabel.text.length < 1) {
            this.cacl.resultNum = name.split("key")[1];
            // this.cacl.clickLabel.text += name.split("key")[1];
            var subImg = this.cacl.showNumGroup.$children;
            subImg[this.index].source = name.split("key")[1] + "_png";
        }
    };
    Keyset.prototype.reviseFun = function (e) {
        // this.cacl.clickLabel.text = ""
        this.cacl.resultNum = null;
        var subImg = this.cacl.showNumGroup.$children;
        subImg[this.index].source = "";
    };
    Keyset.prototype.submitFun = function (e) {
        this.cacl.judgeResult();
        // if (this.cacl.clickLabel.text != "") {
        // 	this.cacl.clickLabel.text = parseInt(this.cacl.clickLabel.text) + "";
        // } else {
        // 	this.cacl.clickLabel.text = ""
        // }
        this.cacl.removeChild(this);
    };
    return Keyset;
}(eui.Component));
__reflect(Keyset.prototype, "Keyset", ["eui.UIComponent", "egret.DisplayObject"]);
