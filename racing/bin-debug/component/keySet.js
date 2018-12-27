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
var keySet = (function (_super) {
    __extends(keySet, _super);
    function keySet(props, x, y) {
        var _this = _super.call(this) || this;
        _this.skinName = "keySetSkin";
        _this.keySet = props;
        _this.keysetGroup.x = x;
        _this.keysetGroup.y = y;
        _this.first = true;
        return _this;
    }
    keySet.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    keySet.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.keySetFun();
    };
    keySet.prototype.keySetFun = function () {
        this.keyDown.touchChildren = true;
        this.keyDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.keyDownFun, this);
        this.keyOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
        this.closeKeySet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
        this.keyRevise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
    };
    //键盘按下
    keySet.prototype.keyDownFun = function (e) {
        if (this.first) {
            this.first = false;
            this.keySet.clickLabel.text = "";
        }
        if (!e.target.$Group && this.keySet.clickLabel.text.length < 7) {
            // console.log(e.target.source.split("_")[0].split("key").reverse()[0])
            var text = e.target.source.split("_")[0].split("key").reverse()[0];
            this.keySet.clickLabel.text += text;
        }
    };
    keySet.prototype.reviseFun = function (e) {
        this.keySet.clickLabel.text = "";
    };
    keySet.prototype.submitFun = function (e) {
        if (this.keySet.clickLabel.text == "") {
            this.keySet.clickLabel.text = "输入";
        }
        this.keySet.removeChild(this);
    };
    return keySet;
}(eui.Component));
__reflect(keySet.prototype, "keySet", ["eui.UIComponent", "egret.DisplayObject"]);
