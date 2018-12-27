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
var cacl = (function (_super) {
    __extends(cacl, _super);
    function cacl(Index, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = _super.call(this) || this;
        _this.value = 0;
        _this.towValue = 0;
        _this.valueArr = [];
        _this.typeArr = [];
        _this.count = 0;
        _this.submitNum = 0;
        _this.skinName = "caclSkin";
        _this.cacl = Index;
        _this.caclSkin.x = x;
        _this.caclSkin.y = y;
        return _this;
    }
    cacl.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    cacl.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.start();
    };
    cacl.prototype.start = function () {
        var _this = this;
        this.caclGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.keyDown, this);
        this.add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addFun, this);
        this.minus.addEventListener(egret.TouchEvent.TOUCH_TAP, this.minusFun, this);
        this.ride.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rideFun, this);
        this.remove.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFun, this);
        this.ac.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAC, this);
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
        this.closeCacl.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.cacl.removeChild(_this); }, this);
    };
    //按键
    cacl.prototype.keyDown = function (e) {
        if (this.typeArr[this.typeArr.length - 1] == "=") {
            this.settingValue();
        }
        this.sum0.visible = false;
        var text = e.target.source.split("_")[0].split("cacl")[1];
        this.sum.text = parseInt(this.sum.text + text) + "";
        this.value = parseInt(this.value + text);
    };
    //更改value
    cacl.prototype.settingValue = function () {
        if (this.submitNum < 1) {
            this.value = 0;
            this.submitNum += 1;
        }
    };
    //加
    cacl.prototype.addFun = function () {
        this.computed("+");
    };
    //减
    cacl.prototype.minusFun = function () {
        this.computed("-");
    };
    //乘
    cacl.prototype.rideFun = function () {
        this.computed("x");
    };
    //除
    cacl.prototype.removeFun = function () {
        this.computed("÷");
    };
    //归零
    cacl.prototype.clickAC = function () {
        this.sum.text = "0";
        this.sum0.text = "0";
        this.sum0.visible = false;
        this.value = 0;
        this.count = 0;
        this.typeArr = [];
    };
    //等于
    cacl.prototype.submitFun = function () {
        this.computed("=");
        this.value = parseInt(this.sum0.text);
        this.submitNum = 0;
        this.count = 0;
    };
    //计算
    cacl.prototype.computed = function (type) {
        // this. value1 = parseInt(this.sum.text);
        this.valueArr.push(this.value);
        this.typeArr.push(type);
        var total = 0;
        var sum0Value = parseInt(this.sum0.text);
        console.log("-->", this.count);
        if (this.count >= 1) {
            this.towValue = this.value;
            switch (this.typeArr[this.typeArr.length - 2]) {
                case "+":
                    total = sum0Value + this.towValue;
                    break;
                case "-":
                    total = sum0Value - this.towValue;
                    break;
                case "x":
                    total = sum0Value * this.towValue;
                    break;
                case "÷":
                    total = sum0Value / this.towValue;
                    break;
            }
            this.sum0.text = total + "";
        }
        else {
            console.log("初始化");
            this.sum0.text = this.value + "";
        }
        // console.log("==>", this.sum0.text)
        // console.log("==>", this.typeArr[this.typeArr.length - 2])
        // console.log("==>", this.towValue)
        // console.log(this.typeArr)
        this.sum.text = "";
        this.sum0.visible = true;
        this.value = 0;
        this.count++;
    };
    return cacl;
}(eui.Component));
__reflect(cacl.prototype, "cacl", ["eui.UIComponent", "egret.DisplayObject"]);
