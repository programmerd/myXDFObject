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
var RandomClass = (function (_super) {
    __extends(RandomClass, _super);
    function RandomClass(KingKong, random) {
        var _this = _super.call(this) || this;
        _this.randomList = new eui.List();
        _this.list = [];
        _this.time = 0;
        _this.interval = null;
        _this.randomCount = 0;
        _this.intervalFun = function () {
            _this.randomScroll.viewport.scrollV += 3;
            console.log(_this.time);
            if (_this.time >= 11 && _this.randomScroll.viewport.scrollV >= _this.randomCount) {
                _this.randomScroll.viewport.scrollV = _this.randomCount;
                clearInterval(_this.interval);
                _this.KingKong.beamButton(true);
            }
            else if (_this.randomScroll.viewport.scrollV >= _this.randomList.height - 40) {
                _this.randomScroll.viewport.scrollV = 0;
                _this.time += 5;
                clearInterval(_this.interval);
                _this.interval = setInterval(_this.intervalFun, _this.time);
            }
        };
        _this.skinName = "RandomClassSkin";
        _this.randomCount = random * 40;
        _this.KingKong = KingKong;
        return _this;
    }
    RandomClass.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RandomClass.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.start();
    };
    RandomClass.prototype.start = function () {
        var exml = "\n\t\t\t<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<e:Skin class=\"RandomLabel\" width=\"33\" height=\"40\" xmlns:e=\"http://ns.egret.com/eui\">\n\t<e:Label text=\"{data}\" x=\"0\" y=\"0\" width=\"33\" height=\"40\" fontFamily=\"fz\" bold=\"true\" verticalAlign=\"middle\" textAlign=\"center\" size=\"40\" textColor=\"0x52f9fe\"/>\n</e:Skin>\n\t\t";
        this.randomScroll.verticalScrollBar.autoVisibility = false;
        this.randomScroll.verticalScrollBar.visible = false;
        this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.randomList.dataProvider = new eui.ArrayCollection(this.list);
        this.randomGroup.addChild(this.randomList);
        this.randomList.itemRendererSkinName = exml;
        this.randomAnimate();
    };
    RandomClass.prototype.randomAnimate = function () {
        clearInterval(this.interval);
        this.interval = setInterval(this.intervalFun, this.time);
    };
    return RandomClass;
}(eui.Component));
__reflect(RandomClass.prototype, "RandomClass", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RandomClass.js.map